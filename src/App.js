import React from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: {
        balls: 0,
        strikes: 0
      }
    }
  }
  render() { 
    return (
      <div>
        <Display count={this.state.count}/>
        <Dashboard />
      </div>
    );
  }
}
 
export default App;
