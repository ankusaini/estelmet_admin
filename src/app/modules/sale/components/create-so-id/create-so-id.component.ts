import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Company } from 'src/app/shared/Models/company.model.';
import { ProductCategory, ProductShape } from 'src/app/shared/Models/product.model.';
import { Warehouse } from 'src/app/shared/Models/warehouse';
import { SalesServiceService } from '../../services/sales-service.service';
// import { RequestP } from 'src/app/shared/Models/RequestResponse';

@Component({
  selector: 'app-create-so-id',
  templateUrl: './create-so-id.component.html',
  styleUrls: ['./create-so-id.component.scss']
})
export class CreateSoIdComponent implements OnInit {

  @Output() createSoId: EventEmitter<any> = new EventEmitter<any>();
  public companyList: Company[];
  public warehouseList: Warehouse[];
  public categoryList: ProductCategory[];
  public shapeList: ProductShape[];
  public selectedWarehouse: Warehouse;
  public selected_comapny: Company;
  generatedSoId = '';
  soIdForm: FormGroup;
  selectedCategory: any;
  selectedShape: any;
  // request: RequestP = {};

  salesDto = new FormGroup({
    id: new FormControl(''),
    type: new FormControl('SALES_OFFER_LOT'),
    status: new FormControl('PENDING'),
    title: new FormControl(''),
    companyName: new FormControl('', [Validators.required]),
    warehouseName: new FormControl('', [Validators.required]),
    productCategory: new FormControl('', [Validators.required]),
    productShape: new FormControl('', [Validators.required])
  });

  constructor(private salesService: SalesServiceService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.getCompanyList();
    this.getCategoryList();
    this.getShapeList();

    this.soIdForm = new FormGroup({
      title: new FormControl('', [Validators.required])
    });

  }

  get f() {
    return this.salesDto.controls;
  }

  createSoIdSubmit() {
    if (this.salesDto.valid && this.soIdForm.valid) {
      this.createSoId.emit(this.salesDto.value);
    } else {
      this.toastr.error('Error! Invalid Details.');
    }
  }

  getCompanyList() {
    const url = '/inventory/getAllCompany';
    this.salesService.getAllCompany(url).subscribe(
      data => {
        this.companyList = data;
        console.log(this.companyList);
      }, error => {
        console.log(error);
      }
    );
  }

  getCategoryList() {
    const url = '/inventory/productClassification/getProductCategory';
    this.salesService.getProductCategory(url).subscribe(
      data => {
        this.categoryList = data;
      }, error => {
        console.log(error);
      }
    );

  }

  getShapeList() {
    const url = '/inventory/productClassification/getProductShape';
    this.salesService.getProductShape(url).subscribe(
      data => {
        this.shapeList = data;
      }, error => {
        console.log(error);
      }
    );
  }

  selectedCompany(value: number) {
    console.log("Value",value)
    const data = this.companyList.filter(element => {
      return element.id == value;
    });
    this.selected_comapny = data[0];
    console.log("selected company",this.selected_comapny)
  }

  getSelectedWarehouse(event) {
    this.selectedWarehouse = this.salesDto.controls.warehouseName.value;
  }

  generateSoId() {
    if (this.salesDto.value.productCategory && this.salesDto.value.productShape) {
      console.log(this.categoryList);
      console.log(this.shapeList);
      this.categoryList.map(category => {
        if (category.id == this.salesDto.value.productCategory) {
          this.selectedCategory = category.productCategory;
        }
      });

      this.shapeList.map(shape => {
        if (shape.id == this.salesDto.value.productShape) {
          this.selectedShape = shape.productShape;
        }
      });
      console.log('Category is' + this.selectedCategory + this.selectedShape);
      this.salesDto.value.title = this.selectedCategory + '-' + this.selectedShape;
      this.generatedSoId = this.salesDto.value.title;
      console.log(this.salesDto.value.title);
    }
    // this.request.sales = this.salesDto.value;
    // console.log(this.request);

    // let url = "/sales/createSales";
  }
}
