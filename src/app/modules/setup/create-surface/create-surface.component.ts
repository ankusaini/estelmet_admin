import { Component, OnInit } from '@angular/core';
import { StaticDataService } from 'src/app/shared/services/Data/static-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductSurfaceCoating } from 'src/app/shared/Models/product.model.';

@Component({
  selector: 'app-create-surface',
  templateUrl: './create-surface.component.html',
  styleUrls: ['./create-surface.component.scss']
})
export class CreateSurfaceComponent implements OnInit {

  productSurfaceFormGroup : FormGroup;

  productSurfaceList : ProductSurfaceCoating[];

  constructor(private productSurface : StaticDataService) {

    this.productSurfaceFormGroup = new FormGroup({
      id : new FormControl("",Validators.required),
      productSurfaceCoating : new FormControl("",Validators.required),
      description : new FormControl("",Validators.required)
    });
   }

  ngOnInit() {
    this.getSurfaceCoating();
  }

  getSurfaceCoating(){
    this.productSurface.getAllSurface().subscribe(data=>{
      this.productSurfaceList = data;
    });
  }

}
