import React from 'react';
import '../App.css';
/*This component is the interface for how the user can create data*/
const CreateCustomer = (props) => (
	<div class="card-panel">
		<div class="blue">
			<h5 class="title">Add a customer</h5>
		</div>
		<div class="row">
			<div class="col s4 c-input">
				<p>Enter first name:</p>
			</div>
			<div class="col s7 pull-s1">
				<input id="c-fname" />
			</div>
		</div>
		<div class="row">
			<div class="col s4 c-input">
				<p>Enter last name:</p>
			</div>
			<div class="col s7 pull-s1">
				<input id="c-lname" />
			</div>
		</div>
		<div class="row">
			<div class="col s4 c-input">
				<p>Enter address:</p>
			</div>
			<div class="col s7 pull-s1">
				<input id="c-address" />
			</div>
		</div>
		<button class="btn" onClick={props.handleCreateCustomer}>
			Submit
		</button>
	</div>
);
export default CreateCustomer;
