import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-vendor-request',
  templateUrl: './admin-vendor-request.component.html',
  styleUrls: ['./admin-vendor-request.component.css']
})
export class AdminVendorRequestComponent implements OnInit {

  pendigVendors:PendingVendors[] = [];
  p=1;
  
  constructor(private service:AdminService) {}

  ngOnInit(): void {
    this.service.getPendingRequest().subscribe(
      data=>{
        this.pendigVendors = data;

      }
    )
  }

  accept(vendorId:string){
    this.service.acceptRequest(vendorId).subscribe(
      ()=>{
        alert("Vendor request accepted!");
        window.location.reload();
      },
      (error)=>{
        alert("Vendor details not found!")
      }
    )
  }

  reject(vendorId:string){
    this.service.rejectRequest(vendorId).subscribe(
      ()=>{
        alert("Vendor request accepted!")
      },
      (error)=>{
        if(error.status==400){
          alert("Insufficient admin account balance for transaction");
        }

        if(error.status==404){
          alert("Vendor request not found");
        }
      }
    )
    window.location.reload();
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