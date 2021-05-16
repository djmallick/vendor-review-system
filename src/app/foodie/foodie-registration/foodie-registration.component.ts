import { Component, OnInit } from '@angular/core';
import { FoodieService } from '../foodie.service';
import { Foodie } from '../model-class/foodie';
import { DatePipe} from '@angular/common'
import { Router } from '@angular/router';



@Component({
  selector: 'app-foodie-registration',
  templateUrl: './foodie-registration.component.html',
  styleUrls: ['./foodie-registration.component.css']
})
export class FoodieRegistrationComponent implements OnInit {

  constructor(private service:FoodieService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(data){
    let pipe = new DatePipe('en-IN')
    console.log(data)
    let foodie:Foodie = new Foodie();
    foodie.firstName = data.firstName;
    foodie.lastName = data.lastName;
    foodie.gender = data.gender;
    foodie.dob = pipe.transform(data.dob,'dd-MM-yyyy');
    foodie.address = data.address;
    foodie.email = data.email;
    foodie.mobileNo = data.mobile;
    foodie.password = data.password;
    this.service.registerFoodie(foodie).subscribe(
      data=>{
        alert("Registered successfully!!")
        localStorage.setItem("foodieId", data.foodieId);
        this.router.navigate(['foodieregister/success']);
      }, (error)=>{
        alert("Email address is already registered!!, Try with another email")
      }
    )
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
