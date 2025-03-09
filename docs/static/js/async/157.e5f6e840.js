"use strict";(self.webpackChunkbored_capybara_web=self.webpackChunkbored_capybara_web||[]).push([["157"],{79:function(e,t,n){n.d(t,{G:()=>r});var l=n(569);function r(e,t,n){return function(r){n&&(r=n(r));let i=e.call(this);i.getAttribute(t)!==r&&(null!==r?(0,l.Q)(()=>{i.setAttribute(t,r)}):(0,l.Q)(()=>{i.removeAttribute(t)}))}}},98:function(e,t,n){n.d(t,{c:()=>r});var l=n(569);function r(e,t,n,r){return function(i){i?(n&&(i=n(i)),(0,l.Q)(()=>e.call(this).style.setProperty(t,i,r?"important":void 0))):(0,l.Q)(()=>e.call(this).style.removeProperty(t))}}},95:function(e,t,n){n.d(t,{o:()=>l});function l(e,t){let n,l;return()=>(l||(l=e()),l.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&n||(n=l.querySelector(t)),n)}},339:function(e,t,n){n.d(t,{d:()=>l});let l=(e,...t)=>String.raw({raw:e},...t)},391:function(e,t,n){n.d(t,{K:()=>l});function l(e,t){return function(n,l){if("method"===l.kind)l.addInitializer(function(){let l={handler:n,noDomMeasure:t};this.attributeChangedHandler?this.attributeChangedHandler[e]=l:this.attributeChangedHandler={[e]:l}});else if("field"===l.kind)return function(n){let l={handler:n,noDomMeasure:t};return this.attributeChangedHandler?this.attributeChangedHandler[e]=l:this.attributeChangedHandler={[e]:l},n};else throw Error(`[lynx-web-components] decorator type ${l.kind} is not supported`)}}},422:function(e,t,n){n.r(t),n.d(t,{XInput:()=>v});var l=n(150),r=n(616),i=n(339),a=n(95),s=n(391),o=n(79);let u=(()=>{let e,t,n,r,i,u,d=[],h=[],p=[],c=[],m=[],g=[],b=[],v=[],E=[];return class{static{let a="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;e=[(0,s.K)("confirm-type",!0)],t=[(0,s.K)("maxlength",!0)],n=[(0,s.K)("readonly",!0)],r=[(0,s.K)("type",!0)],u=[(0,s.K)("ios-spell-check",!0),(0,s.K)("spell-check",!0)],(0,l.xE)(this,i={value:(0,l.Ho)(function(e){let t="text",n="text";"digit"===e?(t="numeric",n="number"):"number"===e?(t="decimal",n="number"):"email"===e?t="email":"tel"===e?t="tel":n=e,this.#e(t),this.#t(n)},"#handleType")},r,{kind:"method",name:"#handleType",static:!1,private:!0,access:{has:e=>#n in e,get:e=>e.#n},metadata:a},null,d),(0,l.xE)(null,null,e,{kind:"field",name:"#handlerConfirmType",static:!1,private:!0,access:{has:e=>#l in e,get:e=>e.#l,set:(e,t)=>{e.#l=t}},metadata:a},h,p),(0,l.xE)(null,null,t,{kind:"field",name:"#handlerMaxlength",static:!1,private:!0,access:{has:e=>#r in e,get:e=>e.#r,set:(e,t)=>{e.#r=t}},metadata:a},c,m),(0,l.xE)(null,null,n,{kind:"field",name:"#handleReadonly",static:!1,private:!0,access:{has:e=>#i in e,get:e=>e.#i,set:(e,t)=>{e.#i=t}},metadata:a},g,b),(0,l.xE)(null,null,u,{kind:"field",name:"#handleSpellCheck",static:!1,private:!0,access:{has:e=>#a in e,get:e=>e.#a,set:(e,t)=>{e.#a=t}},metadata:a},v,E),a&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a})}static observedAttributes=["confirm-type","maxlength","readonly","type","ios-spell-check","spell-check"];#s=(0,l.Co)(this,d);#o="text";#u=(0,a.o)(()=>this.#s.shadowRoot,"#input");#l=(0,l.Co)(this,h,(0,o.G)(this.#u,"enterkeyhint",e=>null===e?"send":e));#r=((0,l.Co)(this,p),(0,l.Co)(this,c,(0,o.G)(this.#u,"maxlength",e=>null===e?"140":e)));#i=((0,l.Co)(this,m),(0,l.Co)(this,g,(0,o.G)(this.#u,"readonly",e=>null!==e?"":null)));#t=((0,l.Co)(this,b),(0,o.G)(this.#u,"type"));#e=(0,o.G)(this.#u,"inputmode");get #n(){return i.value}#a=(0,l.Co)(this,v,(0,o.G)(this.#u,"spellcheck",e=>null===e?"false":"true"));constructor(e){(0,l.Co)(this,E),this.#s=e}}})();var d=n(98);let h=(()=>{let e,t,n,r,i;let u=[],h=[],p=[],c=[],m=[],g=[],b=[],v=[],E=[],f=[];return class{static{let a="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;e=[(0,s.K)("placeholder",!0)],t=[(0,s.K)("placeholder-color",!0)],n=[(0,s.K)("placeholder-font-family",!0)],r=[(0,s.K)("placeholder-font-size",!0)],i=[(0,s.K)("placeholder-font-weight",!0)],(0,l.xE)(null,null,e,{kind:"field",name:"#handlerPlaceholder",static:!1,private:!0,access:{has:e=>#d in e,get:e=>e.#d,set:(e,t)=>{e.#d=t}},metadata:a},u,h),(0,l.xE)(null,null,t,{kind:"field",name:"#handlerPlaceholderColor",static:!1,private:!0,access:{has:e=>#h in e,get:e=>e.#h,set:(e,t)=>{e.#h=t}},metadata:a},p,c),(0,l.xE)(null,null,n,{kind:"field",name:"#handlerPlaceholderFontFamily",static:!1,private:!0,access:{has:e=>#p in e,get:e=>e.#p,set:(e,t)=>{e.#p=t}},metadata:a},m,g),(0,l.xE)(null,null,r,{kind:"field",name:"#handlerPlaceholderFontSize",static:!1,private:!0,access:{has:e=>#c in e,get:e=>e.#c,set:(e,t)=>{e.#c=t}},metadata:a},b,v),(0,l.xE)(null,null,i,{kind:"field",name:"#handlerPlaceholderFontWeight",static:!1,private:!0,access:{has:e=>#m in e,get:e=>e.#m,set:(e,t)=>{e.#m=t}},metadata:a},E,f),a&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a})}static observedAttributes=["placeholder","placeholder-color","placeholder-font-family","placeholder-font-size","placeholder-font-weight"];#s;#u=(0,a.o)(()=>this.#s.shadowRoot,"#input");#d=(0,l.Co)(this,u,(0,o.G)(this.#u,"placeholder"));#h=((0,l.Co)(this,h),(0,l.Co)(this,p,(0,d.c)(this.#u,"--placeholder-color",void 0,!0)));#p=((0,l.Co)(this,c),(0,l.Co)(this,m,(0,d.c)(this.#u,"--placeholder-font-family",void 0,!0)));#c=((0,l.Co)(this,g),(0,l.Co)(this,b,(0,d.c)(this.#u,"--placeholder-font-size",void 0,!0)));#m=((0,l.Co)(this,v),(0,l.Co)(this,E,(0,d.c)(this.#u,"--placeholder-font-weight",void 0,!0)));constructor(e){(0,l.Co)(this,f),this.#s=e}}})(),p=(()=>{let e,t,n,r=[],i=[],u=[];return class{static{let a="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;e=[(0,s.K)("value",!1)],n=[(0,s.K)("disabled",!0)],(0,l.xE)(this,t={value:(0,l.Ho)(function(e){if(e){let t=parseFloat(this.#s.getAttribute("maxlength")??"");isNaN(t)||(e=e.substring(0,t))}else e="";let t=this.#u();t.value!==e&&(t.value=e)},"#handleValue")},e,{kind:"method",name:"#handleValue",static:!1,private:!0,access:{has:e=>#g in e,get:e=>e.#g},metadata:a},null,r),(0,l.xE)(null,null,n,{kind:"field",name:"#handleDisabled",static:!1,private:!0,access:{has:e=>#b in e,get:e=>e.#b,set:(e,t)=>{e.#b=t}},metadata:a},i,u),a&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a})}static observedAttributes=["value","disabled"];#s=(0,l.Co)(this,r);#u=(0,a.o)(()=>this.#s.shadowRoot,"#input");get #g(){return t.value}#b=(0,l.Co)(this,i,(0,o.G)(this.#u,"disabled",e=>null!==e?"":null));constructor(e){(0,l.Co)(this,u),this.#s=e}}})();var c=n(811),m=n(644);let g=(()=>{let e,t,n,r,i=[];return class{static{let a="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;e=[(0,s.K)("x-enable-input-event",!0)],n=[(0,s.K)("send-composing-input",!0)],(0,l.xE)(this,t={value:(0,l.Ho)(function(e){let t=this.#u();null!==e?(t.addEventListener("input",this.#v,{passive:!0}),t.addEventListener("compositionend",this.#E,{passive:!0})):(t.addEventListener("input",this.#v,{passive:!0}),t.removeEventListener("compositionend",this.#E))},"#handleEnableConfirmEvent")},e,{kind:"method",name:"#handleEnableConfirmEvent",static:!1,private:!0,access:{has:e=>#f in e,get:e=>e.#f},metadata:a},null,i),(0,l.xE)(this,r={value:(0,l.Ho)(function(e){this.#x=null!==e},"#handleSendComposingInput")},n,{kind:"method",name:"#handleSendComposingInput",static:!1,private:!0,access:{has:e=>#y in e,get:e=>e.#y},metadata:a},null,i),a&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a})}static observedAttributes=["x-enable-input-event","send-composing-input"];#s=(0,l.Co)(this,i);#x=!1;#u=(0,a.o)(()=>this.#s.shadowRoot,"#input");#C=(0,a.o)(()=>this.#s.shadowRoot,"#form");get #f(){return t.value}get #y(){return r.value}#I=e=>{let t=m.p[e.type]??e.type;this.#s.dispatchEvent(new CustomEvent(t,{...c.H,detail:{value:this.#u().value}}))};#v=e=>{let t=this.#u(),n=t.value,l=e.isComposing;(!l||this.#x)&&this.#s.dispatchEvent(new CustomEvent("input",{...c.H,detail:{value:n,textLength:n.length,cursor:t.selectionStart,isComposing:l}}))};#E=()=>{let e=this.#u(),t=e.value;this.#x||this.#s.dispatchEvent(new CustomEvent("input",{...c.H,detail:{value:t,textLength:t.length,cursor:e.selectionStart}}))};#S=e=>{e.target===this.#u()&&"number"==typeof e.detail&&e.stopImmediatePropagation()};constructor(e){this.#s=e;let t=this.#u(),n=this.#C();t.addEventListener("blur",this.#I,{passive:!0}),t.addEventListener("focus",this.#I,{passive:!0}),n.addEventListener("submit",this.#I,{passive:!0}),n.addEventListener("input",this.#S,{passive:!0})}}})();var b=n(232);let v=(()=>{let e,t,n=[(0,r.w)("x-input",[b.L,h,p,u,g],(0,i.d)` <style>
      #input:focus {
        outline: none;
      }
      #form {
        display: none;
      }
    </style>
    <form id="form" part="form" method="dialog">
      <input
        id="input"
        part="input"
        step="any"
        type="text"
        inputmode="text"
        spell-check="true"
      />
    </form>`)],s=[],o=HTMLElement;return class extends o{static{t=this}static{let r="function"==typeof Symbol&&Symbol.metadata?Object.create(o[Symbol.metadata]??null):void 0;(0,l.xE)(null,e={value:t},n,{kind:"class",name:t.name,metadata:r},null,s),t=e.value,r&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:r}),(0,l.Co)(t,s)}#P=(0,a.o)(()=>this.shadowRoot,"#input");addText(e){let{text:t}=e,n=this.#P(),l=n.selectionStart;if(null===l)n.value=t;else{let e=n.value;n.value=e.slice(0,l)+t+e.slice(l)}}controlKeyBoard(e){let{action:t}=e;0===t||1===t?this.focus():(2===t||3===t)&&this.blur()}setValue(e){let t;let n=this.#P();n.value=e.value,(t=e.index)&&n.setSelectionRange(t,t)}sendDelEvent(e){let{action:t,length:n}=e,l=this.#P();1===t&&(n=1);let r=l.selectionStart;if(null===r){let e=l.value;l.value=l.value.substring(0,e.length-n)}else{let e=l.value;l.value=e.slice(0,r-n)+e.slice(r)}}setInputFilter(e){this.#P().setAttribute("pattern",e.pattern)}select(){let e=this.#P();e.setSelectionRange(0,e.value.length)}setSelectionRange(e){this.#P().setSelectionRange(e.selectionStart,e.selectionEnd)}focus(e){this.#P().focus(e)}blur(){this.#P().blur()}connectedCallback(){let e=this.#P();null===this.getAttribute("confirm-type")&&e.setAttribute("confirm-type","send"),null===this.getAttribute("maxlength")&&e.setAttribute("maxlength","140")}},t})()},232:function(e,t,n){function l(e,t,n){if(t){if((t=t.trim()).endsWith("px"))return Number(t.substring(0,t.length-2));if(t.endsWith("%")){let l=Number(t.substring(0,t.length-1)),{width:r,height:i}=e.getBoundingClientRect();return(n?r:i)*l/100}}return 0}n.d(t,{L:()=>a});var r=n(811),i=n(908);class a{static observedAttributes=["x-enable-uiappear-event","x-enable-uidisappear-event","exposure-id","exposure-area","exposure-screen-margin-top","exposure-screen-margin-right","exposure-screen-margin-bottom","exposure-screen-margin-left","exposure-ui-margin-top","exposure-ui-margin-right","exposure-ui-margin-bottom","exposure-ui-margin-left"];#A;#k;#w=!1;#M;get #O(){return null!==this.#A.getAttribute("x-enable-uiappear-event")||null!==this.#A.getAttribute("x-enable-uidisappear-event")||null!==this.#A.getAttribute("exposure-id")}constructor(e){this.#A=e}onExposureParamsChanged=()=>{this.#k||(this.#k=Promise.resolve().then(()=>{this.#F(),this.#k=void 0}))};onExposureIdChanged(e,t){t&&this.#O&&this.#T({isIntersecting:!1},t),this.onExposureParamsChanged()}attributeChangedHandler=new Proxy(this,{get(e,t){if(a.observedAttributes.includes(t))return"exposure-id"===t?{handler:e.onExposureIdChanged,noDomMeasure:!0}:{handler:e.onExposureParamsChanged,noDomMeasure:!0}}});#F(){let e={exposureID:this.#A.getAttribute("exposure-id"),exposureArea:this.#A.getAttribute("exposure-area"),exposureScene:this.#A.getAttribute("exposure-scene"),exposureScreenMarginTop:this.#A.getAttribute("exposure-screen-margin-top"),exposureScreenMarginRight:this.#A.getAttribute("exposure-screen-margin-right"),exposureScreenMarginBottom:this.#A.getAttribute("exposure-screen-margin-bottom"),exposureScreenMarginLeft:this.#A.getAttribute("exposure-screen-margin-left"),exposureUIMarginTop:this.#A.getAttribute("exposure-ui-margin-top"),exposureUIMarginRight:this.#A.getAttribute("exposure-ui-margin-right"),exposureUIMarginBottom:this.#A.getAttribute("exposure-ui-margin-bottom"),exposureUIMarginLeft:this.#A.getAttribute("exposure-ui-margin-left")};if(this.#O){if(IntersectionObserver){let t={top:l(this.#A,e.exposureUIMarginTop),right:l(this.#A,e.exposureUIMarginRight,!0),bottom:l(this.#A,e.exposureUIMarginBottom),left:l(this.#A,e.exposureUIMarginLeft,!0)},n={top:l(this.#A,e.exposureScreenMarginTop),right:l(this.#A,e.exposureScreenMarginRight,!0),bottom:l(this.#A,e.exposureScreenMarginBottom),left:l(this.#A,e.exposureScreenMarginLeft,!0)},r={top:(t.bottom?-1:1)*(n.top-t.bottom),right:(t.left?-1:1)*(n.right-t.left),bottom:(t.top?-1:1)*(n.bottom-t.top),left:(t.right?-1:1)*(n.left-t.right)},a=this.#A.getAttribute("exposure-area"),s=`${r.top}px ${r.right}px ${r.bottom}px ${r.left}px`,o=a?parseFloat(a)/100:0;this.#M&&this.#M.disconnect();let u=this.#A.parentElement;for(;u;){if(u[i.N0]){u=u[i.N0];break}u=u.parentElement}this.#w=!1,this.#M=new IntersectionObserver(([e])=>{e&&(e.isIntersecting&&(this.#w=!0),this.#T(e))},{rootMargin:s,threshold:o,root:u}),this.#M.observe(this.#A)}}else this.disableExposure()}#T(e,t){if(!this.#w)return;let n=t??this.#A.getAttribute("exposure-id")??"",l=this.#A.getAttribute("exposure-scene")??"",i={"exposure-id":n,"exposure-scene":l,exposureID:n,exposureScene:l},a=new CustomEvent(e.isIntersecting?"uiappear":"uidisappear",{...r.H,detail:i}),s=new CustomEvent(e.isIntersecting?"exposure":"disexposure",{bubbles:!0,composed:!1,cancelable:!1,detail:i});Object.assign(a,i),this.#A.dispatchEvent(a),this.#A.dispatchEvent(s)}disableExposure(){this.#M&&(this.#M.disconnect(),this.#M=void 0)}}},811:function(e,t,n){n.d(t,{H:()=>l});let l={bubbles:!1,composed:!1,cancelable:!0}},908:function(e,t,n){n.d(t,{N0:()=>a,QP:()=>l,mJ:()=>i});let l="onscrollend"in document,r=window.navigator.userAgent,i=r.includes("Chrome");/\b(iPad|iPhone|iPod|OS X)\b/.test(r)&&!/Edge/.test(r)&&/WebKit/.test(r)&&window.MSStream;let a=Symbol()},644:function(e,t,n){n.d(t,{p:()=>l});let l={submit:"confirm",blur:"lynxblur",focus:"lynxfocus"}}}]);