import React, { Component } from 'react';
import axios from 'axios';

class QueryApi extends Component {

  state = {
    subreddit: "",
    count: ""
  }

  clickClack = () => {
      axios.get('https://api.pushshift.io/reddit/submission/search/?subreddit=technology&aggs=subreddit&q=phone&size=0&after=2018-09-01&before=2018-10-01')
        .then(res => {
          this.setState(state => ({
            subreddit: res.data.aggs.subreddit[0].key,
            count: res.data.aggs.subreddit[0].doc_count
          }));

          // console.log(res.data.aggs.subreddit[0])
      })
  }


  render() {
    return (
      <div>
        <button onClick={ () => this.clickClack()} > Query API </button>
        <h3> {this.state.subreddit} | {this.state.count} </h3>
      </div>
    );
  }


} //QueryApi Class


export default QueryApi;
