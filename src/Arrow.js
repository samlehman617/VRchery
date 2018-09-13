import 'aframe'

class Arrow extends React.Components {
	render() {
		return (
			<Entity primative="a-cylinder"
			    id="arrow"
			    class="arrow"
			    position="-0.11 -0.2 -0.8"
			    rotation="90 0 0"
			    radius="0.01"
			    height="1.5"
			    color="brown"
			    static-body>
			    <Entity primative="a-cone"
			        id="tip"
			        color="black"
			        radius-bottom=".025"
			        rotation="0 0 180"
			        height="0.25"
			        position="0 -0.75 0">
			        <Entity id="ray"
			            raycaster="showLine: true; direction: 0 0 100; interval:200"
			            rotation="-90 0 0"
			            far="100"
			            line="color:white; opacity:0.5">
			        </Entity>
			    </Entity>
			</Entity>
		)
	}
}

