import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodieService } from '../foodie.service';
import { Review } from '../model-class/review';
import { Vendor } from '../model-class/vendor';

@Component({
  selector: 'app-foodie-review',
  templateUrl: './foodie-review.component.html',
  styleUrls: ['./foodie-review.component.css']
})
export class FoodieReviewComponent implements OnInit {

  vendors:Vendor[] = [];

  vendorId:string;
  vendorName:string;
  rating:number;
  review:string;
  name:string;
  location:string;
  p=1;

  constructor(private foodieService: FoodieService, private router: Router) { }

  ngOnInit(): void {
    this.foodieService.getActiveVendors().subscribe(
      data=>{
        this.vendors = data;
      }
    )
  }

  showReviewForm(vendorId:string, vendorName:string){
    this.vendorId = vendorId;
    this.vendorName = vendorName;
  }

  postReview(){
    let reviewObj:Review = new Review();
    reviewObj.vendorId = this.vendorId;
    reviewObj.foodieId = localStorage.getItem("foodieId");
    reviewObj.rating  = this.rating;
    reviewObj.review = this.review;

    this.foodieService.postReview(reviewObj).subscribe(
      data=>{
        alert("Review added successfully!");
        window.location.reload();
      },
      (error)=>{
        alert("Vendor Id or foodie Id is invalid");
      }
    )

  }

  searchByName(){
    if(this.name==""){
      this.ngOnInit()
    } else{
      this.vendors = this.vendors.filter(
        res=>{
          return res.vendorName.toLocaleLowerCase().match(this.name.toLocaleLowerCase())
        }
      )
    }
  }

  searchByLocation(){
    if(this.location==""){
      this.ngOnInit()
    } else{
      this.vendors = this.vendors.filter(
        res=>{
          return res.location.toLocaleLowerCase().match(this.location.toLocaleLowerCase())
        }
      )
    }
  }

}
