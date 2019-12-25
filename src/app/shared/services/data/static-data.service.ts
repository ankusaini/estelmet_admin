import { Injectable } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductClass, ProductCategory, ProductTemper, ProductType, ProductShape } from '../../Models/product.model.';
import { Observable } from 'rxjs';
// import { ProductFilter } from '../interfaces/product-filter';

@Injectable({providedIn: 'root'})

export class StaticDataService {

    productClass : ProductClass[];
    productCategory : ProductCategory[];
    productTemper : ProductTemper[];
    productType : ProductType[];
    productShape : ProductShape[];
    // searchFilter : ProductFilter[];

    constructor(
        private _commonService : ProductService
    ) { }

    getProductClass() : Observable<ProductClass[]> {
        return new Observable(data=>{
            let store_Class : string = window.sessionStorage['productClass'];
            if(store_Class) {
                this.productClass = JSON.parse(store_Class);
                console.log("product Class",this.productClass);
                data.next(this.productClass);
                data.complete();
            } else {
                this._commonService.getProductClass('/inventory/productClassification/getProductClass').subscribe(item=>{
                    this.productClass = item;
                    this.saveProductClass(item);
                    data.next(this.productClass);
                    data.complete();
                    console.log("cat543",this.productClass);
                },error=>{
                console.log('error');
                });
            }
        });
    }

    getProductType() : Observable<ProductType[]> {
        return new Observable(data=>{
            let store_Type : string = window.sessionStorage['productType'];
            if(store_Type) {
                this.productType = JSON.parse(store_Type);
                console.log("product Type",this.productType);
                data.next(this.productType);
                data.complete();
            } else {
                this._commonService.getProductType('/inventory/productClassification/getProductType').subscribe(item=>{
                    this.productType = item;
                    this.saveProductType(item);
                    data.next(this.productType);
                    data.complete();
                    console.log("cat543",this.productType);
                },error=>{
                console.log('error');
                });
            }
        });
    }

    getProductShape() : Observable<ProductShape[]> {
        return new Observable(data=>{
            let store_Shape : string = window.sessionStorage['productShape'];
            if(store_Shape) {
                this.productShape = JSON.parse(store_Shape);
                console.log("product Shape",this.productShape);
                data.next(this.productShape);
                data.complete();
            } else {
                this._commonService.getProductShape('/inventory/productClassification/getProductShape').subscribe(item=>{
                    this.productShape = item;
                    this.saveProductShape(item);
                    data.next(this.productShape);
                    data.complete();
                    console.log("cat543",this.productShape);
                },error=>{
                console.log('error');
                });
            }
        });
    }

    getProductTempor() : Observable<ProductTemper[]> {
        return new Observable(data=>{
            let store_Tempor : string = window.sessionStorage['productTempor'];
            if(store_Tempor) {
                this.productTemper = JSON.parse(store_Tempor);
                console.log("product Class",this.productTemper);
                data.next(this.productTemper);
                data.complete();
            } else {
                this._commonService.getProductTemper('/inventory/productClassification/getProductTemper').subscribe(item=>{
                    this.productTemper = item;
                    this.saveProductTempor(item);
                    data.next(this.productTemper);
                    data.complete();
                    console.log("cat543",this.productTemper);
                },error=>{
                console.log('error');
                });
            }
        });
    }

    getAllProductCategory() : Observable<ProductCategory[]>{    
        return new Observable(data=>{
            let store_Category : string = window.sessionStorage['productCategory'];
            if(store_Category) {
                this.productCategory = JSON.parse(store_Category);
                console.log("product Category",this.productCategory);
                data.next(this.productCategory);
                data.complete();
            } else {
                this._commonService.getProductCategory('/inventory/productClassification/getProductCategory').subscribe(item=>{
                    this.productCategory = item;
                    this.saveProductCategory(item);
                    data.next(this.productCategory);
                    data.complete();
                    console.log("cat543",this.productCategory);
                },error=>{
                console.log('error');
                });
            }
        });
    }

    // getSearchFilter() : Observable<ProductFilter[]>{
    //     return new Observable(data=>{
    //         let store_Filter : string = window.sessionStorage['productFilter'];
    //         if(store_Filter) {
    //             this.searchFilter = JSON.parse(store_Filter);
    //             console.log("product Category",this.searchFilter);
    //             data.next(this.searchFilter);
    //             data.complete();
    //         } else {
    //             this._commonService.getAllFilter().subscribe(item=>{
    //                 this.searchFilter = item;
    //                 this.saveProductFilter(item);
    //                 data.next(this.searchFilter);
    //                 data.complete();
    //                 console.log("cat543",this.searchFilter);
    //             },error=>{
    //             console.log('error');
    //             });
    //         }
    //     });
    // }

    saveProductClass(data : ProductClass[]) {
        window.sessionStorage['productClass'] = JSON.stringify(data);
    }

    saveProductCategory( data : ProductCategory[] ) {
        window.sessionStorage['productCategory'] = JSON.stringify(data);
    }

    saveProductTempor( data : ProductTemper[] ) {
        window.sessionStorage['productTempor'] = JSON.stringify(data);
    }

    saveProductType(data : ProductType[]) {
        window.sessionStorage['productType'] = JSON.stringify(data);
    }

    saveProductShape(data : ProductShape[]) {
        window.sessionStorage['productShape'] = JSON.stringify(data);
    }

    // saveProductFilter( data : ProductFilter[] ) {
    //     window.sessionStorage['productFilter'] = JSON.stringify(data);
    // }
    
}
