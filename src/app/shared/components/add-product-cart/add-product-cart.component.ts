import { Component, OnInit, Input } from "@angular/core";
import { Product } from "src/app/shared/Models/product.model.";

@Component({
  selector: 'app-add-product-cart',
  templateUrl: './add-product-cart.component.html',
  styleUrls: ['./add-product-cart.component.scss']
})
export class AddProductCartComponent implements OnInit {

  constructor() { }

  @Input()
  productList:Product[]=[];
  ngOnInit() {
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
