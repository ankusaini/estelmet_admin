import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from 'src/app/shared/services/api.service';


@Injectable({
    providedIn: 'root'
})
export class SalesService {

    constructor(private apiService: ApiService) { }

    getAllSalesByTypeAndStatus(url): Observable<any> {
        return new Observable<any>(obs => {
            this.apiService.get(url).subscribe(res => {
                obs.next(res);
            });
        });
    }
}
