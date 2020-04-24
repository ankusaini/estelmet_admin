import { Component, OnInit, ViewChild } from '@angular/core' 
import { WizardComponent } from 'ng2-archwizard/dist' 
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { SalesServiceService } from '../../services/sales-service.service';
import { ToastrService } from 'ngx-toastr';
import { RequestP } from 'src/app/shared/Models/RequestResponse';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerOrder } from 'src/app/shared/Models/customer-order.model';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.scss']
})
export class CustomerOrderComponent implements OnInit {

  @ViewChild('wizard', {static: false}) wizard: WizardComponent;
  public request: RequestP = {};
  public customerOrderForm: FormGroup = new FormGroup({
    customerOrderId: new FormControl(''),
    sellerCompanyName : new FormControl('', [Validators.required]),
    sellerAddress : new FormControl('', [Validators.required]),
    sellerPANNo : new FormControl('', [Validators.required]),
    sellerGSTNo : new FormControl('', [Validators.required]),
    sellerStateCode : new FormControl('', [Validators.required]),
    buyerCompanyName : new FormControl('', [Validators.required]),
    buyerAddress : new FormControl('', [Validators.required]),
    buyerPANNo : new FormControl('', [Validators.required]),
    buyerGSTNo : new FormControl('', [Validators.required]),
    buyerStateCode : new FormControl('', [Validators.required]),
    // 
    customerOrderNo : new FormControl('', [Validators.required]),
    customerOrderDate : new FormControl('', [Validators.required]),
    customerOrderValidity : new FormControl('', [Validators.required]),
    // 
    salesId: new FormControl('', [Validators.required]),
    // 
    gstInvoice : new FormControl('', [Validators.required]),
    loadingUnloadingCharges : new FormControl('', [Validators.required]),
    packagingCharges : new FormControl('', [Validators.required]),
    deliveryCharges : new FormControl('', [Validators.required]),
    anyOtherCharges : new FormControl('', [Validators.required]),
    // 
    modeofPayment : new FormControl('', [Validators.required]),
    paymentTerms : new FormControl('', [Validators.required]),
    creditLimit : new FormControl('', [Validators.required]),
    currentOutstanding : new FormControl('', [Validators.required]),
    // 
    contactPersonName : new FormControl('', [Validators.required]),
    contactPersonNumber : new FormControl('', [Validators.required]),
    contactPersonWNumber: new FormControl('', [Validators.required]),
    contactPersonEmail: new FormControl('', [Validators.required]),
  });
  private subscription: any;
  public coId: any;
  public custumerOrderData: CustomerOrder; 
  public isEdit: boolean = false;

  constructor(private salesService: SalesServiceService,
    private router: Router,
    private route: ActivatedRoute,
     private toastr: ToastrService) {
   }

  ngOnInit() {

    this.subscription = this.route.url.subscribe( params => {
      this.coId = this.route.snapshot.params.id;
      if(this.coId) {
        console.log(this.coId);
        this.isEdit = true;
        this.salesService.getCustomerOrder(this.coId).subscribe( res => {
          console.log(res);
          this.custumerOrderData = res;
          // this.customerOrderForm.patchValue(res);
          console.log(this.custumerOrderData);
        });
        
      } else {
        // console.log("!!!");
      }
    })
    
  }

  getSelectedDetailsId(data) {
    console.log(data);
    this.wizard.navigation.goToNextStep();
    this.customerOrderForm.patchValue(data);
    console.log(this.customerOrderForm);
  }

  getCoData(data) {
    this.wizard.navigation.goToNextStep();
    this.customerOrderForm.patchValue(data);
    console.log(this.customerOrderForm);
  }

  getSelectedOfferId(data: any) {
    // data.toString();
    this.wizard.navigation.goToNextStep();
    this.customerOrderForm.patchValue({
      salesId: data
    })
  }

  getOtherDetails(data) {
    this.wizard.navigation.goToNextStep();
    this.customerOrderForm.patchValue(data);
    console.log(this.customerOrderForm);
    this.finalSubmit();
  }

  finalSubmit() {
    this.request.customerOrder = this.customerOrderForm.value;
    this.salesService.createCustomerOrder(this.request).subscribe( res => {
      console.log(res);
      if(this.isEdit) {
        this.toastr.success("Customer Order updated successfully!");
      } else {
        this.toastr.success("Customer Order created successfully!");
      }
      let id = res.body.customerOrder.customerOrderId;
      this.router.navigateByUrl('/sales/editCo/' + id);
    }, error => {
      console.log(error);
    })
  }


}