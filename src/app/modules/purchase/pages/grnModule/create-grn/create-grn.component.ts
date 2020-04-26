import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WizardComponent } from 'ng2-archwizard/dist';
import { ToastrService } from 'ngx-toastr';
import { Status } from 'src/app/shared/Models/product.model.';
import { LotType } from 'src/app/shared/Models/purchase.model';
import { RequestP } from 'src/app/shared/Models/RequestResponse';
import { User } from 'src/app/shared/Models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import Swal from 'sweetalert2';
import { Company } from '../../../../../shared/Models/company.model.';
import { StaticDataService } from '../../../../../shared/services/data/staticData.service';
import { PurchaseService } from '../../../services/purchase.service';

@Component({
  selector: 'app-create-grn',
  templateUrl: './create-grn.component.html',
  styleUrls: ['./create-grn.component.scss']
})
export class CreateGrnComponent implements OnInit {
  @ViewChild('wizard', { static: false }) wizard: WizardComponent;
  lotIdForm: FormGroup;

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

  lot_details: any;
  transporterList: User[] = [];
  suppliarList: User[] = [];
  allCompany: Company[];
  limit = 150;
  offse = 1;
  selected_comapny: any;
  selectedRole: LotType;

  dataToSend: RequestP = {
    purchase: null,
    grn: null,
    sales: null,
    deliveryOrder: null,
    invoice: null,
    productList: null,
  }

  public selecteValue: any = '';

  constructor(
    private purchaseService: PurchaseService,
    private _fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private userService: UserService,
    private staticDataService: StaticDataService
  ) {
    this.basicSwal();
  }

  ngOnInit() {
    this.lotIdForm = new FormGroup({
      purchaseId: new FormControl('', [Validators.required])
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
      width:'300px',
      confirmButtonText: 'Select',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      inputValidator: value => {
        // tslint:disable-next-line: only-arrow-functions
        return new Promise(function (resolve, reject) {
          if (value !== '') {
            resolve();
          } else {
            resolve('Please Select Product Type');
          }
        });
      }
    }).then(val => {
      if (val.value) {
        this.selecteValue = val.value;
        this.getSelectedRole(this.selecteValue);
        console.log(val);
        this.getAllPendingLot();
        this.getAllSuppliar();
        this.getAllTransporter();
        this.getAllCompany();
      }
      else if (val.dismiss == Swal.DismissReason.cancel) {
        console.log('dismiss Called');
        this.router.navigate(['/dashboard/default']);
      }
    });
  }

  getSelectedRole(role) {
    if (role == 'withoutPurchaseInvoice') {
      this.selectedRole = LotType.WITHOUT_PC;
    } else if (role == 'purchaseInvoice') {
      this.selectedRole = LotType.WITH_PC;
    } else if (role == 'jobWorkChalan') {
      this.selectedRole = LotType.JOB_WORK_OTHER;
    } else {
      this.selectedRole = LotType.JOB_WORK_SELF;
    }
  }


  getAllPendingLot() {
    this.purchaseService.getAllPurchaseByLotTypeAndStatus(this.selectedRole, Status.APPROVED).subscribe(res => {
      if (res) {
        console.log(res);
        this.lot_details = res;
      }
    });
  }

  getAllSuppliar() {
    this.userService.getAllUserByUserRoleAndStatus('SUPPLIER', 'APPROVED', this.limit, this.offse).subscribe(res => {
      if (res) {
        console.log(res);
        this.suppliarList = res;
      }
    });
  }

  getAllTransporter() {
    this.userService.getAllUserByUserRoleAndStatus('TRANSPORTER', 'APPROVED', this.limit, this.offse).subscribe(res => {
      if (res) {
        console.log(res);
        this.transporterList = res;
      }
    });
  }

  getAllCompany() {
    this.staticDataService.getAllCompany().subscribe(
      data => this.allCompany = data
    );
  }

  selectedCompany(value: number) {
    let data = this.allCompany.filter(element => {
      return element.id == value
    })
    this.selected_comapny = data[0];
    console.log(this.selected_comapny);
  }


  submitLotId() {
    if (this.lotIdForm.valid) {
      // alert(this.lotIdForm.value.lotId);
      this.wizard.navigation.goToNextStep();
    } else {
      this.toastr.warning('Please select LOT Id!');
    }
  }



  patchSupplierData(data) {
    console.log('patchSupplierData',data);
    this.grnForm.patchValue(data);
    console.log(this.grnForm.value);
    this.wizard.navigation.goToNextStep();
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
    this.grnForm.get('purchaseId').patchValue(this.lotIdForm.get('purchaseId').value);
    this.dataToSend.grn = this.grnForm.value;
    this.dataToSend.productList = [];
    this.purchaseService.createGrn(this.dataToSend).subscribe(res => {
      console.log(res);
      this.toastr.success('Record saved successfully');
      this.router.navigateByUrl('/purchase/grnEdit/'+res.grn.grnId);
    });
  }

  get f() {
    return this.lotIdForm.controls;
  }

}
