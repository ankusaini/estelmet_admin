import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Company } from 'src/app/shared/Models/company.model.';
import { ProductCategory, ProductShape } from 'src/app/shared/Models/product.model.';
import { Warehouse } from 'src/app/shared/Models/warehouse';
import { SalesServiceService } from '../../services/sales-service.service';

@Component({
  selector: 'app-create-so-id-tradelead',
  templateUrl: './create-so-id-tradelead.component.html',
  styleUrls: ['./create-so-id-tradelead.component.scss']
})
export class CreateSoIdTradeleadComponent implements OnInit {

  @Output() createSoId: EventEmitter<any> = new EventEmitter<any>();
  public companyList: Company[];
  public warehouseList: Warehouse[];
  public categoryList: ProductCategory[];
  public shapeList: ProductShape[];
  public selectedWarehouse: Warehouse;
  public selected_comapny: Company;

  generatedTlId = '';
  tlIdForm: FormGroup;
  selectedCategory: any;
  selectedShape: any;


  salesDto = new FormGroup({
    id: new FormControl(''),
    type: new FormControl('TRADE_LEAD_LOT'),
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

    this.tlIdForm = new FormGroup({
      title: new FormControl('', [Validators.required])
    });

  }

  get f() {
    return this.salesDto.controls;
  }

  createSoIdSubmit() {
    if (this.salesDto.valid) {
      this.createSoId.emit(this.salesDto.value);
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
    this.selected_comapny = data[0];
  }

  getSelectedWarehouse(event) {
    this.selectedWarehouse = this.salesDto.controls.warehouseName.value;
  }

  generateTlId() {
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
      console.log('Category is' + this.selectedCategory + this.selectedShape);
      this.salesDto.value.title = this.selectedCategory + '-' + this.selectedShape;
      this.generatedTlId = this.salesDto.value.title;
      console.log(this.salesDto.value.title);
    }
  }


}
