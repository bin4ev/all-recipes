
import { ErrorHandler, Injectable, } from '@angular/core';
import { AngularFireAuth, } from '@angular/fire/auth';
import { Router } from '@angular/router';


import {  tap } from 'rxjs/operators';
import { IUser } from '../../share/interface';

@Injectable({
  providedIn: 'root'
})

export class UserServiseService {

  user: IUser | undefined | null=undefined;

  get isLogged() {
    return !!this.user

  }

  

  constructor(private authentication: AngularFireAuth,
     private router: Router,
     private errorHandler : ErrorHandler
     
  ) {
      
   }


  register(data: { email: string, password: string }) {

      this.authentication.createUserWithEmailAndPassword(data.email, data.password)
        .then(value => {
          console.log('SUCCSEED!');

        })
        .catch(error => {
          console.log('Something went wrong: ', error)

          this.errorHandler.handleError(error)
        })


    }
    login(email: string, password: string) {

      this.authentication.signInWithEmailAndPassword(email, password)
        .then(data => {
          console.log(data, 'user is (succseedfull logged');
       
          let { email, uid, } = data.user!
          this.user = {
            uid: uid!,
            email: email!,
          
          }

        }).catch(error => {
         
          this.errorHandler.handleError(error)
          
       
          
        })


    }

getUserInfo(){
  return this.authentication.user.pipe(tap(user=>{
     console.log(user?.email);
     if(user){
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
          this.user= undefined;
          console.log('User is sign out')
          this.router.navigate(['/user/login'])
        }).catch(error=> this.errorHandler.handleError(error))

    }






  }
