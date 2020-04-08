import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Company } from 'src/app/shared/Models/company.model.';
import {
  ProductAnnealing, ProductCategory, ProductClass, ProductCoating,
  ProductDefect, ProductFinish, ProductHardness, ProductOiling,
  ProductOrigin, ProductPackaging, ProductShape, ProductSurfaceCoating,
  ProductTemper, ProductType
} from 'src/app/shared/Models/product.model.';
import { Warehouse } from 'src/app/shared/Models/warehouse';
import { ApiService } from './api.service';
import { MachineDetail } from '../Models/machineDetails.model';
import { WeighingCompany } from '../Models/weighingCompany.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private apiService: ApiService, private router: Router) { }

  getProductCategory(url: string): Observable<ProductCategory[]> {
    return new Observable<ProductCategory[]>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res);
        console.log(res);
      });
    });
  }

  setProductType(productType: ProductType): Observable<ProductType[]> {
    const path = '/inventory/productClassification/setProductType';
    return new Observable<ProductType[]>(obs => {
      this.apiService.post(path, productType).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getProductShape(url: string): Observable<ProductShape[]> {
    return new Observable<ProductShape[]>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getAllCompany(url: string): Observable<Company[]> {
    return new Observable<Company[]>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getAllWarehouse(url: string): Observable<Warehouse[]> {
    return new Observable<Warehouse[]>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getAllWarehouseByCompanyId(url: string): Observable<Warehouse[]> {
    return new Observable<Warehouse[]>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getProductType(url: string): Observable<ProductType[]> {
    return new Observable<ProductType[]>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getProductCoating(url: string): Observable<ProductCoating[]> {
    return new Observable<ProductCoating[]>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getProductDefect(url: string): Observable<ProductDefect[]> {
    return new Observable<ProductDefect[]>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getProductOrigin(url: string): Observable<ProductOrigin[]> {
    return new Observable<ProductOrigin[]>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getProductOiling(url: string): Observable<ProductOiling[]> {
    return new Observable<ProductOiling[]>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getProductSurfaceCoating(url: string): Observable<ProductSurfaceCoating[]> {
    return new Observable<ProductSurfaceCoating[]>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getProductAnnealing(url: string): Observable<ProductAnnealing[]> {
    return new Observable<ProductAnnealing[]>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getProductFinish(url: string): Observable<ProductFinish[]> {
    return new Observable<ProductFinish[]>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getProductTemper(url: string): Observable<ProductTemper[]> {
    return new Observable<ProductTemper[]>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getProductHardness(url: string): Observable<ProductHardness[]> {
    return new Observable<ProductHardness[]>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getProductPackaging(url: string): Observable<ProductPackaging[]> {
    return new Observable<ProductPackaging[]>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getProductClass(url: string): Observable<ProductClass[]> {
    return new Observable<ProductClass[]>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getAllPurchaseByTypeAndStatus(url: string): Observable<ProductClass[]> {
    return new Observable<ProductClass[]>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getMachineDetail(url: string): Observable<MachineDetail[]> {
    return new Observable<MachineDetail[]>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getWeighingCompany(url: string): Observable<WeighingCompany[]> {
    return new Observable<WeighingCompany[]>(obs => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }
}
