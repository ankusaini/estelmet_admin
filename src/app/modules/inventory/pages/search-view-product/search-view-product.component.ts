import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/Models/product.model.';
import { InventoryService } from '../../service/inventory.service';
import { AddProductCartComponent } from "src/app/shared/components/add-product-cart/add-product-cart.component";

@Component({
  selector: 'app-search-view-product',
  templateUrl: './search-view-product.component.html',
  styleUrls: ['./search-view-product.component.scss']
})
export class SearchViewProductComponent implements OnInit {

  productList: Product[];
  selectedProductList: Product[];

  @ViewChild(AddProductCartComponent,{static:false}) child:AddProductCartComponent;

  constructor(private inventoryService: InventoryService, private toastr: ToastrService) { }

  ngOnInit() {
    const url = '/inventory/getAllProductByProductStageAndStatus/ACTIVE/APPROVED';
    // let url = "/inventory/getAllProductByStatus/PENDING";
    this.inventoryService.getAllProductByProductStageAndStatus(url).subscribe(data => {
      this.productList = data;
    }, error => {
      console.log(error);
    });
  }

  getSelectedProductList(selectedProductList) {
    this.selectedProductList = selectedProductList;
  }


  exportToExcel()
  {
  this.child.exportToExcelChild();
  }

  exportToPDF()
  {
    this.child.exportToPDFChild();

  }
}
