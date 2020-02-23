import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

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

}