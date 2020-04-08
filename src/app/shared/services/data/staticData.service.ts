import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from 'src/app/shared/Models/company.model.';
import { Warehouse } from 'src/app/shared/Models/warehouse';
import {
    ProductAnnealing, ProductCategory, ProductClass, ProductCoating,
    ProductDefect, ProductFinish, ProductHardness, ProductOiling,
    ProductOrigin, ProductPackaging, ProductShape, ProductSurfaceCoating,
    ProductTemper, ProductType
} from '../../Models/product.model.';
import { ProductService } from '../product.service';
import { ToastrService } from 'ngx-toastr';
import { MachineDetail } from '../../Models/machineDetails.model';
import { WeighingCompany } from '../../Models/weighingCompany.model';

@Injectable({ providedIn: 'root' })

export class StaticDataService {

    constructor(
        private productService: ProductService,
        private toastr: ToastrService
    ) { }

    getProductClass(): Observable<ProductClass[]> {
        let productClass: ProductClass[];
        return new Observable(data => {
            const storeClass: string = window.sessionStorage.productClass;
            if (storeClass) {
                productClass = JSON.parse(storeClass);
                data.next(productClass);
                data.complete();
            } else {
                this.productService.getProductClass('/inventory/productClassification/getProductClass').subscribe(item => {
                    productClass = item;
                    this.saveProductClass(item);
                    data.next(productClass);
                    data.complete();
                }, error => {
                    this.toastr.error('Error');
                });
            }
        });
    }

    getProductType(): Observable<ProductType[]> {
        let productType: ProductType[];
        return new Observable(data => {
            const storeType: string = window.sessionStorage.productType;
            if (storeType) {
                productType = JSON.parse(storeType);
                data.next(productType);
                data.complete();
            } else {
                this.productService.getProductType('/inventory/productClassification/getProductType').subscribe(item => {
                    productType = item;
                    this.saveProductType(item);
                    data.next(productType);
                    data.complete();
                }, error => {
                    this.toastr.error('Error');
                });
            }
        });
    }

    getProductShape(): Observable<ProductShape[]> {
        let productShape: ProductShape[];
        return new Observable(data => {
            const storeShape: string = window.sessionStorage.productShape;
            if (storeShape) {
                productShape = JSON.parse(storeShape);
                data.next(productShape);
                data.complete();
            } else {
                this.productService.getProductShape('/inventory/productClassification/getProductShape').subscribe(item => {
                    productShape = item;
                    this.saveProductShape(item);
                    data.next(productShape);
                    data.complete();
                }, error => {
                    this.toastr.error('Error');
                });
            }
        });
    }

    getProductTempor(): Observable<ProductTemper[]> {
        let productTemper: ProductTemper[];
        return new Observable(data => {
            const storeTempor: string = window.sessionStorage.productTempor;
            if (storeTempor) {
                productTemper = JSON.parse(storeTempor);
                data.next(productTemper);
                data.complete();
            } else {
                this.productService.getProductTemper('/inventory/productClassification/getProductTemper').subscribe(item => {
                    productTemper = item;
                    this.saveProductTempor(item);
                    data.next(productTemper);
                    data.complete();
                }, error => {
                    this.toastr.error('Error');
                });
            }
        });
    }

    getAllProductCategory(): Observable<ProductCategory[]> {
        let productCategory: ProductCategory[];
        return new Observable(data => {
            const storeCategory: string = window.sessionStorage.productCategory;
            if (storeCategory) {
                productCategory = JSON.parse(storeCategory);
                data.next(productCategory);
                data.complete();
            } else {
                this.productService.getProductCategory('/inventory/productClassification/getProductCategory').subscribe(item => {
                    productCategory = item;
                    this.saveProductCategory(item);
                    data.next(productCategory);
                    data.complete();
                }, error => {
                    this.toastr.error('Error');
                });
            }
        });
    }

