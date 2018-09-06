# Components

Or sometimes called _presentational_ or _dumb_ components are components that only render markup based on their props.
They work like pure functions and thus are easy to test and maintain.

We use the Atomic Design pattern to organise and compose our presentational components.

We leverage [Storybook](Storybook.md) When developing presentational components.

You can also [write tests](Testing.md).

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

interface ITemplateProps {
  readonly template: string;
}

interface ITemplateState {
  readonly isCool: boolean;
}

const initialTemplateState: ITemplateState = {
  isCool: true,
};

export default class Template extends React.PureComponent<ITemplateProps, ITemplateState> {
  public static readonly defaultProps: Partial<ITemplateProps> = {
    template: 'Bro!',
  };

  public constructor(props: ITemplateProps) {
    super(props);
    this.state = initialTemplateState;
  }

  public render(): JSX.Element {
    return (
      <div>
        <p>{this.getMessage()}</p>
        <p>{Template.getPureMessage(this.state.isCool, this.props.template)}</p>
        <p>{getPureMessageFromTheOutside(this.state.isCool, this.props.template)}</p>
      </div>
    );
  }

  private readonly getMessage = (): string => `Hey, ${this.state.isCool ? 'cool ' : ''}${this.props.template}`;

  private static getPureMessage(isCool: boolean, template: string): string {
    return `Hey, ${isCool ? 'cool ' : ''}${template}`;
  }
}

function getPureMessageFromTheOutside(isCool: boolean, template: string): string {
  return `Hey, ${isCool ? 'cool ' : ''}${template}`;
}
```

## Notes

* We do not use _functional_ components. We use `React.PureComponent`
* The `interface` replaces PropTypes
* `render` has to be `public`
* All other methods should be `private readonly`
* Try to use pure functions as much as possible. Either defined inside the class as `private static` or outside of the class.
* If a component has no props or state -> omit the generics of React.PureComponent
