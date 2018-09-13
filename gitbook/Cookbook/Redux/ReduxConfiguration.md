# Redux Store Configuration

This project uses _Epics_ of `redux-observables`.
To use Sagas, Loop or other async action reducers you have to install and integrate them.

> **Note**: There is a known issue with using Sagas in conjunction with `createAction` from `@martin_hotell/rex-tils` as they deep freeze the action object and Sagas tries to modify it with `Object.defineProperty`.
> One could argue whom to blame, but for us it is Sagas fault to mutate the action instead of creating a new one with `Object.assign`.

> ! You do not have to copy this code, as it's already copied over while [creating the boilerplate](../../GettingStarted/Boilerplate.md).

```ts
import {applyMiddleware, createStore, Store} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createEpicMiddleware} from 'redux-observable';

import {ApplicationState, rootEpic, rootReducer} from './Store';

export default function configureStore(initialState?: ApplicationState): Store<ApplicationState> {
  // create middlewares
  const epicMiddleware = createEpicMiddleware();

  // create store
  const store = createStore(
    rootReducer,
    initialState || {},
    composeWithDevTools(
      applyMiddleware(epicMiddleware)
    )
  );

  // start middlewares like Saga, Epic etc.
  epicMiddleware.run(rootEpic);

  return store;
}
```
