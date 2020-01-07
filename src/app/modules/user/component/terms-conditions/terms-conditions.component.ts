import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent implements OnInit {

  @Output() readyToUpdate : EventEmitter<boolean> = new EventEmitter<boolean>();
  public agree : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onChange(event) {
    if(event.target.checked) {
      this.agree = event.target.checked;
    } else {
      this.agree = event.target.checked;
    }
    console.log(this.agree);
  }
  
  submit() {
    if(this.agree) {
      this.readyToUpdate.emit(this.agree);
    } else {
      console.log(this.agree);
    }
  }
}
