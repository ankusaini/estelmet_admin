import { Component, OnInit } from '@angular/core';
import { StaticDataService } from 'src/app/shared/services/Data/static-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductHardness } from 'src/app/shared/Models/product.model.';

@Component({
  selector: 'app-create-hardness',
  templateUrl: './create-hardness.component.html',
  styleUrls: ['./create-hardness.component.scss']
})
export class CreateHardnessComponent implements OnInit {

  productHardnessFormGroup : FormGroup;
  productHardnessList : ProductHardness[];
  constructor(private productHardness:StaticDataService) { 
    this.productHardnessFormGroup =new FormGroup({
      id : new FormControl("",Validators.required),
    productHardness : new FormControl("",Validators.required),
    description : new FormControl("",Validators.required)
    });
  }

  ngOnInit() {
    this.getHardness();
  }

  getHardness(){
    this.productHardness.getAllHardness().subscribe(data=>{
      this.productHardnessList = data;
      console.log(this.productHardness);
    });
  }
}
