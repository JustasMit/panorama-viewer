"use strict";(self.webpackChunkpanorama_viewer=self.webpackChunkpanorama_viewer||[]).push([[483],{26885:function(t,e,i){i.d(e,{H:function(){return g}});var r=i(74165),n=i(15861),s=i(15671),u=i(43144),a=i(10064),o=i(93169),h=i(32718),d=i(92026),c=i(66978),_=i(94109),l=i(84328),f=i(84319),E=i(64668),x=i(8548),y=i(53634),k=i(51378),v=h.Z.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),p=(0,E.g)(E.J,v),R=function(){function t(e,i,r){(0,s.Z)(this,t),this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;var n=e.buffer,u=e.pixelType,a=e.textureOnly,o=(0,f.UK)(u);this.shared=r,this.pixelType=u,this.size=i,this.textureOnly=a,a||(this.data=new o((0,d.Wg)(n))),this._resetRange()}return(0,u.Z)(t,[{key:"destroy",value:function(){var t=this;(0,d.yw)(this._texture,(function(t){return t.dispose()}));var e=function(e){(0,d.yw)(t._fbos[e],(function(t){"0"===e&&t.detachColorTexture(),t.dispose()})),t._fbos[e]=null};for(var i in this._fbos)e(i);this._texture=null}},{key:"_textureDesc",get:function(){return{target:x.No.TEXTURE_2D,wrapMode:x.e8.CLAMP_TO_EDGE,pixelFormat:x.VI.RGBA,dataType:this.pixelType,samplingMode:x.cw.NEAREST,width:this.size,height:this.size}}},{key:"setData",value:function(t,e,i){var r=(0,l.jL)(t),n=(0,d.Wg)(this.data),s=r*this.texelSize+e;!n||s>=n.length||(n[s]=i,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r))}},{key:"getData",value:function(t,e){if((0,d.Wi)(this.data))return null;var i=(0,l.jL)(t)*this.texelSize+e;return!this.data||i>=this.data.length?null:this.data[i]}},{key:"getTexture",value:function(t){var e=this;return(0,d.Pt)(this._texture,(function(){return e._initTexture(t)}))}},{key:"getFBO",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if((0,d.Wi)(this._fbos[e])){var i={colorTarget:x.Lm.TEXTURE,depthStencilTarget:x.OU.NONE},r=0===e?this.getTexture(t):this._textureDesc;this._fbos[e]=new y.X(t,i,r)}return this._fbos[e]}},{key:"locked",get:function(){return!(this.pixelType!==x.Br.UNSIGNED_BYTE||!this.shared||this.textureOnly||!(0,o.Z)("esri-atomics")||!this.data)&&1===Atomics.load(this.data,0)}},{key:"hasDirty",get:function(){var t=this.dirtyStart;return this.dirtyEnd>=t}},{key:"updateTexture",value:function(t,e){if(!this.locked){try{var i=this.dirtyStart,r=this.dirtyEnd;if(!this.hasDirty)return;this._resetRange();var n=(0,d.Wg)(this.data).buffer,s=this.getTexture(t),u=(i-i%this.size)/this.size,o=(r-r%this.size)/this.size,h=u,c=this.size,_=o,l=u*this.size*4,E=4*(c+_*this.size)-l,x=(0,f.UK)(this.pixelType),y=new x(n,l*x.BYTES_PER_ELEMENT,E),k=this.size,p=_-h+1;if(p>this.size)return void v.error(new a.Z("mapview-webgl","Out-of-bounds index when updating AttributeData"));s.updateData(0,0,h,k,p,y)}catch(R){}e()}}},{key:"update",value:function(t){var e=t.data,i=t.start,r=t.end;if((0,d.pC)(e)&&(0,d.pC)(this.data))for(var n=this.data,s=i*this.texelSize,u=0;u<e.length;u++){var a=1<<u%this.texelSize;t.layout&a&&(n[s+u]=e[u])}this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,r)}},{key:"resize",value:function(t,e){var i=this.size;if(this.size=e,this.textureOnly)i!==this.size&&(this._lastTexture=this._texture,this._texture=null);else{var r=(0,f.UK)(this.pixelType);this.destroy(),this.data=new r((0,d.Wg)(t.buffer))}}},{key:"_resetRange",value:function(){this.dirtyStart=2147483647,this.dirtyEnd=0}},{key:"_initTexture",value:function(t){var e=new k.x(t,this._textureDesc,(0,d.Pt)(this.data,void 0));if((0,d.pC)(this._lastTexture)&&this._fbos[0]){var i=this._lastTexture.descriptor.width,r=this._lastTexture.descriptor.height,n=this._lastTexture.descriptor.dataType,s=this._lastTexture.descriptor.pixelFormat,u=this.getFBO(t),a=(0,f.Yw)(n),o=new((0,f.UK)(n))(new ArrayBuffer(i*r*a*this.texelSize)),h=t.getBoundFramebufferObject(),c=t.getViewport(),_=c.x,l=c.y,E=c.width,x=c.height;t.bindFramebuffer(u),u.readPixels(0,0,i,r,s,n,o),e.updateData(0,0,0,2*i,r/2,o),t.setViewport(_,l,E,x),t.bindFramebuffer(h)}return this.destroy(),this._texture=e,this._texture}}]),t}(),g=function(){function t(e){(0,s.Z)(this,t),this._onUpdate=e,this._initialized=!1,this._forceNextUpload=!1,this._locked=!1}return(0,u.Z)(t,[{key:"initialize",value:function(t){var e=t.blocks,i=t.shared,r=t.size;if(this.shared=i,this.size=r,p("Initializing AttributeStoreView",t),(0,d.Wi)(this._data))this._data=(0,d.Fd)(e,(function(t){return new R(t,r,i)}));else for(var n=0;n<this._data.length;n++){var s=this._data[n],u=e[n];(0,d.pC)(u)&&((0,d.Wi)(s)?this._data[n]=new R(u,r,i):s.resize(u,r))}this._initialized=!0}},{key:"destroy",value:function(){(0,d.yw)(this._data,(function(t){return(0,d.Fd)(t,(function(t){return t.destroy()}))})),(0,d.yw)(this._defaultTexture,(function(t){return t.dispose()}))}},{key:"isEmpty",value:function(){var t=this._data;return(0,d.Wi)(t)}},{key:"isUpdating",value:function(){var t=(0,d.pC)(this._pendingAttributeUpdate),e=t;return(0,o.Z)("esri-2d-log-updating")&&console.log("Updating AttributeStoreView ".concat(e,"\n  -> hasPendingUpdate ").concat(t)),e}},{key:"getBlock",value:function(t){return(0,d.Wi)(this._data)?null:this._data[t]}},{key:"setLabelMinZoom",value:function(t,e){this.setData(t,0,1,e)}},{key:"getLabelMinZoom",value:function(t){return this.getData(t,0,1,255)}},{key:"getFilterFlags",value:function(t){return this.getData(t,0,0,0)}},{key:"getVVSize",value:function(t){return this.getData(t,_.aK,0,0)}},{key:"getData",value:function(t,e,i,r){if(!this._data)return 0;var n=(0,d.Wg)(this._data)[e];if((0,d.Wi)(n))return 0;var s=n.getData(t,i);return(0,d.pC)(s)?s:r}},{key:"setData",value:function(t,e,i,r){var n=(0,d.Wg)(this._data)[e];(0,d.Wg)(n).setData(t,i,r)}},{key:"lockTextureUpload",value:function(){this._locked=!0}},{key:"unlockTextureUpload",value:function(){this._locked=!1}},{key:"forceTextureUpload",value:function(){this._forceNextUpload=!0}},{key:"requestUpdate",value:function(){var t=(0,n.Z)((0,r.Z)().mark((function t(e){var i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this._pendingAttributeUpdate){t.next=2;break}return t.abrupt("return",void v.error(new a.Z("mapview-webgl","Tried to update attribute data with a pending update")));case 2:return i=(0,c.hh)(),t.abrupt("return",(p("AttributeStoreView Update Requested",e),this._pendingAttributeUpdate={data:e,resolver:i},this._onUpdate(),i.promise));case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"update",value:function(){if(this._initialized&&(0,d.pC)(this._pendingAttributeUpdate)){(0,o.Z)("esri-2d-update-debug")&&console.debug("AttributeStoreView::update");for(var t=this._pendingAttributeUpdate,e=t.data,i=t.resolver,r=(0,d.Wg)(this._data),n=function(t){var i=e.blocks[t],n=r[t];(0,d.yw)(n,(function(e){return(0,d.yw)(i,(function(i){p("Updating block ".concat(t),i),e.update(i)}))}))},s=0;s<e.blocks.length;s++)n(s);this._pendingAttributeUpdate=null,i(),this._onUpdate()}}},{key:"bindTextures",value:function(t){var e=this,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=this._getDefaultTexture(t);if(!this._initialized)return t.bindTexture(r,_.iJ),void(i&&(t.bindTexture(r,_.nM),t.bindTexture(r,_.Ij),t.bindTexture(r,_.f2),t.bindTexture(r,_.By),t.bindTexture(r,_.mx),t.bindTexture(r,_.Xj)));var n=(0,d.Wg)(this._data);this._locked&&!this._forceNextUpload||((0,d.JR)(n,(function(i){return i.updateTexture(t,(function(){return e._onUpdate()}))})),this._forceNextUpload=!1),t.bindTexture((0,d.R2)(n[_._5],r,(function(e){return e.getTexture(t)})),_.iJ),i&&(t.bindTexture((0,d.R2)(n[_.pU],r,(function(e){return e.getTexture(t)})),_.Xj),t.bindTexture((0,d.R2)(n[_.xl],r,(function(e){return e.getTexture(t)})),_.nM),t.bindTexture((0,d.R2)(n[_.aK],r,(function(e){return e.getTexture(t)})),_.Ij),t.bindTexture((0,d.R2)(n[_.lK],r,(function(e){return e.getTexture(t)})),_.f2),t.bindTexture((0,d.R2)(n[_.By],r,(function(e){return e.getTexture(t)})),_.By),t.bindTexture((0,d.R2)(n[_.mx],r,(function(e){return e.getTexture(t)})),_.mx))}},{key:"_getDefaultTexture",value:function(t){if((0,d.Wi)(this._defaultTexture)){var e={wrapMode:x.e8.CLAMP_TO_EDGE,pixelFormat:x.VI.RGBA,dataType:x.Br.UNSIGNED_BYTE,samplingMode:x.cw.NEAREST,width:1,height:1};this._defaultTexture=new k.x(t,e,new Uint8Array(4))}return this._defaultTexture}}]),t}()},72900:function(t,e,i){i.d(e,{I:function(){return c}});var r=i(29439),n=i(15671),s=i(43144),u=i(60136),a=i(29388),o=i(22753),h=i(87422),d=i(73828),c=function(t){(0,u.Z)(i,t);var e=(0,a.Z)(i);function i(t,r,s,u,a,o){var h,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:a,_=arguments.length>7&&void 0!==arguments[7]?arguments[7]:o;return(0,n.Z)(this,i),(h=e.call(this)).triangleCountReportedInDebug=0,h.triangleCount=0,h.texture=null,h.key=new d.Z(t),h.resolution=r,h.x=s,h.y=u,h.width=a,h.height=o,h.rangeX=c,h.rangeY=_,h}return(0,s.Z)(i,[{key:"destroy",value:function(){this.texture&&(this.texture.dispose(),this.texture=null)}},{key:"setTransform",value:function(t){var e=this.resolution/(t.resolution*t.pixelRatio),i=this.transforms.tileMat3,n=t.toScreenNoRotation([0,0],[this.x,this.y]),s=(0,r.Z)(n,2),u=s[0],a=s[1],h=this.width/this.rangeX*e,d=this.height/this.rangeY*e;(0,o.s)(i,h,0,0,0,d,0,u,a,1),(0,o.m)(this.transforms.dvs,t.displayViewMat3,i)}}]),i}(h.s)},98774:function(t,e,i){i.d(e,{o:function(){return y}});var r=i(29439),n=i(11752),s=i(61120),u=i(60136),a=i(29388),o=i(15671),h=i(43144),d=i(22018),c=i(11245),_=i(22753),l=i(23588),f=i(94109),E=i(72900),x=function(){function t(){(0,o.Z)(this,t)}return(0,h.Z)(t,[{key:"acquire",value:function(t){return{refCount:1,version:-1,labelMat2d:(0,c.c)(),tileMat3:(0,l.c)(),dvs:(0,l.c)()}}},{key:"release",value:function(t){}}]),t}(),y=function(t){(0,u.Z)(i,t);var e=(0,a.Z)(i);function i(t,r,n,s){return(0,o.Z)(this,i),e.call(this,t,r,n,s,f.I_,f.I_)}return(0,h.Z)(i,[{key:"destroy",value:function(){(0,n.Z)((0,s.Z)(i.prototype),"destroy",this).call(this),this._transforms&&i.TransformCache.release(this.key.hash)}},{key:"setTransform",value:function(t){var e=this.resolution/t.resolution,i=this.transforms.tileMat3,n=t.toScreenNoRotation([0,0],[this.x,this.y]),s=(0,r.Z)(n,2),u=s[0],a=s[1],o=this.width/this.rangeX*e,h=this.height/this.rangeY*e;(0,_.s)(i,o,0,0,0,h,0,u,a,1),(0,_.m)(this.transforms.dvs,t.displayViewMat3,i);var l=this.transforms.labelMat2d,f=window.devicePixelRatio,E=(0,d.d)((0,c.c)(),o*f,0,0,h*f,u*f,a*f);(0,d.m)(l,t.viewMat2d,E)}},{key:"_createTransforms",value:function(){return i.TransformCache.acquire(this.key.hash)}}]),i}(E.I);y.TransformCache=new x},50477:function(t,e,i){i.d(e,{$:function(){return o}});var r=i(15671),n=i(43144),s=i(92026),u=i(94109),a=2147483647,o=function(){function t(e){(0,r.Z)(this,t),this._head=e,this._cursor=e}return(0,n.Z)(t,[{key:"size",value:function(){for(var t=this._cursor,e=0;t;)e+=t.size(),t=t._link;return e}},{key:"id",get:function(){return this._cursor.id},set:function(t){this._cursor.id=t}},{key:"materialKey",get:function(){return this._cursor.materialKey},set:function(t){this._cursor.materialKey=t}},{key:"insertAfter",get:function(){return this._cursor.insertAfter}},{key:"indexFrom",get:function(){return this._cursor.indexFrom},set:function(t){this._cursor.indexFrom=t}},{key:"indexCount",get:function(){return this._cursor.indexCount},set:function(t){this._cursor.indexCount=t}},{key:"vertexFrom",get:function(){return this._cursor.vertexFrom},set:function(t){this._cursor.vertexFrom=t}},{key:"vertexCount",get:function(){return this._cursor.vertexCount},set:function(t){this._cursor.vertexCount=t}},{key:"sortKey",get:function(){return this._cursor.sortKey},set:function(t){this._cursor.sortKey=t}},{key:"index",get:function(){return this._cursor._indexStart+this._cursor._index}},{key:"seekIndex",value:function(t){var e=t;for(this._cursor=this._head;this._cursor;){var i=this._cursor.size();if(e<i)return this._cursor._index=e,!0;e-=i,this._cursor=this._cursor._link}return!1}},{key:"forEach",value:function(t){for(var e=this.getCursor();e.next();)t(e)}},{key:"link",value:function(t){if(this._head){for(var e=this._head;e._link;)e=e._link;e._link=t._head,e._link._indexStart=e._indexStart+e.size()}else this._head=t._head}},{key:"getCursor",value:function(){return this.copy()}},{key:"lookup",value:function(t){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(t);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor}},{key:"copy",value:function(){var e,i=new t(null===(e=this._head)||void 0===e?void 0:e.copy());if(!i._head)return i;for(var r=i._head,n=i._head._link;n;)r._link=n.copy(),n=(r=n)._link;return i}},{key:"next",value:function(){return!!this._cursor&&(!!this._cursor.next()||!!this._cursor._link&&(this._cursor=this._cursor._link,this.next()))}},{key:"peekId",value:function(){var t;return null!==(t=this._cursor.peekId())&&void 0!==t?t:this._cursor._link.peekId()}},{key:"delete",value:function(t){for(var e=this._head,i=null;e;){if(e.delete(t))return e.isEmpty()&&((0,s.pC)(i)&&(i._link=e._link),e===this._head&&(this._head=e._link),e===this._cursor&&(this._cursor=e._link)),!0;i=e,e=e._link}return!1}}],[{key:"from",value:function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.byteLength/h.BYTES_PER_RECORD-i;return new t(new h(new Int32Array(e,i*h.BYTES_PER_RECORD,r*h.ELEMENTS_PER_RECORD)))}}]),t}();o.ELEMENTS_PER_RECORD=u.XJ,o.BYTES_PER_RECORD=o.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT;var h=function(){function t(e){(0,r.Z)(this,t),this._link=null,this._index=-1,this._indexStart=0,this._packedRecordsF32=null,this._deletedCount=0,this._offsets={instance:null},this._packedRecords=e}return(0,n.Z)(t,[{key:"delete",value:function(t){var e=this._index,i=this.lookup(t);if(i)for(this.id=a,++this._deletedCount;this.next()&&this.id===t;)this.id=a,++this._deletedCount;return this._index=e,i}},{key:"isEmpty",value:function(){return this._deletedCount===this.size()}},{key:"link",value:function(t){this._link?this._link.link(t):this._link=t}},{key:"lookup",value:function(t){if((0,s.Wi)(this._offsets.instance)){this._offsets.instance=new Map;var e=this.copy();e._index=-1;for(var i=0;e.next();)e.id!==i&&(this._offsets.instance.set(e.id,e._index),i=e.id)}if(!this._offsets.instance.has(t))return!1;var r=this._index;return this._index=this._offsets.instance.get(t),this.id!==a||(this._index=r,!1)}},{key:"id",get:function(){return this._packedRecords[this._index*t.ELEMENTS_PER_RECORD]},set:function(e){this._packedRecords[this._index*t.ELEMENTS_PER_RECORD]=e}},{key:"materialKey",get:function(){return this._packedRecords[this._index*t.ELEMENTS_PER_RECORD+1]},set:function(e){this._packedRecords[this._index*t.ELEMENTS_PER_RECORD+1]=e}},{key:"insertAfter",get:function(){return this._packedRecords[this._index*t.ELEMENTS_PER_RECORD+2]}},{key:"indexFrom",get:function(){return this._packedRecords[this._index*t.ELEMENTS_PER_RECORD+3]},set:function(e){this._packedRecords[this._index*t.ELEMENTS_PER_RECORD+3]=e}},{key:"indexCount",get:function(){return this._packedRecords[this._index*t.ELEMENTS_PER_RECORD+4]},set:function(e){this._packedRecords[this._index*t.ELEMENTS_PER_RECORD+4]=e}},{key:"vertexFrom",get:function(){return this._packedRecords[this._index*t.ELEMENTS_PER_RECORD+5]},set:function(e){this._packedRecords[this._index*t.ELEMENTS_PER_RECORD+5]=e}},{key:"vertexCount",get:function(){return this._packedRecords[this._index*t.ELEMENTS_PER_RECORD+6]},set:function(e){this._packedRecords[this._index*t.ELEMENTS_PER_RECORD+6]=e}},{key:"sortKey",get:function(){return this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*t.ELEMENTS_PER_RECORD+7]},set:function(e){this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*t.ELEMENTS_PER_RECORD+7]=e}},{key:"index",get:function(){return this._index}},{key:"size",value:function(){return this._packedRecords.length/t.ELEMENTS_PER_RECORD}},{key:"next",value:function(){for(;++this._index<this.size()&&this.id===a;);return this._index<this.size()}},{key:"peekId",value:function(){var e=(this._index+1)*t.ELEMENTS_PER_RECORD;return e>=this._packedRecords.length?0:this._packedRecords[e]}},{key:"getCursor",value:function(){return this.copy()}},{key:"copy",value:function(){var e=new t(this._packedRecords);return e._indexStart=this._indexStart,e._link=this._link,e._index=this._index,e._offsets=this._offsets,e._deletedCount=this._deletedCount,e}}],[{key:"from",value:function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.byteLength/this.BYTES_PER_RECORD-i;return new t(new Int32Array(e,i*this.BYTES_PER_RECORD,r*this.ELEMENTS_PER_RECORD))}}]),t}();h.ELEMENTS_PER_RECORD=u.XJ,h.BYTES_PER_RECORD=h.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT}}]);
//# sourceMappingURL=483.781dc9b4.chunk.js.map