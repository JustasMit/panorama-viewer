import React from "react"
import ReactPannellum, { getConfig } from "react-pannellum"

const Viewer = (props) => {
	const config = {
		autoLoad: true,
	}

	return (
		<div key={props.imgUrl}>
			{console.log(props.imgUrl)}
			<ReactPannellum id="1" sceneId="firstScene" imageSource={props.imgUrl} config={config} />
		</div>
	)
}

export default Viewer
