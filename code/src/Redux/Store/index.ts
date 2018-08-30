import {combineReducers} from 'redux';
import {combineEpics} from 'redux-observable';

import * as Data from './Data';

export interface IApplicationState {
  readonly Data: Data.IDataState;
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
