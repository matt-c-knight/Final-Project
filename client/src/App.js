import React from 'react';
import Header from './components/Header';
import './App.css';
import Articles from "./pages/Articles";
import Login from "./pages/Login";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contacts from './pages/Contacts';


function App() {
  return (

    <Router>
      <div>
        <Header />
        <NavBar />
        <Route exact path="/" component={Login} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/contacts" component={Contacts} />
      </div>
    </Router>


  );
}

export default App;
