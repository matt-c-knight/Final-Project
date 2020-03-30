import React from "react";
import API from "../utils/API";
import ResultList from "../components/ResultList"

class Articles extends React.Component {
    state = {
        result: [],
        search: ""
    }

    

    searchArticles = query => {
        API.search(query)
            .then(res => {
                console.log(res.data.response.docs)
                this.setState({ result: [...res.data.response.docs] })
            })
            .catch(err => console.log(err));
    };

    componentDidMount() {
        this.searchArticles("CoronaVirus");

    }


    render() {
        console.log("Good afternoon", this.state.result)
        
        return (
            <div className="container">
                <ResultList results={this.state.result} />
            </div>
        )
    }

}

export default Articles;