import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodieService } from '../foodie.service';
import { FoodieReview } from '../model-class/foodie-review';
import { Vendor } from '../model-class/vendor';

@Component({
  selector: 'app-foodie-nav',
  templateUrl: './foodie-nav.component.html',
  styleUrls: ['./foodie-nav.component.css']
})
export class FoodieNavComponent implements OnInit {

  vendors:Vendor[] = [];
  reviews:FoodieReview[] = [];
  constructor(private router:Router,private foodieService:FoodieService) { }

  ngOnInit(): void {
  }

  getReviewsByFoodie(){

     this.foodieService.getReviewByFoodie().subscribe(
      data=>{
        for(let val of data){
          this.reviews.push(val);
        }
        localStorage.setItem("reviews", JSON.stringify(this.reviews));
        this.router.navigate(['foodie/viewReviews']);
      }
    )
  }

  getActiveVendors(){
    this.foodieService.getActiveVendors().subscribe(
      data=>{
        for(let val of data){
          this.vendors.push(val);
        }
        console.log(data)
        localStorage.setItem("vendorsList", JSON.stringify(this.vendors));
        this.router.navigate(['foodie/review']);
      }
    )
  }

  logout(){
    if(confirm("Are you sure you want to logout?")){
      localStorage.clear();
      this.router.navigate(['/']);
    }
  }

}
