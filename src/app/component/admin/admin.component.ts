import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  userlist:User[]=[];
  UserId:any
  loggedIn: boolean = true;
  isActive:boolean=true;

  constructor(private loginservice:LoginService , private router:Router) { }
  ngOnInit(): void {
    
   this.userlist=this.loginservice.data;
  }
  activeOrDactive(UserId:number,val:any, user: any)  {
    debugger
    user.isActive = !user.isActive;    
    // console.log("this is useridcheck",UserId)
    this.loginservice.updateActiveStatus(UserId, val)    
      .subscribe(
        () => {
         this.userlist.forEach(element => {
          if(element.id==UserId)
          {
            this.isActive=val==true?false:true;
            element.isActive = this.isActive;
          }
         });
          debugger;
          console.log('User active status updated successfully.');
        },
        error => {
          debugger;
          console.error('Error updating user active status:', error);
        }
      );
  }

  toggleActive(user: any) {    
    debugger
    user.isActive = !user.isActive;    
  }
  logout() {
    this.loggedIn = false;
    this.router.navigateByUrl('/login');
  }

}
