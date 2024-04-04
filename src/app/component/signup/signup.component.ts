import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
newuser:User=new User()

constructor(private userservice:UserService,private rooter:Router) { }
ngOnInit(): void {
  
}
RegClick()
{debugger
  if(!this.newuser.username)
  {
    alert("Fill up the usrname");
  }
  if(!this.newuser.firstName)
  {
    alert("Fill the firstname");
  }
  if(!this.newuser.lastName)
  {
    alert("Fill the lastname");
  }
  if(!this.newuser.email)
  {
    alert("Fill the email");
  }
  if(!this.newuser.phoneNumber)
  {
    alert("Fill thw phonenumber");
  }
  if(!this.newuser.isActive)
  {
    alert("Fill the Isactive");
  }
  if(!this.newuser.password)
  {
    alert("Fill the Password");
  }
  if(!this.newuser.confirmPassword)
  {
    alert("Fill the Confirmpassword");
  }
  if(!this.newuser.role)
  {
    alert("Fill the Role");
  }
  this.userservice.Register(this.newuser).subscribe(
    (response)=>{
      this.rooter.navigateByUrl("/login")
      console.log=response;

    },
    (error)=>{debugger
      console.log(error);
    }
  );
}
}
