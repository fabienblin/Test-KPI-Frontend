import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Investment } from './investment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class InvestmentService {

	constructor(private http: HttpClient) { }

	private investmentsUrl = environment.backend_url+"investments/"
	private httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

	getInvestments(): Observable<Investment[]> {
		return this.http.get<Investment[]>(this.investmentsUrl);
	}

	getInvestment(id: number): Observable<Investment> {
		return this.http.get<Investment>(this.investmentsUrl+id);
	}

	updateInvestment(investment: Investment): Observable<any> {
		return this.http.put(this.investmentsUrl, investment, this.httpOptions)
	}

	addInvestment(investment: Investment): Observable<Investment> {
		return this.http.post<Investment>(this.investmentsUrl, investment, this.httpOptions)
	}

	deleteInvestment(id: number): Observable<Investment> {
		return this.http.delete<Investment>(this.investmentsUrl+id, this.httpOptions);
	}
}
