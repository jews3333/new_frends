import React, { Component } from 'react';
import Routes from './routes/Routes';
import './resource/scss/base.scss';

class App extends Component {

  constructor(props){
    super(props);
  }
  
  componentDidMount(){
    this.props.onSignState();
  }

  render(){
    return (
      <Routes/>
    )
  }
}

export default App;
