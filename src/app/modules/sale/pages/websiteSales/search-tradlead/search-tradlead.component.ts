import { Component, OnInit } from '@angular/core';
import { Sales } from 'src/app/shared/Models/sales.model';
import { SalesServiceService } from '../../../services/sales-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-tradlead',
  templateUrl: './search-tradlead.component.html',
  styleUrls: ['./search-tradlead.component.scss']
})
export class SearchTradleadComponent implements OnInit {

  public dataList : any;
  public salesList: Sales[];
  public selectedSalesList: Sales[] =[];

  constructor(private salesService: SalesServiceService,
             private toastrService: ToastrService,
             private router: Router
             ) { }

  ngOnInit() {
    let url= "/sales/getAllSalesByTypeAndStatus/TRADE_LEAD_LOT/APPROVED"
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
      this.toastrService.warning("record already added!");
    }
  }

  removeFromSelectedList(sale: Sales) {
    const index: number = this.selectedSalesList.indexOf(sale);
    if (index !== -1) {
      this.selectedSalesList.splice(index, 1);
    }
  }

  routerToTeadeLeadEdit(id) {
    this.router.navigateByUrl("/sales/tlEdit/"+id);
  }

}
