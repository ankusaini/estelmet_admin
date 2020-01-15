import { Component, OnInit, Input } from '@angular/core';
import { Purchase } from '../../Models/purchase.model';
import { PurchaseService } from 'src/app/modules/purchase/services/purchase.service';

@Component({
  selector: 'app-purchasr-list-full-details',
  templateUrl: './purchasr-list-full-details.component.html',
  styleUrls: ['./purchasr-list-full-details.component.scss']
})
export class PurchasrListFullDetailsComponent implements OnInit {
  @Input('tabSelected') selectedTab: string;

  purchaseData: any;
  purchaseList: Purchase[];

  constructor(private purchaseService: PurchaseService) { }

  ngOnInit() {
    console.log("in purchaseList " +this.selectedTab);
    let url="/purchase/getAllPurchaseByTypeAndStatus/PURCHASE_CONFIRMATION/"+this.selectedTab;
    this.purchaseService.getAllPurchaseByTypeAndStatus(url).subscribe( data => {
      this.purchaseData=data;
      this.purchaseList= this.purchaseData.purchaseList;
      console.log("purchaseList " + this.purchaseList);
    });
  }

}
