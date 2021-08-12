import { NgModule } from '@angular/core';
import { RouterModule, Routes,} from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { ErrorHandlerComponent } from './error/error-handler/error-handler.component';


const routes: Routes = [
{path:'',
pathMatch:'full',
redirectTo:'/home'
 
},
{
path:'home',
  component: HomeComponent
},
{
  path: 'error',
  component: ErrorHandlerComponent
},
 {
  path:'**',
  component: PageNotFoundComponent
}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
