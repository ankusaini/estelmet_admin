import { Component, OnInit } from '@angular/core';
import { Grn } from 'src/app/shared/Models/purchase.model';
import { PurchaseService } from '../../../services/purchase.service';

@Component({
  selector: 'app-search-view-grn',
  templateUrl: './search-view-grn.component.html',
  styleUrls: ['./search-view-grn.component.scss']
})
export class SearchViewGrnComponent implements OnInit {
  grnData: any;
  grnList: Grn[];

  constructor(private purchaseService: PurchaseService) { }

  ngOnInit() {
    let url = "/purchase/getAllGrn";
    this.purchaseService.getAllPurchaseByTypeAndStatus(url).subscribe(data => {
      this.grnData = data;
      this.grnList = this.grnData.grnList;
      console.log("list is: "+ this.grnList);
    },
    error => {}
    );
  }

}
