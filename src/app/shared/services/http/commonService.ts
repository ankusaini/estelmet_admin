import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from 'src/app/shared/services/api.service';
import { Warehouse } from '../../Models/warehouse';
import { Company } from '../../Models/company.model.';
import { MachineDetail } from '../../Models/machineDetails.model';
import { WeighingCompany } from '../../Models/weighingCompany.model';
import {
  ProductAnnealing, ProductCategory, ProductClass, ProductCoating,
  ProductDefect, ProductFinish, ProductHardness, ProductOiling, ProductOrigin,
  ProductPackaging, ProductShape, ProductSurfaceCoating, ProductTemper,
  ProductType
} from '../../Models/product.model.';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private apiService: ApiService) { }

  saveProductClass(data: any): Observable<ProductClass> {
    return new Observable(obs => {
      this.apiService
        .post('/inventory/productClassification/setProductClass', data)
        .subscribe(res => {
          obs.next(res.body);
          obs.complete();
        });
    });
  }

  saveProductType(data: ProductType): Observable<ProductType> {
    return new Observable(obs => {
      this.apiService
        .post('/inventory/productClassification/setProductType', data)
        .subscribe(res => {
          obs.next(res.body);
          obs.complete();
        });
    });
  }

  saveProductCategory(data: ProductCategory): Observable<ProductCategory> {
    return new Observable(obs => {
      this.apiService
        .post('/inventory/productClassification/setProductCategory', data)
        .subscribe(res => {
          obs.next(res.body);
          obs.complete();
        });
    });
  }

  saveProductShape(data: ProductShape): Observable<ProductShape> {
    return new Observable(obs => {
      this.apiService
        .post('/inventory/productClassification/setProductShape', data)
        .subscribe(res => {
          obs.next(res.body);
          obs.complete();
        });
    });
  }

  saveProductTemper(data: ProductTemper): Observable<ProductTemper> {
    return new Observable(obs => {
      this.apiService
        .post('/inventory/productClassification/setProductTemper', data)
        .subscribe(res => {
          obs.next(res.body);
          obs.complete();
        });
    });
  }

  saveProductCoatiing(data: ProductCoating): Observable<ProductCoating> {
    return new Observable(obs => {
      this.apiService
        .post('/inventory/productClassification/setProductCoating', data)
        .subscribe(res => {
          obs.next(res.body);
          obs.complete();
        });
    });
  }

  saveProductOiling(data: ProductOiling): Observable<ProductOiling> {
    return new Observable(obs => {
      this.apiService
        .post('/inventory/productClassification/setProductOiling', data)
        .subscribe(res => {
          obs.next(res.body);
          obs.complete();
        });
    });
  }

  saveProductSurface(
    data: ProductSurfaceCoating
  ): Observable<ProductSurfaceCoating> {
    return new Observable(obs => {
      this.apiService
        .post('/inventory/productClassification/setProductSurfaceCoating', data)
        .subscribe(res => {
          obs.next(res.body);
          obs.complete();
        });
    });
  }

  saveProductOrigin(data: ProductOrigin): Observable<ProductOrigin> {
    return new Observable(obs => {
      this.apiService
        .post('/inventory/productClassification/setProductOrigin', data)
        .subscribe(res => {
          obs.next(res.body);
          obs.complete();
        });
    });
  }

  saveProductAnnealing(data: ProductAnnealing): Observable<ProductAnnealing> {
    return new Observable(obs => {
      this.apiService
        .post('/inventory/productClassification/setProductAnnealing', data)
        .subscribe(res => {
          obs.next(res.body);
          obs.complete();
        });
    });
  }

  saveProductDefect(data: ProductDefect): Observable<ProductDefect> {
    return new Observable(obs => {
      this.apiService
        .post('/inventory/productClassification/setProductDefect', data)
        .subscribe(res => {
          obs.next(res.body);
          obs.complete();
        });
    });
  }

  saveProductFinish(data: ProductFinish): Observable<ProductFinish> {
    return new Observable(obs => {
      this.apiService
        .post('/inventory/productClassification/setProductFinish', data)
        .subscribe(res => {
          obs.next(res.body);
          obs.complete();
        });
    });
  }

  saveProductPackaging(data: ProductPackaging): Observable<ProductPackaging> {
    return new Observable(obs => {
      this.apiService
        .post('/inventory/productClassification/setProductPackaging', data)
        .subscribe(res => {
          obs.next(res.body);
          obs.complete();
        });
    });
  }

  saveProductHardness(data: ProductHardness): Observable<ProductHardness> {
    return new Observable(obs => {
      this.apiService
        .post('/inventory/productClassification/setProductHardness', data)
        .subscribe(res => {
          obs.next(res.body);
          obs.complete();
        });
    });
  }

  saveWarehouse(data: Warehouse): Observable<Warehouse> {
    return new Observable(obs => {
      this.apiService
        .post('/inventory/createWarehouse', data)
        .subscribe(res => {
          obs.next(res.body);
          obs.complete();
        });
    });
  }

  saveCompany(data: Company): Observable<Company> {
    return new Observable(obs => {
      this.apiService
        .post('/inventory/createCompany', data)
        .subscribe(res => {
          obs.next(res.body);
          obs.complete();
        });
    });
  }

  saveMachineDetail(data: MachineDetail): Observable<MachineDetail> {
    return new Observable(obs => {
      this.apiService
        .post('/inventory/createMachineDetail', data)
        .subscribe(res => {
          obs.next(res.body);
          obs.complete();
        });
    });
  }

  saveWeighingCompany(data: WeighingCompany): Observable<WeighingCompany> {
    return new Observable(obs => {
      this.apiService
        .post('/inventory/createWeighingCompany', data)
        .subscribe(res => {
          obs.next(res.body);
          obs.complete();
        });
    });
  }

  // ------------------------- delete API set up module ------------------------

  deleteWarehouse(data: string): Observable<boolean> {
    return new Observable(obs => {
      this.apiService
        .delete('/inventory/deleteWarehouse/' + data)
        .subscribe(res => {
          obs.next(res.body);
          obs.complete();
        });
    });
  }

  deleteCompany(data: string): Observable<boolean> {
    return new Observable(obs => {
      this.apiService
        .delete('/inventory/deleteCompany/' + data)
        .subscribe(res => {
          obs.next(res.body);
          obs.complete();
        });
    });
  }

  deleteMachineDetail(data: string): Observable<boolean> {
    return new Observable(obs => {
      this.apiService
        .delete('/inventory/deleteMachineDetail/' + data)
        .subscribe(res => {
          obs.next(res.body);
          obs.complete();
        });
    });
  }

  deleteWeighingCompany(data: string): Observable<boolean> {
    return new Observable(obs => {
      this.apiService
        .delete('/inventory/deleteWeighingCompany/' + data)
        .subscribe(res => {
          obs.next(res.body);
          obs.complete();
        });
    });
  }

  deleteProductClass(data: string): Observable<boolean> {
    return new Observable(obs => {
      this.apiService
        .delete('/inventory/productClassification/deleteProductClass/' + data)
        .subscribe(res => {
          obs.next(res.body);
          obs.complete();
        });
    });
  }

  deleteProductType(data: string): Observable<boolean> {
    return new Observable(obs => {
      this.apiService
        .delete('/inventory/productClassification/deleteProductType/' + data)
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  deleteProductCategory(data: string): Observable<boolean> {
    return new Observable(obs => {
      this.apiService
        .delete(
          '/inventory/productClassification/deleteProductCategory/' + data
        )
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  deleteProductShape(data: string): Observable<boolean> {
    return new Observable(obs => {
      this.apiService
        .delete('/inventory/productClassification/deleteProductShape/' + data)
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  deleteProductTemper(data: string): Observable<boolean> {
    return new Observable(obs => {
      this.apiService
        .delete('/inventory/productClassification/deleteProductTemper/' + data)
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  deleteProductCoatiing(data: string): Observable<boolean> {
    return new Observable(obs => {
      this.apiService
        .delete('/inventory/productClassification/deleteProductCoating/' + data)
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  deleteProductOiling(data: string): Observable<boolean> {
    return new Observable(obs => {
      this.apiService
        .delete('/inventory/productClassification/deleteProductOiling/' + data)
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  deleteProductSurface(data: string): Observable<boolean> {
    return new Observable(obs => {
      this.apiService
        .delete(
          '/inventory/productClassification/deleteProductSurfaceCoating/' + data
        )
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  deleteProductOrigin(data: string): Observable<boolean> {
    return new Observable(obs => {
      this.apiService
        .delete('/inventory/productClassification/deleteProductOrigin/' + data)
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  deleteProductAnnealing(data: string): Observable<boolean> {
    return new Observable(obs => {
      this.apiService
        .post('/inventory/productClassification/deleteProductAnnealing/' + data)
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  deleteProductDefect(data: string): Observable<boolean> {
    return new Observable(obs => {
      this.apiService
        .delete('/inventory/productClassification/deleteProductDefect/' + data)
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  deleteProductFinish(data: string): Observable<boolean> {
    return new Observable(obs => {
      this.apiService
        .delete('/inventory/productClassification/deleteProductFinish/' + data)
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  deleteProductPackaging(data: string): Observable<boolean> {
    return new Observable(obs => {
      this.apiService
        .delete(
          '/inventory/productClassification/deleteProductPackaging/' + data
        )
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  deleteProductHardness(data: string): Observable<boolean> {
    return new Observable(obs => {
      this.apiService
        .delete(
          '/inventory/productClassification/deleteProductHardness/' + data
        )
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }
}
