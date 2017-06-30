import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NotFoundComponent} from './shared/components/not-found/not-found.component';
import {GamePageComponent} from './game-page/game-page.component';
import {CreateGamePageComponent} from './create-game-page/create-game-page.component';
import {JoinGamePageComponent} from 'app/join-game-page/join-game-page.component';
import {AuthGuard} from './shared/guards/auth.guard';
import {LoginPageComponent} from './login-page/login-page.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'create',
    pathMatch: 'full'
  },
  {
    path: 'create',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: CreateGamePageComponent
  },
  {
    path: 'join',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: JoinGamePageComponent
  },
  {
    path: 'game/:id',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: GamePageComponent
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginPageComponent
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
