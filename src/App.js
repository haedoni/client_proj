import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Numbers from './Numbers';


class App extends Component {
  render() {
    return (
  
        <div>
            <Header/>
            {this.props.children}
        </div>

    );
  }
}

export default App;
 