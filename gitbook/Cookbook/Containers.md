# Containers

Or sometimes called _connected_ or _smart_ components are connected to the Redux store and usually wrap [_presentational_ Components](Components.md) and provide them with data from the store.

Containers usually render no markup themselves. Try to use `React.Fragment` if otherwise using `div`.

Containers do not have to be large constructs. In fact it's recommended to use small containers that only connect to a minimal portion of the state.

## Skeleton
> Sandstorm VSCode snippet: `container`.

```tsx
import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import {actions, ApplicationState, selectors} from '../../Redux/Store';

const mapStateToProps = (state: ApplicationState) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

type TemplateContainerProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class TemplateContainer extends React.PureComponent<TemplateContainerProps> {
  public render(): JSX.Element {
    return <React.Fragment>TemplateContainer</React.Fragment>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateContainer);
```
