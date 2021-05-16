import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Review } from './model-class/review';
import { Foodie } from './model-class/foodie';

@Injectable({
  providedIn: 'root'
})
export class FoodieService {

  private baseURL = "http://localhost:8080/foodie";
  private headers = new HttpHeaders ({'content-type':'application/json'});
  constructor(private http:HttpClient) { }


  getReviewByFoodie(): Observable<any>{
    let url = this.baseURL +"/view/review?foodieId="+localStorage.getItem("foodieId");
    return this.http.get(url);
  }

  updateReview(review:Review): Observable<any>{
    let url = this.baseURL +"/edit/review/"+review.reviewId;
    return this.http.put(url,review);
  }

  deleteReview(reviewId:string): Observable<any>{
    let url = this.baseURL +"/delete/review/"+reviewId;
    return this.http.delete(url);
  }

  getActiveVendors(): Observable<any>{
    let url = this.baseURL +"/view/vendors";
    return this.http.get(url);
  }

  postReview(reviewObj:Review): Observable<any>{
    let url = this.baseURL +"/submit/review";
    return this.http.post(url,reviewObj);
  }

  updateFoodie(foodieObj:Foodie): Observable<any>{
    let url = this.baseURL +"/update-profile/"+foodieObj.foodieId;
    return this.http.put(url,foodieObj);
  }

  registerFoodie(foodieObj:Foodie): Observable<any>{
    let url = this.baseURL +"/register"
    return this.http.post(url,foodieObj);
  }

}
