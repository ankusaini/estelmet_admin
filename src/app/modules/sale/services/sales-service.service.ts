import { Injectable } from '@angular/core';
import { Observable } from "rxjs/internal/Observable";
import { ApiService } from 'src/app/shared/services/api.service';
import { RequestP, ResponseP } from 'src/app/shared/Models/RequestResponse';


@Injectable({
  providedIn: 'root'
})
export class SalesServiceService {

  constructor(private _apiService: ApiService) { }

    getAllSalesByTypeAndStatus(url): Observable<any> {
        return new Observable<any>( obs => {
            this._apiService.get(url).subscribe( res => {
                obs.next(res);
            })
        });
    }

    public updateRequestObject(path,requestObj:RequestP):Observable<ResponseP>
  {
    return new Observable<ResponseP>(obs=>{
      this._apiService.put(path,requestObj).subscribe(res=>{
        obs.next(res);
      });
    });
  }

}
