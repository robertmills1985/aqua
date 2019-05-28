import React, { Component } from 'react';
import Test from './components/Testing';
import CustomerList from './components/CustomerList';
import CreateCustomer from './components/CreateCustomer';
import { generate } from './helpers/generate';
import { abcOrder } from './helpers/abcOrder';
import './App.css';
import ModifyCustomer from './components/ModifyCustomer';
import Search from './components/Search';

class App extends Component {
	constructor() {
		super();

		this.state = {
			customers: [],
			results: []
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
	handleDelete(input) {
		var newArray = [];
		var stateCopy = this.state.customers;
		var num = input - 1;
		var select = this.state.customers[num];
		//console.log(stateCopy.length)
		//console.log(`state copy = ${stateCopy}`);
		//console.log(`num = ${num}`);
		//console.log(`select = ${select}`);
		for (var i = 0; i < stateCopy.length; i++) {
			if (stateCopy[i] != select) {
				newArray.push(stateCopy[i]);
			}
		}
		//console.log(newArray.length)
		this.setState({
			customers: newArray
		});
	}
	handleModify(input) {
		var stateCopy = this.state.customers;
		var num = input - 1;
		var select = this.state.customers[num].split(' ');
		var addy = select.slice(2, 6).join(' ');
		var newCustomer = [];
		//console.log(addy)
		var first = document.getElementById('modify-fname').value;
		var last = document.getElementById('modify-lname').value;
		var address = document.getElementById('modify-address').value;

		var constant = [ select[0], select[1], addy ];
		var comparison = [ first, last, address ];
		for (var i = 0; i < 3; i++) {
			if (comparison[i] != '') {
				newCustomer.push(comparison[i]);
			} else {
				newCustomer.push(constant[i]);
			}
		}
		newCustomer = newCustomer.join(' ');
		stateCopy[num] = newCustomer;
		stateCopy = abcOrder(stateCopy);

		//console.log(stateCopy);
		this.setState({
			customers: stateCopy
		});
	}
	handleSearch(input) {
		var stateCopy = this.state.customers;
		//console.log(`input is ${input}. stateCopy is ${stateCopy[0].split(' ')[0]}`)
		var resultsArray = []
		for (var i = 0; i < stateCopy.length; i++) {
			var foundArray = [];
			var fName = stateCopy[i].split(' ')[0];
			var lName = stateCopy[i].split(' ')[1];
			//console.log(`search criteria is ${fName} ${lName}`)
			if (input === fName || input === lName) {
				resultsArray.push(<li>{`${i + 1}. ${stateCopy[i]}`}</li>);
			}
		}
		this.setState({
			results:resultsArray
		})
	}

	render() {
		return (
			<div>
				<header id="header" class="blue white-text" >
				
				</header>
				<div>
					<Search
						search={() => this.handleSearch(document.getElementById('search-input').value)}
						results={this.state.results}
					/>
				</div>
				<div class=" container row">
					<div class="col s6">
						<CustomerList customers={this.state.customers} />
					</div>
					<div class="col s6  ">
						<CreateCustomer handleCreateCustomer={() => this.handleCreateCustomer(this.state.customers)} />
						<ModifyCustomer
							delete={() => this.handleDelete(document.getElementById('delete-input').value)}
							modify={() => this.handleModify(document.getElementById('modify-input').value)}
						/>
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
