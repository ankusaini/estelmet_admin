import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
// import { FormInput } from 'src/app/demo/sales/customer-order/customer-order-form-model';


@Component({
  selector: 'app-enter-customer-details',
  templateUrl: './enter-customer-details.component.html',
  styleUrls: ['./enter-customer-details.component.scss']
})
export class EnterCustomerDetailsComponent implements OnInit {
  @Input() id : any;
  @Output() scId : EventEmitter<any> = new EventEmitter<any>();
  showGroup = true;
  public isSubmit: boolean;
  public generatedScId: string = '';
  scIdForm: FormGroup;
  // formInput: FormInput
  // public maskIP = [/\d/, '.', /\d/, /\d/];
  constructor(private toastr: ToastrService) {
    // this.isSubmit = false;
   }
  ngOnInit() {
    this.scIdForm = new FormGroup({
      title: new FormControl("")
    });

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

generateScId() {
  this.generatedScId = "SCL-" + this.id;
  console.log(this.generatedScId); 

}

submitScId() {
  if(this.generatedScId) {
    this.scId.emit(this.generatedScId);
  } else {
    this.toastr.error("Error! Please Generate SC Id.");
  }
}

}

