import React, { Component } from 'react';

function list(input){
    for(var i = 0; i < input.length; i++)
}

const CustomerList = (props) => (
	<div>
		<h1>Customers</h1>
		<p>{props.customers}</p>
	</div>
);

export default CustomerList;
