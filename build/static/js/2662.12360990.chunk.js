"use strict";(self.webpackChunkpanorama_viewer=self.webpackChunkpanorama_viewer||[]).push([[2662],{52662:function(t,e,a){a.r(e),a.d(e,{default:function(){return g}});var i=a(74165),n=a(15861),r=a(15671),s=a(43144),u=a(60136),o=a(29388),h=a(27366),c=a(32718),p=a(66978),d=a(49861),f=(a(25243),a(63780),a(69912)),y=a(90110),l=a(95986),v=a(9229),m=a(67581),_=function(t){(0,u.Z)(a,t);var e=(0,o.Z)(a);function a(){return(0,r.Z)(this,a),e.apply(this,arguments)}return(0,s.Z)(a,[{key:"update",value:function(t){var e=this;this._strategy.update(t).catch((function(t){(0,p.D_)(t)||c.Z.getLogger(e.declaredClass).error(t)})),this.notifyChange("updating")}},{key:"attach",value:function(){this._bitmapContainer=new y.c,this.container.addChild(this._bitmapContainer),this._strategy=new v.Z({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}},{key:"detach",value:function(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"fetchBitmapData",value:function(t,e,a){return this.layer.fetchImageBitmap(t,e,a)}},{key:"doRefresh",value:function(){var t=(0,n.Z)((0,i.Z)().mark((function t(){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.requestUpdate();case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"isUpdating",value:function(){return this._strategy.updating||this.updateRequested}}]),a}((0,a(13107).Z)((0,l.y)(m.Z)));(0,h._)([(0,d.Cb)()],_.prototype,"_strategy",void 0),(0,h._)([(0,d.Cb)()],_.prototype,"updating",void 0);var g=_=(0,h._)([(0,f.j)("esri.views.2d.layers.BaseDynamicLayerView2D")],_)}}]);
//# sourceMappingURL=2662.12360990.chunk.js.map