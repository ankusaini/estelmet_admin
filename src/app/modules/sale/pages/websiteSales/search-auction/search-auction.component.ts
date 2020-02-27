import { Component, OnInit } from '@angular/core';
import { SalesServiceService } from '../../../services/sales-service.service';
import { Sales } from 'src/app/shared/Models/sales.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search-auction',
  templateUrl: './search-auction.component.html',
  styleUrls: ['./search-auction.component.scss']
})
export class SearchAuctionComponent implements OnInit {

  public dataList : any;
  public salesList: Sales[];
  public selectedSalesList: Sales[] =[];
  
  constructor(
    private salesService: SalesServiceService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    let url= "/sales/getAllSalesByTypeAndStatus/AUCTION_LOT/APPROVED"
    this.salesService.getAllSalesByTypeAndStatus(url)
      .subscribe(data => {
        this.dataList = data;
        this.salesList= this.dataList.salesList;
        console.log("Your data is: "+ data);
      },
      error => {
        console.log(error);
      }
    );
  }

  addToSelectedList(sale: Sales) {
    const index: number = this.selectedSalesList.indexOf(sale);
    if (index == -1) {
      this.selectedSalesList.push(sale);
    } else {
      this.toastr.warning("record already added!");
    }
  }

  removeFromSelectedList(sale: Sales) {
    const index: number = this.selectedSalesList.indexOf(sale);
    if (index !== -1) {
      this.selectedSalesList.splice(index, 1);
    }
  }


}
