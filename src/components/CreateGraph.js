import React, { Component } from 'react';
import moment from 'moment';

class CreateGraph extends Component {

  // timeTravel = () => {
  // }

  render() {
    return (
      <div>
      {/* <button onClick={ () => this.timeTravel()} > Create Graph </button> */}
      {this.props.apiData.map((item) => (
        <p>{(moment.unix(item.key).format("MMMM, YYYY"))} | {item.doc_count}</p>
      ))}
      </div>
    );
  }

}

export default CreateGraph;
