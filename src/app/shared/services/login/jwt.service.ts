import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(
    private _cookieService :CookieService
  ) { }


  getToken(): string {
    // return window.localStorage['jwtToken'];
    return this._cookieService.get('token');
  }


  saveToken(token: string) {
    // window.localStorage['jwtToken'] = token;
    this._cookieService.set('token',token);
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
    this._cookieService.delete('token');
  }

}
