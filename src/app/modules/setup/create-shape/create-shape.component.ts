import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductShape } from 'src/app/shared/Models/product.model.';
import { StaticDataService } from 'src/app/shared/services/data/staticData.service';
import { CommonService } from 'src/app/shared/services/http/commonService';

@Component({
  selector: 'app-create-shape',
  templateUrl: './create-shape.component.html',
  styleUrls: ['./create-shape.component.scss']
})
export class CreateShapeComponent implements OnInit {

  productShapeFormgroup: FormGroup;

  productShapeList: ProductShape[];

  constructor(private productShape: StaticDataService, private commonService: CommonService) {

    this.productShapeFormgroup = new FormGroup({
      id: new FormControl(''),
      productShape: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      // parentId: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.getShape();
  }

  getShape() {
    this.productShape.getProductShape().subscribe(data => {
      this.productShapeList = data;
    });
  }

  saveShape() {
    console.log(this.productShapeFormgroup);
    if (this.productShapeFormgroup.valid) {
      this.commonService.saveProductShape(this.productShapeFormgroup.value).subscribe(res => {
        this.productShapeFormgroup.reset();
        this.productShapeList.push(res);
        this.productShape.saveProductShape(this.productShapeList);
      });
    } else {
      console.log('all fields are nessessary');
    }
  }

  deleteShape(productShape: ProductShape) {
    this.commonService.deleteProductShape(productShape.id.toString()).subscribe(res => {
      this.productShapeList = this.productShapeList.filter(element => {
        return element !== productShape;
      });
      this.productShape.saveProductShape(this.productShapeList);
    });
  }

}
