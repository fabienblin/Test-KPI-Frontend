import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShortInfosService {

  constructor() { }

  shortInfo: string = ""

  defineShortInfo(newInfo: string){
	  this.shortInfo = newInfo;
  }
}
