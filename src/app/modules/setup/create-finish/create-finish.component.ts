import { Component, OnInit } from '@angular/core';
import { StaticDataService } from 'src/app/shared/services/data/staticData.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductFinish } from 'src/app/shared/Models/product.model.';
import { CommonService } from 'src/app/shared/services/http/commonService';

@Component({
  selector: 'app-create-finish',
  templateUrl: './create-finish.component.html',
  styleUrls: ['./create-finish.component.scss']
})
export class CreateFinishComponent implements OnInit {

  productFinishFormGroup: FormGroup;
  productFinishList: ProductFinish[];
  constructor(private productFinish: StaticDataService, private commonService: CommonService) {
    this.productFinishFormGroup = new FormGroup({
      productFinish: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.getFinish();
  }

  getFinish() {
    this.productFinish.getAllFinish().subscribe(data => {
      this.productFinishList = data;
    });
  }
  saveFinish() {
    if (this.productFinishFormGroup.valid) {
      this.commonService.saveProductFinish(this.productFinishFormGroup.value).subscribe(res => {
        this.productFinishList.push(res);
        this.productFinishFormGroup.reset();
        this.productFinish.saveProductFinish(this.productFinishList);
      });
    } else {
      console.log('All fields are necessary');
    }
  }

  deleteFinish(productFinish: ProductFinish) {
    this.commonService.deleteProductFinish(productFinish.id.toString()).subscribe(res => {
      this.productFinishList = this.productFinishList.filter(element => {
        return element !== productFinish;
      });
      this.productFinish.saveProductFinish(this.productFinishList);
    });
  }

}
