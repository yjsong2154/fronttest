import React , { Fragment } from "react";
import { useAlert } from "react-alert";
import './Home_LectureInput.css';

function Home_LectureInput() {
  const alert = useAlert();
  return (
    <form className="inputField">
      <h2 className="inputTitle">입시설명회 개최</h2>
      <input className="textInput" type="text" name="parentsName" placeholder="기업 (단체명)"/>
      <input className="textInput" type="text" name="childName" placeholder="담당자 성함"/>
      <input className="textInput" type="text" name="childGrage" placeholder="유선전화"/>
      <input className="textInput" type="text" name="childSchool" placeholder="휴대전화"/>
      <input className="textInput" type="text" name="phone" placeholder="이메일"/>
      <input className="textInput" type="text" name="place" placeholder="강연 지역"/>
      <textarea className="massageInput" type="text" name="message" rows="10" cols="30" placeholder="기타 요청 사항 (관심 과목, 성적대, 성향 등)"/>
      <input className="checkbox" type="checkbox" name="agree"/><div className="checkboxInfo">개인정보 수집 및 이용에 동의합니다.</div>
      <button onClick={() => {
          alert.success("검토 후 1영업일 이내에 회신드리겠습니다");
          }}className="inputButton">접수하기
      </button>
	  </form>
  );
}

export default Home_LectureInput;