import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WeighingCompany } from '../../../shared/Models/weighingCompany.model';
import { StaticDataService } from '../../../shared/services/data/staticData.service';
import { CommonService } from '../../../shared/services/http/commonService';

@Component({
  selector: 'app-create-weigh-bridge',
  templateUrl: './create-weigh-bridge.component.html',
  styleUrls: ['./create-weigh-bridge.component.scss']
})
export class CreateWeighBridgeComponent implements OnInit {

  public weighingComapnyList: WeighingCompany[];

  constructor(private productService: StaticDataService, private commonService: CommonService) { }

  weighingComapnyForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    gst: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    pincode: new FormControl('', [Validators.required])
  });

  ngOnInit() {
    this.getType();
  }

  getType() {
    this.productService.getAllWeighingCompany().subscribe(data => {
      this.weighingComapnyList = data;
    });
  }

  weighingComapnyOnSubmit() {
    if (this.weighingComapnyForm.valid) {
      this.commonService.saveWeighingCompany(this.weighingComapnyForm.value).subscribe(res => {
        this.weighingComapnyForm.reset();
        this.weighingComapnyList.push(res);
        this.productService.saveWeighingCompany(this.weighingComapnyList);
      });
    } else {
      console.log('all fields are nessessary');
    }
  }

  deleteType(weighingCompany: WeighingCompany) {
    this.commonService.deleteProductType(weighingCompany.id.toString()).subscribe(res => {
      this.weighingComapnyList = this.weighingComapnyList.filter(element => {
        return element !== weighingCompany;
      });
      this.productService.saveWeighingCompany(this.weighingComapnyList);
    });
  }

}
