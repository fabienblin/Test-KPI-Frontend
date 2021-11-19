import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvestmentsComponent } from './investments/investments.component';
import { InvestmentDetailComponent } from './investment-detail/investment-detail.component';
import { HomeComponent } from './home/home.component';
import { InvestmentSearchComponent } from './investment-search/investment-search.component';
import { HttpClientModule } from '@angular/common/http';
import { PageTitleComponent } from './page-title/page-title.component';
import { ShortInfosComponent } from './short-infos/short-infos.component';
import { DocumentationComponent } from './documentation/documentation.component';

@NgModule({
  declarations: [
    AppComponent,
    InvestmentsComponent,
    InvestmentDetailComponent,
    HomeComponent,
    InvestmentSearchComponent,
    PageTitleComponent,
	ShortInfosComponent,
 DocumentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	FormsModule,
	ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
