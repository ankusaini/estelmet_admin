import { Component, OnInit } from '@angular/core';
import { StaticDataService } from 'src/app/shared/services/Data/static-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductShape } from 'src/app/shared/Models/product.model.';

@Component({
  selector: 'app-create-shape',
  templateUrl: './create-shape.component.html',
  styleUrls: ['./create-shape.component.scss']
})
export class CreateShapeComponent implements OnInit {

  productShapeFormgroup : FormGroup;

  productShapeList : ProductShape[];

  constructor(private productShape : StaticDataService) {

    this.productShapeFormgroup = new FormGroup({
      id : new FormControl("",Validators.required),
    productShape : new FormControl("",Validators.required),
    description : new FormControl("",Validators.required),
    parentId : new FormControl("",Validators.required)
    });
   }

  ngOnInit() {
    this.getShape();
  }

  getShape(){
    this.productShape.getProductShape().subscribe(data=>{
      this.productShapeList = data ;
    })
  }

}
