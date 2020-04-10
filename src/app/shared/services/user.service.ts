import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User, UserGroup, UserMini } from 'src/app/shared/Models/user.model';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  getAllUserByUserRoleAndStatus(selectedUserType,status,limit,offset): Observable<User[]> {
    let url =
      "/users/getAllUsersByUserRoleAndStatus?userRole=" + selectedUserType + "&status="+status+"&limit="+limit+"&offset="+offset;
      
    return new Observable<User[]>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res.data);
      });
    });
  }

  getAllUserByUserNameAndCompany(userRole,status): Observable<UserMini[]>
  {
    let url = '/users/getAllUsersNameAndComapny?userRole='+userRole+'&status='+status;
    return new Observable<UserMini[]>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res.data);
      });
    });
  }

  
getCountByUserRole(role)
{
  let url='/users/countByUserRole?userRole='+role;
    return new Observable<any>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res);
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

  getUserById(userId: number) {
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
