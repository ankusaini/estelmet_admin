import { Injectable } from '@angular/core';
import { ApiService } from "src/app/shared/services/api.service";
import { Observable } from "rxjs/internal/Observable";
import { ProductClass } from '../../Models/product.model.';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

    constructor(
      private _apiService: ApiService
    ) { }

    saveProductClass(data:any) : Observable<ProductClass> {
        return new Observable(obs=>{
            this._apiService.post('/inventory/productClassification/setProductClass',data).subscribe(res=>{
                obs.next(res.body);
                obs.complete();
            })
        });
    }
 

}