    getAllProductCoating(): Observable<ProductCoating[]> {
        let productCoating: ProductCoating[];
        return new Observable(data => {
            const storeCoating = window.sessionStorage.productCoating;
            if (storeCoating) {
                productCoating = JSON.parse(storeCoating);
                data.next(productCoating);
                data.complete();
            } else {
                this.productService.getProductCoating('/inventory/productClassification/getProductCoating').subscribe(item => {
                    productCoating = item;
                    this.saveProductCoating(item);
                    data.next(productCoating);
                    data.complete();
                }, error => {
                    this.toastr.error('Error');
                });

            }
        });
    }

    getAllProductOiling(): Observable<ProductOiling[]> {
        let productOiling: ProductOiling[];
        return new Observable(data => {
            const storeCoating = window.sessionStorage.productOiling;
            if (storeCoating) {
                productOiling = JSON.parse(storeCoating);
                data.next(productOiling);
                data.complete();
            } else {
                this.productService.getProductOiling('/inventory/productClassification/getProductOiling').subscribe(item => {
                    productOiling = item;
                    this.saveProductOiling(item);
                    data.next(productOiling);
                    data.complete();
                }, error => {
                    this.toastr.error('Error');
                });

            }
        });
    }

    getAllSurface(): Observable<ProductSurfaceCoating[]> {
        let productSurface: ProductSurfaceCoating[];
        return new Observable(data => {
            const storeCoating = window.sessionStorage.productSurface;
            if (storeCoating) {
                productSurface = JSON.parse(storeCoating);
                data.next(productSurface);
                data.complete();
            } else {
                this.productService.
                    getProductSurfaceCoating('/inventory/productClassification/getProductSurfaceCoating').subscribe(item => {
                        productSurface = item;
                        this.saveProductSurface(item);
                        data.next(productSurface);
                        data.complete();
                    }, error => {
                        this.toastr.error('Error');
                    });

            }
        });
    }

    getAllOrigin(): Observable<ProductOrigin[]> {
        let productOrigin: ProductOrigin[];
        return new Observable(data => {
            const storeCoating = window.sessionStorage.productOrigin;
            if (storeCoating) {
                productOrigin = JSON.parse(storeCoating);
                data.next(productOrigin);
                data.complete();
            } else {
                this.productService.getProductOrigin('/inventory/productClassification/getProductOrigin').subscribe(item => {
                    productOrigin = item;
                    this.saveProductOrigin(item);
                    data.next(productOrigin);
                    data.complete();
                }, error => {
                    this.toastr.error('Error');
                });

            }
        });
    }

    getAllAnnealing(): Observable<ProductAnnealing[]> {
        let productAnnealing: ProductAnnealing[];
        return new Observable(data => {
            const storeCoating = window.sessionStorage.productAnnealing;
            if (storeCoating) {
                productAnnealing = JSON.parse(storeCoating);
                data.next(productAnnealing);
                data.complete();
            } else {
                this.productService.getProductAnnealing('/inventory/productClassification/getProductAnnealing').subscribe(item => {
                    productAnnealing = item;
                    this.saveProductAnnealing(item);
                    data.next(productAnnealing);
                    data.complete();
                }, error => {
                    this.toastr.error('Error');
                });

            }
        });
    }


    getAllDefect(): Observable<ProductDefect[]> {
        let productDefect: ProductDefect[];
        return new Observable(data => {
            const storeCoating = window.sessionStorage.productDefect;
            if (storeCoating) {
                productDefect = JSON.parse(storeCoating);
                data.next(productDefect);
                data.complete();
            } else {
                this.productService.getProductDefect('/inventory/productClassification/getProductDefect').subscribe(item => {
                    productDefect = item;
                    this.saveProductDefect(item);
                    data.next(productDefect);
                    data.complete();
                }, error => {
                    this.toastr.error('Error');
                });
            }
        });
    }

    getAllFinish(): Observable<ProductFinish[]> {
        let productFinish: ProductFinish[];
        return new Observable(data => {
            const storeCoating = window.sessionStorage.productFinish;
            if (storeCoating) {
                productFinish = JSON.parse(storeCoating);
                data.next(productFinish);
                data.complete();
            } else {
                this.productService.getProductFinish('/inventory/productClassification/getProductFinish').subscribe(item => {
                    productFinish = item;
                    this.saveProductFinish(item);
                    data.next(productFinish);
                    data.complete();
                }, error => {
                    this.toastr.error('Error');
                });

            }
        });
    }

