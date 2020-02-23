import React from 'react';
import './App.css';
import App_Bottom from './components/App_Bottom';
import App_Navigation from './components/App_Navigation'
import Home_Img from './components/Home_Img'
import Home_SelectField from './components/Home_SelectField'
import Home_IdInput from './components/Home_IdInput'

function App() {
  return (
    <div className="innerBody">
      <App_Navigation/>
      <Home_IdInput/>
      <Home_Img/>
      <Home_SelectField/>
      <App_Bottom/>
    </div>
  );
}

export default App;