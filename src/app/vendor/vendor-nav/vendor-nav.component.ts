import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Review } from '../model-class/review';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-nav',
  templateUrl: './vendor-nav.component.html',
  styleUrls: ['./vendor-nav.component.css']
})
export class VendorNavComponent implements OnInit {

  registrationStatus:string;
  status:String;

  reviews:Review[] = [];
  constructor(private router:Router, private vendorService:VendorService) {
    this.registrationStatus = localStorage.getItem("registrationStatus");
    this.status = localStorage.getItem("status");
   }

  ngOnInit(): void {
  }

  logout(){
    if(confirm("Are you sure you want to logout?")){
      localStorage.clear();
      this.router.navigate(['/']);
    }
  }

}
