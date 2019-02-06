import React, { Component } from 'react';
import SignUp from './components/SignUp/SignUp'


class App extends Component {
  render() {
    return (
      <div className="App">
        <SignUp email={'Enter your email.'} password={'Enter a password.'}/>
      </div>
    );
  }
}

export default App;
