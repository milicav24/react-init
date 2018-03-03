import React, { Component } from 'react';
import './App.css';
import MyCustomComponent from './MyCustomComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="frame">
      <p className="text">Hang Man</p>
        <MyCustomComponent />
      </div>
    );
  }
}
export default App;
