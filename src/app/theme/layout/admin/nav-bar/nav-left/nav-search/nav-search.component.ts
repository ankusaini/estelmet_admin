import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Product, ProductFilter, ProductStage, ProductCategory, ProductClass, ProductShape, ProductCoating, ProductFinish, ProductTemper, ProductType } from '../../../../../../shared/Models/product.model.';
import { Status } from 'src/app/shared/Models/user.model';
import { ProductService } from '../../../../../../shared/services/product.service';
import { StaticDataService } from '../../../../../../shared/services/data/staticData.service';
import { Warehouse } from '../../../../../../shared/Models/warehouse';
@Component({
  selector: 'app-nav-search',
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.scss']
})
export class NavSearchComponent implements OnInit {
  public isSearch: boolean;
  productList: Product[];
  productType: ProductType[] = [];
  productCategory: ProductCategory[] = [];
  productShape: ProductShape[] = [];
  productClass: ProductClass[] = [];
  productCoating: ProductCoating[] = [];
  productFinish: ProductFinish[] = [];
  productTemper: ProductTemper[] = [];
  simpleOption = [
    { vlaue: 'T1', label: 'T1', key: 'k1' },
    { vlaue: 'T2', label: 'T2', key: 'k1'  },
    { vlaue: 'T3', label: 'T3', key: 'k1'  },
    { vlaue: 'T4', label: 'T4', key: 'k1'  },
    { vlaue: 'T5', label: 'T5', key: 'k1'  },
    { vlaue: 'T6', label: 'T6', key: 'k1'  },
  ];
  simpleOption2 = [
    { vlaue: '1.1/2.8', label: '1.1/2.8' },
    { vlaue: '2.2/2.8', label: '5.6/5.6	' },
    { vlaue: '11.2/8.4	', label: '11.2/8.4	' },
    { vlaue: '5.6/11.2	', label: '5.6/11.2	' },
    { vlaue: '1.1/1.1', label: '1.1/1.1' },
    { vlaue: '1.1/2.8', label: '1.1/2.8' },
    { vlaue: '1.1/4.2', label: '1.1/4.2' },
    { vlaue: '1.1/5.6', label: '1.1/5.6' }
  ];
  simpleOption3 = [
    { vlaue: 'BRIGHT', label: 'BRIGHT' },
    { vlaue: 'MATT', label: 'MATT' },
    { vlaue: 'STONE', label: 'STONE' },
    { vlaue: 'LOW', label: 'LOW' },
    { vlaue: 'NO', label: 'NO' },
  ];
  warehouse: Warehouse[] = [];
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
    this.isSearch = false;
  }
  ngOnInit() {
    this.staticDataService.getProductType().subscribe(data => this.productType = data);
    this.staticDataService.getAllwarehouse().subscribe(data => this.warehouse = data);
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
