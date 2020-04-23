import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MachineDetail } from '../../../shared/Models/machineDetails.model';
import { StaticDataService } from '../../../shared/services/data/staticData.service';
import { CommonService } from '../../../shared/services/http/commonService';

@Component({
  selector: 'app-create-machine-detail',
  templateUrl: './create-machine-detail.component.html',
  styleUrls: ['./create-machine-detail.component.scss']
})
export class CreateMachineDetailComponent implements OnInit {

  public machineList: MachineDetail[];

  constructor(private productService: StaticDataService, private commonService: CommonService) { }

  machineDetailForm = new FormGroup({
    machineType: new FormControl('', [Validators.required]),
    machineName: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    this.getType();
  }

  getType() {
    this.productService.getAllMachineDetail().subscribe(data => {
      this.machineList = data;
    });
  }


  machineDetailOnSubmit() {
    if (this.machineDetailForm.valid) {
      this.commonService.saveMachineDetail(this.machineDetailForm.value).subscribe(res => {
        this.machineDetailForm.reset();
        this.machineList.push(res);
        this.productService.saveMachineDetail(this.machineList);
      });
    } else {
      console.log('all fields are nessessary');
    }
  }

  deleteType(machineDetail: MachineDetail) {
    this.commonService.deleteProductType(machineDetail.id).subscribe(res => {
      this.machineList = this.machineList.filter(element => {
        return element !== machineDetail;
      });
      this.productService.saveMachineDetail(this.machineList);
    });
  }

}
