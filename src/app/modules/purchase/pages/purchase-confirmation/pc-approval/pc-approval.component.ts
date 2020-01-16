import { Component, OnInit } from '@angular/core';
import { Purchase } from "src/app/shared/Models/purchase.model";

@Component({
  selector: 'app-pc-approval',
  templateUrl: './pc-approval.component.html',
  styleUrls: ['./pc-approval.component.css']
})
export class PcApprovalComponent implements OnInit {
  selectedTab: string = "PENDING";
  
  public selectedPuchaseList: Purchase[] = [];
  constructor() { }

  ngOnInit() {
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
    //Emptying basket on tab change
    this.selectedPuchaseList=[];
  }
 
  getPurchaseData(data)
  {
    this.selectedPuchaseList=data;
  }


    removeSelectedPurchase(purchase:Purchase) {
    const index: number = this.selectedPuchaseList.indexOf(purchase);
    if (index !== -1) {
      this.selectedPuchaseList.splice(index, 1);
    }
  }
}
