import { Component, OnInit } from '@angular/core';
import { FormInput } from 'src/app/demo/users/create-group/create-group-form.model';
import { ApiService } from 'src/app/shared/services/api.service';
@Component({
  selector: 'app-grn-purchase-invoice',
  templateUrl: './grn-purchase-invoice.component.html',
  styleUrls: ['./grn-purchase-invoice.component.css']
})
export class GrnPurchaseInvoiceComponent implements OnInit {
  showGroup = true;
  public isSubmit2: boolean;
  formInput: FormInput;
  public maskIP = [/\d/, '.', /\d/, /\d/];
  constructor(
    private _apiService : ApiService,
  ) {
    // this.isSubmit2 = false;
    // this.basicSwal();
  }
  ngOnInit() {
  }
  save(form: any) {
    if (!form.valid) {
      this.isSubmit2 = true;
      return;
    }
    this.showGroup = false;
  }




}
