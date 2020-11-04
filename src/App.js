import React, { Component } from 'react';
import './App.css';
import QueryApi from './components/QueryApi';
import QueryInputs from './components/QueryInputs'
import CreateGraph from './components/CreateGraph'

class App extends Component {

  state = {
      subreddit: '',
      after_date: '',
      before_date: '',
      api_data: []
  }

  inputData = (input_data) => {
     this.setState({[input_data.name]: input_data.value});
   }

  apiData = (api_data) => {
    this.setState({
      api_data : api_data
    });
  }

    render() {
      return (
        <div className="App">
          <QueryInputs subData={this.inputData} />
          <QueryApi apiData={this.apiData}
                    subreddit={this.state.subreddit}
                    after_date={this.state.after_date}
                    before_date={this.state.before_date}/>
          <CreateGraph apiData={this.state.api_data} />
        </div>
      );
  }
}


export default App;
