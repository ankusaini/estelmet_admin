import { Component, OnInit } from '@angular/core';
import { FormInput } from './create-processing-form-model';
import Swal from 'sweetalert2';
import { ProcessingService } from '../../service/processing.service';
import { Product } from 'src/app/shared/Models/product.model.';
import { Processing } from "src/app/shared/Models/processing.model";

@Component({
  selector: 'app-create-processing',
  templateUrl: './create-processing.component.html',
  styleUrls: ['./create-processing.component.css']
})
export class CreateProcessingComponent implements OnInit {
  showGroup = true;
  public isSubmit: boolean;
  processingType: string = "";
  public ProductList: Product[];

  private processing:Processing;

  // formInput: FormInput;
  // public maskIP = [/\d/, '.', /\d/, /\d/];


  constructor(private processingService: ProcessingService) {
    this.isSubmit = false;
   }
  ngOnInit() {

    this.basicSwal();

    let url = "/inventory/getAllProductByProductStageAndStatus/ACTIVE/APPROVED";
    this.processingService.getAllProductByProductStageAndStatus(url).subscribe(data => {
      this.ProductList = data;
      console.log(this.ProductList);
    });
  }
  basicSwal() {
    Swal.fire({
      title: 'Processing Type!',
      input: 'select',
      inputOptions: {
        Shearing: 'Shearing',
        Blanking: 'Blanking',
        Assorting: 'Assorting',
      },
      inputPlaceholder: '-Select-',
      allowOutsideClick: false,
      confirmButtonText: 'Create',
      inputValidator(value) {
        // tslint:disable-next-line: only-arrow-functions
        return new Promise(function (resolve, reject) {
          if (value !== '') {
            resolve();
          } else {
            resolve('You need to select Processing Type');
          }
        });
      }
    }).then(processingType => {
      if(processingType != "") {
        this.processingType = processingType.value.toString().toUpperCase();
        console.log('processingType: '+ this.processingType);
      }
    });
  }
  // save(form: any) {
  //   if (!form.valid) {
  //     this.isSubmit = true;
  //     return;
  //   }
  //   alert('success');
  // }

  getSelectMrData(data) {
    console.log("in search: ", data);
    this.processing=data;
    console.log("inside MR",this.processing)
  }
}
