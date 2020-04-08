import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductHardness } from 'src/app/shared/Models/product.model.';
import { StaticDataService } from 'src/app/shared/services/data/staticData.service';
import { CommonService } from 'src/app/shared/services/http/commonService';

@Component({
  selector: 'app-create-hardness',
  templateUrl: './create-hardness.component.html',
  styleUrls: ['./create-hardness.component.scss']
})
export class CreateHardnessComponent implements OnInit {

  productHardnessFormGroup: FormGroup;
  productHardnessList: ProductHardness[];
  constructor(private productHardness: StaticDataService, private commonService: CommonService) {
    this.productHardnessFormGroup = new FormGroup({
      productHardness: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.getHardness();
  }

  getHardness() {
    this.productHardness.getAllHardness().subscribe(data => {
      this.productHardnessList = data;
      console.log(this.productHardness);
    });
  }

  saveHardness() {
    if (this.productHardnessFormGroup.valid) {
      this.commonService.saveProductHardness(this.productHardnessFormGroup.value).subscribe(res => {
        this.productHardnessList.push(res);
        this.productHardnessFormGroup.reset();
        this.productHardness.saveProductHardness(this.productHardnessList);
      });
    } else {
      console.log('ALl fields are necessary');
    }
  }

  deleteHardness(productHardness: ProductHardness) {
    this.commonService.deleteProductHardness(productHardness.id.toString()).subscribe(res => {
      this.productHardnessList = this.productHardnessList.filter(element => {
        return element !== productHardness;
      });
      this.productHardness.saveProductHardness(this.productHardnessList);
    });
  }

}
