import { Component, OnInit } from '@angular/core';

import { SalesService } from 'src/app/shared/services/sales.service';



@Component({
  selector: 'app-search-view-so',
  templateUrl: './search-view-so.component.html',
  styleUrls: ['./search-view-so.component.css']
})
export class SearchViewSoComponent implements OnInit {

  public dataList: any;

  constructor(private salesService: SalesService) { }

  ngOnInit() {
    let url="/sales/getAllSalesByTypeAndStatus/SALES_OFFER_LOT/APPROVED";
    this.salesService.getAllSalesByTypeAndStatus(url).subscribe(data => {
      this.dataList= data;
      console.log("your Data is: "+ data);
      },
      error => { }
    );
    }

}
