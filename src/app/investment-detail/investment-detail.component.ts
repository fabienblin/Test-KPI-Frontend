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
	selector: 'app-investment-detail',
	templateUrl: './investment-detail.component.html',
	styleUrls: ['./investment-detail.component.css']
})
export class InvestmentDetailComponent implements OnInit {

	constructor(
		private route: ActivatedRoute,
		private investmentService: InvestmentService,
		private pageTitle: PageTitleService,
		private location: Location) {

		this.investment = this.getInvestment().pipe(
			tap(investment => this.form.patchValue(investment))
		);
	}

	ngOnInit(): void {
		this.pageTitle.definePageTitle("Details Of Investment");
	}

	form = this.investmentService.formGroup;
	investment: Observable<Investment>;

	getInvestment(): Observable<Investment> {
		const id = Number(this.route.snapshot.paramMap.get('id'));
		return this.investmentService.getInvestment(id)
	}

	save(): void {
		if (this.form.valid) {
			this.investmentService.updateInvestment(this.form.value)
		}
	}

	delete(): void {
		if (this.investment) {
			const id = Number(this.route.snapshot.paramMap.get('id'));
			this.investmentService.deleteInvestment(id).subscribe(() => this.goBack());
		}
	}

	goBack(): void {
		this.location.back();
	}
}
