import { Component, OnInit } from '@angular/core';
import { UserServiseService } from '../user-servise.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private auth:UserServiseService) {
  
   }

signIn(email:string,password:string){
    return this.auth.register(email,password)

}


  ngOnInit(): void {
  }

}
