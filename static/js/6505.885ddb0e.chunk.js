"use strict";(self.webpackChunkpanorama_viewer=self.webpackChunkpanorama_viewer||[]).push([[6505],{66505:function(e,t,r){r.r(t),r.d(t,{default:function(){return st}});var i=r(74165),n=r(1413),o=r(15861),a=r(37762),s=r(15671),l=r(43144),u=r(11752),y=r(61120),p=r(60136),d=r(29388),c=r(27366),f=r(40281),v=r(77178),h=r(10064),b=r(84652),g=r(93002),m=r(32718),_=r(92026),Z=r(97642),w=r(66978),C=r(35995),S=r(49861),k=r(25243),j=r(38511),x=r(69912),O=r(78952),I=r(30651),F=r(52639),L=r(44055),T=(r(94931),r(78451),r(98689),r(57823),r(32066),r(49018),r(34999),r(28189),r(9014),r(40464)),q=r(76200),B=r(43404),A=r(54472),E=r(67426),R=(r(63780),r(27135)),N=r(53866),P=r(64326),M=r(79056),U=r(45948),Q=function(e){(0,p.Z)(r,e);var t=(0,d.Z)(r);function r(e){var i;return(0,s.Z)(this,r),(i=t.call(this,e)).title="",i.id=-1,i.modelName=null,i.isEmpty=null,i.visible=!0,i.opacity=1,i}return(0,l.Z)(r,[{key:"readTitle",value:function(e,t){return"string"==typeof t.alias?t.alias:"string"==typeof t.name?t.name:""}},{key:"readIdOnlyOnce",value:function(e){return-1!==this.id?this.id:"number"==typeof e?e:-1}}]),r}((0,M.IG)(Z.w));(0,c._)([(0,S.Cb)({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],Q.prototype,"title",void 0),(0,c._)([(0,j.r)("service","title",["alias","name"])],Q.prototype,"readTitle",null),(0,c._)([(0,S.Cb)()],Q.prototype,"layer",void 0),(0,c._)([(0,S.Cb)({type:k.z8,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],Q.prototype,"id",void 0),(0,c._)([(0,j.r)("service","id")],Q.prototype,"readIdOnlyOnce",null),(0,c._)([(0,S.Cb)((0,U.Lx)(String))],Q.prototype,"modelName",void 0),(0,c._)([(0,S.Cb)((0,U.Lx)(Boolean))],Q.prototype,"isEmpty",void 0),(0,c._)([(0,S.Cb)({type:Boolean,json:{name:"visibility",write:!0}})],Q.prototype,"visible",void 0),(0,c._)([(0,S.Cb)({type:Number,json:{write:!0}})],Q.prototype,"opacity",void 0);var V=Q=(0,c._)([(0,x.j)("esri.layers.buildingSublayers.BuildingSublayer")],Q),D=r(96978),K=r(25610),J=r(52410),G=r(80031),H=r(30494),W=r(34207),z=r(86638),X=r(81085),Y=r(64575),$=r(55664),ee=r(24405),te="esri.layers.buildingSublayers.BuildingComponentSublayer",re=m.Z.getLogger(te),ie=(0,K.v)(),ne=function(e){(0,p.Z)(r,e);var t=(0,d.Z)(r);function r(e){var i;return(0,s.Z)(this,r),(i=t.call(this,e)).type="building-component",i.nodePages=null,i.materialDefinitions=[],i.textureSetDefinitions=[],i.geometryDefinitions=[],i.indexInfo=null,i.serviceUpdateTimeStamp=null,i.store=null,i.attributeStorageInfo=[],i.fields=[],i.associatedLayer=null,i.outFields=null,i.listMode="show",i.renderer=null,i.definitionExpression=null,i.popupEnabled=!0,i.popupTemplate=null,i.layerType="3d-object",i}return(0,l.Z)(r,[{key:"parsedUrl",get:function(){var e,t;return this.layer?{path:"".concat(null===(e=this.layer.parsedUrl)||void 0===e?void 0:e.path,"/sublayers/").concat(this.id),query:null===(t=this.layer.parsedUrl)||void 0===t?void 0:t.query}:{path:""}}},{key:"fieldsIndex",get:function(){return new J.Z(this.fields)}},{key:"readAssociatedLayer",value:function(e,t){var r=this.layer.associatedFeatureServiceItem,i=t.associatedLayerID;return(0,_.pC)(r)&&"number"==typeof i?new P.default({portalItem:r,layerId:i}):null}},{key:"objectIdField",get:function(){if(null!=this.fields){var e,t=(0,a.Z)(this.fields);try{for(t.s();!(e=t.n()).done;){var r=e.value;if("oid"===r.type)return r.name}}catch(i){t.e(i)}finally{t.f()}}return null}},{key:"displayField",get:function(){return(0,_.pC)(this.associatedLayer)?this.associatedLayer.displayField:void 0}},{key:"apiKey",get:function(){return this.layer.apiKey}},{key:"fullExtent",get:function(){return this.layer.fullExtent}},{key:"spatialReference",get:function(){return this.layer.spatialReference}},{key:"version",get:function(){return this.layer.version}},{key:"elevationInfo",get:function(){return this.layer.elevationInfo}},{key:"minScale",get:function(){return this.layer.minScale}},{key:"maxScale",get:function(){return this.layer.maxScale}},{key:"effectiveScaleRange",get:function(){return this.layer.effectiveScaleRange}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"load",value:function(e){var t=this,r=(0,_.pC)(e)?e.signal:null,i=this._fetchService(r).then((function(){t.indexInfo=(0,H.T)(t.parsedUrl.path,t.rootNode,t.nodePages,t.apiKey,re,r)}));return this.addResolvingPromise(i),Promise.resolve(this)}},{key:"createPopupTemplate",value:function(e){return(0,X.eZ)(this,e)}},{key:"_fetchService",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){var r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,q.default)(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t});case 2:r=e.sent.data,this.read(r,{origin:"service",url:this.parsedUrl});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getField",value:function(e){return this.fieldsIndex.get(e)}},{key:"getFieldDomain",value:function(e,t){var r,i,n,o,a=null===(r=this.getFeatureType(null===t||void 0===t?void 0:t.feature))||void 0===r||null===(i=r.domains)||void 0===i?void 0:i[e];return a&&"inherited"!==a.type?a:null!==(n=null===(o=this.getField(e))||void 0===o?void 0:o.domain)&&void 0!==n?n:null}},{key:"getFeatureType",value:function(e){return e&&(0,_.pC)(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}},{key:"types",get:function(){var e;return(0,_.pC)(this.associatedLayer)&&null!==(e=this.associatedLayer.types)&&void 0!==e?e:[]}},{key:"typeIdField",get:function(){return(0,_.pC)(this.associatedLayer)?this.associatedLayer.typeIdField:null}},{key:"geometryType",get:function(){return"3d-object"===this.layerType?"mesh":"point"}},{key:"profile",get:function(){return"3d-object"===this.layerType?"mesh-pyramids":"points"}},{key:"capabilities",get:function(){var e=(0,_.pC)(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:D.C,t=e.query,r=e.data;return{query:t,data:{supportsZ:r.supportsZ,supportsM:r.supportsM,isVersioned:r.isVersioned}}}},{key:"createQuery",value:function(){var e=new z.Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}},{key:"queryExtent",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(i){return i.queryExtent(e||r.createQuery(),t)}))}},{key:"queryFeatureCount",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(i){return i.queryFeatureCount(e||r.createQuery(),t)}))}},{key:"queryFeatures",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(i){return i.queryFeatures(e||r.createQuery(),t)})).then((function(e){if(null!==e&&void 0!==e&&e.features){var t,i=(0,a.Z)(e.features);try{for(i.s();!(t=i.n()).done;){var n=t.value;n.layer=r.layer,n.sourceLayer=r}}catch(o){i.e(o)}finally{i.f()}}return e}))}},{key:"queryObjectIds",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(i){return i.queryObjectIds(e||r.createQuery(),t)}))}},{key:"queryCachedAttributes",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=G.Lk,e.t1=this.fieldsIndex,e.next=4,(0,ee.e)(this,(0,ee.V)(this));case 4:return e.t2=e.sent,n=(0,e.t0)(e.t1,e.t2),e.abrupt("return",(0,$.xe)(this.parsedUrl.path,this.attributeStorageInfo,t,r,n));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryCachedFeature",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var n,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.queryCachedAttributes(t,[r]);case 2:if((n=e.sent)&&0!==n.length){e.next=5;break}throw new h.Z("scenelayer:feature-not-in-cached-data","Feature not found in cached data");case 5:return o=new F.Z,e.abrupt("return",(o.attributes=n[0],o.layer=this,o.sourceLayer=this,o));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"getFieldUsageInfo",value:function(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:(0,_.pC)(this.associatedLayer)}}},{key:"_getAssociatedLayerForQuery",value:function(){var e=this.associatedLayer;return(0,_.pC)(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}},{key:"_loadAssociatedLayerForQuery",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:if(!(0,_.Wi)(this.associatedLayer)){e.next=4;break}throw new h.Z("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});case 4:return e.prev=4,e.next=7,this.associatedLayer.load();case 7:e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(4),new h.Z("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e.t0});case 12:return e.abrupt("return",this.associatedLayer);case 13:case"end":return e.stop()}}),e,this,[[4,9]])})));return function(){return e.apply(this,arguments)}}()}]),r}(A.Z.LoadableMixin((0,E.v)(V)));(0,c._)([(0,S.Cb)({readOnly:!0})],ne.prototype,"parsedUrl",null),(0,c._)([(0,S.Cb)({type:W.U4,readOnly:!0})],ne.prototype,"nodePages",void 0),(0,c._)([(0,S.Cb)({type:[W.QI],readOnly:!0})],ne.prototype,"materialDefinitions",void 0),(0,c._)([(0,S.Cb)({type:[W.Yh],readOnly:!0})],ne.prototype,"textureSetDefinitions",void 0),(0,c._)([(0,S.Cb)({type:[W.H3],readOnly:!0})],ne.prototype,"geometryDefinitions",void 0),(0,c._)([(0,S.Cb)({readOnly:!0})],ne.prototype,"serviceUpdateTimeStamp",void 0),(0,c._)([(0,S.Cb)({readOnly:!0})],ne.prototype,"store",void 0),(0,c._)([(0,S.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],ne.prototype,"rootNode",void 0),(0,c._)([(0,S.Cb)({readOnly:!0})],ne.prototype,"attributeStorageInfo",void 0),(0,c._)([(0,S.Cb)(ie.fields)],ne.prototype,"fields",void 0),(0,c._)([(0,S.Cb)({readOnly:!0})],ne.prototype,"fieldsIndex",null),(0,c._)([(0,S.Cb)({readOnly:!0,type:P.default})],ne.prototype,"associatedLayer",void 0),(0,c._)([(0,j.r)("service","associatedLayer",["associatedLayerID"])],ne.prototype,"readAssociatedLayer",null),(0,c._)([(0,S.Cb)(ie.outFields)],ne.prototype,"outFields",void 0),(0,c._)([(0,S.Cb)({type:String,readOnly:!0})],ne.prototype,"objectIdField",null),(0,c._)([(0,S.Cb)({readOnly:!0,type:String,json:{read:!1}})],ne.prototype,"displayField",null),(0,c._)([(0,S.Cb)({readOnly:!0,type:String})],ne.prototype,"apiKey",null),(0,c._)([(0,S.Cb)({readOnly:!0,type:N.Z})],ne.prototype,"fullExtent",null),(0,c._)([(0,S.Cb)({readOnly:!0,type:O.Z})],ne.prototype,"spatialReference",null),(0,c._)([(0,S.Cb)({readOnly:!0})],ne.prototype,"version",null),(0,c._)([(0,S.Cb)({readOnly:!0,type:Y.Z})],ne.prototype,"elevationInfo",null),(0,c._)([(0,S.Cb)({readOnly:!0,type:Number})],ne.prototype,"minScale",null),(0,c._)([(0,S.Cb)({readOnly:!0,type:Number})],ne.prototype,"maxScale",null),(0,c._)([(0,S.Cb)({readOnly:!0,type:Number})],ne.prototype,"effectiveScaleRange",null),(0,c._)([(0,S.Cb)({type:["hide","show"],json:{write:!0}})],ne.prototype,"listMode",void 0),(0,c._)([(0,S.Cb)({types:T.o,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],ne.prototype,"renderer",void 0),(0,c._)([(0,S.Cb)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],ne.prototype,"definitionExpression",void 0),(0,c._)([(0,S.Cb)(U.C_)],ne.prototype,"popupEnabled",void 0),(0,c._)([(0,S.Cb)({type:L.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],ne.prototype,"popupTemplate",void 0),(0,c._)([(0,S.Cb)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],ne.prototype,"normalReferenceFrame",void 0),(0,c._)([(0,S.Cb)({readOnly:!0,json:{read:!1}})],ne.prototype,"defaultPopupTemplate",null),(0,c._)([(0,S.Cb)()],ne.prototype,"types",null),(0,c._)([(0,S.Cb)()],ne.prototype,"typeIdField",null),(0,c._)([(0,S.Cb)({json:{write:!1}}),(0,R.J)(new B.X({"3DObject":"3d-object",Point:"point"}))],ne.prototype,"layerType",void 0),(0,c._)([(0,S.Cb)()],ne.prototype,"geometryType",null),(0,c._)([(0,S.Cb)()],ne.prototype,"profile",null),(0,c._)([(0,S.Cb)({readOnly:!0,json:{read:!1}})],ne.prototype,"capabilities",null);var oe,ae=ne=(0,c._)([(0,x.j)(te)],ne),se=r(51370),le={type:f.Z,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:ue}}},read:!1}};function ue(e,t,r){if(e&&Array.isArray(e))return new f.Z(e.map((function(e){var t=function(e){return"group"===e.layerType?pe:ae}(e);if(t){var i=new t;return i.read(e,r),i}return r&&r.messages&&e&&r.messages.push(new se.Z("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r})),null})))}var ye,pe=oe=function(e){(0,p.Z)(r,e);var t=(0,d.Z)(r);function r(e){var i;return(0,s.Z)(this,r),(i=t.call(this,e)).type="building-group",i.listMode="show",i.sublayers=null,i}return(0,l.Z)(r,[{key:"loadAll",value:function(){var e=this;return(0,g.w)(this,(function(t){return oe.forEachSublayer(e.sublayers,(function(e){"building-group"!==e.type&&t(e)}))}))}}]),r}(V);(0,c._)([(0,S.Cb)({type:["hide","show","hide-children"],json:{write:!0}})],pe.prototype,"listMode",void 0),(0,c._)([(0,S.Cb)(le)],pe.prototype,"sublayers",void 0),pe=oe=(0,c._)([(0,x.j)("esri.layers.buildingSublayers.BuildingGroupSublayer")],pe),(ye=pe||(pe={})).sublayersProperty=le,ye.readSublayers=ue,ye.forEachSublayer=function e(t,r){t.forEach((function(t){r(t),"building-group"===t.type&&e(t.sublayers,r)}))};var de=pe,ce=r(27961),fe=r(11936),ve=r(6061),he=r(29598),be=r(56811),ge=r(54395),me=r(46784),_e=r(71907),Ze=function(e){(0,p.Z)(r,e);var t=(0,d.Z)(r);function r(){var e;return(0,s.Z)(this,r),(e=t.apply(this,arguments)).type=null,e}return(0,l.Z)(r)}(me.wq);(0,c._)([(0,S.Cb)({type:String,readOnly:!0,json:{write:!0}})],Ze.prototype,"type",void 0);var we,Ce=Ze=(0,c._)([(0,x.j)("esri.layers.support.BuildingFilterAuthoringInfo")],Ze),Se=we=function(e){(0,p.Z)(r,e);var t=(0,d.Z)(r);function r(){var e;return(0,s.Z)(this,r),(e=t.apply(this,arguments)).filterType=null,e.filterValues=null,e}return(0,l.Z)(r,[{key:"clone",value:function(){return new we({filterType:this.filterType,filterValues:(0,b.d9)(this.filterValues)})}}]),r}(me.wq);(0,c._)([(0,S.Cb)({type:String,json:{write:!0}})],Se.prototype,"filterType",void 0),(0,c._)([(0,S.Cb)({type:[String],json:{write:!0}})],Se.prototype,"filterValues",void 0);var ke,je=Se=we=(0,c._)([(0,x.j)("esri.layers.support.BuildingFilterAuthoringInfoType")],Se),xe=f.Z.ofType(je),Oe=ke=function(e){(0,p.Z)(r,e);var t=(0,d.Z)(r);function r(){return(0,s.Z)(this,r),t.apply(this,arguments)}return(0,l.Z)(r,[{key:"clone",value:function(){return new ke({filterTypes:(0,b.d9)(this.filterTypes)})}}]),r}(me.wq);(0,c._)([(0,S.Cb)({type:xe,json:{write:!0}})],Oe.prototype,"filterTypes",void 0);var Ie,Fe=Oe=ke=(0,c._)([(0,x.j)("esri.layers.support.BuildingFilterAuthoringInfoBlock")],Oe),Le=f.Z.ofType(Fe),Te=Ie=function(e){(0,p.Z)(r,e);var t=(0,d.Z)(r);function r(){var e;return(0,s.Z)(this,r),(e=t.apply(this,arguments)).type="checkbox",e}return(0,l.Z)(r,[{key:"clone",value:function(){return new Ie({filterBlocks:(0,b.d9)(this.filterBlocks)})}}]),r}(Ce);(0,c._)([(0,S.Cb)({type:["checkbox"]})],Te.prototype,"type",void 0),(0,c._)([(0,S.Cb)({type:Le,json:{write:!0}})],Te.prototype,"filterBlocks",void 0);var qe=Te=Ie=(0,c._)([(0,x.j)("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],Te),Be=function(e){(0,p.Z)(r,e);var t=(0,d.Z)(r);function r(){return(0,s.Z)(this,r),t.apply(this,arguments)}return(0,l.Z)(r)}(me.wq);(0,c._)([(0,S.Cb)({readOnly:!0,json:{read:!1}})],Be.prototype,"type",void 0);var Ae,Ee=Be=(0,c._)([(0,x.j)("esri.layers.support.BuildingFilterMode")],Be),Re=Ae=function(e){(0,p.Z)(r,e);var t=(0,d.Z)(r);function r(){var e;return(0,s.Z)(this,r),(e=t.apply(this,arguments)).type="solid",e}return(0,l.Z)(r,[{key:"clone",value:function(){return new Ae}}]),r}(Ee);(0,c._)([(0,S.Cb)({type:["solid"],readOnly:!0,json:{write:!0}})],Re.prototype,"type",void 0);var Ne,Pe=Re=Ae=(0,c._)([(0,x.j)("esri.layers.support.BuildingFilterModeSolid")],Re),Me=r(12365),Ue=Ne=function(e){(0,p.Z)(r,e);var t=(0,d.Z)(r);function r(){var e;return(0,s.Z)(this,r),(e=t.apply(this,arguments)).type="wire-frame",e.edges=null,e}return(0,l.Z)(r,[{key:"clone",value:function(){return new Ne({edges:(0,b.d9)(this.edges)})}}]),r}(Ee);(0,c._)([(0,R.J)({wireFrame:"wire-frame"})],Ue.prototype,"type",void 0),(0,c._)([(0,S.Cb)(Me.Z)],Ue.prototype,"edges",void 0);var Qe,Ve=Ue=Ne=(0,c._)([(0,x.j)("esri.layers.support.BuildingFilterModeWireFrame")],Ue),De=Qe=function(e){(0,p.Z)(r,e);var t=(0,d.Z)(r);function r(){var e;return(0,s.Z)(this,r),(e=t.apply(this,arguments)).type="x-ray",e}return(0,l.Z)(r,[{key:"clone",value:function(){return new Qe}}]),r}(Ee);(0,c._)([(0,S.Cb)({type:["x-ray"],readOnly:!0,json:{write:!0}})],De.prototype,"type",void 0);var Ke,Je=De=Qe=(0,c._)([(0,x.j)("esri.layers.support.BuildingFilterModeXRay")],De),Ge={nonNullable:!0,types:{key:"type",base:Ee,typeMap:{solid:Pe,"wire-frame":Ve,"x-ray":Je}},json:{read:function(e){switch(e&&e.type){case"solid":return Pe.fromJSON(e);case"wireFrame":return Ve.fromJSON(e);case"x-ray":return Je.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}},He=Ke=function(e){(0,p.Z)(r,e);var t=(0,d.Z)(r);function r(){var e;return(0,s.Z)(this,r),(e=t.apply(this,arguments)).filterExpression=null,e.filterMode=new Pe,e.title="",e}return(0,l.Z)(r,[{key:"clone",value:function(){return new Ke({filterExpression:this.filterExpression,filterMode:(0,b.d9)(this.filterMode),title:this.title})}}]),r}(me.wq);(0,c._)([(0,S.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],He.prototype,"filterExpression",void 0),(0,c._)([(0,S.Cb)(Ge)],He.prototype,"filterMode",void 0),(0,c._)([(0,S.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],He.prototype,"title",void 0);var We,ze=He=Ke=(0,c._)([(0,x.j)("esri.layers.support.BuildingFilterBlock")],He),Xe=f.Z.ofType(ze),Ye=We=function(e){(0,p.Z)(r,e);var t=(0,d.Z)(r);function r(){var e;return(0,s.Z)(this,r),(e=t.apply(this,arguments)).description=null,e.filterBlocks=null,e.id=(0,_e.D)(),e.name=null,e}return(0,l.Z)(r,[{key:"clone",value:function(){return new We({description:this.description,filterBlocks:(0,b.d9)(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:(0,b.d9)(this.filterAuthoringInfo)})}}]),r}(me.wq);(0,c._)([(0,S.Cb)({type:String,json:{write:!0}})],Ye.prototype,"description",void 0),(0,c._)([(0,S.Cb)({type:Xe,json:{write:{enabled:!0,isRequired:!0}}})],Ye.prototype,"filterBlocks",void 0),(0,c._)([(0,S.Cb)({types:{key:"type",base:Ce,typeMap:{checkbox:qe}},json:{read:function(e){return"checkbox"===(e&&e.type)?qe.fromJSON(e):null},write:!0}})],Ye.prototype,"filterAuthoringInfo",void 0),(0,c._)([(0,S.Cb)({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],Ye.prototype,"id",void 0),(0,c._)([(0,S.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Ye.prototype,"name",void 0);var $e=Ye=We=(0,c._)([(0,x.j)("esri.layers.support.BuildingFilter")],Ye),et=function(e){(0,p.Z)(r,e);var t=(0,d.Z)(r);function r(){var e;return(0,s.Z)(this,r),(e=t.apply(this,arguments)).fieldName=null,e.modelName=null,e.label=null,e.min=null,e.max=null,e.mostFrequentValues=null,e.subLayerIds=null,e}return(0,l.Z)(r)}(me.wq);(0,c._)([(0,S.Cb)({type:String})],et.prototype,"fieldName",void 0),(0,c._)([(0,S.Cb)({type:String})],et.prototype,"modelName",void 0),(0,c._)([(0,S.Cb)({type:String})],et.prototype,"label",void 0),(0,c._)([(0,S.Cb)({type:Number})],et.prototype,"min",void 0),(0,c._)([(0,S.Cb)({type:Number})],et.prototype,"max",void 0),(0,c._)([(0,S.Cb)({json:{read:function(e){return Array.isArray(e)&&(e.every((function(e){return"string"==typeof e}))||e.every((function(e){return"number"==typeof e})))?e.slice():null}}})],et.prototype,"mostFrequentValues",void 0),(0,c._)([(0,S.Cb)({type:[Number]})],et.prototype,"subLayerIds",void 0),et=(0,c._)([(0,x.j)("esri.layers.support.BuildingFieldStatistics")],et);var tt=function(e){(0,p.Z)(r,e);var t=(0,d.Z)(r);function r(){var e;return(0,s.Z)(this,r),(e=t.apply(this,arguments)).url=null,e}return(0,l.Z)(r,[{key:"fields",get:function(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(m.Z.getLogger(this.declaredClass).error("building summary statistics are not loaded"),null)}},{key:"load",value:function(e){var t=(0,_.pC)(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}},{key:"_fetchService",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){var r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,q.default)(this.url,{query:{f:"json"},responseType:"json",signal:t});case 2:r=e.sent.data,this.read(r,{origin:"service"});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),r}(A.Z.LoadableMixin((0,E.v)(me.wq)));(0,c._)([(0,S.Cb)({constructOnly:!0,type:String})],tt.prototype,"url",void 0),(0,c._)([(0,S.Cb)({readOnly:!0,type:[et],json:{read:{source:"summary"}}})],tt.prototype,"fields",null);var rt=tt=(0,c._)([(0,x.j)("esri.layers.support.BuildingSummaryStatistics")],tt),it=r(34785),nt=f.Z.ofType($e),ot=(0,b.d9)(de.sublayersProperty);ot.json.origins["web-scene"]={type:[ae],write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}},ot.json.origins["portal-item"]={type:[ae],write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}};var at=function(e){(0,p.Z)(r,e);var t=(0,d.Z)(r);function r(e){var i;return(0,s.Z)(this,r),(i=t.call(this,e)).operationalLayerType="BuildingSceneLayer",i.allSublayers=new v.Z({getCollections:function(){return[i.sublayers]},getChildrenFunction:function(e){return"building-group"===e.type?e.sublayers:null}}),i.sublayers=null,i._sublayerOverrides=null,i.filters=new nt,i.activeFilterId=null,i.summaryStatistics=null,i.outFields=null,i.type="building-scene",i}return(0,l.Z)(r,[{key:"normalizeCtorArgs",value:function(e){return"string"==typeof e?{url:e}:null!==e&&void 0!==e?e:{}}},{key:"destroy",value:function(){this.allSublayers.destroy()}},{key:"readSublayers",value:function(e,t,r){var i=this,n=de.readSublayers(e,t,r);return de.forEachSublayer(n,(function(e){return e.layer=i})),this._sublayerOverrides&&(this.applySublayerOverrides(n,this._sublayerOverrides),this._sublayerOverrides=null),n}},{key:"applySublayerOverrides",value:function(e,t){var r=t.overrides,i=t.context;de.forEachSublayer(e,(function(e){return e.read(r.get(e.id),i)}))}},{key:"readSublayerOverrides",value:function(e,t){var r,i=new Map,n=(0,a.Z)(e);try{for(n.s();!(r=n.n()).done;){var o,s=r.value;null!=s&&"object"==typeof s&&"number"==typeof s.id?i.set(s.id,s):null===(o=t.messages)||void 0===o||o.push(new h.Z("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:s}))}}catch(l){n.e(l)}finally{n.f()}return{overrides:i,context:t}}},{key:"writeSublayerOverrides",value:function(e,t,r){var i=[];de.forEachSublayer(this.sublayers,(function(e){var t=e.write({},r);Object.keys(t).length>1&&i.push(t)})),i.length>0&&(t.sublayers=i)}},{key:"writeUnappliedOverrides",value:function(e,t){t.sublayers=[],e.overrides.forEach((function(e){t.sublayers.push((0,b.d9)(e))}))}},{key:"write",value:function(e,t){return e=(0,u.Z)((0,y.Z)(r.prototype),"write",this).call(this,e,t),!t||"web-scene"!==t.origin&&"portal-item"!==t.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,t):this._sublayerOverrides&&this.writeUnappliedOverrides(this._sublayerOverrides,e)),e}},{key:"read",value:function(e,t){if((0,u.Z)((0,y.Z)(r.prototype),"read",this).call(this,e,t),t&&("web-scene"===t.origin||"portal-item"===t.origin)&&null!=e&&Array.isArray(e.sublayers)){var i=this.readSublayerOverrides(e.sublayers,t);this.sublayers?this.applySublayerOverrides(this.sublayers,i):this._sublayerOverrides=i}}},{key:"readSummaryStatistics",value:function(e,t){if("string"==typeof t.statisticsHRef){var r,i=(0,C.v_)(null===(r=this.parsedUrl)||void 0===r?void 0:r.path,t.statisticsHRef);return new rt({url:i})}return null}},{key:"elevationInfo",set:function(e){this._set("elevationInfo",e),this._validateElevationInfo()}},{key:"load",value:function(e){var t=this,r=(0,_.pC)(e)?e.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(w.r9).then((function(){return t._fetchService(r)})).then((function(){return t._fetchAssociatedFeatureService(r)}));return this.addResolvingPromise(i),Promise.resolve(this)}},{key:"loadAll",value:function(){var e=this;return(0,g.G)(this,(function(t){de.forEachSublayer(e.sublayers,(function(e){"building-group"!==e.type&&t(e)})),e.summaryStatistics&&t(e.summaryStatistics)}))}},{key:"saveAs",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var o=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._debouncedSaveOperations(ge.xp.SAVE_AS,(0,n.Z)((0,n.Z)({},r),{},{getTypeKeywords:function(){return o._getTypeKeywords()},portalItemLayerType:"building-scene"}),t));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"save",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){var t,r=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={getTypeKeywords:function(){return r._getTypeKeywords()},portalItemLayerType:"building-scene"},e.abrupt("return",this._debouncedSaveOperations(ge.xp.SAVE,t));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"validateLayer",value:function(e){if(!e.layerType||"Building"!==e.layerType)throw new h.Z("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}},{key:"_getTypeKeywords",value:function(){return["Building"]}},{key:"_validateElevationInfo",value:function(){var e=this.elevationInfo;e&&("absolute-height"!==e.mode&&m.Z.getLogger(this.declaredClass).warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&m.Z.getLogger(this.declaredClass).warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}},{key:"_fetchAssociatedFeatureService",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){var r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new it.W(this.parsedUrl,this.portalItem,this.apiKey,t),e.prev=1,e.next=4,r.fetchPortalItem();case 4:this.associatedFeatureServiceItem=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),m.Z.getLogger(this.declaredClass).warn("Associated feature service item could not be loaded",e.t0);case 10:case"end":return e.stop()}}),e,this,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}]),r}((0,ge.Vt)((0,fe.Y)((0,ve.q)((0,he.I)((0,be.M)((0,Z.R)((0,ce.V)(I.Z))))))));(0,c._)([(0,S.Cb)({type:["BuildingSceneLayer"]})],at.prototype,"operationalLayerType",void 0),(0,c._)([(0,S.Cb)({readOnly:!0})],at.prototype,"allSublayers",void 0),(0,c._)([(0,S.Cb)(ot)],at.prototype,"sublayers",void 0),(0,c._)([(0,j.r)("service","sublayers")],at.prototype,"readSublayers",null),(0,c._)([(0,S.Cb)({type:nt,nonNullable:!0,json:{write:!0}})],at.prototype,"filters",void 0),(0,c._)([(0,S.Cb)({type:String,json:{write:!0}})],at.prototype,"activeFilterId",void 0),(0,c._)([(0,S.Cb)({readOnly:!0,type:rt})],at.prototype,"summaryStatistics",void 0),(0,c._)([(0,j.r)("summaryStatistics",["statisticsHRef"])],at.prototype,"readSummaryStatistics",null),(0,c._)([(0,S.Cb)({type:[String],json:{read:!1}})],at.prototype,"outFields",void 0),(0,c._)([(0,S.Cb)(U.vg)],at.prototype,"fullExtent",void 0),(0,c._)([(0,S.Cb)({type:["show","hide","hide-children"]})],at.prototype,"listMode",void 0),(0,c._)([(0,S.Cb)((0,U.Lx)(O.Z))],at.prototype,"spatialReference",void 0),(0,c._)([(0,S.Cb)(U.PV)],at.prototype,"elevationInfo",null),(0,c._)([(0,S.Cb)({json:{read:!1},readOnly:!0})],at.prototype,"type",void 0),(0,c._)([(0,S.Cb)()],at.prototype,"associatedFeatureServiceItem",void 0);var st=at=(0,c._)([(0,x.j)("esri.layers.BuildingSceneLayer")],at)}}]);
//# sourceMappingURL=6505.885ddb0e.chunk.js.map