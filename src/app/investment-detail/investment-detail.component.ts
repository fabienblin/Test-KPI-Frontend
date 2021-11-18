import { Component, OnInit } from '@angular/core';
import { Investment } from '../investment';
import { ActivatedRoute } from '@angular/router';
import { InvestmentService } from '../investment.service';
import { PageTitleService } from '../page-title.service';

@Component({
  selector: 'app-investment-detail',
  templateUrl: './investment-detail.component.html',
  styleUrls: ['./investment-detail.component.css']
})
export class InvestmentDetailComponent implements OnInit {

  constructor(
	  private route: ActivatedRoute,
	  private investmentService: InvestmentService,
	  private pageTitle: PageTitleService) { }

  ngOnInit(): void {
	  this.getInvestment()
	  this.pageTitle.definePageTitle("Details Of Investment");
  }

  investment: Investment | undefined;

  getInvestment(): void {
	const id = Number(this.route.snapshot.paramMap.get('id'));
	this.investmentService.getInvestment(id).subscribe(investment => this.investment = investment)
  }

}
