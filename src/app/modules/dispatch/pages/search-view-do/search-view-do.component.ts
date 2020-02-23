import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from "angular-datatables";
import { Observable } from "rxjs/internal/Observable";
import { Subject } from "rxjs";
import { Sales, DeliveryOrder } from "src/app/shared/Models/sales.model";
import { DispatchService } from "src/app/modules/dispatch/services/dispatch.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-search-view-do',
  templateUrl: './search-view-do.component.html',
  styleUrls: ['./search-view-do.component.css']
})
export class SearchViewDoComponent implements OnInit {

  public datalist :any;
  public deliveryOrderlist :DeliveryOrder[]=[];
  public selectdeliveryOrder :DeliveryOrder[]=[];
  
  dtExportButtonOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dtRouterLinkOptions: any = {};

  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  public limit = 5;
  public offset = 0;

  constructor(
    private dispatchService: DispatchService,
    private router : Router,private toastr:ToastrService
  ) {}

  ngOnInit() {

    this.getinformation();
  }

getinformation(){
  let url =
          "/sales/getAllDeliveryOrderByStatus/APPROVED";

          this.dispatchService.getAllDeliveryOrderByStatus(url).subscribe(
            data => {
              this.datalist =data;
              this.deliveryOrderlist= this.datalist.deliveryOrderList;

            },
            error => {}
          );

}

addDeliveryOrder(id) {
  const index: number = this.selectdeliveryOrder.indexOf(id);
if(index ==-1)
{
  this.selectdeliveryOrder.push(id);
}else{
  this.toastr.warning("Record already added");
}
}

removedeliveryOrder(id) {
  const index: number = this.selectdeliveryOrder.indexOf(id);
  if(index!==-1)
  {
  this.selectdeliveryOrder.splice(index, 1);
  }
}

}
