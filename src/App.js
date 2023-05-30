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
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine.js"
import Graphic from "@arcgis/core/Graphic.js"
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js"
import { Pannellum, PannellumVideo } from "pannellum-react"

import "./App.css"

function App() {
	const mapDiv = useRef(null)
	const [imgUrl, setImgUrl] = useState("")
	const [objects, setObjects] = useState([])

	const config = {
		autoLoad: true,
		hotSpotDebug: true,
		hotSpots: [
			{
				pitch: 3,
				yaw: 40,
				type: "scene",
				text: "Art Museum Drive",
			},
			{
				pitch: -9.4,
				yaw: 222.6,
				type: "scene",
				text: "Art Museum Drive",
			},
			{
				pitch: -0.9,
				yaw: 144.4,
				type: "scene",
				text: "North Charles Street",
			},
		],
	}

	useEffect(() => {
		if (mapDiv.current) {
			const layer = new FeatureLayer({
				url: "https://zemelapiai.vplanas.lt/arcgis/rest/services/Kelio_zenklai/kz_panoramos/MapServer/0",
				outFields: ["*"],
				definitionExpression: "SUBSTRING(FolderName, 1, 4) = '2020'",
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

			const graphicsLayer = new GraphicsLayer()
			map.add(graphicsLayer)

			view.whenLayerView(layer).then((layerView) => {
				view.on("click", (event) => {
					graphicsLayer.removeAll()

					layerView
						.queryFeatures({
							geometry: event.mapPoint,
							distance: 10,
							units: "meters",
							returnGeometry: true,
							outFields: ["*"],
						})
						.then((response) => {
							for (let feature of response.features) {
								let totalDistance = geometryEngine.distance(event.mapPoint, feature.geometry, "meters")
								feature.distance = totalDistance
							}
							response.features.sort((a, b) => a.distance - b.distance)

							response.features[0].group = "main"

							let mainFolderName = response.features[0].attributes.FolderName
							let count = 0
							for (let i = 1; i < response.features.length; i++) {
								if (response.features[i].attributes.FolderName === mainFolderName) {
									response.features[i].group = "next"
									count++

									if (count === 2) {
										break
									}
								}
							}

							const uniqueFolderNames = new Set()
							const filteredFeatures = []
							for (let i = 0; i < response.features.length; i++) {
								const feature = response.features[i]

								if (
									!feature.group &&
									!uniqueFolderNames.has(feature.attributes.FolderName) &&
									feature.attributes.FolderName !== mainFolderName
								) {
									feature.group = "other"
									filteredFeatures.push(feature)
									uniqueFolderNames.add(feature.attributes.FolderName)
								}
							}

							const mainFeature = response.features.find((feature) => feature.group === "main")
							const nextFeatures = response.features.filter((feature) => feature.group === "next")

							filteredFeatures.push(mainFeature, ...nextFeatures)

							for (let i = 0; i < filteredFeatures.length; i++) {
								const feature = filteredFeatures[i]

								const graphic = new Graphic({
									geometry: feature.geometry,
									symbol: {
										type: "simple-marker",
										color: [226, 119, 40],
										outline: {
											color: [255, 255, 255],
											width: 1,
										},
									},
									attributes: feature.attributes,
								})

								graphicsLayer.add(graphic)
							}
							// https://vppub.blob.core.windows.net/pano/20220418/pano_0140_000289.jpg
							response.features = filteredFeatures
							setObjects(response.features)
							setImgUrl(
								`https://vppub.blob.core.windows.net/pano/${filteredFeatures[0].attributes.FolderName}/${filteredFeatures[0].attributes.ImageName}.jpg`
							)
						})
				})
			})
		}
	}, [])

	return (
		<div className="mapDiv" ref={mapDiv}>
			<div style={{ position: "fixed", left: 0, bottom: 0, zIndex: 9999 }}>
				<div>
					{console.log(imgUrl)}
					{objects.length > 0 &&
						objects.map((obj) => {
							console.log(obj)
						})}
					<Pannellum
						width="500px"
						height="350px"
						image={imgUrl}
						// pitch={10}
						// yaw={180}
						// hfov={110}
						autoLoad
						compass
						onLoad={() => {
							console.log(imgUrl)
						}}
					>
						{/* <Pannellum.Hotspot
							type="custom"
							pitch={-2}
							yaw={0}
							text="test"
							handleClick={(evt, args) => {
								console.log(imgUrl)
								setImgUrl(
									imgUrl
										? imgUrl.replace(/(\d+)(?=\.jpg$)/, (match) =>
												String(parseInt(match) - 1).padStart(match.length, "0")
										  )
										: ""
								)
							}}
						/>

						<Pannellum.Hotspot
							type="custom"
							pitch={-2}
							yaw={180}
							text="test"
							handleClick={(evt, args) => {
								console.log(imgUrl)
								setImgUrl(
									imgUrl
										? imgUrl.replace(/(\d+)(?=\.jpg$)/, (match) =>
												String(parseInt(match) + 1).padStart(match.length, "0")
										  )
										: ""
								)
							}}
						/> */}
					</Pannellum>
				</div>
			</div>
		</div>
	)
}

export default App
