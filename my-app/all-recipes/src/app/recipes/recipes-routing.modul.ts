import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../core/guards/auth-activate';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeComponent } from './recipe/recipe.component';
import { PostsComponent } from './recipes/posts.component';



const routes: Routes = [
    {
        path: 'recipes',
        component: PostsComponent,
        canActivate: [AuthActivate],
        data: {
            authRequared: false,
            authRedirectUrl: '/home'
        }
    },

    {
        path: 'recipeId',
        component: RecipeComponent
    },

    {
        path: 'new-recipe',
        component: NewRecipeComponent,
        canActivate: [AuthActivate],
        data: {
            authRequared: true,
            authRedirectUrl: '/login'
        }
    },

    {
        path: 'my-recipes',
        component: MyRecipesComponent,
        canActivate: [AuthActivate],
        data: {
            authRequared: true,
            authRedirectUrl: '/login'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule { }
