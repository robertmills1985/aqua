import React from 'react';
import '../App.css'

function list(input) {
    var newArray = []
	if (input === null || input == undefined) {
		
	} else {
		for (var i = 0; i < input.length; i++) {
			newArray.push(<li >{input[i]}</li>);
		}
    }
    return newArray
}

const CustomerList = (props) => (
	<div id='CustomerList'>
		<h1 class='card-panel'>Customers</h1>
		<ol id='order-list' >{list(props.customers)}</ol>
	</div>
); 

export default CustomerList;
