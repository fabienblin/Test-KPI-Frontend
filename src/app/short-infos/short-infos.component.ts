import { Component, OnInit } from '@angular/core';
import { ShortInfosService } from '../short-infos.service';

@Component({
  selector: 'app-short-infos',
  templateUrl: './short-infos.component.html',
  styleUrls: ['./short-infos.component.css']
})
export class ShortInfosComponent implements OnInit {

  constructor(public shortInfos: ShortInfosService) { }

  ngOnInit(): void {
  }

}
