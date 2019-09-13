import React from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
import 'semantic-ui-css/semantic.min.css';
import { getIterator } from 'core-js';

export const ballCount = (balls) => {
  if (balls < 3) {
    return balls + 1;
  } else {
    return 0
  }
}

export const strikeCount = (strikes) => {
  if (strikes < 2) {
    return strikes + 1;
  } else {
    return 0
  }
}

export const hit = () => {
  return 0;
}

export const foul = (strikes) => {
  if (strikes < 2) {
    return strikes + 1;
  } else {
    return 2
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        balls: 0,
        strikes: 0
    }
  }

  updateCount = (buttonName) => {
    if (buttonName === 'ball') {
      this.setState({
        balls: ballCount(this.state.balls)
      })    
    } else if (buttonName === 'strike') {
        this.setState({
          strikes: strikeCount(this.state.strikes)
        })  
    } else if (buttonName === 'hit') {
      this.setState({
        balls: hit(),
        strikes: hit()
      })
    } else {
      this.setState({
        strikes: foul(this.state.strikes)
      })
    }
  }

  render() { 
    return (
      <div>
        <Display count={this.state}/>
        <Dashboard updateCount={this.updateCount}/>
      </div>
    );
  }
}
 
export default App;
