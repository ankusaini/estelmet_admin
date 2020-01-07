import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { distinctUntilChanged } from "rxjs/internal/operators/distinctUntilChanged";
import { ReplaySubject } from "rxjs/internal/ReplaySubject";
import { ApiService } from "./api.service";
import { Router } from "@angular/router";
import {
  ProductCategory,
  ProductShape,
  ProductClass,
  ProductCoating,
  ProductDefect,
  ProductOrigin,
  ProductOiling,
  ProductSurfaceCoating,
  ProductAnnealing,
  ProductFinish,
  ProductTemper,
  ProductHardness,
  ProductPackaging,
  ProductType
} from "src/app/shared/Models/product.model.";
import { Company } from "src/app/shared/Models/company.model.";
import { Warehouse } from "src/app/shared/Models/warehouse";


@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private _apiService: ApiService, private router: Router) {}

  /**
   * @description get category of product
   * @param url 
   * @returns list
   */
  getProductCategory(url: string): Observable<ProductCategory[]> {
    return new Observable<ProductCategory[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

//component=>service=>glocalService(apiservice=>httpclient)
  setProductType(productType:ProductType):Observable<ProductType[]>
  {
    let path="http://13.233.151.89:8020/estelmet/inventory/productClassification/setProductType";
    console.log("url is",path)
    return new Observable<ProductType[]>(obs=>{
      this._apiService.post(path,productType).subscribe(res=>{
        obs.next(res);
      });
    });
  }
  //  setProductType(productType: ProductType): Observable<ProductType> {
  //   return this._apiService.post<ProductType>(AppConstants.baseURL + 'estelmet/inventory/productClassification/setProductType', productType)
  //     .pipe(catchError(this.errorHandler));
  // }


   /**
   * @description get category of product
   * @param url 
   * @returns list
   */
  getProductShape(url: string): Observable<ProductShape[]> {
    return new Observable<ProductShape[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }



     /**
   * @description get category of product
   * @param url 
   * @returns list
   */
  getAllCompany(url: string): Observable<Company[]> {
    return new Observable<Company[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }


  
     /**
   * @description get category of product
   * @param url 
   * @returns list
   */
  getAllWarehouse(url: string): Observable<Warehouse[]> {
    return new Observable<Warehouse[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

    
     /**
   * @description get category of product
   * @param url 
   * @returns list
   */
  getAllWarehouseByCompanyId(url: string): Observable<Warehouse[]> {
    return new Observable<Warehouse[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  



       /**
   * @description get category of product
   * @param url 
   * @returns list
   */
  getProductType(url: string): Observable<ProductType[]> {
    return new Observable<ProductType[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }


         /**
   * @description get category of product
   * @param url 
   * @returns list
   */
  getProductCoating(url: string): Observable<ProductCoating[]> {
    return new Observable<ProductCoating[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }




           /**
   * @description get category of product
   * @param url 
   * @returns list
   */
  getProductDefect(url: string): Observable<ProductDefect[]> {
    return new Observable<ProductDefect[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }



           /**
   * @description get category of product
   * @param url 
   * @returns list
   */
  getProductOrigin(url: string): Observable<ProductOrigin[]> {
    return new Observable<ProductOrigin[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }


           /**
   * @description get category of product
   * @param url 
   * @returns list
   */
  getProductOiling(url: string): Observable<ProductOiling[]> {
    return new Observable<ProductOiling[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }


           /**
   * @description get category of product
   * @param url 
   * @returns list
   */
  getProductSurfaceCoating(url: string): Observable<ProductSurfaceCoating[]> {
    return new Observable<ProductSurfaceCoating[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }


           /**
   * @description get category of product
   * @param url 
   * @returns list
   */
  getProductAnnealing(url: string): Observable<ProductAnnealing[]> {
    return new Observable<ProductAnnealing[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }


           /**
   * @description get category of product
   * @param url 
   * @returns list
   */
  getProductFinish(url: string): Observable<ProductFinish[]> {
    return new Observable<ProductFinish[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }


           /**
   * @description get category of product
   * @param url 
   * @returns list
   */
  getProductTemper(url: string): Observable<ProductTemper[]> {
    return new Observable<ProductTemper[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }


           /**
   * @description get category of product
   * @param url 
   * @returns list
   */
  getProductHardness(url: string): Observable<ProductHardness[]> {
    return new Observable<ProductHardness[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

           /**
   * @description get category of product
   * @param url 
   * @returns list
   */
  getProductPackaging(url: string): Observable<ProductPackaging[]> {
    return new Observable<ProductPackaging[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }



           /**
   * @description get category of product
   * @param url 
   * @returns list
   */
  getProductClass(url: string): Observable<ProductClass[]> {
    return new Observable<ProductClass[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }



           /**
   * @description get category of product
   * @param url 
   * @returns list
   */
  getAllPurchaseByTypeAndStatus(url: string): Observable<ProductClass[]> {
    return new Observable<ProductClass[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }





}
