import React, { Component } from "react";
import API from "../../utils/API";
import ResultList from "../ResultList"

class Articles extends React.Component {
    state = {
    result: {},
    search: ""
    }

componentDidMount() {
    this.searchArticles("CoronaVirus");
    
  }

  searchArticles = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data.response.docs }))
      .catch(err => console.log(err));
  };


  render () {
    console.log(this.state.result)
    return (
        <div className="container">
            <ResultList results={this.state.result}/>
        </div>
    )
}

}

export default Articles;