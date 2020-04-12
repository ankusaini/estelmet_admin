import { Component, OnInit, ViewChild } from '@angular/core';
import { WizardComponent } from 'ng2-archwizard/dist';
import { SalesServiceService } from '../../../services/sales-service.service';
import { Product } from 'src/app/shared/Models/product.model.';
import { RequestP } from 'src/app/shared/Models/RequestResponse';
import { Sales } from 'src/app/shared/Models/sales.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
// import { FormInput } from 'src/app/demo/sales/direct-sales/create-so/create-so-form-model';


@Component({
  selector: 'app-create-so',
  templateUrl: './create-so.component.html',
  styleUrls: ['./create-so.component.scss']
})
export class CreateSoComponent implements OnInit {
  @ViewChild("wizard", {static: false}) wizard: WizardComponent;

  showGroup = true;
  public isSubmit: boolean;
  public productList: Product[];
  // public selectedList: Product[];
  public request: RequestP = {};
  public soData: Sales;
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
    this.getProductList();
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

  getProductList() {
    let url = "/inventory/getAllProductByProductStageAndStatus/ACTIVE/APPROVED";
    this.salesService.getAllProductByProductStageAndStatus(url).subscribe(
      data => {
        this.productList = data;
      }, error => {
        console.log(error);
      }
    );
  }

  
  // save(form: any) {
  //   if (!form.valid) {
  //     this.isSubmit = true;
  //     return;
  //   }
  //   this.showGroup = false;
  // }

  getCreateSoId(data: any) {
    this.soData = data;
    // console.log("Your Data is: "+ data.warehouseName);
    // console.log("Your Data is: "+ data.productCategory);
    // console.log("Your Data is: "+ data.productShape);
    this.wizard.navigation.goToNextStep();
  }

  getSelectedList(data) {
    // this.selectedList = data;

    this.request.productList = data;
    this.request.sales = this.soData;

    let url = "/sales/createSales";
    this.salesService.saveRequestObject(url, this.request).subscribe(
      data => {
        let salesId=data.sales.id;
        this.toastr.success("Record saved successfully");
        this.router.navigateByUrl("/sales/soEdit/"+salesId);
      }, error => {
        console.log(error);
      }
    );
  }

}
