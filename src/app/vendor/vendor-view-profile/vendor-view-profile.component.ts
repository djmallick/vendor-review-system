import { Component, OnInit } from '@angular/core';
import { Vendor } from '../model-class/vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-view-profile',
  templateUrl: './vendor-view-profile.component.html',
  styleUrls: ['./vendor-view-profile.component.css']
})
export class VendorViewProfileComponent implements OnInit {

  vendorId:string = localStorage.getItem("vendorId");
  name:string = localStorage.getItem("vendorName");
  emailId:string = localStorage.getItem("emailId");
  website:string = localStorage.getItem("website");
  location:string = localStorage.getItem("location");
  vendorType:string = localStorage.getItem("vendorType");
  cuisinType:string = localStorage.getItem("cuisinType");

  constructor(private service: VendorService) {
  }

  inputForms = false;
  inputData = true;
  saveButton = false;
  editButton = true;
  ngOnInit(): void {
  }

  showEditForms(){
    this.inputForms = true;
    this.inputData = false;
    this.saveButton = true;
    this.editButton = false;
  }

  updateVendor(){
    let vendor: Vendor = new Vendor(this.vendorId, this.name, this.emailId, this.website, this.location, this.vendorType, this.cuisinType);
    this.service.updateVendor(vendor).subscribe(
      data=>{
        localStorage.setItem("vendorId",data.vendorId);
        localStorage.setItem("vendorName",data.vendorName);
        localStorage.setItem("emailId",data.emailId);
        localStorage.setItem("website",data.website);
        localStorage.setItem("location",data.location);
        localStorage.setItem("vendorType",data.vendorType);
        localStorage.setItem("cuisinType",data.cuisinType);
        
        alert("Updated successfully");
      },
      (error)=>{
        if(error.status==400){
          window.location.reload();
          alert("Update failed. Vendor with this email id already exists");
        }
        if(error.status==404){
          alert("Profile not found");
        }
      }

    )
    this.inputForms = false;
    this.inputData = true;
    this.saveButton = false;
    this.editButton = true;
    
  }

  cancelEdit(){
    this.inputForms = false;
    this.inputData = true;
    this.saveButton = false;
    this.editButton = true;
  }

}
