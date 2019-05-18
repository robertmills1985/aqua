import React, { Component } from 'react';
import Test from './components/Testing';
import CustomerList from './components/CustomerList';

class App extends Component {
  constructor(){
    super()

    this.state = []
    
  }

	render() {
		return (
			<div className="App">
				<Test />
				<CustomerList />
			</div>
		);
	}
}

export default App;
