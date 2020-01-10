import { Component, OnInit } from '@angular/core';
import { SalesService } from 'src/app/shared/services/sales.service';
import { Sales } from 'src/app/shared/Models/sales.model';


@Component({
  selector: 'app-sc-approval',
  templateUrl: './sc-approval.component.html',
  styleUrls: ['./sc-approval.component.scss']
})
export class ScApprovalComponent implements OnInit {

  selectedTab: string = "PENDING";
  pendingData: any;
  approvedData: any;
  rejectedData: any;
  public pendingList : Sales[];
  public approvedList : Sales[];
  public rejectedList : Sales[];

  constructor(private salesService: SalesService) { }

  ngOnInit() {
    let pendingUrl = "/sales/getAllSalesByTypeAndStatus/SALES_CONFIRMATION/PENDING";
    this.salesService.getAllSalesByTypeAndStatus(pendingUrl).subscribe(
      data => {
        this.pendingData = data;
        this.pendingList = this.pendingData.salesList;
        // console.log("Your Data is "+this.pendingList);
      },
      error => {
        console.log(error);
      }
    );

    let approvedUrl = "/sales/getAllSalesByTypeAndStatus/SALES_CONFIRMATION/APPROVED";
    this.salesService.getAllSalesByTypeAndStatus(approvedUrl).subscribe(
      data => {
        this.approvedData = data;
        this.approvedList = this.approvedData.salesList;
        // console.log("Your Data is "+this.approvedList);
      },
      error => {
        console.log(error);
      }
    );

    let rejectedUrl = "/sales/getAllSalesByTypeAndStatus/SALES_CONFIRMATION/REJECTED";
    this.salesService.getAllSalesByTypeAndStatus(rejectedUrl).subscribe(
      data => {
        this.rejectedData = data;
        this.rejectedList = this.rejectedData.salesList;
        // console.log("Your Data is "+this.rejectedList);
      },
      error => {
        console.log(error);
      }
    );

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
