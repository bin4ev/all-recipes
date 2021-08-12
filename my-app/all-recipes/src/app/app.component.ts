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
    return this.userService.user === undefined
  }

  constructor(private userService: UserServiseService,
    private errorHandler : ErrorHandler) {

    this.userService.getUserInfo().subscribe({

      error: (error) => {
        this.errorHandler.handleError(error)
        this.userService.user = null;
      }
      
    });
  }


}
