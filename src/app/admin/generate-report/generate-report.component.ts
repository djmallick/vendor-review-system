import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { Report } from '../model-class/report';


@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent implements OnInit {
  reports: Report[] = [];
  reportObj: Report = new Report();
  fromDate: Date;
  toDate: Date;
  initial:boolean;
  constructor(private adminService: AdminService, private router: Router) {
    this.initial = false;
  }
  generateReport() {
    this.initial = true;
    this.adminService.generateReport(this.fromDate, this.toDate).subscribe(
      data => {
        console.log(data)
        this.reports=data;
    })

  }

  ngOnInit(): void {
  }


}

