import { Component, OnInit } from '@angular/core';

import { UserService } from '../service/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userInformation: String = "";
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    
  }
  onUserStatus() {
    var token = {
      "xsrf-token" : localStorage.getItem("xsrf-token"),
      "falcon-token" : localStorage.getItem("falcon-token")
    }
    this.userService.getUserStatus(token).subscribe(
      res => {
        this.userInformation = JSON.stringify(JSON.parse(res._body)["user"]);
      },
      err => {
        console.log(err);
      }
    );
  }
}
