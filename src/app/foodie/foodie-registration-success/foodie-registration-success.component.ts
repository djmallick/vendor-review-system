import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foodie-registration-success',
  templateUrl: './foodie-registration-success.component.html',
  styleUrls: ['./foodie-registration-success.component.css']
})

export class FoodieRegistrationSuccessComponent implements OnInit {

  foodieId:string = localStorage.getItem("foodieId");
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goTologin(){
    this.router.navigate(['/login'])
  }

}
