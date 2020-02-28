import { Component, OnInit, ViewChild } from '@angular/core';
import { WizardComponent } from 'ng2-archwizard/dist';
import { Product } from 'src/app/shared/Models/product.model.';
import { Sales } from 'src/app/shared/Models/sales.model';
import { SalesServiceService } from '../../../services/sales-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { RequestP } from 'src/app/shared/Models/RequestResponse';

@Component({
  selector: 'app-create-auction',
  templateUrl: './create-auction.component.html',
  styleUrls: ['./create-auction.component.scss']
})
export class CreateAuctionComponent implements OnInit {
  @ViewChild("wizard", {static: false}) wizard: WizardComponent;
  public productList: Product[];
  auctionIdData: Sales;
  public request: RequestP = {};

  constructor(
    private salesService: SalesServiceService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  getAuctionIdData(data) {
    console.log(data);
    this.auctionIdData = data;
    this.wizard.navigation.goToNextStep();
  }

  getSelectProductData(data) {
    this.productList = data;
    console.log(data);

    this.request.sales = this.auctionIdData;
    this.request.productList = this.productList;

    let url = "/sales/createSales";
    this.salesService.saveRequestObject(url, this.request).subscribe(
      data => {
        this.toastr.success("Record saved successfully!");
        this.router.navigateByUrl("/sales/searchAuction");
      }, error => {
        console.log(error);
      }
    );
  }

}
