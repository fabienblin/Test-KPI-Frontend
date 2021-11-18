import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvestmentsComponent } from './investments/investments.component';
import { InvestmentDetailComponent } from './investment-detail/investment-detail.component';
import { HomeComponent } from './home/home.component';
import { InvestmentSearchComponent } from './investment-search/investment-search.component';
import { HttpClientModule } from '@angular/common/http';
import { PageTitleComponent } from './page-title/page-title.component';
import { ShortInfosComponent } from './short-infos/short-infos.component';

@NgModule({
  declarations: [
    AppComponent,
    InvestmentsComponent,
    InvestmentDetailComponent,
    HomeComponent,
    InvestmentSearchComponent,
    PageTitleComponent,
    ShortInfosComponent
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
