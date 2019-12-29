import { Component, OnInit } from '@angular/core';
import { StaticDataService } from 'src/app/shared/services/Data/static-data.service';
import { ProductTemper } from 'src/app/shared/Models/product.model.';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-temper',
  templateUrl: './create-temper.component.html',
  styleUrls: ['./create-temper.component.scss']
})
export class CreateTemperComponent implements OnInit {

  productTemperList : ProductTemper[];
  productTemperFormGroup : FormGroup;

  constructor(private ProductTemper : StaticDataService) {

    this.productTemperFormGroup = new FormGroup({
       id : new FormControl("",Validators.required),
       productTemper : new FormControl("",Validators.required),
       description :  new FormControl("",Validators.required)
    });
   }

  ngOnInit() {
    this.getTemper();
  }

  getTemper(){
    this.ProductTemper.getProductTempor().subscribe(data=>{
      this.productTemperList = data;
    });
  }

}
