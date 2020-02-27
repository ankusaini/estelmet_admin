import { Component, OnInit } from '@angular/core';
import {IAlbum, Lightbox, LightboxConfig, LightboxEvent} from 'ngx-lightbox';
import {Subscription} from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { SalesServiceService } from '../../../services/sales-service.service';
import { ResponseP, RequestP } from 'src/app/shared/Models/RequestResponse';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/Validators/custom-validator';
import { ToastrService } from 'ngx-toastr';
import { Sales } from 'src/app/shared/Models/sales.model';
import { Status } from 'src/app/shared/Models/user.model';
import { Product } from 'src/app/shared/Models/product.model.';

@Component({
  selector: 'app-sc-edit',
  templateUrl: './sc-edit.component.html',
  styleUrls: ['./sc-edit.component.scss']
})
export class ScEditComponent implements OnInit {
  routerSubscription: any;
  public scId: any;
  public response: ResponseP;
  transportForm: FormGroup;
  public salesData: Sales;
  public request: RequestP = {};
  public productList: Product[];


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

  constructor(private lightbox: Lightbox, 
              private lightboxEvent: LightboxEvent, 
              private lighboxConfig: LightboxConfig,
              private route: ActivatedRoute,
              private salesService: SalesServiceService,
              private toastr: ToastrService,
              private router:Router
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
        this.scId = this.route.snapshot.params.id;


        let url = "/sales/find/" + this.scId;
        this.salesService.findRequstObjectById(url).subscribe(
          data => {
            this.response = data;
            this.salesData = this.response.sales;
            this.productList = this.response.productList;
            console.log(this.response);
            console.log(this.salesData);
            this.createTransportForm();
          }, error => {
            console.log(error);
          }
        )


      }
    );

    

  }

  createTransportForm() {
    this.transportForm = new FormGroup({
      customerId : new FormControl(this.response.sales.customerId, [Validators.required]),
      transportId: new FormControl(this.response.sales.transportId, [Validators.required]),
      expectedDate: new FormControl(this.response.sales.expectedDate),
      netWt: new FormControl(this.response.sales.netWt, [Validators.required, CustomValidator.compondValueValidate]),
      grossWt: new FormControl(this.response.sales.grossWt, [Validators.required, CustomValidator.compondValueValidate]),
      coilsBundle: new FormControl(this.response.sales.coilsBundle, [Validators.required, CustomValidator.alphanumericSpecialCharacterValidate]),
      materialDescription: new FormControl(this.response.sales.materialDescription, [Validators.minLength(3)]),
      lorryNumber: new FormControl(this.response.sales.lorryNumber,  [CustomValidator.alphanumericSpecialCharacterValidate]),
      lorryType: new FormControl(this.response.sales.lorryType)

    });
  }

  get f() {
    return this.transportForm.controls;
  }

  updateTransportData() {
    if(this.transportForm.valid) {
      this.salesData.expectedDate = this.transportForm.value.expectedDate;
      this.salesData.netWt = this.transportForm.value.netWt;
      this.salesData.grossWt = this.transportForm.value.grossWt;
      this.salesData.coilsBundle = this.transportForm.value.coilsBundle;
      this.salesData.materialDescription = this.transportForm.value.materialDescription;
      this.salesData.lorryNumber = this.transportForm.value.lorryNumber;
      this.salesData.status = Status.PENDING;

      this.request.productList = this.productList;
      // this.request.sales = this.salesData;
      this.request.sales = this.salesData;

      console.log(this.request);
      let url = "/sales/updateSales";
      this.salesService.updateRequestObject(url, this.request).subscribe(
        data => {
          this.toastr.success("Record update successfully!");
          //this.router.navigateByUrl("/sales/scApproval");

        }, error => {
          console.log(error);
        }
      )
    } else {
      this.toastr.error("Error! Please fill correct details.")
    }
  }

}
