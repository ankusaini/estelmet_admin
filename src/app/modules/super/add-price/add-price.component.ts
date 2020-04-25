import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Price } from '../../../shared/Models/price.model';
import { ProductCategory, ProductCoating, ProductTemper } from '../../../shared/Models/product.model.';
import { StaticDataService } from '../../../shared/services/data/staticData.service';
import { InventoryService } from '../../inventory/service/inventory.service';

@Component({
  selector: 'app-add-price',
  templateUrl: './add-price.component.html',
  styleUrls: ['./add-price.component.css']
})
export class AddPriceComponent implements OnInit {
  public maskIP = [/\d/, '.', /\d/, /\d/];
  public priceList: Price[];
  productCategoryList: ProductCategory[];
  productTemperList: ProductTemper[];
  productCoatingList: ProductCoating[];
  public priceForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    thicknessMin: new FormControl('', [Validators.required]),
    thicknessMax: new FormControl('', [Validators.required]),
    widthMin: new FormControl('', [Validators.required]),
    widthMax: new FormControl('', [Validators.required]),
    temperMin: new FormGroup({
      id: new FormControl('', [Validators.required]),
      productTemper: new FormControl('', [Validators.required])
    }),
    temperMax: new FormGroup({
      id: new FormControl('', [Validators.required]),
      productTemper: new FormControl('', [Validators.required])
    }),
    productCategory: new FormGroup({
      id: new FormControl('', [Validators.required]),
      productCategory: new FormControl('', [Validators.required])
    }),
    productCoating: new FormGroup({
      id: new FormControl(''),
      productCoating: new FormControl('')
    }),
    price: new FormControl('', [Validators.required])
  });
  constructor(private inventoryService: InventoryService, private staticData: StaticDataService) { }

  ngOnInit() {
    this.getAllPrice();
    this.staticData.getAllProductCategory().subscribe(data => this.productCategoryList = data);
    this.staticData.getProductTempor().subscribe(data => this.productTemperList = data);
    this.staticData.getAllProductCoating().subscribe(data => this.productCoatingList = data);
  }

  priceOnSubmit() {
    this.inventoryService.savePrice(this.priceForm.value).subscribe(() => {
      this.priceForm.reset();
      this.getAllPrice();
    });
  }

  getAllPrice() {
    this.inventoryService.getAllPrice().subscribe(
      data => this.priceList = data
    );
  }

  setValue(event, type) {
    this.priceForm.controls[type]['controls'][type].patchValue(
      event.target.options[event.target.options.selectedIndex].text
    );
  }

  deletePrice(id) {
    this.inventoryService.deletePrice(id).subscribe(() => {
      this.getAllPrice();
    });
  }

  setValueTwoField(event, type1, type2) {
    this.priceForm.controls[type1]['controls'][type2].patchValue(
      event.target.options[event.target.options.selectedIndex].text
    );
  }
}
