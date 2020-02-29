import { Component, OnInit, ViewChild } from '@angular/core';
import { DispatchService } from '../../services/dispatch.service';
import { ToastrService } from 'ngx-toastr';
import { Sales, DeliveryOrder } from 'src/app/shared/Models/sales.model';
import { WizardComponent } from 'ng2-archwizard/dist';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-si',
  templateUrl: './create-si.component.html',
  styleUrls: ['./create-si.component.css']
})
export class CreateSiComponent implements OnInit {
  @ViewChild("wizard", {static : false}) wizard: WizardComponent;
  public salesList: Sales[];
  selectedSale: Sales = null;
  deliveryOrderList: DeliveryOrder[];
  SelectLsForm: FormGroup;
  selectedDoId: any;

  constructor(
    private dispatchService: DispatchService,
    private toastr: ToastrService,

  ) { }

  ngOnInit() {
    this.getSalesList();
    this.SelectLsForm = new FormGroup({
      deliveryOrderId: new FormControl("", [Validators.required])
    })
  }

  getSalesList() {
    let url = "/sales/getAllSalesByTypeAndStatus/SALES_CONFIRMATION/APPROVED";
    this.dispatchService.getAllSalesByTypeAndStatus(url).subscribe(
      data => {
        this.salesList = data.salesList;
      }, error => {
        console.log(error);
      }
    );
  }

  addSelectedId(data) {
    console.log(data);
    if(data) {
      this.selectedSale = data;
    }
  }

  moveToSecondStep() {
    if(this.selectedSale) {
      let id = this.selectedSale.id;
     let data=   this.salesList.filter(obj=>{
          return obj.id==id;
        });
        if(data)
          {
            this.deliveryOrderList=data[0].deliveryOrder;
            console.log(this.deliveryOrderList);
          }
      
      
      this.wizard.navigation.goToNextStep();
    } else {
      this.toastr.warning("select Id");
    }
  }

  moveTothirdStep() {
    if(this.SelectLsForm.valid) {
      this.selectedDoId = this.SelectLsForm.value;
      console.log(this.selectedDoId);
      this.wizard.navigation.goToNextStep();
    } else {
      this.toastr.error("Please select an Id!");
    }
  }

  get f() {
    return this.SelectLsForm.controls;  
  }

}
