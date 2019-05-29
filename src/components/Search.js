import React from 'react';


const Search = (props) => (
	<div>
		<div id="search-panel" class="blue lighten-4 hoverable">
			<h5>Enter a first or last name:</h5>
			<input id="search-input" />
			<button class="btn" onClick={props.search}>
				Submit
			</button>
			<div>
				<p>Results:</p>
                <p id='total-found'>{`Total found ${props.results.length}`}</p>
				<ul>{props.results}</ul>
			</div>
		</div>
	</div>
);

export default Search;
