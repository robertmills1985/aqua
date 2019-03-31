import React from 'react';
import { generate } from '../helpers/generate';

const Test = (props) => (
	<div>
		<input id="test-input" placeholder="enter something..." />
        <button onClick={()=>generate(document.getElementById('test-input').value)}>generate</button>
	</div>
);

export default Test;
