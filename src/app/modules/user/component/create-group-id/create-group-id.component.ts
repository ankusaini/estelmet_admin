import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  ProductCategory,
  ProductType
} from "../../../../shared/Models/product.model.";
import { StaticDataService } from "src/app/shared/services/data/static-data.service";
import { FormGroup, FormControl, Validators, AbstractControl } from "@angular/forms";
import { UserDataService } from 'src/app/shared/services/data/userData.service';
import { CustomValidator } from 'src/app/Validators/custom-validator';
import { ToastrService } from 'ngx-toastr';


function MaxthicknessConfirming(c: AbstractControl): any {
  if(!c.parent || !c) return;
  const minThickness = (c.parent.get("minThickness"));
  const maxThickness = (c.parent.get("maxThickness"));
  if(!maxThickness || ! minThickness) return;
  if(maxThickness.value < minThickness.value) {
    return { invalid: true};
  } 
}

@Component({
  selector: "app-create-group-id",
  templateUrl: "./create-group-id.component.html",
  styleUrls: ["./create-group-id.component.scss"]
})
export class CreateGroupIdComponent implements OnInit {
  @Output() groupData: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private _staticData: StaticDataService,
    private _userDataService : UserDataService,
    private toastService: ToastrService
  ) {}
  productCategoryList: ProductCategory[];
  productTypeList: ProductType[];

  createGroupForm = new FormGroup({
    userGroupId: new FormControl(""),
    userGroupName: new FormControl(""),
    productType: new FormControl("", [Validators.required]),
    productCategory: new FormControl("", [Validators.required]),
    minThickness: new FormControl("", [Validators.required, CustomValidator.compondValueValidate]),
    maxThickness: new FormControl("", [Validators.required, CustomValidator.compondValueValidate, MaxthicknessConfirming]),
    userRole: new FormControl("", [Validators.required])
  });

  ngOnInit() {
    this.getProductType();
    this.getProductCategory();
  }
  getProductCategory() {
    this._staticData.getAllProductCategory().subscribe(data => {
      this.productCategoryList = data;
    });
  }
  getProductType() {
    this._staticData.getProductType().subscribe(data => {
      this.productTypeList = data;
    });
  }

  createGroupSubmit() {
    console.log(this.createGroupForm.value.userRole);
    this._userDataService.updateUserRole(this.createGroupForm.value.userRole);
    console.log("form", this.createGroupForm);
    let userGroupName =
      this.createGroupForm.controls.productType.value +
      "-" +
      this.createGroupForm.controls.productCategory.value +
      "-" +
      this.createGroupForm.controls.minThickness.value +
      "-" +
      this.createGroupForm.controls.maxThickness.value;
    this.createGroupForm.controls.userGroupName.patchValue(userGroupName);
    console.log("form", this.createGroupForm);

    if (this.createGroupForm.valid) {
      this.groupData.emit(this.createGroupForm.value);
    } else {
      console.log("disable");
      this.toastService.error("Details are invalid!");
    }
  }


  get f() {
    return this.createGroupForm.controls;
  }


}
