import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-trade-details",
  templateUrl: "./trade-details.component.html",
  styleUrls: ["./trade-details.component.scss"]
})
export class TradeDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  //   tradeDetails=new FormGroup({
  //   userProductPreferenceId: new FormControl("", [Validators.required]),
  //   productType: new FormControl("", [Validators.required]),
  //   productCategory: new FormControl("", [Validators.required]),
  //    productShape: new FormControl("", [Validators.required]),
  //   productClass: new FormControl("", [Validators.required]),
  //   thicknessRange: new FormControl("", [Validators.required]),
  //   temperRange: new FormControl("", [Validators.required]),
  //     lengthRange: new FormControl("", [Validators.required]),
  //   widthRange: new FormControl("", [Validators.required]),
  //   monthlyRequirement: new FormControl("", [Validators.required])
  // });

  tradeDetails = new FormGroup({
    userProductPreferenceId: new FormControl("", [Validators.required]),
    productType: new FormControl("", [Validators.required]),
    productCategory: new FormControl("", [Validators.required]),
    productShape: new FormControl("", [Validators.required]),
    productClass: new FormControl("", [Validators.required]),
    thicknessMin: new FormControl("", [Validators.required]),
    thicknessMax: new FormControl("", [Validators.required]),
    temperMin: new FormControl("", [Validators.required]),
    temperMax: new FormControl("", [Validators.required]),
    lengthMin: new FormControl("", [Validators.required]),
    lengthMax: new FormControl("", [Validators.required]),
    widthMin: new FormControl("", [Validators.required]),
    widthMax: new FormControl("", [Validators.required]),
    monthlyRequirement: new FormControl("", [Validators.required])
  });

  tradeDetailsFormOnSubmit() {
    console.log("trade details", this.tradeDetails);
  }
}
