import { Component, OnInit } from '@angular/core';
import { StaticDataService } from 'src/app/shared/services/Data/static-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductSurfaceCoating, ProductCoating } from 'src/app/shared/Models/product.model.';

@Component({
  selector: 'app-create-coating',
  templateUrl: './create-coating.component.html',
  styleUrls: ['./create-coating.component.scss']
})
export class CreateCoatingComponent implements OnInit {

  productCoatingFormGroup : FormGroup;
  productCoatingList : ProductCoating[];

  constructor(private productCoating : StaticDataService) { 
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

}
