/*! For license information please see 3049.7668a024.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkpanorama_viewer=self.webpackChunkpanorama_viewer||[]).push([[3049],{53049:function(t,e,n){n.r(e),n.d(e,{CalciteFlow:function(){return g},defineCustomElement:function(){return w}});var i=n(4942),a=n(74165),r=n(15861),o=n(15671),c=n(43144),l=n(97326),s=n(60136),u=n(29388),f=n(51554),m=n(72021),d="frame",v="frame--advancing",h="frame--retreating",p=(0,f.GH)(function(t){(0,s.Z)(n,t);var e=(0,u.Z)(n);function n(){var t;return(0,o.Z)(this,n),(t=e.call(this)).__registerHost(),t.__attachShadow(),t.itemMutationObserver=(0,m.c)("mutation",(function(){return t.updateFlowProps()})),t.getFlowDirection=function(t,e){return t&&e>1||t>1?e<t?"retreating":"advancing":null},t.updateFlowProps=function(){var e=(0,l.Z)(t),n=e.el,i=e.items,a=Array.from(n.querySelectorAll("calcite-flow-item")).filter((function(t){return t.closest("calcite-flow")===n})),r=i.length,o=a.length,c=a[o-1],s=a[o-2];if(o&&c&&a.forEach((function(t){t.showBackButton=t===c&&o>1,t.hidden=t!==c})),s&&(s.menuOpen=!1),t.items=a,r!==o){var u=t.getFlowDirection(r,o);t.itemCount=o,t.flowDirection=u}},t.flowDirection=null,t.itemCount=0,t.items=[],t}return(0,c.Z)(n,[{key:"back",value:function(){var t=(0,r.Z)((0,a.Z)().mark((function t(){var e,n,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.items,n=e[e.length-1]){t.next=4;break}return t.abrupt("return");case 4:return i=n.beforeBack?n.beforeBack:function(){return Promise.resolve()},t.abrupt("return",i.call(n).then((function(){return n.remove(),n})));case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"connectedCallback",value:function(){var t;null===(t=this.itemMutationObserver)||void 0===t||t.observe(this.el,{childList:!0,subtree:!0}),this.updateFlowProps()}},{key:"disconnectedCallback",value:function(){var t;null===(t=this.itemMutationObserver)||void 0===t||t.disconnect()}},{key:"handleItemBackClick",value:function(){this.back()}},{key:"render",value:function(){var t,e=this.flowDirection,n=(t={},(0,i.Z)(t,d,!0),(0,i.Z)(t,v,"advancing"===e),(0,i.Z)(t,h,"retreating"===e),t);return(0,f.h)("div",{class:n},(0,f.h)("slot",null))}},{key:"el",get:function(){return this}}],[{key:"style",get:function(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;overflow:hidden;background-color:transparent}:host .frame{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;padding:0px}:host ::slotted(calcite-flow-item),:host ::slotted(calcite-panel){block-size:100%}:host ::slotted(.calcite-match-height:last-child){display:flex;flex:1 1 auto;overflow:hidden}:host .frame--advancing{animation:calcite-frame-advance var(--calcite-animation-timing)}:host .frame--retreating{animation:calcite-frame-retreat var(--calcite-animation-timing)}@keyframes calcite-frame-advance{0%{--tw-bg-opacity:0.5;transform:translate3d(50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--tw-bg-opacity:0.5;transform:translate3d(-50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}"}}]),n}(f.mv),[1,"calcite-flow",{flowDirection:[32],itemCount:[32],items:[32],back:[64]},[[0,"calciteFlowItemBack","handleItemBackClick"]]]);function b(){if("undefined"!==typeof customElements){["calcite-flow"].forEach((function(t){if("calcite-flow"===t)customElements.get(t)||customElements.define(t,p)}))}}b();var g=p,w=b},72021:function(t,e,n){n.d(e,{c:function(){return u}});var i=n(15671),a=n(43144),r=n(11752),o=n(61120),c=n(60136),l=n(29388),s=n(51554);function u(t,e,n){if(s.Z5.isBrowser){var u=function(t){var e=function(t){(0,c.Z)(n,t);var e=(0,l.Z)(n);function n(t){var a;return(0,i.Z)(this,n),(a=e.call(this,t)).observedEntry=[],a.callback=t,a}return(0,a.Z)(n,[{key:"observe",value:function(t,e){return this.observedEntry.push({target:t,options:e}),(0,r.Z)((0,o.Z)(n.prototype),"observe",this).call(this,t,e)}},{key:"unobserve",value:function(t){var e=this,i=this.observedEntry.filter((function(e){return e.target!==t}));this.observedEntry=[],this.callback((0,r.Z)((0,o.Z)(n.prototype),"takeRecords",this).call(this),this),this.disconnect(),i.forEach((function(t){return e.observe(t.target,t.options)}))}}]),n}(window.MutationObserver);return"intersection"===t?window.IntersectionObserver:"mutation"===t?e:window.ResizeObserver}(t);return new u(e,n)}}}}]);
//# sourceMappingURL=3049.7668a024.chunk.js.map