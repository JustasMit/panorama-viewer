import React, { useRef, useEffect, useState } from "react"
import { Pannellum, PannellumVideo } from "pannellum-react"

const Viewer = (props) => {
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

	useEffect(() => {}, [])

	return (
		<div>
			{console.log(props.imgUrl)}
			<Pannellum
				width="500px"
				height="350px"
				image={props.imgUrl}
				// pitch={10}
				// yaw={180}
				// hfov={110}
				autoLoad
				onLoad={() => {
					console.log(props.imgUrl)
				}}
			>
				<Pannellum.Hotspot
					type="custom"
					pitch={-2}
					yaw={0}
					text="test"
					handleClick={(evt, args) => {
						console.log(props.imgUrl)
						props.setImgUrl(
							props.imgUrl
								? props.imgUrl.replace(/(\d+)(?=\.jpg$)/, (match) =>
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
						console.log(props.imgUrl)
						props.setImgUrl(
							props.imgUrl
								? props.imgUrl.replace(/(\d+)(?=\.jpg$)/, (match) =>
										String(parseInt(match) + 1).padStart(match.length, "0")
								  )
								: ""
						)
					}}
				/>
			</Pannellum>
		</div>
	)
}

export default Viewer
