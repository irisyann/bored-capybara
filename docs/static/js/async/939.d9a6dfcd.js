"use strict";(self.webpackChunkbored_capybara_web=self.webpackChunkbored_capybara_web||[]).push([["939"],{79:function(e,t,r){r.d(t,{G:()=>n});var i=r(569);function n(e,t,r){return function(n){r&&(n=r(n));let s=e.call(this);s.getAttribute(t)!==n&&(null!==n?(0,i.Q)(()=>{s.setAttribute(t,n)}):(0,i.Q)(()=>{s.removeAttribute(t)}))}}},95:function(e,t,r){r.d(t,{o:()=>i});function i(e,t){let r,i;return()=>(i||(i=e()),i.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&r||(r=i.querySelector(t)),r)}},339:function(e,t,r){r.d(t,{d:()=>i});let i=(e,...t)=>String.raw({raw:e},...t)},391:function(e,t,r){r.d(t,{K:()=>i});function i(e,t){return function(r,i){if("method"===i.kind)i.addInitializer(function(){let i={handler:r,noDomMeasure:t};this.attributeChangedHandler?this.attributeChangedHandler[e]=i:this.attributeChangedHandler={[e]:i}});else if("field"===i.kind)return function(r){let i={handler:r,noDomMeasure:t};return this.attributeChangedHandler?this.attributeChangedHandler[e]=i:this.attributeChangedHandler={[e]:i},r};else throw Error(`[lynx-web-components] decorator type ${i.kind} is not supported`)}}},532:function(e,t,r){r.r(t),r.d(t,{XAudioTT:()=>y});var i,n,s=r(150),o=r(616),a=r(339),u=r(95),d=r(79),l=r(391);let c=Symbol("__src"),h=Symbol("__src"),p={loadstart:{code:0,type:"init"},canplay:{code:1,type:"playable"},stalled:{code:2,type:"stalled"},error:{code:3,type:"error"}},m={stop:{code:0,type:"stopped"},play:{code:1,type:"playing"},pause:{code:2,type:"paused"}},g=e=>e?e.paused?2*!e.ended:e.currentTime>0?1:3:-1;(i=n||(n={}))[i.SrcError=-1]="SrcError",i[i.SrcJsonError=-2]="SrcJsonError",i[i.DownloadError=-3]="DownloadError",i[i.PlayerFinishedError=-4]="PlayerFinishedError",i[i.PlayerLoadingError=-5]="PlayerLoadingError",i[i.PlayerPlaybackError=-6]="PlayerPlaybackError";var E=r(811);let b=(()=>{let e,t,r,i,o,a=[],p=[],m=[];return class{static{let u="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;e=[(0,l.K)("src",!0)],r=[(0,l.K)("loop",!0)],i=[(0,l.K)("pause-on-hide",!0)],(0,s.xE)(this,t={value:(0,s.Ho)(function(e){let t;try{t=JSON.parse(e||"")||{}}catch(e){console.error(`JSON.parse src error: ${e}`),t={}}null===e?this.#e.dispatchEvent(new CustomEvent("error",{...E.H,detail:{code:n.SrcError,msg:"",from:"res loader",currentSrcID:this.#e[c]?.id}})):(t?.id===void 0||t?.play_url===void 0)&&this.#e.dispatchEvent(new CustomEvent("error",{...E.H,detail:{code:n.SrcJsonError,msg:"",from:"res loader",currentSrcID:this.#e[c]?.id}})),this.#e[c]=t,this.#e[h]=void 0,this.#e.stop()},"#handleSrc")},e,{kind:"method",name:"#handleSrc",static:!1,private:!0,access:{has:e=>#t in e,get:e=>e.#t},metadata:u},null,a),(0,s.xE)(this,o={value:(0,s.Ho)(function(e){null!==e?document.addEventListener("visibilitychange",this.#r,{passive:!0}):document.removeEventListener("visibilitychange",this.#r)},"#handlePauseOnHide")},i,{kind:"method",name:"#handlePauseOnHide",static:!1,private:!0,access:{has:e=>#i in e,get:e=>e.#i},metadata:u},null,a),(0,s.xE)(null,null,r,{kind:"field",name:"#handleLoop",static:!1,private:!0,access:{has:e=>#n in e,get:e=>e.#n,set:(e,t)=>{e.#n=t}},metadata:u},p,m),u&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:u})}static observedAttributes=["src","loop","pause-on-hide"];#e=(0,s.Co)(this,a);#s=(0,u.o)(()=>this.#e.shadowRoot,"#audio");#o=(0,d.G)(this.#s,"src");get #t(){return t.value}#n=(0,s.Co)(this,p,(0,d.G)(this.#s,"loop"));#r=((0,s.Co)(this,m),()=>{"hidden"===document.visibilityState&&this.#e.pause()});get #i(){return o.value}constructor(e){this.#e=e}}})();class v{static observedAttributes=[];#e;#a;#s=(0,u.o)(()=>this.#e.shadowRoot,"#audio");#u=e=>{let t=Number(this.#e.getAttribute("interval")),r=Number.isNaN(t)?0:t;this.#a=setInterval(()=>{this.#e.dispatchEvent(new CustomEvent("timeupdate",{...E.H,detail:{currentTime:this.#s().currentTime,currentSrcID:this.#e[c]?.id}}))},r);let i=m[e.type];this.#e.dispatchEvent(new CustomEvent("playbackstatechanged",{...E.H,detail:{code:i?.code,type:i?.type,currentSrcID:this.#e[c]?.id}}))};#d=e=>{clearInterval(this.#a);let t=m[e.type];this.#e.dispatchEvent(new CustomEvent("playbackstatechanged",{...E.H,detail:{code:t?.code,type:t?.type,currentSrcID:this.#e[c]?.id}}))};#l=e=>{let t=p[e.type];this.#e.dispatchEvent(new CustomEvent("loadingstatechanged",{...E.H,detail:{code:t?.code,type:t?.type,currentSrcID:this.#e[c]?.id}}))};#c=e=>{this.#l(e);let t=e.target?.error?.code,r=t===MediaError.MEDIA_ERR_DECODE?n.PlayerLoadingError:n.PlayerPlaybackError;t===MediaError.MEDIA_ERR_DECODE&&(r=n.PlayerLoadingError),this.#e.dispatchEvent(new CustomEvent("error",{...E.H,detail:{code:r,msg:"",from:"player",currentSrcID:this.#e[c]?.id}}))};#h=()=>{let e=null!==this.#e.getAttribute("loop");this.#e.dispatchEvent(new CustomEvent("finished",{...E.H,detail:{loop:e,currentSrcID:this.#e[c]?.id}}))};constructor(e){this.#e=e}connectedCallback(){let e=this.#s();e.addEventListener("play",this.#u,{passive:!0}),e.addEventListener("pause",this.#d,{passive:!0}),e.addEventListener("ended",this.#h,{passive:!0}),e.addEventListener("loadstart",this.#l,{passive:!0}),e.addEventListener("canplay",this.#l,{passive:!0}),e.addEventListener("stalled",this.#l,{passive:!0}),e.addEventListener("error",this.#c,{passive:!0})}}var x=r(232);let y=(()=>{let e,t,r=[(0,o.w)("x-audio-tt",[x.L,b,v],(0,a.d)`<audio id="audio"></audio>`)],i=[],l=HTMLElement;return class extends l{static{t=this}static{let n="function"==typeof Symbol&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;(0,s.xE)(null,e={value:t},r,{kind:"class",name:t.name,metadata:n},null,i),t=e.value,n&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:n}),(0,s.Co)(t,i)}#p=(0,u.o)(()=>this.shadowRoot,"#audio");#s=(0,u.o)(()=>this.shadowRoot,"#audio");#o=(0,d.G)(this.#s,"src");[c];[h];#m=()=>{let e;let t=this[c];if(t&&t.id&&t.play_url){try{e=JSON.parse(this.getAttribute("headers")||"{}")||{}}catch(t){console.error(`JSON.parse headers error: ${t}`),e={}}this[h]=new Promise(async(r,i)=>{this.dispatchEvent(new CustomEvent("srcloadingstatechanged",{...E.H,detail:{code:0,type:"loading",currentSrcID:t.id}}));let s=await fetch(t.play_url,{headers:e});s.ok||(this.dispatchEvent(new CustomEvent("error",{...E.H,detail:{code:n.DownloadError,msg:"",from:"res loader",currentSrcID:t.id}})),i()),this.dispatchEvent(new CustomEvent("srcloadingstatechanged",{...E.H,detail:{code:1,type:"success",currentSrcID:t.id}}));let o=await s.blob(),a=URL.createObjectURL(o);this.#o(a),r()})}};play(){return this[h]||this.#m(),this[h]?.then(()=>{let e=this.#p();e.currentTime=0,e.play()}),{currentSrcID:this[c]?.id,loadingSrcID:""}}stop(){let e=this.#p(),t=m.stop;return this.dispatchEvent(new CustomEvent("playbackstatechanged",{...E.H,detail:{code:t?.code,type:t?.type,currentSrcID:this[c]?.id}})),e.currentTime=0,e.pause(),{currentSrcID:this[c]?.id}}pause(){return this.#p().pause(),{currentSrcID:this[c]?.id}}resume(){return this.#p().play(),{currentSrcID:this[c]?.id,loadingSrcID:""}}seek(e){return this.#p().currentTime=(e.currentTime||0)/1e3,this.dispatchEvent(new CustomEvent("seek",{...E.H,detail:{seekresult:1,currentSrcID:this[c]?.id}})),{currentSrcID:this[c]?.id}}mute(e){return this.#p().muted=e.mute,{currentSrcID:this[c]?.id}}playerInfo(){let e=this.#p(),t=e.buffered,r=t.end(t.length-1);return{currentSrcID:this[c]?.id,duration:1e3*e.duration,playbackState:g(e),currentTime:e.currentTime,cacheTime:r}}prepare(){this[h]||this.#m()}setVolume(e){return this.#p().volume=e.volume,{code:1}}},t})()},232:function(e,t,r){function i(e,t,r){if(t){if((t=t.trim()).endsWith("px"))return Number(t.substring(0,t.length-2));if(t.endsWith("%")){let i=Number(t.substring(0,t.length-1)),{width:n,height:s}=e.getBoundingClientRect();return(r?n:s)*i/100}}return 0}r.d(t,{L:()=>o});var n=r(811),s=r(908);class o{static observedAttributes=["x-enable-uiappear-event","x-enable-uidisappear-event","exposure-id","exposure-area","exposure-screen-margin-top","exposure-screen-margin-right","exposure-screen-margin-bottom","exposure-screen-margin-left","exposure-ui-margin-top","exposure-ui-margin-right","exposure-ui-margin-bottom","exposure-ui-margin-left"];#g;#E;#b=!1;#v;get #x(){return null!==this.#g.getAttribute("x-enable-uiappear-event")||null!==this.#g.getAttribute("x-enable-uidisappear-event")||null!==this.#g.getAttribute("exposure-id")}constructor(e){this.#g=e}onExposureParamsChanged=()=>{this.#E||(this.#E=Promise.resolve().then(()=>{this.#y(),this.#E=void 0}))};onExposureIdChanged(e,t){t&&this.#x&&this.#f({isIntersecting:!1},t),this.onExposureParamsChanged()}attributeChangedHandler=new Proxy(this,{get(e,t){if(o.observedAttributes.includes(t))return"exposure-id"===t?{handler:e.onExposureIdChanged,noDomMeasure:!0}:{handler:e.onExposureParamsChanged,noDomMeasure:!0}}});#y(){let e={exposureID:this.#g.getAttribute("exposure-id"),exposureArea:this.#g.getAttribute("exposure-area"),exposureScene:this.#g.getAttribute("exposure-scene"),exposureScreenMarginTop:this.#g.getAttribute("exposure-screen-margin-top"),exposureScreenMarginRight:this.#g.getAttribute("exposure-screen-margin-right"),exposureScreenMarginBottom:this.#g.getAttribute("exposure-screen-margin-bottom"),exposureScreenMarginLeft:this.#g.getAttribute("exposure-screen-margin-left"),exposureUIMarginTop:this.#g.getAttribute("exposure-ui-margin-top"),exposureUIMarginRight:this.#g.getAttribute("exposure-ui-margin-right"),exposureUIMarginBottom:this.#g.getAttribute("exposure-ui-margin-bottom"),exposureUIMarginLeft:this.#g.getAttribute("exposure-ui-margin-left")};if(this.#x){if(IntersectionObserver){let t={top:i(this.#g,e.exposureUIMarginTop),right:i(this.#g,e.exposureUIMarginRight,!0),bottom:i(this.#g,e.exposureUIMarginBottom),left:i(this.#g,e.exposureUIMarginLeft,!0)},r={top:i(this.#g,e.exposureScreenMarginTop),right:i(this.#g,e.exposureScreenMarginRight,!0),bottom:i(this.#g,e.exposureScreenMarginBottom),left:i(this.#g,e.exposureScreenMarginLeft,!0)},n={top:(t.bottom?-1:1)*(r.top-t.bottom),right:(t.left?-1:1)*(r.right-t.left),bottom:(t.top?-1:1)*(r.bottom-t.top),left:(t.right?-1:1)*(r.left-t.right)},o=this.#g.getAttribute("exposure-area"),a=`${n.top}px ${n.right}px ${n.bottom}px ${n.left}px`,u=o?parseFloat(o)/100:0;this.#v&&this.#v.disconnect();let d=this.#g.parentElement;for(;d;){if(d[s.N0]){d=d[s.N0];break}d=d.parentElement}this.#b=!1,this.#v=new IntersectionObserver(([e])=>{e&&(e.isIntersecting&&(this.#b=!0),this.#f(e))},{rootMargin:a,threshold:u,root:d}),this.#v.observe(this.#g)}}else this.disableExposure()}#f(e,t){if(!this.#b)return;let r=t??this.#g.getAttribute("exposure-id")??"",i=this.#g.getAttribute("exposure-scene")??"",s={"exposure-id":r,"exposure-scene":i,exposureID:r,exposureScene:i},o=new CustomEvent(e.isIntersecting?"uiappear":"uidisappear",{...n.H,detail:s}),a=new CustomEvent(e.isIntersecting?"exposure":"disexposure",{bubbles:!0,composed:!1,cancelable:!1,detail:s});Object.assign(o,s),this.#g.dispatchEvent(o),this.#g.dispatchEvent(a)}disableExposure(){this.#v&&(this.#v.disconnect(),this.#v=void 0)}}},811:function(e,t,r){r.d(t,{H:()=>i});let i={bubbles:!1,composed:!1,cancelable:!0}},908:function(e,t,r){r.d(t,{N0:()=>o,QP:()=>i,mJ:()=>s});let i="onscrollend"in document,n=window.navigator.userAgent,s=n.includes("Chrome");/\b(iPad|iPhone|iPod|OS X)\b/.test(n)&&!/Edge/.test(n)&&/WebKit/.test(n)&&window.MSStream;let o=Symbol()}}]);