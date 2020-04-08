import { Component, OnInit } from '@angular/core';
import { StaticDataService } from 'src/app/shared/services/data/staticData.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductDefect } from 'src/app/shared/Models/product.model.';
import { CommonService } from 'src/app/shared/services/http/commonService';

@Component({
  selector: 'app-create-defect',
  templateUrl: './create-defect.component.html',
  styleUrls: ['./create-defect.component.scss']
})
export class CreateDefectComponent implements OnInit {

  producDefectFormGroup: FormGroup;
  producDefectList: ProductDefect[];
  constructor(private producDefect: StaticDataService, private commonService: CommonService) {
    this.producDefectFormGroup = new FormGroup({
      productDefect: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.getProductDefect();
  }

  getProductDefect() {
    this.producDefect.getAllDefect().subscribe(data => {
      this.producDefectList = data;
    });
  }

  saveProductDefect() {
    if (this.producDefectFormGroup.valid) {
      this.commonService.saveProductDefect(this.producDefectFormGroup.value).subscribe(res => {
        this.producDefectFormGroup.reset();
        this.producDefectList.push(res);
        this.producDefect.saveProductDefect(this.producDefectList);
      });
    } else {
      console.log('All fields are necessary.');
    }
  }

  deleteDefect(productDefect: ProductDefect) {
    this.commonService.deleteProductDefect(productDefect.id.toString()).subscribe(res => {
      this.producDefectList = this.producDefectList.filter(element => {
        return element !== productDefect;
      });
      this.producDefect.saveProductDefect(this.producDefectList);
    });
  }
}
