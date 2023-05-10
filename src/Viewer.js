import React from "react"
import ReactPannellum, { getConfig } from "react-pannellum"

const Viewer = (props) => {
	const config = {
		autoLoad: true,
	}

	return (
		<div>
			<ReactPannellum
				id="1"
				sceneId="firstScene"
				imageSource="https://vppub.blob.core.windows.net/pano/20220418/pano_0140_000289.jpg"
				config={config}
			/>
		</div>
	)
}

export default Viewer
