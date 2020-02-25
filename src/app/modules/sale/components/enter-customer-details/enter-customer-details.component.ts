import { Component, OnInit } from '@angular/core';
// import { FormInput } from 'src/app/demo/sales/customer-order/customer-order-form-model';


@Component({
  selector: 'app-enter-customer-details',
  templateUrl: './enter-customer-details.component.html',
  styleUrls: ['./enter-customer-details.component.scss']
})
export class EnterCustomerDetailsComponent implements OnInit {
  showGroup = true;
  public isSubmit: boolean;
  // formInput: FormInput
  // public maskIP = [/\d/, '.', /\d/, /\d/];
  constructor() {
    // this.isSubmit = false;
   }
  ngOnInit() {
    

  // this.formInput = {
  //   customerId: '',
  //   companyId: '',
  //   lotType: '',
  //   warId: '',
  //   category: '',
  //   shape: '',
  //   grosswt: '',
  //   netwt: '',
  // };
}
// save(form: any) {
//   if (!form.valid) {
//     this.isSubmit = true;
//     return;
//   }
//   alert('success');
// }

// getCompanyList() {
//   let url = "";
// }

}

