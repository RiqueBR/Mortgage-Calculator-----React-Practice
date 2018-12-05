import React, { Component } from 'react';
import './App.css';
import SalaryWrapper from './Container/salaryWrapper';


class App extends Component {
  render() {
    return (
      <SalaryWrapper className="outer-container" title="Mortgage Calculator"/>
    );
  }
}

export default App;
