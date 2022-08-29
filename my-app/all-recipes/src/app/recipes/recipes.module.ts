import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './recipes/posts.component';

import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { RecipesRoutingModule } from './recipes-routing.modul';
import { RecipeComponent } from './recipe/recipe.component';
import { FormsModule } from '@angular/forms';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterPipe } from '../core/pipes/filter.pipe';





@NgModule({
  declarations: [
    PostsComponent,
    NewRecipeComponent,
    MyRecipesComponent,
    RecipeComponent,
    EditRecipeComponent,
    FilterPipe,
 
  ],
  imports: [
    ShareModule,
    RecipesRoutingModule,
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports:[
    PostsComponent,
    NewRecipeComponent,
    MyRecipesComponent,
    FilterPipe,
  ]
})
export class RecipesModule { }
