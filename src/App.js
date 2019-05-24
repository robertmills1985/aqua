import React, { Component } from 'react';
import Test from './components/Testing';
import CustomerList from './components/CustomerList';
import { generate } from './helpers/generate';
import { abcOrder } from './helpers/abcOrder';
import './App.css';

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
			<div class="container">
				<div class="row">
					<div class="col s6 center ">
						<CustomerList customers={this.state.customers} />
					</div>
					<div class='col s6 center '>
						<h1 class='card-panel'>Add customer</h1>
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
