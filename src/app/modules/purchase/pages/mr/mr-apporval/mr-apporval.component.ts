import { Component, OnInit } from '@angular/core';
import { PurchaseService } from "src/app/modules/purchase/services/purchase.service";
import { Purchase } from "src/app/shared/Models/purchase.model";

@Component({
  selector: "app-mr-apporval",
  templateUrl: "./mr-apporval.component.html",
  styleUrls: ["./mr-apporval.component.scss"]
})
export class MrApporvalComponent implements OnInit {
  selectedTab: string='PENDING';

  constructor(private purchaseService: PurchaseService) {}

  public pendingMrList: Purchase[] = [];

  public rejectedMrList: Purchase[] = [];

  public approvedMrList: Purchase[] = [];

  public selectedMrList: Purchase[] = [];

  ngOnInit() {
    this.getAllPurchaseByTypeAndStatus("MATERIAL_REQURIMENT", "PENDING");
    this.getAllPurchaseByTypeAndStatus("MATERIAL_REQURIMENT", "APPROVED");
    this.getAllPurchaseByTypeAndStatus("MATERIAL_REQURIMENT", "REJECTED");
  }

  getAllPurchaseByTypeAndStatus(type, status) {
    let url = "/purchase/getAllPurchaseByTypeAndStatus/" + type + "/" + status;
    console.log("url", url);
    this.purchaseService.getAllPurchaseByTypeAndStatus(url).subscribe(
      data => {
        if (status == "PENDING") {
          this.pendingMrList = data.purchaseList;
        }
        if (status == "APPROVED") {
          this.approvedMrList = data.purchaseList;
        }
        if (status == "REJECTED") {
          this.rejectedMrList = data.purchaseList;
        }
        console.log("pendingMrList", this.pendingMrList);
        console.log("approvedMrList", this.approvedMrList);
        console.log("rejectedMrList", this.rejectedMrList);
      },
      error => {}
    );
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
    this.selectedMrList = [];
  }

  addMrToList(mr:Purchase)
  {
     const index: number = this.selectedMrList.indexOf(mr);
    if (index == -1) {
      this.selectedMrList.push(mr);
    } else {
      alert("already added");
    }
  }

    removeSelectedUserd(mr:Purchase) {
    const index: number = this.selectedMrList.indexOf(mr);
    if (index !== -1) {
      this.selectedMrList.splice(index, 1);
    }
  }

}
