import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { iPosts } from './share/interface/posts';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private db: AngularFirestore) {}
  
  loadPosts(){
   return  this.db.collection<iPosts>('posts')
  }
}
