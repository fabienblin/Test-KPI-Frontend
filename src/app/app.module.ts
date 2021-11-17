import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvestmentsComponent } from './investments/investments.component';
import { InvestmentDetailComponent } from './investment-detail/investment-detail.component';
import { HomeComponent } from './home/home.component';
import { InvestmentSearchComponent } from './investment-search/investment-search.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InvestmentsComponent,
    InvestmentDetailComponent,
    HomeComponent,
    InvestmentSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
