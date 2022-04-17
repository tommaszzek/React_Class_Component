import React, { Component } from 'react';
import List from './list';

import './App.css';

class App extends Component {
  state = {
    items: ["jabłko", "sliwka", "gruszka"]
  }
  render() { 
    // let zm=this.state.items.map(item => <li key={item}>{`owoc ${item}`}</li>)
    let zm=this.state.items.map(item => <List key={item} name={item}/>)
    return (
      <ul>
        {zm}
           {/* {this.state.items.map(item => <li key={item}>{`owoc ${item}`}</li>)} */}
      </ul>
    );
  }
}
 
export default App;
