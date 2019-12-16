import { Component, OnInit } from '@angular/core';
import { FormInput } from './create-lot-form.model';

@Component({
  selector: 'app-create-lot-without-pc',
  templateUrl: './create-lot-without-pc.component.html',
  styleUrls: ['./create-lot-without-pc.component.css']
})
export class CreateLotWithoutPcComponent implements OnInit {
  showGroup = true;
  public isSubmit: boolean;
  formInput: FormInput;
  public maskIP = [/\d/, '.', /\d/, /\d/];
  constructor() {
    this.isSubmit = false; 
   }
  ngOnInit() {
    this.formInput = {
      supplierId: '',
      companyId: '',
      lotType: '',
      warId: '',
      category: '',
      shape: '',
      grosswt: '',
      netWt: '',
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
