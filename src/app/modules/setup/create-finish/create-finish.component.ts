import { Component, OnInit } from '@angular/core';
import { StaticDataService } from 'src/app/shared/services/Data/static-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductFinish } from 'src/app/shared/Models/product.model.';

@Component({
  selector: 'app-create-finish',
  templateUrl: './create-finish.component.html',
  styleUrls: ['./create-finish.component.scss']
})
export class CreateFinishComponent implements OnInit {

  productFinishFormGroup : FormGroup;
  productFinishList:ProductFinish[];
  constructor(private productFinish:StaticDataService) {
    this.productFinishFormGroup = new FormGroup({
      id : new FormControl("",Validators.required),
      productFinish : new FormControl("",Validators.required),
      description : new FormControl("",Validators.required)
    });
   }

  ngOnInit() {
    this.getFinish();
  }

  getFinish(){
    this.productFinish.getAllFinish().subscribe(data=>{
      this.productFinishList = data;
    });
  }
}
