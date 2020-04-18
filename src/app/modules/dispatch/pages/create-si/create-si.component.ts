import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WizardComponent } from 'ng2-archwizard/dist';
import { ToastrService } from 'ngx-toastr';
import { DeliveryOrder, Sales } from 'src/app/shared/Models/sales.model';
import { DispatchService } from '../../services/dispatch.service';

@Component({
  selector: 'app-create-si',
  templateUrl: './create-si.component.html',
  styleUrls: ['./create-si.component.css']
})
export class CreateSiComponent implements OnInit {
  @ViewChild('wizard', { static: false }) wizard: WizardComponent;
  public salesList: Sales[];
  selectedSale: Sales = null;
  deliveryOrderList: DeliveryOrder[];
  SelectLsForm: FormGroup;
  selectedDoId: any;

  selectedInvoiceId:any;
  constructor(
    private dispatchService: DispatchService,
    private toastr: ToastrService,

  ) { }

  ngOnInit() {
    this.getSalesList();
    this.SelectLsForm = new FormGroup({
      deliveryOrderId: new FormControl('', [Validators.required])
    });
  }

  getSalesList() {
    const url = '/sales/getAllSalesByTypeAndStatus/SALES_CONFIRMATION/APPROVED';
    this.dispatchService.getAllSalesByTypeAndStatus(url).subscribe(
      data => {
        this.salesList = data.salesList;
      }, error => {
        console.log(error);
      }
    );
  }

  addSelectedId(data) {
    if (data) {
      this.selectedSale = data;
      this.selectedInvoiceId='SC-'+data.id;
    }
  }

  moveToSecondStep() {
    if (this.selectedSale) {
      const id = this.selectedSale.id;
      const data = this.salesList.filter(obj => {
        return obj.id == id;
      });
      if (data) {
        this.deliveryOrderList = data[0].deliveryOrder;
      }


      this.wizard.navigation.goToNextStep();
    } else {
      this.toastr.warning('Please Select  Sales Invoice Id');
    }
  }

  moveTothirdStep() {
    if (this.SelectLsForm.valid) {
      this.selectedDoId = this.SelectLsForm.value;
      this.wizard.navigation.goToNextStep();
    } else {
      this.toastr.error('Please select an Id!');
    }
  }

  get f() {
    return this.SelectLsForm.controls;
  }

}
