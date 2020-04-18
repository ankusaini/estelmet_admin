import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WizardComponent } from 'ng2-archwizard/dist';
import { ToastrService } from 'ngx-toastr';
import { DispatchService } from 'src/app/modules/dispatch/services/dispatch.service';
import { RequestP } from 'src/app/shared/Models/RequestResponse';
import { DeliveryOrder, Sales } from 'src/app/shared/Models/sales.model';

@Component({
  selector: 'app-create-delivery-order',
  templateUrl: './create-delivery-order.component.html',
  styleUrls: ['./create-delivery-order.component.css'],
  // changeDetection : ChangeDetectionStrategy.OnPush
})
export class CreateDeliveryOrderComponent implements OnInit {
  @ViewChild('wizard', { static: false }) wizard: WizardComponent;
  // invoiceData: FormGroup;
  deliveryData: DeliveryOrder;
  request: RequestP = {};


  constructor(
    private dispatchService: DispatchService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  salesLotList: Sales[] = [];
  deliveryOrderList: DeliveryOrder[] = [];
  public deliverOrderForm = new FormGroup({
    salesId: new FormControl('', [Validators.required]),
    deliveryOrderId: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    this.getAllSales('SALES_CONFIRMATION', 'APPROVED');
  }


  getAllSales(type, status) {
    const salesUrl = '/sales/getAllSalesByTypeAndStatus/' + type + '/' + status;
    this.dispatchService.getAllSalesByTypeAndStatus(salesUrl).subscribe(
      data => {
        this.salesLotList = data.salesList;
      },
      error => {
        console.log(error);
      }
    );
  }
  getLoadingId(id) {
    if (id !== '') {
      const data = this.salesLotList.filter(obj => {
        return obj.id == id;
      });
      if (data) {
        this.deliveryOrderList = data[0].deliveryOrder;
      }
    } else {
      this.deliveryOrderList = [];
    }
  }

  get f() {
    return this.deliverOrderForm.controls;
  }

  submitSelectScId() {
    if (this.deliverOrderForm.valid) {
      this.wizard.navigation.goToNextStep();
    } else {
      this.toastr.error('Error! Invalid Details.');
    }
  }

  getInvoiceData(data) {
    this.deliveryData = data;
    this.wizard.navigation.goToNextStep();
  }

  getTransportData(data) {

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

    const url = '/sales/createDeliveryOrder';
    this.dispatchService.saveRequestObject(url, this.request).subscribe(
      () => {
        this.toastr.success('Record saved successfully!');
        this.router.navigateByUrl('/dispatch/doApproval');
      }, error => {
        console.log(error);
      }
    );
  }


}
