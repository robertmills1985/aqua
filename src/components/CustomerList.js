import React from 'react';
import '../App.css';

function list(input) {	
	var newArray = [];
	if (input === null || input == undefined) {
	} else {
		for (var i = 0; i < input.length; i++) {
			newArray.push(
				<div>
					<li id={i}  class="col s10 line-item">
						{input[i]}
					</li>
				</div>
			);
		}
	}
	return newArray;
}

const CustomerList = (props) => (
	<div id="CustomerList">
		<h1 class="card-panel">Customers</h1>
		<p>Total customers: {props.customers.length}</p>
		<ol id="order-list">{list(props.customers)}</ol> 
	</div>
);

export default CustomerList;
