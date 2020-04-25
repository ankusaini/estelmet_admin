import { Component, OnInit, Input } from "@angular/core";
import { FormInput } from './create-lot-form.model';
import Swal from 'sweetalert2';
import { Purchase, LotType, PurchaseType } from "src/app/shared/Models/purchase.model";
import { PurchaseService } from "src/app/modules/purchase/services/purchase.service";
import { FormGroup, FormControl } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { RequestP } from "src/app/shared/Models/RequestResponse";
import { Router } from '@angular/router';
import { Status } from "src/app/shared/Models/user.model";

@Component({
  selector: 'app-create-lot-with-pc',
  templateUrl: './create-lot-with-pc.component.html',
  styleUrls: ['./create-lot-with-pc.component.css']
})
export class CreateLotWithPcComponent implements OnInit { 
  
  showGroup = true;
  public isSubmit: boolean;
   @Input() selectedLotType:any;
    public purchaseData: any;
  public purchaseList: Purchase[];
  public selectedPurchase: Purchase;
  public requestp:RequestP={};
  formInput: FormInput;
  constructor(private purchaseService: PurchaseService,private toastr:ToastrService,private router: Router) {
    this.isSubmit = false;
   // this.basicSwal();
   }

      public myForm = new FormGroup({ 
        pcId: new FormControl("" )
    
  });
   
  ngOnInit() {
   
    this.getPurchaseConfirmation();
  } 
 getPurchaseConfirmation()
 {
    this.purchaseService.getAllPurchaseByTypeAndStatus(PurchaseType.PURCHASE_CONFIRMATION, Status.APPROVED).subscribe( data =>{
      console.log("Your Data is: " , data);
      this.purchaseData = data;
      this.purchaseList = this.purchaseData.purchaseList;
      },
      error => {}
    );
 }
 
 saveWithPc()
 {
    if(this.myForm.invalid)
      {
        this.toastr.warning("Please select any Pc id");
      }
      else
        {
          let data = this.purchaseList.filter(element=>{
      return element.id == this.myForm.controls.pcId.value
    })
            if(data && data.length>0)
              {
            this.selectedPurchase=data[0];
            this.selectedPurchase.lotType=LotType.WITH_PC;
            
            this.selectedPurchase.status=Status.PENDING;

             this.selectedPurchase.type=PurchaseType.LOT;
                this.requestp.purchase=this.selectedPurchase
            //  let url='/purchase/updatePurchaseHistory';
             this.purchaseService.updatePurchaseHistory(this.requestp).subscribe(data=>{
                this.toastr.success("Lot creates with id . Generated Id:"+data.purchase.id)
                this.router.navigateByUrl("/purchase/lotEdit/"+data.purchase.id);
             },error=>{

             })
              }
          }
 }
}
