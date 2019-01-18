import { Component, OnInit } from '@angular/core';
import { IUser } from '../../Iuser';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private apiService: ApiServiceService, private router: Router) { }
  users: IUser;

  ngOnInit() {
    this.allUsers();
  }


  allUsers() {
    this.apiService.getUsers().subscribe((data) => {
      this.users = data;
    })
  };

  deleteUser(id) {
    this.apiService.deleteUser(id).subscribe((data) => {
      this.allUsers();
    }, (error) => {
      console.log('error', error);
    });
  }

}
