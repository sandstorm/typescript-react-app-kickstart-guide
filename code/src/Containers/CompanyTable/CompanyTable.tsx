import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDataGrid from 'react-data-grid';
import {connect} from 'react-redux';

import {companyColumns} from '../../Domain/mockData';
import {actions, ApplicationState, selectors} from '../../Redux/Store';

const mapStateToProps = (state: ApplicationState) => ({
  rows: selectors.Data.Companies.companies(state),
});

const mapDispatchToProps = {
  selectCompany: actions.Data.Companies.selectCompany,
};

type CompaniesTableContainerProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

class CompaniesTableContainer extends React.PureComponent<CompaniesTableContainerProps> {
  public render(): JSX.Element {
    return (
      <ReactDataGrid
        enableCellSelect={true}
        columns={companyColumns}
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
