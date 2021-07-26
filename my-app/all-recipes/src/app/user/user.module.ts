import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.modul';
import { UserServiseService } from './user-servise.service';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
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
