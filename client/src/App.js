import React from 'react';
import Header from './components/Header';
import './App.css';
import Articles from "./pages/Articles";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contacts from './pages/Contacts';


function App() {
  return (
    <div>
  <Router>
   <Header />
  <NavBar />
  <Route exact path="/" component={Articles} />
  <Route exact path="/contacts" component={Contacts} />
  {/* <Articles /> */}
  </Router>
  </div>
   
  );
}

export default App;
