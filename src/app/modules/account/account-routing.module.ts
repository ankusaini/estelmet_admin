import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgotPass/forgotPassword/forgotPassword.component';


const routes: Routes = [
  {
    path: 'login',
    component : LoginComponent,
  },
  {
    path: 'forgotPass',
    component : ForgotPasswordComponent,
  },
 ]
  


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
