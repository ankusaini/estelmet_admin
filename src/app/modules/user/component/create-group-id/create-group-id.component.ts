import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { StaticDataService } from 'src/app/shared/services/data/staticData.service';
import { UserDataService } from 'src/app/shared/services/data/userData.service';
import { CustomValidator } from 'src/app/Validators/custom-validator';
import { ProductCategory, ProductType } from '../../../../shared/Models/product.model.';


function MaxthicknessConfirming(c: AbstractControl): any {
  if (!c.parent || !c) return;
  const minThickness = (c.parent.get('thicknessMin'));
  const maxThickness = (c.parent.get('thicknessMax'));
  if (!maxThickness || !minThickness) return;
  if (maxThickness.value < minThickness.value) {
    return { invalid: true };
  }
}

@Component({
  selector: 'app-create-group-id',
  templateUrl: './create-group-id.component.html',
  styleUrls: ['./create-group-id.component.scss']
})
export class CreateGroupIdComponent implements OnInit {
  public thickMask = [/\d/, '.', /\d/, /\d/, /\d/,];
  @Output() groupData: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private _staticData: StaticDataService,
    private _userDataService: UserDataService,
    private toastService: ToastrService
  ) { }
  productCategoryList: ProductCategory[];
  productTypeList: ProductType[];

  createGroupForm = new FormGroup({
    userGroupId: new FormControl(''),
    userGroupName: new FormControl(''),
    productType: new FormControl('', [Validators.required]),
    productCategory: new FormControl('', [Validators.required]),
    thicknessMin: new FormControl('', [Validators.required, CustomValidator.compondValueValidate]),
    thicknessMax: new FormControl('', [Validators.required, CustomValidator.compondValueValidate, MaxthicknessConfirming]),
    userRole: new FormControl('', [Validators.required])
  });

  //   export interface UserGroup {
  //     userGroupId?: string;
  //     user?: UserDetail[];
  //     userRole?: UserRole;
  //     status?: Status;
  //     userGroupName?: string;
  //     productType?: string;
  //     productCategory?: string;
  //     thicknessMin?: string;
  //     thicknessMax?: string;
  //     widthMin?: string;
  //     widthMax?: string;
  //     temperMin?: string;
  //     temperMax?: string;
  //     userGroupNoOfUser?: string;
  //     userGroupDate?: string;
  //     alias?: string;
  //     createdDate?: string;
  // }

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
    console.log('form', this.createGroupForm);
    const userGroupName =
      this.createGroupForm.controls.productType.value +
      '-' +
      this.createGroupForm.controls.productCategory.value +
      '-' +
      this.createGroupForm.controls.thicknessMin.value +
      '-' +
      this.createGroupForm.controls.thicknessMax.value;
    this.createGroupForm.controls.userGroupName.patchValue(userGroupName);
    console.log('form', this.createGroupForm);

    if (this.createGroupForm.valid) {
      this.groupData.emit(this.createGroupForm.value);
    } else {
      console.log('disable');
      this.toastService.error('Details are invalid!');
    }
  }


  get f() {
    return this.createGroupForm.controls;
  }


}
