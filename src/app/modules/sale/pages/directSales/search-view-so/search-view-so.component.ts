import { Component, OnInit } from '@angular/core';
import { Sales } from 'src/app/shared/Models/sales.model';
import { SalesServiceService } from '../../../services/sales-service.service';

@Component({
  selector: 'app-search-view-so',
  templateUrl: './search-view-so.component.html',
  styleUrls: ['./search-view-so.component.scss']
})
export class SearchViewSoComponent implements OnInit {

  public dataList: any;
  salesList: Sales[];

  constructor(private salesService: SalesServiceService) { }

  ngOnInit() {
    let url="/sales/getAllSalesByTypeAndStatus/SALES_OFFER_LOT/APPROVED";
    this.salesService.getAllSalesByTypeAndStatus(url).subscribe(data => {
      this.dataList= data;
      this.salesList= this.dataList.salesList;
      console.log("your Data is: "+ data);
      },
      error => { }
    );
  }

}
