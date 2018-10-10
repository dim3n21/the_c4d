import React, { Component } from 'react';
import './assets/styles.css';
import Navbar from './components/Navbar/Navbar';
import Featured from './components/Featured/Featured';


class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '1500px', background:'cornflowerblue'}}>
       <Navbar />
       <Featured />
      </div>
    );
  }
}

export default App;
