import { Component, OnInit } from '@angular/core';
import { Warehouse } from '../../../shared/Models/warehouse';
import { StaticDataService } from '../../../shared/services/data/staticData.service';
import { CommonService } from '../../../shared/services/http/commonService';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-warehouse',
  templateUrl: './create-warehouse.component.html',
  styleUrls: ['./create-warehouse.component.scss']
})
export class CreateWarehouseComponent implements OnInit {

  public warehouseList: Warehouse[];

  constructor(private productService: StaticDataService, private commonService: CommonService) { }

  warehouseForm = new FormGroup({
    id: new FormControl(''),
    companyId: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    gst: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    pincode: new FormControl('', [Validators.required]),
    landline: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    this.getType();
  }

  getType() {
    this.productService.getAllwarehouse().subscribe(data => {
      this.warehouseList = data;
    });
  }

  weighingComapnyOnSubmit() {
    if (this.warehouseForm.valid) {
      this.commonService.saveWarehouse(this.warehouseForm.value).subscribe(res => {
        this.warehouseForm.reset();
        this.warehouseList.push(res);
        this.productService.saveWarehouse(this.warehouseList);
      });
    } else {
      console.log('all fields are nessessary');
    }
  }

  deleteType(warehouse: Warehouse) {
    this.commonService.deleteWarehouse(warehouse.id.toString()).subscribe(res => {
      this.warehouseList = this.warehouseList.filter(element => {
        return element !== warehouse;
      });
      this.productService.saveWarehouse(this.warehouseList);
    });
  }
}
