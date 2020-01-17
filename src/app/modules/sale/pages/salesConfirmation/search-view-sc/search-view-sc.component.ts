import { Component, OnInit } from '@angular/core';
import { Sales } from 'src/app/shared/Models/sales.model';
import { SalesServiceService } from '../../../services/sales-service.service';

@Component({
  selector: 'app-search-view-sc',
  templateUrl: './search-view-sc.component.html',
  styleUrls: ['./search-view-sc.component.scss']
})
export class SearchViewScComponent implements OnInit {
  public dataList: any;
  salesList: Sales[];

  constructor(private salesService: SalesServiceService) { }

  ngOnInit() {
    let url="/sales/getAllSalesByTypeAndStatus/SALES_CONFIRMATION/APPROVED";
    this.salesService.getAllSalesByTypeAndStatus(url).subscribe( data => {
      this.dataList = data;
      this.salesList= this.dataList.salesList;
      // console.log("your list is: "+ this.salesList);
    }, error =>{
      }
    );
  }

}
