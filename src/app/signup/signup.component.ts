import { Component, OnInit } from '@angular/core';
import {DataService} from '../servicies/data.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // public user: any;

  constructor() { }

  ngOnInit(): void {
    // this.user = {
    //   username: '',
    //   password: ''
    // };
  }
  // login() {
  //   this.DataService.login({'username': this.user.username, 'password': this.user.password});
  // }

  // refreshToken() {
  //   this._userService.refreshToken();
  // }
 
  // logout() {
  //   this._userService.logout();
  // }

}
