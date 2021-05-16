import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Vendor } from '../vendor/model-class/vendor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //for vendor
  errorMsg = false;
  login:Login = new Login("","");

  //for foodie
  errorMsg1 = false;
  login1:Login = new Login("","");

  constructor(private authService:AuthenticationService,private router: Router) { 
  }

  ngOnInit(): void {
  }
  

  vendorLoginSubmit(){

    if(!this.login.userId){
      this.errorMsg = true;
    }
    if(!this.login.passWord){
      this.errorMsg = true;
    }

    if(this.login.userId && this.login.passWord){
      this.errorMsg = false;
      this.authService.validateVendor(this.login).subscribe(
        data=>{
          //  alert(data.registrationStatus);
          localStorage.setItem("vendorId",data.vendorId);
          localStorage.setItem("vendorName",data.vendorName);
          localStorage.setItem("emailId",data.emailId);
          localStorage.setItem("website",data.website);
          localStorage.setItem("location",data.location);
          localStorage.setItem("vendorType",data.vendorType);
          localStorage.setItem("cuisinType",data.cuisinType);
          localStorage.setItem("status",data.status);
          localStorage.setItem("registrationStatus",data.registrationStatus);
          alert("logged in successfully");
          this.router.navigate(['/vendor/home']);
        },
        (error)=>{alert("Invalid Credentials")}
      ) 
      
    }
  }

  foodieLoginSubmit(){
   if(!this.login1.userId){
      this.errorMsg1 = true;
    }
    if(!this.login1.passWord){
      this.errorMsg1 = true;
    }

    if(this.login1.userId && this.login1.passWord){
      this.errorMsg1 = false;
      this.authService.validateFoodie(this.login1.userId,this.login1.passWord).subscribe(
        data=>{
          localStorage.setItem("foodieId",data.foodieId);
          localStorage.setItem("firstName",data.firstName);
          localStorage.setItem("lastName",data.lastName);
          localStorage.setItem("dob",data.dob);
          localStorage.setItem("gender",data.gender);
          localStorage.setItem("address",data.address);
          localStorage.setItem("mobile",data.mobileNo);
          localStorage.setItem("email",data.email);
          alert("logged in successfully");
          this.router.navigate(['/foodie/home']);
        },
        (error)=>{alert("Invalid Credentials")}
      ) 
      
    }
  }

}

export class Login{
  userId:string;
  passWord:string;

  constructor(userId:string, password:string){
    this.userId = userId;
    this.passWord = password;
  }
}