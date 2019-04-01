import React from 'react';
import { generate } from '../helpers/generate';
import { checkForLetters } from "../helpers/checkForLetters";
import {abcOrder} from '../helpers/abcOrder'

var example = ['Sean Aniston','Bob Belcher','Elen Degenerojus','Bob Cole']

const Test = (props) => (
	<div>
		<input id="test-input" placeholder="enter something..." />
        <button onClick={()=>generate(document.getElementById('test-input').value)}>generate</button>
        <button onClick={()=>checkForLetters(document.getElementById('test-input').value)}>input check</button>
		<button onClick={()=>abcOrder(example)}>test abcOrder</button>
	</div>
);

export default Test;
