import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Complaint } from '../model-class/complaint';
import { Review } from '../model-class/review';
import { VendorService } from '../vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-raise-complain',
  templateUrl: './vendor-raise-complain.component.html',
  styleUrls: ['./vendor-raise-complain.component.css']
})
export class VendorRaiseComplainComponent implements OnInit {

  reviews:Review[] = [];
  reviewObj:Review = new Review();
  complaintObj:Complaint = new Complaint();
  foodieName:string;
  p=1;

  constructor(private service:VendorService, private router: Router) { 
  }

  ngOnInit(): void {
    this.service.getReviewByVendor().subscribe(
      data=>{     
        this.reviews = data;
      }
    ) 
  }

  showComplaintForm(reviewId:string, foodieId:string){
    this.reviewObj.reviewId=reviewId;
    this.reviewObj.foodieId = foodieId;
    this.complaintObj.vendorId = localStorage.getItem("vendorId");
    this.complaintObj.reviewId = reviewId;
  }

  submitComplaint(){
    this.service.raiseComplaint(this.complaintObj).subscribe(
      data=>{
        alert("Complaint raised successfully, complaint id "+data.complainId);
        window.location.reload();
      },
      (error)=>{
        if(error.status==400){
          alert("Complaints already raised, wait for admin response");
        }

        if(error.status==404){
          alert("Review already deleted");
        }
        window.location.reload();
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
