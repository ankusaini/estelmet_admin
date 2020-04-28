import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ViewChild, ElementRef } from '@angular/core';
import {
  Product, ProductType, ProductCategory, ProductShape,
  ProductClass, ProductCoating, ProductFinish, ProductTemper,
  ProductFilter, Status, ProductStage
} from 'src/app/shared/Models/product.model.';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as xlsx from 'xlsx';
import * as jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import html2canvas from 'html2canvas';
import { Warehouse } from '../../Models/warehouse';
import { StaticDataService } from '../../services/data/staticData.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product-cart',
  templateUrl: './add-product-cart.component.html',
  styleUrls: ['./add-product-cart.component.scss']
})
export class AddProductCartComponent implements OnInit, OnChanges {
  @Input() productList: Product[] = [];
  @Input() showSearch = false;
  @Input() component: any = '';
  // selectedList: Product[] = [];
  @ViewChild('epltable', { static: false }) epltable: ElementRef;
  // @Input() selectedTab : string;
  @Output() selectedProductList: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectedId: EventEmitter<any> = new EventEmitter<any>();
  productType: ProductType[] = [];
  productCategory: ProductCategory[] = [];
  productShape: ProductShape[] = [];
  productClass: ProductClass[] = [];
  productCoating: ProductCoating[] = [];
  productFinish: ProductFinish[] = [];
  productTemper: ProductTemper[] = [];
  simpleOption = [
    { vlaue: 'T1', label: 'T1', key: 'k1' },
    { vlaue: 'T2', label: 'T2', key: 'k1' },
    { vlaue: 'T3', label: 'T3', key: 'k1' },
    { vlaue: 'T4', label: 'T4', key: 'k1' },
    { vlaue: 'T5', label: 'T5', key: 'k1' },
    { vlaue: 'T6', label: 'T6', key: 'k1' },
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
  setProductList: Product[] = [];
  checkProductType = false;
  checkProductCategory = false;
  checkProductShape = false;
  checkProductClass = false;
  checkWarehouse = false;
  constructor(
    private productService: ProductService,
    private router: Router,
    private toastr: ToastrService,
    private staticDataService: StaticDataService
  ) { }

  ngOnInit() {
    this.staticDataService.getProductType().subscribe(data => this.productType = data);
    this.staticDataService.getAllwarehouse().subscribe(data => this.warehouse = data);
    this.staticDataService.getAllProductCategory().subscribe(data => this.productCategory = data);
    this.staticDataService.getProductShape().subscribe(data => this.productShape = data);
    this.staticDataService.getProductClass().subscribe(data => this.productClass = data);
  }

  ngOnChanges() {
    // this.selectedList = this.productList;
  }

  getProduct() {
    this.productService.getSearchFilter(this.productFilter).subscribe(data => this.productList = data);
  }

  getClubbingSearch() {
    let clubSearch = '';
    if (this.checkProductType) {
      clubSearch = 'productType,';
    }
    if (this.checkProductCategory) {
      clubSearch += 'productCategory,';
    }
    if (this.checkProductShape) {
      clubSearch += 'productShape,';
    }
    if (this.checkProductClass) {
      clubSearch += 'productClass,';
    }
    if (this.checkWarehouse) {
      clubSearch += 'warehouse,';
    }
    clubSearch = clubSearch.slice(0, -1);
    console.log(clubSearch);
    this.productService.getSimilarProduct(clubSearch).subscribe(data => this.productList = data);
  }

  addProduct(product) {
    const index = this.setProductList.indexOf(product);
    if (index === -1) {
      this.setProductList.push(product);
      this.selectedProductList.emit(this.setProductList);
      this.selectedId.emit(product);
    } else {
      this.toastr.warning('Product already added');
    }
  }

  deleteProduct(product) {
    const index: number = this.productList.indexOf(product);
    console.log('index', index);
    if (index !== -1) {
      this.productList.splice(index, 1);
      this.selectedProductList.emit(this.setProductList);
    }
  }

  navigateToEdit(productId) {
    if (this.component === 'inventory') {
      console.log('selected id is: ', productId);
      this.router.navigateByUrl('/inventory/editProduct/' + productId);
    }
  }

  exportToExcelChild() {
    const ws: xlsx.WorkSheet =
      xlsx.utils.table_to_sheet(this.epltable.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'Products.xlsx');
    // console.log("fnc")
  }


  exportToPDFChild() {

    var node = document.getElementById('contentToConvert');
    console.log('node', node);
    var img;
    var filename;
    var newImage;
    domtoimage.toPng(node, { bgcolor: '#fff' })
      .then(function (dataUrl) {
        img = new Image();
        img.src = dataUrl;
        newImage = img.src;

        img.onload = function () {
          var pdfWidth = img.width;
          var pdfHeight = img.height;
          // FileSaver.saveAs(dataUrl, 'my-pdfimage.png'); // Save as Image
          var doc;
          if (pdfWidth > pdfHeight) {
            doc = new jsPDF('l', 'px', [pdfWidth, pdfHeight]);
          }
          else {
            doc = new jsPDF('p', 'px', [pdfWidth, pdfHeight]);
          }
          var width = doc.internal.pageSize.getWidth();
          var height = doc.internal.pageSize.getHeight();
          doc.addImage(newImage, 'PNG', 10, 10, width, height);
          filename = 'Product' + '.pdf';
          doc.save(filename);
        };
      })
      .catch(function (error) {

      });

  }


}
