import {Action} from '@ngrx/store';

import {Player} from '../model/player.model';

export interface IPlayersState {
  players: Player[]
}

export const initialPlayersState: IPlayersState = {
  players: [
    new Player(0, 'Peter', 5),
    new Player(0, 'John', 1),
    new Player(0, 'You', 3)
  ]
};

export function playersReducer(state: IPlayersState = initialPlayersState, action: Action): IPlayersState {
  switch (action.type) {
    default:
      return state
  }
}

export const getList = (state: IPlayersState) => state.players;
