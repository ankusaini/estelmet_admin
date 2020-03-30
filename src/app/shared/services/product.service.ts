import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
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
} from 'src/app/shared/Models/product.model.';
import { Company } from 'src/app/shared/Models/company.model.';
import { Warehouse } from 'src/app/shared/Models/warehouse';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _apiService: ApiService, private router: Router) { }

  getProductCategory(url: string): Observable<ProductCategory[]> {
    return new Observable<ProductCategory[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
        console.log(res);
      });
    });
  }

  setProductType(productType: ProductType): Observable<ProductType[]> {
    const path = 'http://13.233.151.89:8020/estelmet/inventory/productClassification/setProductType';
    console.log('url is', path);
    return new Observable<ProductType[]>(obs => {
      this._apiService.post(path, productType).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getProductShape(url: string): Observable<ProductShape[]> {
    return new Observable<ProductShape[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getAllCompany(url: string): Observable<Company[]> {
    return new Observable<Company[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getAllWarehouse(url: string): Observable<Warehouse[]> {
    return new Observable<Warehouse[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getAllWarehouseByCompanyId(url: string): Observable<Warehouse[]> {
    return new Observable<Warehouse[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getProductType(url: string): Observable<ProductType[]> {
    return new Observable<ProductType[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getProductCoating(url: string): Observable<ProductCoating[]> {
    return new Observable<ProductCoating[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getProductDefect(url: string): Observable<ProductDefect[]> {
    return new Observable<ProductDefect[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getProductOrigin(url: string): Observable<ProductOrigin[]> {
    return new Observable<ProductOrigin[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getProductOiling(url: string): Observable<ProductOiling[]> {
    return new Observable<ProductOiling[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getProductSurfaceCoating(url: string): Observable<ProductSurfaceCoating[]> {
    return new Observable<ProductSurfaceCoating[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getProductAnnealing(url: string): Observable<ProductAnnealing[]> {
    return new Observable<ProductAnnealing[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getProductFinish(url: string): Observable<ProductFinish[]> {
    return new Observable<ProductFinish[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getProductTemper(url: string): Observable<ProductTemper[]> {
    return new Observable<ProductTemper[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getProductHardness(url: string): Observable<ProductHardness[]> {
    return new Observable<ProductHardness[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getProductPackaging(url: string): Observable<ProductPackaging[]> {
    return new Observable<ProductPackaging[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getProductClass(url: string): Observable<ProductClass[]> {
    return new Observable<ProductClass[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getAllPurchaseByTypeAndStatus(url: string): Observable<ProductClass[]> {
    return new Observable<ProductClass[]>(obs => {
      this._apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }
}
