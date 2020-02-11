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
    
   }

  ngOnInit() {

    this.getAllProcessingByTypeAndStatus("PENDING");
    this.getAllProcessingByTypeAndStatus("APPROVED");
    this.getAllProcessingByTypeAndStatus("REJECTED");



  }
    
  getAllProcessingByTypeAndStatus(status) {
        if (status == "PENDING") {
          let pendingUrl ="/inventory/productProcessing/getAllProductProcessingByStatus/PENDING";
          this.processingService.getAllProductProcessingByStatus(pendingUrl)
          .subscribe( data => {
            this.pendingProductList = data;
            console.log(this.pendingProductList);
          }, 
          error => {
            console.log(error);
          });
        }
        if (status == "APPROVED") {
          let approvedUrl ="/inventory/productProcessing/getAllProductProcessingByStatus/APPROVED";
          this.processingService.getAllProductProcessingByStatus(approvedUrl)
          .subscribe(data => {
            this.approvedProductList = data;
            console.log(this.approvedProductList);
          }, 
          error => {
            console.log(error);
          });
              }
        if (status == "REJECTED") {
          let rejectedUrl ="/inventory/productProcessing/getAllProductProcessingByStatus/REJECTED";
          this.processingService.getAllProductProcessingByStatus(rejectedUrl)
          .subscribe(data => {
            this.rejectedProductList = data;
            console.log(this.rejectedProductList);
          }, 
          error => {
            console.log(error);
          });
        }
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
    console.log("selected tab", this.selectedTab);
    // this.selectedProductList = [];

  }
}
