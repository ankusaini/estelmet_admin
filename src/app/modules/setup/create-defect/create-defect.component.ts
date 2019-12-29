import { Component, OnInit } from '@angular/core';
import { StaticDataService } from 'src/app/shared/services/Data/static-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductDefect } from 'src/app/shared/Models/product.model.';

@Component({
  selector: 'app-create-defect',
  templateUrl: './create-defect.component.html',
  styleUrls: ['./create-defect.component.scss']
})
export class CreateDefectComponent implements OnInit {

  producDefectFormGroup : FormGroup;
  producDefectList : ProductDefect[];
  constructor(private producDefect : StaticDataService) {
    this.producDefectFormGroup = new FormGroup({
      id : new FormControl("",Validators.required),
    productDefect : new FormControl("",Validators.required),
    description : new FormControl("",Validators.required)
    });
   }

  ngOnInit() {
    this.getProductDefect();
  }

  getProductDefect(){
    this.producDefect.getAllDefect().subscribe(data=>{
      this.producDefectList = data;
    });
  }
}
