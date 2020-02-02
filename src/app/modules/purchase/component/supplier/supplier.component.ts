import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class SupplierComponent implements OnInit {

  @Input() suppliarList : any[];
  @Input() allCompany : any[];
  @Input() process : string = '';
  @Output() supplierData: EventEmitter<any> = new EventEmitter<any>();

  selected_comapny : any;


  constructor(
    private _fb : FormBuilder,
    private _cd : ChangeDetectorRef
  ) { 
    this.grnForm.statusChanges.subscribe(data=>{
      // console.log(data);
      if(data == 'VALID'){
        this.supplierData.emit(this.grnForm.value);
      } else {
        this.supplierData.emit({})
      }
      // console.log(this.grnForm.value);
    })
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log(this.process)
    if(this.process == 'purchaseInvoice' || this.process == 'withoutPurchaseInvoice') {

      this.grnForm.addControl('invoiceNo',new FormControl('',[Validators.required]));
      this.grnForm.addControl('invoiceDate',new FormControl('',[Validators.required]));
      this.grnForm.addControl('invoiceGrossWeight',new FormControl('',[Validators.required]));
      this.grnForm.addControl('invoiceNetWeight',new FormControl('',[Validators.required]));

    } else if(this.process == 'jobWorkChalan') {
      
      this.grnForm.addControl('jobChalan', new FormControl('',[Validators.required]));
      this.grnForm.addControl('dateJobChalan', new FormControl('',[Validators.required]));
      this.grnForm.addControl('locationjobChalan', new FormControl('',[Validators.required]));

    } else if(this.process == 'materialTransfer') {

      this.grnForm.addControl('transferChalanNumber', new FormControl('',[Validators.required])),
      this.grnForm.addControl('transferChalanDate', new FormControl('',[Validators.required]))

    } else {

    }
  }

  public grnForm = this._fb.group({
    materialTransferId: new FormControl(''),
    materialDescription: new FormControl(''),
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
    supplierId: new FormControl(''),
  });

  selectedCompany(value : number) {
    
    let data = this.allCompany.filter(element=>{
      return element.id == value
    })
    this.selected_comapny = data[0];
    console.log(this.selected_comapny);
    this._cd.detectChanges();
  }
}
