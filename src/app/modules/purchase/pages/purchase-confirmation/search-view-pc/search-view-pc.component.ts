import { Component, OnInit } from '@angular/core';
import { Purchase } from 'src/app/shared/Models/purchase.model';
import { PurchaseService } from '../../../services/purchase.service';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import { ids } from 'src/app/shared/Models/ids.model';

@Component({
  selector: 'app-search-view-pc',
  templateUrl: './search-view-pc.component.html',
  styleUrls: ['./search-view-pc.component.css']
})
export class SearchViewPcComponent implements OnInit {
  public purchaseData: any;
  public purchaseList: Purchase[];
  public selectedPurchaseList: Purchase[]=[];
  public Ids: any;
  constructor(private purchaseService: PurchaseService,
              private router: Router,private toastrService:ToastrService ) { 
                this.Ids = ids;
              }

  ngOnInit() {
    let url = "/purchase/getAllPurchaseByTypeAndStatus/PURCHASE_CONFIRMATION/APPROVED";
    this.purchaseService.getAllPurchaseByTypeAndStatus(url).subscribe( data =>{
      console.log("Your Data is: " + data);
      this.purchaseData = data;
      this.purchaseList = this.purchaseData.purchaseList;
      },
      error => {}
    );

  }

    addPurchaseToList(purchase)
  {
    const index: number = this.selectedPurchaseList.indexOf(purchase);
    if (index == -1) {
      this.selectedPurchaseList.push(purchase);
    } else {
      this.toastrService.warning(" record already added");
    }
  }

  removePurchase(purchase) {
    const index: number = this.selectedPurchaseList.indexOf(purchase);
    if (index !== -1) {
      this.selectedPurchaseList.splice(index, 1);
    }
  }

  routerToPcEdit(id) {
    this.router.navigateByUrl("/purchase/pcEdit/"+id);
  }
}
