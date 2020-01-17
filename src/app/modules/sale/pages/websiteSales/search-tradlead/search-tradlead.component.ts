import { Component, OnInit } from '@angular/core';
import { Sales } from 'src/app/shared/Models/sales.model';
import { SalesServiceService } from '../../../services/sales-service.service';


@Component({
  selector: 'app-search-tradlead',
  templateUrl: './search-tradlead.component.html',
  styleUrls: ['./search-tradlead.component.scss']
})
export class SearchTradleadComponent implements OnInit {

  public dataList : any;
  public salesList: Sales[];

  constructor(private salesService: SalesServiceService) { }

  ngOnInit() {
    let url= "/sales/getAllSalesByTypeAndStatus/TRADE_LEAD_LOT/APPROVED"
    this.salesService.getAllSalesByTypeAndStatus(url)
      .subscribe(data => {
        this.dataList = data;
        this.salesList= this.dataList.salesList;
        console.log("Your data is: "+ data);
      },
      error => {}
    );
  }

}
