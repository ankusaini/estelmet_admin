import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductPackaging } from 'src/app/shared/Models/product.model.';
import { StaticDataService } from 'src/app/shared/services/data/staticData.service';
import { CommonService } from 'src/app/shared/services/http/commonService';

@Component({
  selector: 'app-create-packaging',
  templateUrl: './create-packaging.component.html',
  styleUrls: ['./create-packaging.component.scss']
})
export class CreatePackagingComponent implements OnInit {

  productPackagingFormGroup: FormGroup;
  productPackagingList: ProductPackaging[];
  constructor(private productPackaging: StaticDataService, private commonService: CommonService) {
    this.productPackagingFormGroup = new FormGroup({
      productPackaging: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.getPackaging();
  }

  getPackaging() {
    this.productPackaging.getAllPackaging().subscribe(data => {
      this.productPackagingList = data;
    });
  }

  savePackaging() {
    if (this.productPackagingFormGroup.valid) {
      this.commonService.saveProductPackaging(this.productPackagingFormGroup.value).subscribe(res => {
        this.productPackagingList.push(res);
        this.productPackagingFormGroup.reset();
        this.productPackaging.saveProductPackaging(this.productPackagingList);
      });
    } else {
      console.log('All fields are necessary');
    }
  }

  deletePackaging(productPackage: ProductPackaging) {
    this.commonService.deleteProductPackaging(productPackage.id.toString()).subscribe(res => {
      this.productPackagingList = this.productPackagingList.filter(element => {
        return element !== productPackage;
      });
      this.productPackaging.saveProductPackaging(this.productPackagingList);
    });
  }

}
