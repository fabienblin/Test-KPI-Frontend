import { Component, OnInit } from '@angular/core';
import { Investment } from '../investment';
import { InvestmentService } from '../investment.service';
import { PageTitleService } from '../page-title.service';
import { FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-investment-create',
	templateUrl: './investment-create.component.html',
	styleUrls: ['./investment-create.component.css']
})
export class InvestmentCreateComponent implements OnInit {

	constructor(
		private investmentService: InvestmentService,
		private pageTitle: PageTitleService,
		private formBuilder: FormBuilder) { }

	ngOnInit(): void {
		this.pageTitle.definePageTitle("Create New Investment");
	}

	form = this.formBuilder.group({
		id: "",
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
	investment: Investment | undefined;

	save(): void {
		if (this.form.valid){
			this.investmentService.createInvestment(this.form.value).subscribe(investment => this.investment = investment)
		}
	}
}
