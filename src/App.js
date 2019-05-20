import React, { Component } from 'react';
import Test from './components/Testing';
import CustomerList from './components/CustomerList';
import { generate } from './helpers/generate';
import { abcOrder } from './helpers/abcOrder';

class App extends Component {
	constructor() {
		super();

		this.state = {
			customers: null
		};
	}
	handleGenerate() {
		var newCustomers = generate(document.getElementById('test-input').value);
		this.setState({
			customers: newCustomers
		});
	}
	handleAbc() {
    var newOrder = abcOrder(this.state.customers);
		this.setState({
			customers: newOrder
		});
	}

	render() {
		return (
			<div className="App">
				<Test generate={() => this.handleGenerate()} abc={()=>this.handleAbc()} />
				<CustomerList customers={this.state.customers} />
			</div>
		);
	}
}

export default App;
