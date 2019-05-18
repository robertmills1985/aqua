import React, { Component } from 'react';
import Test from './components/Testing';
import CustomerList from './components/CustomerList';
import {generate} from './helpers/generate'

class App extends Component {
  constructor(){
    super()

    this.state = {
      customers: null
    }

  }
  handleGenerate(){
    var newCustomers = generate(document.getElementById('test-input').value )
    console.log('newCustomers = ' + newCustomers.length)
    this.setState({
      customers: newCustomers
    })
  }

	render() {
		return (
			<div className="App">
				<Test generate={()=>this.handleGenerate()}  />
				<CustomerList customers={this.state.customers} />
			</div>
		);
	}
}

export default App;
