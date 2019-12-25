import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  baseUrl=' http://13.233.151.89:8020';

  constructor(private http: HttpClient,) { }

    private formatErrors(error: any) {
      return   (error.error);
    }
  
    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
      return this.http.get(path, { params })
        .pipe(catchError(this.formatErrors));
    }
  
    put(path: string, body: Object = {}): Observable<any> {
      return this.http.put(
        this.baseUrl+`${path}`,
        JSON.stringify(body)
      ).pipe(catchError(this.formatErrors));
    }
  
    post(path: string, body: Object = {}): Observable<any> {
      
      return this.http.post(
        this.baseUrl+ `${path}`,
        JSON.stringify(body),{observe: 'response'}
      ).pipe(catchError(this.formatErrors));
    }
  
    delete(path): Observable<any> {
      return this.http.delete(
        this.baseUrl+`${path}`
      ).pipe(catchError(this.formatErrors));
    }
}