import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { InventoryService } from 'src/app/modules/inventory/service/inventory.service';
import { Company } from 'src/app/shared/Models/company.model.';
import { Product, ProductCategory, ProductShape } from 'src/app/shared/Models/product.model.';
import { LotType } from 'src/app/shared/Models/purchase.model';
import { RequestP } from 'src/app/shared/Models/RequestResponse';
import { StaticDataService } from 'src/app/shared/services/data/staticData.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Warehouse } from "src/app/shared/Models/warehouse";

@Component({
  selector: 'app-create-lot-mt-self',
  templateUrl: './create-lot-mt-self.component.html',
  styleUrls: ['./create-lot-mt-self.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateLotMtSelfComponent implements OnInit {
  public request: RequestP = {};

  @Input() selectedLotType: any;
  @Output() purchaseDataWithProduct: EventEmitter<any> = new EventEmitter<any>();

  productCategoryList: ProductCategory[];
  public productList: Product[];
  public selectedProductList: Product[] = [];
  productShapeList: ProductShape[];
  public userList: any;
  public sourceCompanyList: Company[];
  public destinationCompanyList: Company[];

  public selectedSourceCmpy: Company;
  public selectedDestinationCmp: Company;
  public role: LotType;
  public warehouseList: Warehouse[] = [];
   public warehouseListDest: Warehouse[] = [];
  



  public lotWithoutPc = new FormGroup({
    id: new FormControl(''),
    type: new FormControl('LOT'),
    lotType: new FormControl(''),
    sourceCompanyId: new FormControl('', [Validators.required]),
    sourceWarehouseId: new FormControl('', [Validators.required]),
    destinationCompanyId: new FormControl('', [Validators.required]),
    destinationWarehouseId: new FormControl('', [Validators.required]),
    status: new FormControl('PENDING'),
    title:new FormControl(''),
    productCategory: new FormControl('', [Validators.required]),
    productShape: new FormControl('', [Validators.required]),
  });

  showGroup = true;
  public isSubmit: boolean;
  // formInput: FormInput;
  // public maskIP = [/\d/, '.', /\d/, /\d/];
  constructor(
    private staticData: StaticDataService,
    private userService: UserService,
    private inventoryService: InventoryService,
    private toastr: ToastrService, private cd: ChangeDetectorRef) {
    this.isSubmit = false;
  }
  ngOnInit() {

    this.getProductCategory();
    this.getProductShape();
    this.getAllCompany();
    this.getAllProductByProductStage();
    console.log(this.selectedLotType);
    this.setLotValue(this.selectedLotType);

    //  this.lotWithoutPc.controls.lotType.patchValue(this.selectedLotType);

  }

  setLotValue(value) {
    if (value === 'MATERIAL_TRANSFER') {
      this.role = LotType.MATERIAL_TRANSFER;
    } else {
      this.role = LotType.JOB_WORK_SELF;
      //this.lotWithoutPc.removeControl('sourceWarehouseId');
    }
    this.lotWithoutPc.get('lotType').patchValue(this.role);
  }


  getAllCompany() {
    this.staticData.getAllCompany().subscribe(data => {
      this.sourceCompanyList = data;
      this.destinationCompanyList = data;
    });
  }

  getProductShape() {
    this.staticData.getProductShape().subscribe(data => {
      this.productShapeList = data;
    });
  }

  getProductCategory() {
    this.staticData.getAllProductCategory().subscribe(data => {
      this.productCategoryList = data;
    });
  }

  getAllProductByProductStage() {
    const url = '/inventory/getAllProductByProductStageAndStatus/ACTIVE/APPROVED';
    // let url = "/inventory/getAllProductByStatus/PENDING";
    this.inventoryService.getAllProductByProductStageAndStatus(url).subscribe(data => {
      this.productList = data;
      console.log('productList is: ', this.productList);
    }, error => {
      console.log(error);
    });
  }

  addProduct(product) {
    const index = this.selectedProductList.indexOf(product);
    if (index === -1) {
      this.selectedProductList.push(product);
    } else {
      this.toastr.warning('Product already added');
    }
  }

  deleteProduct(product) {

    const index: number = this.selectedProductList.indexOf(product);
    console.log('index', index);
    if (index !== -1) {
      this.selectedProductList.splice(index, 1);
    }
  }

  selectedSourceCompany(value) {
    if(value!='')
      {
    const data = this.sourceCompanyList.filter(element => {
      return element.id == value;
    });
    this.selectedSourceCmpy = data[0];
        this.warehouseList = this.staticData.getAllWarehouseByCompanyId(this.selectedSourceCmpy.id);

    this.cd.detectChanges();
      }
  else
    {
      this.selectedSourceCmpy=undefined;
    }
  }

  

  selectedDestinationCompany(value) {
    if(value!='')
      {
    const data = this.destinationCompanyList.filter(element => {
      return element.id == value;
    });
    this.selectedDestinationCmp = data[0];
    this.warehouseListDest = this.staticData.getAllWarehouseByCompanyId(this.selectedDestinationCmp.id);    
    this.cd.detectChanges();
      }
  else
    {
      this.selectedDestinationCmp=undefined;
    }
  }


  sendForApproval() {
    if (this.lotWithoutPc.invalid) {
      this.toastr.warning('Please fill all the details');
    } else if (this.selectedProductList.length === 0) {

      this.toastr.warning('Please select any product');
    } else {
      let val=this.lotWithoutPc.controls.productCategory.value+'-'+this.lotWithoutPc.controls.productShape.value;

      this.lotWithoutPc.controls.title.patchValue(val);
      this.request.purchase = this.lotWithoutPc.value;
      this.request.productList = this.selectedProductList;
      this.purchaseDataWithProduct.emit(this.request);

    }
  }


}
