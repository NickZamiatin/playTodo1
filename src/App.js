import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormImg from "./componnets/FormImg"
import {  Button } from 'reactstrap';
import NavBar from './componnets/NavBar';

class App extends Component {



  render() {
    return (
      <div>
        <NavBar />
        <FormImg  />
        </div>
    );
  }
}

export default App;
