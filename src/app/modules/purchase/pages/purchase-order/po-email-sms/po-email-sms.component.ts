import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { PurchaseService } from "src/app/modules/purchase/services/purchase.service";
import { Purchase } from "src/app/shared/Models/purchase.model";
import { User, UserMini } from "src/app/shared/Models/user.model";
import { UserService } from "src/app/shared/services/user.service";
import { UserRole, Status } from '../../../../../shared/Models/user.model';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-po-email-sms',
  templateUrl: './po-email-sms.component.html',
  styleUrls: ['./po-email-sms.component.scss']
})
export class PoEmailSmsComponent implements OnInit {

  constructor(private userService: UserService, private toastrService: ToastrService, private purchaseServic: PurchaseService) { }
  public userList: User[];
  public selectedPO: Purchase;
  public supplierList: any[] = [];
  public selectedSupplierList: any[] = [];
  public supplierDrowDownList: UserMini[];
  public limit = 15;
  public offset = 1;
  public productId: any;
  public userId: any;
  public price: any;
  @ViewChild('myModel', { static: false }) myModel;


  savePurchaseForm= new FormGroup({
    
  });

  ngOnInit() {
    // this.getAllUserByUserRoleAndStatus('APPROVED', 'SUPPLIER');
  }

  selectUser(supplierId) {
    this.purchaseServic.getPurchaseOrderByUser(supplierId).subscribe(data => {
      this.selectedSupplierList = data.data;
      console.log("data fis", data);
    }, error => {

    })
  }

  getSelectedPO(data) {
    this.selectedPO = data;
    if (this.selectedPO) {
      this.getPurchaseOrderByPo(this.selectedPO.id);
    }

    console.log("selected  po is", this.selectedPO);
  }

  getPurchaseOrderByPo(purchaseOderId) {
    this.purchaseServic.getPurchaseOrderByPo(purchaseOderId).subscribe(data => {
      this.supplierList = data.data;
      console.log("data fis", data);
    }, error => {

    })
  }



  // getAllUserByUserRoleAndStatus(status, userType) {
  //   this.userService.getAllUserByUserRoleAndStatus(status, userType, this.limit, this.offset).subscribe(
  //     data => {
  //       this.userList = data;

  //     },
  //     error => { }
  //   );
  // }


  openModal() {
    console.log("called")
    this.myModel.nativeElement.className='modal fade show';
    this.userService.getAllUserByUserNameAndCompany(UserRole.SUPPLIER, Status.APPROVED).subscribe(data => {
      this.supplierDrowDownList = data;
    }, error => {

    });
    //this.openModelRef.nativeElement.click();
  }

  savePurchaseOrder(purchaseId, userId, productId, price) {
    if (this.selectedPO && this.userId && this.productId) {
      this.purchaseServic.savePurchaseOrder(this.selectedPO.id, this.userId, this.productId, this.price).subscribe(data => {
        this.supplierList = data.data;

        this.toastrService.success("Record saved successfully", "Success");
      }, error => {

      })
    }
  }

  closeModel() { 
     this.myModel.nativeElement.className = 'modal hide';
  }
}
