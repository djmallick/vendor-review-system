import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodieService } from '../foodie.service';
import { FoodieReview } from '../model-class/foodie-review';
import { Review } from '../model-class/review';

@Component({
  selector: 'app-foodie-view-review',
  templateUrl: './foodie-view-review.component.html',
  styleUrls: ['./foodie-view-review.component.css']
})
export class FoodieViewReviewComponent implements OnInit {

  reviews: FoodieReview[] = [];
  reviewId: string;
  vendorId: string;
  review: string;
  rating: number;
  reviewId1: string;
  showForm = false;
  p=1;
  constructor(private foodieService: FoodieService, private router: Router) { }

  ngOnInit(): void {
    this.foodieService.getReviewByFoodie().subscribe(
      data=>{
        this.reviews = data;
      }
    )
  }

  showUpdateForm(reviewId: string, vendorId: string, review: string, rating: number) {
    this.reviewId = reviewId;
    this.vendorId = vendorId;
    this.review = review;
    this.rating = rating;
    this.showForm = true;
  }

  updateReview() {
    if (confirm("Are you sure you want to update review?")) {
      let reviewObj: Review = new Review();
      reviewObj.reviewId = this.reviewId;
      reviewObj.vendorId = this.vendorId;
      reviewObj.rating = this.rating;
      reviewObj.review = this.review;
      reviewObj.foodieId = localStorage.getItem("foodieId");


      this.foodieService.updateReview(reviewObj).subscribe(
        data => {
          for (let val of this.reviews) {
            if (data.reviewId == val.reviewId) {
              val.rating = data.rating;
              val.review = data.review;
              val.dateOfReview = data.dateOfReview;
            }
          }
          localStorage.setItem("reviews", JSON.stringify(this.reviews));
          alert("Review updated successfully!");
          window.location.reload();
        },
        (error) => {
          alert("Review not found");
        }
      )
      this.showForm = false;
    }

  }


  deleteReview(reviewId: string){
    if(confirm("Are you sure you want to delete this review?")){
      this.foodieService.deleteReview(reviewId).subscribe(
        ()=>{
          for (let i=0; i<this.reviews.length; i++) {
            if(this.reviews[i].reviewId == reviewId){
              this.reviews.splice(i,1);
            }
          }
          localStorage.setItem("reviews", JSON.stringify(this.reviews));
        },
        (error)=>{
          alert("Error")
        }
      )
    }
    this.showForm = false;
  }

  searchByName(){
    if(this.reviewId1==""){
      this.ngOnInit()
    } else{
      console.log("search")
      this.reviews = this.reviews.filter(
        res=>{
          return res.reviewId.toLocaleLowerCase().match(this.reviewId1.toLocaleLowerCase())
        }
      )
    }
  }


}
