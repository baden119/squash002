import React, { Component } from 'react';
import './App.css';
import QueryApi from './components/QueryApi';
import QueryInputs from './components/QueryInputs'
import CreateGraph from './components/CreateGraph'
import DurationDisplay from './components/DurationDisplay'

class App extends Component {

  state = {
      subreddit: '',
      after_date: '',
      before_date: '',
      api_data: [],
      duration: false
  }

  inputData = (input_data) => {
     this.setState({[input_data.name]: input_data.value});
   }

  apiData = (api_data) => {
    this.setState({
      api_data : api_data
    });
  }

  durationData = (durationData) =>{
    this.setState({duration : durationData });
  }

    render() {
      return (
        <div className="App">
          <h2>SQuASH v2.0</h2>
          <div className="input_components">
            <QueryInputs subData={this.inputData} />
            <DurationDisplay duration ={this.state.duration} />
          </div>
            <QueryApi apiData={this.apiData}
                      durationData={this.durationData}
                      subreddit={this.state.subreddit}
                      after_date={this.state.after_date}
                      before_date={this.state.before_date}
                      />

            <CreateGraph apiData={this.state.api_data} />
        </div>
      );
  }
}


export default App;
