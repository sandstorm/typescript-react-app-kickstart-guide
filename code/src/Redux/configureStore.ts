import {applyMiddleware, createStore, Store} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createEpicMiddleware} from 'redux-observable';

import {ApplicationState, rootEpic, rootReducer} from './Store';

export default function configureStore(initialState?: ApplicationState): Store<ApplicationState> {
  const epicMiddleware = createEpicMiddleware();
  const store = createStore(
    rootReducer,
    initialState || {},
    composeWithDevTools(
      applyMiddleware(epicMiddleware)
    )
  );

  epicMiddleware.run(rootEpic);

  return store;
}

