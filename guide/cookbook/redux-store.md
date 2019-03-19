---
id: redux-store
title: Redux Store
---

> For setup see [Redux Store Configuration](../kickstart/redux.md) in the kickstart section of this guide.

## Skeleton
> Sandstorm VSCode snippet: `store`.

```ts
import { ActionsUnion, createAction } from '@sandstormmedia/react-redux-ts-utils';
import { ActionsObservable, combineEpics, Epic } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { delay, filter, map, mergeMap } from 'rxjs/operators';

import { ApplicationState } from '..';

//
// State
//
export type TemplateState = Readonly<{
  template?: string;
}>;

const initialState: TemplateState = {
  template: undefined,
};

//
// Actions
//
export enum ActionTypes {
  FETCH_TEMPLATE = '@@NameSpace/Template/FETCH_TEMPLATE',
  SET_TEMPLATE = '@@NameSpace/Template/SET_TEMPLATE',
}

export const actions = {
  fetchTemplate: () => createAction(ActionTypes.FETCH_TEMPLATE),
  setTemplate: (newTemplate: string) => createAction(ActionTypes.SET_TEMPLATE, { newTemplate }),
};

type TemplatesActions = ActionsUnion<typeof actions>;

//
// Reducer
//
export function reducer(state: Readonly<TemplateState> = initialState, action: TemplatesActions): TemplateState {
  switch (action.type) {
    case ActionTypes.SET_TEMPLATE:
      return { ...state, template: action.payload.newTemplate };
    case ActionTypes.FETCH_TEMPLATE: // handled by epic
    default:
      return state;
  }
}

//
// Selectors
//
const templateSelector = (state: ApplicationState) => state.Template.template;

export const selectors = {
  template: templateSelector,
};

//
// Async action handlers (Epics, Sagas, etc)
//
const fetchTemplateEpic: Epic<TemplatesActions> = (actions$: ActionsObservable<TemplatesActions>) => actions$.pipe(
  filter((action) => action.type === ActionTypes.FETCH_TEMPLATE),
  delay(1000),
  mergeMap((action) => ajax
    .getJSON('/api/endpoint')
    .pipe(map((response) => actions.setTemplate('response'))),
  ),
);

export const epics = combineEpics(
  fetchTemplateEpic,
);
```
