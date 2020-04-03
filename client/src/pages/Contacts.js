import React, { useEffect, useState, useContext } from "react";
import API from "../utils/API";
import ContactList from "../components/ContactList";
import { UserContext }  from "../context/UserContext";
// import Input from "../components/Input";
// import Button from "../components/Button";


function Contacts(props) {
    const [contacts, setContacts] = useState([]);
    const [formObject, setFormObject] = useState({
        name: "",
        phone: "",
        email: ""
      })
    // const { userid } = useContext(UserContext);
    // console.log(contacts)
    // const [contactSearch, setContactSearch] = useState("");

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };

    const handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior, get recipes update the recipes state
        event.preventDefault();
        API.saveContact({
            name: formObject.name,
            phone: formObject.phone,
            email: formObject.email
        })   .then(() => setFormObject({
            name: "",
            phone: "",
            email: ""
          }))
          .then(() => loadContacts())
          .catch(err => console.log(err));
      };
    
    useEffect(() => {
        loadContacts()
        console.log(contacts)
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

                 <form className="form">
            <input
                onChange={handleInputChange}
                type="text"
                placeholder="Name"
                name="name"
                value={formObject.name}
            />
            <input
                onChange={handleInputChange}
                type="text"
                placeholder="Phone Number"
                name="phone"
                value={formObject.phone}
            />
            <input
                onChange={handleInputChange}
                type="text"
                placeholder="Email"
                name="email"
                value={formObject.email}
            />
            <button 
            type="submit" onClick={handleFormSubmit}>Submit</button>
        </form>
            </div>


    )
}

export default Contacts