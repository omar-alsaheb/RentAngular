import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/service/housing.service';
import { IProperty } from './IProperty';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor(private service: HousingService, private route: ActivatedRoute) { }
  properties: Array<IProperty> = [];
  temp: Array<IProperty> = [];
  // sellRent:number=1;
  ngOnInit(): void {

    this.service.getAllProperty().subscribe(data => {


      if (this.route.snapshot.url.toString() === 'rent-property') {
        this.properties = data;
        this.properties = this.properties.filter(e => e.sellRent == 2)
      }
      else {
        this.properties = data;
        this.properties = this.properties.filter(e => e.sellRent == 1)
      }

    }, er => {
      console.log(er)
    });


  }

}
