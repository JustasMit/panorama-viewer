"use strict";(self.webpackChunkpanorama_viewer=self.webpackChunkpanorama_viewer||[]).push([[6598],{45956:function(e,t,i){i.d(t,{JZ:function(){return b},RL:function(){return w},eY:function(){return R}});var n=i(29439),r=i(74165),s=i(15861),a=i(15671),u=i(43144),o=i(97326),l=i(11752),h=i(61120),c=i(60136),d=i(29388),f=i(92026),p=i(66978),v=i(22753),y=i(23588),k=i(15245),g=i(87422),x=i(10978),m=i(49800),_=i(8548),Z=i(51378);function b(e){return e&&"render"in e}function w(e){var t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}var R=function(e){(0,c.Z)(i,e);var t=(0,d.Z)(i);function i(){var e,n,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,u=arguments.length>1?arguments[1]:void 0;return(0,a.Z)(this,i),(r=t.call(this)).blendFunction="standard",r._sourceWidth=0,r._sourceHeight=0,r._textureInvalidated=!1,r._texture=null,r.stencilRef=0,r.coordScale=[1,1],r._height=void 0,r.pixelRatio=1,r.resolution=0,r.rotation=0,r._source=null,r._width=void 0,r.x=0,r.y=0,r.immutable=null!==(e=u.immutable)&&void 0!==e&&e,r.requestRenderOnSourceChangedEnabled=null===(n=u.requestRenderOnSourceChangedEnabled)||void 0===n||n,r.source=s,r.requestRender=r.requestRender.bind((0,o.Z)(r)),r}return(0,u.Z)(i,[{key:"destroy",value:function(){this._texture&&(this._texture.dispose(),this._texture=null),(0,f.pC)(this._uploadStatus)&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}},{key:"isSourceScaled",get:function(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}},{key:"height",get:function(){return void 0!==this._height?this._height:this._sourceHeight},set:function(e){this._height=e}},{key:"source",get:function(){return this._source},set:function(e){null==e&&null==this._source||(this._source=e,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width),this.invalidateTexture())}},{key:"width",get:function(){return void 0!==this._width?this._width:this._sourceWidth},set:function(e){this._width=e}},{key:"beforeRender",value:function(e){(0,l.Z)((0,h.Z)(i.prototype),"beforeRender",this).call(this,e),this.updateTexture(e)}},{key:"setSourceAsync",value:function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t,i){var n,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,f.pC)(this._uploadStatus)&&this._uploadStatus.controller.abort(),n=new AbortController,s=(0,p.hh)(),e.abrupt("return",((0,p.$F)(i,(function(){return n.abort()})),(0,p.$F)(n,(function(e){return s.reject(e)})),this._uploadStatus={controller:n,resolver:s},this.source=t,s.promise));case 3:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"invalidateTexture",value:function(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}},{key:"updateTransitionProperties",value:function(e,t){e>=64&&(this.fadeTransitionEnabled=!1,this.inFadeTransition=!1),(0,l.Z)((0,h.Z)(i.prototype),"updateTransitionProperties",this).call(this,e,t)}},{key:"setTransform",value:function(e){var t=(0,v.g)(this.transforms.dvs),i=e.toScreenNoRotation([0,0],[this.x,this.y]),r=(0,n.Z)(i,2),s=r[0],a=r[1],u=this.resolution/this.pixelRatio/e.resolution,o=u*this.width,l=u*this.height,h=Math.PI*this.rotation/180;(0,v.h)(t,t,(0,k.f)(s,a)),(0,v.h)(t,t,(0,k.f)(o/2,l/2)),(0,v.r)(t,t,-h),(0,v.h)(t,t,(0,k.f)(-o/2,-l/2)),(0,v.k)(t,t,(0,k.f)(o,l)),(0,v.m)(this.transforms.dvs,e.displayViewMat3,t)}},{key:"setSamplingProfile",value:function(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}},{key:"bind",value:function(e,t){this._texture&&e.bindTexture(this._texture,t)}},{key:"updateTexture",value:function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t){var i,n,s,a,u,o,l,h,c,d,v;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.context,n=t.painter,this._textureInvalidated){e.next=3;break}return e.abrupt("return");case 3:if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(i)),this.source){e.next=5;break}return e.abrupt("return",void this._texture.setData(null));case 5:if(this._texture.resize(this._sourceWidth,this._sourceHeight),r=this.source,s=b(r)?r instanceof x.Z?(0,f.yw)(r.getRenderedRasterPixels(),(function(e){return e.renderedRasterPixels})):w(r):r,e.prev=7,!(0,f.pC)(this._uploadStatus)){e.next=16;break}return a=this._uploadStatus,u=a.controller,o=a.resolver,l={signal:u.signal},h=this.width,c=this.height,d=this._texture,v=n.textureUploadManager,e.next=12,v.enqueueTextureUpdate({data:s,texture:d,width:h,height:c},l);case 12:o.resolve(),this._uploadStatus=null,e.next=17;break;case 16:this._texture.setData(s);case 17:this.ready(),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(7),(0,p.H9)(e.t0);case 23:case"end":return e.stop()}var r}),e,this,[[7,20]])})));return function(t){return e.apply(this,arguments)}}()},{key:"onDetach",value:function(){this.destroy()}},{key:"_createTransforms",value:function(){return{dvs:(0,y.c)()}}},{key:"_createTexture",value:function(e){var t=this.immutable&&e.type===m.zO.WEBGL2;return new Z.x(e,{target:_.No.TEXTURE_2D,pixelFormat:_.VI.RGBA,internalFormat:t?_.lP.RGBA8:_.VI.RGBA,dataType:_.Br.UNSIGNED_BYTE,wrapMode:_.e8.CLAMP_TO_EDGE,isImmutable:t,width:this._sourceWidth,height:this._sourceHeight})}}]),i}(g.s)},9849:function(e,t,i){i.d(t,{s:function(){return k}});var n=i(93433),r=i(29439),s=i(15671),a=i(43144),u=i(11752),o=i(61120),l=i(60136),h=i(29388),c=i(65156),d=i(23588),f=i(45956),p=function(e){(0,l.Z)(i,e);var t=(0,h.Z)(i);function i(e,n,r,a,u,o){var l,h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;return(0,s.Z)(this,i),(l=t.call(this,e,n,r,a,u,o)).bitmap=new f.eY(h,{immutable:!1,requestRenderOnSourceChangedEnabled:!1}),l.bitmap.coordScale=[u,o],l.bitmap.once("isReady",(function(){return l.ready()})),l}return(0,a.Z)(i,[{key:"destroy",value:function(){(0,u.Z)((0,o.Z)(i.prototype),"destroy",this).call(this),this.bitmap.destroy()}},{key:"beforeRender",value:function(e){(0,u.Z)((0,o.Z)(i.prototype),"beforeRender",this).call(this,e),this.bitmap.beforeRender(e)}},{key:"afterRender",value:function(e){(0,u.Z)((0,o.Z)(i.prototype),"afterRender",this).call(this,e),this.bitmap.afterRender(e)}},{key:"stencilRef",get:function(){return this.bitmap.stencilRef},set:function(e){this.bitmap.stencilRef=e}},{key:"_createTransforms",value:function(){return{dvs:(0,d.c)(),tileMat3:(0,d.c)()}}},{key:"setTransform",value:function(e){(0,u.Z)((0,o.Z)(i.prototype),"setTransform",this).call(this,e),this.bitmap.transforms.dvs=this.transforms.dvs}},{key:"onAttach",value:function(){this.bitmap.stage=this.stage}},{key:"onDetach",value:function(){this.bitmap&&(this.bitmap.stage=null)}}]),i}(i(72900).I),v=i(62272),y=i(80613),k=function(e){(0,l.Z)(i,e);var t=(0,h.Z)(i);function i(){return(0,s.Z)(this,i),t.apply(this,arguments)}return(0,a.Z)(i,[{key:"requiresDedicatedFBO",get:function(){return this.children.some((function(e){return"additive"===e.bitmap.blendFunction}))}},{key:"createTile",value:function(e){var t=this._tileInfoView.getTileBounds((0,c.Ue)(),e),i=this._tileInfoView.getTileResolution(e.level),n=(0,r.Z)(this._tileInfoView.tileInfo.size,2),s=n[0],a=n[1];return new p(e,i,t[0],t[3],s,a)}},{key:"prepareRenderPasses",value:function(e){var t=this,r=e.registerRenderPass({name:"bitmap (tile)",brushes:[v.U.bitmap],target:function(){return t.children.map((function(e){return e.bitmap}))},drawPhase:y.jx.MAP});return[].concat((0,n.Z)((0,u.Z)((0,o.Z)(i.prototype),"prepareRenderPasses",this).call(this,e)),[r])}},{key:"doRender",value:function(e){this.visible&&e.drawPhase===y.jx.MAP&&(0,u.Z)((0,o.Z)(i.prototype),"doRender",this).call(this,e)}}]),i}(i(55067).Z)},10978:function(e,t,i){i.d(t,{Z:function(){return a}});var n=i(15671),r=i(43144),s=i(92026),a=function(){function e(t,i,r){(0,n.Z)(this,e),this.pixelBlock=t,this.extent=i,this.originalPixelBlock=r}return(0,r.Z)(e,[{key:"width",get:function(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.width:0}},{key:"height",get:function(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.height:0}},{key:"render",value:function(e){var t,i=this.pixelBlock;if(!(0,s.Wi)(i)){var n=this.filter({extent:this.extent,pixelBlock:null!==(t=this.originalPixelBlock)&&void 0!==t?t:i});if(!(0,s.Wi)(n.pixelBlock)){n.pixelBlock.maskIsAlpha&&(n.pixelBlock.premultiplyAlpha=!0);var r=n.pixelBlock.getAsRGBA(),a=e.createImageData(n.pixelBlock.width,n.pixelBlock.height);a.data.set(r),e.putImageData(a,0,0)}}}},{key:"getRenderedRasterPixels",value:function(){var e=this.filter({extent:this.extent,pixelBlock:this.pixelBlock});return(0,s.Wi)(e.pixelBlock)?null:(e.pixelBlock.maskIsAlpha&&(e.pixelBlock.premultiplyAlpha=!0),{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)})}}]),e}()},55067:function(e,t,i){i.d(t,{Z:function(){return y}});var n=i(37762),r=i(15671),s=i(43144),a=i(11752),u=i(61120),o=i(60136),l=i(29388),h=i(93169),c=i(80613),d=i(64510),f=i(52424),p=i(40655),v=function(e,t){return e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col},y=function(e){(0,o.Z)(i,e);var t=(0,l.Z)(i);function i(e){var n;return(0,r.Z)(this,i),(n=t.call(this))._tileInfoView=e,n}return(0,s.Z)(i,[{key:"requiresDedicatedFBO",get:function(){return!1}},{key:"renderChildren",value:function(e){this.sortChildren(v),this.setStencilReference(e),(0,a.Z)((0,u.Z)(i.prototype),"renderChildren",this).call(this,e)}},{key:"createRenderParams",value:function(e){var t=e.state,n=(0,a.Z)((0,u.Z)(i.prototype),"createRenderParams",this).call(this,e);return n.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,n.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),n}},{key:"prepareRenderPasses",value:function(e){var t=this,n=(0,a.Z)((0,u.Z)(i.prototype),"prepareRenderPasses",this).call(this,e);return n.push(e.registerRenderPass({name:"stencil",brushes:[p.Z],drawPhase:c.jx.DEBUG|c.jx.MAP|c.jx.HIGHLIGHT,target:function(){return t.getStencilTarget()}})),(0,h.Z)("esri-tiles-debug")&&n.push(e.registerRenderPass({name:"tileInfo",brushes:[f.Z],drawPhase:c.jx.DEBUG,target:function(){return t.children}})),n}},{key:"getStencilTarget",value:function(){return this.children}},{key:"setStencilReference",value:function(e){var t,i=1,r=(0,n.Z)(this.children);try{for(r.s();!(t=r.n()).done;){t.value.stencilRef=i++}}catch(s){r.e(s)}finally{r.f()}}}]),i}(d.Z)},72900:function(e,t,i){i.d(t,{I:function(){return c}});var n=i(29439),r=i(15671),s=i(43144),a=i(60136),u=i(29388),o=i(22753),l=i(87422),h=i(73828),c=function(e){(0,a.Z)(i,e);var t=(0,u.Z)(i);function i(e,n,s,a,u,o){var l,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:u,d=arguments.length>7&&void 0!==arguments[7]?arguments[7]:o;return(0,r.Z)(this,i),(l=t.call(this)).triangleCountReportedInDebug=0,l.triangleCount=0,l.texture=null,l.key=new h.Z(e),l.resolution=n,l.x=s,l.y=a,l.width=u,l.height=o,l.rangeX=c,l.rangeY=d,l}return(0,s.Z)(i,[{key:"destroy",value:function(){this.texture&&(this.texture.dispose(),this.texture=null)}},{key:"setTransform",value:function(e){var t=this.resolution/(e.resolution*e.pixelRatio),i=this.transforms.tileMat3,r=e.toScreenNoRotation([0,0],[this.x,this.y]),s=(0,n.Z)(r,2),a=s[0],u=s[1],l=this.width/this.rangeX*t,h=this.height/this.rangeY*t;(0,o.s)(i,l,0,0,0,h,0,a,u,1),(0,o.m)(this.transforms.dvs,e.displayViewMat3,i)}}]),i}(l.s)},40639:function(e,t,i){i.d(t,{Z:function(){return d}});var n=i(15671),r=i(43144),s=i(60136),a=i(29388),u=i(27366),o=i(41691),l=i(49861),h=(i(25243),i(63780),i(69912)),c=function(e){(0,s.Z)(i,e);var t=(0,a.Z)(i);function i(e){var r;return(0,n.Z)(this,i),(r=t.call(this,e)).tiles=new Map,r}return(0,r.Z)(i,[{key:"destroy",value:function(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null}},{key:"updating",get:function(){return this.isUpdating()}},{key:"acquireTile",value:function(e){var t=this,i=this.createTile(e);return i.once("isReady",(function(){return t.notifyChange("updating")})),this.tiles.set(e.id,i),i}},{key:"forceAttributeTextureUpload",value:function(){}},{key:"forEachTile",value:function(e){this.tiles.forEach(e)}},{key:"releaseTile",value:function(e){this.tiles.delete(e.key.id),this.disposeTile(e)}},{key:"isUpdating",value:function(){var e=!0;return this.tiles.forEach((function(t){e=e&&t.isReady})),!e}},{key:"setHighlight",value:function(){}},{key:"invalidateLabels",value:function(){}},{key:"requestUpdate",value:function(){this.layerView.requestUpdate()}}]),i}(o.r);(0,u._)([(0,l.Cb)()],c.prototype,"layer",void 0),(0,u._)([(0,l.Cb)()],c.prototype,"layerView",void 0),(0,u._)([(0,l.Cb)()],c.prototype,"tileInfoView",void 0),(0,u._)([(0,l.Cb)()],c.prototype,"updating",null);var d=c=(0,u._)([(0,h.j)("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],c)},46598:function(e,t,i){i.r(t),i.d(t,{default:function(){return p}});var n=i(15671),r=i(43144),s=i(60136),a=i(29388),u=i(27366),o=(i(32718),i(25243),i(63780),i(10064),i(93169),i(69912)),l=i(27811),h=i(9849),c=i(40639),d=function(){function e(){(0,n.Z)(this,e),this.gradient=null,this.height=512,this.intensities=null,this.width=512}return(0,r.Z)(e,[{key:"render",value:function(e){(0,l.hy)(e,512,this.intensities,this.gradient,this.minDensity,this.maxDensity)}}]),e}(),f=function(e){(0,s.Z)(i,e);var t=(0,a.Z)(i);function i(e){var r;return(0,n.Z)(this,i),(r=t.call(this,e))._intensityInfo={minDensity:0,maxDensity:0},r.type="heatmap",r.featuresView={attributeView:{initialize:function(){},requestUpdate:function(){}},requestRender:function(){}},r._container=new h.s(e.tileInfoView),r}return(0,r.Z)(i,[{key:"createTile",value:function(e){var t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t}},{key:"onConfigUpdate",value:function(){var e=this,t=this.layer.renderer;if("heatmap"===t.type){var i=t.minDensity,n=t.maxDensity,r=t.colorStops;this._intensityInfo.minDensity=i,this._intensityInfo.maxDensity=n,this._gradient=(0,l.uI)(r),this.tiles.forEach((function(t){var r=t.bitmap.source;r&&(r.minDensity=i,r.maxDensity=n,r.gradient=e._gradient,t.bitmap.invalidateTexture())}))}}},{key:"hitTest",value:function(){return Promise.resolve([])}},{key:"install",value:function(e){e.addChild(this._container)}},{key:"uninstall",value:function(e){this._container.removeAllChildren(),e.removeChild(this._container)}},{key:"disposeTile",value:function(e){this._container.removeChild(e),e.destroy()}},{key:"supportsRenderer",value:function(e){return e&&"heatmap"===e.type}},{key:"onTileData",value:function(e){var t=this.tiles.get(e.tileKey);if(t){var i=e.intensityInfo,n=this._intensityInfo,r=n.minDensity,s=n.maxDensity,a=t.bitmap.source||new d;a.intensities=i&&i.matrix||null,a.minDensity=r,a.maxDensity=s,a.gradient=this._gradient,t.bitmap.source=a,this._container.addChild(t),this._container.requestRender(),this.requestUpdate()}}},{key:"onTileError",value:function(e){console.error(e)}},{key:"lockGPUUploads",value:function(){}},{key:"unlockGPUUploads",value:function(){}},{key:"fetchResource",value:function(e,t){return console.error(e),Promise.reject()}}]),i}(c.Z),p=f=(0,u._)([(0,o.j)("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],f)}}]);
//# sourceMappingURL=6598.f386cfe8.chunk.js.map