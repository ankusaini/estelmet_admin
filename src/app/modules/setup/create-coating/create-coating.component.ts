import { Component, OnInit } from '@angular/core';
import { StaticDataService } from 'src/app/shared/services/Data/static-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductSurfaceCoating, ProductCoating } from 'src/app/shared/Models/product.model.';
import { CommonService } from 'src/app/shared/services/http/commonService';

@Component({
  selector: 'app-create-coating',
  templateUrl: './create-coating.component.html',
  styleUrls: ['./create-coating.component.scss']
})
export class CreateCoatingComponent implements OnInit {

  productCoatingFormGroup : FormGroup;
  productCoatingList : ProductCoating[];

  constructor(private productCoating : StaticDataService,private _commonService:CommonService) { 
    this.productCoatingFormGroup = new FormGroup({
      id : new FormControl("",Validators.required),
      productCoating : new FormControl("",Validators.required),
      description : new FormControl("",Validators.required)
      
    });
  }

  ngOnInit() {
    this.getCoating();
  }

  getCoating(){
    this.productCoating.getAllProductCoating().subscribe(data=>{
      this.productCoatingList = data;
    });
  }

  saveCoating(){
    console.log(this.productCoatingFormGroup);
    if(this.productCoatingFormGroup.valid) {
     // this.productTypeForm.reset();
      this._commonService.saveProductCoatiing(this.productCoatingFormGroup.value).subscribe(res=>{
        console.log(res);
        this.productCoatingList.push(res);
        this.productCoating.saveProductCoating(this.productCoatingList);
      });
    } else {
      console.log('all fields are nessessary');
    }
  }

  deleteCoating(productCoating : ProductCoating){
    this._commonService.deleteProductCoatiing(productCoating.id.toString()).subscribe(res=>{
      this.productCoatingList = this.productCoatingList.filter(element => {
        return element!=productCoating
      });
      this.productCoating.saveProductCoating(this.productCoatingList);
    });
  }

}
