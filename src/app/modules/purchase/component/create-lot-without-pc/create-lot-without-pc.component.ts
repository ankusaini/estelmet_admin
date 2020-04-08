import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from "@angular/core";
import { FormInput } from './create-lot-form.model';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { StaticDataService } from "src/app/shared/services/data/staticData.service";
import { UserService } from "src/app/shared/services/user.service";
import { InventoryService } from "src/app/modules/inventory/service/inventory.service";
import {
  ProductCategory,
  ProductShape
} from "src/app/shared/Models/product.model.";
import { Company } from "src/app/shared/Models/company.model.";
import { Warehouse } from "src/app/shared/Models/warehouse";
import { ToastrService } from "ngx-toastr";
import { LotType } from 'src/app/shared/Models/purchase.model';

@Component({
  selector: 'app-create-lot-without-pc',
  templateUrl: './create-lot-without-pc.component.html',
  styleUrls: ['./create-lot-without-pc.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class CreateLotWithoutPcComponent implements OnInit {

    @Input() selectedLotType:any;
    @Output() purchaseData: EventEmitter<any> = new EventEmitter<any>();

    
   //common data
  productCategoryList: ProductCategory[];
  productShapeList: ProductShape[];
  public companyList: Company[] = [];
   public selectedCmp: Company;
  public userList: any;
  public role: LotType;
  //public warehouseList:Warehouse[] = [];


  showGroup = true;
  public isSubmit: boolean;
  formInput: FormInput;
  public maskIP = [/\d/, '.', /\d/, /\d/];

   public lotWithoutPc = new FormGroup({ 
    id: new FormControl("" ),
    type: new FormControl("LOT"),
     lotType: new FormControl(""),
    sourceCompanyId: new FormControl("",[Validators.required]),
    status: new FormControl("PENDING"),
    sourceWarehouseId: new FormControl("",[Validators.required]),
    productCategory: new FormControl("",[Validators.required]),
    productShape: new FormControl("",[Validators.required]),
     grossWt: new FormControl("",[Validators.required]),
    netWt: new FormControl("",[Validators.required]),
      supplierId: new FormControl("",[Validators.required]),
  });

  constructor(private _staticData: StaticDataService,
    private userService: UserService,
    private inventoryService: InventoryService,private toastr:ToastrService,private _cd : ChangeDetectorRef) {
   }
  ngOnInit() {
    console.log("called")
   this.getProductCategory();
    this.getProductShape();
    this.getAllCompany();
    this.getAllSupplier();
    this.setLotValue(this.selectedLotType);
    //  this.lotWithoutPc.controls.lotType.patchValue(this.selectedLotType);
    
  }

  setLotValue(value) {
    if(value == 'WITHOUT_PC') {
      this.role = LotType.WITHOUT_PC;
    } else {
      this.role = LotType.JOB_WORK_OTHER;
      this.lotWithoutPc.removeControl('sourceWarehouseId');
    }
    this.lotWithoutPc.get('lotType').patchValue(this.role);
  }


    getAllCompany() {
    this._staticData.getAllCompany().subscribe(data => {
      console.log("company data"+data)
      this.companyList = data;
    });
  }

  getProductShape() {
    this._staticData.getProductShape().subscribe(data => {
      this.productShapeList = data;
    });
  }

  getProductCategory() {
    this._staticData.getAllProductCategory().subscribe(data => {
      this.productCategoryList = data;
    });
  }
   getAllSupplier() {

    this.userService.getAllUserByUserNameAndCompany('SUPPLIER','APPROVED').subscribe(
      data => {
        this.userList = data;
      },
      error => {}
    );
  }

  generateLotId()
  {
    console.log(this.lotWithoutPc);
     if (this.lotWithoutPc.invalid) {
      this.toastr.warning("Please fill all the details")
    } else {
      this.purchaseData.emit(this.lotWithoutPc.value);
     
    }
  }

  selectedCompany(value : number) {
    let data = this.companyList.filter(element=>{
      return element.id == value
    })
    this.selectedCmp = data[0];
    this._cd.detectChanges();
  }
 
}
