import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../core/guards/auth-activate';

import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeComponent } from './recipe/recipe.component';
import { PostsComponent } from './recipes/posts.component';



const routes: Routes = [
    {
        path: 'recipes',
        component: PostsComponent,

    },

    {
        path: 'new-recipe',
        component: NewRecipeComponent,
        canActivate: [AuthActivate],
     
        data: {
            authRequared: true,
            authRedirectUrl: '/home'
        }
    },

    {
        path: 'my-recipes',
        canActivate: [AuthActivate],
        data: {
            authRequared: true,
            authRedirectUrl: '/home'
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: MyRecipesComponent,
            },


            {
                path: 'recipe/:recipeId',
                component: RecipeComponent,

            },
         








        ],

    },
    {
        path: 'edit/:recipeId',
        component: EditRecipeComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule { }
