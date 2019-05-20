import React, { Component } from 'react';

function list(input) {
    var newArray = []
	if (input === null || input == undefined) {
		return 'Nothing...';
	} else {
		for (var i = 0; i < input.length; i++) {
			newArray.push(<li>{input[i]}</li>);
		}
    }
    return newArray
}

const CustomerList = (props) => (
	<div>
		<h1>Customers</h1>
		<ol>{list(props.customers)}</ol>
	</div>
); 

export default CustomerList;
