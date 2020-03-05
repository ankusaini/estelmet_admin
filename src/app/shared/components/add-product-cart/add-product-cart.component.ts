import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Product } from 'src/app/shared/Models/product.model.';
import { InventoryService } from 'src/app/modules/inventory/service/inventory.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product-cart',
  templateUrl: './add-product-cart.component.html',
  styleUrls: ['./add-product-cart.component.scss']
})
export class AddProductCartComponent implements OnInit, OnChanges {
  @Input() productList: Product[] = [];
  @Input() component: any = '';
  // selectedList: Product[] = [];

  // @Input() selectedTab : string;

  @Output() selectedProductList: EventEmitter<any> = new EventEmitter<any>();
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
}
