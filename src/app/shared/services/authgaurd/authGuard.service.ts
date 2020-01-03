import { UserLoginService } from "../login/userLogin.service";
import { Observable } from "rxjs/internal/Observable";
import { Injectable } from "@angular/core";
import {
  ActivatedRoute,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { take } from "rxjs/internal/operators/take";
import { CanActivateChild, CanActivate } from "@angular/router";
import { User, UserRole } from '../../Models/user.model';
import { JwtService } from '../login/jwt.service';

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  loginStatus: boolean;
  public user: User;

  constructor(
    private router: Router,
    private userService: UserLoginService,
    private _jwtService : JwtService,

  ) {
    //this.data.currentStatus.subscribe(login => this.loginStatus = login);
    //this.user= JSON.parse(this.userService.getUser());
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // let temp = this.userService.getUser();
    // //  this.user= JSON.parse(this.userService.getUser());
    // //alert("auth"+JSON.stringify(this.user));

    // if (temp != undefined) {
    //   if (!Object.keys(temp).length) {
    //     this.router.navigateByUrl("/account/login");
    //     return false;
    //   } else {
    //     this.user = JSON.parse(this.userService.getUser());
    //     if (this.user.userRole == UserRole.CUSTOMER) {
    //       this.router.navigateByUrl("/account/login");
    //       return false;
    //     } else {
    //       return true;
    //     }
    //   }
    // } else {
    //   this.router.navigateByUrl("/account/login");
    //   return false;
    // }
    if(this._jwtService.getToken()){
      return true;
    } else{
      this.router.navigate(['/account/login'],{queryParams:{'redirectURL':state.url}});
      // this.router.navigateByUrl("/classic/account/login");
      return false;
    }
    //
    // return true;
    // return this.userService.isAuthenticated.pipe(take(1));
  }
}
