import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
	  super(props);
	  this.state = {color: 'red'};
  }

  render() {
    return (
	    <Scene>
	      <a-assets>
	        <a-asset-item id="bow" src="assets/bow.gltf"></a-asset-item>
	        <img id="grass" src="assets/grass.jpg" crossorigin="anonymous" />
	        <img id="sky" src="assets/sky.jpg" crossorigin="anonymous" />
	        <img id="env" src="assets/environment.jpg" crossorigin="anonymous" />
	      </a-assets>
	      <Assets></Assets>
	      <Sky></Sky>
	      <Camera></Camera>
	      <Target></Target>
	    </Scene>
    );
  }
}

export default App;
