import { Component, Input, OnInit } from '@angular/core';
import { IProperty } from '../property-list/IProperty';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {


  constructor() { }
  @Input() prop:any;



  ngOnInit(): void {
  }

}
