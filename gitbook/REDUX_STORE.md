# Store

## Skeleton
```ts
import {ActionsUnion, createAction} from '@martin_hotell/rex-tils';
import {IApplicationState} from '..';

/**
 * State
 */
export interface I${1:StoreName}State {
  readonly test?: string;
}

const initialState: I${1:StoreName}State = {
  test: undefined,
};

/**
 * Actions
 */
export enum ActionTypes {
  TEST_ACTION = '@@<project_identifier/Path/To/Store>/TEST_ACTION',
}

export const actions = {
  testAction: (newTest: string) => createAction(ActionTypes.TEST_ACTION, {newTest}),
};

type ${1:StoreName}sActions = ActionsUnion<typeof actions>;

/**
 * Reducer
 */
export function reducer(state: I${1:StoreName}State = initialState, action: ${1:StoreName}sActions): I${1:StoreName}State {
  switch (action.type) {
    case ActionTypes.TEST_ACTION:
      return {...state, test: action.payload.newTest};
    default:
      return state;
  }
}

/**
 * Selectors
 */
const testSelector = (state: IApplicationState) => state.Path.To.Store.test;

export const selectors = {
  test: testSelector,
};

/**
 * Epics / Sagas / other async action handlers
 */
```
