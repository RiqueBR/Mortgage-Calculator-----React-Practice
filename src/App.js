import React, { Component } from 'react';
import './App.css';
import SalaryWrapper from './Container/salaryWrapper';
import Grid from '@material-ui/core/Grid'

class App extends Component {
  render() {
    return (
      <SalaryWrapper title="Mortgage Calculator"/>
    );
  }
}

export default App;
