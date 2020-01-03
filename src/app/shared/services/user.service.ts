import { Injectable } from '@angular/core';
import { ApiService } from "src/app/shared/services/api.service";
import { HttpParams } from "@angular/common/http";
import { User, UserGroup } from "src/app/shared/Models/user.model";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _apiService: ApiService) { }

  getAllUserByUserRoleAndStatus(url): Observable<User[]> {
    return new Observable<User[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getAllUserByUserGroupRoleAndStatus(url): Observable<UserGroup[]> {
    return new Observable<UserGroup[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  findUserGroupById(url): Observable<UserGroup> {
    return new Observable<UserGroup>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  createUserGroup(url,data): Observable<UserGroup> {
    return new Observable<UserGroup>(obs => {
      this._apiService.post(url,data).subscribe(res => {
        obs.next(res);
      });
    });
  }
  
  saveUser(data): Observable<User> {
     return new Observable<User>(obs => {
    this._apiService.post('/users/createUser',data).subscribe(res=>{
      console.log(res);
      obs.next(res.body);
    });
     });
  }

  updateUser(data) {
    this._apiService.put('/users/updateUser',data).subscribe(res=>{
      console.log(res);
    })
  }

  getUserById(userId) {
    return new Observable<User>(obs=>{
      this._apiService.get(`/users/find/${userId}`).subscribe(res=>{
          obs.next(res);
      });
    });   
  }

}
