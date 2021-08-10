import { Component, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router , ActivatedRoute} from '@angular/router';
import { ContentService } from 'src/app/content.service';
import { iPosts } from 'src/app/share/interface';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent {

  post: iPosts | undefined;
  categories: any = ['Starter', 'Main Courses', 'Desserts', 'others'];
  levels: any = ['Beginers', 'Advance', 'Expert'];

  constructor(private contentService: ContentService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

    this.fetchPost()

  }


  editRecipe(form: NgForm): void {
    const id = this.post?.id
    const data = { ...form.value }
    this.contentService.editCurentRecipe(data, id!).finally(()=>{
      this.router.navigate(['my-recipes','recipe',id])
    }) 

  }

  fetchPost(): void {

    const id = this.activatedRoute.snapshot.params.recipeId
    this.contentService.loadPost(id).subscribe(post => this.post = post)
  }

 

}
