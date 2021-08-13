import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './recipes/posts.component';

import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { RecipesRoutingModule } from './recipes-routing.modul';
import { RecipeComponent } from './recipe/recipe.component';
import { FormsModule } from '@angular/forms';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';


@NgModule({
  declarations: [
    PostsComponent,
    NewRecipeComponent,
    MyRecipesComponent,
    RecipeComponent,
    EditRecipeComponent
  ],
  imports: [
    RecipesRoutingModule,
    CommonModule,
    FormsModule,
  ],
  exports:[
    PostsComponent,
    NewRecipeComponent,
    MyRecipesComponent
  ]
})
export class RecipesModule { }
