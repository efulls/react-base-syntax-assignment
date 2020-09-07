import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username:'superfull'
  }

  usernameChangedHandler = (event) => {
    this.setState({username:event.target.value});
  }

  render() {
    return (
      <div className="App">
        <ol>
          <li>Create TWO components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two</li>
          <li>Output multiple UserOutPut compenents in the App component</li>
          <li>Pass a username (of your choice) to UserOutPut via prop</li>
          <li>Add state to the App component ( username)</li>
          <li>Add a methode to manipulate the state ({React.version})</li>
        </ol>
  
        <UserInput 
          changed={this.usernameChangedHandler} 
          currentName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName="Yuwana"/>
      </div>
    );
  }
}

export default App;
