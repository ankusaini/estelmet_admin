import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductOrigin } from 'src/app/shared/Models/product.model.';
import { StaticDataService } from 'src/app/shared/services/data/staticData.service';
import { CommonService } from 'src/app/shared/services/http/commonService';

@Component({
  selector: 'app-create-origin',
  templateUrl: './create-origin.component.html',
  styleUrls: ['./create-origin.component.scss']
})
export class CreateOriginComponent implements OnInit {

  productOriginFormGroup: FormGroup;
  productOriginList: ProductOrigin[];

  constructor(private productOrigin: StaticDataService, private commonService: CommonService) {

    this.productOriginFormGroup = new FormGroup({
      productOrigin: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.getOrigin();
  }

  getOrigin() {
    this.productOrigin.getAllOrigin().subscribe(data => {
      this.productOriginList = data;
    });
  }

  saveOrigin() {
    if (this.productOriginFormGroup.valid) {
      this.commonService.saveProductOrigin(this.productOriginFormGroup.value).subscribe(res => {
        this.productOriginList.push(res);
        this.productOrigin.saveProductOrigin(this.productOriginList);
      });
    } else {
      console.log('All fields are necessary');
    }
  }

  deleteCoating(productOrigin: ProductOrigin) {
    this.commonService.deleteProductOrigin(productOrigin.id.toString()).subscribe(res => {
      this.productOriginList = this.productOriginList.filter(element => {
        return element !== productOrigin;
      });
      this.productOrigin.saveProductOrigin(this.productOriginList);
    });
  }

}
