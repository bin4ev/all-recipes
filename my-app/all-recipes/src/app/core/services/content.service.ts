import { ErrorHandler, Injectable } from '@angular/core';
import { AngularFirestore,} from '@angular/fire/firestore';
import { iPosts } from 'src/app/share/interface';


import { UserServiseService } from './user-servise.service';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

 

  constructor(private db: AngularFirestore,
    private userService:UserServiseService,
   private errorHandler:ErrorHandler
  ) {}
  
  loadPosts(){
   return  this.db.collection<iPosts>('recipes')
  }

  loadPost(id:string){
    
    return this.db.collection<iPosts>('recipes').doc(id).valueChanges({idField:'id'})
  }

  addReciep(data:{}){
    this.db.collection("recipes").add({...data})
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
     
    })
    .catch((error) => {
      
      this.errorHandler.handleError(error)
    });

  }

  loadMyRecipes(){

    return  this.db.collection<iPosts>('recipes', ref =>
     ref.where('creatorId', '==', `${this.userService.user?.uid}`))
     
  };

  editCurentRecipe(data:{},id:string){
   return this.db.collection('recipes').doc(id).update(data)
  }

  deleteCurentRecipe(id:string){
     return this.db.collection('recipes').doc(id).delete()
  }
   
    
  

}
