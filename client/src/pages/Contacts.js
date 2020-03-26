import React, { useEffect, useState } from "react";
import API from "../utils/API";
import {ContactList, ContactListItem} from "../components/ContactList";
import Input from "../components/Input";
import Button from "../components/Button";


function Contacts() {
    const [contacts, setContacts] = useState([]);
    // const [contactSearch, setContactSearch] = useState("");

    // const handleInputChange = event => {
    //     // Destructure the name and value properties off of event.target
    //     // Update the appropriate state
    //     const { value } = event.target;
    //     setContactSearch(value);
    // };

    // const handleFormSubmit = event => {
    //     // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    //     event.preventDefault();
    // };
    useEffect(() => {
        loadContacts()
      }, [])

        function loadContacts() {
            API.getContacts()
                .then(res => setContacts(res.data))
                .catch(err => console.log(err));
        }
    

    return (
        <div>
            {/* <Input
                name="ContactSearch"
                value={contactSearch}
                onChange={handleInputChange}
                placeholder="Search For a Contact"
            />
            <Button
                onClick={handleFormSubmit}
                type="success"
                className="input-lg">
                Search
            </Button> */}
            <ContactList>
                {contacts.map(contact => {
                  return (
                    <ContactListItem
                      key={contact._id}
                      name={contact.name}
                      phone={contact.phone}
                      email={contact.email}
                      
                    />
                  );
                })}
              </ContactList>

        </div>


    )
}

export default Contacts