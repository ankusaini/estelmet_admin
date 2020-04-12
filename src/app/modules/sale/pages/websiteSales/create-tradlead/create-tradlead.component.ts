import { Component, OnInit, ViewChild } from '@angular/core';
import { WizardComponent } from 'ng2-archwizard/dist';
import { RequestP } from 'src/app/shared/Models/RequestResponse';
import { Sales } from 'src/app/shared/Models/sales.model';
import { Product } from 'src/app/shared/Models/product.model.';
import { SalesServiceService } from '../../../services/sales-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-tradlead',
  templateUrl: './create-tradlead.component.html',
  styleUrls: ['./create-tradlead.component.scss']
})
export class CreateTradleadComponent implements OnInit {

  @ViewChild("wizard", {static: false}) wizard: WizardComponent
  showGroup = true;
  public isSubmit: boolean;
  public request: RequestP= {};
  public tlData: Sales;
  public productList: Product[];
  // public isSubmit2: boolean;
  // formInput: FormInput;
  // public maskIP = [/\d/, '.', /\d/, /\d/];


  constructor(private salesService: SalesServiceService,
            private toastr: ToastrService,
            private router: Router
          ) {
    this.isSubmit = false;
    // this.isSubmit2 = false;
  }


  ngOnInit() {
    // this.formInput = {
    //   email: '',
    //   password: '',
    //   confirmPassword: '',
    //   requiredInput: '',
    //   url: '',
    //   phone: '',
    //   type: '',
    //   category: '',
    //   shape: '',
    //   class: '',
    //   thickMin: '',
    //   thickMax: '',
    //   companyName: '',
    //   warehouse: '',
    //   address: '',
    //   file: '',
    //   switcher: '',
    //   soId: ''
    // };
  }
  // save(form: any) {
  //   if (!form.valid) {
  //     this.isSubmit = true;
  //     return;
  //   }
  //   this.showGroup = false;
  // }

  getCreateSoId(data: any) {
    console.log(data);
    this.tlData = data;
    this.wizard.navigation.goToNextStep();
  }

  getSelectProductData(data: any) {
    console.log(data);
    this.productList = data;
    this.wizard.navigation.goToNextStep();
  }

  getOtherDetailsData(data: any) {
    console.log(data);
    this.tlData.grossQuantity = data.grossQuantity;
    this.tlData.location = data.location;
    this.tlData.thicknessRange = data.thicknessMin + "-" + data.thicknessMax;
    this.tlData.widthRange = data.widthMin + "-" + data.widthMax;

    this.request.sales = this.tlData;
    this.request.productList = this.productList;
    console.log(this.request);

    let url = "/sales/createSales";
    this.salesService.saveRequestObject(url, this.request).subscribe(
      data => {
        let salesId=data.sales.id;
        this.toastr.success("Record saved successfully");
        this.router.navigateByUrl("/sales/tlEdit/"+salesId);
      }, error => {
        console.log(error);
      }
    )
  }

}
