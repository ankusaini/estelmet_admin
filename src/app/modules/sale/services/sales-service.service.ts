import { Injectable } from '@angular/core';
import { Observable } from "rxjs/internal/Observable";
import { ApiService } from 'src/app/shared/services/api.service';
import { RequestP, ResponseP } from 'src/app/shared/Models/RequestResponse';
import { Company } from 'src/app/shared/Models/company.model.';
import { ProductCategory, ProductShape, Product } from 'src/app/shared/Models/product.model.';
import { User } from 'src/app/shared/Models/user.model';
import { CustomerOrder } from 'src/app/shared/Models/customer-order.model';


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

    public getAllSalesByTypeAndStatusCheck(type,status): Observable<any> {
          let url="/sales/getAllSalesByTypeAndStatus/"+type+"/"+status;

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
        obs.next(res.body);
      });
    });
  }


 getAllUserByUserRoleAndStatus(selectedUserType,status,limit,offset): Observable<User[]> {
    let url =
      "/users/getAllUsersByUserRoleAndStatus?userRole=" + selectedUserType + "&status="+status+"&limit="+limit+"&offset="+offset;
      
    return new Observable<User[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res.data);
      });
    });
  }


  getAllCustomerOrder() : Observable<CustomerOrder[]> {
    let url = '/sales/getAllCustomerOrder';
    return new Observable<CustomerOrder[]>( obs => {
      this._apiService.get(url).subscribe( res => {
        obs.next(res.customerOrderList);
      }, error => {
        console.log(error);
      })
    })
  }

  createCustomerOrder(body) : Observable<any> {
    let url = '/sales/createCustomerOrder';
    return new Observable<any>( obs => {
      this._apiService.post(url, body).subscribe( res => {
        obs.next(res);
      }, error => {
        console.log(error);
      })
    })
  }

  getCustomerOrder(id): Observable<any> {
    let url = '/sales/getCustomerOrder/' + id; 
    return new Observable<any>( obs => {
      this._apiService.get(url).subscribe( res => {
        obs.next(res);
      }, error => {
        console.log(error);
      });
    })
  }

  getProductBySalesId(id): Observable<any> {
    let url = '/inventory/sales/' + id;
    return new Observable<any>( obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      })
    });
  }

}
