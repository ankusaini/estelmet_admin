import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Company } from 'src/app/shared/Models/company.model.';
import { StaticDataService } from 'src/app/shared/services/data/static-data.service';

@Component({
  selector: 'app-select-details-create-lot',
  templateUrl: './select-details-create-lot.component.html',
  styleUrls: ['./select-details-create-lot.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class SelectDetailsCreateLotComponent implements OnInit {

  public selectDetailsForm : FormGroup;
  @Output() selectedDetailsId : EventEmitter<any> = new EventEmitter<any>();
  public companyList: Company[] = [];

  constructor(private toastr: ToastrService,
    private staticData: StaticDataService
    ) {
   }

  ngOnInit() {
    this.createForm();
    this.getAllCompany();
  }

  getAllCompany() {
    this.staticData.getAllCompany().subscribe(data => {
      console.log("company data"+data)
      this.companyList = data;
    });
  }

  createForm() {
    this.selectDetailsForm = new FormGroup({
      sellerCompanyName: new FormControl('', [Validators.required]),
      sellerAddress: new FormControl('', [Validators.required]),
      sellerPANNo: new FormControl('', [Validators.required]),
      sellerGSTNo: new FormControl('', [Validators.required]),
      sellerStateCode: new FormControl('', [Validators.required]),
      buyerCompanyName: new FormControl('', [Validators.required]),
      buyerAddress: new FormControl('', [Validators.required]),
      buyerPANNo: new FormControl('', [Validators.required]),
      buyerGSTNo: new FormControl('', [Validators.required]),
      buyerStateCode: new FormControl('', [Validators.required])
    });
  }

  submitForm() {
    if(this.selectDetailsForm.valid) {
      console.log(this.selectDetailsForm.value);
      this.selectedDetailsId.emit(this.selectDetailsForm.value);
    } else {
      this.toastr.error("Invalid details!");
    }
  }
}
