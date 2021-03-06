import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { map } from 'rxjs/operators';
import { User } from '../../Models/user.model';
import { ApiService } from '../api.service';
import { JwtService } from './jwt.service';

// import { UserService } from '../user.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private jwtService: JwtService,
    private apiService: ApiService,
    private router: Router,
    // private _commonService : CommonService,
  ) { }

  // Response we are getting is accessToken and tokenType which are not presesnt
  // in user class


  populate() {
    // If JWT detected, attempt to get & store user's info
    if (this.jwtService.getToken()) {
      this.apiService.get('/getLoggedInUser')
        .subscribe(
          data => this.setAuth(data.data),
          err => this.purgeAuth()
        );
    } else {
      // Remove any potential remnants of previous auth states
      this.purgeAuth();
    }
  }

  // Response we are getting is accessToken and tokenType which are not presesnt in user class

  setAuth(token) {
    // console.log('user us' + JSON.stringify(user));

    // Save JWT sent from server in localstorage
    this.jwtService.saveToken(token);
    // Set current user data into observable
    // this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);

    // this.saveUser(user);
  }

  logout() {
    console.log('logout');
    this.purgeAuth();

    this.router.navigate(['/account/login']);
    //
  }

  purgeAuth() {
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next({} as User);
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
    this.destroyUser();
  }

  attemptAuth(credentials): Observable<User> {
    const route = '/login';
    return this.apiService.post(route, credentials).pipe(
      map(data => {
        console.log('login res', data.headers.get('authorization'));
        this.setAuth(data.headers.get('authorization'));
        // this.getUserById(data.headers.get('ID'));
        return data;
      }
      ));
  }

  attempiSignUp(credentials) {
    const route = '/signup';
    return this.apiService.post(route, credentials).pipe(
      map(data => {
        return data;
      }
      ));
  }

  signupEmployee(credentials) {
    const route = '/signupEmployee';
    return this.apiService.post(route, credentials).pipe(
      map(data => {
        return data.body;
      }
      ));
  }

  getAllAccount() {
    const params: HttpParams = new HttpParams()
    .set('userType', 'EMPLOYEE')
    .set('enabled', 'true')
    .set('limit', '20')
    .set('offset', '1');
    const route = '/getAllDeactivatedAccount';
    return this.apiService.get(route, params).pipe(
      map(data => {
        return data.data;
      }
      ));
  }

  // getUserById(userId) {
  //   this._commonService.getUserById(userId).subscribe((res)=>{
  //     console.log(res);
  //   })
  // }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  getUser(): User {
    return JSON.parse(window.localStorage.getItem('user'));
  }

  destroyUser() {
    window.localStorage.removeItem('user');
  }

  saveUser(user) {
    window.localStorage['user'] = JSON.stringify(user);
  }

  // Update the user on the server (email, pass, etc)
  update(user): Observable<User> {
    return this.apiService
      .put('/user', { user })
      .pipe(map(data => {
        // Update the currentUser observable
        this.currentUserSubject.next(data['user']);
        return data['user'];
      }));
  }

}
