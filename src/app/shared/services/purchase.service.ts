import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { ResponseP } from "src/app/shared/Models/RequestResponse";

@Injectable({
    providedIn: 'root'
  })
export class PurchaseService {

    constructor(private _apiService: ApiService) {}

    getAllPurchaseByTypeAndStatus(url) : Observable<any> {
        return new Observable<any>( obs => {
            this._apiService.get(url).subscribe(res => {
                obs.next(res);
            })
        });
    }

    //For all purchase,sales,grn etc
    getAllResponse(url) : Observable<ResponseP> {
        return new Observable<any>( obs => {
            this._apiService.get(url).subscribe(res => {
                obs.next(res);
            })
        });
    }

}