import { Component, OnInit } from '@angular/core';
import { Purchase } from 'src/app/shared/Models/purchase.model';
import { PurchaseService } from '../../../services/purchase.service';

@Component({
  selector: 'app-lot-approval',
  templateUrl: './lot-approval.component.html',
  styleUrls: ['./lot-approval.component.scss']
})
export class LotApprovalComponent implements OnInit {
  selectedTab: string = "PENDING";
  pendingData: any;
  approvedData: any;
  rejectedData: any;
  public pendingList : Purchase[];
  public approvedList : Purchase[];
  public rejectedList : Purchase[];

  constructor(private purchaseService: PurchaseService) { }

  ngOnInit() {
    let pendingUrl="/purchase/getAllPurchaseByTypeAndStatus/LOT/PENDING";
    this.purchaseService.getAllPurchaseByTypeAndStatus(pendingUrl)
    .subscribe( data => {
      this.pendingData = data;
        this.pendingList = this.pendingData.purchaseList;
        console.log("Your Data is "+this.pendingList);
    }, 
    error => {
      console.log(error);
    });

    let approvedUrl="/purchase/getAllPurchaseByTypeAndStatus/LOT/APPROVED";
    this.purchaseService.getAllPurchaseByTypeAndStatus(approvedUrl).subscribe( data => {
      this.approvedData = data;
        this.approvedList = this.approvedData.purchaseList;
        console.log("Your Data is "+this.approvedList);
      }, 
    error => {
      console.log(error);
    });

    let rejectedUrl="/purchase/getAllPurchaseByTypeAndStatus/LOT/REJECTED";
    this.purchaseService.getAllPurchaseByTypeAndStatus(rejectedUrl).subscribe( data => {
      this.rejectedData = data;
        this.rejectedList = this.rejectedData.purchaseList;
        console.log("Your Data is "+this.rejectedList);
    }, 
    error => {
      console.log(error);
    });

  }

  onTabChange(tab) {
    // alert("tab "+ tab.activeId);
    if (tab && tab.activeId == "rejectedTab") {
      this.selectedTab = "PENDING";
    }
    if (tab && tab.activeId == "pendingTab") {
      this.selectedTab = "APPROVED";
    }
    if (tab && tab.activeId == "approvedTab") {
      this.selectedTab = "REJECTED";
    }
    console.log("selected tab", this.selectedTab);
  }

}
