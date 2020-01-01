import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/Models/user.model';

@Component({
  selector: 'app-user-trade-details',
  templateUrl: './user-trade-details.component.html',
  styleUrls: ['./user-trade-details.component.scss']
})
export class UserTradeDetailsComponent implements OnInit {

  @Input() selectedUser : User;

  constructor() { }

  ngOnInit() {
  }

}
