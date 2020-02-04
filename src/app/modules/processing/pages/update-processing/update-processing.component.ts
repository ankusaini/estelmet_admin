import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ProcessingService } from '../../service/processing.service';

@Component({
  selector: 'app-update-processing',
  templateUrl: './update-processing.component.html',
  styleUrls: ['./update-processing.component.css']
})
export class UpdateProcessingComponent implements OnInit {
  public processingType: string = "";
  public processingList: any[];
  public processingIdList: any[];
  public selectedProcessingId: any;

  constructor(private processingService: ProcessingService) { }

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
      if(processingType !== "") {
        this.processingType = processingType.value.toString().toUpperCase();
        console.log(this.processingType);
        let url = "/inventory/productProcessing/getAllProductProcessingByProcessingTypeAndStatus/"+ this.processingType +"/APPROVED";
        console.log(url);
        this.processingService.getAllProductProcessingByProcessingTypeAndStatus(url).subscribe( data => {
          this.processingList = data;
          this.processingIdList = this.processingList.map(processing => processing.productProcessingId);
          console.log(this.processingIdList);
        });
      }
    });
  }

  getSelectedProcessingId(id) {
    console.log(id);
    this.selectedProcessingId = id;
    console.log(this.selectedProcessingId);
  }


}
