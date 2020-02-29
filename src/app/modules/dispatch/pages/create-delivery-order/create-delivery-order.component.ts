import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from "@angular/core";
import { DispatchService } from "src/app/modules/dispatch/services/dispatch.service";
import { Sales, DeliveryOrder } from "src/app/shared/Models/sales.model";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { WizardComponent } from 'ng2-archwizard/dist';
import { ToastrService } from 'ngx-toastr';
import { RequestP } from 'src/app/shared/Models/RequestResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-delivery-order',
  templateUrl: './create-delivery-order.component.html',
  styleUrls: ['./create-delivery-order.component.css'],
  // changeDetection : ChangeDetectionStrategy.OnPush
})
export class CreateDeliveryOrderComponent implements OnInit {
  @ViewChild("wizard", {static: false}) wizard: WizardComponent; 
  // invoiceData: FormGroup;
  deliveryData: DeliveryOrder;
  request: RequestP = {};


  constructor(
          private dispatchService:DispatchService, 
          private toastr: ToastrService,
          private router: Router
          ) { }

  salesLotList:Sales[]=[];
  deliveryOrderList:DeliveryOrder[]=[];

  ngOnInit() {
    this.getAllSales('SALES_CONFIRMATION','APPROVED');
  }

   public deliverOrderForm = new FormGroup({ 
    
    salesId: new FormControl("",[Validators.required]),
    deliveryOrderId: new FormControl("", [Validators.required]),

  });

  getAllSales(type,status)
  {
    let salesUrl = "/sales/getAllSalesByTypeAndStatus/"+type+"/"+status;
    this.dispatchService.getAllSalesByTypeAndStatus(salesUrl).subscribe(
      data => {
        this.salesLotList = data.salesList;
        console.log(this.salesLotList);
       
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
            console.log(this.deliveryOrderList);
          }
      }
      else
        {
          this.deliveryOrderList=[];
        }
  }

  get f() {
    return this.deliverOrderForm.controls;
  }

  submitSelectScId() {
    if(this.deliverOrderForm.valid) {
      this.wizard.navigation.goToNextStep();
    } else {
      this.toastr.error("Error! Invalid Details.");
    }
  }

  getInvoiceData(data) {
    console.log(data);
    // this.invoiceData = data;
    this.deliveryData = data;
    // console.log(data.value);
    this.wizard.navigation.goToNextStep();
  }

  getTransportData(data) {
    console.log(data);
    // this.invoiceData.patchValue(data);
    // console.log(this.invoiceData);

    this.deliveryData.transportId = data.transportId;
    this.deliveryData.transportRecieptNo = data.transportRecieptNo;
    this.deliveryData.vehicleNo = data.lorryNumber;
    // this.deliveryData.containerNumber = data.containerNumber;
    this.deliveryData.grossWeight = data.grossWt;
    this.deliveryData.netWeight = data.netWt;
    this.deliveryData.driverName = data.driverName;
    this.deliveryData.dLicence = data.licenceNumber;

    this.request.deliveryOrder = this.deliveryData;
    this.request.productList = [];
    console.log(this.request);
    
    let url = "/sales/createDeliveryOrder";
    this.dispatchService.saveRequestObject(url, this.request).subscribe(
      data => {
        this.toastr.success("Record saved successfully!");
        this.router.navigateByUrl("/dispatch/doApproval");
      }, error => {
        console.log(error);
      }
    )
  }


}
