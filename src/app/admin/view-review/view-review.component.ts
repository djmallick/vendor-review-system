import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-review',
  templateUrl: './view-review.component.html',
  styleUrls: ['./view-review.component.css']
})
export class ViewReviewComponent implements OnInit {

  reviews:Review[] = [];
  firstName="";
  p:number=1

  constructor(private adminService: AdminService, private router: Router) { 
  }

  ngOnInit(): void {
    this.adminService.getAllReviews().subscribe(
      data=>{
        this.reviews = data;
      }
    )
  }

  search(){
    if(this.firstName==""){
      this.ngOnInit()
    } else{
      console.log("search")
      this.reviews = this.reviews.filter(
        res=>{
          return res.vendorId.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase())
        }
      )
    }
  }

}


class Review{
  reviewId:string;
  vendorId:string;
  foodieId:string;
  rating:string;
  review:string;
  dateOfReview:Date;
}
