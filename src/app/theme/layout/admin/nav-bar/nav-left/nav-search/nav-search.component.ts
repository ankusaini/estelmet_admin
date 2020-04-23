import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Product, ProductFilter, ProductStage, ProductCategory, ProductClass, ProductShape, ProductCoating, ProductFinish, ProductTemper } from '../../../../../../shared/Models/product.model.';
import { Status } from 'src/app/shared/Models/user.model';
import { ProductService } from '../../../../../../shared/services/product.service';
import { StaticDataService } from '../../../../../../shared/services/data/staticData.service';
@Component({
  selector: 'app-nav-search',
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.scss']
})
export class NavSearchComponent implements OnInit {
  public isSearch: boolean;
  productList: Product[];
  productCategory: ProductCategory[] = [];
  productShape: ProductShape[] = [];
  productClass: ProductClass[] = [];
  productCoating: ProductCoating[] = [];
  productFinish: ProductFinish[] = [];
  productTemper: ProductTemper[] = [];
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
    greaterThanNtWt: ''
  };
  constructor(private productService: ProductService, private staticDataService: StaticDataService) {
    this.isSearch = false;
  }
  ngOnInit() {
    this.staticDataService.getAllProductCategory().subscribe(data => this.productCategory = data);
    this.staticDataService.getProductShape().subscribe(data => this.productShape = data);
    this.staticDataService.getProductClass().subscribe(data => this.productClass = data);
    this.staticDataService.getAllProductCoating().subscribe(data => {
      this.productCoating = data;
      this.productCoating.forEach(x => x['checked'] = false);
    });
    this.staticDataService.getAllFinish().subscribe(data => {
      this.productFinish = data;
      this.productFinish.forEach(x => x['checked'] = false);
    });
    this.staticDataService.getProductTempor().subscribe(data => {
      this.productTemper = data;
      this.productTemper.forEach(x => x['checked'] = false);
    });
  }

  getProduct() {
    this.filterValue();
    this.productService.getSearchFilter(this.productFilter).subscribe(
      (data) => {
        this.productList = data;
        console.log(data);
      }
    );
  }

  filterValue() {
    // temper
    let temper = '';
    this.productTemper.forEach(x => {
      if (x['checked']) {
        temper += x.id + ',';
      }
    });
    this.productFilter.productTemper = temper.substring(0, temper.length - 1);
    // finish
    let finish = '';
    this.productTemper.forEach(x => {
      if (x['checked']) {
        finish += x.id + ',';
      }
    });
    this.productFilter.productFinish = finish.substring(0, finish.length - 1);
    // coating
    let coating = '';
    this.productTemper.forEach(x => {
      if (x['checked']) {
        coating += x.id + ',';
      }
    });
    this.productFilter.productCoating = coating.substring(0, coating.length - 1);
  }
}
