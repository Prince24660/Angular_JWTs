import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  indexData: any;
  constructor(private loginservices:LoginService) { }

  ngOnInit(): void {debugger
    this.loginservices.getmvccoreData().subscribe(data => {
      this.indexData = data;
    });
  }

}
