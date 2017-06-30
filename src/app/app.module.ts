import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {StoreModule} from '@ngrx/store';

import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {IonicStorageModule} from '@ionic/storage';

import {firebaseConfig} from '../environments/firebase.config';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import {SharedComponentsModule} from './shared/components/shared-components.module';

import {CreateGamePageComponent} from './create-game-page/create-game-page.component';
import {GamePageComponent} from 'app/game-page/game-page.component';
import {reducer} from './shared/reducer/root.reducer';
import {PlayersListComponent} from './game-page/players-list/players-list.component';
import {JoinGamePageComponent} from './join-game-page/join-game-page.component';
import {GameGeneratorService} from './shared/services/game-generator.service';
import {AuthFirebaseService} from './shared/services/auth-firebase.service';
import {LoginPageComponent} from './login-page/login-page.component';
import {AuthGuard} from "./shared/guards/auth.guard";


@NgModule({
  declarations: [
    AppComponent,
    CreateGamePageComponent,
    JoinGamePageComponent,
    GamePageComponent,
    PlayersListComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    SharedComponentsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    StoreModule.provideStore(reducer),
    IonicModule.forRoot(AppComponent),
    IonicStorageModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    CreateGamePageComponent,
    JoinGamePageComponent,
    GamePageComponent,
    LoginPageComponent,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GameGeneratorService,
    AuthFirebaseService,
    AuthGuard
  ]
})
export class AppModule {
}
