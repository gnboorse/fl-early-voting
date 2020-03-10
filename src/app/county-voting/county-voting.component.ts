import { Component, OnInit } from '@angular/core';
import { CountyCodePair } from '../county-code-pair.model';
import countyData from '../../assets/counties.json'

@Component({
  selector: 'app-county-voting',
  templateUrl: './county-voting.component.html',
  styleUrls: ['./county-voting.component.css']
})
export class CountyVotingComponent implements OnInit {

  constructor() { }

  selected: String;

  countiesData: CountyCodePair[];

  ngOnInit(): void {
    this.countiesData = countyData;
  }

}
