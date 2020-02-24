import React, { Fragment } from "react";
import { useAlert } from "react-alert";
import './Home_IdInput.css';
import searchButton from '../img/glass.png'

function Home_IdInput() {
  const alert = useAlert();
  return (
    <div className="back">
		  <h1>학원고 Coming Soon!</h1>
      <div className="inputBar">
        <input className="searchInput" type="text" name="hakoneName" placeholder="이메일/카톡아이디를 입력해주세요"/>
        <button onClick={() => {
          alert.success("입력되었습니다");
          }}className="searchButton"><img className="buttonImg" src={searchButton} alt="검색"/>
        </button>
      </div>
	  </div>
  );
}

export default Home_IdInput;