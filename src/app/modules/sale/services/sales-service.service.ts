import { Injectable } from '@angular/core';
import { Observable } from "rxjs/internal/Observable";
import { ApiService } from 'src/app/shared/services/api.service';
import { RequestP, ResponseP } from 'src/app/shared/Models/RequestResponse';
import { Company } from 'src/app/shared/Models/company.model.';
import { ProductCategory, ProductShape, Product } from 'src/app/shared/Models/product.model.';
import { User } from 'src/app/shared/Models/user.model';


@Injectable({
  providedIn: 'root'
})
export class SalesServiceService {

  constructor(private _apiService: ApiService) { }

    public getAllSalesByTypeAndStatus(url): Observable<any> {
        return new Observable<any>( obs => {
            this._apiService.get(url).subscribe( res => {
                obs.next(res);
            })
        });
    }

    public updateRequestObject(url,requestObj:RequestP):Observable<ResponseP>
  {
    return new Observable<ResponseP>(obs=>{
      this._apiService.put(url,requestObj).subscribe(res=>{
        obs.next(res);
      });
    });
  }

  public getAllCompany(url) {
    return new Observable<Company[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  public getProductCategory(url) {
    return new Observable<ProductCategory[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  public getProductShape(url) {
    return new Observable<ProductShape[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  public getAllProductByProductStageAndStatus(url) {
    return new Observable<Product[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  public findRequstObjectById(url)
  {
    return new Observable<ResponseP>(obs=>{
      this._apiService.get(url).subscribe(res=>{
        obs.next(res);
      });
    });
  }

  public saveRequestObject(url,requestObj:RequestP):Observable<ResponseP>
  {
    return new Observable<ResponseP>(obs=>{
      this._apiService.post(url,requestObj).subscribe(res=>{
        obs.next(res);
      });
    });
  }

  public getAllUsersByUserRoleAndStatus(url) {
    return new Observable<User[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }



}
