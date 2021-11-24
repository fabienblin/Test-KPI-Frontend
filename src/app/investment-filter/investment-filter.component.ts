import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Investment } from '../investment';
import { InvestmentService } from '../investment.service';
import { PageTitleService } from '../page-title.service';

@Component({
	selector: 'app-investment-filter',
	templateUrl: './investment-filter.component.html',
	styleUrls: ['./investment-filter.component.css']
})
export class InvestmentFilterComponent implements OnInit {

	constructor(
		private investmentService: InvestmentService,
		private pageTitle: PageTitleService,
		private formBuilder: FormBuilder
	) { }

	ngOnInit(): void {
		this.getInvestments();
		this.pageTitle.definePageTitle("Filter Investments")
	}

	investments: Investment[] = [];
	filterForm = this.formBuilder.group({
		filterBy: "",
		filterVal: ""
	});

	getInvestments(): void {
		this.investmentService.getInvestmentList().subscribe(investments => this.investments = investments);
	}

	delete(investment: Investment) {
		this.investments = this.investments.filter(inv => inv !== investment);
		this.investmentService.deleteInvestment(investment.id).subscribe();
	}

	filter(): void {
		this.investmentService.getInvestmentListFiltered(this.filterForm.value).subscribe(investments => this.investments = investments);
	}
}
