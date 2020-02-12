import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../service/inventory.service';
import { Product } from 'src/app/shared/Models/product.model.';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-search-view-product',
  templateUrl: './search-view-product.component.html',
  styleUrls: ['./search-view-product.component.scss']
})
export class SearchViewProductComponent implements OnInit {
  
  productList: Product[];
  selectedProductList: Product[];

  constructor(private inventoryService: InventoryService,private toastr:ToastrService) { }

  ngOnInit() {
    let url = "/inventory/getAllProductByProductStageAndStatus/ACTIVE/APPROVED";
    // let url = "/inventory/getAllProductByStatus/PENDING";
    this.inventoryService.getAllProductByProductStageAndStatus(url).subscribe( data => {
      this.productList = data;
      console.log("productList is: ", this.productList);
    }, error => {
      console.log(error);
    });
  }

  getSelectedProductList(selectedProductList) {
    this.selectedProductList = selectedProductList;
    console.log(this.selectedProductList);
  }

}
