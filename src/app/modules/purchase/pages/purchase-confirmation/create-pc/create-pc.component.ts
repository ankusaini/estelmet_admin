import { Component, OnInit, ViewChild } from '@angular/core';
import { Purchase, PurchaseType } from "src/app/shared/Models/purchase.model";
import { PurchaseService } from "src/app/modules/purchase/services/purchase.service";
import { Product } from "src/app/shared/Models/product.model.";
// import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Status } from 'src/app/shared/Models/user.model';
import { RequestP } from 'src/app/shared/Models/RequestResponse';
import { WizardComponent } from 'ng2-archwizard/dist';
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router';

@Component({
  selector: "app-create-pc",
  templateUrl: "./create-pc.component.html",
  styleUrls: ["./create-pc.component.scss"]
})
export class CreatePcComponent implements OnInit {
@ViewChild("wizard", {static: true}) wizard: WizardComponent;

public component='pc';
  showData: boolean;
  public requestObj : RequestP={};
  public productList: Product[];
  public selectedMr: Purchase;
  public selectedMrId:any;
  public generatedPcId:any;

  constructor(private purchaseService: PurchaseService,
              private router: Router,
              private toastr: ToastrService
              ) {}
 
  
 
  ngOnInit() {}

  //update the status and type of selectedMr//
  //fetch the formcontrol from purchase details(thorugh event binding)
  //set the details in selcetdMr and call the api
  // there might be some problem in import module , take// 
   
  getSelectedMr(data) {
    this.selectedMr = data;;
    this.getProductList(this.selectedMr.id);
    this.selectedMrId='MR-'+this.selectedMr.id;
    this.selectedMr.status = Status.PENDING; 
    this.selectedMr.type = PurchaseType.PURCHASE_CONFIRMATION; 
    this.wizard.navigation.goToNextStep();

  }

  getProductList(id) {
    
    let url = "/purchase/find/" + id;
    this.purchaseService.findRequstObjectById(url).subscribe(
      data => {
        this.productList = data.productList;
        this.showData = true;
      },
      error => {
        console.log("error");
      }
    );
  }

  submitGeneratedPcId() {
    if(this.generatedPcId) {
      this.wizard.navigation.goToNextStep();
    } else {
      this.toastr.warning("Please generate PC Id!");
    }
  }

  generatePcId()
  {
      this.generatedPcId='PC-'+this.selectedMr.id
  }

  getTransportData(data) {
    console.log(data);
  //   Object.keys(data).forEach((key) => {
  //    if(key!='expectedDate')
  //     {
  //       this.selectedMr[key] = data[key];
  //       this.savePcRecord();
  //     }
  // })
  this.savePcRecord();
  }

  savePcRecord() {
    this.requestObj.purchase = this.selectedMr;
    console.log("request is: ", this.requestObj.purchase);
    let path= "/purchase/updatePurchaseHistory";
    this.purchaseService.updateRequestObject(path, this.requestObj).subscribe( data => {
      // alert("saved")
      this.toastr.success("Record saved successfully")
      this.router.navigateByUrl("/purchase/pcApproval");  
    }, error => {
      console.log(error);
    });
    
  }


}
