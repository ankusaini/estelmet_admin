import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SalesServiceService } from '../../services/sales-service.service';
import { CustomerOrder } from 'src/app/shared/Models/customer-order.model';
import { ids } from 'src/app/shared/Models/ids.model';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/Models/product.model.';
@Component({
  selector: 'app-search-view-co',
  templateUrl: './search-view-co.component.html',
  styleUrls: ['./search-view-co.component.scss']
})
export class SearchViewCOComponent implements OnInit {

  @ViewChild('epltable', { static: false }) epltable: ElementRef;
  public customerOrderList: CustomerOrder[];
  public Ids: any;
  public selectedList: CustomerOrder[] = [];
  public productList: Product[];

  constructor(private salesService: SalesServiceService,
    private router: Router,
    private toastr: ToastrService) {
      this.Ids = ids;
     }

  ngOnInit() {
    this.getAllCustomerOrder();

  }

  getAllCustomerOrder() {
    this.salesService.getAllCustomerOrder().subscribe( res=> {
      this.customerOrderList = res;
    });
  }

  // addToSelectedList(item) {
  //   let index : number = this.selectedList.indexOf(item);
  //   if(index == -1) {
  //     this.selectedList.push(item);
  //   } else {
  //     this.toastr.warning("Already added!");
  //   }
  // }

  // removeFromSelectedList(item) {
  //   const index: number = this.selectedList.indexOf(item);
  //   if (index !== -1) {
  //     this.selectedList.splice(index, 1);
  //   }
  // }

  getSelectedItem(item) {
    let id = item.salesId;
    console.log(id);
    this.salesService.getProductBySalesId(id).subscribe(res => {
      console.log(res);
      this.productList = res;
    })
  }

  navigateToEdit(id) {
    this.router.navigateByUrl('/sales/editCo/' + id);
  }

  }
