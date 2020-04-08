import { Component, OnInit } from '@angular/core';
import { Company } from '../../../shared/Models/company.model.';
import { StaticDataService } from '../../../shared/services/data/staticData.service';
import { CommonService } from '../../../shared/services/http/commonService';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent implements OnInit {

  public comapnyList: Company[];

  constructor(private productService: StaticDataService, private commonService: CommonService) { }

  comapnyForm = new FormGroup({
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
    this.productService.getAllCompany().subscribe(data => {
      this.comapnyList = data;
    });
  }

  weighingComapnyOnSubmit() {
    if (this.comapnyForm.valid) {
      this.commonService.saveCompany(this.comapnyForm.value).subscribe(res => {
        this.comapnyForm.reset();
        this.comapnyList.push(res);
        this.productService.saveCompany(this.comapnyList);
      });
    } else {
      console.log('all fields are nessessary');
    }
  }

  deleteType(company: Company) {
    this.commonService.deleteCompany(company.id.toString()).subscribe(res => {
      this.comapnyList = this.comapnyList.filter(element => {
        return element !== company;
      });
      this.productService.saveCompany(this.comapnyList);
    });
  }
}
