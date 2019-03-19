---
id: testing
title: Testing
---

## Setup
Add react test renderer for snapshot testing:
```bash
yarn add react-test-renderer @types/react-test-renderer
```

## Skeleton
> Sandstorm VSCode snippet: `test`.

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestRenderer from 'react-test-renderer';

import Component from '.';

describe('Component tests', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Component />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    expect(ReactTestRenderer.create(<Component />)).toMatchSnapshot();
  });
});
```
