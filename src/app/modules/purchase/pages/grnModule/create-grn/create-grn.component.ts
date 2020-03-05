import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { User } from 'src/app/shared/Models/user.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { purchaseConstants } from '../../../purchaseConst';
import { RequestP } from 'src/app/shared/Models/RequestResponse';
import { ToastrService } from 'ngx-toastr';
import { WizardComponent } from 'ng2-archwizard/dist';
import { LotType } from 'src/app/shared/Models/purchase.model';

@Component({
  selector: 'app-create-grn',
  templateUrl: './create-grn.component.html',
  styleUrls: ['./create-grn.component.scss']
})
export class CreateGrnComponent implements OnInit {
  @ViewChild("wizard", {static: false}) wizard : WizardComponent; 
  lotIdForm: FormGroup;

  lot_details : any;
  transporterList : User[] = [];
  suppliarList : User[] = [];
  allCompany : any[];
  selected_comapny : any;
  selectedRole: LotType;

  dataToSend : RequestP = {
    purchase : null,
    grn : null,
    sales: null,
    deliveryOrder : null,
    invoice : null,
    productList : null,
  }

  public selecteValue : any = '';

  constructor(
    private _apiService : ApiService,
    private _fb : FormBuilder,
    private toastr: ToastrService
  ) {
    this.basicSwal();
   }

  ngOnInit() {
    this.lotIdForm = new FormGroup({
      lotId: new FormControl('', [Validators.required])
    });
  }

  basicSwal() {
    Swal.fire({
      title: 'Create GRN With',
      input: 'select',
      inputOptions: {
        purchaseInvoice: 'Purchase Invoice',
        withoutPurchaseInvoice: 'Without Purchase Invoice',
        jobWorkChalan: 'Job Work Chalan',
        materialTransfer: 'MT 7 self Job Work',
      },
      inputPlaceholder: 'Select GRN Type',
      allowOutsideClick: false,
      confirmButtonText: 'Select',
      inputValidator: value=> {
        // tslint:disable-next-line: only-arrow-functions
        return new Promise(function(resolve, reject) {
          if (value !== '') {
            resolve();
          } else {
            resolve('You need to select Product Type');
          }
        });
      }
    }).then(val => {
      this.selecteValue = val.value;
      this.getSelectedRole(this.selecteValue);
      console.log(val);
      this.getAllPendingLot();
      this.getAllSuppliar();
      this.getAllTransporter();
      this.getAllCompany();
    });
  }

  getSelectedRole(role) {
    if(role === 'withoutPurchaseInvoice') {
      this.selectedRole = LotType.WITHOUT_PC;
    } else if(role === 'purchaseInvoice') {
      this.selectedRole = LotType.WITH_PC;
    } else if( role === 'jobWorkChalan') {
      this.selectedRole = LotType.JOB_WORK_OTHER;
    } else {
      this.selectedRole = LotType.JOB_WORK_SELF;
    }
  }


  getAllPendingLot() {
    this._apiService.get(purchaseConstants.pendingLot_url).subscribe(res => {
      if(res) {
        console.log(res);
        this.lot_details = res;
      }
    })
  }

  getAllSuppliar(){
    this._apiService.get(purchaseConstants.suppliar_url).subscribe(res => {
      if(res) {
        console.log(res);
        this.suppliarList = res;
      }
    })
  }

  getAllTransporter(){
    this._apiService.get(purchaseConstants.transporter_url).subscribe(res => {
      if(res) {
        console.log(res);
        this.transporterList = res;
      }
    })
  }

  getAllCompany(){
    this._apiService.get(purchaseConstants.allCompany).subscribe(res=>{
      if(res){
        this.allCompany = res;
      }
    })
  }

  selectedCompany(value : number) {
    let data = this.allCompany.filter(element=>{
      return element.id == value
    })
    this.selected_comapny = data[0];
    console.log(this.selected_comapny);
  }

  public grnForm = this._fb.group({
    grnId: new FormControl(''),
    status: new FormControl('PENDING'),
    grnType: new FormControl(),
    transferChalanDate: new FormControl(''),
    purchaseId: new FormControl(''),
    materialTransferId: new FormControl(''),
    name: new FormControl(''),
    invoiceNo: new FormControl(''),
    invoiceDate: new FormControl(''),
    materialDescription: new FormControl(''),
    invoiceGrossWeight: new FormControl(''),
    coilsBundles: new FormControl(''),
    invoiceNetWeight: new FormControl(''),
    transportRecieptNo: new FormControl(''),
    containerNumber: new FormControl(''),
    grossWeight: new FormControl(''),
    driverName: new FormControl(''),
    vehicleNo: new FormControl(''),
    vehicleType: new FormControl(''),
    netWeight: new FormControl(''),
    dMobile: new FormControl(''),
    dLicence: new FormControl(''),
    createdBy: new FormControl(''),
    createdDate: new FormControl(''),
    lastModifiedBy: new FormControl(''),
    lastModifiedDate: new FormControl(''),
    weighingSlipNo: new FormControl(''),
    vehicleLoadedWeight: new FormControl(''),
    materialNetWeightslip: new FormControl(''),
    location: new FormControl(''),
    vehicleTareWeight: new FormControl(''),
    jobChalan: new FormControl(''),
    dateJobChalan: new FormControl(''),
    locationjobChalan: new FormControl(''),
    sourceCompanyId: new FormControl(''),
    sourceWarehouseId: new FormControl(''),
    destinationCompanyId: new FormControl(''),
    destinationWarehouseId: new FormControl(''),
    supplierId: new FormControl(''),
    transportId: new FormControl(''),
    weighingCompanyId: new FormControl(''),
    transferChalanNumber: new FormControl('')
  });

  
  submitLotId() {
    if(this.lotIdForm.valid) {
      // alert(this.lotIdForm.value.lotId);
      this.wizard.navigation.goToNextStep();
    } else {
      this.toastr.warning("Please select LOT Id!");
    }
  }



  patchSupplierData(data) {
    console.log(data);
    this.grnForm.patchValue(data);
    console.log(this.grnForm.value);
  }

  patchtransportData(data) {
    console.log(data);
    this.grnForm.get('transportId').patchValue(data.transportId);
    this.grnForm.get('vehicleNo').patchValue(data.lorryNumber);
    // this.grnForm.get('vehicleType').patchValue(data);
    this.grnForm.get('transportRecieptNo').patchValue(data.transportRecieptNo);
    this.grnForm.get('driverName').patchValue(data.driverName);
    this.grnForm.get('dLicence').patchValue(data.licenceNumber);
    this.grnForm.get('netWeight').patchValue(data.netWt);
    this.grnForm.get('grossWeight').patchValue(data.grossWt);
    this.grnForm.get('containerNumber').patchValue(data.containerNumber);
    this.grnForm.get('grnType').patchValue(this.selectedRole);
    console.log(this.grnForm.value);
  }

  submit() {
    this.dataToSend.grn = this.grnForm.value;
    this.dataToSend.productList = [];
    console.log(this.dataToSend);
    this._apiService.put(purchaseConstants.save_GRN_url,this.dataToSend).subscribe(res=>{
      console.log(res);
      this.toastr.success("Record saved successfully")
    })
  }

  get f() {
    return this.lotIdForm.controls;
  }

}
