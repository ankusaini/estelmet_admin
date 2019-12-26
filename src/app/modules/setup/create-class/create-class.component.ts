import { Component, OnInit } from '@angular/core';
import { StaticDataService } from 'src/app/shared/services/Data/static-data.service';
import { ProductClass } from 'src/app/shared/Models/product.model.';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.scss']
})
export class CreateClassComponent implements OnInit {

    producClassList : ProductClass[];

    productClassFormGroup : FormGroup;

  constructor(private productClass : StaticDataService) {

    this.productClassFormGroup = new FormGroup({
      id : new FormControl("",Validators.required),
      productClass : new FormControl(Validators.required),
      description :  new FormControl("",Validators.required)
    });

   }

  ngOnInit() {
    this.getClass();
  }

  getClass(){
    this.productClass.getProductClass().subscribe(data=>{
        this.producClassList = data;
    });
  }

}
