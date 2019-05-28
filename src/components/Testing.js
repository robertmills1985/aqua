import React from 'react';
import '../App.css';

const Test = (props) => (
	<div id="test-panel" class='blue lighten-4'>
		<div >
			<div class="row blue lighten-4 text-white">
				<p>Enter a number and click generate</p>
				<input id="test-input" class="white col s6" placeholder="enter something..." />
				<button class="btn pulse col s2 push-s1 " onClick={props.generate}>
					Generate
				</button>
			</div>
		</div>
	</div>
);

export default Test;
