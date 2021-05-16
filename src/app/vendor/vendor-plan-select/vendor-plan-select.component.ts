import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vendor-plan-select',
  templateUrl: './vendor-plan-select.component.html',
  styleUrls: ['./vendor-plan-select.component.css']
})
export class VendorPlanSelectComponent implements OnInit {

  amount:string;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  plan1(){
    this.amount = "1000";
    localStorage.setItem("amount", this.amount)
    this.router.navigate(['vendorregister/payment']);
  }
  plan2(){
    this.amount = "2000";
    localStorage.setItem("amount", this.amount)
    this.router.navigate(['vendorregister/payment']);
  }
  plan3(){
    this.amount = "5000";
    localStorage.setItem("amount", this.amount)
    this.router.navigate(['vendorregister/payment']);
  }
  plan4(){
    this.amount = "9000";
    localStorage.setItem("amount", this.amount)
    this.router.navigate(['vendorregister/payment']);
  }


}
