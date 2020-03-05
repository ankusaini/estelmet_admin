import { Component, OnInit } from '@angular/core';
import { IAlbum, Lightbox, LightboxConfig, LightboxEvent } from 'ngx-lightbox';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { PurchaseService } from '../../../services/purchase.service';
import { ResponseP, RequestP } from 'src/app/shared/Models/RequestResponse';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/Validators/custom-validator';
import { Grn } from 'src/app/shared/Models/purchase.model';
import { Product } from 'src/app/shared/Models/product.model.';

@Component({
  selector: 'app-edit-grn',
  templateUrl: './edit-grn.component.html',
  styleUrls: ['./edit-grn.component.scss']
})
export class EditGrnComponent implements OnInit {

  public routerSubscription: any;
  public grnId: any;
  response: ResponseP;
  InvoiceDetailsForm: FormGroup;
  transportDetailsForm: FormGroup;
  weighDetailsForm: FormGroup;
  grnData: Grn;
  request: RequestP = {};

  public activeTab: string;
  public editProfile1: boolean;
  public editProfile2: boolean;
  public editProfile3: boolean;
  public editProfile4: boolean;

  public editProfile: boolean;
  public editProfileIcon: string;

  public editContact: boolean;
  public editContactIcon: string;

  public editOtherInfo: boolean;
  public editOtherInfoIcon: string;

  public albums: Array<IAlbum>;
  private subscription: Subscription;

  constructor(
        private lightbox: Lightbox, 
        private lightboxEvent: LightboxEvent,
        private toastr: ToastrService,
        private route: ActivatedRoute, 
        private purchaseService: PurchaseService,
        private lighboxConfig: LightboxConfig) {
    this.activeTab = 'home';

    this.editProfile = false;
    this.editProfileIcon = 'icon-edit';

    this.editContact = false;
    this.editContactIcon = 'icon-edit';

    this.editOtherInfo = false;
    this.editOtherInfoIcon = 'icon-edit';

    this.albums = [];
  }

  ngOnInit() {
    this.routerSubscription = this.route.url.subscribe(
      params => {
        this.grnId = this.route.snapshot.params.id;
        console.log("id: ", this.grnId);
        if(this.grnId) {
          let url = "/purchase/getGrnById/" + this.grnId;
          this.purchaseService.findRequstObjectById(url).subscribe(
            data => {
              this.response = data;
              this.grnData = data.grn;
              console.log(this.response);
              this.createInvoice();
              this.createTransportDetails();
              this.createWeighDetailsForm();
            },error => {
              console.log(error);
            }
          )
        }
      });

  }

  createInvoice() {
    this.InvoiceDetailsForm = new FormGroup({
      supplierId: new FormControl("SU" + this.response.grn.supplierId, [Validators.required]),
      sourceCompanyId: new FormControl("COM" + this.response.grn.sourceCompanyId, [Validators.required]),
      sourceWarehouseId: new FormControl("WAR" +this.response.grn.sourceWarehouseId, [Validators.required]),
      invoiceNo: new FormControl(this.response.grn.invoiceNo, [Validators.required]),
      materialDescription: new FormControl(this.response.grn.materialDescription, [Validators.minLength(3)]),
      coilsBundles: new FormControl(this.response.grn.coilsBundles),
      invoiceGrossWeight: new FormControl(this.response.grn.invoiceGrossWeight, [Validators.required, CustomValidator.compondValueValidate]),
      invoiceNetWeight: new FormControl(this.response.grn.invoiceNetWeight, [Validators.required, CustomValidator.compondValueValidate])
    });
  }

  submitInvoiceDetails() {
    if(this.InvoiceDetailsForm.valid) {
      console.log(this.InvoiceDetailsForm.value);
      this.grnData.invoiceNo = this.InvoiceDetailsForm.value.invoiceNo;
      this.grnData.materialDescription = this.InvoiceDetailsForm.value.materialDescription;
      this.grnData.coilsBundles = this.InvoiceDetailsForm.value.coilsBundles;
      this.grnData.invoiceGrossWeight = this.InvoiceDetailsForm.value.invoiceGrossWeight;
      this.grnData.invoiceNetWeight = this.InvoiceDetailsForm.value.invoiceNetWeight;

      this.request.grn = this.grnData;
      this.request.productList = [];

      let url = "/purchase/createGrn";
      this.purchaseService.saveRequestObject(url, this.request).subscribe(
        data => {
          this.toastr.success("Record update successfully!");
        }, error => {
          console.log(error);
        }
      )
    } else {
      this.toastr.error("Error! Invalid details.");
    }
  }

