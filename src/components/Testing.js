import React from 'react';
import { generate } from '../helpers/generate';
import {abcOrder} from '../helpers/abcOrder'

const Test = (props) => (
	<div>
		<input id="test-input" placeholder="enter something..." />
        <button onClick={()=>generate(document.getElementById('test-input').value)}>generate</button>
		<button onClick={()=>abcOrder(props.customers)}>test abcOrder</button>
	</div>
);

export default Test;
