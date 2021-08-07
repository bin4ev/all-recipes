import { Component, OnInit } from '@angular/core';
import { NgForm, NgModelGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { UserServiseService } from '../user-servise.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

errorMessage:string | undefined;

  constructor(private auth:UserServiseService,
    private router:Router) { }

    doLogin(form: NgForm) {
      if(form.invalid){ return };
      const {email, password}= form.value;
        this.auth.login(email, password);
        this.router.navigate(['/home']);
      form.reset('');


       
    }



}
