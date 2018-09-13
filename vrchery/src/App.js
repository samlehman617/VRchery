import React, { Component } from 'react';
import { Entity, Scene } from 'aframe-react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Scene id="world" physics>
        <a-assets>
	    <a-asset-item id="bow" src="assets/bow.gltf"></a-asset-item>
	    <img id="grass" src="assets/grass.jpg" crossOrigin="anonymous" />
	    <img id="sky" src="assets/sky.jpg" crossOrigin="anonymous" />
	    <img id="env" src="assets/environment.jpg" crossOrigin="anonymous" />
	</a-assets>
	<Entity
	    primitive="a-sky"
	    id="sky"
	    rotation="0 -90 0" 
	    static-body 
	    friction="1" 
	    restitution="0" 
	    material="src: #env"
	/>
	<Entity
	    primitive="a-camera"
            id="cam"
	    camera="active:true"
	    look-controls
	    wasd-controls
	    position="0 0 -2">
	    <Entity
	        primitive="a-cylinder"
	        id="arrow"
	        position="-0.11 -0.2 -0.8" 
	        rotation="90 0 0" 
	        radius="0.01" 
	        height="1.5" 
	        color="brown"
	        static-body >
	        <Entity
	    	    primative="a-cone"
	            id="tip"
	            color="black"
	            radius-bottom=".025"
	            rotation="0 0 180"
	            height="0.25"
	            position="0 -0.75 0">
	        </Entity>
	    </Entity>
	    <Entity
	        id="bow
	        gltf-model="#bow"
	        position="0.25 -1.65 0.5"
	        rotation="0 259 0 ">
	    </Entity>
	    <Entity
	        id="cursor"
	        cursor="fuse: true; fuseTimeout: 500"
	        position="0 0 -2"
	        geometry="primitive: ring; radiusInner: 0.01; radiusOuter: 0.015"
	    	material="color: white; shader; flat; opacity:0.4"
	        animation__click={{
		    property: 'scale',
		    startEvents: 'click',
		    from: ' 0.1 0.1 0.1',
		    to: '1 1 1',
		    dur: 150,
		    fill: "forwards",
		    easing="ease-in"
		}}
	    	animation__cursor_fusing={{
		    property: 'scale',
		    startEvents: 'cursor-fusing',
		    from: '1 1 1',
		    to: '0.1 0.1 0.1'
		}}
	    />
	    </Entity>
	</Entity>
	
      </Scene>
    );
  }
}

export default App;
