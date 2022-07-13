import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, } from '@angular/fire/firestore';
import { AngularFireAuthModule, } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RecipesModule } from './recipes/recipes.module';
import { ShareModule } from './share/share.module';
import { ErrorHandlerComponent } from './error/error-handler/error-handler.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ErrorHandlerComponent,


  ],
  imports: [
    BrowserModule,
    CoreModule,
    RecipesModule,
    AppRoutingModule,
    ShareModule,
    BrowserAnimationsModule,
 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, BrowserAnimationsModule, // auth
  ],
  providers: [


  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
