import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationComponent } from './documentation/documentation.component';
import { HomeComponent } from './home/home.component';
import { InvestmentCreateComponent } from './investment-create/investment-create.component';
import { InvestmentDetailComponent } from './investment-detail/investment-detail.component';
import { InvestmentFilterComponent } from './investment-filter/investment-filter.component';
import { InvestmentsComponent } from './investments/investments.component';

const routes: Routes = [
	{ path: 'home', redirectTo: '', pathMatch: 'full' },
	{ path: '', component: HomeComponent },
	{ path: 'documentation', component: DocumentationComponent },
	{ path: 'investments', component: InvestmentsComponent },
	{ path: 'create', component: InvestmentCreateComponent },
	{ path: 'filter', component: InvestmentFilterComponent },
	{ path: 'detail/:id', component: InvestmentDetailComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
