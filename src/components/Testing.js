import React from 'react';
import {runTest} from '../testing'

const Test = (props) => (
	<div>
		<input id="test-input" placeholder="enter something..." />
        <button onClick={props.generate}>generate</button>
		<button onClick={props.abc}>Alphabetical Order</button>
		<div>
			<p>Running tests button requires 4 arguments seperated by commas.</p>
			<p>First argument is how many rounds to run. Second is how many sets per round</p>
			<p>The third argument will toggle the view for individual tests</p>
			<p>The fourth argument will toggle abcOrder() on or off</p>
			<p>example1: 3,5,on,off</p>
			<p>example2: 10,100,on,on</p>
			<button onClick={()=>runTest(document.getElementById('test-input').value )}>Run tests</button>
		</div>
		
	</div>
);

export default Test;
