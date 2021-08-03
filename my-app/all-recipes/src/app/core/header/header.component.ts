import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


import { UserServiseService } from 'src/app/user/user-servise.service';

@Component({
  selector: 'app-header',
  template: `<img src="assets/logo/logo.png">`,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  get isLogged():boolean{
    return this.userService.isLogged
  }
  get userEmail(){
    return this.userService.user?.email
  }

  constructor(private userService: UserServiseService,private auth :AngularFireAuth,
    private router:Router) {}

    logout(){
      this.userService.user= undefined
      this.userService.logoutUser;


      this.router.navigate(['/login'])
    }
       
      


}
