import { Component, OnInit, ViewChild } from '@angular/core';
import { FormInput } from 'src/app/demo/sales/customer-order/customer-order-form-model';
import { WizardComponent } from 'ng2-archwizard/dist';
import { Sales, SalesType } from 'src/app/shared/Models/sales.model';
import { Status } from 'src/app/shared/Models/user.model';
import { ToastrService } from 'ngx-toastr';
import { SalesServiceService } from '../../../services/sales-service.service';
import { RequestP } from 'src/app/shared/Models/RequestResponse';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/Models/product.model.';


@Component({
  selector: 'app-create-sc',
  templateUrl: './create-sc.component.html',
  styleUrls: ['./create-sc.component.scss']
})
export class CreateScComponent implements OnInit {
  @ViewChild("wizard", {static: false}) wizard: WizardComponent;
  
  showGroup = true;
  public isSubmit: boolean;
  formInput: FormInput;
  selectedId: any;
  selectedSaleData: Sales;
  public scId : any;
  public productList: Product[];
  public request: RequestP = {};

  // public maskIP = [/\d/, '.', /\d/, /\d/];
  constructor(
    private toastr: ToastrService,
    private salesService: SalesServiceService,
    private router: Router
  ) {
    this.isSubmit = false;
   }
  ngOnInit() {
  }

  getProductData(sale) {
    console.log(sale);
    this.selectedSaleData = sale;
    this.selectedId = sale.id;
    console.log(this.selectedId);
    let url = "/inventory/sales/" + this.selectedId;
    this.salesService.getAllProductByProductStageAndStatus(url).subscribe(
      data => {
        this.productList = data;
      }
    );
    this.wizard.navigation.goToNextStep();
  }

  getScId(id) {
    this.scId = id;
    console.log(this.scId);
    this.wizard.navigation.goToNextStep();
  }

  getTransportData(data) {
    console.log(data);
    this.selectedSaleData.customerId = data.customerId;
    this.selectedSaleData.transportId = data.transportId;
    this.selectedSaleData.expectedDate = data.expectedDate;
    this.selectedSaleData.netWt = data.netWt;
    this.selectedSaleData.grossWt = data.grossWt;
    this.selectedSaleData.coilsBundle = data.coilsBundle;
    this.selectedSaleData.materialDescription = data.materialDescription;
    this.selectedSaleData.lorryNumber = data.lorryNumber;
    this.selectedSaleData.lorryType = data.lorryType;
    this.selectedSaleData.status = Status.PENDING;
    this.selectedSaleData.type = SalesType.SALES_CONFIRMATION;
    // this.selectedSaleData.id = this.scId;
    console.log(this.selectedSaleData);

    this.request.sales = this.selectedSaleData;
    this.request.productList = this.productList;
    
    console.log(this.request);
    let url = "/sales/updateSalesWithProduct";
    this.salesService.updateRequestObject(url, this.request).subscribe(
      data => {
        this.toastr.success("Record saved successfully!");
        this.router.navigateByUrl("/sales/scApproval");
      }, error => {
        console.log(error);
      }
    );
    
    this.wizard.navigation.reset();
  }

}
