import { Component, OnInit } from '@angular/core';
import { StaticDataService } from 'src/app/shared/services/Data/static-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductOiling } from 'src/app/shared/Models/product.model.';

@Component({
  selector: 'app-create-oiling',
  templateUrl: './create-oiling.component.html',
  styleUrls: ['./create-oiling.component.scss']
})
export class CreateOilingComponent implements OnInit {

  productOilingFormGroup : FormGroup;

  productOilingList : ProductOiling[];

  constructor(private productOiling : StaticDataService) {

    this.productOilingFormGroup = new FormGroup({

      id : new FormControl("",Validators.required),
    productOiling : new FormControl("",Validators.required),
    description : new FormControl("",Validators.required)

    });
   }

  ngOnInit() {
    this.getOiling();
  }

  getOiling(){
    this.productOiling.getAllProductOiling().subscribe(data=>{
      this.productOilingList = data;
    });
  }

}
