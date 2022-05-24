import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { ErrorHandlerComponent } from './error/error-handler/error-handler.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'allRecipes',
    loadChildren: () => import('./recipes/recipes.module').then(modul => modul.RecipesModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(modul => modul.UserModule)
  },

  {
    path: 'error',
    component: ErrorHandlerComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
