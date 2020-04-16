import { Component, OnInit } from '@angular/core';
import { Purchase, PurchaseType } from 'src/app/shared/Models/purchase.model';
import { PurchaseService } from '../../../services/purchase.service';
import { ToastrService } from "ngx-toastr";
import { RequestP } from "src/app/shared/Models/RequestResponse";
import { ids } from 'src/app/shared/Models/ids.model';
import { Status } from 'src/app/shared/Models/user.model';

@Component({
  selector: 'app-lot-approval',
  templateUrl: './lot-approval.component.html',
  styleUrls: ['./lot-approval.component.scss']
})
export class LotApprovalComponent implements OnInit {
  selectedTab: string = "PENDING";
  public Ids: any;
  pendingData: any;
  approvedData: any;
  rejectedData: any;
  public pendingList : Purchase[];
  public approvedList : Purchase[];
  public rejectedList : Purchase[];
public request : RequestP={};
  public selectedLotList : Purchase[]=[];

  constructor(private purchaseService: PurchaseService,private toastr:ToastrService) { 
    this.Ids = ids;
  }

  ngOnInit() {
   

   this.getAllPurchaseByTypeAndStatus(PurchaseType.LOT, Status.PENDING);
    this.getAllPurchaseByTypeAndStatus(PurchaseType.LOT, Status.APPROVED);
    this.getAllPurchaseByTypeAndStatus(PurchaseType.LOT, Status.REJECTED);

    
  }

  getAllPurchaseByTypeAndStatus(type ,status)
  {
if(status=='REJECETED')
  {
// let rejectedUrl="/purchase/getAllPurchaseByTypeAndStatus/LOT/REJECTED";
    this.purchaseService.getAllPurchaseByTypeAndStatus(PurchaseType.LOT, Status.REJECTED)
    .subscribe( data => {
      this.rejectedData = data;
        this.rejectedList = this.rejectedData.purchaseList;
    }, 
    error => {
      console.log(error);
    });

  }

if(status=='PENDING')
  {
//  let pendingUrl="/purchase/getAllPurchaseByTypeAndStatus/LOT/PENDING";
    this.purchaseService.getAllPurchaseByTypeAndStatus(PurchaseType.LOT, Status.PENDING)
    .subscribe( data => {
      this.pendingData = data;
        this.pendingList = this.pendingData.purchaseList;
        console.log("Your Data is "+this.pendingList);
    }, 
    error => {
      console.log(error);
    });
  }

  if(status=='APPROVED')
    {

  // let approvedUrl="/purchase/getAllPurchaseByTypeAndStatus/LOT/APPROVED";
    this.purchaseService.getAllPurchaseByTypeAndStatus(PurchaseType.LOT, Status.APPROVED).subscribe( data => {
      this.approvedData = data;
        this.approvedList = this.approvedData.purchaseList;
        console.log("Your Data is "+this.approvedList);
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
  }


   addMrToList(mr:Purchase)
  {
     const index: number = this.selectedLotList.indexOf(mr);
    if (index == -1) {
      this.selectedLotList.push(mr);
    } else {
      this.toastr.error("Already added");
     
    }
  }

    removeSelectedUserd(mr:Purchase) {
    const index: number = this.selectedLotList.indexOf(mr);
    if (index !== -1) {
      this.selectedLotList.splice(index, 1);
    }
  }



   changeStatusOfSelectedMR(status) {
    if (this.selectedLotList.length == 0) {
     this.toastr.warning("Please select atleast one record");
    } else {
      // let path = "/purchase/updatePurchase";

      for (let i = 0; i < this.selectedLotList.length; i++) {
        this.selectedLotList[i].status = status;
         this.request.purchase=this.selectedLotList[i];
        this.purchaseService.updatePurchase(this.request).subscribe(
          data => {
           this.rejectedList=undefined;
              this.pendingList=undefined;
              this.approvedList=undefined;
      this.getAllPurchaseByTypeAndStatus("LOT", "PENDING");
    this.getAllPurchaseByTypeAndStatus("LOT", "APPROVED");
    this.getAllPurchaseByTypeAndStatus("LOT", "REJECTED");
    this.selectedLotList = [];
          },
          error => {}
        );
      }
      this.toastr.success("Selected Lot(s) status changes successfully")
    }
  }

}
