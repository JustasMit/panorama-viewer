import React, { useRef, useEffect } from "react"
import MapView from "@arcgis/core/views/MapView"
import WebMap from "@arcgis/core/WebMap"

import "./App.css"

function App() {
	const mapDiv = useRef(null)

	useEffect(() => {
		if (mapDiv.current) {
			const webmap = new WebMap({
				portalItem: {
					id: "aa1d3f80270146208328cf66d022e09c",
				},
			})

			const view = new MapView({
				container: mapDiv.current,
				map: webmap,
			})
		}
	}, [])

	return <div className="mapDiv" ref={mapDiv}></div>
}

export default App
