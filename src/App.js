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
      api_data: [
              {
                "doc_count": 6736,
                "key": 1577836800
              },
              {
                "doc_count": 8000,
                "key": 1580515200
              },
              {
                "doc_count": 10058,
                "key": 1583020800
              },
              {
                "doc_count": 10600,
                "key": 1585699200
              },
              {
                "doc_count": 7202,
                "key": 1588291200
              },
              {
                "doc_count": 5397,
                "key": 1590969600
              },
              {
                "doc_count": 7457,
                "key": 1593561600
              },
              {
                "doc_count": 5632,
                "key": 1596240000
              },
              {
                "doc_count": 4696,
                "key": 1598918400
              }
            ]
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
          <QueryApi subreddit={this.state.subreddit}
                    after_date={this.state.after_date}
                    before_date={this.state.before_date}
                    apiData={this.apiData}/>
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          <CreateGraph apiData={this.state.api_data} />
        </div>
      );
  }
}


export default App;
