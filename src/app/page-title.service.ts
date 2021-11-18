import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {

  constructor() { }

  pageTitle: string = "Home"

  definePageTitle(newTitle: string){
	  this.pageTitle = newTitle;
  }
}
