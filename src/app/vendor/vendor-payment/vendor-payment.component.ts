import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestForPayment } from '../model-class/request-for-payment';
import { Vendor } from '../model-class/vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-payment',
  templateUrl: './vendor-payment.component.html',
  styleUrls: ['./vendor-payment.component.css']
})
export class VendorPaymentComponent implements OnInit {

  payment:RequestForPayment = new RequestForPayment();

  amount = localStorage.getItem("amount")
  constructor(private service:VendorService,private router:Router) {
  }

  ngOnInit(): void {
  }

  proceedPayment(){
    this.payment.amount = Number(localStorage.getItem("amount"));
    this.service.payRegistrationFee(this.payment).subscribe(
      data=>{
        localStorage.setItem("transactionId",data.transactionId);
        localStorage.setItem("amount",data.amount);
        localStorage.setItem("dateOfTransaction",data.dateOfTransaction);
        localStorage.setItem("timeOfTransaction",data.timeOfTransaction);

        
        let vendor:Vendor = JSON.parse(localStorage.getItem("vendorObj"));
        vendor.transactionId = data.transactionId;
        alert("payment successfull!!");
        
        this.payment.account_no = 0;
        this.payment.password = "";
        console.log(vendor);
        this.service.submitRegistration(vendor).subscribe(
          data=>{
            localStorage.setItem("vendorId",data.vendorId);
            alert("Registration details submitted!!");
            this.router.navigate(['vendorregister/success']);
          },
          (error)=>{
            alert("Registration failed!!, Your amount will be returned")
          }
        )
      },
      (error)=>{
        if(error.status==400){
          alert("Insufficient balance");
        }

        if(error.status==404){
          alert("Invalid account details");
        }
      }
    )
  }

}

