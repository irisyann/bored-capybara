"use strict";(self.webpackChunkbored_capybara_web=self.webpackChunkbored_capybara_web||[]).push([["423"],{391:function(e,t,r){r.d(t,{K:()=>s});function s(e,t){return function(r,s){if("method"===s.kind)s.addInitializer(function(){let s={handler:r,noDomMeasure:t};this.attributeChangedHandler?this.attributeChangedHandler[e]=s:this.attributeChangedHandler={[e]:s}});else if("field"===s.kind)return function(r){let s={handler:r,noDomMeasure:t};return this.attributeChangedHandler?this.attributeChangedHandler[e]=s:this.attributeChangedHandler={[e]:s},r};else throw Error(`[lynx-web-components] decorator type ${s.kind} is not supported`)}}},246:function(e,t,r){r.r(t),r.d(t,{XFoldviewHeaderNg:()=>o,XFoldviewSlotNg:()=>b,XFoldviewToolbarNg:()=>g,XFoldviewNg:()=>d,XFoldviewSlotDragNg:()=>m});var s=r(150),n=r(616),i=r(232);class l{#e;#t;static observedAttributes=[];constructor(e){this.#e=e}connectedCallback(){this.#t=new ResizeObserver(([e])=>{let t=this.#e.parentElement;if(t?.tagName==="X-FOLDVIEW-NG"){let r=t.querySelector("x-foldview-slot-ng");if(r){let s=r.offsetTop,n=e.contentRect.height;s<n&&(r.style.top=n-s+"px",t.__scrollableLength=n-s)}}}),this.#t.observe(this.#e)}dispose(){this.#t&&(this.#t.disconnect(),this.#t=void 0)}}let o=(()=>{let e,t,r=[(0,n.w)("x-foldview-header-ng",[i.L,l])],o=[],a=HTMLElement;return class extends a{static{t=this}static{let n="function"==typeof Symbol&&Symbol.metadata?Object.create(a[Symbol.metadata]??null):void 0;(0,s.xE)(null,e={value:t},r,{kind:"class",name:t.name,metadata:n},null,o),t=e.value,n&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:n}),(0,s.Co)(t,o)}},t})();var a=r(391),u=r(811);let c=(()=>{let e,t,r=[];return class{static{let n="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;e=[(0,a.K)("granularity",!0)],(0,s.xE)(this,t={value:(0,s.Ho)(function(e){e&&""!==e?this.#r=parseFloat(e):this.#r=.01},"#handleGranularity")},e,{kind:"method",name:"#handleGranularity",static:!1,private:!0,access:{has:e=>#s in e,get:e=>e.#s},metadata:n},null,r),n&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:n})}#e=(0,s.Co)(this,r);#r=.01;#n=0;constructor(e){this.#e=e,this.#e.addEventListener("scroll",this.#i,{passive:!0})}static observedAttributes=["granularity"];get #s(){return t.value}#i=()=>{let e=this.#e.scrollTop;(Math.abs(this.#n-e)>this.#r||0===this.#e.scrollTop||1>=Math.abs(this.#e.scrollHeight-this.#e.clientHeight-this.#e.scrollTop))&&(this.#n=e,this.#e.dispatchEvent(new CustomEvent("offset",{...u.H,detail:{offset:e,height:this.#e.__scrollableLength}})))}}})();var h=r(908);let d=(()=>{let e,t,r=[(0,n.w)("x-foldview-ng",[i.L,c])],l=[],o=HTMLElement;return class extends o{static{t=this}static{let n="function"==typeof Symbol&&Symbol.metadata?Object.create(o[Symbol.metadata]??null):void 0;(0,s.xE)(null,e={value:t},r,{kind:"class",name:t.name,metadata:n},null,l),t=e.value,n&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:n})}static notToFilterFalseAttributes=new Set(["scroll-enable"]);__scrollableLength=0;get __headershowing(){return Math.abs(this.scrollTop-this.__scrollableLength)>1}setFoldExpanded(e){let{offset:t,smooth:r=!0}=e,s=parseFloat(t);this.scrollTo({top:s,behavior:r?"smooth":"instant"})}get[h.N0](){return this}static{(0,s.Co)(t,l)}},t})(),m=(()=>{let e,t,r=[(0,n.w)("x-foldivew-slot-drag-ng",[i.L])],l=[],o=HTMLElement;return class extends o{static{t=this}static{let n="function"==typeof Symbol&&Symbol.metadata?Object.create(o[Symbol.metadata]??null):void 0;(0,s.xE)(null,e={value:t},r,{kind:"class",name:t.name,metadata:n},null,l),t=e.value,n&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:n}),(0,s.Co)(t,l)}},t})();class p{#l=0;#o=new WeakMap;#a=new WeakMap;#u;#c=0;#h=0;#e;static observedAttributes=[];constructor(e){this.#e=e,this.#e.addEventListener("touchmove",this.#d,{passive:!1}),this.#e.addEventListener("touchstart",this.#m,{passive:!0}),this.#e.addEventListener("touchcancel",this.#m,{passive:!0})}#p(e,t){return this.#u?.find(r=>{if(t&&r.scrollHeight>r.clientHeight||!t&&r.scrollWidth>r.clientWidth){let s=e<0&&(t?0!==r.scrollTop:0!==r.scrollLeft),n=e>0&&Math.abs(t?r.scrollHeight-r.clientHeight-r.scrollTop:r.scrollWidth-r.clientWidth-r.scrollLeft)>1;return s||n}return!1})}#b(e,t,r){let s=(r?this.#o:this.#a).get(e)??0;s+=t,this.#o.set(e,s),r?e.scrollTop=s:e.scrollLeft=s}#d=e=>{let t=this.#g(),{pageY:r,pageX:s}=e.touches.item(0),n=this.#c-r,i=this.#h-s,l=this.#p(n,!0),o=this.#p(i,!1);n&&t&&Math.abs(i/4)<Math.abs(n)&&(e.cancelable&&!h.mJ&&(e.preventDefault(),o&&this.#b(o,i,!1)),t.__headershowing&&n>0||n<0&&!l||!t.__headershowing&&!l?(this.#l+=n,t.scrollTop=this.#l):l&&this.#b(l,n,!0)),this.#c=r};#g(){let e=this.#e.parentElement;if(e&&"X-FOLDVIEW-NG"===e.tagName)return e}#m=e=>{let{pageX:t,pageY:r}=e.touches.item(0);for(let e of(this.#u=document.elementsFromPoint(t,r).filter(e=>this.#e.contains(e)),this.#c=r,this.#h=t,this.#l=this.#g()?.scrollTop??0,this.#u))this.#o.set(e,e.scrollTop),this.#a.set(e,e.scrollLeft)}}let b=(()=>{let e,t,r=[(0,n.w)("x-foldview-slot-ng",[i.L,p])],l=[],o=HTMLElement;return class extends o{static{t=this}static{let n="function"==typeof Symbol&&Symbol.metadata?Object.create(o[Symbol.metadata]??null):void 0;(0,s.xE)(null,e={value:t},r,{kind:"class",name:t.name,metadata:n},null,l),t=e.value,n&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:n}),(0,s.Co)(t,l)}},t})(),g=(()=>{let e,t,r=[(0,n.w)("x-foldview-toolbar-ng",[i.L])],l=[],o=HTMLElement;return class extends o{static{t=this}static{let n="function"==typeof Symbol&&Symbol.metadata?Object.create(o[Symbol.metadata]??null):void 0;(0,s.xE)(null,e={value:t},r,{kind:"class",name:t.name,metadata:n},null,l),t=e.value,n&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:n}),(0,s.Co)(t,l)}},t})()},232:function(e,t,r){function s(e,t,r){if(t){if((t=t.trim()).endsWith("px"))return Number(t.substring(0,t.length-2));if(t.endsWith("%")){let s=Number(t.substring(0,t.length-1)),{width:n,height:i}=e.getBoundingClientRect();return(r?n:i)*s/100}}return 0}r.d(t,{L:()=>l});var n=r(811),i=r(908);class l{static observedAttributes=["x-enable-uiappear-event","x-enable-uidisappear-event","exposure-id","exposure-area","exposure-screen-margin-top","exposure-screen-margin-right","exposure-screen-margin-bottom","exposure-screen-margin-left","exposure-ui-margin-top","exposure-ui-margin-right","exposure-ui-margin-bottom","exposure-ui-margin-left"];#v;#x;#f=!1;#E;get #S(){return null!==this.#v.getAttribute("x-enable-uiappear-event")||null!==this.#v.getAttribute("x-enable-uidisappear-event")||null!==this.#v.getAttribute("exposure-id")}constructor(e){this.#v=e}onExposureParamsChanged=()=>{this.#x||(this.#x=Promise.resolve().then(()=>{this.#y(),this.#x=void 0}))};onExposureIdChanged(e,t){t&&this.#S&&this.#w({isIntersecting:!1},t),this.onExposureParamsChanged()}attributeChangedHandler=new Proxy(this,{get(e,t){if(l.observedAttributes.includes(t))return"exposure-id"===t?{handler:e.onExposureIdChanged,noDomMeasure:!0}:{handler:e.onExposureParamsChanged,noDomMeasure:!0}}});#y(){let e={exposureID:this.#v.getAttribute("exposure-id"),exposureArea:this.#v.getAttribute("exposure-area"),exposureScene:this.#v.getAttribute("exposure-scene"),exposureScreenMarginTop:this.#v.getAttribute("exposure-screen-margin-top"),exposureScreenMarginRight:this.#v.getAttribute("exposure-screen-margin-right"),exposureScreenMarginBottom:this.#v.getAttribute("exposure-screen-margin-bottom"),exposureScreenMarginLeft:this.#v.getAttribute("exposure-screen-margin-left"),exposureUIMarginTop:this.#v.getAttribute("exposure-ui-margin-top"),exposureUIMarginRight:this.#v.getAttribute("exposure-ui-margin-right"),exposureUIMarginBottom:this.#v.getAttribute("exposure-ui-margin-bottom"),exposureUIMarginLeft:this.#v.getAttribute("exposure-ui-margin-left")};if(this.#S){if(IntersectionObserver){let t={top:s(this.#v,e.exposureUIMarginTop),right:s(this.#v,e.exposureUIMarginRight,!0),bottom:s(this.#v,e.exposureUIMarginBottom),left:s(this.#v,e.exposureUIMarginLeft,!0)},r={top:s(this.#v,e.exposureScreenMarginTop),right:s(this.#v,e.exposureScreenMarginRight,!0),bottom:s(this.#v,e.exposureScreenMarginBottom),left:s(this.#v,e.exposureScreenMarginLeft,!0)},n={top:(t.bottom?-1:1)*(r.top-t.bottom),right:(t.left?-1:1)*(r.right-t.left),bottom:(t.top?-1:1)*(r.bottom-t.top),left:(t.right?-1:1)*(r.left-t.right)},l=this.#v.getAttribute("exposure-area"),o=`${n.top}px ${n.right}px ${n.bottom}px ${n.left}px`,a=l?parseFloat(l)/100:0;this.#E&&this.#E.disconnect();let u=this.#v.parentElement;for(;u;){if(u[i.N0]){u=u[i.N0];break}u=u.parentElement}this.#f=!1,this.#E=new IntersectionObserver(([e])=>{e&&(e.isIntersecting&&(this.#f=!0),this.#w(e))},{rootMargin:o,threshold:a,root:u}),this.#E.observe(this.#v)}}else this.disableExposure()}#w(e,t){if(!this.#f)return;let r=t??this.#v.getAttribute("exposure-id")??"",s=this.#v.getAttribute("exposure-scene")??"",i={"exposure-id":r,"exposure-scene":s,exposureID:r,exposureScene:s},l=new CustomEvent(e.isIntersecting?"uiappear":"uidisappear",{...n.H,detail:i}),o=new CustomEvent(e.isIntersecting?"exposure":"disexposure",{bubbles:!0,composed:!1,cancelable:!1,detail:i});Object.assign(l,i),this.#v.dispatchEvent(l),this.#v.dispatchEvent(o)}disableExposure(){this.#E&&(this.#E.disconnect(),this.#E=void 0)}}},811:function(e,t,r){r.d(t,{H:()=>s});let s={bubbles:!1,composed:!1,cancelable:!0}},908:function(e,t,r){r.d(t,{N0:()=>l,QP:()=>s,mJ:()=>i});let s="onscrollend"in document,n=window.navigator.userAgent,i=n.includes("Chrome");/\b(iPad|iPhone|iPod|OS X)\b/.test(n)&&!/Edge/.test(n)&&/WebKit/.test(n)&&window.MSStream;let l=Symbol()}}]);