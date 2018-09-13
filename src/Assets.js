import 'aframe'

class Assets extends React.Component {
	render() {
		return (
			<a-assets>
			  <a-asset-item id="bow" src="assets/bow.gltf"></a-asset-item>
			  <img id="grass" src="assets/grass.jpg" crossorigin="anonymous">
			  <img id="sky" src="assets/sky.jpg" crossorigin="anonymous">
			  <img id="env" src="assets/environment.jpg" crossorigin="anonymous">
			</a-assets>
		)
	}
}
