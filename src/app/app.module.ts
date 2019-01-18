import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ApiServiceService } from './api-service.service';
import { UsersComponent } from './users/users.component';
import { AddUpdateComponent } from './add-update/add-update.component';
import { CabinAttriburesComponent } from './cabin-attribures/cabin-attribures.component';


const appRoute: Routes = [
  { path: '', component: UsersComponent },
  { path: 'editUser/:id', component: AddUpdateComponent },
  { path: 'newUser', component: AddUpdateComponent },
  { path: '**', redirectTo: '' }
]
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddUpdateComponent,
    //CabinAttriburesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
    FormsModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
