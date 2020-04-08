import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DispatchService } from 'src/app/modules/dispatch/services/dispatch.service';
import { RequestP } from 'src/app/shared/Models/RequestResponse';
import { DeliveryOrder } from 'src/app/shared/Models/sales.model';

@Component({
  selector: 'app-do-approval',
  templateUrl: './do-approval.component.html',
  styleUrls: ['./do-approval.component.css']
})
export class DoApprovalComponent implements OnInit {
  public datalist: any;
  selectedTab = 'PENDING';
  public request: RequestP = {};

  public approvedDeliveryOrderlist: DeliveryOrder[] = [];
  public rejecetdDeliveryOrderlist: DeliveryOrder[] = [];
  public pendingDeliveryOrderlist: DeliveryOrder[] = [];

  public selectdeliveryOrderList: DeliveryOrder[] = [];

  constructor(
    private dispatchService: DispatchService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getDOByStatus('APPROVED');
    this.getDOByStatus('PENDING');
    this.getDOByStatus('REJECTED');
  }

  getDOByStatus(status) {
    const url = '/sales/getAllDeliveryOrderByStatus/' + status;

    this.dispatchService.getAllDeliveryOrderByStatus(url).subscribe(
      data => {
        this.datalist = data;
        if (status === 'PENDING') {
          this.pendingDeliveryOrderlist = this.datalist.deliveryOrderList;
        }
        if (status === 'APPROVED') {
          this.approvedDeliveryOrderlist = this.datalist.deliveryOrderList;
        }
        if (status === 'REJECTED') {
          this.rejecetdDeliveryOrderlist = this.datalist.deliveryOrderList;
        }
      },
      error => { }
    );
  }

  onTabChange(tab) {

    if (tab && tab.nextId === 'rejectedTab') {
      this.selectedTab = 'REJECTED';
    }
    if (tab && tab.nextId === 'pendingTab') {
      this.selectedTab = 'PENDING';
    }
    if (tab && tab.nextId === 'approvedTab') {
      this.selectedTab = 'APPROVED';
    }
    this.selectdeliveryOrderList = [];
  }

  addDOToList(mr) {
    const index: number = this.selectdeliveryOrderList.indexOf(mr);
    if (index === -1) {
      this.selectdeliveryOrderList.push(mr);
    } else {
      this.toastr.error('Already added');

    }
  }

  removeSelectedDO(mr) {
    const index: number = this.selectdeliveryOrderList.indexOf(mr);
    if (index !== -1) {
      this.selectdeliveryOrderList.splice(index, 1);
    }
  }

  changeStatusOfSelectedDO(status) {
    if (this.selectdeliveryOrderList.length === 0) {
      this.toastr.warning('select at least one record');
    } else {
      const path = '/sales/updateSales';

      this.selectdeliveryOrderList.forEach(delivery => {
        delivery.status = status;
        this.request.deliveryOrder = delivery;
        this.dispatchService.updateRequestObject(path, this.request).subscribe(
          () => {
            this.getDOByStatus('APPROVED');
            this.getDOByStatus('PENDING');
            this.getDOByStatus('REJECTED');
            this.selectdeliveryOrderList = [];
          },
        );
        this.toastr.success('Record successfully saved');
      });
    }

  }
}
