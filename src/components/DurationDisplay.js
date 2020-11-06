import React, { Component } from 'react';

class DurationDisplay extends Component {
  getStyle = () =>{
    if (this.props.duration){
      return{
        backgroundColor: 'chartreuse',
      }
    } else {
      return{
        backgroundColor: 'lightpink'
      }
    }
}

  render() {
    if (this.props.duration){
      return (
        <div className="duration_display">
          Duration Display Box
          Status FALSE
        </div>
      );
    } else{
      return (
        <div className="duration_display">
          Duration Display Box
          Status TRUE
        </div>
      );
    }
  }
}

export default DurationDisplay;
