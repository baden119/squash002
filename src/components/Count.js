import React, { Component } from 'react';

class Count extends Component {

  state = {
    count: 0
  }

  count = () => {
    this.setState(state => ({
      count: state.count +1
    }));
  }

  render() {
    return (
      <div>
        <h1> {this.state.count} </h1>
        <button onClick={this.count}> Count! </button>
      </div>
    );
  }
}

export default Count;
