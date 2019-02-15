import React, { Component } from 'react';
import Navbar from '../src/components/Navbar';
import Movies from '../src/components/Movies';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Movies/>
      </div>
    );
  }
}

export default App;
