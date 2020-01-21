import { Component, OnInit } from '@angular/core';
import { Purchase, PurchaseType } from "src/app/shared/Models/purchase.model";
import { PurchaseService } from "src/app/modules/purchase/services/purchase.service";
import { Product } from "src/app/shared/Models/product.model.";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Status } from 'src/app/shared/Models/user.model';

@Component({
  selector: "app-create-pc",
  templateUrl: "./create-pc.component.html",
  styleUrls: ["./create-pc.component.scss"]
})
export class CreatePcComponent implements OnInit {
  showData: boolean;
  public productList: Product[] = [];

  constructor(private purchaseService: PurchaseService) {}
  public selectedMr: Purchase;
  
 
  ngOnInit() {}

  //update the status and type of selectedMr//
  //fetch the formcontrol from purchase details(thorugh event binding)
  //set the details in selcetdMr and call the api
  // there might be some problem in import module , take// 
   
  getSelectedMr(data) {
    this.selectedMr = data;
    console.log("MR SELECTEd", this.selectedMr);
    this.getProductList(this.selectedMr.id);
    this.selectedMr.status = Status.PENDING; 
    this.selectedMr.type = PurchaseType.PURCHASE_CONFIRMATION;  
    console.log("after changes: ", this.selectedMr);  
  }

  getProductList(id) {
    // let url = "/purchase/find/" + id;
    // this.purchaseService.findRequstObjectById(url).subscribe(
    //   data => {
    //     this.productList = data.productList;
    //             console.log("product of this mr",this.productList)

    //     this.showData = true;
    //   },
    //   error => {
    //     console.log("error");
    //   }
    // );
  }

  getTransportData(data) {
    console.log("in create transportData is: ", data);
    console.log("previous mr",this.selectedMr)
   // this.selectedMr=data;
    Object.keys(data).forEach((key) => {
      console.log("key is",key);
   this.selectedMr[key] = data[key]
 })

    console.log("now lastest data is",this.selectedMr);
  }


}
