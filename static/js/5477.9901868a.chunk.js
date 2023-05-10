"use strict";(self.webpackChunkpanorama_viewer=self.webpackChunkpanorama_viewer||[]).push([[5477],{95477:function(e,t,n){n.r(t),n.d(t,{toBinaryGLTF:function(){return J}});var r,i=n(15671),a=n(43144),s=n(35995),_=n(66978),E=n(585);!function(e){e[e.JSON=1313821514]="JSON",e[e.BIN=5130562]="BIN"}(r||(r={}));var o=function(){function e(t,n){if((0,i.Z)(this,e),!t)throw new Error("GLB requires a JSON gltf chunk");this._length=e.HEADER_SIZE,this._length+=e.CHUNK_HEADER_SIZE;var a=this._textToArrayBuffer(t);if(this._length+=this._alignTo(a.byteLength,4),n&&(this._length+=e.CHUNK_HEADER_SIZE,this._length+=n.byteLength,n.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this._length),this._outView=new DataView(this.buffer),this._writeHeader();var s=this._writeChunk(a,12,r.JSON,32);n&&this._writeChunk(n,s,r.BIN)}return(0,a.Z)(e,[{key:"_writeHeader",value:function(){this._outView.setUint32(0,e.MAGIC,!0),this._outView.setUint32(4,e.VERSION,!0),this._outView.setUint32(8,this._length,!0)}},{key:"_writeChunk",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=this._alignTo(e.byteLength,4);for(this._outView.setUint32(t,i,!0),this._outView.setUint32(t+=4,n,!0),this._writeArrayBuffer(this._outView.buffer,e,t+=4,0,e.byteLength),t+=e.byteLength;t%4;)r&&this._outView.setUint8(t,r),t++;return t}},{key:"_writeArrayBuffer",value:function(e,t,n,r,i){new Uint8Array(e,n,i).set(new Uint8Array(t,r,i),0)}},{key:"_textToArrayBuffer",value:function(e){return(new TextEncoder).encode(e).buffer}},{key:"_alignTo",value:function(e,t){return t*Math.ceil(e/t)}}]),e}();o.HEADER_SIZE=12,o.CHUNK_HEADER_SIZE=8,o.MAGIC=1179937895,o.VERSION=2;var u,T,f,R,A,c,N,h,l=n(37762),O=n(32718),C=n(77427),S=n(92026),I=n(48976),d=n(98131),L=n(11186),M=n(71353),p=n(11587),D=n(76046),B=n(57898);(h=u||(u={}))[h.External=0]="External",h[h.DataURI=1]="DataURI",h[h.GLB=2]="GLB",function(e){e[e.External=0]="External",e[e.DataURI=1]="DataURI",e[e.GLB=2]="GLB"}(T||(T={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(f||(f={})),function(e){e.SCALAR="SCALAR",e.VEC2="VEC2",e.VEC3="VEC3",e.VEC4="VEC4",e.MAT2="MAT2",e.MAT3="MAT3",e.MAT4="MAT4"}(R||(R={})),function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(A||(A={})),function(e){e.OPAQUE="OPAQUE",e.MASK="MASK",e.BLEND="BLEND"}(c||(c={})),function(e){e[e.NoColor=0]="NoColor",e[e.FaceColor=1]="FaceColor",e[e.VertexColor=2]="VertexColor"}(N||(N={}));var U=n(8548),g=function(){function e(t,n,r,a,s){(0,i.Z)(this,e),this._buffer=t,this._componentType=r,this._dataType=a,this._data=[],this._isFinalized=!1,this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,n.bufferViews||(n.bufferViews=[]),this.index=n.bufferViews.length,this._bufferView={buffer:t.index,byteLength:-1,target:s};var _=this._getElementSize();_>=4&&s!==f.ELEMENT_ARRAY_BUFFER&&(this._bufferView.byteStride=_),n.bufferViews.push(this._bufferView),this._numComponentsForDataType=this._calculateNumComponentsForDataType()}return(0,a.Z)(e,[{key:"push",value:function(e){var t=this._data.length;if(this._data.push(e),this._accessorIndex>=0){var n=t%this._numComponentsForDataType,r=this._accessorMin[n];this._accessorMin[n]="number"!=typeof r?e:Math.min(r,e);var i=this._accessorMax[n];this._accessorMax[n]="number"!=typeof i?e:Math.max(i,e)}}},{key:"dataSize",get:function(){return this._data.length*this._sizeComponentType()}},{key:"byteSize",get:function(){return function(e,t){return t*Math.ceil(e/t)}(this.dataSize,4)}},{key:"getByteOffset",value:function(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}},{key:"byteOffset",get:function(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}},{key:"_createTypedArray",value:function(e,t){switch(this._componentType){case U.g.BYTE:return new Int8Array(e,t);case U.g.FLOAT:return new Float32Array(e,t);case U.g.SHORT:return new Int16Array(e,t);case U.g.UNSIGNED_BYTE:return new Uint8Array(e,t);case U.g.UNSIGNED_INT:return new Uint32Array(e,t);case U.g.UNSIGNED_SHORT:return new Uint16Array(e,t)}}},{key:"writeOutToBuffer",value:function(e,t){this._createTypedArray(e,t).set(this._data)}},{key:"writeAsync",value:function(e){var t=this;if(this._asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this._asyncWritePromise=e.then((function(e){for(var n=new Uint8Array(e),r=0;r<n.length;++r)t._data.push(n[r]);delete t._asyncWritePromise})),this._asyncWritePromise}},{key:"startAccessor",value:function(e){if(this._accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this._accessorIndex=this._data.length,this._accessorAttribute=e;var t=this._numComponentsForDataType;this._accessorMin=new Array(t),this._accessorMax=new Array(t)}},{key:"endAccessor",value:function(){if(this._accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");var e=this._getElementSize(),t=this._numComponentsForDataType,n=(this._data.length-this._accessorIndex)/t;if(n%1)throw new Error("An accessor was ended with missing component values");for(var r=0;r<this._accessorMin.length;++r)"number"!=typeof this._accessorMin[r]&&(this._accessorMin[r]=0),"number"!=typeof this._accessorMax[r]&&(this._accessorMax[r]=0);var i={byteOffset:e*(this._accessorIndex/t),componentType:this._componentType,count:n,type:this._dataType,min:this._accessorMin,max:this._accessorMax,name:this._accessorAttribute};switch(this._accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this._componentType){case U.g.UNSIGNED_BYTE:case U.g.UNSIGNED_SHORT:i.normalized=!0}}return this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,i}},{key:"finalized",get:function(){var e=this;return this._finalizedPromise?this._finalizedPromise:this._isFinalized?this._finalizedPromise=Promise.resolve():this._finalizedPromise=new Promise((function(t){return e._finalizedPromiseResolve=t}))}},{key:"finalize",value:function(){var e=this,t=this._bufferView;return new Promise((function(t){var n=e._buffer.getViewFinalizePromises(e);e._asyncWritePromise&&n.push(e._asyncWritePromise),t((0,_.as)(n))})).then((function(){e._isFinalized=!0,t.byteOffset=e.getByteOffset(),t.byteLength=e.dataSize,e._finalizedPromiseResolve&&e._finalizedPromiseResolve()}))}},{key:"_getElementSize",value:function(){return this._sizeComponentType()*this._numComponentsForDataType}},{key:"_sizeComponentType",value:function(){switch(this._componentType){case U.g.BYTE:case U.g.UNSIGNED_BYTE:return 1;case U.g.SHORT:case U.g.UNSIGNED_SHORT:return 2;case U.g.UNSIGNED_INT:case U.g.FLOAT:return 4}}},{key:"_calculateNumComponentsForDataType",value:function(){switch(this._dataType){case R.SCALAR:return 1;case R.VEC2:return 2;case R.VEC3:return 3;case R.VEC4:case R.MAT2:return 4;case R.MAT3:return 9;case R.MAT4:return 16}}}]),e}(),P=function(){function e(t){(0,i.Z)(this,e),this._gltf=t,this._bufferViews=[],this._isFinalized=!1,t.buffers||(t.buffers=[]),this.index=t.buffers.length;var n={byteLength:-1};t.buffers.push(n),this._buffer=n}return(0,a.Z)(e,[{key:"addBufferView",value:function(e,t,n){if(this._finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");var r=new g(this,this._gltf,e,t,n);return this._bufferViews.push(r),r}},{key:"getByteOffset",value:function(e){var t,n=0,r=(0,l.Z)(this._bufferViews);try{for(r.s();!(t=r.n()).done;){var i=t.value;if(i===e)return n;n+=i.byteSize}}catch(a){r.e(a)}finally{r.f()}throw new Error("Given bufferView was not present in this buffer")}},{key:"getViewFinalizePromises",value:function(e){var t,n=[],r=(0,l.Z)(this._bufferViews);try{for(r.s();!(t=r.n()).done;){var i=t.value;if(e&&i===e)return n;n.push(i.finalized)}}catch(a){r.e(a)}finally{r.f()}return n}},{key:"getArrayBuffer",value:function(){if(!this._isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");var e,t=this._getTotalSize(),n=new ArrayBuffer(t),r=0,i=(0,l.Z)(this._bufferViews);try{for(i.s();!(e=i.n()).done;){var a=e.value;a.writeOutToBuffer(n,r),r+=a.byteSize}}catch(s){i.e(s)}finally{i.f()}return n}},{key:"finalize",value:function(){var e,t=this;if(this._finalizePromise)throw new Error("Buffer ".concat(this.index," was already finalized"));return this._finalizePromise=new Promise((function(e){e((0,_.as)(t.getViewFinalizePromises()))})).then((function(){t._isFinalized=!0;var e=t.getArrayBuffer();t._buffer.byteLength=e.byteLength,t._buffer.uri=e})),null!==(e=this._gltf.extras)&&void 0!==e&&e.promises.push(this._finalizePromise),this._finalizePromise}},{key:"_getTotalSize",value:function(){var e,t=0,n=(0,l.Z)(this._bufferViews);try{for(n.s();!(e=n.n()).done;){t+=e.value.byteSize}}catch(r){n.e(r)}finally{n.f()}return t}}]),e}();function G(e,t){if(e.components){var n,r=(0,l.Z)(e.components);try{for(r.s();!(n=r.n()).done;){var i=n.value;i.faces&&"smooth"===i.shading&&m(i,t)}}catch(a){r.e(a)}finally{r.f()}}}function m(e,t){(0,S.Wi)(t.normal)&&(t.normal=new Float32Array(t.position.length));for(var n=e.faces,r=t.position,i=t.normal,a=n.length/3,s=0;s<a;++s){var _=3*n[3*s+0],E=3*n[3*s+1],o=3*n[3*s+2],u=(0,L.s)(F,r[_+0],r[_+1],r[_+2]),T=(0,L.s)(v,r[E+0],r[E+1],r[E+2]),f=(0,L.s)(y,r[o+0],r[o+1],r[o+2]),R=(0,L.b)(T,T,u),A=(0,L.b)(f,f,u),c=(0,L.f)(R,R,A);i[_+0]+=c[0],i[_+1]+=c[1],i[_+2]+=c[2],i[E+0]+=c[0],i[E+1]+=c[1],i[E+2]+=c[2],i[o+0]+=c[0],i[o+1]+=c[1],i[o+2]+=c[2]}for(var N=0;N<i.length;N+=3)(0,L.s)(w,i[N],i[N+1],i[N+2]),(0,L.n)(w,w),i[N+0]=w[0],i[N+1]=w[1],i[N+2]=w[2]}var F=(0,M.c)(),v=(0,M.c)(),y=(0,M.c)(),w=(0,M.c)(),b=n(91958),x=n(57661),H=O.Z.getLogger("gltf"),V=function(){function e(t,n,r){(0,i.Z)(this,e),this.params={},this._materialMap=new Array,this._imageMap=new Map,this._textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:t.copyright,generator:t.generator},extras:{options:n,binChunkBuffer:null,promises:[]}},r&&(this.params=r),this._addScenes(t)}return(0,a.Z)(e,[{key:"_addScenes",value:function(e){var t=this;this.gltf.scene=e.defaultScene;var n=this.gltf.extras,r=n.options.bufferOutputType===u.GLB||n.options.imageOutputType===T.GLB;r&&(n.binChunkBuffer=new P(this.gltf)),e.forEachScene((function(e){t._addScene(e)})),r&&n.binChunkBuffer.finalize()}},{key:"_addScene",value:function(e){var t=this;this.gltf.scenes||(this.gltf.scenes=[]);var n={};e.name&&(n.name=e.name),e.forEachNode((function(e){n.nodes||(n.nodes=[]);var r=t._addNode(e);n.nodes.push(r)})),this.gltf.scenes.push(n)}},{key:"_addNode",value:function(e){var t=this;this.gltf.nodes||(this.gltf.nodes=[]);var n={};e.name&&(n.name=e.name);var r=e.translation;(0,L.k)(r,M.Z)||(n.translation=(0,M.a)(r));var i=e.rotation;(0,I.j)(i,d.I)||(n.rotation=(0,d.b)(i));var a=e.scale;(0,L.k)(a,M.O)||(n.scale=(0,M.a)(a)),e.mesh&&e.mesh.vertexAttributes.position?n.mesh=this._addMesh(e.mesh):e.forEachNode((function(e){n.children||(n.children=[]);var r=t._addNode(e);n.children.push(r)}));var s=this.gltf.nodes.length;return this.gltf.nodes.push(n),s}},{key:"_addMesh",value:function(e){this.gltf.meshes||(this.gltf.meshes=[]);var t,n={primitives:[]},r=this.gltf.extras,i=r.options.bufferOutputType===u.GLB;t=i?r.binChunkBuffer:new P(this.gltf),this.params.origin||(this.params.origin=function(e){if((0,S.pC)(e.transform))return e.transform.getOriginPoint(e.spatialReference);var t=e.extent.xmax-e.extent.width/2,n=e.extent.ymax-e.extent.height/2,r=e.extent.zmin;return new E.Z({x:t,y:n,z:r,spatialReference:e.extent.spatialReference})}(e));var a=this.params.ignoreLocalTransform?(0,S.yw)(e.transform,(function(e){return new D.Z({origin:[e.origin[0],e.origin[1],e.origin[2]],geographic:!1})})):e.transform,s=(0,B.Yq)(e.vertexAttributes,a,this.params.origin,{geographic:this.params.geographic,unit:"meters"});G(e,s),this._flipYZAxis(s);var _,o,T,A,c=t.addBufferView(U.g.FLOAT,R.VEC3,f.ARRAY_BUFFER);s.normal&&(_=t.addBufferView(U.g.FLOAT,R.VEC3,f.ARRAY_BUFFER)),e.vertexAttributes.uv&&(o=t.addBufferView(U.g.FLOAT,R.VEC2,f.ARRAY_BUFFER)),s.tangent&&(T=t.addBufferView(U.g.FLOAT,R.VEC4,f.ARRAY_BUFFER)),e.vertexAttributes.color&&(A=t.addBufferView(U.g.UNSIGNED_BYTE,R.VEC4,f.ARRAY_BUFFER)),c.startAccessor("POSITION"),_&&_.startAccessor("NORMAL"),o&&o.startAccessor("TEXCOORD_0"),T&&T.startAccessor("TANGENT"),A&&A.startAccessor("COLOR_0");for(var N=s.position.length/3,h=s.position,l=s.normal,O=s.tangent,C=e.vertexAttributes,I=C.color,d=C.uv,L=0;L<N;++L)c.push(h[3*L+0]),c.push(h[3*L+1]),c.push(h[3*L+2]),_&&(0,S.pC)(l)&&(_.push(l[3*L+0]),_.push(l[3*L+1]),_.push(l[3*L+2])),o&&(0,S.pC)(d)&&(o.push(d[2*L+0]),o.push(d[2*L+1])),T&&(0,S.pC)(O)&&(T.push(O[4*L+0]),T.push(O[4*L+1]),T.push(O[4*L+2]),T.push(O[4*L+3])),A&&(0,S.pC)(I)&&(A.push(I[4*L+0]),A.push(I[4*L+1]),A.push(I[4*L+2]),A.push(I[4*L+3]));var M,p,g,m,F,v=c.endAccessor(),y=this._addAccessor(c.index,v);if(_){var w=_.endAccessor();M=this._addAccessor(_.index,w)}if(o){var b=o.endAccessor();p=this._addAccessor(o.index,b)}if(T){var x=T.endAccessor();g=this._addAccessor(T.index,x)}if(A){var H=A.endAccessor();m=this._addAccessor(A.index,H)}e.components&&e.components.length>0&&e.components[0].faces?(F=t.addBufferView(U.g.UNSIGNED_INT,R.SCALAR,f.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(F,e.components,n,y,M,p,g,m)):this._addMeshVertexNonIndexed(e.components,n,y,M,p,g,m),c.finalize(),_&&_.finalize(),o&&o.finalize(),T&&T.finalize(),F&&F.finalize(),A&&A.finalize(),i||t.finalize();var V=this.gltf.meshes.length;return this.gltf.meshes.push(n),V}},{key:"_flipYZAxis",value:function(e){var t=e.position,n=e.normal,r=e.tangent;this._flipYZBuffer(t,3),this._flipYZBuffer(n,3),this._flipYZBuffer(r,4)}},{key:"_flipYZBuffer",value:function(e,t){if(!(0,S.Wi)(e))for(var n=1,r=2;n<e.length;n+=t,r+=t){var i=e[n],a=e[r];e[n]=a,e[r]=-i}}},{key:"_addMaterial",value:function(e){if(null!==e){var t=this._materialMap.indexOf(e);if(-1!==t)return t;this.gltf.materials||(this.gltf.materials=[]);var n={};switch(e.alphaMode){case"mask":n.alphaMode=c.MASK;break;case"auto":case"blend":n.alphaMode=c.BLEND}.5!==e.alphaCutoff&&(n.alphaCutoff=e.alphaCutoff),e.doubleSided&&(n.doubleSided=e.doubleSided),n.pbrMetallicRoughness={};var r=function(e){return Math.pow(e,2.1)},i=function(e){var t=e.toRgba();return t[0]=r(t[0]/255),t[1]=r(t[1]/255),t[2]=r(t[2]/255),t};if((0,S.pC)(e.color)&&(n.pbrMetallicRoughness.baseColorFactor=i(e.color)),(0,S.pC)(e.colorTexture)&&(n.pbrMetallicRoughness.baseColorTexture={index:this._addTexture(e.colorTexture)}),(0,S.pC)(e.normalTexture)&&(n.normalTexture={index:this._addTexture(e.normalTexture)}),e instanceof p.Z){if((0,S.pC)(e.emissiveTexture)&&(n.emissiveTexture={index:this._addTexture(e.emissiveTexture)}),(0,S.pC)(e.emissiveColor)){var a=i(e.emissiveColor);n.emissiveFactor=[a[0],a[1],a[2]]}(0,S.pC)(e.occlusionTexture)&&(n.occlusionTexture={index:this._addTexture(e.occlusionTexture)}),(0,S.pC)(e.metallicRoughnessTexture)&&(n.pbrMetallicRoughness.metallicRoughnessTexture={index:this._addTexture(e.metallicRoughnessTexture)}),n.pbrMetallicRoughness.metallicFactor=e.metallic,n.pbrMetallicRoughness.roughnessFactor=e.roughness}else n.pbrMetallicRoughness.metallicFactor=1,n.pbrMetallicRoughness.roughnessFactor=1,H.warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");var s=this.gltf.materials.length;return this.gltf.materials.push(n),this._materialMap.push(e),s}}},{key:"_addTexture",value:function(e){var t,n=this,r=null!==(t=this.gltf.textures)&&void 0!==t?t:[];return this.gltf.textures=r,(0,C.s1)(this._textureMap,e,(function(){var t={sampler:n._addSampler(e),source:n._addImage(e)},i=r.length;return r.push(t),i}))}},{key:"_addImage",value:function(e){var t=this._imageMap.get(e);if(null!=t)return t;this.gltf.images||(this.gltf.images=[]);var n={};if(e.url)n.uri=e.url;else{var r=e.data;n.extras=r;for(var i=0;i<this.gltf.images.length;++i)if(r===this.gltf.images[i].extras)return i;var a=this.gltf.extras;switch(a.options.imageOutputType){case T.GLB:var s=a.binChunkBuffer.addBufferView(U.g.UNSIGNED_BYTE,R.SCALAR);if((0,x.$A)(r))(0,S.pC)(r.data)&&s.writeOutToBuffer(r.data,0);else{var _=(0,b.lW)(r).then((function(e){var t=e.data,r=e.type;return n.mimeType=r,t}));s.writeAsync(_).then((function(){s.finalize()}))}n.bufferView=s.index;break;case T.DataURI:if((0,x.$A)(r)){H.warnOnce("Image export for basis compressed textures not available.");break}n.uri=(0,b.$e)(r);break;default:if((0,x.$A)(r)){H.warnOnce("Image export for basis compressed textures not available.");break}a.promises.push((0,b.lW)(r).then((function(e){var t=e.data,r=e.type;n.uri=t,n.mimeType=r})))}}var E=this.gltf.images.length;return this.gltf.images.push(n),this._imageMap.set(e,E),E}},{key:"_addSampler",value:function(e){this.gltf.samplers||(this.gltf.samplers=[]);var t=U.e8.REPEAT,n=U.e8.REPEAT;if("string"==typeof e.wrap)switch(e.wrap){case"clamp":t=U.e8.CLAMP_TO_EDGE,n=U.e8.CLAMP_TO_EDGE;break;case"mirror":t=U.e8.MIRRORED_REPEAT,n=U.e8.MIRRORED_REPEAT}else{switch(e.wrap.vertical){case"clamp":n=U.e8.CLAMP_TO_EDGE;break;case"mirror":n=U.e8.MIRRORED_REPEAT}switch(e.wrap.horizontal){case"clamp":t=U.e8.CLAMP_TO_EDGE;break;case"mirror":t=U.e8.MIRRORED_REPEAT}}for(var r={wrapS:t,wrapT:n},i=0;i<this.gltf.samplers.length;++i)if(JSON.stringify(r)===JSON.stringify(this.gltf.samplers[i]))return i;var a=this.gltf.samplers.length;return this.gltf.samplers.push(r),a}},{key:"_addAccessor",value:function(e,t){this.gltf.accessors||(this.gltf.accessors=[]);var n={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(n.normalized=!0);var r=this.gltf.accessors.length;return this.gltf.accessors.push(n),r}},{key:"_addMeshVertexIndexed",value:function(e,t,n,r,i,a,s,_){var E,o=(0,l.Z)(t);try{for(o.s();!(E=o.n()).done;){var u=E.value;e.startAccessor("INDICES");for(var T=0;T<u.faces.length;++T)e.push(u.faces[T]);var f=e.endAccessor(),R={attributes:{POSITION:r},indices:this._addAccessor(e.index,f),material:this._addMaterial(u.material)};i&&"flat"!==u.shading&&(R.attributes.NORMAL=i),a&&(R.attributes.TEXCOORD_0=a),s&&"flat"!==u.shading&&(R.attributes.TANGENT=s),_&&(R.attributes.COLOR_0=_),n.primitives.push(R)}}catch(A){o.e(A)}finally{o.f()}}},{key:"_addMeshVertexNonIndexed",value:function(e,t,n,r,i,a,s){var _={attributes:{POSITION:n}};r&&(_.attributes.NORMAL=r),i&&(_.attributes.TEXCOORD_0=i),a&&(_.attributes.TANGENT=a),s&&(_.attributes.COLOR_0=s),e&&(_.material=this._addMaterial(e[0].material)),t.primitives.push(_)}}]),e}(),k=n(63780),Y=function(){function e(){(0,i.Z)(this,e),this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}return(0,a.Z)(e,[{key:"addScene",value:function(e){if(this._scenes.includes(e))throw new Error("Scene already added");this._scenes.push(e)}},{key:"removeScene",value:function(e){(0,k.Od)(this._scenes,e)}},{key:"forEachScene",value:function(e){this._scenes.forEach(e)}}]),e}(),z=function(){function e(t){(0,i.Z)(this,e),this.mesh=t,this.name="",this.translation=(0,M.c)(),this.rotation=(0,d.a)(),this.scale=(0,M.a)(M.O),this._nodes=[]}return(0,a.Z)(e,[{key:"addNode",value:function(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}},{key:"forEachNode",value:function(e){this._nodes.forEach(e)}},{key:"rotationAngles",set:function(e){(0,I.k)(this.rotation,e[0],e[1],e[2])}}]),e}(),Z="model.gltf",X="model.glb";function W(e,t){return function(e,t,n){var r,i,a=new V(e,t=t||{},n),s=a.params;s?s.origin||(s.origin=new E.Z({x:-1,y:-1,z:-1})):s={origin:new E.Z({x:-1,y:-1,z:-1})};var f=s.origin,R=a.gltf,A=null!==(r=null===(i=R.extras)||void 0===i?void 0:i.promises)&&void 0!==r?r:[],c=1,N=1,h=null;return(0,_.as)(A).then((function(){var e={origin:f};delete R.extras;var n="number"==typeof t.jsonSpacing?t.jsonSpacing:4,r=JSON.stringify(R,(function(n,r){if("extras"!==n){if(r instanceof ArrayBuffer){if((0,b.$7)(r))switch(t.imageOutputType){case T.DataURI:case T.GLB:break;case T.External:default:var i="img".concat(N,".png");return N++,e[i]=r,i}switch(t.bufferOutputType){case u.DataURI:return(0,b.N5)(r);case u.GLB:if(h)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(h=r);case u.External:default:var a="data".concat(c,".bin");return c++,e[a]=r,a}}return r}}),n);return t.bufferOutputType===u.GLB||t.imageOutputType===T.GLB?e[X]=new o(r,h).buffer:e[Z]=r,e}))}(e,{bufferOutputType:u.GLB,imageOutputType:T.GLB,jsonSpacing:0},t)}var K=function(){function e(){(0,i.Z)(this,e),this.name="",this._nodes=[]}return(0,a.Z)(e,[{key:"addNode",value:function(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}},{key:"forEachNode",value:function(e){this._nodes.forEach(e)}}]),e}(),j=function(){function e(t,n){(0,i.Z)(this,e),this._file={type:"model/gltf-binary",data:t},this.origin=n}return(0,a.Z)(e,[{key:"buffer",value:function(){return Promise.resolve(this._file)}},{key:"download",value:function(e){(0,s.io)(new Blob([this._file.data],{type:this._file.type}),e)}}]),e}();function J(e,t){var n=new Y,r=new K;return n.addScene(r),r.addNode(new z(e)),W(n,t).then((function(e){return new j(e[X],e.origin)}))}},91958:function(e,t,n){n.d(t,{$7:function(){return c},$e:function(){return E},E0:function(){return R},N5:function(){return A},lW:function(){return o}});var r=n(74165),i=n(15861),a=(n(93169),n(10064)),s=n(92026),_=n(35995);function E(e){var t=R(e);return(0,s.pC)(t)?t.toDataURL():""}function o(e){return u.apply(this,arguments)}function u(){return u=(0,i.Z)((0,r.Z)().mark((function e(t){var n,i,_;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=R(t),!(0,s.Wi)(n)){e.next=3;break}throw new a.Z("imageToArrayBuffer","Unsupported image type");case 3:return e.next=5,T(t);case 5:return i=e.sent,e.next=8,new Promise((function(e){return n.toBlob(e,i)}));case 8:if(_=e.sent){e.next=11;break}throw new a.Z("imageToArrayBuffer","Failed to encode image");case 11:return e.next=13,_.arrayBuffer();case 13:return e.t0=e.sent,e.t1=i,e.abrupt("return",{data:e.t0,type:e.t1});case 16:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function T(e){return f.apply(this,arguments)}function f(){return(f=(0,i.Z)((0,r.Z)().mark((function e(t){var n,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t instanceof HTMLImageElement){e.next=2;break}return e.abrupt("return","image/png");case 2:if(n=t.src,!(0,_.HK)(n)){e.next=6;break}return i=(0,_.sJ)(n),e.abrupt("return","image/jpeg"===(null===i||void 0===i?void 0:i.mediaType)?i.mediaType:"image/png");case 6:return e.abrupt("return",/\.png$/i.test(n)?"image/png":/\.(jpg|jpeg)$/i.test(n)?"image/jpeg":"image/png");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;var t=document.createElement("canvas");t.width=e.width,t.height=e.height;var n=t.getContext("2d");return e instanceof HTMLImageElement?n.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&n.putImageData(e,0,0),t}function A(e){for(var t=[],n=new Uint8Array(e),r=0;r<n.length;r++)t.push(String.fromCharCode(n[r]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}function c(e){if(e.byteLength<8)return!1;var t=new Uint8Array(e);return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}},57661:function(e,t,n){n.d(t,{$A:function(){return o},Ml:function(){return f},NM:function(){return E},i$:function(){return u}});var r=n(74165),i=n(15861),a=n(43144),s=n(15671),_=n(68401),E=(0,a.Z)((function e(t){(0,s.Z)(this,e),this.data=t,this.type="encoded-mesh-texture",this.encoding=_.Ti.KTX2_ENCODING}));function o(e){return"encoded-mesh-texture"===(null===e||void 0===e?void 0:e.type)}function u(e){return T.apply(this,arguments)}function T(){return T=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var r=new Blob([t]),i=new FileReader;i.onload=function(){var t=i.result;e(JSON.parse(t))},i.onerror=function(e){n(e)},i.readAsText(r)})));case 1:case"end":return e.stop()}}),e)}))),T.apply(this,arguments)}function f(e,t){return R.apply(this,arguments)}function R(){return R=(0,i.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n===_.Ti.KTX2_ENCODING?new E(t):new Promise((function(e,r){var i=new Blob([t],{type:n}),a=URL.createObjectURL(i),s=new Image,_=function(){URL.revokeObjectURL(a),"decode"in s?s.decode().then((function(){return e(s)}),(function(){return e(s)})).then(o):(e(s),o())},E=function(e){URL.revokeObjectURL(a),r(e),o()},o=function(){s.removeEventListener("load",_),s.removeEventListener("error",E)};s.addEventListener("load",_),s.addEventListener("error",E),s.src=a})));case 1:case"end":return e.stop()}}),e)}))),R.apply(this,arguments)}},68401:function(e,t,n){var r,i,a,s,_,E,o,u,T,f,R;n.d(t,{CE:function(){return o},Gv:function(){return i},JJ:function(){return T},Rw:function(){return s},Ti:function(){return R},V_:function(){return E},Vr:function(){return r},hU:function(){return _}}),function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(r||(r={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(i||(i={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(a||(a={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(s||(s={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(_||(_={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee",e[e.COUNT=2]="COUNT"}(E||(E={})),function(e){e[e.STRETCH=1]="STRETCH",e[e.PAD=2]="PAD"}(o||(o={})),function(e){e[e.CHANGED=0]="CHANGED",e[e.UNCHANGED=1]="UNCHANGED"}(u||(u={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(T||(T={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(f||(f={})),function(e){e.DDS_ENCODING="image/vnd-ms.dds",e.KTX2_ENCODING="image/ktx2",e.BASIS_ENCODING="image/x.basis"}(R||(R={}))},8548:function(e,t,n){var r,i,a,s,_,E,o,u,T,f,R,A,c,N,h,l,O,C,S,I,d,L;n.d(t,{Br:function(){return l},Ho:function(){return S},LR:function(){return E},Ld:function(){return D},Lm:function(){return d},Lu:function(){return v},MX:function(){return i},No:function(){return c},OU:function(){return L},Se:function(){return U},Tg:function(){return O},V7:function(){return m},VI:function(){return N},VY:function(){return p},Wf:function(){return o},Y5:function(){return G},_g:function(){return M},cw:function(){return R},db:function(){return s},e8:function(){return A},g:function(){return u},l1:function(){return C},lP:function(){return h},lk:function(){return r},q_:function(){return B},qi:function(){return I},w0:function(){return _},wb:function(){return T},xS:function(){return f},zi:function(){return a}}),function(e){e[e.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",e[e.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",e[e.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(r||(r={})),function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(i||(i={})),function(e){e[e.ZERO=0]="ZERO",e[e.ONE=1]="ONE",e[e.SRC_COLOR=768]="SRC_COLOR",e[e.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",e[e.SRC_ALPHA=770]="SRC_ALPHA",e[e.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",e[e.DST_ALPHA=772]="DST_ALPHA",e[e.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",e[e.DST_COLOR=774]="DST_COLOR",e[e.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",e[e.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",e[e.CONSTANT_COLOR=32769]="CONSTANT_COLOR",e[e.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",e[e.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",e[e.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(a||(a={})),function(e){e[e.ADD=32774]="ADD",e[e.SUBTRACT=32778]="SUBTRACT",e[e.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(s||(s={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",e[e.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",e[e.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",e[e.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",e[e.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",e[e.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER"}(_||(_={})),function(e){e[e.FRONT=1028]="FRONT",e[e.BACK=1029]="BACK",e[e.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(E||(E={})),function(e){e[e.CW=2304]="CW",e[e.CCW=2305]="CCW"}(o||(o={})),function(e){e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.INT=5124]="INT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.FLOAT=5126]="FLOAT"}(u||(u={})),function(e){e[e.NEVER=512]="NEVER",e[e.LESS=513]="LESS",e[e.EQUAL=514]="EQUAL",e[e.LEQUAL=515]="LEQUAL",e[e.GREATER=516]="GREATER",e[e.NOTEQUAL=517]="NOTEQUAL",e[e.GEQUAL=518]="GEQUAL",e[e.ALWAYS=519]="ALWAYS"}(T||(T={})),function(e){e[e.ZERO=0]="ZERO",e[e.KEEP=7680]="KEEP",e[e.REPLACE=7681]="REPLACE",e[e.INCR=7682]="INCR",e[e.DECR=7683]="DECR",e[e.INVERT=5386]="INVERT",e[e.INCR_WRAP=34055]="INCR_WRAP",e[e.DECR_WRAP=34056]="DECR_WRAP"}(f||(f={})),function(e){e[e.NEAREST=9728]="NEAREST",e[e.LINEAR=9729]="LINEAR",e[e.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",e[e.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",e[e.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",e[e.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(R||(R={})),function(e){e[e.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",e[e.REPEAT=10497]="REPEAT",e[e.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(A||(A={})),function(e){e[e.TEXTURE_2D=3553]="TEXTURE_2D",e[e.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",e[e.TEXTURE_3D=32879]="TEXTURE_3D",e[e.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",e[e.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",e[e.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",e[e.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",e[e.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(c||(c={})),function(e){e[e.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL",e[e.ALPHA=6406]="ALPHA",e[e.RGB=6407]="RGB",e[e.RGBA=6408]="RGBA",e[e.LUMINANCE=6409]="LUMINANCE",e[e.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",e[e.RED=6403]="RED",e[e.RG=33319]="RG",e[e.RED_INTEGER=36244]="RED_INTEGER",e[e.RG_INTEGER=33320]="RG_INTEGER",e[e.RGB_INTEGER=36248]="RGB_INTEGER",e[e.RGBA_INTEGER=36249]="RGBA_INTEGER"}(N||(N={})),function(e){e[e.RGBA4=32854]="RGBA4",e[e.R16F=33325]="R16F",e[e.RG16F=33327]="RG16F",e[e.RGB32F=34837]="RGB32F",e[e.RGBA16F=34842]="RGBA16F",e[e.R32F=33326]="R32F",e[e.RG32F=33328]="RG32F",e[e.RGBA32F=34836]="RGBA32F",e[e.R11F_G11F_B10F=35898]="R11F_G11F_B10F",e[e.RGB8=32849]="RGB8",e[e.RGBA8=32856]="RGBA8",e[e.RGB5_A1=32855]="RGB5_A1",e[e.R8=33321]="R8",e[e.RG8=33323]="RG8",e[e.R8I=33329]="R8I",e[e.R8UI=33330]="R8UI",e[e.R16I=33331]="R16I",e[e.R16UI=33332]="R16UI",e[e.R32I=33333]="R32I",e[e.R32UI=33334]="R32UI",e[e.RG8I=33335]="RG8I",e[e.RG8UI=33336]="RG8UI",e[e.RG16I=33337]="RG16I",e[e.RG16UI=33338]="RG16UI",e[e.RG32I=33339]="RG32I",e[e.RG32UI=33340]="RG32UI",e[e.RGB16F=34843]="RGB16F",e[e.RGB9_E5=35901]="RGB9_E5",e[e.SRGB8=35905]="SRGB8",e[e.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",e[e.RGB565=36194]="RGB565",e[e.RGBA32UI=36208]="RGBA32UI",e[e.RGB32UI=36209]="RGB32UI",e[e.RGBA16UI=36214]="RGBA16UI",e[e.RGB16UI=36215]="RGB16UI",e[e.RGBA8UI=36220]="RGBA8UI",e[e.RGB8UI=36221]="RGB8UI",e[e.RGBA32I=36226]="RGBA32I",e[e.RGB32I=36227]="RGB32I",e[e.RGBA16I=36232]="RGBA16I",e[e.RGB16I=36233]="RGB16I",e[e.RGBA8I=36238]="RGBA8I",e[e.RGB8I=36239]="RGB8I",e[e.R8_SNORM=36756]="R8_SNORM",e[e.RG8_SNORM=36757]="RG8_SNORM",e[e.RGB8_SNORM=36758]="RGB8_SNORM",e[e.RGBA8_SNORM=36759]="RGBA8_SNORM",e[e.RGB10_A2=32857]="RGB10_A2",e[e.RGB10_A2UI=36975]="RGB10_A2UI"}(h||(h={})),function(e){e[e.FLOAT=5126]="FLOAT",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",e[e.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",e[e.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",e[e.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.INT=5124]="INT",e[e.HALF_FLOAT=5131]="HALF_FLOAT",e[e.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",e[e.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",e[e.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",e[e.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(l||(l={})),function(e){e[e.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",e[e.STENCIL_INDEX8=36168]="STENCIL_INDEX8",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL",e[e.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",e[e.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",e[e.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",e[e.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(O||(O={})),function(e){e[e.STATIC_DRAW=35044]="STATIC_DRAW",e[e.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",e[e.STREAM_DRAW=35040]="STREAM_DRAW",e[e.STATIC_READ=35045]="STATIC_READ",e[e.DYNAMIC_READ=35049]="DYNAMIC_READ",e[e.STREAM_READ=35041]="STREAM_READ",e[e.STATIC_COPY=35046]="STATIC_COPY",e[e.DYNAMIC_COPY=35050]="DYNAMIC_COPY",e[e.STREAM_COPY=35042]="STREAM_COPY"}(C||(C={})),function(e){e[e.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",e[e.VERTEX_SHADER=35633]="VERTEX_SHADER"}(S||(S={})),function(e){e[e.FRAMEBUFFER=36160]="FRAMEBUFFER",e[e.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",e[e.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(I||(I={})),function(e){e[e.TEXTURE=0]="TEXTURE",e[e.RENDER_BUFFER=1]="RENDER_BUFFER",e[e.CUBEMAP=2]="CUBEMAP"}(d||(d={})),function(e){e[e.NONE=0]="NONE",e[e.DEPTH_RENDER_BUFFER=1]="DEPTH_RENDER_BUFFER",e[e.STENCIL_RENDER_BUFFER=2]="STENCIL_RENDER_BUFFER",e[e.DEPTH_STENCIL_RENDER_BUFFER=3]="DEPTH_STENCIL_RENDER_BUFFER",e[e.DEPTH_STENCIL_TEXTURE=4]="DEPTH_STENCIL_TEXTURE"}(L||(L={}));var M,p,D=33984;!function(e){e[e.Texture=0]="Texture",e[e.BufferObject=1]="BufferObject",e[e.VertexArrayObject=2]="VertexArrayObject",e[e.Shader=3]="Shader",e[e.Program=4]="Program",e[e.FramebufferObject=5]="FramebufferObject",e[e.Renderbuffer=6]="Renderbuffer",e[e.Sync=7]="Sync",e[e.COUNT=8]="COUNT"}(M||(M={})),function(e){e[e.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",e[e.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",e[e.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",e[e.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",e[e.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",e[e.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",e[e.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",e[e.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",e[e.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",e[e.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",e[e.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",e[e.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",e[e.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",e[e.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",e[e.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",e[e.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(p||(p={}));var B,U,g,P,G,m,F,v=33306;!function(e){e[e.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",e[e.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",e[e.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",e[e.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",e[e.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",e[e.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",e[e.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",e[e.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",e[e.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(B||(B={})),function(e){e[e.FLOAT=5126]="FLOAT",e[e.FLOAT_VEC2=35664]="FLOAT_VEC2",e[e.FLOAT_VEC3=35665]="FLOAT_VEC3",e[e.FLOAT_VEC4=35666]="FLOAT_VEC4",e[e.INT=5124]="INT",e[e.INT_VEC2=35667]="INT_VEC2",e[e.INT_VEC3=35668]="INT_VEC3",e[e.INT_VEC4=35669]="INT_VEC4",e[e.BOOL=35670]="BOOL",e[e.BOOL_VEC2=35671]="BOOL_VEC2",e[e.BOOL_VEC3=35672]="BOOL_VEC3",e[e.BOOL_VEC4=35673]="BOOL_VEC4",e[e.FLOAT_MAT2=35674]="FLOAT_MAT2",e[e.FLOAT_MAT3=35675]="FLOAT_MAT3",e[e.FLOAT_MAT4=35676]="FLOAT_MAT4",e[e.SAMPLER_2D=35678]="SAMPLER_2D",e[e.SAMPLER_CUBE=35680]="SAMPLER_CUBE",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",e[e.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",e[e.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",e[e.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",e[e.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",e[e.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",e[e.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",e[e.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",e[e.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",e[e.SAMPLER_3D=35679]="SAMPLER_3D",e[e.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",e[e.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",e[e.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",e[e.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",e[e.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",e[e.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",e[e.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",e[e.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",e[e.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",e[e.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",e[e.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",e[e.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(U||(U={})),function(e){e[e.OBJECT_TYPE=37138]="OBJECT_TYPE",e[e.SYNC_CONDITION=37139]="SYNC_CONDITION",e[e.SYNC_STATUS=37140]="SYNC_STATUS",e[e.SYNC_FLAGS=37141]="SYNC_FLAGS"}(g||(g={})),function(e){e[e.UNSIGNALED=37144]="UNSIGNALED",e[e.SIGNALED=37145]="SIGNALED"}(P||(P={})),function(e){e[e.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",e[e.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",e[e.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",e[e.WAIT_FAILED=37149]="WAIT_FAILED"}(G||(G={})),function(e){e[e.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(m||(m={})),function(e){e[e.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(F||(F={}))}}]);
//# sourceMappingURL=5477.9901868a.chunk.js.map