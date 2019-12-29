import { Component, OnInit } from '@angular/core';
import { StaticDataService } from 'src/app/shared/services/Data/static-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductAnnealing } from 'src/app/shared/Models/product.model.';

@Component({
  selector: 'app-create-annealing',
  templateUrl: './create-annealing.component.html',
  styleUrls: ['./create-annealing.component.scss']
})
export class CreateAnnealingComponent implements OnInit {

  productAnnaelingFormGroup : FormGroup;
  productAnnealingList: ProductAnnealing[];
  constructor(private productAnneling : StaticDataService) {

    this.productAnnaelingFormGroup = new FormGroup({
      id : new FormControl("",Validators.required),
    productAnnealing : new FormControl("",Validators.required),
    description : new FormControl(Validators.required)
    });
   }

  ngOnInit() {
    this.getAnnealing();
  }

  getAnnealing(){
    this.productAnneling.getAllAnnealing().subscribe(data=>{
      this.productAnnealingList = data;
    });
  }
}
