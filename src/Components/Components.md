# Components

Or sometimes called _presentational_ or _dumb_ components are components that only render markup based on their props.
They work like pure functions and thus are easy to test and maintain.

We use the Atomic Design pattern to organise and compose our presentational components.

We leverage **Storybook** When developing presentational components.

## Skeleton
This can be used as snippet in VSCode or by copy-pasting. Replace ${1:ComponentName} with the actual component name (automaticly happens when using VSCode snippets).

```tsx
import * as React from 'react';
import './${1:ComponentName}.css';

interface I${1:ComponentName}Props {}

export default class ${1:ComponentName} extends React.PureComponent<I${1:ComponentName}Props> {
  public render(): JSX.Element {
    return <div>${1:ComponentName}</div>
  }
}
```

## Notes

* We do not use _functional_ components. We use `React.PureComponent`
* The `interface` replaces PropTypes
* `render` has to be `public`
* All other methods should be `private readonly`
* Try to use pure functions as much as possible
* If a component has no props -> omit the generic of React.PureComponent
