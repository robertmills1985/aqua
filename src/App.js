import React, { Component } from 'react';
import Input from './components/Input'
import {makeCustomer} from './customers'
import CustomerList from './components/CustomerList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input />
        <CustomerList />
      </div>
    );
  }
}

export default App;
