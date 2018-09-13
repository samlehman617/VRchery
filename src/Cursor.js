import 'aframe'

class Cursor extends React.Component {
	render() {
		return (
			<Entity id="cursor"
			    cursor="fuse: true; fuseTimeout: 500"
			    position="0 0 -2"
			    geometry="primative: ring; radiusInner: 0.01; radiusOuter: 0.015"
			    material="color: white; shader: flat; opacity:0.4">
			    <a-animation begin="click"
			        easing="ease-in"
			        attribute="scale"
			        dur="150"
			        fill="forwards"
			        from="0.1 0.1 0.1"
			        to="1 1 1">
			    </a-animation>
			    <a-animation begin="cursor-fusing"
			        easing="ease-in"
			        attribute="scale"
			        dur="1500"
			        fill="backwards"
			        from="1 1 1"
			        to="0.1 0.1 0.1">
			    </a-animation>
			</Entity>
		)
	}
}
