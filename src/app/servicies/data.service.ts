import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER = "https://kevflashcard.herokuapp.com";

  constructor(private httpClient: HttpClient) { }

  // this method sends the request to the api endpoints

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }
}
