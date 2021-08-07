import { Component, OnDestroy,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { sameValueFactory } from 'src/app/share/validator';
import { UserServiseService } from '../user-servise.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnDestroy {

  killSubscription = new Subject();
  form: FormGroup;

  constructor(
    private auth: UserServiseService,
    private router: Router,
    private fb: FormBuilder) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      rePassword: ['', [Validators.required, sameValueFactory(()=>this.form?.get('password'), this.killSubscription)]]
    })
  }

  signIn(form: FormGroup) {
    if (form.invalid) { return }

    this.auth.register(this.form.value)
    this.router.navigate(['login']);

  }

  ngOnDestroy(): void {
    this.killSubscription.next();
    this.killSubscription.complete();
  }
}
