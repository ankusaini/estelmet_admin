import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search-view-group',
  templateUrl: './search-view-group.component.html',
  styleUrls: ['./search-view-group.component.css']
})
export class SearchViewGroupComponent implements OnInit {

  constructor() { 
    this.basicSwal();
  }

  ngOnInit() {

  }
  basicSwal() {
    Swal.fire({
      title: 'Select Group Type',
      input: 'select',
      inputOptions: {
        Customer: 'Customer Group',
        Supplier: 'Supplier Group',
        Agent: 'Agent Group',
        Contractor: 'Contractor Group',
        Transporter: 'Transporter Group'
      },
      inputPlaceholder: 'Select Group Type',
      allowOutsideClick: false,
      confirmButtonText: 'Search',
      inputValidator(value) {
        // tslint:disable-next-line: only-arrow-functions
        return new Promise(function(resolve, reject) {
          if (value !== '') {
            resolve();
          } else {
            resolve('You need to select user group type');
          }
        });
      }
    });
  }
}
