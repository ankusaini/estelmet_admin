import { Component, OnInit } from '@angular/core';
import { StaticDataService } from 'src/app/shared/services/Data/static-data.service';
import { ProductPackaging } from 'src/app/shared/Models/product.model.';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-packaging',
  templateUrl: './create-packaging.component.html',
  styleUrls: ['./create-packaging.component.scss']
})
export class CreatePackagingComponent implements OnInit {

  productPackagingFormGroup : FormGroup;
  productPackagingList : ProductPackaging[];
  constructor(private productPackaging : StaticDataService) { 
    this.productPackagingFormGroup = new FormGroup({
      id : new FormControl("",Validators.required),
      productPackaging : new FormControl("",Validators.required),
      description : new FormControl("",Validators.required)
    });
  }

  ngOnInit() {
    this.getPackaging();
  }

  getPackaging(){
    this.productPackaging.getAllPackaging().subscribe(data=>{
      this.productPackagingList = data;
    });
  }

}
