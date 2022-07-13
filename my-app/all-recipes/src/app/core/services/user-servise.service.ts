
import { ErrorHandler, Injectable, } from '@angular/core';
import { AngularFireAuth, } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { IUser } from '../../share/interface';

@Injectable({
  providedIn: 'root'
})

export class UserServiseService {
  user: IUser | undefined | null = undefined;

  get isLogged() {
    return !!this.user
  }

  constructor(private authentication: AngularFireAuth,
    private router: Router,
    private errorHandler: ErrorHandler
  ) { }

  async register(data: { email: string, password: string }) {
     try {
      const value = await this.authentication.createUserWithEmailAndPassword(data.email, data.password);
      console.log('SUCCSEED!');
    } catch (error) {
      console.log('Something went wrong: ', error);
      this.errorHandler.handleError(error);
    }
  }

  async login(email: string, password: string) {
   try {
      const data = await this.authentication.signInWithEmailAndPassword(email, password);
      console.log(data, 'user is (succseedfull logged');
      let { email: email_1, uid, } = data.user!;
      this.user = {
        uid: uid!,
        email: email_1!,
      };
    } catch (error) {
      this.errorHandler.handleError(error);
    }
  }

  getUserInfo() {
    return this.authentication.user.pipe(tap(user => {
      console.log(user?.email)
      if (user) {
        let { email, uid, } = user!
        this.user = {
          uid: uid!,
          email: email!,
        }
      }
      console.log(this.isLogged);
    })
    )
  }

  logoutUser() {
    this.authentication.signOut()
      .then(() => {
        this.user = undefined;
        console.log('User is sign out')

      }).catch(error => this.errorHandler.handleError(error))
  }
}