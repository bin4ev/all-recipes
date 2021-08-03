import { Injectable, } from '@angular/core';
import { AngularFireAuth, } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { Observable, } from 'rxjs';
import { IUser } from '../share/interface';

@Injectable({
  providedIn: 'root'
})

export class UserServiseService {

  user: IUser | undefined;

  get isLogged(): boolean {
    return !!this.user
  }


  constructor(private authentication: AngularFireAuth, private route: Router,
  ) {
    /* this.authentication.onAuthStateChanged
      (user => {
        if (user) {
          console.log(user.email);
          let { email, uid } = user
          this.user = {
            uid: uid!,
            email: email!
          }
        }
        else {
          this.user = undefined
        }
      }) */
  }


  register(email: string, password: string) {

    this.authentication.createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('SUCCSEED!');


      })
      .catch(error => {
        console.log('Something went wrong: ', error)

      })

  }
  login(email: string, password: string) {

        this.authentication.signInWithEmailAndPassword(email, password)
          .then(data => {
            console.log('user is succseedfull logged');

            let { email, uid } = data.user!
                this.user = {
                  uid: uid!,
                  email: email!
                } 

          }).catch(error => {
            console.log(error)
          })
      
      
  }



  logoutUser() {


    this.authentication.signOut()
      .then(() => {

        console.log('work2')
      }).catch(err => console.log(err))

  }






}
