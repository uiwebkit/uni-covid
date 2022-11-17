import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'uni-login',
  templateUrl: './login.component.html',
})
export class UniLoginComponent {

  constructor(private http: HttpClient) {
  }

  login() {
    this.http.get('https://github.com/login/oauth/authorize', {
      params: {
        'client_id': 'b885f50106a5d6d9e383',
        'redirect_uri': '/auth'
      },
    }).subscribe(response => {
      console.log(response);
    });
  }
}
