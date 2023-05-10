"use strict";(self.webpackChunkpanorama_viewer=self.webpackChunkpanorama_viewer||[]).push([[9987],{99987:function(e,t,i){i.d(t,{y:function(){return I},r:function(){return Z}});var r=i(93433),n=i(74165),a=i(1413),s=i(15861),u=i(37762),l=i(15671),o=i(43144),c=i(92026),f=i(4954),d=i(94446),h=i(58971),p=i(92975),v=i(33392),m=i(71486),y=function(){function e(t,i,r){var n;(0,l.Z)(this,e),this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=null!==(n=t.returnDistinctValues)&&void 0!==n&&n,this.fieldsIndex=r,this.featureAdapter=i;var a=t.outFields;if(a&&!a.includes("*")){this.outFields=a;var s,o=0,c=(0,u.Z)(a);try{for(c.s();!(s=c.n()).done;){var f=s.value,d=(0,v.hr)(f),h=this.fieldsIndex.get(d),p=h?null:(0,v.Jc)(d,r),m=h?h.name:(0,v.nu)(f)||"FIELD_EXP_"+o++;this._fieldDataCache.set(f,{alias:m,clause:p})}}catch(y){c.e(y)}finally{c.f()}}}return(0,o.Z)(e,[{key:"countDistinctValues",value:function(e){var t=this;return this.returnDistinctValues?(e.forEach((function(e){return t.getAttributes(e)})),this._returnDistinctMap.size):e.length}},{key:"getAttributes",value:function(e){var t=this._processAttributesForOutFields(e);return this._processAttributesForDistinctValues(t)}},{key:"getFieldValue",value:function(e,t,i){var r,n,a=i?i.name:t,s=null;return this._fieldDataCache.has(a)?s=null===(r=this._fieldDataCache.get(a))||void 0===r?void 0:r.clause:i||(s=(0,v.Jc)(t,this.fieldsIndex),this._fieldDataCache.set(a,{alias:a,clause:s})),i?this.featureAdapter.getAttribute(e,a):null===(n=s)||void 0===n?void 0:n.calculateValue(e,this.featureAdapter)}},{key:"getDataValue",value:function(e,t){var i=t.normalizationType,r=t.normalizationTotal,n=t.field&&this.getFieldValue(e,t.field,this.fieldsIndex.get(t.field));if(t.field2&&(n="".concat((0,m.wk)(n)).concat(t.fieldDelimiter).concat((0,m.wk)(this.getFieldValue(e,t.field2,this.fieldsIndex.get(t.field2)))),t.field3&&(n="".concat(n).concat(t.fieldDelimiter).concat((0,m.wk)(this.getFieldValue(e,t.field3,this.fieldsIndex.get(t.field3)))))),i&&Number.isFinite(n)){var a="field"===i&&t.normalizationField?this.getFieldValue(e,t.normalizationField,this.fieldsIndex.get(t.normalizationField)):null;n=(0,m.fk)(n,i,a,r)}return n}},{key:"getExpressionValue",value:function(e,t,i,r){var n={attributes:this.featureAdapter.getAttributes(e),layer:{fields:this.fieldsIndex.fields}},a=r.createExecContext(n,i);return r.executeFunction(t,a)}},{key:"getExpressionValues",value:function(e,t,i,r){var n=this,a={fields:this.fieldsIndex.fields};return e.map((function(e){var s={attributes:n.featureAdapter.getAttributes(e),layer:a},u=r.createExecContext(s,i);return r.executeFunction(t,u)}))}},{key:"validateItem",value:function(e,t){var i,r,n;return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:(0,v.Jc)(t,this.fieldsIndex)}),null!==(i=null===(r=this._fieldDataCache.get(t))||void 0===r||null===(n=r.clause)||void 0===n?void 0:n.testFeature(e,this.featureAdapter))&&void 0!==i&&i}},{key:"validateItems",value:function(e,t){var i,r,n;return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:(0,v.Jc)(t,this.fieldsIndex)}),null!==(i=null===(r=this._fieldDataCache.get(t))||void 0===r||null===(n=r.clause)||void 0===n?void 0:n.testSet(e,this.featureAdapter))&&void 0!==i&&i}},{key:"_processAttributesForOutFields",value:function(e){var t=this.outFields;if(!t||!t.length)return this.featureAdapter.getAttributes(e);var i,r={},n=(0,u.Z)(t);try{for(n.s();!(i=n.n()).done;){var a=i.value,s=this._fieldDataCache.get(a),l=s.alias,o=s.clause;r[l]=o?o.calculateValue(e,this.featureAdapter):this.featureAdapter.getAttribute(e,l)}}catch(c){n.e(c)}finally{n.f()}return r}},{key:"_processAttributesForDistinctValues",value:function(e){if((0,c.Wi)(e)||!this.returnDistinctValues)return e;var t=this.outFields,i=[];if(t){var r,n=(0,u.Z)(t);try{for(n.s();!(r=n.n()).done;){var a=r.value,s=this._fieldDataCache.get(a).alias;i.push(e[s])}}catch(d){n.e(d)}finally{n.f()}}else for(var l in e)i.push(e[l]);var o="".concat((t||["*"]).join(","),"=").concat(i.join(",")),f=this._returnDistinctMap.get(o)||0;return this._returnDistinctMap.set(o,++f),f>1?null:e}}]),e}(),g=i(19995);function x(e,t,i){return{objectId:e,target:t,distance:i,type:"vertex"}}function b(e,t,i,r,n){return{objectId:e,target:t,distance:i,type:"edge",start:r,end:n,draped:arguments.length>5&&void 0!==arguments[5]&&arguments[5]}}var Z,F=i(31904),w=i(80031),_=i(819),I=function(){function e(t,i,r){(0,l.Z)(this,e),this.items=t,this.query=i,this.geometryType=r.geometryType,this.hasM=r.hasM,this.hasZ=r.hasZ,this.fieldsIndex=r.fieldsIndex,this.objectIdField=r.objectIdField,this.spatialReference=r.spatialReference,this.featureAdapter=r.featureAdapter}return(0,o.Z)(e,[{key:"size",get:function(){return this.items.length}},{key:"createQueryResponseForCount",value:function(){var e=new y(this.query,this.featureAdapter,this.fieldsIndex);if(!this.query.outStatistics)return e.countDistinctValues(this.items);var t=this.query,i=t.groupByFieldsForStatistics,r=t.having,n=t.outStatistics;if(!(null===i||void 0===i?void 0:i.length))return 1;var a,s=new Map,l=new Map,o=new Set,c=(0,u.Z)(n);try{for(c.s();!(a=c.n()).done;){var f=a.value,d="exceedslimit"!==f.statisticType?f.onStatisticField:void 0;if(!l.has(d)){var h,p=[],v=(0,u.Z)(i);try{for(v.s();!(h=v.n()).done;){var m=h.value,g=this._getAttributeValues(e,m,s);p.push(g)}}catch(I){v.e(I)}finally{v.f()}l.set(d,this._calculateUniqueValues(p,e.returnDistinctValues))}var x=l.get(d);for(var b in x){var Z=x[b],F=Z.data,w=Z.items,_=F.join(",");r&&!e.validateItems(w,r)||o.add(_)}}}catch(I){c.e(I)}finally{c.f()}return o.size}},{key:"createQueryResponse",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var t,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.query.outStatistics){e.next=11;break}if(!this.query.outStatistics.some((function(e){return"exceedslimit"===e.statisticType}))){e.next=5;break}e.t0=this._createExceedsLimitQueryResponse(this.query),e.next=8;break;case 5:return e.next=7,this._createStatisticsQueryResponse(this.query);case 7:e.t0=e.sent;case 8:t=e.t0,e.next=12;break;case 11:t=this._createFeatureQueryResponse(this.query);case 12:return this.query.returnQueryGeometry&&(i=this.query.geometry,(0,p.JY)(this.query.outSR)&&!(0,p.fS)(i.spatialReference,this.query.outSR)?t.queryGeometry=(0,F.S2)((0,a.Z)({spatialReference:this.query.outSR},(0,g.iV)(i,i.spatialReference,this.query.outSR))):t.queryGeometry=(0,F.S2)((0,a.Z)({spatialReference:this.query.outSR},i))),e.abrupt("return",t);case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"createSnappingResponse",value:function(e,t){var i,r=this.featureAdapter,n=k(this.hasZ,this.hasM),a=e.point,s=e.mode,l="number"==typeof e.distance?e.distance:e.distance.x,o="number"==typeof e.distance?e.distance:e.distance.y,f={candidates:[]},d="esriGeometryPolygon"===this.geometryType,h=this._getPointCreator(s,this.spatialReference,t),p=new V(null,0),v=new V(null,0),m={x:0,y:0,z:0},y=(0,u.Z)(this.items);try{for(y.s();!(i=y.n()).done;){var g=i.value,F=r.getGeometry(g);if(!(0,c.Wi)(F)){var w=F.coords,_=F.lengths;if(p.coords=w,v.coords=w,e.types&Z.EDGE)for(var I=0,T=0;T<_.length;T++)for(var D=_[T],A=0;A<D;A++,I+=n){var R=p;if(R.coordsIndex=I,A!==D-1){var z=v;z.coordsIndex=I+n;var C=m;S(m,a,R,z);var E=(a.x-C.x)/l,N=(a.y-C.y)/o,M=E*E+N*N;M<=1&&f.candidates.push(b(r.getObjectId(g),h(C),Math.sqrt(M),h(R),h(z)))}}if(e.types&Z.VERTEX)for(var G=d?w.length-n:w.length,q=0;q<G;q+=n){var P=p;P.coordsIndex=q;var O=(a.x-P.x)/l,j=(a.y-P.y)/o,Q=O*O+j*j;Q<=1&&f.candidates.push(x(r.getObjectId(g),h(P),Math.sqrt(Q)))}}}}catch(U){y.e(U)}finally{y.f()}return f.candidates.sort((function(e,t){return e.distance-t.distance})),f}},{key:"_getPointCreator",value:function(e,t,i){var r=(0,c.pC)(i)&&!(0,p.fS)(t,i)?function(e){return(0,g.iV)(e,t,i)}:function(e){return e},n=this.hasZ;return"3d"===e?n?function(e){var t=e.x,i=e.y,n=e.z;return r({x:t,y:i,z:n})}:function(e){var t=e.x,i=e.y;return r({x:t,y:i,z:0})}:function(e){var t=e.x,i=e.y;return r({x:t,y:i})}}},{key:"createSummaryStatisticsResponse",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var i,r,a,s,u,l,o,c,f,d,h,p,v,y;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.field,r=t.valueExpression,a=t.normalizationField,s=t.normalizationType,u=t.normalizationTotal,l=t.minValue,o=t.maxValue,c=t.scale,f=this.fieldsIndex.isDateField(i),e.next=11,this._getDataValues({field:i,valueExpression:r,normalizationField:a,normalizationType:s,normalizationTotal:u,scale:c});case 11:return d=e.sent,h=(0,m.S5)({normalizationType:s,normalizationField:a,minValue:l,maxValue:o}),p=this.fieldsIndex.get(i),v={value:.5,fieldType:null===p||void 0===p?void 0:p.type},y=(0,w.qN)(p)?(0,m.H0)({values:d,supportsNullCount:h,percentileParams:v}):(0,m.i5)({values:d,minValue:l,maxValue:o,useSampleStdDev:!s,supportsNullCount:h,percentileParams:v}),e.abrupt("return",(0,m.F_)(y,f));case 17:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"createUniqueValuesResponse",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var i,r,a,s,u,l,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.field,r=t.valueExpression,a=t.domains,s=t.returnAllCodedValues,u=t.scale,e.next=7,this._getDataValues({field:i,field2:t.field2,field3:t.field3,fieldDelimiter:t.fieldDelimiter,valueExpression:r,scale:u});case 7:return l=e.sent,o=(0,m.eT)(l),e.abrupt("return",(0,m.Qm)(o,a,s,t.fieldDelimiter));case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"createClassBreaksResponse",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var i,r,a,s,u,l,o,c,f,d,h,p,v;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.field,r=t.valueExpression,a=t.normalizationField,s=t.normalizationType,u=t.normalizationTotal,l=t.classificationMethod,o=t.standardDeviationInterval,c=t.minValue,f=t.maxValue,d=t.numClasses,h=t.scale,e.next=13,this._getDataValues({field:i,valueExpression:r,normalizationField:a,normalizationType:s,normalizationTotal:u,scale:h});case 13:return p=e.sent,v=(0,m.G2)(p,{field:i,normalizationField:a,normalizationType:s,normalizationTotal:u,classificationMethod:l,standardDeviationInterval:o,minValue:c,maxValue:f,numClasses:d}),e.abrupt("return",(0,m.DL)(v,l));case 16:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"createHistogramResponse",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var i,r,a,s,u,l,o,c,f,d,h,p;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.field,r=t.valueExpression,a=t.normalizationField,s=t.normalizationType,u=t.normalizationTotal,l=t.classificationMethod,o=t.standardDeviationInterval,c=t.minValue,f=t.maxValue,d=t.numBins,h=t.scale,e.next=13,this._getDataValues({field:i,valueExpression:r,normalizationField:a,normalizationType:s,normalizationTotal:u,scale:h});case 13:return p=e.sent,e.abrupt("return",(0,m.oF)(p,{field:i,normalizationField:a,normalizationType:s,normalizationTotal:u,classificationMethod:l,standardDeviationInterval:o,minValue:c,maxValue:f,numBins:d}));case 15:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_sortFeatures",value:function(e,t,i){var r=this;if(e.length>1&&t&&t.length){var n,a=(0,u.Z)(t.reverse());try{var s=function(){var t=n.value.split(" "),a=t[0],s=r.fieldsIndex.get(a),u=!!t[1]&&"desc"===t[1].toLowerCase(),l=(0,m.Lq)(null===s||void 0===s?void 0:s.type,u);e.sort((function(e,t){var r=i(e,a,s),n=i(t,a,s);return l(r,n)}))};for(a.s();!(n=a.n()).done;)s()}catch(l){a.e(l)}finally{a.f()}}}},{key:"_createFeatureQueryResponse",value:function(e){var t=this,i=this.items,n=this.geometryType,a=this.hasM,s=this.hasZ,u=this.objectIdField,l=this.spatialReference,o=e.outFields,c=e.outSR,f=e.quantizationParameters,d=e.resultRecordCount,p=e.resultOffset,v=e.returnZ,m=e.returnM,y=null!=d&&i.length>(p||0)+d,g=o&&(o.includes("*")?(0,r.Z)(this.fieldsIndex.fields):o.map((function(e){return t.fieldsIndex.get(e)})));return{exceededTransferLimit:y,features:this._createFeatures(e,i),fields:g,geometryType:n,hasM:a&&m,hasZ:s&&v,objectIdFieldName:u,spatialReference:(0,F.S2)(c||l),transform:f&&(0,h.vY)(f)||null}}},{key:"_createFeatures",value:function(e,t){var i=new y(e,this.featureAdapter,this.fieldsIndex),n=this.hasM,a=this.hasZ,s=e.orderByFields,l=e.quantizationParameters,o=e.returnGeometry,c=e.returnCentroid,f=e.maxAllowableOffset,d=e.resultOffset,p=e.resultRecordCount,v=e.returnZ,m=void 0!==v&&v,g=e.returnM,x=a&&m,b=n&&(void 0!==g&&g),Z=[],w=0,_=(0,r.Z)(t);if(this._sortFeatures(_,s,(function(e,t,r){return i.getFieldValue(e,t,r)})),o||c){var I,S=null!==(I=(0,h.vY)(l))&&void 0!==I?I:void 0;if(o&&!c){var k,V=(0,u.Z)(_);try{for(V.s();!(k=V.n()).done;){var T=k.value;Z[w++]={attributes:i.getAttributes(T),geometry:(0,F.Op)(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(T),f,S,x,b)}}}catch(j){V.e(j)}finally{V.f()}}else if(!o&&c){var D,A=(0,u.Z)(_);try{for(A.s();!(D=A.n()).done;){var R=D.value;Z[w++]={attributes:i.getAttributes(R),centroid:(0,F.EG)(this,this.featureAdapter.getCentroid(R,this),S)}}}catch(j){A.e(j)}finally{A.f()}}else{var z,C=(0,u.Z)(_);try{for(C.s();!(z=C.n()).done;){var E=z.value;Z[w++]={attributes:i.getAttributes(E),centroid:(0,F.EG)(this,this.featureAdapter.getCentroid(E,this),S),geometry:(0,F.Op)(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(E),f,S,x,b)}}}catch(j){C.e(j)}finally{C.f()}}}else{var N,M=(0,u.Z)(_);try{for(M.s();!(N=M.n()).done;){var G=N.value,q=i.getAttributes(G);q&&(Z[w++]={attributes:q})}}catch(j){M.e(j)}finally{M.f()}}var P=d||0;if(null!=p){var O=P+p;Z=Z.slice(P,Math.min(Z.length,O))}return Z}},{key:"_createExceedsLimitQueryResponse",value:function(e){var t,i,r=!1,n=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY,s=Number.POSITIVE_INFINITY,l=(0,u.Z)(null!==(t=e.outStatistics)&&void 0!==t?t:[]);try{for(l.s();!(i=l.n()).done;){var o=i.value;if("exceedslimit"===o.statisticType){n=null!=o.maxPointCount?o.maxPointCount:Number.POSITIVE_INFINITY,a=null!=o.maxRecordCount?o.maxRecordCount:Number.POSITIVE_INFINITY,s=null!=o.maxVertexCount?o.maxVertexCount:Number.POSITIVE_INFINITY;break}}}catch(h){l.e(h)}finally{l.f()}if("esriGeometryPoint"===this.geometryType)r=this.items.length>n;else if(this.items.length>a)r=!0;else{var f=k(this.hasZ,this.hasM),d=this.featureAdapter;r=this.items.reduce((function(e,t){var i=d.getGeometry(t);return e+((0,c.pC)(i)&&i.coords.length||0)}),0)/f>s}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(r)}}]}}},{key:"_createStatisticsQueryResponse",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var i,r,a,s,l,o,c,f,d,h,p,v,m,g,x,b,Z,F,w,_,I,S,k,V,T,D,A,R,z,C,E,N,M,G,q,P,O,j,Q=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i={attributes:{}},r=[],a=new Map,s=new Map,l=new Map,o=new Map,c=new y(t,this.featureAdapter,this.fieldsIndex),f=t.outStatistics,d=t.groupByFieldsForStatistics,h=t.having,p=t.orderByFields,v=d&&d.length,g=(m=!!v)?d[0]:null,x=m&&!this.fieldsIndex.get(g),b=(0,u.Z)(null!==f&&void 0!==f?f:[]),e.prev=2,b.s();case 4:if((Z=b.n()).done){e.next=34;break}if(F=Z.value,w=F.outStatisticFieldName,_=F.statisticType,I=F,S="exceedslimit"!==_?F.onStatisticField:void 0,k="percentile_disc"===_||"percentile_cont"===_,V="EnvelopeAggregate"===_||"CentroidAggregate"===_||"ConvexHullAggregate"===_,T=m&&1===v&&(S===g||x)&&"count"===_,!m){e.next=19;break}if(!l.has(S)){D=[],A=(0,u.Z)(d);try{for(A.s();!(R=A.n()).done;)z=R.value,C=this._getAttributeValues(c,z,a),D.push(C)}catch(U){A.e(U)}finally{A.f()}l.set(S,this._calculateUniqueValues(D,!V&&c.returnDistinctValues))}E=l.get(S),N=(0,n.Z)().mark((function e(){var t,i,r,s,u,l,f,p,v,m,y,g,x,b;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=E[M],i=t.count,r=t.data,s=t.items,u=t.itemPositions,l=r.join(","),h&&!c.validateItems(s,h)){e.next=18;break}if(f=o.get(l)||{attributes:{}},!V){e.next=13;break}return f.aggregateGeometries||(f.aggregateGeometries={}),e.next=7,Q._getAggregateGeometry(I,s);case 7:p=e.sent,v=p.aggregateGeometries,m=p.outStatisticFieldName,f.aggregateGeometries[m]=v,e.next=16;break;case 13:y=null,T?y=i:(g=Q._getAttributeValues(c,S,a),x=u.map((function(e){return g[e]})),y=k&&"statisticParameters"in I?Q._getPercentileValue(I,x):Q._getStatisticValue(I,x,null,c.returnDistinctValues)),f.attributes[w]=y;case 16:b=0,d.forEach((function(e,t){return f.attributes[Q.fieldsIndex.get(e)?e:"EXPR_"+ ++b]=r[t]})),o.set(l,f);case 18:case"end":return e.stop()}}),e)})),e.t0=(0,n.Z)().keys(E);case 12:if((e.t1=e.t0()).done){e.next=17;break}return M=e.t1.value,e.delegateYield(N(),"t2",15);case 15:e.next=12;break;case 17:e.next=31;break;case 19:if(!V){e.next=29;break}return i.aggregateGeometries||(i.aggregateGeometries={}),e.next=23,this._getAggregateGeometry(I,this.items);case 23:G=e.sent,q=G.aggregateGeometries,P=G.outStatisticFieldName,i.aggregateGeometries[P]=q,e.next=31;break;case 29:O=this._getAttributeValues(c,S,a),i.attributes[w]=k&&"statisticParameters"in I?this._getPercentileValue(I,O):this._getStatisticValue(I,O,s,c.returnDistinctValues);case 31:r.push({name:w,alias:w,type:"esriFieldTypeDouble"});case 32:e.next=4;break;case 34:e.next=39;break;case 36:e.prev=36,e.t3=e.catch(2),b.e(e.t3);case 39:return e.prev=39,b.f(),e.finish(39);case 42:return j=m?Array.from(o.values()):[i],e.abrupt("return",(this._sortFeatures(j,p,(function(e,t){return e.attributes[t]})),{fields:r,features:j}));case 44:case"end":return e.stop()}}),e,this,[[2,36,39,42]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_getAggregateGeometry",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t,r){var s,u,l,o,c,h,p,v,m,y,g,x,b;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([i.e(9058),i.e(3645)]).then(i.bind(i,50309));case 2:return s=e.sent,u=t.statisticType,l=t.outStatisticFieldName,o=this.featureAdapter,c=this.spatialReference,h=this.geometryType,p=this.hasZ,v=this.hasM,m=r.map((function(e){return(0,F.Op)(h,p,v,o.getGeometry(e))})),y=s.convexHull(c,m,!0)[0],g={aggregateGeometries:null,outStatisticFieldName:null},"EnvelopeAggregate"===u?(x=y?(0,d._w)(y):(0,d.aO)(s.union(c,m)),g.aggregateGeometries=(0,a.Z)((0,a.Z)({},x),{},{spatialReference:c}),g.outStatisticFieldName=l||"extent"):"CentroidAggregate"===u?(b=y?(0,f.tO)(y):(0,f.$G)((0,d.aO)(s.union(c,m))),g.aggregateGeometries={x:b[0],y:b[1],spatialReference:c},g.outStatisticFieldName=l||"centroid"):"ConvexHullAggregate"===u&&(g.aggregateGeometries=y,g.outStatisticFieldName=l||"convexHull"),e.abrupt("return",g);case 15:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"_getStatisticValue",value:function(e,t,i,n){var a,s=e.onStatisticField,u=e.statisticType;return a=null!==i&&void 0!==i&&i.has(s)?i.get(s):(0,w.qN)(this.fieldsIndex.get(s))?(0,m.H0)({values:t,returnDistinct:n}):(0,m.i5)({values:n?(0,r.Z)(new Set(t)):t,minValue:null,maxValue:null,useSampleStdDev:!0}),i&&i.set(s,a),a["var"===u?"variance":u]}},{key:"_getPercentileValue",value:function(e,t){var i=e.onStatisticField,r=e.statisticParameters,n=e.statisticType,a=r.value,s=r.orderBy,u=this.fieldsIndex.get(i);return(0,m.XL)(t,{value:a,orderBy:s,fieldType:null===u||void 0===u?void 0:u.type,isDiscrete:"percentile_disc"===n})}},{key:"_getAttributeValues",value:function(e,t,i){if(i.has(t))return i.get(t);var r=this.fieldsIndex.get(t),n=this.items.map((function(i){return e.getFieldValue(i,t,r)}));return i.set(t,n),n}},{key:"_getAttributeDataValues",value:function(e,t){return this.items.map((function(i){return e.getDataValue(i,{field:t.field,field2:t.field2,field3:t.field3,fieldDelimiter:t.fieldDelimiter,normalizationField:t.normalizationField,normalizationType:t.normalizationType,normalizationTotal:t.normalizationTotal})}))}},{key:"_getAttributeExpressionValues",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t,i,r){var a,s,u,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,_.LC)();case 2:return a=e.sent,s=a.arcadeUtils,u=s.createFunction(i),l=r&&s.getViewInfo(r),e.abrupt("return",t.getExpressionValues(this.items,u,l,s));case 7:case"end":return e.stop()}}),e,this)})));return function(t,i,r){return e.apply(this,arguments)}}()},{key:"_calculateUniqueValues",value:function(e,t){for(var i={},r=this.items,n=r.length,a=0;a<n;a++){var s,l=r[a],o=[],c=(0,u.Z)(e);try{for(c.s();!(s=c.n()).done;){var f=s.value;o.push(f[a])}}catch(h){c.e(h)}finally{c.f()}var d=o.join(",");null==i[d]?i[d]={count:1,data:o,items:[l],itemPositions:[a]}:(t||i[d].count++,i[d].items.push(l),i[d].itemPositions.push(a))}return i}},{key:"_getDataValues",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var i,r,a,s,u,l,o,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new y(this.query,this.featureAdapter,this.fieldsIndex),r=t.valueExpression,a=t.field,s=t.normalizationField,u=t.normalizationType,l=t.normalizationTotal,o=t.scale,c=r?{viewingMode:"map",scale:o,spatialReference:this.query.outSR||this.spatialReference}:null,e.abrupt("return",r?this._getAttributeExpressionValues(i,r,c):this._getAttributeDataValues(i,{field:a,field2:t.field2,field3:t.field3,fieldDelimiter:t.fieldDelimiter,normalizationField:s,normalizationType:u,normalizationTotal:l}));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}();function S(e,t,i,r){var n=r.x-i.x,a=r.y-i.y,s=n*n+a*a,u=(t.x-i.x)*n+(t.y-i.y)*a,l=Math.min(1,Math.max(0,u/s));e.x=i.x+n*l,e.y=i.y+a*l}function k(e,t){return e?t?4:3:t?3:2}!function(e){e[e.NONE=0]="NONE",e[e.EDGE=1]="EDGE",e[e.VERTEX=2]="VERTEX"}(Z||(Z={}));var V=function(){function e(t,i){(0,l.Z)(this,e),this.coords=t,this.coordsIndex=i}return(0,o.Z)(e,[{key:"x",get:function(){return this.coords[this.coordsIndex]}},{key:"y",get:function(){return this.coords[this.coordsIndex+1]}},{key:"z",get:function(){return this.coords[this.coordsIndex+2]}}]),e}()},33392:function(e,t,i){i.d(t,{nu:function(){return b},hr:function(){return x},Jc:function(){return y},G3:function(){return Z},Of:function(){return g},z4:function(){return m},hO:function(){return v}});var r=i(93433),n=i(37762),a=i(10064),s=i(15671),u=i(43144),l=i(59026),o=i(48562),c=function(){function e(t,i){(0,s.Z)(this,e),this._cache=new l.Z(t),this._invalidCache=new l.Z(i)}return(0,u.Z)(e,[{key:"get",value:function(e,t){var i="".concat(t.uid,":").concat(e),r=this._cache.get(i);if(r)return r;if(void 0!==this._invalidCache.get(i))return null;try{var n=o.WhereClause.create(e,t);return this._cache.put(i,n),n}catch(a){return this._invalidCache.put(i,null),null}}}]),e}(),f=new c(50,500),d="feature-store:unsupported-query",h=" as ",p=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);function v(e,t){if(!t)return!0;var i=f.get(t,e);if(!i)throw new a.Z(d,"invalid SQL expression",{where:t});if(!i.isStandardized)throw new a.Z(d,"where clause is not standard",{where:t});return g(e,i.fieldNames,"where clause contains missing fields"),!0}function m(e,t,i){if(!t)return!0;var r=f.get(t,e);if(!r)throw new a.Z(d,"invalid SQL expression",{having:t});if(!r.isAggregate)throw new a.Z(d,"having does not contain a valid aggregate function",{having:t});var n=r.fieldNames;if(g(e,n,"having contains missing fields"),!r.getExpressions().every((function(t){var r,n=t.aggregateType,a=t.field,s=null===(r=e.get(a))||void 0===r?void 0:r.name;return i.some((function(t){var i,r=t.onStatisticField,a=t.statisticType;return(null===(i=e.get(r))||void 0===i?void 0:i.name)===s&&a.toLowerCase().trim()===n}))})))throw new a.Z(d,"expressions in having should also exist in outStatistics",{having:t});return!0}function y(e,t){return e?f.get(e,t):null}function g(e,t,i){var s,u=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],l=[],o=(0,n.Z)(t);try{for(o.s();!(s=o.n()).done;){var c=s.value;if("*"!==c&&!e.has(c))if(u){var f=x(c);try{var h=y(f,e);if(!h)throw new a.Z(d,"invalid SQL expression",{where:f});if(!h.isStandardized)throw new a.Z(d,"expression is not standard",{clause:h});g(e,h.fieldNames,"expression contains missing fields")}catch(m){var p=m&&m.details;if(p&&(p.clause||p.where))throw m;p&&p.missingFields?l.push.apply(l,(0,r.Z)(p.missingFields)):l.push(c)}}else l.push(c)}}catch(v){o.e(v)}finally{o.f()}if(l.length)throw new a.Z(d,i,{missingFields:l})}function x(e){return e.split(h)[0]}function b(e){return e.split(h)[1]}function Z(e,t){var i=t.get(e);return!!i&&!p.has(i.type)}},31904:function(e,t,i){i.d(t,{EG:function(){return F},Op:function(){return w},S2:function(){return C},Up:function(){return _},j6:function(){return S},vF:function(){return y}});var r=i(74165),n=i(15861),a=i(43404),s=i(92026),u=i(68860),l=i(52587),o=i(94446),c=i(77981),f=i(91340),d=i(92975),h=i(83406),p=i(80457),v=i(19995),m=new a.X({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),y=Object.freeze({}),g=new p.Z,x=new p.Z,b=new p.Z,Z={esriGeometryPoint:h.fQ,esriGeometryPolyline:h.J6,esriGeometryPolygon:h.eG,esriGeometryMultipoint:h.Iv};function F(e,t,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.hasZ,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e.hasM;if((0,s.Wi)(t))return null;var a=e.hasZ&&r,u=e.hasM&&n;if(i){var l=(0,h.Nh)(b,t,e.hasZ,e.hasM,"esriGeometryPoint",i,r,n);return(0,h.fQ)(l,a,u)}return(0,h.fQ)(t,a,u)}function w(e,t,i,r,n,a){var u,l,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:t,c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:i,f=t&&o,d=i&&c,p=(0,s.pC)(r)?"coords"in r?r:r.geometry:null;if((0,s.Wi)(p))return null;if(n){var v,m,y=(0,h.zj)(x,p,t,i,e,n,o,c);return a&&(y=(0,h.Nh)(b,y,f,d,e,a)),null!==(v=null===(m=Z[e])||void 0===m?void 0:m.call(Z,y,f,d))&&void 0!==v?v:null}if(a){var F,w,_=(0,h.Nh)(b,p,t,i,e,a,o,c);return null!==(F=null===(w=Z[e])||void 0===w?void 0:w.call(Z,_,f,d))&&void 0!==F?F:null}return(0,h.hY)(g,p,t,i,o,c),null!==(u=null===(l=Z[e])||void 0===l?void 0:l.call(Z,g,f,d))&&void 0!==u?u:null}function _(e,t,i){return I.apply(this,arguments)}function I(){return(I=(0,n.Z)((0,r.Z)().mark((function e(t,i,n){var a,s,u,l,o,c,f,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.outFields,s=t.orderByFields,u=t.groupByFieldsForStatistics,l=t.outStatistics,a)for(o=0;o<a.length;o++)a[o]=a[o].trim();if(s)for(c=0;c<s.length;c++)s[c]=s[c].trim();if(u)for(f=0;f<u.length;f++)u[f]=u[f].trim();if(l)for(d=0;d<l.length;d++)l[d].onStatisticField&&(l[d].onStatisticField=l[d].onStatisticField.trim());return e.abrupt("return",(t.geometry&&!t.outSR&&(t.outSR=t.geometry.spatialReference),S(t,i,n)));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t,i){return k.apply(this,arguments)}function k(){return(k=(0,n.Z)((0,r.Z)().mark((function e(t,i,n){var a,u,l,d,h,p,m,g,x;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:if(a=t.where,t.where=a=a&&a.trim(),(!a||/^1 *= *1$/.test(a)||i&&i===a)&&(t.where=null),t.geometry){e.next=5;break}return e.abrupt("return",t);case 5:return e.next=7,D(t);case 7:if(u=e.sent,t.distance=0,t.units=null,"esriSpatialRelEnvelopeIntersects"===t.spatialRel&&(l=t.geometry.spatialReference,(u=(0,o.aO)(u)).spatialReference=l),!u){e.next=27;break}return e.next=12,(0,v._W)(u.spatialReference,n);case 12:return u=T(u,n),e.next=15,(0,f.aX)((0,c.im)(u));case 15:if(h=e.sent[0],!(0,s.Wi)(h)){e.next=18;break}throw y;case 18:return p="quantizationParameters"in t&&(null===(d=t.quantizationParameters)||void 0===d?void 0:d.tolerance)||"maxAllowableOffset"in t&&t.maxAllowableOffset||0,m=p&&V(u,n)?{densificationStep:8*p}:void 0,g=h.toJSON(),e.next=23,(0,v.iV)(g,g.spatialReference,n,m);case 23:if(x=e.sent){e.next=26;break}throw y;case 26:x.spatialReference=n,t.geometry=x;case 27:return e.abrupt("return",t);case 28:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e,t){if(!e)return!1;var i=e.spatialReference;return((0,c.YX)(e)||(0,c.oU)(e)||(0,c.l9)(e))&&!(0,d.fS)(i,t)&&!(0,l.Up)(i,t)}function T(e,t){var i=e.spatialReference;return V(e,t)&&(0,c.YX)(e)?{spatialReference:i,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}:e}function D(e){return A.apply(this,arguments)}function A(){return(A=(0,n.Z)((0,r.Z)().mark((function e(t){var i,n,a,s,l,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.distance,n=t.units,a=t.geometry,null!=i&&!("vertexAttributes"in a)){e.next=3;break}return e.abrupt("return",a);case 3:if(s=a.spatialReference,l=n?m.fromJSON(n):(0,u.qE)(s),!s||!(0,d.sT)(s)&&!(0,d.sS)(s)){e.next=9;break}e.t0=a,e.next=12;break;case 9:return e.next=11,(0,v._W)(s,d.Zn).then((function(){return(0,v.iV)(a,d.Zn)}));case 11:e.t0=e.sent;case 12:return o=e.t0,e.next=15,R();case 15:return e.t1=e.sent,e.abrupt("return",(0,e.t1)(o.spatialReference,o,i,l));case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){return z.apply(this,arguments)}function z(){return(z=(0,n.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([i.e(9058),i.e(3645)]).then(i.bind(i,50309));case 2:return e.abrupt("return",e.sent.geodesicBuffer);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){return e&&E in e?JSON.parse(JSON.stringify(e,N)):e}var E="_geVersion",N=function(e,t){return e!==E?t:void 0}}}]);
//# sourceMappingURL=9987.076ff929.chunk.js.map