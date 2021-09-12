import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('Form') addPropForm!: NgForm;

  // @ViewChild(Form, { static: false }) addPropForm: NgForm;


  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  BackHome() {
    this.router.navigate(['/'])
  }

  onSubmit(Form:NgForm){
    console.log(this.addPropForm)
    console.log(Form)

  }
}
