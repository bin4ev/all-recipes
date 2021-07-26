import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { PostsComponent } from './recipes/posts.component';



const routes: Routes = [
    {
        path: 'posts',
        component: PostsComponent
    },
    {
        path: 'new-recipe',
        component: NewRecipeComponent
    },
    {
        path: 'my-recipes',
        component: MyRecipesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule { }
