import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { FormInput } from 'src/app/modules/inventory/pages/add-product/add-product-form.model';
import { Grn } from 'src/app/shared/Models/purchase.model';
import { Product } from 'src/app/shared/Models/product.model.';
import { RequestP } from 'src/app/shared/Models/RequestResponse';
import { ToastrService } from 'ngx-toastr';
import { InventoryService } from 'src/app/modules/inventory/service/inventory.service';
import { PurchaseService } from 'src/app/modules/purchase/services/purchase.service';
import { WizardComponent } from 'ng2-archwizard/dist';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  @ViewChild('wizard', { static: false }) wizard: WizardComponent;
  public requestObj: RequestP = {};
  showGroup = true;
  grnList: Grn[];
  productList: Product[] = [];
  selectedGrn: Grn;
  selectedProductType: any = '';

  constructor(
    private toastr: ToastrService,
    private inventoryService: InventoryService,
    private router: Router,
    private purchaseService: PurchaseService) {
    this.basicSwal();
  }
  ngOnInit() {
    const url = '/purchase/getAllGrnByStatus/PENDING';
    this.inventoryService.getAllGrnByStatus(url).subscribe(data => {
      this.grnList = data.grnList;
      console.log(this.grnList);
    });
  }



  basicSwal() {
    Swal.fire({
      title: 'Add Product With',
      input: 'select',
      inputOptions: {
        PURCHASE_INVOICE: 'Purchase Invoice',
        withoutPurchaseInvoice: 'Without Purchase Invoice',
        jobWorkChalan: 'Job Work Chalan',
        materialTransfer: 'Material Transfer'
      },
      inputPlaceholder: 'Select Product Type',
      allowOutsideClick: false,
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Select',
      inputValidator(value) {
        // tslint:disable-next-line: only-arrow-functions
        return new Promise(function (resolve, reject) {
          if (value !== '') {
            resolve();
          } else {
            resolve('You need to select Product Type');
          }
        });
      }
    }).then(selectedType => {
      if (selectedType.value) {
        this.selectedProductType = selectedType.value;
      } else if(selectedType.dismiss === Swal.DismissReason.cancel){
        console.log("dismiss Called");
        this.router.navigate(['/dashboard/default']);
      }
    });
  }

  getSelectedGrnId(grnId) {
    this.selectedGrn = grnId;
    console.log('selected grn',this.selectedGrn);
    this.wizard.navigation.goToNextStep();
  }

  getProductData(productData) {
    console.log(productData);
    this.productList.push(productData);
  }

  sendForApproval() {
    if (this.productList.length > 0) {

      this.productList.forEach( x => x.warehouse = { id :Number(this.selectedGrn.sourceWarehouseId)});

      this.requestObj.grn = this.selectedGrn;
      this.requestObj.productList = this.productList;
      const url = '/purchase/updateGrnWithProduct';

      this.purchaseService.saveRequestObject(url, this.requestObj).subscribe(data => {
        this.toastr.success('Record saved successfully');
        this.router.navigateByUrl('/inventory/productApproval');

      }, error => {
        console.log('error is', error);
      });

    } else {
      this.toastr.warning('Please add any product');
    }
  }
}
