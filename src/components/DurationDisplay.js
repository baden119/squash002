import React, { Component } from 'react';

class DurationDisplay extends Component {

  render() {
    if (this.props.duration === 'not ready'){
      return (
        <div className="not_ready">
          Status NOT READY
        </div>
      );
    } else if (this.props.duration === 'ready'){
      return (
        <div className="ready">
          Status READY
        </div>
      );
    } else if(this.props.duration === 'processing'){
      return (
        <div className="processing">
          Status PROCESSING
        </div>
      );
    } else if(this.props.duration === 'completed'){
    return (
        <div className="completed">
          Status COMPLETED
        </div>
      );
    }

  }
}

export default DurationDisplay;
