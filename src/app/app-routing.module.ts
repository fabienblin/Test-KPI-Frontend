import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InvestmentDetailComponent } from './investment-detail/investment-detail.component';
import { InvestmentsComponent } from './investments/investments.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'investments', component: InvestmentsComponent },
	{ path: 'detail/:id', component: InvestmentDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
