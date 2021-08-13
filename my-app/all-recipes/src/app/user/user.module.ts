import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.modul';

import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { ShareModule } from '../share/share.module';
import { UserServiseService } from '../core/services/user-servise.service';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule ,
    CommonModule,
    FormsModule,
    ShareModule,
  ],
  exports: [
    RegisterComponent,
    LoginComponent,
    UserRoutingModule,
  ],
  providers:[
  UserServiseService
  ]
})
export class UserModule { }
