import { Component, OnInit } from '@angular/core';
import { Company } from "src/app/shared/Models/company.model.";
import { Warehouse } from   "src/app/shared/Models/warehouse";
import {
  ProductCategory,
  ProductShape,
  Product
} from "src/app/shared/Models/product.model.";
import { StaticDataService } from "src/app/shared/services/data/static-data.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RequestP } from "src/app/shared/Models/RequestResponse";
import { PurchaseService } from "src/app/modules/purchase/services/purchase.service";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-create-mr',
  templateUrl: './create-mr.component.html',
  styleUrls: ['./create-mr.component.scss']
})
export class CreateMRComponent implements OnInit {

   public request : RequestP={};
   public companyList:Company[] = [];
   public selected_comapny:Company;
   public warehouseList:Warehouse[] = [];
   
   public productShapeList:ProductShape[] = [];
   public productCategoryList:ProductCategory[] = [];   
  public selectedWarehouse:Warehouse;
   public productList:Product[] = [];

  constructor(private productService:StaticDataService,
    private toastr: ToastrService,
    public purchaseService: PurchaseService,
    public router:Router) { }


   public mrPurchase = new FormGroup({ 
    id: new FormControl("" ),
    type: new FormControl("MATERIAL_REQURIMENT"),
    sourceCompanyId: new FormControl("",[Validators.required]),
    status: new FormControl("PENDING"),
    sourceWarehouseId: new FormControl("",[Validators.required]),
    productCategory: new FormControl("",[Validators.required]),
    productShape: new FormControl("",[Validators.required]),
  });

  ngOnInit() {
    this.getAllCompany();
    this.getAllproductShapeList();
    this.getAllproductCategoryList();
  }

  createMrSubmit()
  {
    console.log(this.mrPurchase);
  }
  getAllCompany()
  {
 this.productService.getAllCompany().subscribe(data=>{
      this.companyList = data;
    });
  }


  getAllproductCategoryList()
  {
      this.productService.getAllProductCategory().subscribe(data=>{
      this.productCategoryList = data;
    });
  }

  getAllproductShapeList()
  {
    this.productService.getProductShape().subscribe(data=>{
      this.productShapeList = data;
    });
  }

  getProductData(data)
  {
    this.productList.push(data);
  }

   selectedCompany(value : number) {
    let data = this.companyList.filter(element=>{
      return element.id == value
    })
    this.selected_comapny = data[0];
   // this.warehouseList=data[0].warehouse;
  }
  
  getSelectedWarehouse(event)
  {
    console.log("warehouse",event.target.value);
    this.selectedWarehouse=this.selected_comapny.warehouse.filter(obj=>obj.id==event.target.value)[0];
    console.log("selectedWarehouse",this.selectedWarehouse);
  }

  saveMrRecord()
  {
    console.log("here list",this.productList)
    if(this.productList && this.productList.length==0)
      {
        alert("please save at least one record")
        this.toastr.warning("Please enter at least one product")
      }
      else if(this.mrPurchase.invalid)
        {
          this.toastr.warning("Please fill all the details.")
        }
      else
        {
          console.log("else")
          for(let index in this.productList)
            {
              console.log("in",this.productList[index].warehouse);
              this.productList[index].warehouse=this.selectedWarehouse;
            }
        
          this.request.productList=this.productList;

          this.request.purchase=this.mrPurchase.value;
          
          
          let path="/purchase/createPurchase";
          this.purchaseService.saveRequestObject(path,this.request).subscribe(data=>{
            this.toastr.success("Record saved successfully")
            this.router.navigateByUrl("/purchase/mrApproval");

          },error=>{
            console.log("error is",error);
          })
        }
  }
}
