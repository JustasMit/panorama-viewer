"use strict";(self.webpackChunkpanorama_viewer=self.webpackChunkpanorama_viewer||[]).push([[2170,2463],{92463:function(e,n,r){r.r(n),r.d(n,{hydratedAdapter:function(){return c}});var t=r(53866),i=r(77577),a=r(585),u=r(80885),o=r(29909),c={convertToGEGeometry:function(e,n){if(null==n)return null;var r="cache"in n?n.cache._geVersion:void 0;return null==r&&(r=e.convertJSONToGeometry(n),"cache"in n&&(n.cache._geVersion=r)),r},exportPoint:function(e,n,r){var t=e.hasZ(n),i=e.hasM(n),u=new a.Z({x:e.getPointX(n),y:e.getPointY(n),spatialReference:r});return t&&(u.z=e.getPointZ(n)),i&&(u.m=e.getPointM(n)),u.cache._geVersion=n,u},exportPolygon:function(e,n,r){var t=new u.Z({rings:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:r});return t.cache._geVersion=n,t},exportPolyline:function(e,n,r){var t=new o.Z({paths:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:r});return t.cache._geVersion=n,t},exportMultipoint:function(e,n,r){var t=new i.Z({hasZ:e.hasZ(n),hasM:e.hasM(n),points:e.exportPoints(n),spatialReference:r});return t.cache._geVersion=n,t},exportExtent:function(e,n,r){var i=e.hasZ(n),a=e.hasM(n),u=new t.Z({xmin:e.getXMin(n),ymin:e.getYMin(n),xmax:e.getXMax(n),ymax:e.getYMax(n),spatialReference:r});if(i){var o=e.getZExtent(n);u.zmin=o.vmin,u.zmax=o.vmax}if(a){var c=e.getMExtent(n);u.mmin=c.vmin,u.mmax=c.vmax}return u.cache._geVersion=n,u}}},2170:function(e,n,r){r.r(n),r.d(n,{buffer:function(){return z},changeDefaultSpatialReferenceTolerance:function(){return K},clearDefaultSpatialReferenceTolerance:function(){return Q},clip:function(){return l},contains:function(){return p},convexHull:function(){return V},crosses:function(){return v},cut:function(){return h},densify:function(){return I},difference:function(){return P},disjoint:function(){return m},distance:function(){return y},equals:function(){return g},extendedSpatialReferenceInfo:function(){return s},flipHorizontal:function(){return J},flipVertical:function(){return N},generalize:function(){return O},geodesicArea:function(){return q},geodesicBuffer:function(){return E},geodesicDensify:function(){return X},geodesicLength:function(){return B},intersect:function(){return _},intersectLinesToPoints:function(){return F},intersects:function(){return G},isSimple:function(){return R},nearestCoordinate:function(){return L},nearestVertex:function(){return b},nearestVertices:function(){return k},offset:function(){return T},overlaps:function(){return w},planarArea:function(){return Y},planarLength:function(){return j},relate:function(){return Z},rotate:function(){return H},simplify:function(){return M},symmetricDifference:function(){return S},touches:function(){return A},union:function(){return D},within:function(){return x}});var t=r(43144),i=r(15671),a=r(60136),u=r(29388),o=r(98737),c=r(99058),f=r(92463);function d(e){return Array.isArray(e)?e[0].spatialReference:e&&e.spatialReference}function s(e){return c.G.extendedSpatialReferenceInfo(e)}function l(e,n){return c.G.clip(f.hydratedAdapter,d(e),e,n)}function h(e,n){return c.G.cut(f.hydratedAdapter,d(e),e,n)}function p(e,n){return c.G.contains(f.hydratedAdapter,d(e),e,n)}function v(e,n){return c.G.crosses(f.hydratedAdapter,d(e),e,n)}function y(e,n,r){return c.G.distance(f.hydratedAdapter,d(e),e,n,r)}function g(e,n){return c.G.equals(f.hydratedAdapter,d(e),e,n)}function G(e,n){return c.G.intersects(f.hydratedAdapter,d(e),e,n)}function A(e,n){return c.G.touches(f.hydratedAdapter,d(e),e,n)}function x(e,n){return c.G.within(f.hydratedAdapter,d(e),e,n)}function m(e,n){return c.G.disjoint(f.hydratedAdapter,d(e),e,n)}function w(e,n){return c.G.overlaps(f.hydratedAdapter,d(e),e,n)}function Z(e,n,r){return c.G.relate(f.hydratedAdapter,d(e),e,n,r)}function R(e){return c.G.isSimple(f.hydratedAdapter,d(e),e)}function M(e){return c.G.simplify(f.hydratedAdapter,d(e),e)}function V(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return c.G.convexHull(f.hydratedAdapter,d(e),e,n)}function P(e,n){return c.G.difference(f.hydratedAdapter,d(e),e,n)}function S(e,n){return c.G.symmetricDifference(f.hydratedAdapter,d(e),e,n)}function _(e,n){return c.G.intersect(f.hydratedAdapter,d(e),e,n)}function D(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return c.G.union(f.hydratedAdapter,d(e),e,n)}function T(e,n,r,t,i,a){return c.G.offset(f.hydratedAdapter,d(e),e,n,r,t,i,a)}function z(e,n,r){var t=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return c.G.buffer(f.hydratedAdapter,d(e),e,n,r,t)}function E(e,n,r,t,i,a){return c.G.geodesicBuffer(f.hydratedAdapter,d(e),e,n,r,t,i,a)}function L(e,n){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return c.G.nearestCoordinate(f.hydratedAdapter,d(e),e,n,r)}function b(e,n){return c.G.nearestVertex(f.hydratedAdapter,d(e),e,n)}function k(e,n,r,t){return c.G.nearestVertices(f.hydratedAdapter,d(e),e,n,r,t)}function C(e){var n,r;return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e&&null!==(n=null===(r=e.extent)||void 0===r?void 0:r.center)&&void 0!==n?n:null}function H(e,n,r){var t;if(null==e)throw new U;var i=e.spatialReference;if(null==(r=null!==(t=r)&&void 0!==t?t:C(e)))throw new U;var a=e.constructor.fromJSON(c.G.rotate(e,n,r));return a.spatialReference=i,a}function J(e,n){var r;if(null==e)throw new U;var t=e.spatialReference;if(null==(n=null!==(r=n)&&void 0!==r?r:C(e)))throw new U;var i=e.constructor.fromJSON(c.G.flipHorizontal(e,n));return i.spatialReference=t,i}function N(e,n){var r;if(null==e)throw new U;var t=e.spatialReference;if(null==(n=null!==(r=n)&&void 0!==r?r:C(e)))throw new U;var i=e.constructor.fromJSON(c.G.flipVertical(e,n));return i.spatialReference=t,i}function O(e,n,r,t){return c.G.generalize(f.hydratedAdapter,d(e),e,n,r,t)}function I(e,n,r){return c.G.densify(f.hydratedAdapter,d(e),e,n,r)}function X(e,n,r){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return c.G.geodesicDensify(f.hydratedAdapter,d(e),e,n,r,t)}function Y(e,n){return c.G.planarArea(f.hydratedAdapter,d(e),e,n)}function j(e,n){return c.G.planarLength(f.hydratedAdapter,d(e),e,n)}function q(e,n,r){return c.G.geodesicArea(f.hydratedAdapter,d(e),e,n,r)}function B(e,n,r){return c.G.geodesicLength(f.hydratedAdapter,d(e),e,n,r)}function F(e,n){return c.G.intersectLinesToPoints(f.hydratedAdapter,d(e),e,n)}function K(e,n){c.G.changeDefaultSpatialReferenceTolerance(e,n)}function Q(e){c.G.clearDefaultSpatialReferenceTolerance(e)}var U=function(e){(0,a.Z)(r,e);var n=(0,u.Z)(r);function r(){return(0,i.Z)(this,r),n.call(this,"Illegal Argument Exception")}return(0,t.Z)(r)}((0,o.Z)(Error))}}]);
//# sourceMappingURL=2170.a65419d4.chunk.js.map