"use strict";(self.webpackChunkpanorama_viewer=self.webpackChunkpanorama_viewer||[]).push([[1231],{91231:function(e,t,i){i.r(t),i.d(t,{default:function(){return q}});var r=i(1413),a=i(74165),n=i(15861),o=i(15671),s=i(43144),h=i(60136),u=i(29388),p=i(27366),l=i(32718),c=i(66978),g=i(94172),d=i(49861),y=(i(25243),i(63780),i(69912)),m=i(78983),f=i(90110),v=i(95986),_=i(34035),w=i(83978),k=i(9229),x=i(67581),C=i(11752),H=i(61120),Z=i(45948),b=i(44041),I=i(13107),V=i(84848),P=i(45008),U=function(e){(0,h.Z)(i,e);var t=(0,u.Z)(i);function i(){var e;return(0,o.Z)(this,i),(e=t.apply(this,arguments))._highlightGraphics=new m.J,e._updateHash="",e}return(0,s.Z)(i,[{key:"fetchPopupFeatures",value:function(e,t){return this._popupHighlightHelper.fetchPopupFeatures(e,t)}},{key:"update",value:function(e){var t=this,i="".concat(this.exportImageVersion,"/").concat(e.state.id,"/").concat(e.pixelRatio,"/").concat(e.stationary);this._updateHash!==i&&(this._updateHash=i,this.strategy.update(e).catch((function(e){(0,c.D_)(e)||l.Z.getLogger(t.declaredClass).error(e)})),e.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(e.state.resolution)),this._highlightView.processUpdate(e)}},{key:"attach",value:function(){var e=this,t=this.layer,i=t.imageMaxWidth,r=t.imageMaxHeight,a=t.version,n=a>=10.3,o=a>=10;this._bitmapContainer=new f.c,this.container.addChild(this._bitmapContainer),this._highlightView=new _.Z({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:function(){return e.requestUpdate()},container:new w.Z(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new V.VF({createFetchPopupFeaturesQueryGeometry:function(t,i){return(0,P.K)(t,i,e.view)},highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:function(t,i){e._highlightView.graphicUpdateHandler({graphic:t,property:i})},layerView:this,updatingHandles:this.updatingHandles}),this.strategy=new k.Z({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:i,imageMaxHeight:r,imageRotationSupported:n,imageNormalizationSupported:o,hidpi:!0}),this.addAttachHandles((0,g.YP)((function(){return e.exportImageVersion}),(function(){return e.requestUpdate()}))),this.requestUpdate()}},{key:"detach",value:function(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"supportsSpatialReference",value:function(e){return this.layer.serviceSupportsSpatialReference(e)}},{key:"doRefresh",value:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._updateHash="",this.requestUpdate();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isUpdating",value:function(){return this.strategy.updating||this.updateRequested}},{key:"fetchImage",value:function(e,t,i,a){return this.layer.fetchImage(e,t,i,(0,r.Z)({timeExtent:this.timeExtent,floors:this.floors},a))}},{key:"fetchImageBitmap",value:function(e,t,i,a){return this.layer.fetchImageBitmap(e,t,i,(0,r.Z)({timeExtent:this.timeExtent,floors:this.floors},a))}},{key:"highlight",value:function(e){return this._popupHighlightHelper.highlight(e)}}]),i}(function(e){var t=function(e){(0,h.Z)(i,e);var t=(0,u.Z)(i);function i(){return(0,o.Z)(this,i),t.apply(this,arguments)}return(0,s.Z)(i,[{key:"initialize",value:function(){this.exportImageParameters=new b.R({layer:this.layer})}},{key:"destroy",value:function(){this.exportImageParameters.destroy(),this.exportImageParameters=null}},{key:"floors",get:function(){var e,t;return null!==(e=null===(t=this.view)||void 0===t?void 0:t.floors)&&void 0!==e?e:null}},{key:"exportImageVersion",get:function(){var e;return null!==(e=this.exportImageParameters)&&void 0!==e&&e.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}},{key:"canResume",value:function(){var e;return!!(0,C.Z)((0,H.Z)(i.prototype),"canResume",this).call(this)&&!(null!==(e=this.timeExtent)&&void 0!==e&&e.isEmpty)}}]),i}(e);return(0,p._)([(0,d.Cb)()],t.prototype,"exportImageParameters",void 0),(0,p._)([(0,d.Cb)({readOnly:!0})],t.prototype,"floors",null),(0,p._)([(0,d.Cb)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,p._)([(0,d.Cb)()],t.prototype,"layer",void 0),(0,p._)([(0,d.Cb)()],t.prototype,"suspended",void 0),(0,p._)([(0,d.Cb)(Z.qG)],t.prototype,"timeExtent",void 0),t=(0,p._)([(0,y.j)("esri.views.layers.MapImageLayerView")],t)}((0,I.Z)((0,v.y)(x.Z))));(0,p._)([(0,d.Cb)()],U.prototype,"strategy",void 0),(0,p._)([(0,d.Cb)()],U.prototype,"updating",void 0);var q=U=(0,p._)([(0,y.j)("esri.views.2d.layers.MapImageLayerView2D")],U)}}]);
//# sourceMappingURL=1231.add598ab.chunk.js.map