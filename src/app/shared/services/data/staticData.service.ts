import { Injectable } from '@angular/core';
import { ProductService } from '../product.service';
import {
    ProductClass, ProductCategory, ProductTemper, ProductType,
    ProductShape, ProductCoating, ProductOiling, ProductSurfaceCoating,
    ProductOrigin, ProductAnnealing, ProductDefect, ProductFinish,
    ProductPackaging, ProductHardness
} from '../../Models/product.model.';
import { Observable } from 'rxjs';
import { Company } from 'src/app/shared/Models/company.model.';
import { Warehouse } from 'src/app/shared/Models/warehouse';

@Injectable({ providedIn: 'root' })

export class StaticDataService {

    companyClass: Company[];
    warehouseClass: Warehouse[];
    productClass: ProductClass[];
    productCategory: ProductCategory[];
    productTemper: ProductTemper[];
    productType: ProductType[];
    productShape: ProductShape[];
    productCoating: ProductCoating[];
    productOiling: ProductOiling[];
    productSurface: ProductSurfaceCoating[];
    productOrigin: ProductOrigin[];
    productAnnealing: ProductAnnealing[];
    productDefect: ProductDefect[];
    productFinish: ProductFinish[];
    productPackaging: ProductPackaging[];
    productHardness: ProductHardness[];
    // searchFilter : ProductFilter[];

    constructor(
        private _commonService: ProductService
    ) { }

    getProductClass(): Observable<ProductClass[]> {
        return new Observable(data => {
            const storeClass: string = window.sessionStorage['productClass'];
            if (storeClass) {
                this.productClass = JSON.parse(storeClass);
                console.log("product Class",this.productClass);
                data.next(this.productClass);
                data.complete();
            } else {
                this._commonService.getProductClass('/inventory/productClassification/getProductClass').subscribe(item => {
                    this.productClass = item;
                    this.saveProductClass(item);
                    data.next(this.productClass);
                    data.complete();
                    console.log("cat543",this.productClass);
                }, error => {
                    console.log('error');
                });
            }
        });
    }

    getProductType(): Observable<ProductType[]> {
        return new Observable(data => {
            const storeType: string = window.sessionStorage['productType'];
            if (storeType) {
                this.productType = JSON.parse(storeType);
                console.log("product Type",this.productType);
                data.next(this.productType);
                data.complete();
            } else {
                this._commonService.getProductType('/inventory/productClassification/getProductType').subscribe(item => {
                    this.productType = item;
                    this.saveProductType(item);
                    data.next(this.productType);
                    data.complete();
                    console.log("cat543",this.productType);
                }, error => {
                    console.log('error');
                });
            }
        });
    }

    getProductShape(): Observable<ProductShape[]> {
        return new Observable(data => {
            const storeShape: string = window.sessionStorage['productShape'];
            if (storeShape) {
                this.productShape = JSON.parse(storeShape);
                console.log("product Shape",this.productShape);
                data.next(this.productShape);
                data.complete();
            } else {
                this._commonService.getProductShape('/inventory/productClassification/getProductShape').subscribe(item => {
                    this.productShape = item;
                    this.saveProductShape(item);
                    data.next(this.productShape);
                    data.complete();
                    console.log("cat543",this.productShape);
                }, error => {
                    console.log('error');
                });
            }
        });
    }

    getProductTempor(): Observable<ProductTemper[]> {
        return new Observable(data => {
            const storeTempor: string = window.sessionStorage['productTempor'];
            if (storeTempor) {
                this.productTemper = JSON.parse(storeTempor);
                console.log("product Class",this.productTemper);
                data.next(this.productTemper);
                data.complete();
            } else {
                this._commonService.getProductTemper('/inventory/productClassification/getProductTemper').subscribe(item => {
                    this.productTemper = item;
                    this.saveProductTempor(item);
                    data.next(this.productTemper);
                    data.complete();
                    console.log("cat543",this.productTemper);
                }, error => {
                    console.log('error');
                });
            }
        });
    }

    getAllProductCategory(): Observable<ProductCategory[]> {
        return new Observable(data => {
            const storeCategory: string = window.sessionStorage['productCategory'];
            if (storeCategory) {
                this.productCategory = JSON.parse(storeCategory);
                console.log("product Category",this.productCategory);
                data.next(this.productCategory);
                data.complete();
            } else {
                this._commonService.getProductCategory('/inventory/productClassification/getProductCategory').subscribe(item => {
                    this.productCategory = item;
                    this.saveProductCategory(item);
                    data.next(this.productCategory);
                    data.complete();
                    console.log("cat543",this.productCategory);
                }, error => {
                    console.log('error');
                });
            }
        });
    }

