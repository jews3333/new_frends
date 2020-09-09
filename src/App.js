import React, { Component } from 'react';
import Routes from './routes/Routes';
import './resource/scss/base.scss';
import styled from 'styled-components';
import BackgroundTop from './resource/images/bg_background_top.png';
import BackgroundBottom from './resource/images/bg_background_bottom.png';

class App extends Component {

  constructor(props){
    super(props);

    props.onSignState();
  }

  render(){

    return (
      <Common>
        <Routes user={this.props.user}/>
      </Common>
    )
  }
}

const Common = styled.div`
  background:#4c7de6;
  height:100vh;
  overflow:hidden;
  position:relative;

  &:before {
    content:"";
    display:block;
    position:absolute;
    width:200%;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background: url(${BackgroundTop}) no-repeat left top;
    // animation: slowMoveLeft 10s infinite linear;

    // @keyframes slowMoveLeft {
    //   from {
    //     left:0;
    //   }
    //   to {
    //     left: -100%;
    //   }
    // }

  }

  &:after {
    content:"";
    display:block;
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background: url(${BackgroundBottom}) no-repeat center bottom;
  }
`;

export default App;
