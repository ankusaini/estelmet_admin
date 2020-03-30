import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { HttpParams } from '@angular/common/http';
import { User, UserGroup } from 'src/app/shared/Models/user.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _apiService: ApiService) { }

  getAllUserByUserRoleAndStatus(url): Observable<User[]> {
    return new Observable<User[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res.data);
      });
    });
  }


  getAllUsersForDashboard(url): Observable<User[]> {
    return new Observable<User[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getAllUserByUserGroupRoleAndStatus(url): Observable<UserGroup[]> {
    return new Observable<UserGroup[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res.data);
      });
    });
  }

  findUserGroupById(url): Observable<UserGroup> {
    return new Observable<UserGroup>(obs => {
      this._apiService.get(url).subscribe(res => {
        console.log(res);
        obs.next(res.data);
      });
    });
  }

  createUserGroup(url, data): Observable<UserGroup> {
    return new Observable<UserGroup>(obs => {
      this._apiService.post(url, data).subscribe(res => {
        console.log(res);
        obs.next(res.body.data);
      });
    });
  }

  saveUser(data): Observable<User> {
    return new Observable<User>(obs => {
      this._apiService.post('/users/createUser', data).subscribe(res => {
        console.log(res);
        obs.next(res.body);
      });
    });
  }

  updateUser(path, body) {
    return new Observable<User>(obs => {
      this._apiService.put(path, body).subscribe(res => {
        obs.next(res.body);
      });
    })
  }

  updateUserGroup(path, body) {
    return new Observable<UserGroup>(obs => {
      this._apiService.put(path, body).subscribe(res => {
        obs.next(res.body);
      });
    })
  }
      // this.router.navigateByUrl('/users/find?userId='+ user.id);

  getUserById(userId) {
    return new Observable<User>(obs => {
      this._apiService.get("/users/find?userId="+ userId).subscribe(res => {
        obs.next(res.data);
      });
    });
  }

  sendOTP(url) {
    return new Observable<any>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  uploadImage(file, path) {
    let formData = new FormData();
    formData.append('file', file);
    // console.log("formdata is",formData);
    return new Observable<any>(obs => {
      this._apiService.postWithMedia(path, formData).subscribe(res => {
        console.log(res);
        obs.next(res.body);
      });
    });
  }

  forgetPassword(path, body) {
    return new Observable<any>(obs => {
      this._apiService.post(path, body).subscribe(res => {
        obs.next(res);
      });
    });
  }
}
