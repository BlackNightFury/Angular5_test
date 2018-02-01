import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
@Injectable()
export class UserService {
  constructor(    
    private http: Http,
    private router: Router
  ) 
  {

  }

  getUserStatus(token) : Observable<any>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-XSRF-TOKEN', token["xsrf-token"]);
    headers.append('X-FALCON-TOKEN', token["falcon-token"]);
    
    console.log(headers);
    let options = new RequestOptions({ headers: headers });
    return this.http.post('https://api.amalyze.com/0.0.12/system.user.status',{}, options);
  }
  
}