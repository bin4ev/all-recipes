import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, } from '@angular/fire/firestore';
import { AngularFireAuthModule, } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { ContentService } from './content.service';
import { RecipesModule } from './recipes/recipes.module';
import { ShareModule } from './share/share.module';
import { ErrorHandlerComponent } from './error/error-handler/error-handler.component';




@NgModule({
  declarations: [
    AppComponent,
    ErrorHandlerComponent,
   
  ],
  imports: [
    BrowserModule,
    CoreModule,
    UserModule,
    RecipesModule,
    AppRoutingModule,
    ShareModule,
    
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
  ],
  providers: [ContentService,
  

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
