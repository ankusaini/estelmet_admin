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
        obs.next(res.body);
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

  updateUser(path,data) {
    return new Observable<User>(obs => {
    this._apiService.put(path,data).subscribe(res=>{
      obs.next(res.body);
    });
    })
  }

  updateUserGroup(path,data)
  {
    return new Observable<UserGroup>(obs => {
 this._apiService.put(path,data).subscribe(res=>{
      obs.next(res.body);
    });
    })
  }
  getUserById(userId) {
    return new Observable<User>(obs=>{
      this._apiService.get(`/users/find/${userId}`).subscribe(res=>{
          obs.next(res);
      });
    });   
  }

  sendOTP(url) {
    return new Observable<any>(obs=>{
      this._apiService.get(url).subscribe(res=>{
          obs.next(res);
      });
    });   
  }

  uploadImage(file,path)
  {
    let formData = new FormData();
    formData.append('file', file);
    console.log("formdata is",formData);
     return new Observable<any>(obs => {
    this._apiService.post(path,file).subscribe(res=>{
      console.log(res);
      obs.next(res.body);
    });
     });
  }
}
