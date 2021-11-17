import { Component, OnInit } from '@angular/core';
import { Investment } from '../investment';
import { InvestmentService } from '../investment.service';

@Component({
	selector: 'app-investments',
	templateUrl: './investments.component.html',
	styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements OnInit {

	constructor(private investmentService: InvestmentService) { }

	ngOnInit(): void {
		this.getInvestments();
	}
	
	investments: Investment[] = [];

getInvestments(): void {
	this.investmentService.getInvestments().subscribe(investments => this.investments = investments);
}

}
