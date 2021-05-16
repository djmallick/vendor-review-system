import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Complaint } from './model-class/complaint';
import { Vendor } from './model-class/vendor';
import { RequestForPayment } from './model-class/request-for-payment';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  private baseURL = "http://localhost:8080/vendor";
  private headers = new HttpHeaders ({'content-type':'application/json'});
  constructor(private http:HttpClient) { }

  getReviewByVendor(): Observable<any>{
    let vendorId:string = localStorage.getItem("vendorId");
    let url = this.baseURL +"/view/review?vendorId="+vendorId;
    return this.http.get(url);
  }

  raiseComplaint(complaint:Complaint): Observable<any>{
    let url = this.baseURL +"/raise-complaint";
    return this.http.post(url,complaint);
  }

  updateVendor(vendor:Vendor): Observable<any>{
    let url = this.baseURL +"/update-profile/"+vendor.vendorId;
    return this.http.put(url,vendor);
  }

  payRegistrationFee(payment:RequestForPayment): Observable<any>{
    let url = this.baseURL +"/payment";
    return this.http.post(url,payment);
  }

  submitRegistration(vendor:Vendor): Observable<any>{
    let url = this.baseURL +"/register";
    return this.http.post(url,vendor);
  }

  uploadImage(imageFile:FormData): Observable<any>{
    let url = this.baseURL +"/upload-image/V1001";
    return this.http.put(url,imageFile);
  }

  downloadloadImage(vendorId:string): Observable<any>{
    let url = this.baseURL +"/download-image/"+vendorId;
    return this.http.get(url);
  }

}
