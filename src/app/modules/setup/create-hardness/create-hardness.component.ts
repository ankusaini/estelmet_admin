import { Component, OnInit } from '@angular/core';
import { StaticDataService } from 'src/app/shared/services/Data/static-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductHardness } from 'src/app/shared/Models/product.model.';
import { CommonService } from 'src/app/shared/services/http/commonService';

@Component({
  selector: 'app-create-hardness',
  templateUrl: './create-hardness.component.html',
  styleUrls: ['./create-hardness.component.scss']
})
export class CreateHardnessComponent implements OnInit {

  productHardnessFormGroup : FormGroup;
  productHardnessList : ProductHardness[];
  constructor(private productHardness:StaticDataService,private _commonService : CommonService) { 
    this.productHardnessFormGroup =new FormGroup({
      id : new FormControl(""),
    productHardness : new FormControl("",Validators.required),
    description : new FormControl("",Validators.required),
    parentId : new FormControl("",Validators.required)
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

  saveHardness(){
    if(this.productHardnessFormGroup.valid){
      this._commonService.saveProductHardness(this.productHardnessFormGroup.value).subscribe(res=>{
        this.productHardnessList.push(res);
        this.productHardness.saveProductHardness(this.productHardnessList);
      });
    }else{
      console.log("ALl fields are necessary")
    }
  }

  deleteHardness(productHardness : ProductHardness){
    this._commonService.deleteProductHardness(productHardness.id.toString()).subscribe(res=>{
      this.productHardnessList = this.productHardnessList.filter(element => {
        return element!=productHardness
      });
      this.productHardness.saveProductHardness(this.productHardnessList);
    });
  }

}
