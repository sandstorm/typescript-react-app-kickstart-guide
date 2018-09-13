import * as React from 'react';

import Template from '../../Components/Atoms/Template';
import CompanyTable from '../CompanyTable';
import EmployeeTable from '../EmployeeTable';
import logo from './logo.svg';

class App extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <main>
          <Template />
          <h1>Companies</h1>
          <CompanyTable/>

          <h1>Employees</h1>
          <EmployeeTable/>
        </main>
      </div>
    );
  }
}

export default App;
