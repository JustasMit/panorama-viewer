"use strict";(self.webpackChunkpanorama_viewer=self.webpackChunkpanorama_viewer||[]).push([[6761],{11873:function(e,t,n){function r(){return[1,0,0,0,1,0,0,0,1]}function i(e,t,n,r,i,o,u,a,c){return[e,t,n,r,i,o,u,a,c]}function o(e,t){return new Float64Array(e,t,9)}n.d(t,{a:function(){return o},c:function(){return r},f:function(){return i}});Object.freeze(Object.defineProperty({__proto__:null,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},create:r,createView:o,fromValues:i},Symbol.toStringTag,{value:"Module"}))},81949:function(e,t,n){function r(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function i(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function o(e,t){return new Float64Array(e,t,16)}n.d(t,{I:function(){return u},a:function(){return o},b:function(){return i},c:function(){return r}});var u=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:u,clone:i,create:r,createView:o,fromValues:function(e,t,n,r,i,o,u,a,c,f,s,l,h,d,m,v){return[e,t,n,r,i,o,u,a,c,f,s,l,h,d,m,v]}},Symbol.toStringTag,{value:"Module"}))},98131:function(e,t,n){function r(){return[0,0,0,1]}function i(e){return[e[0],e[1],e[2],e[3]]}function o(e,t){return new Float64Array(e,t,4)}n.d(t,{I:function(){return u},a:function(){return r},b:function(){return i},c:function(){return o}});var u=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:u,clone:i,create:r,createView:o,fromValues:function(e,t,n,r){return[e,t,n,r]}},Symbol.toStringTag,{value:"Module"}))},71417:function(e,t,n){n.d(t,{a:function(){return p},c:function(){return v},g:function(){return g},h:function(){return y},j:function(){return w},m:function(){return T}});n(93169);var r,i=n(32718),o=n(16889),u=n(92026),a=n(14226),c=n(11186),f=n(71353),s=n(90045),l=n(67077);!function(e){e[e.X=0]="X",e[e.Y=1]="Y",e[e.Z=2]="Z"}(r||(r={}));var h=n(40885),d=n(40927),m=n(11185);function v(){return(0,l.c)()}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v();return(0,s.c)(t,e)}function p(e){return e[3]}function g(e){return e}function b(e,t,n){if((0,u.Wi)(t))return!1;var r=t.origin,i=t.direction,o=_;o[0]=r[0]-e[0],o[1]=r[1]-e[1],o[2]=r[2]-e[2];var a=i[0]*i[0]+i[1]*i[1]+i[2]*i[2];if(0===a)return!1;var c=2*(i[0]*o[0]+i[1]*o[1]+i[2]*o[2]),f=c*c-4*a*(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-e[3]*e[3]);if(f<0)return!1;var s=Math.sqrt(f),l=(-c-s)/(2*a),h=(-c+s)/(2*a);return(l<0||h<l&&h>0)&&(l=h),!(l<0)&&(n&&(n[0]=r[0]+i[0]*l,n[1]=r[1]+i[1]*l,n[2]=r[2]+i[2]*l),!0)}var _=(0,f.c)();function w(e,t){return b(e,t,null)}function M(e,t,n){var r=m.WM.get(),i=m.MP.get();(0,c.f)(r,t.origin,t.direction);var o=p(e);(0,c.f)(n,r,t.origin),(0,c.g)(n,n,1/(0,c.l)(n)*o);var u=P(e,t.origin),f=(0,d.EU)(t.origin,n);return(0,a.d)(i,f+u,r),(0,c.m)(n,n,i),n}function E(e,t,n){var r=(0,c.b)(m.WM.get(),t,e),i=(0,c.g)(m.WM.get(),r,e[3]/(0,c.l)(r));return(0,c.a)(n,i,e)}function P(e,t){var n=(0,c.b)(m.WM.get(),t,e),r=(0,c.l)(n),i=p(e),u=i+Math.abs(i-r);return(0,o.ZF)(i/u)}var S=(0,f.c)();function A(e,t,n,i){var u=(0,c.b)(S,t,e);switch(n){case r.X:var a=(0,o.jE)(u,S)[2];return(0,c.s)(i,-Math.sin(a),Math.cos(a),0);case r.Y:var f=(0,o.jE)(u,S),s=f[1],l=f[2],h=Math.sin(s);return(0,c.s)(i,-h*Math.cos(l),-h*Math.sin(l),Math.cos(s));case r.Z:return(0,c.n)(i,u);default:return}}function I(e,t){var n=(0,c.b)(k,t,e);return(0,c.l)(n)-e[3]}function T(e,t){var n=(0,c.d)(e,t),r=p(e);return n<=r*r}var k=(0,f.c)(),x=v();Object.freeze(Object.defineProperty({__proto__:null,altitudeAt:I,angleToSilhouette:P,axisAt:A,clear:function(e){e[0]=e[1]=e[2]=e[3]=0},closestPoint:function(e,t,n){return b(e,t,n)?n:((0,h.JI)(t,e,n),E(e,n,n))},closestPointOnSilhouette:M,containsPoint:T,copy:y,create:v,distanceToSilhouette:function(e,t){var n=(0,c.b)(m.WM.get(),t,e),r=(0,c.p)(n),i=e[3]*e[3];return Math.sqrt(Math.abs(r-i))},elevate:function(e,t,n){return e!==n&&(0,c.c)(n,e),n[3]=e[3]+t,n},fromCenterAndRadius:function(e,t){return(0,l.f)(e[0],e[1],e[2],t)},fromRadius:function(e,t){return e[0]=e[1]=e[2]=0,e[3]=t,e},fromValues:function(e,t,n,r){return(0,l.f)(e,t,n,r)},getCenter:g,getRadius:p,intersectRay:b,intersectRayClosestSilhouette:function(e,t,n){if(b(e,t,n))return n;var r=M(e,t,m.WM.get());return(0,c.a)(n,t.origin,(0,c.g)(m.WM.get(),t.direction,(0,c.i)(t.origin,r)/(0,c.l)(t.direction))),n},intersectsRay:w,projectPoint:E,setAltitudeAt:function(e,t,n,i){var o=I(e,t),u=A(e,t,r.Z,k),a=(0,c.g)(k,u,n-o);return(0,c.a)(i,t,a)},setExtent:function(e,t,n){return i.Z.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),e===n?n:y(e,n)},tmpSphere:x,wrap:function(e){return e}},Symbol.toStringTag,{value:"Module"}))},21530:function(e,t,n){n.d(t,{x:function(){return u}});var r=n(15671),i=n(43144),o=n(70758),u=function(){function e(t){(0,r.Z)(this,e),this._allocator=t,this._items=[],this._itemsPtr=0,this._grow()}return(0,i.Z)(e,[{key:"get",value:function(){var e=this;return 0===this._itemsPtr&&(0,o.Y)((function(){return e._reset()})),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}},{key:"_reset",value:function(){var e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*a);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}},{key:"_grow",value:function(){for(var e=0;e<Math.max(8,Math.min(this._items.length,a));e++)this._items.push(this._allocator())}}]),e}(),a=1024},40885:function(e,t,n){n.d(t,{JI:function(){return f},Ue:function(){return u},re:function(){return c}});n(63780);var r=n(21530),i=n(11186),o=n(71353);n(11185);function u(e){return e?a((0,o.a)(e.origin),(0,o.a)(e.direction)):a((0,o.c)(),(0,o.c)())}function a(e,t){return{origin:e,direction:t}}function c(e,t){var n=s.get();return n.origin=e,n.direction=t,n}function f(e,t,n){var r=(0,i.e)(e.direction,(0,i.b)(n,t,e.origin));return(0,i.a)(n,e.origin,(0,i.g)(n,e.direction,r)),n}var s=new r.x((function(){return u()}))},40927:function(e,t,n){n.d(t,{EU:function(){return u}});var r=n(16889),i=n(11186),o=n(71353);function u(e,t){var n=(0,i.e)(e,t)/((0,i.l)(e)*(0,i.l)(t));return-(0,r.ZF)(n)}(0,o.c)(),(0,o.c)()},11185:function(e,t,n){n.d(t,{MP:function(){return y},WM:function(){return v}});var r=n(15671),i=n(43144),o=n(59896),u=n(70758),a=n(11873),c=n(81949),f=n(98131),s=n(6394),l=n(71353),h=n(67077),d=function(){function e(t,n,i){(0,r.Z)(this,e),this._itemByteSize=t,this._itemCreate=n,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(i/this._itemByteSize)}return(0,i.Z)(e,[{key:"get",value:function(){var e=this;0===this._itemsPtr&&(0,u.Y)((function(){return e._reset()}));for(var t=Math.floor(this._itemsPtr/this._itemsPerBuffer);this._buffers.length<=t;){for(var n=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize),r=0;r<this._itemsPerBuffer;++r)this._items.push(this._itemCreate(n,r*this._itemByteSize));this._buffers.push(n)}return this._items[this._itemsPtr++]}},{key:"_reset",value:function(){for(var e=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);this._buffers.length>e;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}},{key:"test",get:function(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}}],[{key:"createVec2f64",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;return new e(16,s.c,t)}},{key:"createVec3f64",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;return new e(24,l.b,t)}},{key:"createVec4f64",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;return new e(32,h.a,t)}},{key:"createMat3f64",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;return new e(72,a.a,t)}},{key:"createMat4f64",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;return new e(128,c.a,t)}},{key:"createQuatf64",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;return new e(32,f.c,t)}}]),e}(),m=4*o.Y8.KILOBYTES,v=(d.createVec2f64(),d.createVec3f64()),y=(d.createVec4f64(),d.createMat3f64(),d.createMat4f64());d.createQuatf64()},6761:function(e,t,n){n.r(t),n.d(t,{destroyContext:function(){return T},dracoDecompressPointCloudData:function(){return _},filterObbsForModifications:function(){return M},filterObbsForModificationsSync:function(){return U},initialize:function(){return R},interpretObbModificationResults:function(){return L},process:function(){return g},setLegacySchema:function(){return A},setModifications:function(){return P},setModificationsSync:function(){return k},test:function(){return F}});var r,i,o=n(74165),u=n(15861),a=n(92026);!function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"}(r||(r={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(i||(i={}));var c,f=n(65905);function s(e){return(0,f.V)("esri/libs/i3s/".concat(e))}var l,h,d,m,v;n(71417);!function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"}(l||(l={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(h||(h={}));!function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"}(d||(d={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(m||(m={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(v||(v={}));var y,p;function g(e){return b.apply(this,arguments)}function b(){return b=(0,u.Z)((0,o.Z)().mark((function e(t){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:return n=[t.geometryBuffer],e.abrupt("return",{result:x(t,n),transferList:n});case 4:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}function _(e){return w.apply(this,arguments)}function w(){return w=(0,u.Z)((0,o.Z)().mark((function e(t){var n,r,i,u,a,c,f,s,l;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:if(r=[t.geometryBuffer],i=t.geometryBuffer,u=i.byteLength,a=p._malloc(u),(c=new Uint8Array(p.HEAPU8.buffer,a,u)).set(new Uint8Array(i)),f=p.dracoDecompressPointCloudData(a,c.byteLength),p._free(a),!(f.error.length>0)){e.next=7;break}throw new Error("i3s.wasm: ".concat(f.error));case 7:return s=(null===(n=f.featureIds)||void 0===n?void 0:n.length)>0?f.featureIds.slice():null,l=f.positions.slice(),e.abrupt("return",(s&&r.push(s.buffer),r.push(l.buffer),{result:{positions:l,featureIds:s},transferList:r}));case 9:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}function M(e){return E.apply(this,arguments)}function E(){return E=(0,u.Z)((0,o.Z)().mark((function e(t){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:return U(t),n={buffer:t.buffer},e.abrupt("return",{result:n,transferList:[n.buffer]});case 5:case"end":return e.stop()}}),e)}))),E.apply(this,arguments)}function P(e){return S.apply(this,arguments)}function S(){return(S=(0,u.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:k(t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return I.apply(this,arguments)}function I(){return(I=(0,u.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:p.setLegacySchema(t.context,t.jsonSchema);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){B(e)}function k(e){for(var t=e.modifications,n=p._malloc(8*t.length),r=new Float64Array(p.HEAPU8.buffer,n,t.length),i=0;i<t.length;++i)r[i]=t[i];p.setModifications(e.context,n,t.length,e.isGeodetic),p._free(n)}function x(e,t){if(!p)return null;var n=e.context,i=e.localOrigin,o=e.globalTrafo,u=e.mbs,c=e.obb,f=e.elevationOffset,s=e.geometryBuffer,l=e.geometryDescriptor,h=e.indexToVertexProjector,d=e.vertexToRenderProjector,m=p._malloc(s.byteLength),v=p._malloc(33*Float64Array.BYTES_PER_ELEMENT),y=new Uint8Array(p.HEAPU8.buffer,m,s.byteLength);y.set(new Uint8Array(s));var g=new Float64Array(p.HEAPU8.buffer,v,33);C(g,i);var b=g.byteOffset+3*g.BYTES_PER_ELEMENT,_=new Float64Array(g.buffer,b);C(_,o),b+=16*g.BYTES_PER_ELEMENT,C(_=new Float64Array(g.buffer,b),u),b+=4*g.BYTES_PER_ELEMENT,(0,a.pC)(c)&&(C(_=new Float64Array(g.buffer,b),c.center),b+=3*g.BYTES_PER_ELEMENT,C(_=new Float64Array(g.buffer,b),c.halfSize),b+=3*g.BYTES_PER_ELEMENT,C(_=new Float64Array(g.buffer,b),c.quaternion));var w=l,M={isDraco:!1,isLegacy:!1,color:e.layouts.some((function(e){return e.some((function(e){return"color"===e.name}))})),normal:e.needNormals&&e.layouts.some((function(e){return e.some((function(e){return"normalCompressed"===e.name}))})),uv0:e.layouts.some((function(e){return e.some((function(e){return"uv0"===e.name}))})),uvRegion:e.layouts.some((function(e){return e.some((function(e){return"uvRegion"===e.name}))})),featureIndex:w.featureIndex},E=p.process(n,!!e.obb,m,y.byteLength,w,M,v,f,h,d,e.normalReferenceFrame);if(p._free(v),p._free(m),E.error.length>0)throw new Error("i3s.wasm: ".concat(E.error));if(E.discarded)return null;var P=E.componentOffsets.length>0?E.componentOffsets.slice():null,S=E.featureIds.length>0?E.featureIds.slice():null,A=E.interleavedVertedData.slice().buffer,I=E.indicesType===r.Int16?new Uint16Array(E.indices.buffer,E.indices.byteOffset,E.indices.byteLength/2).slice():new Uint32Array(E.indices.buffer,E.indices.byteOffset,E.indices.byteLength/4).slice(),T=E.positions.slice(),k=E.positionIndicesType===r.Int16?new Uint16Array(E.positionIndices.buffer,E.positionIndices.byteOffset,E.positionIndices.byteLength/2).slice():new Uint32Array(E.positionIndices.buffer,E.positionIndices.byteOffset,E.positionIndices.byteLength/4).slice(),x={layout:e.layouts[0],interleavedVertexData:A,indices:I,hasColors:E.hasColors,hasModifications:E.hasModifications,positionData:{data:T,indices:k}};return S&&t.push(S.buffer),P&&t.push(P.buffer),t.push(A),t.push(I.buffer),t.push(T.buffer),t.push(k.buffer),{componentOffsets:P,featureIds:S,transformedGeometry:x,obb:E.obb}}function L(e){return 0===e?h.Unmodified:1===e?h.PotentiallyModified:2===e?h.Culled:h.Unknown}function U(e){var t=e.context,n=e.buffer,r=p._malloc(n.byteLength),i=n.byteLength/Float64Array.BYTES_PER_ELEMENT,o=new Float64Array(p.HEAPU8.buffer,r,i),u=new Float64Array(n);o.set(u),p.filterOBBs(t,r,i),u.set(o),p._free(r)}function B(e){p&&p.destroy(e)}function C(e,t){for(var n=0;n<t.length;++n)e[n]=t[n]}function R(){return p?Promise.resolve():(y||(y=(c||(c=new Promise((function(e){return n.e(7552).then(n.bind(n,57552)).then((function(e){return e.i})).then((function(t){var n=(0,t.default)({locateFile:s,onRuntimeInitialized:function(){return e(n)}});delete n.then}))})).catch((function(e){throw e}))),c).then((function(e){p=e,y=null}))),y)}var F={transform:x,destroy:B}}}]);
//# sourceMappingURL=6761.95902c6f.chunk.js.map