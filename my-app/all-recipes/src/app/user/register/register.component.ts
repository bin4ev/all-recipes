import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiseService } from '../user-servise.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  constructor(private auth:UserServiseService,
    private router:Router) {
  
   }

signIn(email:string,password:string){
     this.auth.register(email,password)
     this.router.navigate(['login']);

}


  ngOnInit(): void {
  }

}
