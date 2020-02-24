import React from 'react';
import { Link } from 'react-router-dom'
import './App_Navigation.css';
import logo from '../img/logo_pre.png'

function App_Navigation() {
  return (
    <div className="topBar">
		  <img className="centerImg" src={logo} alt="학원고" title="학원고"/>
      <Link to="/about">About</Link>
      <Link to="/request">Request</Link>
      <Link to="/search">Search</Link>
      <Link to="/">Home</Link>
	  </div>
  );
}

export default App_Navigation;