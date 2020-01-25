import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "src/app/shared/Models/product.model.";
import { InventoryService } from 'src/app/modules/inventory/service/inventory.service';

@Component({
  selector: 'app-add-product-cart',
  templateUrl: './add-product-cart.component.html',
  styleUrls: ['./add-product-cart.component.scss']
})
export class AddProductCartComponent implements OnInit {
  @Input() productList:Product[]=[];
  @Input() component : any = "";
  // @Input() selectedTab : string;

  @Output() selectedProductList: EventEmitter<any> = new EventEmitter<any>();
  setProductList: Product[]=[];

  constructor(private inventoryService : InventoryService) { }

  ngOnInit() {
  }

  addProduct(product) {
    const index = this.setProductList.indexOf(product);
    if (index == -1) {
      this.setProductList.push(product);
      this.selectedProductList.emit(this.setProductList);
    } else {
      alert("already added");
    }
  }

  deleteProduct(product)
  {
  
    const index: number = this.productList.indexOf(product);
    console.log("index",index)
    if (index !== -1) {
      this.productList.splice(index, 1);
    }
  }

 
}
