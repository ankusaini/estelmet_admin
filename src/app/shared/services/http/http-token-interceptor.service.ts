import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';
import { JwtService } from '../login/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class HttpTokenInterceptorService implements HttpInterceptor {

  constructor(private jwtService: JwtService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.jwtService.getToken();
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    if (token) {
      headersConfig['authorization'] = `${token}`;
    }

    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => { },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            console.log('error', err);
          }
        }
      )
    );
  }

}
