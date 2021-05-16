import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Review } from '../model-class/review';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-home',
  templateUrl: './vendor-home.component.html',
  styleUrls: ['./vendor-home.component.css']
})
export class VendorHomeComponent implements OnInit {

  reviews:Review[] = [];
  registrationStatus = localStorage.getItem("registrationStatus");
  status = localStorage.getItem("status");

  vendorName:string = localStorage.getItem("vendorName");
  showMsg:string = "";
  
  constructor(private router:Router, private vendorService:VendorService) { 
    if(localStorage.getItem("registrationStatus")=="pending"){
      this.showMsg = "(Your Approval is Pending from Admin)";
    } else if (localStorage.getItem("status")=="Inactive"){
      this.showMsg = "(Your account has been deactivated. Contact admin to activate the account)";
    } else if (localStorage.getItem("registrationStatus")=="Rejected"){
      this.showMsg = "(Your registration request has been rejected by admin. Refund will be credited in your account)";
    }
  }

  ngOnInit(): void {
    this.vendorService.getReviewByVendor().subscribe(
      data=>{     
        this.reviews = data;
        if(this.reviews.length>3){
          this.reviews.splice(3);
        }
      }
    ) 
  }

}
