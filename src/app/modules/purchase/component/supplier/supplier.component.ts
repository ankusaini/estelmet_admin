import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { StaticDataService } from '../../../../shared/services/data/staticData.service';
import { Warehouse } from '../../../../shared/Models/warehouse';
import { Company } from '../../../../shared/Models/company.model.';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SupplierComponent implements OnInit, OnChanges {

  public grnForm: FormGroup;

  @Input() suppliarList: any[];
  @Input() allCompany: Company[];
  @Input() process: string = '';
  @Output() supplierData: EventEmitter<any> = new EventEmitter<any>();
  allWarehouse: Warehouse[];
  selected_comapny: Company;


  constructor(
    private _fb: FormBuilder,
    private _cd: ChangeDetectorRef,
    private toastr: ToastrService,
    private staticDataService: StaticDataService
  ) {
    // this.grnForm.statusChanges.subscribe(data=>{
    //   // console.log(data);
    //   if(data == 'VALID'){
    //     this.supplierData.emit(this.grnForm.value);
    //   } else {
    //     this.supplierData.emit({})
    //   }
    //   // console.log(this.grnForm.value);
    // })
  }

  ngOnInit() {
    this.createForm();
  }

  ngAfterContentInit(): void {
    // Called after ngOnInit when the component's or directive's content has been initialized.
    // Add 'implements AfterContentInit' to the class.
    console.log(this.process);
    this.dynamicControls();
  }


  dynamicControls() {
    if (this.process == 'purchaseInvoice' || this.process == 'withoutPurchaseInvoice') {

      this.grnForm.addControl('invoiceNo', new FormControl('', [Validators.required]));
      // this.grnForm.addControl('invoiceDate', new FormControl('', [Validators.required]));
      // this.grnForm.addControl('invoiceGrossWeight', new FormControl(''));
      // this.grnForm.addControl('invoiceNetWeight', new FormControl(''));

    } else if (this.process == 'jobWorkChalan') {

      this.grnForm.addControl('jobChalan', new FormControl('', [Validators.required]));
      this.grnForm.addControl('dateJobChalan', new FormControl('', [Validators.required]));
      this.grnForm.addControl('locationjobChalan', new FormControl('', [Validators.required]));

    } else if (this.process == 'materialTransfer') {

      this.grnForm.addControl('transferChalanNumber', new FormControl('', [Validators.required])),
        this.grnForm.addControl('transferChalanDate', new FormControl('', [Validators.required]))

    } else {

    }
  }

  ngOnChanges() {
    console.log(this.process);
    this.createForm();
    this.dynamicControls();
  }

  createForm() {
    this.grnForm = this._fb.group({
      materialTransferId: new FormControl(''),
      materialDescription: new FormControl('', [Validators.minLength(2)]),
      materialNetWeightslip: new FormControl(''),
      containerNumber: new FormControl(''),
      grossWeight: new FormControl(''),
      netWeight: new FormControl(''),
      coilsBundles: new FormControl(''),
      weighingSlipNo: new FormControl(''),
      sourceCompanyId: new FormControl(''),
      sourceWarehouseId: new FormControl(''),
      destinationCompanyId: new FormControl(''),
      destinationWarehouseId: new FormControl(''),
      supplierId: new FormControl('', [Validators.required]),
    });
  }


  selectedCompany(value: number) {
    const data = this.allCompany.filter(element => {
      return element.id == value;
    });
    this.selected_comapny = data[0];
    this.allWarehouse = this.staticDataService.getAllWarehouseByCompanyId(this.selected_comapny.id);
    this._cd.detectChanges();
  }

  submitSupplier() {
    console.log(this.grnForm);
    if (this.grnForm.valid) {
      this.supplierData.emit(this.grnForm.value);

    } else {
      this.toastr.error('Error! Invalid details.');
    }

  }
}
