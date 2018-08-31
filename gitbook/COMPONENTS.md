# Components

Or sometimes called _presentational_ or _dumb_ components are components that only render markup based on their props.
They work like pure functions and thus are easy to test and maintain.

We use the Atomic Design pattern to organise and compose our presentational components.

We leverage [Storybook](SETUP_STORYBOOK.md) When developing presentational components.

You can also [write tests](CREATE_TESTS.md).

The directory of a presentational component looks like this:
```
* ComponentName
- * index.ts
- * ComponentName.tsx
- * ComponentName.test.tsx
- * ComponentName.story.tsx
// TODO Styles
```

## Skeleton
This can be used as snippet in VSCode or by copy-pasting. Replace `${1:ComponentName}` with the actual component name (automaticly happens when using VSCode snippets).

```tsx
import * as React from 'react';

interface ITemplateProps {}

export default class Template extends React.PureComponent<ITemplateProps> {
  public render(): JSX.Element {
    return <div>Helloo Template!</div>;
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
