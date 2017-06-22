import {compose} from '@ngrx/core';
import {ActionReducer, combineReducers} from '@ngrx/store';
import {storeFreeze} from 'ngrx-store-freeze';
import {createSelector} from 'reselect';

import * as fromPlayers from './players.reducer'
import {environment} from '../../../environments/environment';

export interface IAppState {
  players: fromPlayers.IPlayersState
}

const reducers = {
  players: fromPlayers.playersReducer
};

const developmentReducer: ActionReducer<IAppState> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<IAppState> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

export const getPlayersState = (state: IAppState) => state.players;

export const getPlayersSelector = createSelector(getPlayersState, fromPlayers.getList);




