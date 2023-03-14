import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
baseUrl = 'https://localhost:5001/api/';

  constructor(private https: HttpClient) { }

  login(model:any) {
    return this.https.post(this.baseUrl + 'account/login', model)
  }
}
