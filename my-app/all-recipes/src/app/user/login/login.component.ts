import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiseService } from '../user-servise.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private auth:UserServiseService,
    private router:Router) { }

    doLogin(email:string, password:string){
      this.auth.login(email,password)

      this.router.navigate([''])
       
    }

  ngOnInit(): void {
  }

}
