import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { IUser } from '../Iuser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title:string = 'Welcome to Unit Testing';
  constructor(){
  }

  ngOnInit() {
    
  };

}
