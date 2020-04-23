import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SalesServiceService } from '../../services/sales-service.service';
import { Sales } from 'src/app/shared/Models/sales.model';
import { ids } from 'src/app/shared/Models/ids.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search-view-offer',
  templateUrl: './search-view-offer.component.html',
  styleUrls: ['./search-view-offer.component.scss']
})
export class SearchViewOfferComponent implements OnInit {

  @Output() outputSelectedId: EventEmitter<any> = new EventEmitter<any>();
  public salesList: Sales[];
  public Ids: any;
  public selectedId: any;

  constructor(private salesService: SalesServiceService, private toastr: ToastrService) {
    this.Ids = ids;
   }

  ngOnInit() {
    this.salesService.getAllSalesByTypeAndStatusCheck('SALES_OFFER_LOT','APPROVED').subscribe(data => {
      // this.dataList= data;
      this.salesList= data.salesList;
      console.log("your Data is: ", data);
      },
      error => { 
        console.log(error);
      }
    );
  }

  getSelectedId(sale) {
    this.selectedId = sale.id
  }

  submitId() {
    if(this.selectedId) {
      this.outputSelectedId.emit(this.selectedId);
    } else {
      this.toastr.error("Please Select Data!");
    }
  }

}
