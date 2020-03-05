import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {
  ProductCategory,
  ProductShape,
  Product
} from "src/app/shared/Models/product.model.";
import { StaticDataService } from "src/app/shared/services/data/staticData.service";
import { Company } from "src/app/shared/Models/company.model.";
import { Purchase } from "src/app/shared/Models/purchase.model";
import { PurchaseService } from "src/app/modules/purchase/services/purchase.service";
import { UserService } from "src/app/shared/services/user.service";
import { InventoryService } from "src/app/modules/inventory/service/inventory.service";
import { RequestP } from "src/app/shared/Models/RequestResponse";
import { ToastrService } from "ngx-toastr";
import { Router } from '@angular/router';
@Component({
  selector: "app-create-lot",
  templateUrl: "./create-lot.component.html",
  styleUrls: ["./create-lot.component.scss"]
})
export class CreateLotComponent implements OnInit {
  public requestObj: RequestP = {};

  selectedLotType: any;
  public   productList: Product[];

  public purchaseList: Purchase[];
  public approvedProductList: Product[];
  //common data
  productCategoryList: ProductCategory[];
  productShapeList: ProductShape[];
  public companyList: Company[] = [];
  public userList: any;
  showGroup = true;
  public isSubmit: boolean;
  constructor(
    private _staticData: StaticDataService,
    private purchaseService: PurchaseService,
    private userService: UserService,
    private inventoryService: InventoryService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.isSubmit = false;
    this.basicSwal();
  }
  successSwal() {
    Swal.fire("Success!", "New Lot Created!", "success");
  }
  ngOnInit() {
  }

  

  save(form: any) {
    if (!form.valid) {
      this.isSubmit = true;
      return;
    }
    this.successSwal();
  }
  basicSwal() {
    Swal.fire({
      title: "Create LOT With",
      input: "select",
      inputOptions: {
        WITH_PC: "Purchase Confirmation",
        WITHOUT_PC: "Without Purchase Confirmation",
         JOB_WORK_SELF: "Job Work Self",
          MATERIAL_TRANSFER: "Material Transfer",
        JOB_WORK_OTHER: "Job Work Other"
      },
      inputPlaceholder: "Select LOT Type",
      allowOutsideClick: false,
      confirmButtonText: "Select",
      inputValidator(value) {
        // tslint:disable-next-line: only-arrow-functions
        return new Promise(function(resolve, reject) {
          if (value !== "") {
            resolve();
          } else {
            resolve("You need to select Product Type");
          }
        });
      }
    }).then(selectedType => {
      this.selectedLotType = selectedType.value;
     
    });
  }


 


  getPurchaseData(data:Purchase) {
    this.requestObj.purchase = data;
    this.requestObj.productList = [];
    let path = "/purchase/createPurchase";
   console.log("request",this.requestObj)
    this.purchaseService.saveRequestObject(path, this.requestObj).subscribe(
      data => {
        this.toastr.success("Record saved successfully");
        this.router.navigateByUrl("/purchase/lotApproval");
      },
      error => {
        console.log("error is", error);
      }
    );
  }

  getPurchaseDataRequest(data)
  {
    this.requestObj = data;
    console.log("data ius",data);
      let path = "/purchase/createMaterialTransfer";
   
    this.purchaseService.saveRequestObject(path, this.requestObj).subscribe(
      data => {
        this.toastr.success("Record saved successfully");
        this.router.navigateByUrl("/purchase/lotApproval");

      },
      error => {
        console.log("error is", error);
      }
    );
  }
}
