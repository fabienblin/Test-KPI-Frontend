import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Investment } from './investment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ShortInfosService } from './short-infos.service';
import { PageTitleService } from './page-title.service';
import { tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class InvestmentService {

	constructor(
		private http: HttpClient,
		private shortInfos: ShortInfosService,
		private pageTitle: PageTitleService) { }

	private investmentsUrl = environment.backend_url + "investments/";
	private httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

	getInvestments(): Observable<Investment[]> {
		return this.http.get<Investment[]>(this.investmentsUrl);
	}

	getInvestment(id: number): Observable<Investment> {
		const url = this.investmentsUrl + id;
		return this.http.get<Investment>(url).pipe(
			tap((inv: Investment) => this.shortInfos.defineShortInfo("ID: " + inv.id + " - Titre Operation: " + inv.titreoperation))
		);
	}

	updateInvestment(investment: Investment): Observable<any> {
		return this.http.put(this.investmentsUrl, investment, this.httpOptions)
	}

	addInvestment(investment: Investment): Observable<Investment> {
		return this.http.post<Investment>(this.investmentsUrl, investment, this.httpOptions)
	}

	deleteInvestment(id: number): Observable<Investment> {
		const url = this.investmentsUrl + id;
		console.log(url);

		return this.http.delete<Investment>(url, this.httpOptions);
	}
}
