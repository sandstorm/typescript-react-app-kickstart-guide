---
id: redux
title: Redux Store Configuration
---

> Here we use `redux-observable` as an example for an async action handler middleware. You are, of course, free to use any kind of middleware for that job.

## Installation
To use Redux as Store, install the following dependencies:
```bash
# main redux & dev tools support
yarn add redux redux-devtools-extension

# react bindings & typings
yarn add react-redux @types/react-redux

# utility & convenient typings
yarn add @sandstormmedia/react-redux-ts-utils

# reselect for selectors (with memoization and composition)
yarn add reselect

# async action handling with epics
yarn add redux-observable rxjs
```

### Store Configuration
`src/Redux/configureStore.ts`:
```ts
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';

import { ApplicationState, rootEpic, rootReducer } from './Store';

export default function configureStore(initialState?: ApplicationState): Store<ApplicationState> {
  // create middlewares
  const epicMiddleware = createEpicMiddleware();

  // create store
  const store = createStore(
    rootReducer,
    initialState || {},
    composeWithDevTools(
      applyMiddleware(epicMiddleware)
    )
  );

  // start middlewares
  epicMiddleware.run(rootEpic);

  return store;
}
```

### Store Entry Point
The entry point for the store is the `index.ts`. Here we compose the `ApplicationState`, `rootReducer` and `rootEpic` from different sub-stores.

`src/Redux/Store/index.ts`:
```ts
import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import * as Data from './Data';
import * as User from './User';

export type ApplicationState = Readonly<{
  Data: Data.DataState;
  User: User.UserState;
}>;

export const actions = {
  Data: Data.actions,
  User: User.actions,
};

export const selectors = {
  Data: Data.selectors,
  User: User.selectors,
};

export const rootEpic = combineEpics(
  Data.epics,
  User.epics,
);

export const rootReducer = combineReducers({
  Data: Data.reducer,
  User: User.reducer,
});
```

### Provider
`src/index.ts`:
```tsx
// add imports
import { Provider } from 'react-redux';

import configureStore from './Redux/configureStore';

// create store
const store = configureStore();

// in ReactDOM.render wrap your App in redux provider
<Provider store={store}>
  // App here
</Provider>
```