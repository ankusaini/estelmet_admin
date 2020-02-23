import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { DispatchService } from "src/app/modules/dispatch/services/dispatch.service";
import { Sales, DeliveryOrder } from "src/app/shared/Models/sales.model";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-create-delivery-order',
  templateUrl: './create-delivery-order.component.html',
  styleUrls: ['./create-delivery-order.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class CreateDeliveryOrderComponent implements OnInit {

  constructor(private dispatchService:DispatchService) { }

  salesLotList:Sales[]=[];
  deliveryOrderList:DeliveryOrder[]=[];

  ngOnInit() {
    this.getAllSales('SALES_CONFIRMATION','APPROVED');
  }

   public deliverOrderForm = new FormGroup({ 
    
    salesId: new FormControl("",[Validators.required]),
        deliveryOrderId: new FormControl("" ),

  });

  getAllSales(type,status)
  {
    let salesUrl = "/sales/getAllSalesByTypeAndStatus/"+type+"/"+status;
    this.dispatchService.getAllSalesByTypeAndStatus(salesUrl).subscribe(
      data => {
        this.salesLotList = data.salesList;

       
      },
      error => {
        console.log(error);
      }
    );
  }
  getLoadingId(id)
  {
    if(id!='')
      {
     let data=   this.salesLotList.filter(obj=>{
          return obj.id==id;
        });
        if(data)
          {
            this.deliveryOrderList=data[0].deliveryOrder;
          }
      }
      else
        {
          this.deliveryOrderList=[];
        }
  }
}
