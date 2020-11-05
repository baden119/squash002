import React, { Component } from 'react';

class QueryInputs extends Component {


  // // It dosen't matter what you call this method, we're just going with onChange
  // onChange = (e) => this.setState({
  //   [e.target.name]: e.target.value
  // });
  //
  //
  onSubmit = (e) =>{
    e.preventDefault();
    // this.props.addTodo(this.state.title);
    // this.setState({title: '' });
  }

  inputDataFunction = (e) =>{
    this.props.subData(e.target)
    // this.props.subData(e.target.value)
  }


  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          /r/<input
            type="text"
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
      </div>
    );
  }
}

export default QueryInputs;
