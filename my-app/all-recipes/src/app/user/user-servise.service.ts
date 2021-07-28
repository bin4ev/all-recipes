import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})

export class UserServiseService {
  
  userdata: any;

  constructor(private authentication: AngularFireAuth) { }

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

      this.authentication.signInWithEmailAndPassword(email,password)
      .then(data=>{
        console.log(data,'user is succseedfull logged')
        data.user!.uid=this.userdata;
      }).catch(error=>{
        console.log(error)
      })
  
    }
    
    logout(): void {
      this.authentication.signOut()
      .then(() => {
        console.log('Sign-out successful') 
      }).catch((error) => {
        console.log(error)
      });
  
    } 
}
