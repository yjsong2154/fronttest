import React from 'react';
import './Home_Img.css';
import pptImg from '../img/school.jpg'

function App_Navigation() {
  return (
    <div>
		  <img className="pptImg" src={pptImg} alt="학원고의 이념" title="학원고 설명"/>
	  </div>
  );
}

export default App_Navigation;