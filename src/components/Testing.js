import React from 'react';
import '../App.css';

const Test = (props) => (
	<div>
		<div>
			<div class="col s10">
				<input id="test-input" placeholder="enter something..." />
			</div>
			<button class="btn button" onClick={props.generate}>
				generate
			</button>
		</div>
		
	</div>
);

export default Test;
