import { Component, OnInit } from '@angular/core';
import { FoodieService } from '../foodie.service';
import { Foodie } from '../model-class/foodie';
import { DatePipe} from '@angular/common';


@Component({
  selector: 'app-foodie-view-profile',
  templateUrl: './foodie-view-profile.component.html',
  styleUrls: ['./foodie-view-profile.component.css']
})
export class FoodieViewProfileComponent implements OnInit {

  foodieId:string = localStorage.getItem("foodieId");
  firstName:string = localStorage.getItem("firstName");
  lastName = localStorage.getItem("lastName");  
  dob:string = localStorage.getItem("dob");
  gender:string = localStorage.getItem("gender");
  address: string = localStorage.getItem("address");
  mobile:string = localStorage.getItem("mobile");
  email:string = localStorage.getItem("email");


  inputForms = false;
  inputData = true;
  saveButton = false;
  editButton = true;

  constructor(private service:FoodieService) { }

  ngOnInit(): void {
  }

  showEditForms(){
    this.inputForms = true;
    this.inputData = false;
    this.saveButton = true;
    this.editButton = false;
  }

  cancelEdit(){
    this.inputForms = false;
    this.inputData = true;
    this.saveButton = false;
    this.editButton = true;
  }

  updateFoodie(){
    let foodieObj:Foodie = new Foodie();
    foodieObj.firstName = this.firstName;
    foodieObj.foodieId = localStorage.getItem("foodieId");
    foodieObj.lastName = this.lastName;
    foodieObj.email = this.email;
    foodieObj.address = this.address;
    foodieObj.gender = this.gender;
    foodieObj.mobileNo = this.mobile;
    foodieObj.dob = this.dob;
    let pipe = new DatePipe('en-IN')
    foodieObj.dob = pipe.transform(this.dob,'dd-MM-yyyy');
    console.log(typeof(foodieObj.dob))

    this.service.updateFoodie(foodieObj).subscribe(
      data=>{
          localStorage.setItem("foodieId",data.foodieId);
          localStorage.setItem("firstName",data.firstName);
          localStorage.setItem("lastName",data.lastName);
          localStorage.setItem("dob",foodieObj.dob);
          localStorage.setItem("gender",data.gender);
          localStorage.setItem("address",data.address);
          localStorage.setItem("mobile",data.mobileNo);
          localStorage.setItem("email",data.email);
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

}
