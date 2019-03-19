---
id: storybook
title: Storybook
---

> For setup see [Storybook](../kickstart/storybook.md) in the kickstart section of this guide.

Storybook files are placed into the component's directory.

## Skeleton
> Sandstorm VSCode snippet: `story`.

```tsx
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Component from '.';

storiesOf('Component', module)
  .add('TestCaseName', () => (
    <Component />
  ));
```
