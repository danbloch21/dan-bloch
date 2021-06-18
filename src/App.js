import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TopContainer from './components/TopContainer';
import MiddleContainer from './components/MiddleContainer';
import ContactMe from './components/ContactMe';
import BottomContainer from './components/BottomContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <TopContainer></TopContainer>
        <MiddleContainer></MiddleContainer>
        <ContactMe></ContactMe>
        <BottomContainer></BottomContainer>
        </div>
    );

  }
  
  
}

export default App;
