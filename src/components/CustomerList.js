import React from 'react';
import '../App.css';

function list(input) {
	var newArray = [];
	if (input === null || input == undefined) {
	} else {
		for (var i = 0; i < input.length; i++) {
			newArray.push(
				<div>
					<li id={'customer ' + i} class="col s10 line-item">
						{input[i]}
					</li>
					{/*<p class="col s2 card-panel green center edit-btn">
						Edit
					</p>*/}
				</div>
			);
		}
	}
	return newArray;
}

const CustomerList = (props) => (
	<div id="CustomerList">
		<h1 class="card-panel">Customers</h1>
		<ol id="order-list">{list(props.customers)}</ol> 
	</div>
);

export default CustomerList;
