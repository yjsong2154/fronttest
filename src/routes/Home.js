import React from 'react';
import Home_Img from '../components/Home_Img'
import Home_SelectField from '../components/Home_SelectField'
import Home_IdInput from '../components/Home_IdInput'

function Home() {
  return (
    <div>
      <Home_IdInput/>
      <Home_Img/>
      <Home_SelectField/>
    </div>
  );
}

export default Home;