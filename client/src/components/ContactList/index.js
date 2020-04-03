import React from "react";
import DeleteBtn from "../DeleteBtn";
import './style.css';

function ContactList(props) {
    console.log("Hello", props)
    return (
        <div className="wrapper">
        
            <ul className="list-group">
                {props.contacts.map(i => (
                    <li className="list-group-item" key={i._id}>
                    
                     <h5>{i.name}</h5>
                     <p>{i.phone}</p>
                     <DeleteBtn onClick={() => props.deleteContact(i._id)} />
                     <p>{i.email}</p>
                    
                   </li>
                ))}
            </ul>
        </div>


    );
}

export default ContactList;