import { Injectable } from '@angular/core';
import { RequestP, ResponseP } from "src/app/shared/Models/RequestResponse";
import { Observable } from "rxjs";
import { ApiService } from "src/app/shared/services/api.service";

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private _apiService:ApiService) { }

  

    public saveRequestObject(path,requestObj:RequestP):Observable<ResponseP>
  {
    return new Observable<ResponseP>(obs=>{
      this._apiService.post(path,requestObj).subscribe(res=>{
        obs.next(res);
      });
    });
  }
}
