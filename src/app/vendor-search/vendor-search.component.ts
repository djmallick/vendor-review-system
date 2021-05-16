import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin/admin.service';
import { Vendor } from '../vendor/model-class/vendor';

@Component({
  selector: 'app-vendor-search',
  templateUrl: './vendor-search.component.html',
  styleUrls: ['./vendor-search.component.css']
})
export class VendorSearchComponent implements OnInit {

  vendors:Vendor[] = [];
  vendorId:string;
  location:string;
  initial= false;

  constructor(private adminService: AdminService, private router: Router) {
  }

  ngOnInit(): void {
  }

  searchByID(){
    this.initial=true;
    this.adminService.getVendorDetails().subscribe(
      data=>{
        this.vendors = data.filter(
          res=>{
            return res.vendorId.toLocaleLowerCase().match(this.vendorId.toLocaleLowerCase())
          }
        )
        console.log(this.vendors)
      }
    )
  }

  searchByLocation(){
    this.initial=true;
    this.adminService.getVendorDetails().subscribe(
      data=>{
        this.vendors = data.filter(
          res=>{
            return res.location.toLocaleLowerCase().match(this.location.toLocaleLowerCase())
          }
        )
        console.log(this.vendors)
      }
    )
  }

}
