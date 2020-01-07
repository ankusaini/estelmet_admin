import { Component, OnInit } from '@angular/core';
import { StaticDataService } from 'src/app/shared/services/Data/static-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductAnnealing } from 'src/app/shared/Models/product.model.';
import { CommonService } from 'src/app/shared/services/http/commonService';

@Component({
  selector: 'app-create-annealing',
  templateUrl: './create-annealing.component.html',
  styleUrls: ['./create-annealing.component.scss']
})
export class CreateAnnealingComponent implements OnInit {

  productAnnaelingFormGroup : FormGroup;
  productAnnealingList: ProductAnnealing[];
  constructor(private productAnneling : StaticDataService,private _commonService : CommonService) {

    this.productAnnaelingFormGroup = new FormGroup({
      id : new FormControl(Validators.required),
    productAnnealing : new FormControl("",Validators.required),
    description : new FormControl("",Validators.required),
    parentId : new FormControl("",Validators.required)
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

  saveAnnealing(){
    if(this.productAnnaelingFormGroup.valid){
      this._commonService.saveProductAnnealing(this.productAnnaelingFormGroup.value).subscribe(res=>{
        this.productAnnealingList.push(res);
        this.productAnneling.saveProductAnnealing(this.productAnnealingList);
      });
    }else{
      console.log("All fields are necessary");
    }
  }

  deleteAnnealing(productAnnealing : ProductAnnealing){
    this._commonService.deleteProductAnnealing(productAnnealing.id.toString()).subscribe(res=>{
      this.productAnnealingList = this.productAnnealingList.filter(element => {
        return element!=productAnnealing
      });
      this.productAnneling.saveProductAnnealing(this.productAnnealingList);
    });
  }
}
