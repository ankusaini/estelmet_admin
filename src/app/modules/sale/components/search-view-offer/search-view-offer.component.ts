import { Component, OnInit, Output, EventEmitter,ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';
import { SalesServiceService } from '../../services/sales-service.service';
import { Sales } from 'src/app/shared/Models/sales.model';
import { ids } from 'src/app/shared/Models/ids.model';
import { ToastrService } from 'ngx-toastr';
import { CustomerOrder } from 'src/app/shared/Models/customer-order.model';

@Component({
  selector: 'app-search-view-offer',
  templateUrl: './search-view-offer.component.html',
  styleUrls: ['./search-view-offer.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class SearchViewOfferComponent implements OnInit, OnChanges {

  @Output() outputSelectedId: EventEmitter<any> = new EventEmitter<any>();
  public salesList: Sales[];
  public Ids: any;
  public selectedId: any;
  @Input() custumerOrderData: CustomerOrder;

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

    if(this.custumerOrderData) {
      this.selectedId = this.custumerOrderData.salesId;
    }
  }

  ngOnChanges() {
    if(this.custumerOrderData) {
      this.selectedId = this.custumerOrderData.salesId;
    }
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
