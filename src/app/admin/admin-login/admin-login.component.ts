import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  idEmpty = false;
  pwdEmpty = false;
  idFilled = true;
  pwdFilled = true;
  errorMsg = false;
  login: AdminLogin = new AdminLogin("", "");

  constructor(private authService:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }

  validateLogin() {

    if (!this.login.adminId) {
      this.idEmpty = true;
      this.idFilled = false;
      this.errorMsg = true;
    }
    if (!this.login.password) {
      this.pwdEmpty = true;
      this.pwdFilled = false;
      this.errorMsg = true;
    }

    if (this.login.adminId && this.login.password) {
      this.idEmpty = false;
      this.pwdEmpty = false;
      this.idFilled = true;
      this.pwdFilled = true;
      this.errorMsg = false;
      this.authService.validateAdmin(this.login.adminId, this.login.password).subscribe(
        data => {         
          alert("logged in successfully");
          localStorage.setItem("adminId",data.adminId);
          this.router.navigate(['/admin/home']);
        },
        (error) => { alert("Invalid Credentials") }
      )

    }
  }


}

export class AdminLogin {
  adminId: string;
  password: string;

  constructor(userId: string, password: string) {
    this.adminId = userId;
    this.password = password;
  }
}
