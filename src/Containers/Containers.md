# Containers

Or sometimes called _connected_ or _smart_ components are connected to the Redux store and usually wrap [_presentational_ Components](../Components/Components.md) and provide them with data from the store.

Containers usually render no markup themselves. Try to use `React.Fragment` if otherwise using `div`.

## Skeleton
```tsx
import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {actions, IApplicationState, selectors} from '../../Redux/Store';

const mapStateToProps = (state: IApplicationState) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

type ${1:ContainerName}Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class ${1:ContainerName} extends React.PureComponent<${1:ContainerName}Props> {
  public render(): JSX.Element {
    return <React.Fragment>${1:ContainerName}</React.Fragment>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(${1:ContainerName});
```
