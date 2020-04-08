import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  Injectable
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User, UserMini } from '../../Models/user.model';
import { ToastrService } from 'ngx-toastr';
import { CustomValidator } from 'src/app/Validators/custom-validator';

@Component({
  selector: 'app-transporter-do',
  templateUrl: './transporter-do.component.html',
  styleUrls: ['./transporter-do.component.scss']
})
export class TransporterDoComponent implements OnInit {

  @Output() transportData: EventEmitter<any> = new EventEmitter<any>();
  public transportList: UserMini[];
  public transportIdList: any[] = [];


  constructor(private userService: UserService, private toastr: ToastrService) {
    //   this.transportDetails.statusChanges.subscribe(data=>{
    //   // console.log(data);
    //   if(data == 'VALID'){
    //     console.log("data is: ", this.transportDetails.value);
    //     this.transportData.emit(this.transportDetails.value);
    //   } else {
    //     console.log("data is: ", this.transportDetails.value);
    //     this.transportData.emit({});
    //   }
    // })
  }

  public transportDetails = new FormGroup({
    transportId: new FormControl('', [Validators.required]),
    transportRecieptNo: new FormControl('', [Validators.required]),
    containerNumber: new FormControl('', [Validators.required, CustomValidator.alphanumericAndProductSymbolValidation]),
    grossWt: new FormControl('', [CustomValidator.compondValueValidate]),
    netWt: new FormControl('', [CustomValidator.compondValueValidate]),
    lorryNumber: new FormControl('', [Validators.required, CustomValidator.alphanumericSpecialCharacterValidate]),
    driverName: new FormControl(''),
    licenceNumber: new FormControl('', [CustomValidator.alphanumericSpecialCharacterValidate])
  });

  ngOnInit() {

    this.userService.getAllUserByUserNameAndCompany('TRANSPORTER','APPROVED').subscribe(
      data => {
        console.log('Data is: ', data);
        this.transportList = data;
        if (this.transportList && this.transportList.length > 0) {
          this.transportIdList = this.transportList.map(
            transportObj => transportObj.userDetialId
          );
        }
      },
      error => {
        console.log(error);
      }
    );

  }
  get f() {
    return this.transportDetails.controls;
  }

  addTransportDetails() {
    if (this.transportDetails.valid) {
      this.transportData.emit(this.transportDetails.value);
    } else {
      this.toastr.error('Error! Invalid details.');
    }
  }

}
