import React from 'react';
import '../App.css';

const Test = (props) => (
	<div>
		<div>
			<div class="col s10 card-panel blue lighten-4 text-white">
				<p>Enter a number and click generate</p>
				<input id="test-input" class='white' placeholder="enter something..." />
			</div>
			<button class="btn button" onClick={props.generate}>
				Generate
			</button>
		</div>
		
	</div>
);

export default Test;
