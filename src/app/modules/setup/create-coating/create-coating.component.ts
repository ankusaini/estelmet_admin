import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductCoating } from 'src/app/shared/Models/product.model.';
import { StaticDataService } from 'src/app/shared/services/data/staticData.service';
import { CommonService } from 'src/app/shared/services/http/commonService';

@Component({
  selector: 'app-create-coating',
  templateUrl: './create-coating.component.html',
  styleUrls: ['./create-coating.component.scss']
})
export class CreateCoatingComponent implements OnInit {

  productCoatingFormGroup: FormGroup;
  productCoatingList: ProductCoating[];

  constructor(private productCoating: StaticDataService, private commonService: CommonService) {
    this.productCoatingFormGroup = new FormGroup({
      productCoating: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.getCoating();
  }

  getCoating() {
    this.productCoating.getAllProductCoating().subscribe(data => {
      this.productCoatingList = data;
    });
  }

  saveCoating() {
    if (this.productCoatingFormGroup.valid) {
      this.commonService.saveProductCoatiing(this.productCoatingFormGroup.value).subscribe(res => {
        this.productCoatingFormGroup.reset();
        this.productCoatingList.push(res);
        this.productCoating.saveProductCoating(this.productCoatingList);
      });
    } else {
      console.log('all fields are nessessary');
    }
  }

  deleteCoating(productCoating: ProductCoating) {
    this.commonService.deleteProductCoatiing(productCoating.id.toString()).subscribe(res => {
      this.productCoatingList = this.productCoatingList.filter(element => {
        return element !== productCoating;
      });
      this.productCoating.saveProductCoating(this.productCoatingList);
    });
  }

}
