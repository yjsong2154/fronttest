import React from 'react';
import './Home_SelectField.css';
import Home_OfflineInput from './Home_OfflineInput'
import { render } from '@testing-library/react';
import Home_LectureInput from './Home_LectureInput';

class Home_SelectField extends React.Component{
  state = {
    isParents: true
  }
  parents = () => {
    this.setState({isParents: true});
  };
  company = () => {
    this.setState({isParents: false});
  };

  render(){
    return (
        <div className="field">
          <h1 className="selectFieldTitle">REQUEST</h1>
          <h2>강연 및 자문 요청</h2>
          <button onClick={this.parents} className="selectButton">학원 자문 요청<br/>(학부모)</button>
          <button onClick={this.company} className="selectButton">입시 설명회 개최 요청<br/>(기업)</button>
          {this.state.isParents ? <Home_OfflineInput/> : <Home_LectureInput/>}
        </div>
    );
  }
}

export default Home_SelectField;