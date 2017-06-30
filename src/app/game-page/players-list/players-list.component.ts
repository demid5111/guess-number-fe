import {Component} from '@angular/core';
import {Store} from '@ngrx/store';

import {Observable} from 'rxjs/Observable';

import {Player} from '../../shared/model/player.model';

import * as fromRoot from '../../shared/reducer/root.reducer';

@Component({
  selector: 'gn-players-list',
  templateUrl: './players-list.component.html'
})
export class PlayersListComponent {
  title: string;
  players$: Observable<Player[]>;

  constructor(store: Store<fromRoot.IAppState>) {
    this.title = 'Your competitors!';
    this.players$ = store.select(fromRoot.getPlayersSelector);
  }

}
