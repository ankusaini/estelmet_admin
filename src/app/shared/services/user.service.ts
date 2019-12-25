import { Injectable } from '@angular/core';
import { ApiService } from "src/app/shared/services/api.service";
import { HttpParams } from "@angular/common/http";
import { User } from "src/app/shared/Models/user.model";
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

}
