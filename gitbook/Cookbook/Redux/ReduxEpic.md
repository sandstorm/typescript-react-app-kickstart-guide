# Epics with redux-observables

## Skeleton

```ts
// imports
import {ActionsObservable, combineEpics, Epic} from 'redux-observable';
import {ajax} from 'rxjs/ajax';
import {delay, map, mergeMap} from 'rxjs/operators';

// define an epic
const fetchTemplateEpic: Epic<TemplateAction> = (actions$: ActionsObservable<TemplateAction>) => actions$
  .pipe(
    ofType(ActionTypes.FETCH_TEMPLATE),
    delay(1000),
    mergeMap(action =>
      ajax.getJSON('/api/endpoints/template').pipe(
        map(response => actions.setTemplate([]))
      )
    )
  );

// export epics
export const epics = combineEpics(
  fetchTemplateEpic,
);
```