    getAllProductCoating(): Observable<ProductCoating[]> {
        return new Observable(data => {
            const storeCoating = window.sessionStorage['productCoating'];
            if (storeCoating) {
                this.productCoating = JSON.parse(storeCoating);
                // console.log("product Category",this.productCategory);
                data.next(this.productCoating);
                data.complete();
            } else {
                this._commonService.getProductCoating('/inventory/productClassification/getProductCoating').subscribe(item => {
                    this.productCoating = item;
                    this.saveProductCoating(item);
                    data.next(this.productCoating);
                    data.complete();
                }, error => {
                    // console.log('error');
                });

            }
        });
    }

    getAllProductOiling(): Observable<ProductOiling[]> {
        return new Observable(data => {
            const storeCoating = window.sessionStorage['productOiling'];
            if (storeCoating) {
                this.productOiling = JSON.parse(storeCoating);
                // console.log("productOiling",this.productOiling);
                data.next(this.productOiling);
                data.complete();
            } else {
                this._commonService.getProductOiling('/inventory/productClassification/getProductOiling').subscribe(item => {
                    this.productOiling = item;
                    this.saveProductOiling(item);
                    data.next(this.productOiling);
                    data.complete();
                }, error => {
                    // console.log('error');
                });

            }
        });
    }

    getAllSurface(): Observable<ProductSurfaceCoating[]> {
        return new Observable(data => {
            const storeCoating = window.sessionStorage['productSurface'];
            if (storeCoating) {
                this.productSurface = JSON.parse(storeCoating);
                // console.log("productSurface",this.productSurface);
                data.next(this.productSurface);
                data.complete();
            } else {
                this._commonService.
                    getProductSurfaceCoating('/inventory/productClassification/getProductSurfaceCoating').subscribe(item => {
                        this.productSurface = item;
                        this.saveProductSurface(item);
                        data.next(this.productSurface);
                        data.complete();
                    }, error => {
                        // console.log('error');
                    });

            }
        });
    }

    getAllOrigin(): Observable<ProductOrigin[]> {
        return new Observable(data => {
            const storeCoating = window.sessionStorage['productOrigin'];
            if (storeCoating) {
                this.productOrigin = JSON.parse(storeCoating);
                // console.log("productOrigin",this.productOrigin);
                data.next(this.productOrigin);
                data.complete();
            } else {
                this._commonService.getProductOrigin('/inventory/productClassification/getProductOrigin').subscribe(item => {
                    this.productOrigin = item;
                    this.saveProductOrigin(item);
                    data.next(this.productOrigin);
                    data.complete();
                }, error => {
                    // console.log('error');
                });

            }
        });
    }

    getAllAnnealing(): Observable<ProductAnnealing[]> {
        return new Observable(data => {
            const storeCoating = window.sessionStorage['productAnnealing'];
            if (storeCoating) {
                this.productAnnealing = JSON.parse(storeCoating);
                // console.log("productAnnealing",this.productAnnealing);
                data.next(this.productAnnealing);
                data.complete();
            } else {
                this._commonService.getProductAnnealing('/inventory/productClassification/getProductAnnealing').subscribe(item => {
                    this.productAnnealing = item;
                    this.saveProductAnnealing(item);
                    data.next(this.productAnnealing);
                    data.complete();
                }, error => {
                    // console.log('error');
                });

            }
        });
    }


    getAllDefect(): Observable<ProductDefect[]> {
        return new Observable(data => {
            const storeCoating = window.sessionStorage['productDefect'];
            if (storeCoating) {
                this.productDefect = JSON.parse(storeCoating);
                // console.log("productDefect",this.productDefect);
                data.next(this.productDefect);
                data.complete();
            } else {
                this._commonService.getProductDefect('/inventory/productClassification/getProductDefect').subscribe(item => {
                    this.productDefect = item;
                    this.saveProductDefect(item);
                    data.next(this.productDefect);
                    data.complete();
                }, error => {
                    // console.log('error');
                });
            }
        });
    }

    getAllFinish(): Observable<ProductFinish[]> {
        return new Observable(data => {
            const storeCoating = window.sessionStorage['productFinish'];
            if (storeCoating) {
                this.productFinish = JSON.parse(storeCoating);
                data.next(this.productFinish);
                data.complete();
            } else {
                this._commonService.getProductFinish('/inventory/productClassification/getProductFinish').subscribe(item => {
                    this.productFinish = item;
                    this.saveProductFinish(item);
                    data.next(this.productFinish);
                    data.complete();
                }, error => {
                    // console.log('error');
                });

            }
        });
    }

    getAllPackaging(): Observable<ProductPackaging[]> {
        return new Observable(data => {
            const storeCoating = window.sessionStorage['productPackaging'];
            if (storeCoating) {
                this.productPackaging = JSON.parse(storeCoating);
                // console.log("productPackaging",this.productPackaging);
                data.next(this.productPackaging);
                data.complete();
            } else {
                this._commonService.getProductPackaging('/inventory/productClassification/getProductPackaging').subscribe(item => {
                    this.productPackaging = item;
                    this.saveProductPackaging(item);
                    data.next(this.productPackaging);
                    data.complete();
                }, error => {
                    // console.log('error');
                });

            }
        });
    }

