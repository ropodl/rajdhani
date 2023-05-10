import{$ as we,a0 as xe,r as re,a1 as be,L as Be,H as Ee,n as V,z as j,h as m,s as y,k as b,N as Ce,y as ae,x as Oe,v as De,q as oe,A as F,i as Pe,M as Re,_ as Ge,Z as je}from"./app-c4c6d26d.js";import{h as Fe,i as Ze,f as qe}from"./mdi-8c63b7e9.js";import{b as We,V as $e,a as ie}from"./VRow-9725f82a.js";import{a as Ue}from"./VOverlay-eba5d80b.js";import{a as Me,b as Ae,V as le}from"./VCard-449f740f.js";import{a as se,V as ze}from"./VBtn-060a901c.js";import{V as N}from"./VImg-7421936e.js";import"./color-d559a2fd.js";import"./lazy-35dee442.js";import"./easing-9f15041e.js";import"./createSimpleFunctional-a62c0568.js";import"./VAvatar-5696ca45.js";var p=function(){return p=Object.assign||function(t){for(var n,o=1,u=arguments.length;o<u;o++){n=arguments[o];for(var h in n)Object.prototype.hasOwnProperty.call(n,h)&&(t[h]=n[h])}return t},p.apply(this,arguments)};typeof window<"u"&&(window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),typeof window.CustomEvent!="function"&&(window.CustomEvent=function(t,n){n=n||{bubbles:!1,cancelable:!1,detail:null};var o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),o}));function Te(e,t){for(var n=e.length;n--;)if(e[n].pointerId===t.pointerId)return n;return-1}function he(e,t){var n;if(t.touches){n=0;for(var o=0,u=t.touches;o<u.length;o++){var h=u[o];h.pointerId=n++,he(e,h)}return}n=Te(e,t),n>-1&&e.splice(n,1),e.push(t)}function Je(e,t){if(t.touches){for(;e.length;)e.pop();return}var n=Te(e,t);n>-1&&e.splice(n,1)}function Se(e){e=e.slice(0);for(var t=e.pop(),n;n=e.pop();)t={clientX:(n.clientX-t.clientX)/2+t.clientX,clientY:(n.clientY-t.clientY)/2+t.clientY};return t}function ce(e){if(e.length<2)return 0;var t=e[0],n=e[1];return Math.sqrt(Math.pow(Math.abs(n.clientX-t.clientX),2)+Math.pow(Math.abs(n.clientY-t.clientY),2))}var k={down:"mousedown",move:"mousemove",up:"mouseup mouseleave"};typeof window<"u"&&(typeof window.PointerEvent=="function"?k={down:"pointerdown",move:"pointermove",up:"pointerup pointerleave pointercancel"}:typeof window.TouchEvent=="function"&&(k={down:"touchstart",move:"touchmove",up:"touchend touchcancel"}));function ue(e,t,n,o){k[e].split(" ").forEach(function(u){t.addEventListener(u,n,o)})}function de(e,t,n){k[e].split(" ").forEach(function(o){t.removeEventListener(o,n)})}var Ke=typeof document<"u"&&!!document.documentMode,fe;function Qe(){return fe||(fe=document.createElement("div").style)}var Ve=["webkit","moz","ms"],Z={};function me(e){if(Z[e])return Z[e];var t=Qe();if(e in t)return Z[e]=e;for(var n=e[0].toUpperCase()+e.slice(1),o=Ve.length;o--;){var u="".concat(Ve[o]).concat(n);if(u in t)return Z[e]=u}}function q(e,t){return parseFloat(t[me(e)])||0}function W(e,t,n){n===void 0&&(n=window.getComputedStyle(e));var o=t==="border"?"Width":"";return{left:q("".concat(t,"Left").concat(o),n),right:q("".concat(t,"Right").concat(o),n),top:q("".concat(t,"Top").concat(o),n),bottom:q("".concat(t,"Bottom").concat(o),n)}}function T(e,t,n){e.style[me(t)]=n}function He(e,t){var n=me("transform");T(e,"transition","".concat(n," ").concat(t.duration,"ms ").concat(t.easing))}function et(e,t,n){var o=t.x,u=t.y,h=t.scale,v=t.isSVG;if(T(e,"transform","scale(".concat(h,") translate(").concat(o,"px, ").concat(u,"px)")),v&&Ke){var g=window.getComputedStyle(e).getPropertyValue("transform");e.setAttribute("transform",g)}}function ve(e){var t=e.parentNode,n=window.getComputedStyle(e),o=window.getComputedStyle(t),u=e.getBoundingClientRect(),h=t.getBoundingClientRect();return{elem:{style:n,width:u.width,height:u.height,top:u.top,bottom:u.bottom,left:u.left,right:u.right,margin:W(e,"margin",n),border:W(e,"border",n)},parent:{style:o,width:h.width,height:h.height,top:h.top,bottom:h.bottom,left:h.left,right:h.right,padding:W(t,"padding",o),border:W(t,"border",o)}}}function tt(e){var t=e.ownerDocument,n=e.parentNode;return t&&n&&t.nodeType===9&&n.nodeType===1&&t.documentElement.contains(n)}function nt(e){return(e.getAttribute("class")||"").trim()}function rt(e,t){return e.nodeType===1&&" ".concat(nt(e)," ").indexOf(" ".concat(t," "))>-1}function at(e,t){for(var n=e;n!=null;n=n.parentNode)if(rt(n,t.excludeClass)||t.exclude.indexOf(n)>-1)return!0;return!1}var ot=/^http:[\w\.\/]+svg$/;function it(e){return ot.test(e.namespaceURI)&&e.nodeName.toLowerCase()!=="svg"}function lt(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}var _e={animate:!1,canvas:!1,cursor:"move",disablePan:!1,disableZoom:!1,disableXAxis:!1,disableYAxis:!1,duration:200,easing:"ease-in-out",exclude:[],excludeClass:"panzoom-exclude",handleStartEvent:function(e){e.preventDefault(),e.stopPropagation()},maxScale:4,minScale:.125,overflow:"hidden",panOnlyWhenZoomed:!1,pinchAndPan:!1,relative:!1,setTransform:et,startX:0,startY:0,startScale:1,step:.3,touchAction:"none"};function Xe(e,t){if(!e)throw new Error("Panzoom requires an element as an argument");if(e.nodeType!==1)throw new Error("Panzoom requires an element with a nodeType of 1");if(!tt(e))throw new Error("Panzoom should be called on elements that have been attached to the DOM");t=p(p({},_e),t);var n=it(e),o=e.parentNode;o.style.overflow=t.overflow,o.style.userSelect="none",o.style.touchAction=t.touchAction,(t.canvas?o:e).style.cursor=t.cursor,e.style.userSelect="none",e.style.touchAction=t.touchAction,T(e,"transformOrigin",typeof t.origin=="string"?t.origin:n?"0 0":"50% 50%");function u(){o.style.overflow="",o.style.userSelect="",o.style.touchAction="",o.style.cursor="",e.style.cursor="",e.style.userSelect="",e.style.touchAction="",T(e,"transformOrigin","")}function h(r){r===void 0&&(r={});for(var i in r)r.hasOwnProperty(i)&&(t[i]=r[i]);(r.hasOwnProperty("cursor")||r.hasOwnProperty("canvas"))&&(o.style.cursor=e.style.cursor="",(t.canvas?o:e).style.cursor=t.cursor),r.hasOwnProperty("overflow")&&(o.style.overflow=r.overflow),r.hasOwnProperty("touchAction")&&(o.style.touchAction=r.touchAction,e.style.touchAction=r.touchAction)}var v=0,g=0,f=1,M=!1;I(t.startScale,{animate:!1,force:!0}),setTimeout(function(){_(t.startX,t.startY,{animate:!1,force:!0})});function E(r,i,s){if(!s.silent){var d=new CustomEvent(r,{detail:i});e.dispatchEvent(d)}}function C(r,i,s){var d={x:v,y:g,scale:f,isSVG:n,originalEvent:s};return requestAnimationFrame(function(){typeof i.animate=="boolean"&&(i.animate?He(e,i):T(e,"transition","none")),i.setTransform(e,d,i),E(r,d,i),E("panzoomchange",d,i)}),d}function x(r,i,s,d){var a=p(p({},t),d),c={x:v,y:g,opts:a};if(!a.force&&(a.disablePan||a.panOnlyWhenZoomed&&f===a.startScale))return c;if(r=parseFloat(r),i=parseFloat(i),a.disableXAxis||(c.x=(a.relative?v:0)+r),a.disableYAxis||(c.y=(a.relative?g:0)+i),a.contain){var l=ve(e),w=l.elem.width/f,P=l.elem.height/f,X=w*s,Y=P*s,z=(X-w)/2,S=(Y-P)/2;if(a.contain==="inside"){var H=(-l.elem.margin.left-l.parent.padding.left+z)/s,ee=(l.parent.width-X-l.parent.padding.left-l.elem.margin.left-l.parent.border.left-l.parent.border.right+z)/s;c.x=Math.max(Math.min(c.x,ee),H);var te=(-l.elem.margin.top-l.parent.padding.top+S)/s,ne=(l.parent.height-Y-l.parent.padding.top-l.elem.margin.top-l.parent.border.top-l.parent.border.bottom+S)/s;c.y=Math.max(Math.min(c.y,ne),te)}else if(a.contain==="outside"){var H=(-(X-l.parent.width)-l.parent.padding.left-l.parent.border.left-l.parent.border.right+z)/s,ee=(z-l.parent.padding.left)/s;c.x=Math.max(Math.min(c.x,ee),H);var te=(-(Y-l.parent.height)-l.parent.padding.top-l.parent.border.top-l.parent.border.bottom+S)/s,ne=(S-l.parent.padding.top)/s;c.y=Math.max(Math.min(c.y,ne),te)}}return a.roundPixels&&(c.x=Math.round(c.x),c.y=Math.round(c.y)),c}function A(r,i){var s=p(p({},t),i),d={scale:f,opts:s};if(!s.force&&s.disableZoom)return d;var a=t.minScale,c=t.maxScale;if(s.contain){var l=ve(e),w=l.elem.width/f,P=l.elem.height/f;if(w>1&&P>1){var X=l.parent.width-l.parent.border.left-l.parent.border.right,Y=l.parent.height-l.parent.border.top-l.parent.border.bottom,z=X/w,S=Y/P;t.contain==="inside"?c=Math.min(c,z,S):t.contain==="outside"&&(a=Math.max(a,z,S))}}return d.scale=Math.min(Math.max(r,a),c),d}function _(r,i,s,d){var a=x(r,i,f,s);return v!==a.x||g!==a.y?(v=a.x,g=a.y,C("panzoompan",a.opts,d)):{x:v,y:g,scale:f,isSVG:n,originalEvent:d}}function I(r,i,s){var d=A(r,i),a=d.opts;if(!(!a.force&&a.disableZoom)){r=d.scale;var c=v,l=g;if(a.focal){var w=a.focal;c=(w.x/r-w.x/f+v*r)/r,l=(w.y/r-w.y/f+g*r)/r}var P=x(c,l,r,{relative:!1,force:!0});return v=P.x,g=P.y,f=r,C("panzoomzoom",a,s)}}function pe(r,i){var s=p(p(p({},t),{animate:!0}),i);return I(f*Math.exp((r?1:-1)*s.step),s)}function Ye(r){return pe(!0,r)}function Ne(r){return pe(!1,r)}function $(r,i,s,d){var a=ve(e),c={width:a.parent.width-a.parent.padding.left-a.parent.padding.right-a.parent.border.left-a.parent.border.right,height:a.parent.height-a.parent.padding.top-a.parent.padding.bottom-a.parent.border.top-a.parent.border.bottom},l=i.clientX-a.parent.left-a.parent.padding.left-a.parent.border.left-a.elem.margin.left,w=i.clientY-a.parent.top-a.parent.padding.top-a.parent.border.top-a.elem.margin.top;n||(l-=a.elem.width/f/2,w-=a.elem.height/f/2);var P={x:l/c.width*(c.width*r),y:w/c.height*(c.height*r)};return I(r,p(p({},s),{animate:!1,focal:P}),d)}function ke(r,i){r.preventDefault();var s=p(p(p({},t),i),{animate:!1}),d=r.deltaY===0&&r.deltaX?r.deltaX:r.deltaY,a=d<0?1:-1,c=A(f*Math.exp(a*s.step/3),s).scale;return $(c,r,s,r)}function Ie(r){var i=p(p(p({},t),{animate:!0,force:!0}),r);f=A(i.startScale,i).scale;var s=x(i.startX,i.startY,f,i);return v=s.x,g=s.y,C("panzoomreset",i)}var L,B,D,R,ge,G,O=[];function U(r){if(!at(r.target,t)){he(O,r),M=!0,t.handleStartEvent(r),L=v,B=g,E("panzoomstart",{x:v,y:g,scale:f,isSVG:n,originalEvent:r},t);var i=Se(O);D=i.clientX,R=i.clientY,ge=f,G=ce(O)}}function J(r){if(!(!M||L===void 0||B===void 0||D===void 0||R===void 0)){he(O,r);var i=Se(O),s=O.length>1,d=f;if(s){G===0&&(G=ce(O));var a=ce(O)-G;d=A(a*t.step/80+ge).scale,$(d,i,{animate:!1},r)}(!s||t.pinchAndPan)&&_(L+(i.clientX-D)/d,B+(i.clientY-R)/d,{animate:!1},r)}}function K(r){O.length===1&&E("panzoomend",{x:v,y:g,scale:f,isSVG:n,originalEvent:r},t),Je(O,r),M&&(M=!1,L=B=D=R=void 0)}var Q=!1;function ye(){Q||(Q=!0,ue("down",t.canvas?o:e,U),ue("move",document,J,{passive:!0}),ue("up",document,K,{passive:!0}))}function Le(){Q=!1,de("down",t.canvas?o:e,U),de("move",document,J),de("up",document,K)}return t.noBind||ye(),{bind:ye,destroy:Le,eventNames:k,getPan:function(){return{x:v,y:g}},getScale:function(){return f},getOptions:function(){return lt(t)},handleDown:U,handleMove:J,handleUp:K,pan:_,reset:Ie,resetStyle:u,setOptions:h,setStyle:function(r,i){return T(e,r,i)},zoom:I,zoomIn:Ye,zoomOut:Ne,zoomToPoint:$,zoomWithWheel:ke}}Xe.defaultOptions=_e;const st={key:0,class:"d-flex flex-wrap justify-space-between"},ct={id:"scene",style:{height:"calc(100vh - 80px)"}},ut={class:"d-flex"},Ct={__name:"news_detail",props:{currentnews:Object,currentnewsdate:String,latest:Object,trending:Object,related:Object,advertisements:Object},setup(e){const t=we(()=>xe(()=>import("./tabnews-096bf5ea.js"),["assets/tabnews-096bf5ea.js","assets/app-c4c6d26d.js","assets/app-93128a73.css","assets/mdi-8c63b7e9.js","assets/moment-fbc5633a.js","assets/VCard-449f740f.js","assets/createSimpleFunctional-a62c0568.js","assets/VBtn-060a901c.js","assets/color-d559a2fd.js","assets/VBtn-747fb7db.css","assets/VAvatar-5696ca45.js","assets/VImg-7421936e.js","assets/VImg-3a095760.css","assets/VAvatar-ab88a885.css","assets/VCard-f7bfd9e0.css","assets/VTabs-31df2c68.js","assets/lazy-35dee442.js","assets/index-b00e6e0c.js","assets/easing-9f15041e.js","assets/VTabs-303294de.css","assets/VList-6159e447.js","assets/VListItem-20742055.js","assets/VListItem-ffbe5b16.css","assets/VList-5ec505d6.css"])),n=we(()=>xe(()=>import("./relatednews-c643d967.js"),["assets/relatednews-c643d967.js","assets/app-c4c6d26d.js","assets/app-93128a73.css","assets/VRow-9725f82a.js","assets/VRow-37f80755.css","assets/VCard-449f740f.js","assets/createSimpleFunctional-a62c0568.js","assets/VBtn-060a901c.js","assets/color-d559a2fd.js","assets/VBtn-747fb7db.css","assets/VAvatar-5696ca45.js","assets/VImg-7421936e.js","assets/VImg-3a095760.css","assets/VAvatar-ab88a885.css","assets/VCard-f7bfd9e0.css","assets/VOverlay-eba5d80b.js","assets/lazy-35dee442.js","assets/easing-9f15041e.js","assets/VOverlay-2c01b8e6.css","assets/VHover-b733abeb.js"])),o=re(null);let u=re(null),h=be([]),v=re(!1),g=be([]);Be(()=>{f()});const f=()=>{Ee(()=>{const M=o.value.$el,E=M.getElementsByTagName("img");E.length>0&&Array.from(E).forEach((C,x)=>{console.log(C),g.push(M.getElementsByTagName("img")[x].alt),h.push(C.src),C.addEventListener("click",function(){u.value=x,v.value=!0,Ee(()=>{const A=document.getElementById("scene"),_=Xe(A,{maxScale:5});A.parentElement.addEventListener("wheel",_.zoomWithWheel),console.log(v.value)})})})})};return(M,E)=>(V(),j(Ce,null,[m(We,null,{default:y(()=>[m($e,null,{default:y(()=>[m(ie,{cols:"12",md:"9"},{default:y(()=>[ae("article",null,[m(Me,{class:"text-h3 font-weight-black text-wrap px-0",style:{"line-height":"4rem"},textContent:Oe(e.currentnews.title)},null,8,["textContent"]),m(Ae,{class:"px-0"},{default:y(()=>[m(se,{icon:b(Fe)},null,8,["icon"]),De(" "+Oe(e.currentnewsdate),1)]),_:1}),m(N,{eager:"",class:"rounded-lg align-start",src:e.currentnews.image},{default:y(()=>[e.currentnews.is_trending?(V(),oe(Me,{key:0},{default:y(()=>[m(ze,{icon:"",color:"grey-darken-4"},{default:y(()=>[m(se,{color:"red",icon:b(Ze)},null,8,["icon"])]),_:1})]),_:1})):F("",!0)]),_:1},8,["src"]),m(Ae,{ref_key:"dynamicContent",ref:o,class:"px-0 dynamic-content",innerHTML:e.currentnews.description},null,8,["innerHTML"])])]),_:1}),m(ie,{cols:"12",md:"3"},{default:y(()=>[e.advertisements.sm_ad[0]?(V(),j("div",st,[m(le,{class:"mb-3 w-100 h-100",href:e.advertisements.sm_ad[0].advertisement.url,target:"_blank","max-height":"290","max-width":"290"},{default:y(()=>[m(N,{src:e.advertisements.sm_ad[0].advertisement.image,alt:e.advertisements.sm_ad[0].advertisement.title},null,8,["src","alt"])]),_:1},8,["href"]),e.advertisements.sm_ad[1]?(V(),oe(le,{key:0,class:"mb-3 w-100 h-100",href:e.advertisements.sm_ad[1].advertisement.url,target:"_blank","max-height":"290","max-width":"290"},{default:y(()=>[m(N,{src:e.advertisements.sm_ad[1].advertisement.image,alt:e.advertisements.sm_ad[1].advertisement.title},null,8,["src","alt"])]),_:1},8,["href"])):F("",!0)])):F("",!0),m(b(t),{latest:e.latest,trending:e.trending},null,8,["latest","trending"])]),_:1}),e.related.length>0?(V(),oe(ie,{key:0,cols:"12"},{default:y(()=>[m(b(n),{related:e.related},null,8,["related"])]),_:1})):F("",!0)]),_:1})]),_:1}),m(Ue,{eager:"",persistent:"","no-click-animation":"",theme:"dark","model-value":b(v),"content-class":"w-100 gallery-content"},{default:y(()=>[m(ze,{icon:"",theme:"dark",color:"white",variant:"tonal",onClick:E[0]||(E[0]=C=>Pe(v)?v.value=!1:v=!1),style:{position:"absolute",top:"10px",right:"10px","z-index":"9999999999"}},{default:y(()=>[m(se,{icon:b(qe)},null,8,["icon"])]),_:1}),ae("div",ct,[m(N,{src:b(h)[b(u)]},null,8,["src"])]),m(le,{class:"w-100 d-flex align-center justify-center pa-4",height:"80",style:{position:"relative"}},{default:y(()=>[ae("ul",ut,[(V(!0),j(Ce,null,Re(b(h),(C,x)=>(V(),j("li",{class:Ge(["list-style-none",x+1>=b(h).length?"":"mr-3"]),style:je(b(u)==x?"border: 2px solid red":"border: 2px solid transparent")},[m(N,{height:"50",width:"100",src:C,class:"pa-1",onClick:A=>Pe(u)?u.value=x:u=x,style:{cursor:"pointer"}},null,8,["src","onClick"])],6))),256))])]),_:1})]),_:1},8,["model-value"])],64))}};export{Ct as default};