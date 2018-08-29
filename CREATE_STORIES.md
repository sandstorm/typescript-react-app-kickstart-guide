# Storybook

Storybook files are placed into the directory of a component.

```
* Component
- * index.ts
- * Component.tsx
- * Component.story.tsx
```

## Skeleton

```tsx
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import ${1:ComponentName} from '.';

storiesOf('${1:ComponentName}', module)
  .add('${2:TestCaseName}', () => (
    <${1:ComponentName} />
  ));
```
