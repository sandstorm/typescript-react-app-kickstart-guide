import {combineReducers} from 'redux';
import {combineEpics} from 'redux-observable';

import * as Data from './Data';

export interface ApplicationState {
  readonly Data: Data.DataState;
}

export const actions = {
  Data: Data.actions,
};

export const selectors = {
  Data: Data.selectors,
};

export const rootEpic = combineEpics(
  Data.epics,
);

export const rootReducer = combineReducers({
  Data: Data.reducer,
});
