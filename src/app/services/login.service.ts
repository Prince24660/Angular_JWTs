import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/login';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
currentusername:string="";
tokenid:string="";
data:any[]=[];
// type:any[]=[];
// role:string="";
  constructor(private httpclient:HttpClient,private router:Router) { }


  CheckUser(person:Login): Observable<any> {debugger
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(person);
    console.log(body)
    return this.httpclient.post("https://localhost:44377/api/Auth/login", body,{'headers':headers})
  }
  updateActiveStatus(userId: number, isActive: boolean): Observable<any> {
    // const url = '/your-api-endpoint/updateActive';
    debugger
    // const body = {
    //   IsActive: isActive,
    //   UserId: userId
    // };
    return this.httpclient.get("https://localhost:44377/api/Auth/updateActive?IsActive="+isActive+"&UserId="+userId);
  }
  //https://localhost:44377/api/Auth/updateActive?IsActive=false&UserId=4
 
  getmvccoreData(): Observable<any> {
    return this.httpclient.get<any>('https://localhost:7077/index');
  }
  getmvcData(): Observable<any> {
    return this.httpclient.get<any>('https://localhost:44351/');
  }
}
