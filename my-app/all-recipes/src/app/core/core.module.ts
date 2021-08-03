import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserServiseService } from '../user/user-servise.service';
import { AuthActivate } from './guards/auth-activate';





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  

  ],
  providers:[
    UserServiseService,AuthActivate
  ]

})
export class CoreModule { }
