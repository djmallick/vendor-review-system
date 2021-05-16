import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseURL = "http://localhost:8080/admin";
  private headers = new HttpHeaders ({'content-type':'application/json'});

  constructor(private http:HttpClient) { }

  getFoodieDetails(): Observable<any>{
    let url = this.baseURL +"/view/foodies";
    return this.http.get(url);
  }

  getVendorDetails(): Observable<any>{
    let url = this.baseURL +"/view/vendors";
    return this.http.get(url);
  }

  deactivateVendor(vendorId:string): Observable<any>{
    let url = this.baseURL +"/deactivate/vendor/"+vendorId;
    return this.http.put(url, null);
  }

  activateVendor(vendorId:string): Observable<any>{
    let url = this.baseURL +"/activate/vendor/"+vendorId;
    return this.http.put(url, null);
  }

  deleteVendor(vendorId:string): Observable<any>{
    let url = this.baseURL +"/delete/vendor/"+vendorId;
    return this.http.delete(url);
  }

  getAllComplaints() :Observable<any>{
    let url=this.baseURL+"/view/complaint";
    return this.http.get(url);
  }
  deleteReviewByReviewId(reviewId: String):Observable<any>{
    let url=this.baseURL+"/delete/review/"+reviewId;
    return this.http.delete(url);
  }
  rejectComplainByReviewId(reviewId: String):Observable<any>{
    let url=this.baseURL+"/reject/complain/"+reviewId;
    return this.http.delete(url);
  }
  generateReport(fromDate:Date,toDate:Date):Observable<any>{
    let url=this.baseURL+"/generate/report?fromDate="+fromDate.toString()+"&toDate="+toDate.toString();
    return this.http.get(url);
  }

  getPendingRequest():Observable<any>{
    let url = this.baseURL+"/view/vendor-request";
    return this.http.get(url);
  }

  acceptRequest(vendorId:string):Observable<any>{
    let url = this.baseURL+"/approve/vendor/"+vendorId;
    return this.http.put(url, null);
  }

  rejectRequest(vendorId:string):Observable<any>{
    let url = this.baseURL+"/reject/vendor/"+vendorId;
    return this.http.put(url, null);
  }

  getAllReviews():Observable<any>{
    let url = this.baseURL+"/view/review";
    return this.http.get(url);
  }

}
