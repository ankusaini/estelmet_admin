import { Component, OnInit } from '@angular/core';
import { ProcessingService } from '../../service/processing.service';

@Component({
  selector: 'app-processing-approval',
  templateUrl: './processing-approval.component.html',
  styleUrls: ['./processing-approval.component.css']
})
export class ProcessingApprovalComponent implements OnInit {
  selectedTab: string='PENDING';
  public pendingProductList: any[];
  public approvedProductList: any[];
  public rejectedProductList: any[];
  // public selectedProductList: any[] = [];

  constructor(private processingService: ProcessingService) {
    let pendingUrl ="/inventory/productProcessing/getAllProductProcessingByStatus/PENDING";
    this.processingService.getAllProductProcessingByStatus(pendingUrl).subscribe( data => {
      this.pendingProductList = data;
      console.log(this.pendingProductList);
    });

    let approvedUrl ="/inventory/productProcessing/getAllProductProcessingByStatus/APPROVED";
    this.processingService.getAllProductProcessingByStatus(approvedUrl).subscribe(data => {
      this.approvedProductList = data;
      console.log(this.approvedProductList);
    });

    let rejectedUrl ="/inventory/productProcessing/getAllProductProcessingByStatus/REJECTED";
    this.processingService.getAllProductProcessingByStatus(rejectedUrl).subscribe(data => {
      this.rejectedProductList = data;
      console.log(this.rejectedProductList);
    });
   }

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
    // this.selectedProductList = [];

  }
}
