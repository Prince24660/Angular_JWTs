import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
indexdata: any;
  constructor(private loginservices:LoginService) { }

  ngOnInit(): void {debugger
    this.loginservices.getmvcData().subscribe(data => {
      this.indexdata = data;
    });
  }

}