    getAllPackaging(): Observable<ProductPackaging[]> {
        let productPackaging: ProductPackaging[];
        return new Observable(data => {
            const storeCoating = window.sessionStorage.productPackaging;
            if (storeCoating) {
                productPackaging = JSON.parse(storeCoating);
                data.next(productPackaging);
                data.complete();
            } else {
                this.productService.getProductPackaging('/inventory/productClassification/getProductPackaging').subscribe(item => {
                    productPackaging = item;
                    this.saveProductPackaging(item);
                    data.next(productPackaging);
                    data.complete();
                }, error => {
                    this.toastr.error('Error');
                });

            }
        });
    }

    getAllHardness(): Observable<ProductHardness[]> {
        let productHardness: ProductHardness[];
        return new Observable<ProductHardness[]>(data => {
            const storeCoating = window.sessionStorage.productHardness;
            if (storeCoating) {
                productHardness = JSON.parse(storeCoating);
                data.next(productHardness);
                data.complete();
            } else {
                this.productService.getProductHardness('/inventory/productClassification/getProductHardness').subscribe(item => {
                    productHardness = item;
                    this.saveProductHardness(item);
                    data.next(productHardness);
                    data.complete();
                }, error => {
                    this.toastr.error('Error');
                });
            }
        });
    }

    getAllCompany(): Observable<Company[]> {
        let companyClass: Company[];
        return new Observable(data => {
            const storeCompany: string = window.sessionStorage.storeCompany;
            if (storeCompany) {
                companyClass = JSON.parse(storeCompany);
                data.next(companyClass);
                data.complete();
            } else {
                this.productService.getAllCompany('/inventory/getAllCompany').subscribe(item => {
                    companyClass = item;
                    this.saveCompany(item);
                    data.next(companyClass);
                    data.complete();
                }, error => {
                    this.toastr.error('Error');
                });
            }
        });
    }

    getAllwarehouse(): Observable<Warehouse[]> {
        let warehouseClass: Warehouse[];
        return new Observable(data => {
            const storeWarehouse: string = window.sessionStorage.storeWarehouse;
            if (storeWarehouse) {
                warehouseClass = JSON.parse(storeWarehouse);
                data.next(warehouseClass);
                data.complete();
            } else {
                this.productService.getAllWarehouse('/inventory/getAllWarehouse').subscribe(item => {
                    warehouseClass = item;
                    this.saveWarehouse(item);
                    data.next(warehouseClass);
                    data.complete();
                }, error => {
                    this.toastr.error('Error');
                });
            }
        });
    }

    getWarehouseById(warehouseId): Warehouse {
        const warehouseList = this.getAllwarehouse();
        let warehouse: Warehouse;
        warehouseList.subscribe(data => warehouse = data.filter(obj => obj.id === warehouseId)[0]);
        return warehouse;
    }

    getAllWarehouseByCompanyId(companyId): Warehouse[] {
        const warehouseList = this.getAllwarehouse();
        let warehouse: Warehouse[];
        warehouseList.subscribe(data => warehouse = data.filter(obj => obj.companyId === companyId));
        return warehouse;
    }

    getCompanyById(companyId): Company {
        const companyList = this.getAllCompany();
        let company: Company;
        companyList.subscribe(data => company = data.filter(obj => obj.id === companyId)[0]);
        return company;
    }

    getAllMachineDetail(): Observable<MachineDetail[]> {
        let machineDetail: MachineDetail[];
        return new Observable(data => {
            const storeMachineDetail: string = window.sessionStorage.storeMachineDetail;
            if (storeMachineDetail) {
                machineDetail = JSON.parse(storeMachineDetail);
                data.next(machineDetail);
                data.complete();
            } else {
                this.productService.getMachineDetail('/inventory/getAllMachineDetail').subscribe(item => {
                    machineDetail = item;
                    this.saveMachineDetail(item);
                    data.next(machineDetail);
                    data.complete();
                }, error => {
                    this.toastr.error('Error');
                });
            }
        });
    }

