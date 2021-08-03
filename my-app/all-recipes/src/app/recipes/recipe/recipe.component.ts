import { Component,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/content.service';
import { iPosts } from 'src/app/share/interface';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent  {


  post: iPosts | undefined;

  constructor(private contentService:ContentService,
    private activateRoute :ActivatedRoute) {
/* this.fetchPost(); */
   }

  /*  fetchPost():void{
     const id =this.activateRoute.snapshot.params.id;
    const post= this.contentService.loadPost(id).
    post.subscribe(post=>this.post=post)
   } */


}
