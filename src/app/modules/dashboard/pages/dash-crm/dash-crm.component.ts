import { Component, OnInit } from '@angular/core';
import { Product, ProductCategory, ProductFilter, ProductStage } from 'src/app/shared/Models/product.model.';
import { Status } from 'src/app/shared/Models/user.model';
import { ProductService } from 'src/app/shared/services/product.service';
import { ProductClass, ProductShape } from '../../../../shared/Models/product.model.';
import { Warehouse } from '../../../../shared/Models/warehouse';
import { StaticDataService } from '../../../../shared/services/data/staticData.service';

@Component({
  selector: 'app-dash-crm',
  templateUrl: './dash-crm.component.html',
  styleUrls: ['./dash-crm.component.scss']
})
export class DashCrmComponent implements OnInit {

  productList: Product[];

  public totalTPCount = 0;
  public totalTPCountWt = 0;
  public approvedTPCount = 0;
  public pendingTPCount = 0;
  public rejectedTPCount = 0;

  // variable for TF
  public totalTFCount = 0;
  public totalTFCountWt = 0;
  public approvedTFCount = 0;
  public pendingTFCount = 0;
  public rejectedTFCount = 0;

  //PC
  public totalGLCount = 0;
  public totalGLCountWt = 0;
  public approvedGLCount = 0;
  public pendingGLCount = 0;
  public rejectedGLCount = 0;

  // variable for PURCHASE LO
  public totalPCRCCount = 0;
  public totalPCRCCountWt = 0;
  public approvedPCRCCount = 0;
  public pendingPCRCCount = 0;
  public rejectedPCRCCount = 0;
  productCategory: ProductCategory[] = [];
  selectedCategory: ProductCategory = { id: 1, productCategory: 'TP' };
  productShape: ProductShape[] = [];
  selectedShape: ProductShape = { id: 1, productShape: 'SLC' };
  productClass: ProductClass[] = [];
  selectedClass: ProductClass = { id: 2, productClass: '1B' };
  warehouse: Warehouse[] = [];
  selectedWarehouse: Warehouse = { id: 1, name: 'A-88' };
  productFilter: ProductFilter = {
    limit: 10,
    offset: 1,
    status: Status.APPROVED.toString(),
    productStage: ProductStage.ACTIVE.toString(),
    thicknessMin: '',
    thicknessMax: '',
    widthMin: '',
    widthMax: '',
    lengthMin: '',
    lengthMax: '',
    productCategory: '',
    productClass: '',
    productShape: '',
    productTemper: '',
    productFinish: '',
    productCoating: '',
    lessThanNtWt: '',
    greaterThanNtWt: '',
    warehouse: ''
  };

  constructor(private productService: ProductService, private staticDataService: StaticDataService) {
  }

  ngOnInit() {
    this.staticDataService.getAllProductCategory().subscribe(data => this.productCategory = data);
    this.staticDataService.getProductShape().subscribe(data => this.productShape = data);
    this.staticDataService.getProductClass().subscribe(data => this.productClass = data);
    this.staticDataService.getAllwarehouse().subscribe(data => this.warehouse = data);
    this.getCategoryProduct();
    this.getShapeProduct();
    this.getClassProduct();
    this.getWarehouseProduct();
  }

  getCategoryProduct() {
    const name = this.selectedCategory.productCategory;
    this.productService.getCategoryProductsForDashboard(this.selectedCategory).subscribe(data => {
      this.pendingTPCount = data.body.PENDING[0][0];
      this.approvedTPCount = data.body.APPROVED[0][0];
      this.rejectedTPCount = data.body.REJECTED[0][0];
      this.totalTPCount = data.body[name][0][0];
      this.totalTPCountWt = data.body[name][0][1];
    });
  }

  getShapeProduct() {
    const name = this.selectedShape.productShape;
    this.productService.getShapeProductsForDashboard(this.selectedShape).subscribe(data => {
      this.pendingTFCount = data.body.PENDING[0][0];
      this.approvedTFCount = data.body.APPROVED[0][0];
      this.rejectedTFCount = data.body.REJECTED[0][0];
      this.totalTFCount = data.body[name][0][0];
      this.totalTFCountWt = data.body[name][0][1];
    });
  }

  getClassProduct() {
    const name = this.selectedClass.productClass;
    this.productService.getClassProductsForDashboard(this.selectedClass).subscribe(data => {
      this.pendingGLCount = data.body.PENDING[0][0];
      this.approvedGLCount = data.body.APPROVED[0][0];
      this.rejectedGLCount = data.body.REJECTED[0][0];
      this.totalGLCount = data.body[name][0][0];
      this.totalGLCountWt = data.body[name][0][1];
    });
  }

  getWarehouseProduct() {
    console.log(this.selectedWarehouse);
    const name = this.selectedWarehouse.name;
    this.productService.getWarehouseProductsForDashboard(this.selectedWarehouse).subscribe(data => {
      this.pendingPCRCCount = data.body.PENDING[0][0];
      this.approvedPCRCCount = data.body.APPROVED[0][0];
      this.rejectedPCRCCount = data.body.REJECTED[0][0];
      this.totalPCRCCount = data.body[name][0][0];
      this.totalPCRCCountWt = data.body[name][0][1];
    },
      error => { console.log(error); }
    );
  }

  getProduct(id, status) {
    if (id === 'category') {
      this.productFilter.productCategory = this.selectedCategory.id.toString();
    } else if (id === 'shape') {
      this.productFilter.productShape = this.selectedShape.id.toString();
    } else if (id === 'class') {
      this.productFilter.productClass = this.selectedClass.id.toString();
    } else if (id === 'warehouse') {
      this.productFilter.warehouse = this.selectedWarehouse.id.toString();
    }
    this.productFilter.status = status;
    this.productService.getSearchFilter(this.productFilter).subscribe(
      (data) => {
        this.productList = data;
      }
    );
  }
}
