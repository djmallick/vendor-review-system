import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from './login/login.component';
import { AdminLogin } from './admin/admin-login/admin-login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseURL = "http://localhost:8080";
  private headers = new HttpHeaders ({'content-type':'application/json'});
  constructor(private http:HttpClient) { }

  //vendor
  validateVendor(login:Login): Observable<any>{
    let url = this.baseURL +"/vendor/login";
    return this.http.post(url,login);
  }

  //foodie
  validateFoodie(userId:string, password:string): Observable<any>{
    let url = this.baseURL +"/foodie/login";
    return this.http.post(url,new Login(userId,password));
  }


  //admin
  validateAdmin(userId:string, password:string): Observable<any>{
    let url = this.baseURL +"/admin/login";
    return this.http.post(url,new AdminLogin(userId,password));
  }
}
