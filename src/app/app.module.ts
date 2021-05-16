import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { VendorRegistrationComponent } from './vendor/vendor-registration/vendor-registration.component';
import { FoodieRegistrationComponent } from './foodie/foodie-registration/foodie-registration.component';
import { VendorHomeComponent } from './vendor/vendor-home/vendor-home.component';
import { VendorViewReviewComponent } from './vendor/vendor-view-review/vendor-view-review.component';
import { VendorRaiseComplainComponent } from './vendor/vendor-raise-complain/vendor-raise-complain.component';
import { VendorViewProfileComponent } from './vendor/vendor-view-profile/vendor-view-profile.component';
import { VendorPlanSelectComponent } from './vendor/vendor-plan-select/vendor-plan-select.component';
import { VendorPaymentComponent } from './vendor/vendor-payment/vendor-payment.component';
import { VendorRegistrationSuccessfulComponent } from './vendor/vendor-registration-successful/vendor-registration-successful.component';
import { VendorNavComponent } from './vendor/vendor-nav/vendor-nav.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { AdminVendorRequestComponent } from './admin/admin-vendor-request/admin-vendor-request.component';
import { VendorDetailsComponent } from './admin/vendor-details/vendor-details.component';
import { FoodieDetailsComponent } from './admin/foodie-details/foodie-details.component';
import { ViewComplaintComponent } from './admin/view-complaint/view-complaint.component';
import { ViewReviewComponent } from './admin/view-review/view-review.component';
import { FoodieHomeComponent } from './foodie/foodie-home/foodie-home.component';
import { FoodieNavComponent } from './foodie/foodie-nav/foodie-nav.component';

import { FoodieViewReviewComponent } from './foodie/foodie-view-review/foodie-view-review.component';
import { FoodieReviewComponent } from './foodie/foodie-review/foodie-review.component';
import { FoodieViewProfileComponent } from './foodie/foodie-view-profile/foodie-view-profile.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { GenerateReportComponent } from './admin/generate-report/generate-report.component';

import { VendorAuthGuardGuard } from './auth-guard/vendor-auth-guard.guard';
import { FoodieAuthGuardGuard } from './auth-guard/foodie-auth-guard.guard';
import { AdminAuthGuardGuard } from './auth-guard/admin-auth-guard.guard';
import { FoodieRegistrationSuccessComponent } from './foodie/foodie-registration-success/foodie-registration-success.component';
import { VendorSearchComponent } from './vendor-search/vendor-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavComponent,
    VendorRegistrationComponent,
    FoodieRegistrationComponent,
    VendorHomeComponent,
    VendorViewReviewComponent,
    VendorRaiseComplainComponent,
    VendorViewProfileComponent,
    VendorPlanSelectComponent,
    VendorPaymentComponent,
    VendorRegistrationSuccessfulComponent,
    VendorNavComponent,
    AdminHomeComponent,
    AdminNavComponent,
    AdminVendorRequestComponent,
    VendorDetailsComponent,
    FoodieDetailsComponent,
    ViewComplaintComponent,
    ViewReviewComponent,
    FoodieHomeComponent,
    FoodieNavComponent,
    FoodieViewReviewComponent,
    FoodieReviewComponent,
    FoodieViewProfileComponent,
    AdminLoginComponent,
    GenerateReportComponent,
    FoodieRegistrationSuccessComponent,
    VendorSearchComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule
  ],
  providers: [VendorAuthGuardGuard, FoodieAuthGuardGuard, AdminAuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
