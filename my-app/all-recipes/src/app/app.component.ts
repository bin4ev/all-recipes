import { Component } from '@angular/core';
import { UserServiseService } from './user/user-servise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

isAuthenticating():boolean{
  return this.userService.user === undefined
}
  constructor(private userService : UserServiseService) {
   this.userService.getUserInfo().subscribe({
     error: ()=>{
       this.userService.user = null;
     }
   })
  }


}
