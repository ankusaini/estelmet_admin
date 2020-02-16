import { Component, OnInit } from '@angular/core';
import { ProcessingService } from '../../service/processing.service';
import { ToastrService } from "ngx-toastr";

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

  public selectedProductList: any[] = [];

  constructor(private processingService: ProcessingService,private toastr:ToastrService) {
    
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

    addProductToList(mr)
  {
     const index: number = this.selectedProductList.indexOf(mr);
    if (index == -1) {
      this.selectedProductList.push(mr);
    } else {
      this.toastr.error("Already added");
     
    }
  }

    removeSelectedProduct(mr) {
    const index: number = this.selectedProductList.indexOf(mr);
    if (index !== -1) {
      this.selectedProductList.splice(index, 1);
    }
  }


   changeStatusOfSelectedProcessing(status) {
    if (this.selectedProductList.length == 0) {
      this.toastr.warning("Select at least one record");
    } else {
      let path = "/inventory/productProcessing/updateProcessing";

      for (let i = 0; i < this.selectedProductList.length; i++) {
        this.selectedProductList[i].status = status;
        this.processingService.updateProcessing(path,this.selectedProductList[i]).subscribe(
          data => {
           
          this.selectedProductList = [];
          this.getAllProcessingByTypeAndStatus("PENDING");
    this.getAllProcessingByTypeAndStatus("APPROVED");
    this.getAllProcessingByTypeAndStatus("REJECTED");
          },
          error => {}
       );
      }
      
      this.toastr.success("Record successfully saved");
    }
  }
}
