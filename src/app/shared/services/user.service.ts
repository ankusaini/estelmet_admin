import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User, UserGroup, UserMini } from 'src/app/shared/Models/user.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { ApiUrl } from './apiContant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  getAllUserByUserRoleAndStatus(userRole, status, limit, offset): Observable<User[]> {
    const params: HttpParams = new HttpParams()
      .set('userRole', userRole)
      .set('status', status)
      .set('limit', limit)
      .set('offset', offset);
    return new Observable<User[]>(obs => {
      this.apiService.get(ApiUrl.getAllUsersByUserRoleAndStatus, params).subscribe(res => {
        obs.next(res.data);
      });
    });
  }

  getAllUserByUserNameAndCompany(userRole, status): Observable<UserMini[]> {
    const params: HttpParams = new HttpParams()
      .set('userRole', userRole)
      .set('status', status);
    return new Observable<UserMini[]>(obs => {
      this.apiService.get(ApiUrl.getAllUsersNameAndComapny, params).subscribe(res => {
        obs.next(res.data);
      });
    });
  }

  searchUserByProduct(body) {
    // const params: HttpParams = new HttpParams()
    //   .set('userRole', role);
    return new Observable<any>(obs => {
      this.apiService.post(ApiUrl.searchUserByProduct, body).subscribe(res => {
        obs.next(res.body);
      });
    });
  }

  getCountByUserRole() {
    // const params: HttpParams = new HttpParams()
    //   .set('userRole', role);
    return new Observable<any>(obs => {
      this.apiService.get(ApiUrl.countByUserRole).subscribe(res => {
        obs.next(res.data);
      });
    });
  }

  getAllUsersForDashboard(url): Observable<User[]> {
    return new Observable<User[]>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getAllUserByUserGroupRoleAndStatus(role, status, limit, offset ): Observable<UserGroup[]> {
    const params: HttpParams = new HttpParams()
    .set('userRole', role)
    .set('status', status)
    .set('limit', limit)
    .set('offset', offset);
    return new Observable<UserGroup[]>(obs => {
      this.apiService.get(ApiUrl.getAllUserGroupByUserRoleAndStatus, params).subscribe(res => {
        obs.next(res.data);
      });
    });
  }

  findUserGroupById(userGroupId): Observable<UserGroup> {
    const params: HttpParams = new HttpParams()
    .set('userGroupId', userGroupId);
    return new Observable<UserGroup>(obs => {
      this.apiService.get(ApiUrl.findUserGroupById, params).subscribe(res => {
        console.log(res);
        obs.next(res.data);
      });
    });
  }

  createUserGroup(body): Observable<UserGroup> {
    return new Observable<UserGroup>(obs => {
      this.apiService.post(ApiUrl.createUserGroup, body).subscribe(res => {
        console.log(res);
        obs.next(res.body.data);
      });
    });
  }

  saveUser(data): Observable<User> {
    return new Observable<User>(obs => {
      this.apiService.post(ApiUrl.createUser, data).subscribe(res => {
        console.log(res);
        obs.next(res.body);
      });
    });
  }

  updateUser(body) {
    return new Observable<User>(obs => {
      this.apiService.put(ApiUrl.updateUser, body).subscribe(res => {
        obs.next(res.body);
      });
    });
  }

  updateUserGroup( body) {
    return new Observable<UserGroup>(obs => {
      this.apiService.put(ApiUrl.updateUserInGroup, body).subscribe(res => {
        obs.next(res.body);
      });
    });
  }


  getUserById(userId) {
    const params: HttpParams = new HttpParams()
    .set('userId', userId);
    return new Observable<User>(obs => {
      this.apiService.get(ApiUrl.getUserById, params).subscribe(res => {
        obs.next(res.data);
      });
    });
  }

  sendOTP(mobile: string, email: string) {
    const params: HttpParams = new HttpParams()
      .set('number', mobile)
      .set('email', email);
    return new Observable<any>(obs => {
      this.apiService.get(`/common/sendOtp`, params).subscribe(res => {
        obs.next(res);
      });
    });
  }

  existsByEmailId(email: string) {
    const params: HttpParams = new HttpParams()
      .set('email', email);
    return new Observable<any>(obs => {
      this.apiService.get(`/common/existsByEmailId`, params).subscribe(res => {
        obs.next(res);
      });
    });
  }

  verifyOtp(mobile, otp) {
    const params: HttpParams = new HttpParams()
      .set('number', mobile)
      .set('otp', otp);
    return new Observable<any>(obs => {
      this.apiService.get('/common/verifyOtp', params).subscribe(res => {
        obs.next(res);
      });
    });
  }

  uploadImage(file, path) {
    const formData = new FormData();
    formData.append('file', file);
    return new Observable<any>(obs => {
      this.apiService.postWithMedia(path, formData).subscribe(res => {
        console.log(res);
        obs.next(res.body);
      });
    });
  }

  forgetPassword(path, body) {
    return new Observable<any>(obs => {
      this.apiService.post(path, body).subscribe(res => {
        obs.next(res);
      });
    });
  }
}
