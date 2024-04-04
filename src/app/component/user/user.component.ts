import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
userlists:any[]=[];
  constructor(private loginservices:LoginService) { }

  ngOnInit(): void {debugger
    this.userlists=this.loginservices.data;
  }

}
