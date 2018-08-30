import * as React from 'react';
import * as ReactDataGrid from 'react-data-grid';
import {connect} from 'react-redux';

import {IApplicationState, selectors} from '../../Redux/Store';
import createColumns from './createColumns';

const columns = createColumns();

const mapStateToProps = (state: IApplicationState) => ({
  employees: selectors.Data.Employees.employees(state),
});

type EmployeeTableProps = ReturnType<typeof mapStateToProps>;

class EmployeeTable extends React.PureComponent<EmployeeTableProps> {
  public render(): JSX.Element {
    return (
      <ReactDataGrid
      enableCellSelect={true}
      columns={columns}
      rowGetter={this.getRow}
      rowsCount={this.props.employees.length}
      minHeight={500}
      emptyRowsView={this.emptyView}
      />
    );
  }

  private readonly emptyView = () => <p style={{marginTop: '16px'}}>select a company to view its employees</p>;

  private readonly getRow = (rowIdx: number) => this.props.employees[rowIdx];
}

export default connect(mapStateToProps)(EmployeeTable);
