import { Component, OnInit } from '@angular/core';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-pc',
  templateUrl: './create-pc.component.html',
  styleUrls: ['./create-pc.component.css']
})
export class CreatePcComponent implements OnInit {

  constructor(public parserFormatter: NgbDateParserFormatter) { }

  ngOnInit() {
  }

}
