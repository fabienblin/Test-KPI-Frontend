import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Investment } from './investment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ShortInfosService } from './short-infos.service';
import { tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class InvestmentService {

	constructor(
		private http: HttpClient,
		private shortInfos: ShortInfosService) { }

	private investmentsUrl = environment.backend_url + "investments/";
	private httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

	getInvestmentList(): Observable<Investment[]> {
		return this.http.get<Investment[]>(this.investmentsUrl);
	}

	getInvestment(id: number): Observable<Investment> {
		const url = this.investmentsUrl + id;
		return this.http.get<Investment>(url).pipe(
			tap((inv: Investment) => this.shortInfos.defineShortInfo("ID: " + inv.id + " - Titre Operation: " + inv.titreoperation))
		);
	}

	getInvestmentListFiltered(filterForm: {filterBy:String, filterVal:String}): Observable<Investment[]> {
		const filterBy = filterForm.filterBy;
		const filterVal = filterForm.filterVal;

		if (filterBy == "" || filterVal == "") {
			this.shortInfos.defineShortInfo("No Filter");
			return this.getInvestmentList();
		} else {
			const url = this.investmentsUrl + "filter/" + filterBy + "/" + filterVal + "/";
			this.shortInfos.defineShortInfo("Filter by " + filterBy + " as " + filterVal)
			return this.http.get<Investment[]>(url);
		}
	}

	updateInvestment(investment: Investment): Observable<any> {
		const url = this.investmentsUrl + investment.id + "/";
		return this.http.put(url, investment, this.httpOptions)
	}

	createInvestment(investment: Investment): Observable<Investment> {
		return this.http.post<Investment>(this.investmentsUrl, investment, this.httpOptions)
	}

	deleteInvestment(id: number): Observable<Investment> {
		const url = this.investmentsUrl + id;
		return this.http.delete<Investment>(url, this.httpOptions);
	}
}
