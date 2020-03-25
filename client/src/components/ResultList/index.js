import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
    
      {props.results.map(i => (
        <li className="list-group-item" key={i.id}>
          <p>{i.headline}</p>
        </li>
      ))}
    </ul>
  );
}

export default ResultList;