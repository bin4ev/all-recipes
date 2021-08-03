import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule,} from '@angular/fire/auth';
import { UserModule } from './user/user.module';
import { ContentService } from './content.service';
import { RecipesModule } from './recipes/recipes.module';


var firebaseConfig = {
  apiKey: "AIzaSyAO2hwQ2wiG8qz-mcXQxnHj-mfghOJBjK8",
  authDomain: "angular-525d1.firebaseapp.com",
  projectId: "angular-525d1",
  storageBucket: "angular-525d1.appspot.com",
  messagingSenderId: "211390953252",
  appId: "1:211390953252:web:6b0cb3349886da8020e5b1"
};



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UserModule,
    RecipesModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
  ],
  providers: [ContentService,
        
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
