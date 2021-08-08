import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/content.service';
import { UserServiseService } from 'src/app/user/user-servise.service';
@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent {

  categories: any = ['Starter', 'Main Courses', 'Desserts', 'others'];
  levels: any = ['Beginers', 'Advance', 'Expert'];

  constructor(private contentService: ContentService,
    private router: Router,
    private userService: UserServiseService) { }


  createRecipe(form: NgForm): void {
    const creatorId = this.userService.user?.uid
    const data = { ...form.value, creatorId };

    this.contentService.addReciep(data);
    this.router.navigate(['/home'])


  }


}
