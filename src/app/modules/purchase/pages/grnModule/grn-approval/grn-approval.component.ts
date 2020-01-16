import { Component, OnInit } from '@angular/core';
import { Grn } from 'src/app/shared/Models/purchase.model';
import { PurchaseService } from '../../../services/purchase.service';

@Component({
  selector: 'app-grn-approval',
  templateUrl: './grn-approval.component.html',
  styleUrls: ['./grn-approval.component.scss']
})
export class GrnApprovalComponent implements OnInit {
  selectedTab: string = "PENDING";
  pendingData: any;
  approvedData: any;
  rejectedData: any;
  public pendingList : Grn[];
  public approvedList : Grn[];
  public rejectedList : Grn[];

  constructor(private purchaseService: PurchaseService) { }

  ngOnInit() {
    let pendingUrl="/purchase/getAllGrnByStatus/PENDING";
    this.purchaseService.getAllGrnByStatus(pendingUrl)
    .subscribe( data => {
      this.pendingData = data;
        this.pendingList = this.pendingData.grnList;
        console.log("Your Data is "+this.pendingList);
    }, 
    error => {
      console.log(error);
    });

    let approvedUrl="/purchase/getAllGrnByStatus/APPROVED";
    this.purchaseService.getAllGrnByStatus(approvedUrl).subscribe( data => {
      this.approvedData = data;
        this.approvedList = this.approvedData.grnList;
        console.log("Your Data is "+this.approvedList);
      }, 
    error => {
      console.log(error);
    });

    let rejectedUrl="/purchase/getAllGrnByStatus/REJECTED";
    this.purchaseService.getAllGrnByStatus(rejectedUrl).subscribe( data => {
      this.rejectedData = data;
        this.rejectedList = this.rejectedData.grnList;
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
