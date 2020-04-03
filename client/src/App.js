import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';
import Articles from "./pages/Articles";
import Login from "./pages/Login";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contacts from './pages/Contacts';
import { UserContext } from "./context/UserContext";

function App() {

  const [userid, setUserId] = useState("");


  const updateUserId = (id) => {
    setUserId("random string")
    console.log("Test", id)
    setUserId(id)
    console.log(userid)
  }


  return (
      <Router>
        <div>
        <UserContext.Provider value={{ userid, updateUserId }}>
          <Header />
          <NavBar />
          <Route exact path="/" component={Login} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/contacts" component={Contacts} />
          </UserContext.Provider>

        </div>
      </Router>


  );
}

export default App;
