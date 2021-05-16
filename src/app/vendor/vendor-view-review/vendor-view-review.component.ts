import { Component, OnInit } from '@angular/core';
import { Review } from '../model-class/review';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-view-review',
  templateUrl: './vendor-view-review.component.html',
  styleUrls: ['./vendor-view-review.component.css']
})
export class VendorViewReviewComponent implements OnInit {

  reviews:Review[] = [];
  foodieName:string;
  p=1;
  constructor(private router:Router, private vendorService:VendorService) { 
  }

  ngOnInit(): void {
    this.vendorService.getReviewByVendor().subscribe(
      data=>{     
        this.reviews = data;
      }
    ) 
  }
  
  searchByFoodieName(){
    if(this.foodieName==""){
      this.ngOnInit()
    } else{
      this.reviews = this.reviews.filter(
        res=>{
          return res.firstName.toLocaleLowerCase().match(this.foodieName.toLocaleLowerCase())
        }
      )
    }
  }

}