  createTransportDetails() {
    this.transportDetailsForm = new FormGroup({
      transportId: new FormControl(this.response.grn.transportId, [Validators.required]),
      transportRecieptNo: new FormControl(this.response.grn.transportRecieptNo, [Validators.required]),
      vehicleNo: new FormControl(this.response.grn.vehicleNo, [Validators.required]),
      containerNumber: new FormControl(this.response.grn.containerNumber, [Validators.required]),
      grossWeight: new FormControl(this.response.grn.grossWeight, [Validators.required, CustomValidator.compondValueValidate]),
      netWeight: new FormControl(this.response.grn.netWeight, [Validators.required, CustomValidator.compondValueValidate]),
      driverName: new FormControl(this.response.grn.driverName, [Validators.required]),
      dMobile: new FormControl(this.response.grn.dMobile, [CustomValidator.contactNumberValidation])
    })
  }

  submitTransportDetails() {
    if(this.transportDetailsForm.valid) {
      console.log(this.transportDetailsForm.value);
      this.grnData.dMobile = this.transportDetailsForm.value.dMobile;
      this.grnData.transportRecieptNo = this.transportDetailsForm.value.transportRecieptNo;
      this.grnData.vehicleNo = this.transportDetailsForm.value.vehicleNo;
      this.grnData.containerNumber = this.transportDetailsForm.value.containerNumber;
      this.grnData.grossWeight = this.transportDetailsForm.value.grossWeight;
      this.grnData.netWeight = this.transportDetailsForm.value.netWeight;
      this.grnData.driverName = this.transportDetailsForm.value.driverName;

      this.request.grn = this.grnData;
      this.request.productList = [];
      let url = "/purchase/createGrn";
      this.purchaseService.saveRequestObject(url, this.request).subscribe(
        data => {
          this.toastr.success("Record update successfully!");
        }, error => {
          console.log(error);
        }
      );
    } else {
      this.toastr.error("Error! Invalid details.");
    }
  }

  createWeighDetailsForm() {
    this.weighDetailsForm = new FormGroup({
      weighingCompanyId: new FormControl(this.response.grn.weighingCompanyId),
      weighingSlipNo: new FormControl(this.response.grn.weighingSlipNo, [Validators.required]),
      vehicleLoadedWeight: new FormControl(this.response.grn.vehicleLoadedWeight, [Validators.required]),
      vehicleTareWeight: new FormControl(this.response.grn.vehicleTareWeight, [Validators.required]),
      materialNetWeightslip: new FormControl(this.response.grn.materialNetWeightslip, [Validators.required]),
      location: new FormControl(this.response.grn.location)
    });
  }

  submitWeighdetails() {
    if(this.weighDetailsForm.valid) {
      this.grnData.weighingSlipNo = this.weighDetailsForm.value.weighingSlipNo;
      this.grnData.vehicleLoadedWeight = this.weighDetailsForm.value.vehicleLoadedWeight;
      this.grnData.vehicleTareWeight = this.weighDetailsForm.value.vehicleTareWeight;
      this.grnData.materialNetWeightslip = this.weighDetailsForm.value.materialNetWeightslip;
      this.grnData.location = this.weighDetailsForm.value.location;

      this.request.grn = this.grnData;
      this.request.productList = [];
      let url = "/purchase/createGrn";
      this.purchaseService.saveRequestObject(url, this.request).subscribe(
        data => {
          this.toastr.success("Record update successfully!");
        }, error => {
          console.log(error);
        }
      );

    } else {
      this.toastr.error("Error! Invalid details.");
    }
  }

  get f1() {
    return this.InvoiceDetailsForm.controls;
  }

  get f2() {
    return this.transportDetailsForm.controls;
  }

  get f3() {
    return this.weighDetailsForm.controls;
  }

}
