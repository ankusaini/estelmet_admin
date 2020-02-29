import { Component, OnInit } from '@angular/core';
import { IAlbum, Lightbox, LightboxConfig, LightboxEvent } from 'ngx-lightbox';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { DispatchService } from '../../services/dispatch.service';
import { ActivatedRoute } from '@angular/router';
import { ResponseP } from 'src/app/shared/Models/RequestResponse';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/Validators/custom-validator';
@Component({
  selector: 'app-do-edit',
  templateUrl: './do-edit.component.html',
  styleUrls: ['./do-edit.component.css']
})
export class DoEditComponent implements OnInit {

  public routerSubscription: any;
  public doId: any;
  public response: ResponseP;
  public invoiceDetailsForm: FormGroup;
  public transportDetailsForm: FormGroup;


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
          private lighboxConfig: LightboxConfig,
          private toastr: ToastrService,
          private dispatchService: DispatchService,
          private route: ActivatedRoute
          ) {
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
        this.doId = this.route.snapshot.params.id;
        console.log(this.doId);

        if(this.doId) {
          let url = "/sales/getDeliveryOrderById/224";
          this.dispatchService.findRequstObjectById(url).subscribe(
            data => {
              this.response = data;
              this.createInvoiceDetailForm();
              this.createTransportDetailsForm();
            }, error => {
              console.log(error);
            }
          )
        }

      }, error => {
        console.log(error);
      });
  }

  createInvoiceDetailForm() {
    this.invoiceDetailsForm = new FormGroup({
      deliveryOrderType: new FormControl("SALES_OFFER_LOT"),
      sourceCompanyId: new FormControl(this.response.deliveryOrder.sourceCompanyId, [Validators.required]),
      status: new FormControl("PENDING"),
      sourceWarehouseId: new FormControl(this.response.deliveryOrder.sourceWarehouseId, [Validators.required]),
      customerId: new FormControl(this.response.deliveryOrder.customerId, [Validators.required]),
      invoiceNetWeight: new FormControl(this.response.deliveryOrder.invoiceNetWeight, [Validators.required]),
      invoiceGrossWeight: new FormControl(this.response.deliveryOrder.invoiceGrossWeight, [Validators.required]),
      invoiceNo: new FormControl(this.response.deliveryOrder.invoiceNo, [Validators.required]),
      materialDescription: new FormControl(this.response.deliveryOrder.materialDescription, [
        Validators.required,
        Validators.minLength(3)
      ]),
      coilsBundle: new FormControl(this.response.deliveryOrder.coilsBundles, [
        Validators.required,
        CustomValidator.compondValueValidate
      ])
    });
  }

  createTransportDetailsForm() {
    this.transportDetailsForm = new FormGroup({
      transportId: new FormControl(this.response.deliveryOrder.transportId, [Validators.required]),
       transportRecieptNo: new FormControl(this.response.deliveryOrder.transportRecieptNo, [Validators.required]),
      containerNumber: new FormControl(this.response.deliveryOrder.dLicence, [Validators.required, CustomValidator.alphanumericAndProductSymbolValidation]),
      grossWt: new FormControl(this.response.deliveryOrder.grossWeight, [CustomValidator.compondValueValidate]),
      netWt: new FormControl(this.response.deliveryOrder.netWeight, [CustomValidator.compondValueValidate]),
       lorryNumber: new FormControl(this.response.deliveryOrder.vehicleNo, [Validators.required, CustomValidator.alphanumericSpecialCharacterValidate]),
        driverName: new FormControl(this.response.deliveryOrder.driverName),
        licenceNumber: new FormControl(this.response.deliveryOrder.dLicence, [ CustomValidator.alphanumericSpecialCharacterValidate])
      });
  }

  get f() {
    return this.invoiceDetailsForm.controls;
  }

  get f1() {
    return this.transportDetailsForm.controls;
  }

  saveInvoiceDetails() {
    if(this.invoiceDetailsForm.valid) {
      console.log(this.invoiceDetailsForm.value);
    } else {
      this.toastr.error("Error! invalid Details!");
    }
  }

  saveTransportDetails() {
    if(this.transportDetailsForm.valid) {
      console.log(this.transportDetailsForm.value);
    } else {
      this.toastr.error("Error! Invalid Details.");
    }
  }

}
