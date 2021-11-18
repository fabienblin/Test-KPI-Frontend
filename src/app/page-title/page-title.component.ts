import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../page-title.service';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {

  constructor(public pageTitle: PageTitleService) { }

  ngOnInit(): void {
  }

}
