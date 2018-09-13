import 'aframe'

class Sky extends React.Component {
	render() {
		return (
			<a-sky id="sky"
			  rotation="0 -90 0"
			  static-body
			  friction="1"
			  restitution="0"
			  material="src: #env">
			</a-sky>
		)
	}
}

