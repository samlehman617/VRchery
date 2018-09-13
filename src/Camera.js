import 'aframe'

class Camera extends React.Component {
	render() {
		return (
			<Entity primative="a-camera"
			    camera="active:true"
			    look-controls
			    wasd-controls
			    position="0 0 -2">
			    <Arrow />
			    <Bow />
			    <Cursor />
			</Entity>
		)
	}
}

