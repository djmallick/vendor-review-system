import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorService } from '../../vendor/vendor.service';
import { FoodieService } from '../foodie.service';

@Component({
  selector: 'app-foodie-home',
  templateUrl: './foodie-home.component.html',
  styleUrls: ['./foodie-home.component.css']
})
export class FoodieHomeComponent implements OnInit {

  reviews:FoodieReview[] = [];
  firstName:string = localStorage.getItem("firstName");
  

  constructor(private foodieService: FoodieService, private router: Router) { }
  
  ngOnInit(): void {
    this.foodieService.getReviewByFoodie().subscribe(
      data=>{     
        this.reviews = data;
        if(this.reviews.length>3){
          this.reviews.splice(3);
        }
      }
    ) 
  }

}

class FoodieReview {
  reviewId:string;
  vendorId:string;
  foodieId:string;
  vendorName:string;
  location:string;
  dateOfReview:Date;
  review:String;
  rating:number;
}
