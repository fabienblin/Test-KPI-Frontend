import { Component, OnInit } from '@angular/core';
import { InvestmentService } from '../investment.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-investment-search',
	templateUrl: './investment-search.component.html',
	styleUrls: ['./investment-search.component.css']
})
export class InvestmentSearchComponent implements OnInit {

	constructor(
		private investmentService: InvestmentService,
		private formBuilder: FormBuilder,
		private router: Router) { }

	ngOnInit(): void {
	}

	checkoutForm = this.formBuilder.group({
		id:''
	})

	redirectToInvestment(id: number): void {
		this.router.navigate(["detail",id]).then(() => {
			window.location.reload();
		});
	}

	search(): void {
		const id = this.checkoutForm.value['id'];
		this.investmentService.getInvestment(id).subscribe(() => this.redirectToInvestment(id));
	}
}
