import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { AccountRoutingModule } from './account-routing.module';
import { ForgotPasswordComponent } from './pages/forgotPass/forgotPassword/forgotPassword.component';



@NgModule({
  declarations: [
      LoginComponent,
      ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
