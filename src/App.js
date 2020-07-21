import React from 'react';
import logo from './logo.svg';
import './App.css';
// import './components/monster-card/MonsterCard'
// import MonsterCard from './components/monster-card/MonsterCard';
import MonsterContainer from './components/monster-container/MonsterContainer'

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <MonsterContainer />
      </div>
    );
  }
}

export default App;
