# Redux Store Configuration

This project uses _Epics_ of `redux-observables`.
To use Sagas, Loop or other async action reducers you have to install and integrate them.

> **Note**: There is a known issue with using Sagas in conjunction with `createAction` from `@martin_hotell/rex-tils` as they deep freeze the action object and Sagas tries to modify it with `Object.defineProperty`.
> One could argue whom to blame, but for us it is Sagas fault to mutate the action instead of creating a new one with `Object.assign`.
