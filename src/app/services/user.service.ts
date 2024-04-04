import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Router } from '@angular/router';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient:HttpClient,private router:Router) { }
  Register(newuser:User):Observable<any>
  {debugger
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(newuser);
    console.log(body)
    return this.httpclient.post<any>("https://localhost:44377/api/Auth/addUser",body,{'headers':headers})
  }

}