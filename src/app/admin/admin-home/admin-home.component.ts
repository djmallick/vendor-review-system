import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Complaint } from '../model-class/complaint';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  pendingVendors:PendingVendors[]=[];
  complains: Complaint[] = [];
  reviews:Review[] = [];


  constructor(private service:AdminService, private router:Router) { }

  goToReview(){
    this.router.navigate(['/admin/viewReview']);
  }

  goToComplaint(){
    this.router.navigate(['admin/viewComplain']);
  }

  goToRequest(){
    this.router.navigate(['admin/vendorRequest']);
  }

  ngOnInit(): void {
    this.service.getPendingRequest().subscribe(
      data=>{
        this.pendingVendors = data;
        console.log(this.pendingVendors)
        if(this.pendingVendors.length>4){
          this.pendingVendors.splice(4);
        }
      }
    )

    this.service.getAllComplaints().subscribe(
      data => {
        this.complains = data;
        if(this.complains.length>4){
          this.complains.splice(4);
        }
      }
    )

    this.service.getAllReviews().subscribe(
      data=>{
        this.reviews = data;
        if(this.reviews.length>4){
          this.reviews.splice(4);
        }
        console.log(this.reviews)
      }
    )

  }

}

class PendingVendors{
  amountPaid:number
  cuisinType:string
  emailId:string
  location:string
  transactionId:string
  vendorId:string
  vendorName:string
  vendorType:string
  website:string
  dateOfRegistration:Date
}


class Review{
  reviewId:string;
  vendorId:string;
  foodieId:string;
  rating:string;
  review:string;
  dateOfReview:Date;
}