    getAllHardness(): Observable<ProductHardness[]> {
        return new Observable<ProductHardness[]>(data => {
            const storeCoating = window.sessionStorage['productHardness'];
            if (storeCoating) {
                this.productHardness = JSON.parse(storeCoating);
                // console.log("productHardness",this.productHardness);
                data.next(this.productHardness);
                data.complete();
            } else {
                this._commonService.getProductHardness('/inventory/productClassification/getProductHardness').subscribe(item => {
                    this.productHardness = item;
                    this.saveProductHardness(item);
                    data.next(this.productHardness);
                    data.complete();
                }, error => {
                    // console.log('error');
                });
            }
        });
    }

    // getSearchFilter() : Observable<ProductFilter[]>{
    //     return new Observable(data=>{
    //         let store_Filter : string = window.sessionStorage['productFilter'];
    //         if(store_Filter) {
    //             this.searchFilter = JSON.parse(store_Filter);
    // console.log("product Category",this.searchFilter);
    //             data.next(this.searchFilter);
    //             data.complete();
    //         } else {
    //             this._commonService.getAllFilter().subscribe(item=>{
    //                 this.searchFilter = item;
    //                 this.saveProductFilter(item);
    //                 data.next(this.searchFilter);
    //                 data.complete();
    // console.log("cat543",this.searchFilter);
    //             },error=>{
    // console.log('error');
    //             });
    //         }
    //     });
    // }

    saveProductClass(data: ProductClass[]) {
        window.sessionStorage['productClass'] = JSON.stringify(data);
    }

    saveProductCategory(data: ProductCategory[]) {
        window.sessionStorage['productCategory'] = JSON.stringify(data);
    }

    saveProductTempor(data: ProductTemper[]) {
        window.sessionStorage['productTempor'] = JSON.stringify(data);
    }

    saveProductType(data: ProductType[]) {
        window.sessionStorage['productType'] = JSON.stringify(data);
    }

    saveProductShape(data: ProductShape[]) {
        window.sessionStorage['productShape'] = JSON.stringify(data);
    }

    saveProductCoating(data: ProductCoating[]) {
        window.sessionStorage['productCoating'] = JSON.stringify(data);
    }

    saveProductOiling(data: ProductOiling[]) {
        window.sessionStorage['ProductOiling'] = JSON.stringify(data);
    }

    saveProductSurface(data: ProductSurfaceCoating[]) {
        window.sessionStorage['productSurface'] = JSON.stringify(data);
    }
    saveProductAnnealing(data: ProductAnnealing[]) {
        window.sessionStorage['productAnnealing'] = JSON.stringify(data);
    }
    saveProductDefect(data: ProductDefect[]) {
        window.sessionStorage['productDefect'] = JSON.stringify(data);
    }
    saveProductFinish(data: ProductFinish[]) {
        window.sessionStorage['productFinish'] = JSON.stringify(data);
    }
    saveProductPackaging(data: ProductPackaging[]) {
        window.sessionStorage['productPackaging'] = JSON.stringify(data);
    }
    saveProductHardness(data: ProductHardness[]) {
        window.sessionStorage['productHardness'] = JSON.stringify(data);
    }
    saveProductOrigin(data: ProductOrigin[]) {
        window.sessionStorage['productOrigin'] = JSON.stringify(data);
    }

    saveCompanyClass(data: Company[]) {
        window.sessionStorage['storeCompany'] = JSON.stringify(data);
    }

    saveWarehouse(data: Warehouse[]) {
        window.sessionStorage['storeWarehouse'] = JSON.stringify(data);
    }


    // saveProductFilter( data : ProductFilter[] ) {
    //     window.sessionStorage['productFilter'] = JSON.stringify(data);
    // }


    getAllCompany(): Observable<Company[]> {
        return new Observable(data => {
            const storeCompany: string = window.sessionStorage['storeCompany'];
            if (storeCompany) {
                this.companyClass = JSON.parse(storeCompany);
                console.log('product Class', this.companyClass);
                data.next(this.companyClass);
                data.complete();
            } else {
                this._commonService.getAllCompany('/inventory/getAllCompany').subscribe(item => {
                    this.companyClass = item;
                    this.saveCompanyClass(item);
                    data.next(this.companyClass);
                    data.complete();
                    console.log('cat543', this.companyClass);
                }, error => {
                    console.log('error');
                });
            }
        });
    }

    getAllwarehouse(): Observable<Warehouse[]> {
        return new Observable(data => {
            const storeWarehouse: string = window.sessionStorage['storeWarehouse'];
            if (storeWarehouse) {
                this.warehouseClass = JSON.parse(storeWarehouse);
                data.next(this.warehouseClass);
                data.complete();
            } else {
                this._commonService.getAllWarehouse('/inventory/getAllWarehouse').subscribe(item => {
                    this.warehouseClass = item;
                    this.saveWarehouse(item);
                    data.next(this.warehouseClass);
                    data.complete();
                }, error => {
                    console.log('error');
                });
            }
        });
    }
}
