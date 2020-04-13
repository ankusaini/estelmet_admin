import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/Models/product.model.';
import { InventoryService } from '../../service/inventory.service';

@Component({
  selector: 'app-product-approval',
  templateUrl: './product-approval.component.html',
  styleUrls: ['./product-approval.component.scss']
})
export class ProductApprovalComponent implements OnInit {
  selectedTab = 'PENDING';
  pendingProductList: Product[];
  approvedProductList: Product[];
  rejectedProductList: Product[];
  selectedProductList: Product[] = [];

  constructor(private inventoryService: InventoryService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getProductByStatus('PENDING');
    this.getProductByStatus('APPROVED');
    this.getProductByStatus('REJECTED');
  }

  getProductByStatus(status) {
    const url = '/inventory/getAllProductByStatus/' + status;
    this.inventoryService.getAllProductByStatus(url).subscribe(data => {
      if (status === 'REJECTED') {
        this.rejectedProductList = data;
      }
      if (status === 'PENDING') {

        this.pendingProductList = data;
      }
      if (status === 'APPROVED') {
        this.approvedProductList = data;
      }
    });
  }

  onTabChange(tab) {

    if (tab && tab.nextId === 'rejectedTab') {
      this.selectedTab = 'REJECTED';

    }
    if (tab && tab.nextId === 'pendingTab') {
      this.selectedTab = 'PENDING';
    }
    if (tab && tab.nextId === 'approvedTab') {
      this.selectedTab = 'APPROVED';
    }
    this.selectedProductList = [];
  }

  getSelectedProductList(selectedProductList) {
    this.selectedProductList = selectedProductList;
  }

  changeStatusOfProduct(status) {
    if (this.selectedProductList.length === 0) {
      this.toastr.warning('select at least one record');
    } else {
      // const path = '/inventory/updateProduct';
      this.selectedProductList.forEach(product => product.status = status);
      this.inventoryService.updateProduct(this.selectedProductList).subscribe(
        () => {
          this.toastr.success('Record(s) successfully updated');
          this.selectedProductList = [];
          this.rejectedProductList = undefined;
          this.pendingProductList = undefined;
          this.approvedProductList = undefined;
          this.getProductByStatus('PENDING');
          this.getProductByStatus('APPROVED');
          this.getProductByStatus('REJECTED');
        },
      );

    }
  }
}
