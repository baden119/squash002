import React, { Component } from 'react';
// import axios from 'axios';
import moment from 'moment';


class QueryApi extends Component {


  queryApi = () => {
      // Altering queryApi function while API is (hopefully temporarily) offline.

      // const url = 'https://api.pushshift.io/reddit/search/submission';
      // const params = {
      //   "subreddit": this.props.subreddit,
      //   "after": this.props.after_date,
      //   "before": this.props.before_date,
      //   "frequency": "month",
      //   "aggs" : "subreddit,created_utc",
      //   "size": 0
      // }
      // console.log("query sent")
      // axios.get(url, { params: params })
      //   .then(res => {
      //     console.log("query complete")
      //     console.log(res.data)
      //     // console.log(res.data.aggs.created_utc)
      //     // this.setState(state => ({
      //     //   api_data : res.data.aggs.created_utc
      //     // }))
      //     // apiDataFunction(this)
      // })

      const data = [
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
                  ];

      this.props.durationData(true);
      console.log("B4 timeout function");
      setTimeout(() => {  this.apiDataFunction(data); }, 3000);

  }

  apiDataFunction = (data) =>{
    this.props.durationData(false);
    console.log("after timeout function");

    // empty array for map data
    let map_data = []

    // loop through data
    for (const coord in data){

      // create object with month and submission count data and add to map_data array
      let coord_obj = {x:(moment.unix(data[coord].key).format("MMM, YYYY")), y:data[coord].doc_count}
      map_data.push(coord_obj)
    }

    // send map_data back to App.js as a prop.
    this.props.apiData(map_data)
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
