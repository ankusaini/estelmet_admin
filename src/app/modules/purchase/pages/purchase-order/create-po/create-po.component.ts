import { Component, OnInit } from '@angular/core';
import { RequestP } from "src/app/shared/Models/RequestResponse";
import { Purchase, PurchaseType } from "src/app/shared/Models/purchase.model";
import { Status } from "src/app/shared/Models/user.model";
import { PurchaseService } from "src/app/modules/purchase/services/purchase.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-po',
  templateUrl: './create-po.component.html',
  styleUrls: ['./create-po.component.scss']
})
export class CreatePoComponent implements OnInit {
public request : RequestP={};
  public selectedMr: Purchase;
  constructor(private purchaseService: PurchaseService,
              private router: Router,) { }

  ngOnInit() {
  }
  getSelectedMr(data) {
    this.selectedMr = data;
    this.selectedMr.status = Status.APPROVED; 
    this.selectedMr.type = PurchaseType.PURCHASE_ORDER
  }

   savePORecord() {
    this.request.purchase = this.selectedMr;
    console.log("request is: ", this.request.purchase);
    let path= "/purchase/updatePurchase";
    this.purchaseService.updateRequestObject(path, this.request).subscribe( data => {
      alert("saved")
      this.router.navigateByUrl("/purchase/pcApproval");  
    }, error => {
      console.log(error);
    });
    
  }
}
