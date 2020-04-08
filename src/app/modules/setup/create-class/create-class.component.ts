import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductClass } from 'src/app/shared/Models/product.model.';
import { StaticDataService } from 'src/app/shared/services/data/staticData.service';
import { CommonService } from 'src/app/shared/services/http/commonService';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.scss']
})
export class CreateClassComponent implements OnInit {

  producClassList: ProductClass[];

  productClassFormGroup: FormGroup;

  constructor(
    private productClass: StaticDataService,
    private commonService: CommonService
  ) {

    this.productClassFormGroup = new FormGroup({
      id: new FormControl(''),
      productClass: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });

  }

  ngOnInit() {
    this.getClass();
  }

  getClass() {
    this.productClass.getProductClass().subscribe(data => {
      this.producClassList = data;
    });
  }

  addClass() {
    console.log(this.productClassFormGroup.value);
    if (this.productClassFormGroup.valid) {
      this.commonService.saveProductClass(this.productClassFormGroup.value).subscribe(res => {
        this.productClassFormGroup.reset();
        this.producClassList.push(res);
        this.productClass.saveProductClass(this.producClassList);
      });
    } else {
      console.log('all fields are nessessary');
    }
  }

  deleteClass(productShape: ProductClass) {
    this.commonService.deleteProductClass(productShape.id.toString()).subscribe(res => {
      this.producClassList = this.producClassList.filter(element => {
        return element !== productShape;
      });
      this.productClass.saveProductClass(this.producClassList);
    });
  }

}
