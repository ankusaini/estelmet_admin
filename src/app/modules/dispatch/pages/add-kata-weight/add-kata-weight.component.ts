import { Component, OnInit } from '@angular/core';
import { DispatchService } from "src/app/modules/dispatch/services/dispatch.service";
import { ToastrService } from "ngx-toastr";
import { Sales } from "src/app/shared/Models/sales.model";

@Component({
  selector: 'app-add-kata-weight',
  templateUrl: './add-kata-weight.component.html',
  styleUrls: ['./add-kata-weight.component.css']
})
export class AddKataWeightComponent implements OnInit {
 public datalist :any;
    selectedTab: string='PENDING';

  public approvedDeliveryOrderlist: Sales[] = [];
  constructor( private dispatchService: DispatchService,
   
    private toastr: ToastrService) { }

  ngOnInit() {
     this.getDOByStatus("APPROVED");
  }

  getDOByStatus(status) {
    let url = "/sales/getAllDeliveryOrderByStatus/" + status;
    this.dispatchService.getAllDeliveryOrderByStatus(url).subscribe(
      data => {
        this.datalist=data;  
          this.approvedDeliveryOrderlist = this.datalist.deliveryOrderList;
      },
      error => {}
    );
  }

}
