import { Component, OnInit } from '@angular/core';
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
		private pageTitle: PageTitleService
	) { }

	ngOnInit(): void {
		this.getInvestments();
		this.pageTitle.definePageTitle("Filter Investments")
	}

	investments: Investment[] = [];
	filter: string = "id";

	getInvestments(): void {
		this.investmentService.getInvestmentList().subscribe(investments => this.investments = investments);
	}

	delete(investment: Investment) {
		this.investments = this.investments.filter(inv => inv !== investment);
		this.investmentService.deleteInvestment(investment.id).subscribe();
	}
}
