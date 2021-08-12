import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../core/guards/auth-activate';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
     
        canActivate: [AuthActivate],
        data: {
            authRequared: false,
            authRedirectUrl: '/home'
        }
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [AuthActivate],
        data: {
            authRequared: false,
            authRedirectUrl: '/home'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
