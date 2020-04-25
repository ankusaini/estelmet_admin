import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { Product } from 'src/app/shared/Models/product.model.';
import { InventoryService } from 'src/app/modules/inventory/service/inventory.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as xlsx from 'xlsx';
import * as jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-add-product-cart',
  templateUrl: './add-product-cart.component.html',
  styleUrls: ['./add-product-cart.component.scss']
})
export class AddProductCartComponent implements OnInit, OnChanges {
  @Input() productList: Product[] = [];
  @Input() component: any = '';
  // selectedList: Product[] = [];
  @ViewChild('epltable', { static: false }) epltable: ElementRef;

  // @Input() selectedTab : string;

  @Output() selectedProductList: EventEmitter<any> = new EventEmitter<any>();

  @Output() selectedId: EventEmitter<any> = new EventEmitter<any>();
  
  setProductList: Product[] = [];

  constructor(
    private inventoryService: InventoryService,
    private router: Router, private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    // this.selectedList = this.productList;
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


   exportToPDFChild()
   {

     var node = document.getElementById('contentToConvert');
console.log('node',node);
              var img;
              var filename;
              var newImage;
              domtoimage.toPng(node, { bgcolor: '#fff' })
                .then(function(dataUrl) {
                  img = new Image();
                  img.src = dataUrl;
                  newImage = img.src;

                  img.onload = function(){
                  var pdfWidth = img.width;
                  var pdfHeight = img.height;
                    // FileSaver.saveAs(dataUrl, 'my-pdfimage.png'); // Save as Image
                    var doc;
                    if(pdfWidth > pdfHeight)
                    {
                      doc = new jsPDF('l', 'px', [pdfWidth , pdfHeight]);
                    }
                    else
                    {
                      doc = new jsPDF('p', 'px', [pdfWidth , pdfHeight]);
                    }
                    var width = doc.internal.pageSize.getWidth();
                    var height = doc.internal.pageSize.getHeight();
                    doc.addImage(newImage, 'PNG',  10, 10, width, height);
                    filename = 'Product' + '.pdf';
                    doc.save(filename);
                  };
                })
                .catch(function(error) {

                });

   }


}
