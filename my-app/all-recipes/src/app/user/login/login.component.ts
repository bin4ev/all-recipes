import { Component, } from '@angular/core';
import { NgForm, } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiseService } from 'src/app/core/services/user-servise.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  submitting = false

  constructor(private auth: UserServiseService, private router: Router) { }

  doLogin(form: NgForm) {
    if (form.invalid || this.submitting) {
      return
    }
    
    this.submitting = true
    const { email, password } = form.value;
    this.auth.login(email, password).finally(() => {
    this.submitting = false
      this.router.navigate(['/home'])
      form.reset('');
    })


  }
}
