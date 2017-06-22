import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NotFoundComponent} from './shared/components/not-found/not-found.component';
import {StartPageComponent} from 'app/start-page/start-page.component';
import {GamePageComponent} from './game-page/game-page.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  },
  {
    path: 'start',
    pathMatch: 'full',
    component: StartPageComponent
  },
  {
    path: 'game',
    pathMatch: 'full',
    component: GamePageComponent
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
