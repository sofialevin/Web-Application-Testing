import React from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        balls: 0,
        strikes: 0
    }
  }

  updateCount = (buttonName) => {
    if (buttonName === 'strike') {
      this.setState({
        strikes: this.state.strikes + 1
      })
    } else if (buttonName === 'ball') {
      this.setState({
        balls: this.state.balls + 1
      })
    } else if (buttonName === 'hit') {
      this.setState({
        balls: 0,
        strikes: 0
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
