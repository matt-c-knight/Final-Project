import React from "react";
import './style.css';

function ResultList(props) {
    console.log("Hello", props)
    return (
        <div className="wrapper">
        <h2>Headlines</h2>
            <ul className="list-group">
                {props.results.map(i => (
                    <li className="list-group-item" key={i.id}>
                     <a href={i.web_url}>{i.abstract}</a>
                    </li>
                ))}
            </ul>
        </div>


    );
}

export default ResultList;
