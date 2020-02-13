import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/Models/product.model.';
import { InventoryService } from '../../service/inventory.service';
import { ToastrService } from "ngx-toastr";

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
  selectedProductList: Product[]=[];


  constructor(private inventoryService: InventoryService,private toastr:ToastrService) { }

  ngOnInit() {
    this.getProductByStatus('PENDING');
    this.getProductByStatus('APPROVED');
    this.getProductByStatus('REJECTED');

  

  }
  
  getProductByStatus(status)
  {
    let url = "/inventory/getAllProductByStatus/"+status;
      this.inventoryService.getAllProductByStatus(url).subscribe(data => {
    if(status=='REJECTED')
      {
         this.rejectedProductList = data;
      }
        if(status=='PENDING')
          {

            this.pendingProductList=data;
          }
        if(status=='APPROVED')
      {
         this.approvedProductList = data;
      }
     
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

  changeStatusOfProduct(status)
  {
     if (this.selectedProductList.length == 0) {
      this.toastr.warning("select at least one record");
    } else {
      let path = "/inventory/updateProduct";

      for (let i = 0; i < this.selectedProductList.length; i++) {
        this.selectedProductList[i].status = status;
      }
        this.inventoryService.updateProduct(path,this.selectedProductList).subscribe(
          data => {
           this.toastr.success("Record(s) successfully updated");
     this.selectedProductList = [];
     this.getProductByStatus('PENDING');
    this.getProductByStatus('APPROVED');
    this.getProductByStatus('REJECTED');
          },
          error => {}
        );
      
    }
  }
}
