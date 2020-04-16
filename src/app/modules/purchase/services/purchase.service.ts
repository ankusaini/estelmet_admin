import { Injectable } from '@angular/core';
import { RequestP, ResponseP } from "src/app/shared/Models/RequestResponse";
import { Observable } from "rxjs";
import { ApiService } from "src/app/shared/services/api.service";
import { ApiUrl } from 'src/app/shared/services/apiContant';
import { ProductCategory } from "src/app/shared/Models/product.model.";

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private _apiService:ApiService) { }

  

  //   public saveRequestObject(requestObj:RequestP):Observable<ResponseP>
  // {
  //   return new Observable<ResponseP>(obs=>{
  //     this._apiService.post(ApiUrl.updateGrnWithProduct, requestObj).subscribe(res=>{
  //       obs.next(res.body);
  //     });
  //   });
  // }

  public updateGrnWithProduct(requestObj:RequestP):Observable<ResponseP>
  {
    return new Observable<ResponseP>(obs=>{
      this._apiService.post(ApiUrl.updateGrnWithProduct, requestObj).subscribe(res=>{
        obs.next(res.body);
      });
    });
  }

  public createGrn(requestObj:RequestP):Observable<ResponseP>
  {
    return new Observable<ResponseP>(obs=>{
      this._apiService.post(ApiUrl.createGrn , requestObj).subscribe(res=>{
        obs.next(res.body);
      });
    });
  }

  public createMaterialTransfer(requestObj:RequestP):Observable<ResponseP>
  {
    return new Observable<ResponseP>(obs=>{
      this._apiService.post(ApiUrl.createMaterialTransfer ,requestObj).subscribe(res=>{
        obs.next(res.body);
      });
    });
  }

  public createPurchase(requestObj:RequestP):Observable<ResponseP>
  {
    return new Observable<ResponseP>(obs=>{
      this._apiService.post(ApiUrl.createPurchase, requestObj).subscribe(res=>{
        obs.next(res.body);
      });
    });
  }

  // public updateRequestObject(requestObj:RequestP):Observable<ResponseP>
  // {
  //   return new Observable<ResponseP>(obs=>{
  //     this._apiService.put(requestObj).subscribe(res=>{
  //       obs.next(res);
  //     });
  //   });
  // }

  public updatePurchase(requestObj:RequestP):Observable<ResponseP>
  {
    return new Observable<ResponseP>(obs=>{
      this._apiService.put(ApiUrl.updatePurchase, requestObj).subscribe(res=>{
        obs.next(res);
      });
    });
  }

  public updatePurchaseWithProduct(requestObj:RequestP):Observable<ResponseP>
  {
    return new Observable<ResponseP>(obs=>{
      this._apiService.put(ApiUrl.updatePurchaseWithProduct, requestObj).subscribe(res=>{
        obs.next(res);
      });
    });
  }

  public updatePurchaseHistory(requestObj:RequestP):Observable<ResponseP>
  {
    return new Observable<ResponseP>(obs=>{
      this._apiService.put(ApiUrl.updatePurchaseHistory, requestObj).subscribe(res=>{
        obs.next(res);
      });
    });
  }

  // public findRequstObjectById()
  // {
  //   return new Observable<ResponseP>(obs=>{
  //     this._apiService.get('').subscribe(res=>{
  //       obs.next(res);
  //     });
  //   });
  // } getGrnById

  public getGrnById(grnId)
  {
    return new Observable<ResponseP>(obs=>{
      this._apiService.get(ApiUrl.getGrnById+ "/" +grnId).subscribe(res=>{
        obs.next(res);
      });
    });
  }

  public findPurchase(purchaseId)
  {
    return new Observable<ResponseP>(obs=>{
      this._apiService.get(ApiUrl.findPurchase+ "/" +purchaseId).subscribe(res=>{
        obs.next(res);
      });
    });
  }

  public getAllPurchaseByTypeAndStatus(purchaseType, status) {
    return new Observable<ResponseP>(obs => {
      this._apiService.get(ApiUrl.getAllPurchaseByTypeAndStatus + "/" + purchaseType + "/" + status).subscribe(res => {
        obs.next(res);
      });
    });
  }

  public getAllGrn() {
    return new Observable<any>(obs => {
      this._apiService.get(ApiUrl.getAllGrn).subscribe(res => {
        obs.next(res);
      })
    })
  }

  public getAllGrnByStatus(status) {
    return new Observable<any>(obs => {
      this._apiService.get(ApiUrl.getAllGrnByStatus+ '/' + status).subscribe(res => {
        obs.next(res);
      })
    })
  }

  public getPurchaseOrderByPo(purchaseOderId)
  {
  //  let url= '/purchase/getPurchaseOrderByPo?purchaseOderId='+purchaseOderId;
   return new Observable<any>(obs => {
    this._apiService.get(ApiUrl.getPurchaseOrderByPo+ "/" +purchaseOderId).subscribe(res => {
        obs.next(res);
      })
    })
  }
   public getPurchaseOrderByUser(supplierId)
  {
  //  let url= '/purchase/getPurchaseOrderByUser?supplierId='+supplierId;
   return new Observable<any>(obs => {
    this._apiService.get(ApiUrl.getPurchaseOrderByUser+ "/" + supplierId).subscribe(res => {
        obs.next(res);
      })
    })
  }

  public savePurchaseOrder(purchaseId,userId,productId,price)
  {
    // let url= '/purchase/savePurchaseOrder?purchaseId='+purchaseId+'&userId='+userId+'&productId'+productId+'&price='+price;
   return new Observable<any>(obs => {
    this._apiService.get(ApiUrl.savePurchaseOrder+ "/" +purchaseId+ "/" +userId+ "/" +productId+ "/" +price).subscribe(res => {
        obs.next(res);
      })
    })
  }

      // For all purchase,sales,grn etc
    getAllResponse(url): Observable<any> {
        return new Observable<any>(obs => {
            this._apiService.get(url).subscribe(res => {
                obs.next(res);
            });
        });
    }

    getAllProductsForDashboard(category)
    {
      let url ="/inventory/dashboard";
     
       return new Observable<any>(obs => {
            this._apiService.post(url,category).subscribe(res => {
                obs.next(res);
            });
        });
    }
}
