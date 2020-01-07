import { Component, OnInit } from '@angular/core';
import { FormInput } from './create-lot-mt-form-model';

@Component({
  selector: 'app-create-lot-mt-self',
  templateUrl: './create-lot-mt-self.component.html',
  styleUrls: ['./create-lot-mt-self.component.css']
})
export class CreateLotMtSelfComponent implements OnInit {
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
