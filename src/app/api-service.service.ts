import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IUser } from '../Iuser'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  userDetails:IUser[];
  constructor(public http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    console.log('data');
    return this.http.get<IUser[]>('http://localhost:3000/users/').pipe(map((data) => {
      
    return this.userDetails = data;
    }));
  }

  // getUsers() {
  //   console.log('data');
  //   return this.http.get('http://localhost:3000/users/').pipe(map((data) => {
  //     return this.userDetails = data;
  //   }));
  // }

  getUser(id) {
    return this.http.get<IUser>('http://localhost:3000/users/' + id).pipe(map(data => {
      return data;
    }))
  }

  addUser(newUser) {

    let editUser: IUser = {
      id: newUser.id,
      name: newUser.name
    }

    return this.http.post('http://localhost:3000/users/', editUser).pipe(map((data) => {
      return data;
    }));
  }

  editUser(user: IUser) {

    return this.http.put<IUser>('http://localhost:3000/users/' + user.id, user).pipe(map(data => {
      return data;
    }))
  }

  deleteUser(id) {
    return this.http.delete('http://localhost:3000/users/' + id).pipe(map((data) => {
      return data;
    }));
  }

  getCabinAttributes() {
    return this.http.get('http://localhost:3000/cabinAttribures/').pipe(map(data=>{
      return data;
    }))
  }
  
}
