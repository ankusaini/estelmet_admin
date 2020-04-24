import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Company } from 'src/app/shared/Models/company.model.';
import { StaticDataService } from 'src/app/shared/services/data/static-data.service';
import { CustomValidator } from 'src/app/Validators/custom-validator';
import { CustomerOrder } from 'src/app/shared/Models/customer-order.model';

@Component({
  selector: 'app-select-details-create-lot',
  templateUrl: './select-details-create-lot.component.html',
  styleUrls: ['./select-details-create-lot.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class SelectDetailsCreateLotComponent implements OnInit {
  @Input() custumerOrderData: CustomerOrder;
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
    if(this.custumerOrderData) {
      this.selectDetailsForm.patchValue(this.custumerOrderData);
      console.log(this.selectDetailsForm);
    }
  }

  ngOnChanges() {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if(this.custumerOrderData) {
      this.selectDetailsForm.patchValue(this.custumerOrderData);
      console.log(this.selectDetailsForm);
    }
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
      sellerAddress: new FormControl('', [Validators.required, Validators.minLength(3)]),
      sellerPANNo: new FormControl('', [Validators.required]),
      sellerGSTNo: new FormControl('', [Validators.required]),
      sellerStateCode: new FormControl('', [Validators.required, CustomValidator.pinCodeValidation]),
      buyerCompanyName: new FormControl('', [Validators.required]),
      buyerAddress: new FormControl('', [Validators.required, Validators.minLength(3)]),
      buyerPANNo: new FormControl('', [Validators.required]),
      buyerGSTNo: new FormControl('', [Validators.required]),
      buyerStateCode: new FormControl('', [Validators.required, CustomValidator.pinCodeValidation])
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

  get f() {
    return this.selectDetailsForm.controls;
  }
}
