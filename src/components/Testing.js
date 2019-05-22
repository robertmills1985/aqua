import React from 'react';

const Test = (props) => (
	<div>
		<input id="test-input" placeholder="enter something..." />
        <button onClick={props.generate}>generate</button>
		<button onClick={props.abc}>alphabetical order</button>
	</div>
);

export default Test;
