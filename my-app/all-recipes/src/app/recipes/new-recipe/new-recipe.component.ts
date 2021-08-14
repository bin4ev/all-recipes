import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ContentService } from 'src/app/core/services/content.service';
import { UserServiseService } from 'src/app/core/services/user-servise.service';
import { IUser } from 'src/app/share/interface';
@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent {

  categories: any = ['Starter', 'Main Courses', 'Desserts', 'others'];
  levels: any = ['Beginers', 'Advance', 'Expert'];
 userEmail =this.getUserEmail();

  constructor(
    private contentService: ContentService,
    private router: Router,
    private userService: UserServiseService) {

   
  }
  getUserEmail(){
    return  this.userService.user?.email
   
  }

  createRecipe(form: NgForm): void {
    if (form.invalid) { return };
    const creatorId = this.userService.user?.uid
   const createdBy = this.userService.user?.email
    const data = { ...form.value, creatorId,createdBy };
  
    this.contentService.addReciep(data);
    this.router.navigate(['/home'])


  }


}
