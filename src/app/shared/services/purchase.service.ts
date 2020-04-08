import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseP } from 'src/app/shared/Models/RequestResponse';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class PurchaseService {

    constructor(private apiService: ApiService) { }

    getAllPurchaseByTypeAndStatus(url): Observable<any> {
        return new Observable<any>(obs => {
            this.apiService.get(url).subscribe(res => {
                obs.next(res);
            });
        });
    }

    // For all purchase,sales,grn etc
    getAllResponse(url): Observable<ResponseP> {
        return new Observable<any>(obs => {
            this.apiService.get(url).subscribe(res => {
                obs.next(res);
            });
        });
    }
}
