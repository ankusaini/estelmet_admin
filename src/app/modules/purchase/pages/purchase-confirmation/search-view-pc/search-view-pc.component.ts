import { Component, OnInit } from '@angular/core';
import { PurchaseService } from 'src/app/shared/services/purchase.service';
import { Purchase } from 'src/app/shared/Models/purchase.model';

@Component({
  selector: 'app-search-view-pc',
  templateUrl: './search-view-pc.component.html',
  styleUrls: ['./search-view-pc.component.css']
})
export class SearchViewPcComponent implements OnInit {
  public purchaseData: any;
  public purchaseList: Purchase[];
  

  constructor(private purchaseService: PurchaseService) { }

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

}
