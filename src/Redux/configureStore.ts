import {applyMiddleware, createStore, Store} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createEpicMiddleware} from 'redux-observable';

import {IApplicationState, rootEpic, rootReducer} from './Store';

export default function configureStore(initialState?: IApplicationState): Store<IApplicationState> {
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

