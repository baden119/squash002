import React, { Component } from 'react';
import axios from 'axios';

class QueryApi extends Component {

  state = {
    api_data : []
  }

  queryApi = () => {
      const url = 'https://api.pushshift.io/reddit/search/submission';
      const params = {
        "subreddit": this.props.subreddit,
        "after": this.props.after_date,
        "before": this.props.before_date,
        "frequency": "month",
        "aggs" : "subreddit,created_utc",
        "size": 0
      }

      axios.get(url, { params: params })
        .then(res => {
          this.setState(state => ({
            api_data : res.data.aggs.created_utc
          }))
          this.apiDataFunction()
      ;})
  }

  apiDataFunction = () =>{
    this.props.apiData(this.state.api_data)
  }

  render() {
    return (
      <div>
        <button onClick={ () => this.queryApi()} > Query API </button>
      </div>
    );
  }


} //QueryApi Class


export default QueryApi;
