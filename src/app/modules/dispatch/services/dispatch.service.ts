import { Injectable } from '@angular/core';
import { ApiService } from "src/app/shared/services/api.service";
import { HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { DeliveryOrder, Invoice } from "src/app/shared/Models/sales.model";
import { RequestP, ResponseP } from "src/app/shared/Models/RequestResponse";
import { Product } from 'src/app/shared/Models/product.model.';
@Injectable({
  providedIn: "root"
})
export class DispatchService {
  constructor(private _apiService: ApiService) {}
  getAllDeliveryOrderByStatus(url): Observable<DeliveryOrder[]> {
    return new Observable<DeliveryOrder[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getAllInvoice(url): Observable<Invoice[]> {
    return new Observable<Invoice[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  public saveRequestObject(path, requestObj: RequestP): Observable<ResponseP> {
    return new Observable<ResponseP>(obs => {
      this._apiService.post(path, requestObj).subscribe(res => {
        obs.next(res);
      });
    });
  }

  public updateRequestObject(
    path,
    requestObj: RequestP
  ): Observable<ResponseP> {
    return new Observable<ResponseP>(obs => {
      this._apiService.put(path, requestObj).subscribe(res => {
        obs.next(res);
      });
    });
  }

  public updateProductObject(
    path,
    requestObj: Product[]
  ): Observable<ResponseP> {
    return new Observable<ResponseP>(obs => {
      this._apiService.put(path, requestObj).subscribe(res => {
        obs.next(res);
      });
    });
  }

  public getAllSalesByTypeAndStatus(path): Observable<any> {
    return new Observable<any>(obs => {
      this._apiService.get(path).subscribe(res => {
        obs.next(res);
      });
    });
  }

  public getAllProductsByTypeAndStatus(path): Observable<Product[]> {
    return new Observable<Product[]>(obs => {
      this._apiService.get(path).subscribe(res => {
        obs.next(res);
      });
    });
  }
}
