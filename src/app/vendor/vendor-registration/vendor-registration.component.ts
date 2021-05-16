import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorService } from '../vendor.service';
import { Vendor } from '../model-class/vendor';


@Component({
  selector: 'app-vendor-registration',
  templateUrl: './vendor-registration.component.html',
  styleUrls: ['./vendor-registration.component.css']
})
export class VendorRegistrationComponent implements OnInit {


  constructor(private router:Router, private service:VendorService) {
   }

  ngOnInit(): void {
  }  


  onSubmit(data){
    let vendor:Vendor = new Vendor(null, data.firstName,data.email, data.website,data.location,
    data.vendorType,data.cuisinType);
    vendor.password = data.password;
    
    localStorage.setItem("vendorObj",JSON.stringify(vendor)); 
    
    this.router.navigate(['vendorregister/plans']);
  }

  lowercase(data):boolean{
    let regexp = new RegExp('[a-z]');
    if(regexp.test(data.password)){
      return true;
    }
    return false;
  }

  uppercase(data):boolean{
    let regexp = new RegExp('[A-Z]');
    if(regexp.test(data.password)){
      return true;
    }
    return false;
  }

  numeric(data):boolean{
    let regexp = new RegExp('[0-9]');
    if(regexp.test(data.password)){
      return true;
    }
    return false;
  }

  minlength(data):boolean{
    if(data.password.length>=6){
      return true;
    }
    return false;
  }
  

}
