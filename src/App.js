import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increaseCount() {
    this.setState({ count: this.state.count + 1 });
  }

  resetCount() {
    this.setState({ count: 0 });
  }

  decreaseCount() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <div className="wrapper">
          <button onClick={() => this.decreaseCount()}>Decrease</button>
          <h1 className="count">{this.state.count}</h1>
          <button onClick={() => this.increaseCount()}>Increase</button>
        </div>
        <div className="sub-wrapper">
          <button onClick={() => this.resetCount()}>Reset</button>
        </div>
      </div>
    );
  }
}

export default App;
