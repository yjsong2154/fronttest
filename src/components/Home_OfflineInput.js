import React , { Fragment } from "react";
import { useAlert } from "react-alert";
import './Home_OfflineInput.css';

function Home_OfflineInput() {
  const alert = useAlert();
  return (
    <div className="inputField">
      <h2 className="inputTitle">학원 자문요청</h2>
      <input className="textInput" type="text" name="parentsName" placeholder="학부모명"/>
      <input className="textInput" type="text" name="childName" placeholder="자녀명"/>
      <input className="textInput" type="text" name="childGrage" placeholder="자녀 학년"/>
      <input className="textInput" type="text" name="childSchool" placeholder="자녀 학교"/>
      <input className="textInput" type="text" name="phone" placeholder="전화번호 (-빼고 입력)"/>
      <input className="textInput" type="text" name="place" placeholder="거주지(동까지 기재)"/>
      <textarea className="massageInput" type="text" name="message" rows="10" cols="30" placeholder="기타 요청 사항 (관심 과목, 성적대, 성향 등)"/>
      <input className="checkbox" type="checkbox" name="computer" value="Memory"/><div className="checkboxInfo">개인정보 수집 및 이용에 동의합니다.</div>
      <button onClick={() => {
          alert.success("검토 후 1영업일 이내에 회신드리겠습니다.");
          }}className="inputButton">접수하기
      </button>
	  </div>
  );
}

export default Home_OfflineInput;