import { Injectable } from "@angular/core";
import { ApiService } from "src/app/shared/services/api.service";
import { Observable } from "rxjs/internal/Observable";
import {
  ProductClass,
  ProductType,
  ProductCategory,
  ProductShape,
  ProductTemper,
  ProductCoating,
  ProductOiling,
  ProductSurfaceCoating,
  ProductOrigin,
  ProductAnnealing,
  ProductDefect,
  ProductFinish,
  ProductPackaging,
  ProductHardness
} from "../../Models/product.model.";
@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor(private _apiService: ApiService) {}

  saveProductClass(data: any): Observable<ProductClass> {
    return new Observable(obs => {
      this._apiService
        .post("/inventory/productClassification/setProductClass", data)
        .subscribe(res => {
          obs.next(res.body);
          obs.complete();
        });
    });
  }

  saveProductType(data: ProductType): Observable<ProductType> {
    console.log(data);
    return new Observable(res => {
      this._apiService
        .post("/inventory/productClassification/setProductType", data)
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  saveProductCategory(data: ProductCategory): Observable<ProductCategory> {
    return new Observable(res => {
      this._apiService
        .post("/inventory/productClassification/setProductCategory", data)
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  saveProductShape(data: ProductShape): Observable<ProductShape> {
    return new Observable(res => {
      this._apiService
        .post("/inventory/productClassification/setProductShape", data)
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  saveProductTemper(data: ProductTemper): Observable<ProductTemper> {
    return new Observable(res => {
      this._apiService
        .post("/inventory/productClassification/setProductTemper", data)
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  saveProductCoatiing(data: ProductCoating): Observable<ProductCoating> {
    return new Observable(res => {
      this._apiService
        .post("/inventory/productClassification/setProductCoating", data)
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  saveProductOiling(data: ProductOiling): Observable<ProductOiling> {
    return new Observable(res => {
      this._apiService
        .post("/inventory/productClassification/setProductOiling", data)
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  saveProductSurface(
    data: ProductSurfaceCoating
  ): Observable<ProductSurfaceCoating> {
    return new Observable(res => {
      this._apiService
        .post("/inventory/productClassification/setProductSurfaceCoating", data)
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  saveProductOrigin(data: ProductOrigin): Observable<ProductOrigin> {
    return new Observable(res => {
      this._apiService
        .post("/inventory/productClassification/setProductOrigin", data)
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  saveProductAnnealing(data: ProductAnnealing): Observable<ProductAnnealing> {
    return new Observable(res => {
      this._apiService
        .post("/inventory/productClassification/setProductAnnealing", data)
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  saveProductDefect(data: ProductDefect): Observable<ProductDefect> {
    return new Observable(res => {
      this._apiService
        .post("/inventory/productClassification/setProductDefect", data)
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  saveProductFinish(data: ProductFinish): Observable<ProductFinish> {
    return new Observable(res => {
      this._apiService
        .post("/inventory/productClassification/setProductFinish", data)
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  saveProductPackaging(data: ProductPackaging): Observable<ProductPackaging> {
    return new Observable(res => {
      this._apiService
        .post("/inventory/productClassification/setProductPackaging", data)
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  saveProductHardness(data: ProductHardness): Observable<ProductHardness> {
    return new Observable(res => {
      this._apiService
        .post("/inventory/productClassification/setProductHardness", data)
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  //------------------------- delete API set up module ------------------------

  deleteProductClass(data: string): Observable<boolean> {
    return new Observable(obs => {
      this._apiService
        .delete("/inventory/productClassification/deleteProductClass/" + data)
        .subscribe(res => {
          obs.next(res.body);
          obs.complete();
        });
    });
  }

  deleteProductType(data: string): Observable<boolean> {
    console.log(data);
    return new Observable(obs => {
      this._apiService
        .delete("/inventory/productClassification/deleteProductType/" + data)
        .subscribe(res => {
          res.next(res.body);
          console.log(res.body);
          res.complete();
        });
    });
  }

  deleteProductCategory(data: string): Observable<boolean> {
    return new Observable(obs => {
      this._apiService
        .delete(
          "/inventory/productClassification/deleteProductCategory/" + data
        )
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  deleteProductShape(data: string): Observable<boolean> {
    return new Observable(obs => {
      this._apiService
        .delete("/inventory/productClassification/deleteProductShape/" + data)
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  deleteProductTemper(data: string): Observable<boolean> {
    return new Observable(obs => {
      this._apiService
        .delete("/inventory/productClassification/deleteProductTemper/" + data)
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  deleteProductCoatiing(data: string): Observable<boolean> {
    return new Observable(obs => {
      this._apiService
        .delete("/inventory/productClassification/deleteProductCoating/" + data)
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  deleteProductOiling(data: string): Observable<boolean> {
    return new Observable(obs => {
      this._apiService
        .delete("/inventory/productClassification/deleteProductOiling/" + data)
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  deleteProductSurface(data: string): Observable<boolean> {
    return new Observable(obs => {
      this._apiService
        .delete(
          "/inventory/productClassification/deleteProductSurfaceCoating/" + data
        )
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  deleteProductOrigin(data: string): Observable<boolean> {
    return new Observable(obs => {
      this._apiService
        .delete("/inventory/productClassification/deleteProductOrigin/" + data)
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  deleteProductAnnealing(data: string): Observable<boolean> {
    return new Observable(obs => {
      this._apiService
        .post("/inventory/productClassification/deleteProductAnnealing/" + data)
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  deleteProductDefect(data: string): Observable<boolean> {
    return new Observable(obs => {
      this._apiService
        .delete("/inventory/productClassification/deleteProductDefect/" + data)
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  deleteProductFinish(data: string): Observable<boolean> {
    return new Observable(obs => {
      this._apiService
        .delete("/inventory/productClassification/deleteProductFinish/" + data)
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  deleteProductPackaging(data: string): Observable<boolean> {
    return new Observable(obs => {
      this._apiService
        .delete(
          "/inventory/productClassification/deleteProductPackaging/" + data
        )
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }

  deleteProductHardness(data: string): Observable<boolean> {
    return new Observable(obs => {
      this._apiService
        .delete(
          "/inventory/productClassification/deleteProductHardness/" + data
        )
        .subscribe(res => {
          res.next(res.body);
          res.complete();
        });
    });
  }
}
