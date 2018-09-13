import 'aframe'

class Bow extends React.Component {
	render() {
		return (
			<Entity id="bow"
			    gltf-model="#bow"
			    position="0.25 -1.65 0.5"
			    rotation="0 259 0">
			</Entity>
		)
	}
}
