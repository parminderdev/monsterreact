import logo from './logo.svg';
import './App.css';
import Monsters from './Monsters';

//import {Component} from 'react';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { firsName: 'Sandeep', lastName: 'Kaur' }
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firsName} {this.state.name.lastName}
          </p>
          <button onClick={() => {
            this.setState(
              () => {
                return {
                  name: { firsName: 'Pinka', lastName: 'Singh' },
                };
              }, () => {
                console.log(this.state);
              });
            // this.setState({
            //   name:{firsName:'Pinka', lastName:'Singh'}
            // });
            //console.log(this.state);
          }}>Change Name</button>
          <Monsters />
        </header>
        
      </div>
    );

  }
}

export default App;
