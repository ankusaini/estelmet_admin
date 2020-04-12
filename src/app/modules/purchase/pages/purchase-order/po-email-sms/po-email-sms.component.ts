import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from "src/app/shared/services/user.service";
import { User, UserMini } from "src/app/shared/Models/user.model";
import { Purchase } from "src/app/shared/Models/purchase.model";
import { ToastrService } from "ngx-toastr";
import { PurchaseService } from "src/app/modules/purchase/services/purchase.service";

@Component({
  selector: 'app-po-email-sms',
  templateUrl: './po-email-sms.component.html',
  styleUrls: ['./po-email-sms.component.scss']
})
export class PoEmailSmsComponent implements OnInit {

  constructor(private userService: UserService,private toastrService:ToastrService,private purchaseServic:PurchaseService) { }
  public userList: User[];
  public selectedPO:Purchase;
  public supplierList:any[]=[];
   public selectedSupplierList:any[]=[];
   public supplierDrowDownList:UserMini[];
  public  limit=15;
  public offset=1;
  public productId:any;
  public userId:any;
  public price:any;
  @ViewChild('openModelRef',{static:false}) openModelRef:ElementRef;
  
  
  ngOnInit() {
    this.getAllUserByUserRoleAndStatus('APPROVED','SUPPLIER');
  }

   selectUser(supplierId) {
     this.purchaseServic.getPurchaseOrderByUser(supplierId).subscribe(data=>{
        this.selectedSupplierList=data.data;
        console.log("data fis",data);
      },error=>{

      })
  }

  getSelectedPO(data)
  {
    this.selectedPO=data;
    if(this.selectedPO)
      {
        this.getPurchaseOrderByPo(this.selectedPO.id);
      }

    console.log("selected  po is",this.selectedPO);
  }

  getPurchaseOrderByPo(purchaseOderId)
  {
      this.purchaseServic.getPurchaseOrderByPo(purchaseOderId).subscribe(data=>{
        this.supplierList=data.data;
        console.log("data fis",data);
      },error=>{

      })
  }



  getAllUserByUserRoleAndStatus(status,userType)
  {

    this.userService.getAllUserByUserRoleAndStatus(status,userType,this.limit,this.offset).subscribe(
      data => {
        this.userList = data;
       
      },
      error => {}
    );
  }


  openModal()
  {
    this.userService.getAllUserByUserNameAndCompany('SUPPLIER','APPROVED').subscribe(data=>{
        this.supplierDrowDownList=data;
    },error=>{

    })
  this.openModelRef.nativeElement.click();
  }

  savePurchaseOrder(purchaseId,userId,productId,price)
  {
    if(this.selectedPO && this.userId && this.productId)
      {
    this.purchaseServic.savePurchaseOrder(this.selectedPO.id,this.userId,this.productId,this.price).subscribe(data=>{
        this.supplierList=data.data;
        
        this.toastrService.success("Record saved successfully","Success");
      },error=>{

      })
      }
  }
  closeModel() {}
}
