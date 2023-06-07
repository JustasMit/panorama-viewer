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
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js"

export const layer = new FeatureLayer({
	url: "https://zemelapiai.vplanas.lt/arcgis/rest/services/Kelio_zenklai/kz_panoramos/MapServer/0",
	outFields: ["*"],
	definitionExpression: "SUBSTRING(FolderName, 1, 4) = '2020'",
})

export const basemap1 = new Basemap({
	baseLayers: [
		new TileLayer({
			// url: "https://atviras.vplanas.lt/arcgis/rest/services/Baziniai_zemelapiai/Vilnius_basemap_light_LKS/MapServer",
			url: "https://gis.vplanas.lt/arcgis/rest/services/Baziniai_zemelapiai/Vilnius_basemap_LKS_su_rajonu/MapServer",
		}),
	],
	id: "light",
	thumbnailUrl: `${origin}/vilniausdnr/signIcons/basemap_light.png`,
})

export const map = new Map({
	basemap: basemap1,
	layers: [layer],
})

export const view = new MapView({
	map: map,
	slider: false,
})

export const graphicsLayer = new GraphicsLayer()
map.add(graphicsLayer)
