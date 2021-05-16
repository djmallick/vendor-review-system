import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-registration-successful',
  templateUrl: './vendor-registration-successful.component.html',
  styleUrls: ['./vendor-registration-successful.component.css']
})
export class VendorRegistrationSuccessfulComponent implements OnInit {

  vendorId:string = localStorage.getItem("vendorId");
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goTologin(){
    this.router.navigate(['/login'])
  }

}
