import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-invoice',
  templateUrl: './generate-invoice.component.html',
  styleUrls: ['./generate-invoice.component.css']
})
export class GenerateInvoiceComponent implements OnInit {
  showGroup = true;
  public isSubmit: boolean;
  formInput = {
    customerId: '',
    companyId: '',
    lotType: '',
    warId: '',
    category: '',
    shape: '',
    netwt: '',
    grosswt: ''
};
  public maskIP = [/\d/, '.', /\d/, /\d/];
  constructor() {
    this.isSubmit = false;
   }
  ngOnInit() {
    this.formInput = {
      customerId: '',
      companyId: '',
      lotType: '',
      warId: '',
      category: '',
      shape: '',
      grosswt: '',
      netwt: '',
    };
  }
  save(form: any) {
    if (!form.valid) {
      this.isSubmit = true;
      return;
    }
    alert('success');
  }
}
