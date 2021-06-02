import { Component, OnInit } from '@angular/core';
import {User} from "../../func/User";
import {Random} from "../../core/utils";

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.page.html',
  styleUrls: ['./person-detail.page.scss'],
})
export class PersonDetailPage implements OnInit {

  user: User;

  constructor() { }

  ngOnInit() {
    this.user = new User();
    this.user.sex = Boolean();
    this.user.username = Random.nextString('username', 4);
    this.user.name = Random.nextString('name', 3);
    this.user.phone = Random.nextString('', 13);
    this.user.usualAddress = Random.nextString('usualAddress', 5);
  }

}
