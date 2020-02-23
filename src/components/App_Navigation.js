import React from 'react';
import './App_Navigation.css';
import logo from '../img/logo_pre.png'

function App_Navigation() {
  return (
    <div className="topBar">
		<img className="centerImg" src={logo} alt="학원고" title="학원고"/>
	</div>
  );
}

export default App_Navigation;