import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Foodie } from '../../foodie/model-class/foodie';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-foodie-details',
  templateUrl: './foodie-details.component.html',
  styleUrls: ['./foodie-details.component.css']
})
export class FoodieDetailsComponent implements OnInit {

  foodies:Foodie[] = [];
  name:string;
  p=1;

  constructor(private adminService: AdminService, private router: Router) {  
   }

  ngOnInit(): void {
    this.adminService.getFoodieDetails().subscribe(
      data=>{
        this.foodies = data;
      }
    )
  }

  searchByName(){
    if(this.name==""){
      this.ngOnInit()
    } else{
      console.log("search")
      this.foodies = this.foodies.filter(
        res=>{
          return res.firstName.toLocaleLowerCase().match(this.name.toLocaleLowerCase())
        }
      )
    }
  }

}
