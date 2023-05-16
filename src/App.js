import React, { useRef, useEffect, useState } from "react"
import Map from "@arcgis/core/Map"
import MapView from "@arcgis/core/views/MapView"
import FeatureLayer from "@arcgis/core/layers/FeatureLayer"
import TileLayer from "@arcgis/core/layers/TileLayer"
import Basemap from "@arcgis/core/Basemap"
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery"
import Expand from "@arcgis/core/widgets/Expand"
import Locate from "@arcgis/core/widgets/Locate"
import TileInfo from "@arcgis/core/layers/support/TileInfo.js"
import MapImageLayer from "@arcgis/core/layers/MapImageLayer"
import Extent from "@arcgis/core/geometry/Extent.js"
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js"
import Viewer from "./Viewer"

import "./App.css"

function App() {
	const mapDiv = useRef(null)
	const [imgUrl, setImgUrl] = useState("")
	const [objects, setObjects] = useState()

	useEffect(() => {
		if (mapDiv.current) {
			const layer = new FeatureLayer({
				url: "https://zemelapiai.vplanas.lt/arcgis/rest/services/Kelio_zenklai/kz_panoramos/MapServer/0",
				outFields: ["OBJECTID", "ImageName", "FolderName"],
				definitionExpression: "SUBSTRING(FolderName, 1, 4) = '2022'",
			})

			const basemap1 = new Basemap({
				baseLayers: [
					new TileLayer({
						// url: "https://atviras.vplanas.lt/arcgis/rest/services/Baziniai_zemelapiai/Vilnius_basemap_light_LKS/MapServer",
						url: "https://gis.vplanas.lt/arcgis/rest/services/Baziniai_zemelapiai/Vilnius_basemap_LKS_su_rajonu/MapServer",
					}),
				],
				id: "light",
				thumbnailUrl: `${origin}/vilniausdnr/signIcons/basemap_light.png`,
			})

			const map = new Map({
				basemap: basemap1,
				layers: [layer],
			})

			const view = new MapView({
				map: map,
				slider: false,
				container: mapDiv.current,
			})

			layer
				.when(() => {
					return layer.queryExtent()
				})
				.then((response) => {
					view.goTo(response.extent)
				})

			view.on("click", (event) => {
				view.hitTest(event).then((response) => {
					if (response.results.length > 0) {
						let graphic = response.results[0].graphic
						console.log(graphic)

						setImgUrl(
							`https://vppub.blob.core.windows.net/pano/${graphic.attributes.FolderName}/${graphic.attributes.ImageName}.jpg`
						)
					}
				})
			})
		}
	}, [])

	return (
		<div className="mapDiv" ref={mapDiv}>
			<div style={{ position: "fixed", left: 0, bottom: 0, zIndex: 9999 }}>
				<Viewer imgUrl={imgUrl} objects={objects} setImgUrl={setImgUrl} />
			</div>
		</div>
	)
}

export default App
