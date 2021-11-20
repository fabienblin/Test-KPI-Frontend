import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Investment } from '../investment';
import { InvestmentService } from '../investment.service';
import { PageTitleService } from '../page-title.service';
import { ShortInfosService } from '../short-infos.service';

@Component({
	selector: 'app-investments',
	templateUrl: './investments.component.html',
	styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements OnInit {

	constructor(
		private investmentService: InvestmentService,
		private shortInfos: ShortInfosService,
		private pageTitle: PageTitleService,
		private route: Router
	) { }

	ngOnInit(): void {
		this.getInvestments();
		this.shortInfos.defineShortInfo("");
		this.pageTitle.definePageTitle("List All Investments")
	}

	investments: Investment[] = [];

	getInvestments(): void {
		this.investmentService.getInvestmentList().subscribe(investments => this.investments = investments);
	}

	redirectToCreateForm(): void {
		this.route.navigate(["create"]).then(() => {
			window.location.reload();
		});
	}
}
