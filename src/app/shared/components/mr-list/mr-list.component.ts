import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Purchase } from 'src/app/shared/Models/purchase.model';
import { PurchaseService } from 'src/app/modules/purchase/services/purchase.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mr-list',
  templateUrl: './mr-list.component.html',
  styleUrls: ['./mr-list.component.scss']
})
export class MrListComponent implements OnInit {
  public mrList: Purchase[];
  public selectedMrId:any;
  public selectedMr: Purchase;
  @Input() component:any;
  
  @Output() selectedMrData: EventEmitter<any> = new EventEmitter<any>();

  constructor(private purchaseService: PurchaseService, private router: Router, private toastService: ToastrService) {
    this.getAllPurchaseByTypeAndStatus('MATERIAL_REQURIMENT', 'APPROVED');
  }

  ngOnInit() {
    console.log("component is",this.component);
  }

  getAllPurchaseByTypeAndStatus(type, status) {
    // const url = '/purchase/getAllPurchaseByTypeAndStatus/' + type + '/' + status;
    // console.log('url', url);
    this.purchaseService.getAllPurchaseByTypeAndStatus(type, status).subscribe(
      data => {
        console.log('data', data);
        this.mrList = data.purchaseList;
        console.log('data', this.mrList);
      },
      error => { }
    );
  }

  submitSelectMrId() {
    if (this.selectedMr) {
      this.selectedMrData.emit(this.selectedMr);
    } else {
      this.toastService.warning('Select Mr Id!');
    }
  }


  getSelectedMr(mr) {
    this.selectedMr = mr;
    this.selectedMrId='MR-'+mr.id;
    if(this.component=='po')
      {
        if (this.selectedMr) {
      this.selectedMrData.emit(this.selectedMr);
    } else {
      this.toastService.warning('Select Mr Id!');
    }
      }
    console.log('selected', mr);
  }
}
