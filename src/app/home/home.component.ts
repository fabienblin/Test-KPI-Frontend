import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../page-title.service';
import { ShortInfosService } from '../short-infos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
	  private pageTitle: PageTitleService,
	  private shortInfos: ShortInfosService
  ) { }

  ngOnInit(): void {
	  this.pageTitle.definePageTitle("Home");
	  this.shortInfos.defineShortInfo("");
  }

}
