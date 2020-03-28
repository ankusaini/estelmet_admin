import { Component, OnInit, ChangeDetectionStrategy,ChangeDetectorRef, Output, EventEmitter } from "@angular/core";
import { Company } from "src/app/shared/Models/company.model.";
import { Warehouse } from   "src/app/shared/Models/warehouse";
import {
  ProductCategory,
  ProductShape,
  Product
} from "src/app/shared/Models/product.model.";
import { StaticDataService } from "src/app/shared/services/data/staticData.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RequestP } from "src/app/shared/Models/RequestResponse";
import { PurchaseService } from "src/app/modules/purchase/services/purchase.service";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { CustomValidator } from "src/app/Validators/custom-validator";
import { UserService } from "src/app/shared/services/user.service";
import { User } from "src/app/shared/Models/user.model";
@Component({
  selector: "app-invoice-details",
  templateUrl: "./invoice-details.component.html",
  styleUrls: ["./invoice-details.component.scss"],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class InvoiceDetailsComponent implements OnInit {
  @Output() invoiceDetailsData: EventEmitter<any> = new EventEmitter<any>();
  public companyList: Company[] = [];
 public selectedCmp: Company;
   public warehouseList: Warehouse[] = [];

  public customerList: User[];
  public customerIdList: any[] = [];

  constructor(
    private productService: StaticDataService,
    private toastr: ToastrService,
    private userService: UserService,private _cd : ChangeDetectorRef
  ) {}

  public invoiceDetails = new FormGroup({
    deliveryOrderType: new FormControl("SALES_OFFER_LOT"),
    sourceCompanyId: new FormControl("", [Validators.required]),
    status: new FormControl("APPROVED"),
    sourceWarehouseId: new FormControl("", [Validators.required]),
    customerId: new FormControl("", [Validators.required]),
    invoiceNetWeight: new FormControl("", [Validators.required]),
    invoiceGrossWeight: new FormControl("", [Validators.required]),
    invoiceNo: new FormControl("", [Validators.required]),
    materialDescription: new FormControl("", [
      Validators.required,
      Validators.minLength(3)
    ]),
    coilsBundle: new FormControl("", [
      Validators.required,
      CustomValidator.compondValueValidate
    ])
  });

  ngOnInit() {
    this.getAllCompany();
    this.getAllCustomer();
  }

  getAllCompany() {
    this.productService.getAllCompany().subscribe(data => {
      this.companyList = data;
    });
  }

  getAllCustomer() {
    let customerUrl = "/users/getAllUsersByUserRoleAndStatus/CUSTOMER/APPROVED";
    this.userService.getAllUserByUserRoleAndStatus(customerUrl).subscribe(
      data => {
        console.log("Data is: ", data);
        this.customerList = data;

        if (this.customerList && this.customerList.length > 0) {
          this.customerIdList = this.customerList.map(
            supplierObj => supplierObj.id
          );
        }
      },
      error => {
        console.log(error);
      }
    );
  }

    selectedCompany(value : number) {
    let data = this.companyList.filter(element=>{
      return element.id == value
    })
    this.selectedCmp = data[0];
    // this._cd.detectChanges();
  }

  submitInvoiceDetails() {
    if(this.invoiceDetails.valid) {
      this.invoiceDetailsData.emit(this.invoiceDetails.value);
    } else {
      this.toastr.error("Error! Invalid details.");
    }
  }

  get f() {
    return this.invoiceDetails.controls;
  }
}
