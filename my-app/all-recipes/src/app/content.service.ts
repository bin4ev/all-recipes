import { Injectable } from '@angular/core';
import { AngularFirestore,} from '@angular/fire/firestore';

import { iPosts } from './share/interface/posts';
import { UserServiseService } from './user/user-servise.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private db: AngularFirestore,
    private userService:UserServiseService,
   
  ) {}
  
  loadPosts(){
   return  this.db.collection<iPosts>('recipes')
  }

  loadPost(idField:string){
    
    return this.db.collection<iPosts>('recipes').get()
  }

  addReciep(data:{}){
    this.db.collection("recipes").add({...data})
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });

  }

  loadMyRecipes(){

    return  this.db.collection<iPosts>('recipes', ref =>
     ref.where('creatorId', '==', `${this.userService.user?.uid}`)).valueChanges()
     
  };
   
    
  

}
