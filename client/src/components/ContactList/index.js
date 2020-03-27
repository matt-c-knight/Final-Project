import React from "react";

export function ContactList({ children }) {
    return <ul className="list-group">{children}</ul>;
  }

export function ContactListItem({
    key,
    name,
    phone,
    email
    }) {
    return (
        <div className="container">
            <div className="row" data-key={key}>
                <div className="col-md-4">
                    <h4>{name}</h4>
                </div>
                <div className="col-md-4">
                    <p>{phone}</p>
                </div>
                <div className="col-md-4">
                    <p>{email}</p>
                </div>
            </div>
        </div>
    )
    };