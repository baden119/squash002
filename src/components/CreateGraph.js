import React, { Component } from 'react';
import { VictoryChart, VictoryLine, VictoryTheme } from "victory";

class CreateGraph extends Component {

  render() {
    return (
      <div>
        <div style={{ maxWidth: "800px", margin: "0 auto", backgroundColor: "lightgrey" }}>
          <VictoryChart theme={VictoryTheme.material} width={800} height={400}>
            <VictoryLine data={this.props.apiData}
                        // labels = {({ datum }) => datum.y}
                        style={{
                          data: { stroke: "green" },
                          parent: { border: "1px solid #ccc"}
                        }}
                        animate={{
                          duration: 2000,
                          onLoad: { duration: 1000 }
                        }}/>

          </VictoryChart>
        </div>
      </div>
    );
  }
}

export default CreateGraph;
