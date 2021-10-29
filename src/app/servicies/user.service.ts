import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class UserService {
 
  // http options used for making API calls
  private httpOptions: any;
 
  public token: string;
  
 
  public errors: any = [];
 
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }
 
  // Uses http.post() to get an auth token from djangorestframework-jwt endpoint
  public login() {
    this.http.post('/api/login/', this.httpOptions).subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token',res.token)
      },
      err => {
        this.errors = err['error'];
      }
    );
  }
 
 
  // public logout() {
  //   this.token = null;
  //   this.username = null;
  // }
 
    // decode the token to read the username and expiration timestamp
    // const token_parts = this.token.split(/\./);
    // const token_decoded = JSON.parse(window.atob(token_parts[1]));
    // this.username = token_decoded.username;
  // }
 
}