    getAllWeighingCompany(): Observable<WeighingCompany[]> {
        let weighingCompany: WeighingCompany[];
        return new Observable(data => {
            const storeWeighingCompany: string = window.sessionStorage.storeWeighingCompany;
            if (storeWeighingCompany) {
                weighingCompany = JSON.parse(storeWeighingCompany);
                data.next(weighingCompany);
                data.complete();
            } else {
                this.productService.getWeighingCompany('/inventory/getAllWeighingCompany').subscribe(item => {
                    weighingCompany = item;
                    this.saveWeighingCompany(item);
                    data.next(weighingCompany);
                    data.complete();
                }, error => {
                    this.toastr.error('Error');
                });
            }
        });
    }

    // getSearchFilter() : Observable<ProductFilter[]>{
        // let searchFilter : ProductFilter[];
    //     return new Observable(data=>{
    //         let store_Filter : string = window.sessionStorage['productFilter'];
    //         if(store_Filter) {
    //             searchFilter = JSON.parse(store_Filter);
    //             data.next(searchFilter);
    //             data.complete();
    //         } else {
    //             this.productService.getAllFilter().subscribe(item=>{
    //                 searchFilter = item;
    //                 this.saveProductFilter(item);
    //                 data.next(searchFilter);
    //                 data.complete();
    //             },error=>{
    // this.toastr.error('Error');
    //             });
    //         }
    //     });
    // }

    saveProductClass(data: ProductClass[]) {
        window.sessionStorage.productClass = JSON.stringify(data);
    }

    saveProductCategory(data: ProductCategory[]) {
        window.sessionStorage.productCategory = JSON.stringify(data);
    }

    saveProductTempor(data: ProductTemper[]) {
        window.sessionStorage.productTempor = JSON.stringify(data);
    }

    saveProductType(data: ProductType[]) {
        window.sessionStorage.productType = JSON.stringify(data);
    }

    saveProductShape(data: ProductShape[]) {
        window.sessionStorage.productShape = JSON.stringify(data);
    }

    saveProductCoating(data: ProductCoating[]) {
        window.sessionStorage.productCoating = JSON.stringify(data);
    }

    saveProductOiling(data: ProductOiling[]) {
        window.sessionStorage.ProductOiling = JSON.stringify(data);
    }

    saveProductSurface(data: ProductSurfaceCoating[]) {
        window.sessionStorage.productSurface = JSON.stringify(data);
    }
    saveProductAnnealing(data: ProductAnnealing[]) {
        window.sessionStorage.productAnnealing = JSON.stringify(data);
    }
    saveProductDefect(data: ProductDefect[]) {
        window.sessionStorage.productDefect = JSON.stringify(data);
    }
    saveProductFinish(data: ProductFinish[]) {
        window.sessionStorage.productFinish = JSON.stringify(data);
    }
    saveProductPackaging(data: ProductPackaging[]) {
        window.sessionStorage.productPackaging = JSON.stringify(data);
    }
    saveProductHardness(data: ProductHardness[]) {
        window.sessionStorage.productHardness = JSON.stringify(data);
    }
    saveProductOrigin(data: ProductOrigin[]) {
        window.sessionStorage.productOrigin = JSON.stringify(data);
    }

    saveCompany(data: Company[]) {
        window.sessionStorage.storeCompany = JSON.stringify(data);
    }

    saveWarehouse(data: Warehouse[]) {
        window.sessionStorage.storeWarehouse = JSON.stringify(data);
    }

    saveMachineDetail(data: MachineDetail[]) {
        window.sessionStorage.storeMachineDetail = JSON.stringify(data);
    }

    saveWeighingCompany(data: WeighingCompany[]) {
        window.sessionStorage.storeWeighingCompany = JSON.stringify(data);
    }

    // saveProductFilter( data : ProductFilter[] ) {
    //     window.sessionStorage['productFilter'] = JSON.stringify(data);
    // }

}
