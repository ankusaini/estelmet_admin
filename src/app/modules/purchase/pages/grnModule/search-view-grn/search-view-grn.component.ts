import { Component, OnInit } from '@angular/core';
import { Grn } from 'src/app/shared/Models/purchase.model';
import { PurchaseService } from '../../../services/purchase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-view-grn',
  templateUrl: './search-view-grn.component.html',
  styleUrls: ['./search-view-grn.component.scss']
})
export class SearchViewGrnComponent implements OnInit {
  grnData: any;
  grnList: Grn[];
  selectedGrnList: Grn[] =[]; 


  constructor(private purchaseService: PurchaseService,
              private router: Router) { }

  ngOnInit() {
    let url = "/purchase/getAllGrn";
    this.purchaseService.getAllPurchaseByTypeAndStatus(url).subscribe(data => {
      this.grnData = data;
      this.grnList = this.grnData.grnList;
      console.log("list is: "+ this.grnList);
    },
    error => {}
    );
  }

  addToSelectedList(grn) {
    console.log(grn);
    const index: number = this.selectedGrnList.indexOf(grn);
    if (index === -1) {
      this.selectedGrnList.push(grn);
    } else {
      alert("already added");
    }
  }

  removeFromSelectedList(grn) {
    console.log(grn);
    const index: number = this.selectedGrnList.indexOf(grn);
    if (index !== -1) {
      this.selectedGrnList.splice(index, 1);
    }
  }

  navigateToEdit(id) {
    // alert(id);
    this.router.navigateByUrl("/purchase/grnEdit/" + id);
  }

}
