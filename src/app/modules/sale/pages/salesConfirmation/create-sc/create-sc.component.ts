import { Component, OnInit, ViewChild } from '@angular/core';
import { FormInput } from 'src/app/demo/sales/customer-order/customer-order-form-model';
import { WizardComponent } from 'ng2-archwizard/dist';


@Component({
  selector: 'app-create-sc',
  templateUrl: './create-sc.component.html',
  styleUrls: ['./create-sc.component.scss']
})
export class CreateScComponent implements OnInit {
  @ViewChild("wizard", {static: false}) wizard: WizardComponent;
  
  showGroup = true;
  public isSubmit: boolean;
  formInput: FormInput
  public maskIP = [/\d/, '.', /\d/, /\d/];
  constructor() {
    this.isSubmit = false;
   }
  ngOnInit() {
  }

  getProductData(sale) {
    console.log(sale);
    this.wizard.navigation.goToNextStep();
  }

}
