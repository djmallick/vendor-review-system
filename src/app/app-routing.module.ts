import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminVendorRequestComponent } from './admin/admin-vendor-request/admin-vendor-request.component';
import { FoodieDetailsComponent } from './admin/foodie-details/foodie-details.component';
import { VendorDetailsComponent } from './admin/vendor-details/vendor-details.component';
import { ViewComplaintComponent } from './admin/view-complaint/view-complaint.component';
import { ViewReviewComponent } from './admin/view-review/view-review.component';
import { FoodieAuthGuardGuard } from './auth-guard/foodie-auth-guard.guard';
import { VendorAuthGuardGuard } from './auth-guard/vendor-auth-guard.guard';
import { FoodieHomeComponent } from './foodie/foodie-home/foodie-home.component';
import { FoodieRegistrationComponent } from './foodie/foodie-registration/foodie-registration.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { VendorHomeComponent } from './vendor/vendor-home/vendor-home.component';
import { VendorPaymentComponent } from './vendor/vendor-payment/vendor-payment.component';
import { VendorPlanSelectComponent } from './vendor/vendor-plan-select/vendor-plan-select.component';
import { VendorRaiseComplainComponent } from './vendor/vendor-raise-complain/vendor-raise-complain.component';
import { VendorRegistrationSuccessfulComponent } from './vendor/vendor-registration-successful/vendor-registration-successful.component';
import { VendorRegistrationComponent } from './vendor/vendor-registration/vendor-registration.component';
import { VendorViewProfileComponent } from './vendor/vendor-view-profile/vendor-view-profile.component';
import { VendorViewReviewComponent } from './vendor/vendor-view-review/vendor-view-review.component';
import { FoodieViewReviewComponent } from './foodie/foodie-view-review/foodie-view-review.component';
import { FoodieReviewComponent } from './foodie/foodie-review/foodie-review.component';
import { FoodieViewProfileComponent } from './foodie/foodie-view-profile/foodie-view-profile.component';
import { GenerateReportComponent } from './admin/generate-report/generate-report.component';
import { AdminAuthGuardGuard } from './auth-guard/admin-auth-guard.guard';
import { FoodieRegistrationSuccessComponent } from './foodie/foodie-registration-success/foodie-registration-success.component';
import { VendorSearchComponent } from './vendor-search/vendor-search.component';



const routes: Routes = [
   {path:'', component:HomeComponent},
   {path:'login', component:LoginComponent},
   {path:'vendorregister', component:VendorRegistrationComponent},
   {path:'vendor/home', component:VendorHomeComponent, canActivate:[VendorAuthGuardGuard]},
   {path:'vendor/reviews', component:VendorViewReviewComponent, canActivate:[VendorAuthGuardGuard]},
   {path:'vendor/raisecomplaint', component:VendorRaiseComplainComponent, canActivate:[VendorAuthGuardGuard]},
   {path:'vendor/profile', component:VendorViewProfileComponent, canActivate:[VendorAuthGuardGuard]},
   {path:'vendorregister/plans', component:VendorPlanSelectComponent},
   {path:'vendorregister/payment', component:VendorPaymentComponent},
   {path:'vendorregister/success', component:VendorRegistrationSuccessfulComponent},

   {path:'foodieregister', component:FoodieRegistrationComponent},
   {path:'foodieregister/success', component:FoodieRegistrationSuccessComponent},
   {path:'foodie/home',component:FoodieHomeComponent, canActivate:[FoodieAuthGuardGuard]},
   {path:'foodie/viewReviews', component:FoodieViewReviewComponent, canActivate:[FoodieAuthGuardGuard]},
   {path:'foodie/review', component:FoodieReviewComponent,  canActivate:[FoodieAuthGuardGuard]},
   {path:'foodie/profile', component:FoodieViewProfileComponent,  canActivate:[FoodieAuthGuardGuard]},

   {path:'admin/home', component:AdminHomeComponent, canActivate:[AdminAuthGuardGuard]},
   {path:'admin/vendorRequest', component:AdminVendorRequestComponent, canActivate:[AdminAuthGuardGuard]},
   {path:'admin/vendorDetails', component:VendorDetailsComponent, canActivate:[AdminAuthGuardGuard]},
   {path:'admin/foodieDetails', component:FoodieDetailsComponent, canActivate:[AdminAuthGuardGuard]},
   {path:'admin/viewReview', component:ViewReviewComponent, canActivate:[AdminAuthGuardGuard]},
   {path:'admin/viewComplain', component:ViewComplaintComponent, canActivate:[AdminAuthGuardGuard]},
   {path:'admin/login', component:AdminLoginComponent},
   {path:'admin/generate-report', component:GenerateReportComponent, canActivate:[AdminAuthGuardGuard]},

   {path:'vendor-search', component:VendorSearchComponent}
   
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
