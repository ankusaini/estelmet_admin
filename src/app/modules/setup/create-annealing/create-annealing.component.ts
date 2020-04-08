import { Component, OnInit } from '@angular/core';
import { StaticDataService } from 'src/app/shared/services/data/staticData.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductAnnealing } from 'src/app/shared/Models/product.model.';
import { CommonService } from 'src/app/shared/services/http/commonService';

@Component({
  selector: 'app-create-annealing',
  templateUrl: './create-annealing.component.html',
  styleUrls: ['./create-annealing.component.scss']
})
export class CreateAnnealingComponent implements OnInit {

  productAnnaelingFormGroup: FormGroup;
  productAnnealingList: ProductAnnealing[];

  constructor(private productAnneling: StaticDataService, private commonService: CommonService) {
    this.productAnnaelingFormGroup = new FormGroup({
      productAnnealing: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.getAnnealing();
  }

  getAnnealing() {
    this.productAnneling.getAllAnnealing().subscribe(data => {
      this.productAnnealingList = data;
    });
  }

  saveAnnealing() {
    if (this.productAnnaelingFormGroup.valid) {
      this.commonService.saveProductAnnealing(this.productAnnaelingFormGroup.value).subscribe(res => {
        this.productAnnealingList.push(res);
        this.productAnnaelingFormGroup.reset();
        this.productAnneling.saveProductAnnealing(this.productAnnealingList);
      });
    } else {
      console.log('All fields are necessary');
    }
  }

  deleteAnnealing(productAnnealing: ProductAnnealing) {
    this.commonService.deleteProductAnnealing(productAnnealing.id.toString()).subscribe(res => {
      this.productAnnealingList = this.productAnnealingList.filter(element => {
        return element !== productAnnealing;
      });
      this.productAnneling.saveProductAnnealing(this.productAnnealingList);
    });
  }
}
