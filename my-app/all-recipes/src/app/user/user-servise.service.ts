import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UserServiseService {
  userdata: any;

  constructor(private authentication: AngularFireAuth,
    private router: Router) { }

  register(email: string, password: string) {
    
     return this.authentication.createUserWithEmailAndPassword(email, password).then(value => {
      console.log('Sucess')
      this.router.navigate(['/'])
    })  
    .catch(error => {
      console.log('Something went wrong: ', error)
    
  })
  }
/*   login() {

  }
  logout(): void {

  } */
}
