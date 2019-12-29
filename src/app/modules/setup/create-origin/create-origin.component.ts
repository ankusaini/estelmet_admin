import { Component, OnInit } from '@angular/core';
import { StaticDataService } from 'src/app/shared/services/Data/static-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductOrigin } from 'src/app/shared/Models/product.model.';

@Component({
  selector: 'app-create-origin',
  templateUrl: './create-origin.component.html',
  styleUrls: ['./create-origin.component.scss']
})
export class CreateOriginComponent implements OnInit {

  productOriginFormGroup : FormGroup;
  productOriginList: ProductOrigin[];

  constructor(private productOrigin : StaticDataService) {

    this.productOriginFormGroup = new FormGroup({
      id : new FormControl("",Validators.required),
    productOrigin : new FormControl("",Validators.required),
    description : new FormControl("",Validators.required)
    });
   }

  ngOnInit() {
    this.getOrigin();
  }

  getOrigin(){
    this.productOrigin.getAllOrigin().subscribe(data=>{
      this.productOriginList = data;
    });
  }

}
