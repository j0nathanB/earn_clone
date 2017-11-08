import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled  from "styled-components";

import Body from './components/body/Body.js';

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
padding: 4em;
background: papayawhip;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Body />
      </div>
    );
  }
}

export default App;
