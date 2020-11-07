import React, { Component } from 'react';

class QueryInputs extends Component {

  onSubmit = (e) =>{
    e.preventDefault();
  }

  inputDataFunction = (e) =>{
    this.props.subData(e.target)
  }

  clearInputs = () => {
    // document.getElementById("subreddit_input").value = ''
    // console.log(document.getElementById("subreddit_input").value)
    // document.getElementById("inputs").reset();
    this.props.durationData('not ready');
  }

  makeReady = () => {
    this.props.durationData('ready');
  }

  render() {
    return (
      <div style={{ flexDirection: "column" }} className="user_inputs">
        <form id="inputs" onSubmit={this.onSubmit}>
          /r/<input
            type="text"
            id="subreddit_input"
            name="subreddit"
            placeholder="Subreddit"
            onChange={this.inputDataFunction}
          />
          <p></p>
          After:<input
            type="date"
            name="after_date"
            onChange={this.inputDataFunction}
          />
          <p></p>
          Before:<input
            type="date"
            name="before_date"
            onChange={this.inputDataFunction}
          />
        </form>
        <div>
          <button onClick={ () => this.clearInputs()}>clear inputs</button>
          <button onClick={ () => this.makeReady()}>ready</button>
        </div>
      </div>
    );
  }
}

export default QueryInputs;
