import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
    providedIn: 'root'
})
export class SalesService {

    constructor(private _apiService: ApiService) { }

    getAllSalesByTypeAndStatus(url): Observable<any> {
        return new Observable<any>(obs => {
            this._apiService.get(url).subscribe(res => {
                obs.next(res);
            });
        });
    }
}
