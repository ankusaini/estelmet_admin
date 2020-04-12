import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Company } from 'src/app/shared/Models/company.model.';
import { ProductCategory, ProductShape } from 'src/app/shared/Models/product.model.';
import { Warehouse } from 'src/app/shared/Models/warehouse';
import { SalesServiceService } from '../../services/sales-service.service';
import { StaticDataService } from '../../../../shared/services/data/staticData.service';

@Component({
  selector: 'app-create-auction-id',
  templateUrl: './create-auction-id.component.html',
  styleUrls: ['./create-auction-id.component.scss']
})
export class CreateAuctionIdComponent implements OnInit {

  @Output() createAoId: EventEmitter<any> = new EventEmitter<any>();
  public companyList: Company[];
  public warehouseList: Warehouse[];
  public categoryList: ProductCategory[];
  public shapeList: ProductShape[];
  public selectedWarehouse: Warehouse;
  public selectedComapny: Company;

  generatedAoId = '';
  AoIdForm: FormGroup;
  selectedCategory: any;
  selectedShape: any;


  salesDto = new FormGroup({
    id: new FormControl(''),
    type: new FormControl('AUCTION_LOT'),
    status: new FormControl('PENDING'),
    title: new FormControl(''),
    companyName: new FormControl('', [Validators.required]),
    warehouseName: new FormControl('', [Validators.required]),
    productCategory: new FormControl('', [Validators.required]),
    productShape: new FormControl('', [Validators.required])
  });

  constructor(
    private salesService: SalesServiceService,
    private toastr: ToastrService,
    private commonService: StaticDataService) { }


  ngOnInit() {
    this.getCompanyList();
    this.getCategoryList();
    this.getShapeList();

    this.AoIdForm = new FormGroup({
      title: new FormControl('', [Validators.required])
    });

  }

  get f() {
    return this.salesDto.controls;
  }

  createAoIdSubmit() {
    if (this.salesDto.valid) {
      this.createAoId.emit(this.salesDto.value);
    } else {
      this.toastr.error('Error! Invalid details!');
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
    const data = this.companyList.filter(element => {
      return element.id == value;
    });
    this.selectedComapny = data[0];
  }

  getSelectedWarehouse(event) {
    this.selectedWarehouse = this.salesDto.controls.warehouseName.value;
  }

  generateAoId() {
    if (this.salesDto.value.productCategory && this.salesDto.value.productShape) {
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
      this.salesDto.value.title = this.selectedCategory + '-' + this.selectedShape;
      this.generatedAoId = this.salesDto.value.title;
    }
  }

}
