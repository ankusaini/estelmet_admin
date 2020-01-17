import { Component, OnInit } from '@angular/core';
import { Purchase } from "src/app/shared/Models/purchase.model";
import { PurchaseService } from "src/app/modules/purchase/services/purchase.service";
import { Product } from "src/app/shared/Models/product.model.";

@Component({
  selector: "app-create-pc",
  templateUrl: "./create-pc.component.html",
  styleUrls: ["./create-pc.component.scss"]
})
export class CreatePcComponent implements OnInit {
  showData: boolean;
  public productList: Product[] = [];

  constructor(private purchaseService: PurchaseService) {}
  public selectedMr: Purchase;
  ngOnInit() {}

  getSelectedMr(data) {
    this.selectedMr = data;
    console.log("MR SELECTEd", this.selectedMr);
    this.getProductList(this.selectedMr.id);
  }

  getProductList(id) {
    let url = "/purchase/find/" + id;
    this.purchaseService.findRequstObjectById(url).subscribe(
      data => {
        this.productList = data.productList;
                console.log("product of this mr",this.productList)

        this.showData = true;
      },
      error => {
        console.log("error");
      }
    );
  }
}
