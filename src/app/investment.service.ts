import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Investment } from './investment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ShortInfosService } from './short-infos.service';
import { tap } from 'rxjs/operators';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
	providedIn: 'root'
})
export class InvestmentService {

	constructor(
		private http: HttpClient,
		private shortInfos: ShortInfosService,
		private formBuilder: FormBuilder) {

		}

	private investmentsUrl = environment.backend_url + "investments/";
	private httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};
	public formGroup = this.formBuilder.group({
		titreoperation: "",
		entreprise: "",
		annee_de_livraison: "",
		ville: "",
		mandataire: "",
		ppi: "",
		lycee: "",
		notification_du_marche: "",
		codeuai: "",
		longitude: "",
		etat_d_avancement: "",
		montant_des_ap_votes_en_meu: "",
		cao_attribution: "",
		latitude: "",
		maitrise_d_oeuvre: "",
		mode_de_devolution: "",
		annee_d_individualisation: "",
		enveloppe_prev_en_meu: ""
	});

	getInvestmentList(): Observable<Investment[]> {
		return this.http.get<Investment[]>(this.investmentsUrl);
	}

	getInvestment(id: number): Observable<Investment> {
		const url = this.investmentsUrl + id;
		return this.http.get<Investment>(url).pipe(
			tap((inv: Investment) => this.shortInfos.defineShortInfo("ID: " + inv.id + " - Titre Operation: " + inv.titreoperation))
		);
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
