import React, { Component } from 'react';
import Test from './components/Testing';
import CustomerList from './components/CustomerList';
import CreateCustomer from './components/CreateCustomer';
import { generate } from './helpers/generate';
import { abcOrder } from './helpers/abcOrder';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			customers: []
		};
	}
	handleGenerate() {
		var newCustomers = generate(document.getElementById('test-input').value);
		newCustomers = abcOrder(newCustomers);
		this.setState({
			customers: newCustomers
		});
	}
	handleCreateCustomer(input) {
		var customers = input;
		var newCustomer = [];
		newCustomer.push(document.getElementById('c-fname').value);
		newCustomer.push(document.getElementById('c-lname').value);
		newCustomer.push(document.getElementById('c-address').value);
		newCustomer = newCustomer.join(' ');

		customers.unshift(newCustomer);
		customers = abcOrder(customers);

		this.setState({
			customers: customers
		});
		
	}

	render() {
		return (
			<div class="container">
				<div class="row">
					<div class="col s6">
						<CustomerList customers={this.state.customers} />
					</div>
					<div class="col s6  ">
						<h1 class="card-panel center">Add customer</h1>
						<CreateCustomer handleCreateCustomer={() => this.handleCreateCustomer(this.state.customers)} />
					</div>
				</div>
				<div id="test-panel">
					<Test generate={() => this.handleGenerate()} abc={() => this.handleAbc()} />
				</div>
			</div>
		);
	}
}

export default App;
