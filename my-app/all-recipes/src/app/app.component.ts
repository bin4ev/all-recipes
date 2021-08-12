import { Component, ErrorHandler } from '@angular/core';
import { IUser } from './share/interface';
import { UserServiseService } from './user/user-servise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: IUser | undefined | null = undefined;



  isAuthenticating(): boolean {
    return this.userService.user === null
  }

  constructor(private userService: UserServiseService,
 ) {

    this.userService.getUserInfo().subscribe({

      error: () => {
        
        this.userService.user = null;
      }
      
    });
  }


}
