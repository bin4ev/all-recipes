import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserServiseService } from 'src/app/core/services/user-servise.service';
import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordComponent } from 'src/app/user/change-password/change-password.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  $isLogged = this.userService.isLoggedIn


  get userEmail() {
    return this.userService.user?.email
  }

  constructor(private userService: UserServiseService, private auth: AngularFireAuth,
    private router: Router,
    private dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(ChangePasswordComponent)
  }

  logout() {
    this.userService.logoutUser();
  }
}
