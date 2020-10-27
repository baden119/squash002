import React, { Component } from 'react';
import moment from 'moment';
import { VictoryChart, VictoryLine, VictoryTheme } from "victory";

class CreateGraph extends Component {

  // timeTravel = () => {
  // }

  // state = {
  //   plot_data : [this.props.api_Data]
  // }

    // componentDidMount() {
    //   for (const [index, value] of this.props.apiData.entries()) {
    //     let data_point = {"date": moment.unix(value.key).format("MMMM, YYYY"), "submissions": value.doc_count};
    //     this.setState(state=>{
    //       this.state.plot_data.push(data_point)
    //     })}
    //     console.log("data added to state")
    //  }

  const dataFormatter = function() {
    console.log("DATAFORMATTER!!!!")
  }

  render() {
    return (
      <div>
        {console.log("rendering div")}
        {dataFormatter}
      {/* <button onClick={ () => this.timeTravel()} > Create Graph </button> */}
      {/* {this.props.apiData.map((item) => (
        <p>{(moment.unix(item.key).format("MMMM, YYYY"))} | {item.doc_count}</p>
      ))} */}
      {/* Victory Chart */}
      {/* console.log({this.state.plot_data})
       <div style={{ maxWidth: "800px", margin: "0 auto", backgroundColor: "lightgrey" }}>
         <VictoryChart theme={VictoryTheme.material} width={800} height={400}>
           <VictoryLine data={this.state.plot_data} />

         </VictoryChart>
        </div> */}
      </div>
    );
  }

}


export default CreateGraph;
