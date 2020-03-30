import React, { useEffect, useState } from "react";
import API from "../utils/API";
import ContactList from "../components/ContactList";
// import Input from "../components/Input";
// import Button from "../components/Button";


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
                .then(res => 
                    setContacts(res.data)
                     )
                .catch(err => console.log(err));
        }
        function deleteContact(id) {
            API.deleteContact(id)
              .then(res => loadContacts())
              .catch(err => console.log(err));
          }
    

    return (
        <div>
                <ContactList contacts={contacts} deleteContact={deleteContact}/>
            </div>


    )
}

export default Contacts