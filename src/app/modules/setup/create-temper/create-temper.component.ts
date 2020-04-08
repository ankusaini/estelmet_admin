import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductTemper } from 'src/app/shared/Models/product.model.';
import { StaticDataService } from 'src/app/shared/services/data/staticData.service';
import { CommonService } from 'src/app/shared/services/http/commonService';

@Component({
  selector: 'app-create-temper',
  templateUrl: './create-temper.component.html',
  styleUrls: ['./create-temper.component.scss']
})
export class CreateTemperComponent implements OnInit {

  productTemperList: ProductTemper[];
  productTemperFormGroup: FormGroup;

  constructor(private productTemper: StaticDataService, private commonService: CommonService) {

    this.productTemperFormGroup = new FormGroup({
      id: new FormControl(''),
      productTemper: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
      // parentId: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.getTemper();
  }

  getTemper() {
    this.productTemper.getProductTempor().subscribe(data => {
      this.productTemperList = data;
    });
  }

  saveTemper() {
    console.log(this.productTemperFormGroup);
    if (this.productTemperFormGroup.valid) {
      this.commonService.saveProductTemper(this.productTemperFormGroup.value).subscribe(res => {
        this.productTemperFormGroup.reset();
        this.productTemperList.push(res);
        this.productTemper.saveProductTempor(this.productTemperList);
      });
    } else {
      console.log('all fields are nessessary');
    }
  }

  deleteTemper(productTemper: ProductTemper) {
    this.commonService.deleteProductTemper(productTemper.id.toString()).subscribe(res => {
      this.productTemperList = this.productTemperList.filter(element => {
        return element !== productTemper;
      });
      this.productTemper.saveProductTempor(this.productTemperList);
    });
  }

}
