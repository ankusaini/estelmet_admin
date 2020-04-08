import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User, UserGroup } from 'src/app/shared/Models/user.model';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  getAllUserByUserRoleAndStatus(url): Observable<User[]> {
    return new Observable<User[]>(obs => {
      this.apiService.get(url).subscribe(res => {
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

  getAllUserByUserGroupRoleAndStatus(url): Observable<UserGroup[]> {
    return new Observable<UserGroup[]>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res.data);
      });
    });
  }

  findUserGroupById(url): Observable<UserGroup> {
    return new Observable<UserGroup>(obs => {
      this.apiService.get(url).subscribe(res => {
        console.log(res);
        obs.next(res.data);
      });
    });
  }

  createUserGroup(url, data): Observable<UserGroup> {
    return new Observable<UserGroup>(obs => {
      this.apiService.post(url, data).subscribe(res => {
        console.log(res);
        obs.next(res.body.data);
      });
    });
  }

  saveUser(data): Observable<User> {
    return new Observable<User>(obs => {
      this.apiService.post('/users/createUser', data).subscribe(res => {
        console.log(res);
        obs.next(res.body);
      });
    });
  }

  updateUser(path, body) {
    return new Observable<User>(obs => {
      this.apiService.put(path, body).subscribe(res => {
        obs.next(res.body);
      });
    });
  }

  updateUserGroup(path, body) {
    return new Observable<UserGroup>(obs => {
      this.apiService.put(path, body).subscribe(res => {
        obs.next(res.body);
      });
    });
  }
  // this.router.navigateByUrl('/users/find?userId='+ user.id);

  getUserById(userId) {
    return new Observable<User>(obs => {
      this.apiService.get('/users/find?userId=' + userId).subscribe(res => {
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
