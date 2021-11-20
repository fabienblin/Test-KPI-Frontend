import { Component, OnInit } from '@angular/core';
import { Investment } from '../investment';
import { ActivatedRoute } from '@angular/router';
import { InvestmentService } from '../investment.service';
import { PageTitleService } from '../page-title.service';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
	selector: 'app-investment-create',
	templateUrl: './investment-create.component.html',
	styleUrls: ['./investment-create.component.css']
})
export class InvestmentCreateComponent implements OnInit {

	constructor(
		private route: ActivatedRoute,
		private investmentService: InvestmentService,
		private pageTitle: PageTitleService,
		private location: Location) { }

	ngOnInit(): void {
		this.pageTitle.definePageTitle("Create New Investment");
	}

	form = this.investmentService.formGroup;
	investment: Investment | undefined;

	save(): void {
		if (this.form.valid){
			this.investmentService.createInvestment(this.form.value).subscribe(investment => this.investment = investment)
		}
	}
}
