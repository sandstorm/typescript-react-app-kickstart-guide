import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDataGrid from 'react-data-grid';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {actions, IApplicationState, selectors} from '../../Redux/Store';
import createColumns from './createColumns';

const columns = createColumns();

const mapStateToProps = (state: IApplicationState) => ({
  rows: selectors.Data.Companies.companies(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  selectCompany: (id?: string) => dispatch(actions.Data.Companies.selectCompany(id)),
});

type CompaniesTableContainerProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class CompaniesTableContainer extends React.PureComponent<CompaniesTableContainerProps> {
  public render(): JSX.Element {
    return (
      <ReactDataGrid
        enableCellSelect={true}
        columns={columns}
        rowGetter={this.getRow}
        rowsCount={this.props.rows.length}
        minHeight={500}
        onCellSelected={this.handleCellSelect}
      />
    );
  }

  private readonly getRow = (rowIdx: number) => this.props.rows[rowIdx];

  private readonly handleCellSelect = (coordinates: {readonly rowIdx: number, readonly idx: number}) => {
    const company = this.getRow(coordinates.rowIdx);
    this.props.selectCompany(company ? company.id : undefined);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesTableContainer);
