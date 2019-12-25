import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest, HttpHandler,HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpTokenInterceptorService  implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const token = this.jwtService.getToken();
    let token = "estelmet eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJmaXJzdE5hbWVcIjpudWxsLFwicm9sZXNcIjpbXCJJTlZFTlRPUllfQ1JFQVRFX1BSSVZJTEVHRVwiLFwiSU5WRU5UT1JZX0RFTEVURV9QUklWSUxFR0VcIixcIklOVkVOVE9SWV9VUERBVEVfUFJJVklMRUdFXCIsXCJQVVJDSEFTRV9DUkVBVEVfUFJJVklMRUdFXCIsXCJQVVJDSEFTRV9ERUxFVEVfUFJJVklMRUdFXCIsXCJQVVJDSEFTRV9VUERBVEVfUFJJVklMRUdFXCIsXCJTQUxFU19DUkVBVEVfUFJJVklMRUdFXCIsXCJTQUxFU19ERUxFVEVfUFJJVklMRUdFXCIsXCJTQUxFU19VUERBVEVfUFJJVklMRUdFXCIsXCJVU0VSX0NSRUFURV9QUklWSUxFR0VcIixcIlVTRVJfREVMRVRFX1BSSVZJTEVHRVwiLFwiVVNFUl9VUERBVEVfUFJJVklMRUdFXCIsXCJXRUJTSVRFX0NSRUFURV9QUklWSUxFR0VcIixcIldFQlNJVEVfREVMRVRFX1BSSVZJTEVHRVwiLFwiV0VCU0lURV9VUERBVEVfUFJJVklMRUdFXCJdLFwibW9iaWxlXCI6ODg2MDk3NDg0MyxcInVzZXJEZXRhaWxJZFwiOm51bGwsXCJpZFwiOjIsXCJ1c2VybmFtZVwiOlwic3dhdGkudmlqYXlAZ3BnbG9iYWwuY29tXCJ9IiwiZXhwIjoxNTc4MTQ1ODgyfQ.BzwlNh1FtCB2QOt0IcDiGBC7U_0PoOKAlR_veqSuaqIoDIcrc-tCzLVSMq3wwajsJESW6sq4u0v4IR5FicbIUw"
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    console.log(token);

    if (token) {
      headersConfig['authorization'] = `${token}`;
    }

    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => { },
        (err: any) => {
            if (err instanceof HttpErrorResponse) {
                console.log("error",err);
            }
        }
    )
    );
  }

}
