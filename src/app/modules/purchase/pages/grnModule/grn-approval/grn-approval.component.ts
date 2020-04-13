import { Component, OnInit } from '@angular/core';
import { Grn } from 'src/app/shared/Models/purchase.model';
import { PurchaseService } from '../../../services/purchase.service';
import { ToastrService } from "ngx-toastr";
import { RequestP } from 'src/app/shared/Models/RequestResponse';
import { ids } from 'src/app/shared/Models/ids.model';
import { Status } from 'src/app/shared/Models/user.model';


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
  public Ids: any;
  public pendingList : Grn[];
  public approvedList : Grn[];
  public rejectedList : Grn[];
  public request: RequestP = {};
  public selectedGrnList: Grn[]= [];

  constructor(private purchaseService: PurchaseService,
              private toastr:ToastrService) {
                this.Ids =ids;
               }

  ngOnInit() {
   this.getAllGrnByStatus("PENDING");
   this.getAllGrnByStatus("APPROVED");
   this.getAllGrnByStatus("REJECETED");
    // this.selectedGrnList=[];
  }

  getAllGrnByStatus(status) {
    if(status=='PENDING') {
      // let pendingUrl="/purchase/getAllGrnByStatus/PENDING";
      this.purchaseService.getAllGrnByStatus(Status.PENDING)
      .subscribe( data => {
        this.pendingData = data;
          this.pendingList = this.pendingData.grnList;
          console.log("Your Data is "+this.pendingList);
      }, 
      error => {
        console.log(error);
      });
    }
    if(status=='APPROVED') {
      // let approvedUrl="/purchase/getAllGrnByStatus/APPROVED";
      this.purchaseService.getAllGrnByStatus(Status.APPROVED).subscribe( data => {
        this.approvedData = data;
          this.approvedList = this.approvedData.grnList;
          console.log("Your Data is "+this.approvedList);
        }, 
      error => {
        console.log(error);
      });
    }
    if(status=='REJECETED') {
      // let rejectedUrl="/purchase/getAllGrnByStatus/REJECTED";
      this.purchaseService.getAllGrnByStatus(Status.REJECTED).subscribe( data => {
        this.rejectedData = data;
          this.rejectedList = this.rejectedData.grnList;
          console.log("Your Data is "+this.rejectedList);
      }, 
      error => {
        console.log(error);
      });
    }

  }

  onTabChange(tab) {
    // alert("tab "+ tab.activeId);
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
    this.selectedGrnList=[];

  }

  addToSelectedList(grn: Grn) {
    console.log(grn);
    const index: number = this.selectedGrnList.indexOf(grn);
    if (index == -1) {
      this.selectedGrnList.push(grn);
      console.log(this.selectedGrnList);
    } else {
      this.toastr.error("Already added");
    }
    
  }

  removeFromSelectedList(grn: Grn) {
    console.log(grn);
    const index: number = this.selectedGrnList.indexOf(grn);
    if (index !== -1) {
      this.selectedGrnList.splice(index, 1);
    }
  }

  changeStatusOfSelectedGrn(status) {
    if(this.selectedGrnList.length ==0) {
      this.toastr.warning("Please select atleast one record");
    } 
    else {
      // incomplete url and request body

      //  let path = "/purchase/updateGrn";
   
        for (let i = 0; i < this.selectedGrnList.length; i++) {
        this.selectedGrnList[i].status = status;
         this.request.grn=this.selectedGrnList[i];
        this.purchaseService.createGrn(this.request).subscribe(
          data => {
           this.getAllGrnByStatus("PENDING");
             this.getAllGrnByStatus("APPROVED");
             this.getAllGrnByStatus("REJECETED");
    this.selectedGrnList = [];
          },
          error => {}
        );
      }
      this.toastr.success("Selected Grn(s) status changes successfully");

    }
  }

}
