import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/Models/product.model.';
import { InventoryService } from '../../service/inventory.service';
import { AddProductCartComponent } from "src/app/shared/components/add-product-cart/add-product-cart.component";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  productList: Product[];
  selectedProductList: Product[];

  @ViewChild(AddProductCartComponent,{static:false}) child:AddProductCartComponent;

  constructor(private inventoryService: InventoryService, private toastr: ToastrService) { }

  ngOnInit() {
    const url = '/inventory/getAllProductByProductStageAndStatus/ACTIVE/APPROVED';
    // let url = "/inventory/getAllProductByStatus/PENDING";
    this.inventoryService.getAllProductByProductStageAndStatus(url).subscribe(data => {
      this.productList = data;
    }, error => {
      console.log(error);
    });
  }

  getSelectedProductList(selectedProductList) {
    this.selectedProductList = selectedProductList;
  }


  exportToExcel()
  {
  this.child.exportToExcelChild();
  }

  exportToPDF()
  {
    this.child.exportToPDFChild();

  }
  basicSwal() {
    Swal.fire({
      title: 'Advance Search',
      // input: 'select',
      html:'<div class="row"><div class="col-md-6" style="margin-bottom:20px;"><select class="form-control"><option>Type</option><option>Type 2</option></select> </div>' +
      '<div class="col-md-6"><select class="form-control"><option>Category</option><option>Category 2</option></select></div>' +
      '<div class="col-md-6" style="margin-bottom:20px;"><select class="form-control"><option>Shape</option><option>Shape 2</option></select></div>' +
      '<div class="col-md-6"><select class="form-control"><option>Class</option><option>Class 2</option></select></div>' + 
      '<div class="col-md-6" style="margin-bottom:20px;"><input type="text" id="vehicle3" name="vehicle3" value="" placeholder="Length"  class="form-control"></div>' + 
      '<div class="col-md-6"><input type="text" id="vehicle3" name="vehicle3" value="" placeholder="Width"  class="form-control"></div>' +
      '<div class="col-md-6"><input type="text" id="vehicle3" name="vehicle3" value="" placeholder="Height"  class="form-control"></div>' +
      '<div class="col-md-6"><input type="text" id="vehicle3" name="vehicle3" value="" placeholder="Thickness" class="form-control"></div> </div>'
    ,
      // inputOptions: {
      //   Shearing: 'Shearing',
      //   Blanking: 'Blanking',
      //   Assorting: 'Assorting',
      // },
      // inputPlaceholder: '-Select-',
      allowOutsideClick: false,
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Search',
      inputValidator(value) {
        // tslint:disable-next-line: only-arrow-functions
        return new Promise(function (resolve, reject) {
          if (value !== '') {
            resolve();
          } else {
            resolve('You need to select Processing Type');
          }
        });
      }
    })
  }

  basicSwal2() {
    Swal.fire({
      title: 'Similar Product',
      // input: 'select',
      html:'<div class="row"><div class="col-md-6" style="margin-bottom:15px;text-align:left;"><input type="checkbox"> Type   </div>' +
      '<div class="col-md-6" style="margin-bottom:15px;text-align:left;"><input type="checkbox"> Category   </div>' +
      '<div class="col-md-6" style="margin-bottom:15px;text-align:left;"><input type="checkbox"> Shape   </div>' +
      '<div class="col-md-6" style="margin-bottom:15px;text-align:left;"><input type="checkbox"> Class   </div></div>'
    ,
      // inputOptions: {
      //   Shearing: 'Shearing',
      //   Blanking: 'Blanking',
      //   Assorting: 'Assorting',
      // },
      // inputPlaceholder: '-Select-',
      allowOutsideClick: false,
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Search',
      inputValidator(value) {
        // tslint:disable-next-line: only-arrow-functions
        return new Promise(function (resolve, reject) {
          if (value !== '') {
            resolve();
          } else {
            resolve('You need to select Processing Type');
          }
        });
      }
    })
  }
}
