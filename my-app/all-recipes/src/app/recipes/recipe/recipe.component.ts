import { Component, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from 'src/app/content.service';
import { iPosts } from 'src/app/share/interface';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {


  post: iPosts | undefined;


  constructor(private contentService: ContentService,
    private activatedRoute: ActivatedRoute,
    private router:Router) {
    this.fetchPost()
  }


  fetchPost(): void {

    const id = this.activatedRoute.snapshot.params.recipeId
    this.contentService.loadPost(id).subscribe(post => this.post = post)
  }

  deleteRecipe():void{
    const id = this.post?.id
    this.contentService.deleteCurentRecipe(id!).finally(()=>{
      this.router.navigate(['my-recipes'])
      console.log('Document as deleted !');
      
    })
  }

}