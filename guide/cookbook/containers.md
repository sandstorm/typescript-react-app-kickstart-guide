---
id: containers
title: Containers
---

Containers - sometimes called _connected_ or _smart_ components - are connected to the Redux store and usually wrap [_presentational_ Components](components.md) and provide them with data from the store.

Containers should not render any markup themselves. Try to use `React.Fragment` rather than `div`.

Containers do not have to be large constructs. In fact it's recommended to use small containers that only connect to a minimal portion of the state.

## Skeleton
> Sandstorm VSCode snippet: `container`.

```tsx
import React from 'react';
import { connect } from 'react-redux';

import { actions, ApplicationState, selectors } from '../../Redux/Store';

const mapStateToProps = (state: ApplicationState) => ({});

const mapDispatchToProps = {};

type TemplateContainerProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

class TemplateContainer extends React.PureComponent<TemplateContainerProps> {
  public render(): JSX.Element {
    return <React.Fragment>Hello TemplateContainer!</React.Fragment>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateContainer);
```
