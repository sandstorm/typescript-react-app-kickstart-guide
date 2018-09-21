# Components
Sometimes called _presentational_ or _dumb_ components are components that only render markup based on their props.
They work like pure functions and thus are easy to test and maintain.

We use the Atomic Design pattern to organise and compose our presentational components.

We leverage [Storybook](Storybook.md) when developing presentational components.

[Write tests](Testing.md)!

The directory of a presentational component looks like this:
```
* ComponentName
- * index.ts
- * ComponentName.tsx
- * ComponentName.test.tsx
- * ComponentName.story.tsx
- * _ComponentName.scss
```

## Skeleton
> Sandstorm VSCode snippet: `component`.

```tsx
import * as React from 'react';
import {PickDefaultProps} from 'types/defaultProps';

//
// Props
//
interface TemplateProps {
  readonly template: string;
}

type DefaultProps = PickDefaultProps<TemplateProps, 'template'>;

const defaultProps: DefaultProps = {
  template: 'Bro',
};

//
// State
//
interface TemplateState {
  readonly isCool: boolean;
}

const initialState: TemplateState = {
  isCool: true,
};

//
// Class
//
export default class Template extends React.PureComponent<TemplateProps, TemplateState> {
  public static readonly defaultProps = defaultProps;

  public constructor(props: TemplateProps) {
    super(props);
    this.state = initialState;
  }

  public render(): JSX.Element {
    return (
      <div className="template">
        <p>{`Hey, ${this.state.isCool ? 'cool ' : ''}${this.props.template}!`}</p>
      </div>
    );
  }
}
```

## Styles
To add styling, create a `.scss` file starting with an underscore (e.g. `_ComponentName.scss`).
The underscore signals the preprocessor to handle the Sass file as a Sass partial.
> Important: Don't forget to import the Sass file in `./src/index.scss` using the `@import ...` syntax.

## Notes
* We do not use _functional_ components. We use `React.PureComponent`.
* The `interface` replaces PropTypes
* Try to use pure functions as much as possible. Either defined inside the class as `private static readonly` methods or as pure functions outside of the class.
* If a component has no props or state -> omit the generics of React.PureComponent
