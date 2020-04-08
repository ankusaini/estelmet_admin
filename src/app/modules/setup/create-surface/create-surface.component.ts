import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductSurfaceCoating } from 'src/app/shared/Models/product.model.';
import { StaticDataService } from 'src/app/shared/services/data/staticData.service';
import { CommonService } from 'src/app/shared/services/http/commonService';

@Component({
  selector: 'app-create-surface',
  templateUrl: './create-surface.component.html',
  styleUrls: ['./create-surface.component.scss']
})
export class CreateSurfaceComponent implements OnInit {

  productSurfaceFormGroup: FormGroup;

  productSurfaceList: ProductSurfaceCoating[];

  constructor(private productSurface: StaticDataService, private commonSurface: CommonService) {

    this.productSurfaceFormGroup = new FormGroup({
      productSurfaceCoating: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.getSurfaceCoating();
  }

  getSurfaceCoating() {
    this.productSurface.getAllSurface().subscribe(data => {
      this.productSurfaceList = data;
    });
  }

  saveSurfaceCoating() {
    if (this.productSurfaceFormGroup.valid) {
      this.commonSurface.saveProductSurface(this.productSurfaceFormGroup.value).subscribe(res => {
        this.productSurfaceList.push(res);
        this.productSurfaceFormGroup.reset();
        this.productSurface.saveProductSurface(this.productSurfaceList);
      });
    } else {
      console.log('All fields are necessary');
    }
  }

  deleteSurface(productSurface: ProductSurfaceCoating) {
    this.commonSurface.deleteProductSurface(productSurface.id.toString()).subscribe(res => {
      this.productSurfaceList = this.productSurfaceList.filter(element => {
        return element !== productSurface;
      });
      this.productSurface.saveProductSurface(this.productSurfaceList);
    });
  }

}
