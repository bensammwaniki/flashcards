import { Component, OnInit } from '@angular/core';
import { UserService } from '../servicies/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

  public user: any;
 
  constructor(private _userService: UserService) { }
 
  ngOnInit() {
    this.user = {
      username: '',
      password: ''
    };
  }
 
  login() {
    this._userService.login({'username': this.user.username, 'password': this.user.password});
  }
  // logout() {
  //   this._userService.logout();
  // }
 
}
