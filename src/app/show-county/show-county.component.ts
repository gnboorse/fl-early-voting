import { Component, OnInit, Input } from '@angular/core';
import { County } from '../county.model';
import countyData from '../../assets/output.json';

@Component({
  selector: 'app-show-county',
  templateUrl: './show-county.component.html',
  styleUrls: ['./show-county.component.css']
})
export class ShowCountyComponent implements OnInit {

  constructor() { }

  selectionMade: Boolean;

  @Input() set county(county: String) {
    this.selectionMade = county !== undefined;
    this.currentCounty = countyData[county?.toString()]
  }

  currentCounty: County;

  ngOnInit(): void {
  }

}
