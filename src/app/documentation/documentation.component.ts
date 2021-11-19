import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../page-title.service';
import { ShortInfosService } from '../short-infos.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  constructor(
	private pageTitle: PageTitleService,
	private shortInfos: ShortInfosService
  ) { }

  ngOnInit(): void {
	this.pageTitle.definePageTitle("Documentation");
	this.shortInfos.defineShortInfo("");
  }

}
