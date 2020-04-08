import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PurchaseService } from 'src/app/modules/purchase/services/purchase.service';
import { Company } from 'src/app/shared/Models/company.model.';
import { Product, ProductCategory, ProductShape } from 'src/app/shared/Models/product.model.';
import { RequestP } from 'src/app/shared/Models/RequestResponse';
import { Warehouse } from 'src/app/shared/Models/warehouse';
import { StaticDataService } from 'src/app/shared/services/data/staticData.service';
@Component({
  selector: 'app-create-mr',
  templateUrl: './create-mr.component.html',
  styleUrls: ['./create-mr.component.scss']
})
export class CreateMRComponent implements OnInit {

  public request: RequestP = {};
  public companyList: Company[] = [];
  public selectedComapny: Company;
  public warehouseList: Warehouse[] = [];

  public productShapeList: ProductShape[] = [];
  public productCategoryList: ProductCategory[] = [];
  public selectedWarehouse: Warehouse;
  public productList: Product[] = [];

  constructor(
    private productService: StaticDataService,
    private toastr: ToastrService,
    public purchaseService: PurchaseService,
    public router: Router) {
    // this.selectedComapny = {
    // }
  }


  public mrPurchase = new FormGroup({
    id: new FormControl(''),
    type: new FormControl('MATERIAL_REQURIMENT'),
    sourceCompanyId: new FormControl('', [Validators.required]),
    status: new FormControl('PENDING'),
    sourceWarehouseId: new FormControl('', [Validators.required]),
    productCategory: new FormControl('', [Validators.required]),
    productShape: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    this.getAllCompany();
    this.getAllproductShapeList();
    this.getAllproductCategoryList();
  }

  createMrSubmit() {
    console.log(this.mrPurchase);
  }
  getAllCompany() {
    this.productService.getAllCompany().subscribe(data => this.companyList = data);
    this.productService.getAllwarehouse().subscribe(data => this.warehouseList = data);
  }


  getAllproductCategoryList() {
    this.productService.getAllProductCategory().subscribe(data => {
      this.productCategoryList = data;
    });
  }

  getAllproductShapeList() {
    this.productService.getProductShape().subscribe(data => {
      this.productShapeList = data;
    });
  }

  getProductData(data) {
    this.productList.push(data);
  }

  selectedCompany(value: number) {
    const data = this.companyList.filter(x => Number(x.id) === Number(value));
    this.selectedComapny = data[0];
    this.warehouseList = this.warehouseList.filter(x => Number(x.companyId) === Number(value));
  }

  getSelectedWarehouse(value: number) {
    const data = this.warehouseList.filter(x => Number(x.id) === Number(value));
    this.selectedComapny = data[0];
  }

  saveMrRecord() {
    if (this.productList && this.productList.length === 0) {
      alert('please save at least one record');
      this.toastr.warning('Please enter at least one product');
    } else if (this.mrPurchase.invalid) {
      this.toastr.warning('Please fill all the details.');
    } else {
      this.productList.forEach(x => x.warehouse = this.selectedWarehouse);
      this.request.productList = this.productList;
      this.request.purchase = this.mrPurchase.value;
      const path = '/purchase/createPurchase';
      this.purchaseService.saveRequestObject(path, this.request).subscribe(data => {
        this.toastr.success('Record saved successfully')
        this.router.navigateByUrl('/purchase/mrApproval');

      }, error => {
        console.log('error is', error);
      });
    }
  }
}
