---
id: components
title: Components
---

Component - sometimes called _presentational_ or _dumb_ components - are components that only render markup based on their props.
They work like pure functions and thus are easy to test and maintain.

We use [Storybook](storybook.md) to develop and test presentational components in isolation on top of [Unit Tests](testing.md).

We leverage the [Atomic Design](http://atomicdesign.bradfrost.com/) pattern to organise and compose our presentational components.

## Skeleton
> Sandstorm VSCode snippet: `component`.

```tsx
import React from 'react';
import { PickDefaultProps } from '@sandstormmedia/react-redux-ts-utils';

//
// Props
//
type TemplateProps = Readonly<{
  template: string,
}>;

type DefaultProps = PickDefaultProps<TemplateProps, 'template'>;

const defaultProps: DefaultProps = {
  template: 'Bro',
};

//
// State
//
type TemplateState = Readonly<{
  isCool: boolean,
}>;

const initialState: TemplateState = {
  isCool: true,
};

//
// Class
//
export default class Template extends React.PureComponent<TemplateProps, TemplateState> {
  public static defaultProps = defaultProps;

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
