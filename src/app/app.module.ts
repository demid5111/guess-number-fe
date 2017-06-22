import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {StoreModule} from '@ngrx/store';

import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {IonicStorageModule} from '@ionic/storage';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {SharedComponentsModule} from './shared/components/shared-components.module';

import {StartPageComponent} from './start-page/start-page.component';
import {GamePageComponent} from 'app/game-page/game-page.component';
import {reducer} from './shared/reducer/root.reducer';
import {PlayersListComponent} from './game-page/players-list/players-list.component';


@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    GamePageComponent,
    PlayersListComponent
  ],
  imports: [
    BrowserModule,
    SharedComponentsModule,
    StoreModule.provideStore(reducer),
    IonicModule.forRoot(AppComponent),
    IonicStorageModule.forRoot(),
    AppRoutingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    StartPageComponent,
    GamePageComponent
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
