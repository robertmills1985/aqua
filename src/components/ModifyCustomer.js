import React from 'react';
/*  This component is the interface for how a user would modify existing data */
const ModifyCustomer = (props) => (
	<div>
		<div class="card-panel ">
			<div class="blue">
				<h5 class="title">Modify customer</h5>
			</div>
			<div class="">
				<p>Enter customer number</p>
				<input id="modify-input" />
				<input id="modify-fname" placeholder="enter new first name" />
				<input id="modify-lname" placeholder="enter new last name" />
				<input id="modify-address" placeholder="enter new address" />
				<button onClick={props.modify} class="btn">
					Submit
				</button>
			</div>
		</div>
		<div class="card-panel">
			<div class="blue">
				<h5 class="title">Delete customer</h5>
			</div>
			<div class="">
				<p>Enter customer number</p>
				<input id="delete-input" />
			</div>

			<button class="red btn" onClick={props.delete}>
				Delete
			</button>
		</div>
	</div>
);
export default ModifyCustomer;
