# Create Tests

## Skeleton

```tsx
import * as React from 'react';
import {render} from 'react-dom';
import * as ReactTestRenderer from 'react-test-renderer';
import ${1:ComponentName} from '.';

describe('${1:ComponentName} tests', () => {
  it('should render without crashing', () => {
    render(<${1:ComponentName}/>, document.createElement('div'));
  });

  it('should match snapshot', () => {
    expect(ReactTestRenderer.create(<${1:ComponentName}/>)).toMatchSnapshot();
  });
});

```
