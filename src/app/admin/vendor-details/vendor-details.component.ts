import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../../vendor/model-class/vendor';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {

  vendors:Vendor[] = [];
  name:string;
  p:number=1

  constructor(private adminService: AdminService, private router: Router) {
  }

  ngOnInit(): void {
    this.adminService.getVendorDetails().subscribe(
      data=>{
        this.vendors = data;
      }
    )
  }

  deactivate(vendorId:string){
    if(confirm("Are you sure you want to deactivate vendor "+vendorId+"?")){
      this.adminService.deactivateVendor(vendorId).subscribe(
        ()=>{
          alert("Vendor deactivated!");
  
          for(let vendor of this.vendors){
            if(vendor.vendorId==vendorId){
              vendor.status = "Inactive";
            }
          }
  
        },
        (error)=>{
          alert("vendor ID not found")
        }
      )
    }
  }

  activate(vendorId:string){
    if(confirm("Are you sure you want to activate vendor "+vendorId+"?")){
      this.adminService.activateVendor(vendorId).subscribe(
        ()=>{
          alert("Vendor activated!");
  
          for(let vendor of this.vendors){
            if(vendor.vendorId==vendorId){
              vendor.status = "Active";
            }
          }
  
        },
        (error)=>{
          alert("vendor ID not found")
        }
      )
    }
  }


  delete(vendorId:string){
    if(confirm("Are you sure you want to delete vendor "+vendorId+"?")){
      this.adminService.deleteVendor(vendorId).subscribe(
        ()=>{
          alert("Vendor details deleted!");
  
          for (let i=0; i<this.vendors.length; i++) {
            if(this.vendors[i].vendorId == vendorId){
              this.vendors.splice(i,1);
            }
          }
  
        },
        (error)=>{
          alert("vendor ID not found")
        }
      )
    }
  }

  searchByName(){
    if(this.name==""){
      this.ngOnInit()
    } else{
      console.log("search")
      this.vendors = this.vendors.filter(
        res=>{
          return res.vendorName.toLocaleLowerCase().match(this.name.toLocaleLowerCase())
        }
      )
    }
  }



}
