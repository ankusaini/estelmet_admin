import { Component, OnInit } from '@angular/core';
import { PurchaseService } from "src/app/modules/purchase/services/purchase.service";
import { ResponseP } from "src/app/shared/Models/RequestResponse";
import { Purchase } from "src/app/shared/Models/purchase.model";

@Component({
  selector: "app-view-mr",
  templateUrl: "./view-mr.component.html",
  styleUrls: ["./view-mr.component.scss"]
})
export class ViewMRComponent implements OnInit {
 public mrList: Purchase[]=[];
public selectedMrList: Purchase[]=[];
  constructor(private purchaseService: PurchaseService) {
    this.getAllPurchaseByTypeAndStatus("MATERIAL_REQURIMENT", "APPROVED");
  }

  ngOnInit() {}

  getAllPurchaseByTypeAndStatus(type, status) {
    let url = "/purchase/getAllPurchaseByTypeAndStatus/" + type + "/" + status;
    console.log("url",url)
    this.purchaseService.getAllPurchaseByTypeAndStatus(url).subscribe(
      data => {
        console.log("data",data)
        this.mrList = data.purchaseList;
        console.log("data",this.mrList)
      },
      error => {}
    );
  }

  addMrToList(mr)
  {
    const index: number = this.selectedMrList.indexOf(mr);
    if (index == -1) {
      this.selectedMrList.push(mr);
    } else {
      alert("already added");
    }
  }

  removeMr(mr) {
    const index: number = this.selectedMrList.indexOf(mr);
    if (index !== -1) {
      this.selectedMrList.splice(index, 1);
    }
  }
  
}