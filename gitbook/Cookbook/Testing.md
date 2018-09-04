# Create Tests

## Skeleton

```tsx
import * as React from 'react';
import {render} from 'react-dom';
import * as ReactTestRenderer from 'react-test-renderer';
import Component from '.';

describe('Component tests', () => {
  it('should render without crashing', () => {
    render(<Component/>, document.createElement('div'));
  });

  it('should match snapshot', () => {
    expect(ReactTestRenderer.create(<Component/>)).toMatchSnapshot();
  });
});
```
