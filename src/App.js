import React, { useRef, useEffect, useState } from "react"
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine.js"
import Graphic from "@arcgis/core/Graphic.js"
import { Pannellum, PannellumVideo } from "pannellum-react"

import { layer, graphicsLayer, view } from "./Items"

import "./App.css"

function App() {
	const mapDiv = useRef(null)
	const [imgUrl, setImgUrl] = useState("")
	const [objects, setObjects] = useState([])
	const [hotspots, setHotspots] = useState([])

	const handleClickImage = (evt, args, obj) => {
		console.log(obj)
		setImgUrl(obj.img_url)

		if (imgUrl) {
			const regex = /\/([^/]+)\.jpg$/
			const match = imgUrl.match(regex)

			const imageName = match[1]
			console.log(imageName)

			view.whenLayerView(layer).then((layerView) => {
				graphicsLayer.removeAll()
				layerView
					.queryFeatures({
						where: `ImageName = '${imageName}'`,
						returnGeometry: true,
					})
					.then((response) => {
						layerView
							.queryFeatures({
								geometry: response.features[0].geometry,
								distance: 10,
								units: "meters",
								returnGeometry: true,
								outFields: ["*"],
							})
							.then((response_geom) => {
								for (let feature of response_geom.features) {
									let totalDistance = geometryEngine.distance(response_geom.features[0].geometry, feature.geometry, "meters")
									feature.distance = totalDistance
								}

								response_geom.features.sort((a, b) => a.distance - b.distance)

								response_geom.features[0].group = "main"

								let mainFrameNo = response_geom.features[0].attributes.T3DFrameNo
								let mainFolderName = response_geom.features[0].attributes.FolderName
								let count = 0
								for (let i = 1; i < response_geom.features.length; i++) {
									if (
										response_geom.features[i].attributes.T3DFrameNo === mainFrameNo - 1 ||
										response_geom.features[i].attributes.T3DFrameNo === mainFrameNo + 1
									) {
										response_geom.features[i].group = "next"
										count++

										if (count === 2) {
											break
										}
									}
								}

								const filteredFeatures = []
								const mainFeature = response_geom.features.find((feature) => feature.group === "main")
								const nextFeatures = response_geom.features.filter((feature) => feature.group === "next")

								filteredFeatures.push(mainFeature, ...nextFeatures)

								for (let i = 0; i < filteredFeatures.length; i++) {
									const feature = filteredFeatures[i]

									const graphic = new Graphic({
										geometry: feature.geometry,
										symbol: {
											type: "simple-marker",
											color: feature.group === "main" ? [255, 0, 0] : [0, 255, 0],
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
								response_geom.features = filteredFeatures
								setObjects(response_geom.features)
								setImgUrl(
									`https://vppub.blob.core.windows.net/pano/${filteredFeatures[0].attributes.FolderName}/${filteredFeatures[0].attributes.ImageName}.jpg`
								)

								let x_new_temp = response_geom.features[0].attributes.X_Ori
								let y_new_temp = response_geom.features[0].attributes.Y_Ori
								let radius = 5
								let bearing = 90 - response_geom.features[0].attributes.H_Sensor

								let bearingRads = (bearing * Math.PI) / 180

								let x_new = x_new_temp + radius * Math.cos(bearingRads)
								let y_new = y_new_temp + radius * Math.sin(bearingRads)

								// const graphicTest = new Graphic({
								// 	geometry: {
								// 		type: "point",
								// 		x: x_new,
								// 		y: y_new,
								// 		spatialReference: {
								// 			wkid: 2600,
								// 		},
								// 	},
								// 	symbol: {
								// 		type: "simple-marker",
								// 		color: [200, 200, 200],
								// 		outline: {
								// 			color: [255, 255, 255],
								// 			width: 1,
								// 		},
								// 	},
								// })
								// graphicsLayer.add(graphicTest)

								let tempHotspots = []

								let x1 = x_new // replace with the x-coordinate of the first point
								let y1 = y_new // replace with the y-coordinate of the first point

								let x2 = response_geom.features[0].attributes.X_Ori // replace with the x-coordinate of the second point
								let y2 = response_geom.features[0].attributes.Y_Ori // replace with the y-coordinate of the second point

								for (let feature of response_geom.features) {
									if (feature.group === "main") {
										continue
									}

									let x3 = feature.attributes.X_Ori // replace with the x-coordinate of the third point
									let y3 = feature.attributes.Y_Ori // replace with the y-coordinate of the third point

									// Calculate the vectors between the points
									let dx1 = x1 - x2
									let dy1 = y1 - y2
									let dx2 = x3 - x2
									let dy2 = y3 - y2
									// Calculate the dot product of the vectors
									let dotProduct = dx1 * dx2 + dy1 * dy2
									// Calculate the magnitudes of the vectors
									let magnitude1 = Math.sqrt(dx1 * dx1 + dy1 * dy1)
									let magnitude2 = Math.sqrt(dx2 * dx2 + dy2 * dy2)
									// Calculate the angle between the vectors using the dot product and magnitudes
									let angle = Math.acos(dotProduct / (magnitude1 * magnitude2))
									// Convert the angle to degrees
									let angleDegrees = (angle * 180) / Math.PI

									// Calculate the cross product between the vectors
									let crossProduct = dx1 * dy2 - dx2 * dy1
									// Adjust the angle based on the cross product
									let adjustedAngle = crossProduct >= 0 ? angleDegrees : 360 - angleDegrees
									// Add 360 degrees if the angle is less than 0 (negative)
									if (adjustedAngle < 0) {
										adjustedAngle += 360
									}

									console.log(adjustedAngle)

									tempHotspots.push({
										angle: adjustedAngle,
										img_url: `https://vppub.blob.core.windows.net/pano/${feature.attributes.FolderName}/${feature.attributes.ImageName}.jpg`,
									})
								}

								setHotspots(tempHotspots)
							})
					})
			})
		}
	}

	useEffect(() => {
		view.container = mapDiv.current

		layer
			.when(() => {
				return layer.queryExtent()
			})
			.then((response) => {
				view.goTo(response.extent)
			})

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

						let mainFrameNo = response.features[0].attributes.T3DFrameNo
						let mainFolderName = response.features[0].attributes.FolderName
						let count = 0
						for (let i = 1; i < response.features.length; i++) {
							if (
								response.features[i].attributes.T3DFrameNo === mainFrameNo - 1 ||
								response.features[i].attributes.T3DFrameNo === mainFrameNo + 1
							) {
								response.features[i].group = "next"
								count++

								if (count === 2) {
									break
								}
							}
						}

						const filteredFeatures = []
						const mainFeature = response.features.find((feature) => feature.group === "main")
						const nextFeatures = response.features.filter((feature) => feature.group === "next")

						filteredFeatures.push(mainFeature, ...nextFeatures)

						for (let i = 0; i < filteredFeatures.length; i++) {
							const feature = filteredFeatures[i]

							const graphic = new Graphic({
								geometry: feature.geometry,
								symbol: {
									type: "simple-marker",
									color: feature.group === "main" ? [255, 0, 0] : [0, 255, 0],
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

						let x_new_temp = response.features[0].attributes.X_Ori
						let y_new_temp = response.features[0].attributes.Y_Ori
						let radius = 5
						let bearing = 90 - response.features[0].attributes.H_Sensor

						let bearingRads = (bearing * Math.PI) / 180

						let x_new = x_new_temp + radius * Math.cos(bearingRads)
						let y_new = y_new_temp + radius * Math.sin(bearingRads)

						// const graphicTest = new Graphic({
						// 	geometry: {
						// 		type: "point",
						// 		x: x_new,
						// 		y: y_new,
						// 		spatialReference: {
						// 			wkid: 2600,
						// 		},
						// 	},
						// 	symbol: {
						// 		type: "simple-marker",
						// 		color: [200, 200, 200],
						// 		outline: {
						// 			color: [255, 255, 255],
						// 			width: 1,
						// 		},
						// 	},
						// })
						// graphicsLayer.add(graphicTest)

						let tempHotspots = []

						let x1 = x_new // replace with the x-coordinate of the first point
						let y1 = y_new // replace with the y-coordinate of the first point

						let x2 = response.features[0].attributes.X_Ori // replace with the x-coordinate of the second point
						let y2 = response.features[0].attributes.Y_Ori // replace with the y-coordinate of the second point

						for (let feature of response.features) {
							if (feature.group === "main") {
								continue
							}

							let x3 = feature.attributes.X_Ori // replace with the x-coordinate of the third point
							let y3 = feature.attributes.Y_Ori // replace with the y-coordinate of the third point

							// Calculate the vectors between the points
							let dx1 = x1 - x2
							let dy1 = y1 - y2
							let dx2 = x3 - x2
							let dy2 = y3 - y2
							// Calculate the dot product of the vectors
							let dotProduct = dx1 * dx2 + dy1 * dy2
							// Calculate the magnitudes of the vectors
							let magnitude1 = Math.sqrt(dx1 * dx1 + dy1 * dy1)
							let magnitude2 = Math.sqrt(dx2 * dx2 + dy2 * dy2)
							// Calculate the angle between the vectors using the dot product and magnitudes
							let angle = Math.acos(dotProduct / (magnitude1 * magnitude2))
							// Convert the angle to degrees
							let angleDegrees = (angle * 180) / Math.PI

							// Calculate the cross product between the vectors
							let crossProduct = dx1 * dy2 - dx2 * dy1
							// Adjust the angle based on the cross product
							let adjustedAngle = crossProduct >= 0 ? angleDegrees : 360 - angleDegrees
							// Add 360 degrees if the angle is less than 0 (negative)
							if (adjustedAngle < 0) {
								adjustedAngle += 360
							}

							console.log(adjustedAngle)

							tempHotspots.push({
								angle: adjustedAngle,
								img_url: `https://vppub.blob.core.windows.net/pano/${feature.attributes.FolderName}/${feature.attributes.ImageName}.jpg`,
							})
						}

						setHotspots(tempHotspots)
					})
			})
		})
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
					{objects.length > 0 && hotspots.length > 0 && (
						<Pannellum
							width="700px"
							height="450px"
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
							{hotspots.map((obj) => (
								<Pannellum.Hotspot
									type="custom"
									pitch={-15}
									yaw={-obj.angle}
									text="test"
									handleClick={(evt, args) => handleClickImage(evt, args, obj)}
								/>
							))}
						</Pannellum>
					)}
				</div>
			</div>
		</div>
	)
}

export default App
