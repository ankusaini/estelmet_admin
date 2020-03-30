import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpHeaders,
  HttpBackend
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/internal/operators/catchError';
import { JwtService } from 'src/app/shared/services/login/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private httpBackend: HttpBackend, private jwtTokenService: JwtService) { }

  private formatErrors(error: any) {
    return (error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(
      `${environment.base_url}${path}`,
      { params })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.base_url}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {

    return this.http.post(
      `${environment.base_url}${path}`,
      JSON.stringify(body), { observe: 'response' }
    ).pipe(catchError(this.formatErrors));
  }

  post2(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.base_url2}${path}`,
      JSON.stringify(body), { observe: 'response' }
    ).pipe(catchError(this.formatErrors));
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.base_url}${path}`
    ).pipe(catchError(this.formatErrors));
  }

  postWithMedia(path: string, body): Observable<any> {
    const HttpUploadOptions = {
      headers: new HttpHeaders({
        // "Content-Type": "multipart/form-data",
        Authorization: this.jwtTokenService.getToken()
      })
    };
    this.http = new HttpClient(this.httpBackend);
    return this.http
      .post(`${environment.base_url}${path}`, body, HttpUploadOptions)
      .pipe(catchError(this.formatErrors));
  }

}
