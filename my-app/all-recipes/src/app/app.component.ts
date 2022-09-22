import { Component, ErrorHandler } from '@angular/core';
import { IUser } from './share/interface';
import { UserServiseService } from './core/services/user-servise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private userService: UserServiseService) {
   this.userService.getUserInfo()
  }
}
