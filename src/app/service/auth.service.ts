import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
@Injectable()
export class AuthService {
  public headers: Headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  public options: RequestOptions = new RequestOptions({ headers: this.headers });

  constructor(    
    private http: Http,
    private router: Router
  ) 
  {

  }

  login(credentail) : Observable<any>{
    console.log(JSON.stringify(credentail).trim());
    return this.http.post('https://api.amalyze.com/0.0.12/system.user.login', credentail);
  }
  
}