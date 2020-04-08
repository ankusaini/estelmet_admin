import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ProcessingService } from '../../service/processing.service';

@Component({
  selector: 'app-search-processing',
  templateUrl: './search-processing.component.html',
  styleUrls: ['./search-processing.component.css']
})
export class SearchProcessingComponent implements OnInit {
  public processingType: string;
  public selectedProcessingList: any[];
  public productProcessingList: any[];


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
      confirmButtonText: 'Search',
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
      if (processingType !== '') {
        this.processingType = processingType.value.toString().toUpperCase();
        const url = '/inventory/productProcessing/getAllProductProcessingByProcessingTypeAndStatus/' + this.processingType + '/APPROVED';
        this.processingService.getAllProductProcessingByProcessingTypeAndStatus(url).subscribe(data => {
          this.productProcessingList = data;
        }, error => {
          console.log(error);
        });
      }
    });

  }

  getSelectedProductList(processingList: any[]) {
    this.selectedProcessingList = processingList;
    console.log('selected list in serach: ', this.selectedProcessingList);
  }

}
