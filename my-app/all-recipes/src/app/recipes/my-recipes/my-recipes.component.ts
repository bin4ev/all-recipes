
import { Component, } from '@angular/core';
import { ContentService } from 'src/app/content.service';
import { iPosts } from 'src/app/share/interface';
@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.css']
})
export class MyRecipesComponent  {

  posts: iPosts[] | undefined;

  constructor(private contentService:ContentService) {
    this.fetchMyRecipes();
   }

 fetchMyRecipes(){
 const myRecipes =this.contentService.loadMyRecipes().valueChanges({idField:'id'})
myRecipes.subscribe(recipe=>this.posts=recipe)
 
  
 }

}
