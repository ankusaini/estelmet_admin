import { Component, OnInit } from '@angular/core';
import { FormInput } from './create-tl-form-model';

@Component({
  selector: 'app-upload-tradelead',
  templateUrl: './upload-tradelead.component.html',
  styleUrls: ['./upload-tradelead.component.css']
})
export class UploadTradeleadComponent implements OnInit {
  showGroup = true;
  public isSubmit: boolean;
  formInput: FormInput;
  constructor() {
    this.isSubmit = false;
   }
  ngOnInit() {
    this.formInput = {
      tlId: '',
    };
  }
  save(form: any) {
    if (!form.valid) {
      this.isSubmit = true;
      return;
    }
    
  }
}
