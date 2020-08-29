import React, { Component } from 'react';
import './App.css';
import Routes from './routes/Routes';

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
