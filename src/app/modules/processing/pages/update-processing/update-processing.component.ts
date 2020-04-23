import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { ProcessingService } from '../../service/processing.service';
import { Router } from '@angular/router';
import { WizardComponent } from 'ng2-archwizard/dist';
import { Product } from 'src/app/shared/Models/product.model.';

@Component({
  selector: 'app-update-processing',
  templateUrl: './update-processing.component.html',
  styleUrls: ['./update-processing.component.css']
})
export class UpdateProcessingComponent implements OnInit {
  @ViewChild('wizard', {static: false}) wizard: WizardComponent;
  public processingType: string = "";
  public processingList: any[];
  public processingIdList: any[];
  public selectedProcessingId: any;
  public selectedProductList: Product[] = [];

  constructor(
    private router: Router,
    private processingService: ProcessingService) { }

  ngOnInit() {
    this.basicSwal();
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
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Select',
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
      if(processingType.value) {
        this.processingType = processingType.value.toString().toUpperCase();
        console.log(this.processingType);
        let url = "/inventory/productProcessing/getAllProductProcessingByProcessingTypeAndStatus/"+ this.processingType +"/APPROVED";
        console.log(url);
        this.processingService.getAllProductProcessingByProcessingTypeAndStatus(url).subscribe( data => {
          this.processingList = data;
          this.processingIdList = this.processingList.map(processing => processing.productProcessingId);
          console.log(this.processingIdList);
        });
      } else if(processingType.dismiss === Swal.DismissReason.cancel){
        console.log("dismiss Called");
        this.router.navigate(['/dashboard/default']);
      }
    });
  }

  getSelectedProcessingId(id) {
    console.log(id);
    this.selectedProcessingId = id;
    console.log(this.selectedProcessingId);
    this.wizard.navigation.goToNextStep();
  }


  getProductData(data) {
    console.log(data);
    this.selectedProductList.push(data);
    console.log(this.selectedProductList);
  }

  submitProcessing() {
    console.log(this.selectedProductList);
  }
}
