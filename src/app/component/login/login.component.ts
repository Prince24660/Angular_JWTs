import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
// import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:Login=new Login();
  userlist:any[]=[];
constructor(private fb:FormBuilder,private loginservices:LoginService,private router:Router) { }
  ngOnInit(): void {

  }
  loginClick() {
    debugger
    if(!this.user.username || !this.user.password)
    {
      alert('UserName and Password are Empty');
      return;
    }
    this.loginservices.currentusername=this.user.username;
    this.loginservices.CheckUser(this.user)
      .subscribe(c => {
        debugger
        console.log(c)
        if(c.issuccess) {
          this.loginservices.data=c.data; 
          this.loginservices.tokenid=c.data; 
          if (c.logintype === 'admin') { 
            this.router.navigateByUrl('/admin'); 
          } else {
            this.router.navigateByUrl('/user'); 
          }
        } else {
          debugger
          alert('wrong user & password');
          this.user.username="";
          this.user.password="";
        }
      })      
  } 
}
