# Storybook

Storybook files are placed into the directory of a component.

## Skeleton

```tsx
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Component from '.';

storiesOf('Component', module)
  .add('default', () => (
    <Component />
  ));
```
