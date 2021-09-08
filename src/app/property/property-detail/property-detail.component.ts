import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  id: number = 1;
  ngOnInit(): void {

    this.route.paramMap.subscribe(param => {
      this.id = +this.route.snapshot.params['id'];

    })


  }

  goToNext(){
    this.id +=1;
    this.router.navigate(['/property-detail/',this.id])
  }




}
