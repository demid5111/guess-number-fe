import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';

import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';

import {AppComponent} from './app.component';
import {SharedComponentsModule} from './shared/components/shared-components.module';
import {AppRoutingModule} from './app-routing.module';
import {StartPageComponent} from './start-page/start-page.component';

import {IonicStorageModule} from '@ionic/storage';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    SharedComponentsModule,
    IonicModule.forRoot(AppComponent),
    IonicStorageModule.forRoot(),
    AppRoutingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    StartPageComponent
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
