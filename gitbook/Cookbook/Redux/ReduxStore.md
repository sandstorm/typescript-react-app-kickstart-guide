# Store

## Skeleton
```ts
import {ActionsUnion, createAction} from '@martin_hotell/rex-tils';
import {ApplicationState} from '..';

/**
 * State
 */
export interface TemplateState {
  readonly template?: string;
}

const initialState: TemplateState = {
  template: undefined,
};

/**
 * Actions
 */
export enum ActionTypes {
  TEMPLATE_ACTION = '@@NameSpace/Template/TEMPLATE_ACTION',
}

export const actions = {
  templateAction: (newTemplate: string) => createAction(ActionTypes.TEMPLATE_ACTION, {newTemplate}),
};

type TemplatesActions = ActionsUnion<typeof actions>;

/**
 * Reducer
 */
export function reducer(state: TemplateState = initialState, action: TemplatesActions): TemplateState {
  switch (action.type) {
    case ActionTypes.TEMPLATE_ACTION:
      return {...state, template: action.payload.newTemplate};
    default:
      return state;
  }
}

/**
 * Selectors
 */
const templateSelector = (state: ApplicationState) => state.PathToStore.Template.template;

export const selectors = {
  template: templateSelector,
};

/**
 * Epics / Sagas / other async action handlers
 */
```
