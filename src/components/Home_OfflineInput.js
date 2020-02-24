import React, { useState } from 'react';
import { Fragment } from "react";
import { useAlert } from "react-alert";
import './Home_OfflineInput.css';

function Home_OfflineInput(){
  const alert = useAlert();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Fragment>
    <div className="inputField">
      <h2 className="inputTitle">학원 자문 요청</h2>
      <input className="textInput" type="text" name="parentsName" placeholder="학부모명"/>
      <input className="textInput" type="text" name="childName" placeholder="자녀명"/>
      <input className="textInput" type="text" name="phone" placeholder="전화번호"/>
      <input className="textInput" type="text" name="place" placeholder="거주지 (동까지)"/>
      <input className="textInput" type="text" name="childGrage" placeholder="자녁 학년"/>
      <input className="textInput" type="text" name="childSchool" placeholder="자녀 학교"/>
      <textarea className="massageInput" type="text" name="message" rows="10" cols="30" placeholder="기타 요청 사항 (관심 과목, 성적대, 성향 등)"/>
      <label className="checkbox"><input className="checkbox" type="checkbox" onChange={ () => setIsChecked(!isChecked) } name="agree"/>개인정보 수집 및 이용에 동의합니다.</label>
      <button onClick={isChecked ? 
        () => {alert.success("검토 후 1영업일 이내에 회신드리겠습니다.");} : 
        () => {alert.error("개인정보 동의 및 이용에 체크해 주십시오");}
        }className="inputButton">접수하기
      </button>
    </div>
    </Fragment>
  );
}

export default Home_OfflineInput;