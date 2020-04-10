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
        obs.next(res.body);
      });
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

  public updateProduct(path,productList):Observable<any>
  {
    return new Observable<any>(obs=>{
      this._apiService.put(path,productList).subscribe(res=>{
        obs.next(res);
      });
    });
  }
  public findRequstObjectById(path)
  {
    return new Observable<ResponseP>(obs=>{
      this._apiService.get(path).subscribe(res=>{
        obs.next(res);
      });
    });
  }
  public getAllPurchaseByTypeAndStatus(url)
  {

    return new Observable<ResponseP>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });

  }
  public getAllGrnByStatus(url) {
    return new Observable<any>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      })
    })
  }

  public getPurchaseOrderByPo(purchaseOderId)
  {
   let url= '/purchase/getPurchaseOrderByPo?purchaseOderId='+purchaseOderId;
   return new Observable<any>(obs => {
    this._apiService.get(url).subscribe(res => {
        obs.next(res);
      })
    })
  }
   public getPurchaseOrderByUser(supplierId)
  {
   let url= '/purchase/getPurchaseOrderByUser?supplierId='+supplierId;
   return new Observable<any>(obs => {
    this._apiService.get(url).subscribe(res => {
        obs.next(res);
      })
    })
  }

  public savePurchaseOrder(purchaseId,userId,productId,price)
  {
    let url= '/purchase/savePurchaseOrder?purchaseId='+purchaseId+'&userId='+userId+'&productId'+productId+'&price='+price;
   return new Observable<any>(obs => {
    this._apiService.get(url).subscribe(res => {
        obs.next(res);
      })
    })
  }
}
