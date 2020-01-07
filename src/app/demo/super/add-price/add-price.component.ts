import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-price',
  templateUrl: './add-price.component.html',
  styleUrls: ['./add-price.component.css']
})
export class AddPriceComponent implements OnInit {
  public maskIP = [/\d/, '.', /\d/, /\d/];
  constructor() { }

  ngOnInit() {
  }

}
