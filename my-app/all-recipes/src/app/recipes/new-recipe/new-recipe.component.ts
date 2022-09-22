import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { ContentService } from 'src/app/core/services/content.service';
import { UserServiseService } from 'src/app/core/services/user-servise.service';
@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent {

  categories: any = ['Starter', 'Main Courses', 'Desserts', 'others'];
  levels: any = ['Beginers', 'Advance', 'Expert'];
  userEmail!: any
  submitting = false

  constructor(
    private contentService: ContentService,
    private router: Router,
    private userService: UserServiseService,
    private dialogRef: MatDialogRef<NewRecipeComponent>) {
  }

  ngOnInit() {
    this.userEmail = this.userService.userInfo?.email
  }

  createRecipe(form: NgForm): void {
    if (form.invalid) {
      return
    }
    this.submitting = true
    const creatorId = this.userService.user?.uid
    const createdBy = this.userService.user?.email
    const data = { ...form.value, creatorId, createdBy }

    this.contentService.addReciep(data).then(() => this.dialogRef.close() )
    this.router.navigate(['/allRecipes/my-recipes'])
  }


}
