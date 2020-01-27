import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/Models/product.model.';
import { InventoryService } from '../../service/inventory.service';

@Component({
  selector: 'app-product-approval',
  templateUrl: './product-approval.component.html',
  styleUrls: ['./product-approval.component.scss']
})
export class ProductApprovalComponent implements OnInit {
  selectedTab: string = "PENDING";
  pendingProductList : Product[]; 
  approvedProductList: Product[];
  rejectedProductList: Product[];
  selectedProductList: Product[];


  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
    let pendingUrl = "/inventory/getAllProductByStatus/PENDING";
    this.inventoryService.getAllProductByStatus(pendingUrl).subscribe(data => {
      this.pendingProductList = data;
      console.log("pending data is: ", this.pendingProductList);
    });

    let approvedUrl = "/inventory/getAllProductByStatus/APPROVED";
    this.inventoryService.getAllProductByStatus(approvedUrl).subscribe(data => {
      this.approvedProductList = data;
    });

    let rejectedUrl = "/inventory/getAllProductByStatus/REJECTED";
    this.inventoryService.getAllProductByStatus(rejectedUrl).subscribe(data => {
      this.rejectedProductList = data;
      console.log("rejected data is: ", this.rejectedProductList);
    });

  }

  onTabChange(tab) {
    console.log("tab ", tab);
    //here tab.activeId means kon se tab se aaya hai

    if (tab && tab.nextId == "rejectedTab") {
      this.selectedTab = "REJECTED";
      
    }
    if (tab && tab.nextId == "pendingTab") {
      this.selectedTab = "PENDING";
    }
    if (tab && tab.nextId == "approvedTab") {
      this.selectedTab = "APPROVED";
    }
    console.log("selecyed tab", this.selectedTab);
    this.selectedProductList=[];
  }
 
  getSelectedProductList(selectedProductList) {
    this.selectedProductList = selectedProductList;
    console.log(this.selectedProductList);
  }

}
