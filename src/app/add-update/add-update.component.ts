import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { IUser } from '../../Iuser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-update',
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.css']
})
export class AddUpdateComponent implements OnInit {

  constructor(private apiService: ApiServiceService, private route: ActivatedRoute,private router:Router) { }
  
  userDetail: IUser = {
    id: 0,
    name: ''
  }

  isEditUser: boolean = false;
  userId: number;

  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.userId = +param.get('id');
      if (this.userId > 0) {
        //edit the user
        this.isEditUser = true;
        this.apiService.getUser(this.userId).subscribe(data => {
          this.userDetail = {
            id: data.id,
            name: data.name
          }
        });
      } else {
        //add new user
        this.isEditUser = false;
      }
    })
  }


  submit(formValue: NgForm) {

    this.userDetail = {
      id: Math.floor(Math.random() * 100) + 1,
      name: formValue.value.name
    };
    this.apiService.addUser(this.userDetail).subscribe((data) => {
      
    },(error)=>{
      console.log('error',error);
    },()=>{
      this.router.navigate(['/']);
    });
  };

  save(complaintForm: NgForm) {

    this.userDetail = {
      id: this.userId,
      name: complaintForm.value.name
    };

    this.apiService.editUser(this.userDetail).subscribe((data) => {
      
    },(error)=>{
      console.log('error in service',error);
    },()=>{
      this.router.navigate(['/']);
    });
  };

  cancel(){
    this.router.navigate(['/']);
  };
}
