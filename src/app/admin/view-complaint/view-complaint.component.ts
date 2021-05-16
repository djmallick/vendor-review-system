import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Complaint } from '../model-class/complaint';

@Component({
  selector: 'app-view-complaint',
  templateUrl: './view-complaint.component.html',
  styleUrls: ['./view-complaint.component.css']
})
export class ViewComplaintComponent implements OnInit {
  complains: Complaint[] = [];
  complainObj: Complaint = new Complaint();
  id:string;
  p = 1;

  constructor(private adminService: AdminService, private router: Router) {
  }
  deleteReview(reviewId: string) {
    if (confirm("Are you sure, you want to delete review with review ID " + reviewId + "?")){
      this.adminService.deleteReviewByReviewId(reviewId).subscribe(
        data => {
          console.log(data);

          alert("Review of Review ID " + reviewId + " Deleted Succeccfully")
          window.location.reload();
        }
      )
    }
  }
  rejectReview(reviewId: string, vendorId: string, complainId: string) {
    if (confirm("Are you sure, you want to reject complaint with complaint ID " + complainId + "?")) {
      this.adminService.rejectComplainByReviewId(reviewId).subscribe(
        data => {
          console.log(data);
          alert("Complain of complain ID " + complainId + " raised by vendor " + vendorId + " is Rejected and Deleted Successfully")
          window.location.reload();
        }
      )
    }
  }
  ngOnInit(): void {
    this.adminService.getAllComplaints().subscribe(
      data => {
        this.complains = data;
      }
    )
  }

  searchByName(){
    if(this.id==""){
      this.ngOnInit()
    } else{
      console.log("search")
      this.complains = this.complains.filter(
        res=>{
          return res.complainId.toLocaleLowerCase().match(this.id.toLocaleLowerCase())
        }
      )
    }
  }

}
