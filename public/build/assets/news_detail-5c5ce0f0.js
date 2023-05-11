import{d as ge,_ as ye,r as ne,X as we,z as Ie,Y as xe,b as T,m as j,f as m,e as x,V as Le,h as re,k as ae,J as Be,t as be,L as Ee,D as Ce,u as P,j as De,v as N,x as oe,c as Oe,p as ie,q as Re,n as Ge,i as Pe,F as Ae,A as je,S as Fe,P as Ze,Z as qe}from"./app-51bffb8a.js";import{g as We,e as Ue}from"./mdi-74b5fd1c.js";var p=function(){return p=Object.assign||function(t){for(var n,o=1,u=arguments.length;o<u;o++){n=arguments[o];for(var h in n)Object.prototype.hasOwnProperty.call(n,h)&&(t[h]=n[h])}return t},p.apply(this,arguments)};typeof window<"u"&&(window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),typeof window.CustomEvent!="function"&&(window.CustomEvent=function(t,n){n=n||{bubbles:!1,cancelable:!1,detail:null};var o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),o}));function ze(e,t){for(var n=e.length;n--;)if(e[n].pointerId===t.pointerId)return n;return-1}function fe(e,t){var n;if(t.touches){n=0;for(var o=0,u=t.touches;o<u.length;o++){var h=u[o];h.pointerId=n++,fe(e,h)}return}n=ze(e,t),n>-1&&e.splice(n,1),e.push(t)}function $e(e,t){if(t.touches){for(;e.length;)e.pop();return}var n=ze(e,t);n>-1&&e.splice(n,1)}function Me(e){e=e.slice(0);for(var t=e.pop(),n;n=e.pop();)t={clientX:(n.clientX-t.clientX)/2+t.clientX,clientY:(n.clientY-t.clientY)/2+t.clientY};return t}function le(e){if(e.length<2)return 0;var t=e[0],n=e[1];return Math.sqrt(Math.pow(Math.abs(n.clientX-t.clientX),2)+Math.pow(Math.abs(n.clientY-t.clientY),2))}var k={down:"mousedown",move:"mousemove",up:"mouseup mouseleave"};typeof window<"u"&&(typeof window.PointerEvent=="function"?k={down:"pointerdown",move:"pointermove",up:"pointerup pointerleave pointercancel"}:typeof window.TouchEvent=="function"&&(k={down:"touchstart",move:"touchmove",up:"touchend touchcancel"}));function se(e,t,n,o){k[e].split(" ").forEach(function(u){t.addEventListener(u,n,o)})}function ce(e,t,n){k[e].split(" ").forEach(function(o){t.removeEventListener(o,n)})}var Je=typeof document<"u"&&!!document.documentMode,ue;function Ke(){return ue||(ue=document.createElement("div").style)}var Se=["webkit","moz","ms"],F={};function ve(e){if(F[e])return F[e];var t=Ke();if(e in t)return F[e]=e;for(var n=e[0].toUpperCase()+e.slice(1),o=Se.length;o--;){var u="".concat(Se[o]).concat(n);if(u in t)return F[e]=u}}function Z(e,t){return parseFloat(t[ve(e)])||0}function q(e,t,n){n===void 0&&(n=window.getComputedStyle(e));var o=t==="border"?"Width":"";return{left:Z("".concat(t,"Left").concat(o),n),right:Z("".concat(t,"Right").concat(o),n),top:Z("".concat(t,"Top").concat(o),n),bottom:Z("".concat(t,"Bottom").concat(o),n)}}function V(e,t,n){e.style[ve(t)]=n}function Qe(e,t){var n=ve("transform");V(e,"transition","".concat(n," ").concat(t.duration,"ms ").concat(t.easing))}function He(e,t,n){var o=t.x,u=t.y,h=t.scale,v=t.isSVG;if(V(e,"transform","scale(".concat(h,") translate(").concat(o,"px, ").concat(u,"px)")),v&&Je){var g=window.getComputedStyle(e).getPropertyValue("transform");e.setAttribute("transform",g)}}function de(e){var t=e.parentNode,n=window.getComputedStyle(e),o=window.getComputedStyle(t),u=e.getBoundingClientRect(),h=t.getBoundingClientRect();return{elem:{style:n,width:u.width,height:u.height,top:u.top,bottom:u.bottom,left:u.left,right:u.right,margin:q(e,"margin",n),border:q(e,"border",n)},parent:{style:o,width:h.width,height:h.height,top:h.top,bottom:h.bottom,left:h.left,right:h.right,padding:q(t,"padding",o),border:q(t,"border",o)}}}function et(e){var t=e.ownerDocument,n=e.parentNode;return t&&n&&t.nodeType===9&&n.nodeType===1&&t.documentElement.contains(n)}function tt(e){return(e.getAttribute("class")||"").trim()}function nt(e,t){return e.nodeType===1&&" ".concat(tt(e)," ").indexOf(" ".concat(t," "))>-1}function rt(e,t){for(var n=e;n!=null;n=n.parentNode)if(nt(n,t.excludeClass)||t.exclude.indexOf(n)>-1)return!0;return!1}var at=/^http:[\w\.\/]+svg$/;function ot(e){return at.test(e.namespaceURI)&&e.nodeName.toLowerCase()!=="svg"}function it(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}var Te={animate:!1,canvas:!1,cursor:"move",disablePan:!1,disableZoom:!1,disableXAxis:!1,disableYAxis:!1,duration:200,easing:"ease-in-out",exclude:[],excludeClass:"panzoom-exclude",handleStartEvent:function(e){e.preventDefault(),e.stopPropagation()},maxScale:4,minScale:.125,overflow:"hidden",panOnlyWhenZoomed:!1,pinchAndPan:!1,relative:!1,setTransform:He,startX:0,startY:0,startScale:1,step:.3,touchAction:"none"};function Ve(e,t){if(!e)throw new Error("Panzoom requires an element as an argument");if(e.nodeType!==1)throw new Error("Panzoom requires an element with a nodeType of 1");if(!et(e))throw new Error("Panzoom should be called on elements that have been attached to the DOM");t=p(p({},Te),t);var n=ot(e),o=e.parentNode;o.style.overflow=t.overflow,o.style.userSelect="none",o.style.touchAction=t.touchAction,(t.canvas?o:e).style.cursor=t.cursor,e.style.userSelect="none",e.style.touchAction=t.touchAction,V(e,"transformOrigin",typeof t.origin=="string"?t.origin:n?"0 0":"50% 50%");function u(){o.style.overflow="",o.style.userSelect="",o.style.touchAction="",o.style.cursor="",e.style.cursor="",e.style.userSelect="",e.style.touchAction="",V(e,"transformOrigin","")}function h(r){r===void 0&&(r={});for(var i in r)r.hasOwnProperty(i)&&(t[i]=r[i]);(r.hasOwnProperty("cursor")||r.hasOwnProperty("canvas"))&&(o.style.cursor=e.style.cursor="",(t.canvas?o:e).style.cursor=t.cursor),r.hasOwnProperty("overflow")&&(o.style.overflow=r.overflow),r.hasOwnProperty("touchAction")&&(o.style.touchAction=r.touchAction,e.style.touchAction=r.touchAction)}var v=0,g=0,f=1,A=!1;I(t.startScale,{animate:!1,force:!0}),setTimeout(function(){_(t.startX,t.startY,{animate:!1,force:!0})});function b(r,i,s){if(!s.silent){var d=new CustomEvent(r,{detail:i});e.dispatchEvent(d)}}function E(r,i,s){var d={x:v,y:g,scale:f,isSVG:n,originalEvent:s};return requestAnimationFrame(function(){typeof i.animate=="boolean"&&(i.animate?Qe(e,i):V(e,"transition","none")),i.setTransform(e,d,i),b(r,d,i),b("panzoomchange",d,i)}),d}function w(r,i,s,d){var a=p(p({},t),d),c={x:v,y:g,opts:a};if(!a.force&&(a.disablePan||a.panOnlyWhenZoomed&&f===a.startScale))return c;if(r=parseFloat(r),i=parseFloat(i),a.disableXAxis||(c.x=(a.relative?v:0)+r),a.disableYAxis||(c.y=(a.relative?g:0)+i),a.contain){var l=de(e),y=l.elem.width/f,O=l.elem.height/f,X=y*s,Y=O*s,S=(X-y)/2,z=(Y-O)/2;if(a.contain==="inside"){var Q=(-l.elem.margin.left-l.parent.padding.left+S)/s,H=(l.parent.width-X-l.parent.padding.left-l.elem.margin.left-l.parent.border.left-l.parent.border.right+S)/s;c.x=Math.max(Math.min(c.x,H),Q);var ee=(-l.elem.margin.top-l.parent.padding.top+z)/s,te=(l.parent.height-Y-l.parent.padding.top-l.elem.margin.top-l.parent.border.top-l.parent.border.bottom+z)/s;c.y=Math.max(Math.min(c.y,te),ee)}else if(a.contain==="outside"){var Q=(-(X-l.parent.width)-l.parent.padding.left-l.parent.border.left-l.parent.border.right+S)/s,H=(S-l.parent.padding.left)/s;c.x=Math.max(Math.min(c.x,H),Q);var ee=(-(Y-l.parent.height)-l.parent.padding.top-l.parent.border.top-l.parent.border.bottom+z)/s,te=(z-l.parent.padding.top)/s;c.y=Math.max(Math.min(c.y,te),ee)}}return a.roundPixels&&(c.x=Math.round(c.x),c.y=Math.round(c.y)),c}function M(r,i){var s=p(p({},t),i),d={scale:f,opts:s};if(!s.force&&s.disableZoom)return d;var a=t.minScale,c=t.maxScale;if(s.contain){var l=de(e),y=l.elem.width/f,O=l.elem.height/f;if(y>1&&O>1){var X=l.parent.width-l.parent.border.left-l.parent.border.right,Y=l.parent.height-l.parent.border.top-l.parent.border.bottom,S=X/y,z=Y/O;t.contain==="inside"?c=Math.min(c,S,z):t.contain==="outside"&&(a=Math.max(a,S,z))}}return d.scale=Math.min(Math.max(r,a),c),d}function _(r,i,s,d){var a=w(r,i,f,s);return v!==a.x||g!==a.y?(v=a.x,g=a.y,E("panzoompan",a.opts,d)):{x:v,y:g,scale:f,isSVG:n,originalEvent:d}}function I(r,i,s){var d=M(r,i),a=d.opts;if(!(!a.force&&a.disableZoom)){r=d.scale;var c=v,l=g;if(a.focal){var y=a.focal;c=(y.x/r-y.x/f+v*r)/r,l=(y.y/r-y.y/f+g*r)/r}var O=w(c,l,r,{relative:!1,force:!0});return v=O.x,g=O.y,f=r,E("panzoomzoom",a,s)}}function he(r,i){var s=p(p(p({},t),{animate:!0}),i);return I(f*Math.exp((r?1:-1)*s.step),s)}function _e(r){return he(!0,r)}function Xe(r){return he(!1,r)}function W(r,i,s,d){var a=de(e),c={width:a.parent.width-a.parent.padding.left-a.parent.padding.right-a.parent.border.left-a.parent.border.right,height:a.parent.height-a.parent.padding.top-a.parent.padding.bottom-a.parent.border.top-a.parent.border.bottom},l=i.clientX-a.parent.left-a.parent.padding.left-a.parent.border.left-a.elem.margin.left,y=i.clientY-a.parent.top-a.parent.padding.top-a.parent.border.top-a.elem.margin.top;n||(l-=a.elem.width/f/2,y-=a.elem.height/f/2);var O={x:l/c.width*(c.width*r),y:y/c.height*(c.height*r)};return I(r,p(p({},s),{animate:!1,focal:O}),d)}function Ye(r,i){r.preventDefault();var s=p(p(p({},t),i),{animate:!1}),d=r.deltaY===0&&r.deltaX?r.deltaX:r.deltaY,a=d<0?1:-1,c=M(f*Math.exp(a*s.step/3),s).scale;return W(c,r,s,r)}function Ne(r){var i=p(p(p({},t),{animate:!0,force:!0}),r);f=M(i.startScale,i).scale;var s=w(i.startX,i.startY,f,i);return v=s.x,g=s.y,E("panzoomreset",i)}var L,B,D,R,me,G,C=[];function U(r){if(!rt(r.target,t)){fe(C,r),A=!0,t.handleStartEvent(r),L=v,B=g,b("panzoomstart",{x:v,y:g,scale:f,isSVG:n,originalEvent:r},t);var i=Me(C);D=i.clientX,R=i.clientY,me=f,G=le(C)}}function $(r){if(!(!A||L===void 0||B===void 0||D===void 0||R===void 0)){fe(C,r);var i=Me(C),s=C.length>1,d=f;if(s){G===0&&(G=le(C));var a=le(C)-G;d=M(a*t.step/80+me).scale,W(d,i,{animate:!1},r)}(!s||t.pinchAndPan)&&_(L+(i.clientX-D)/d,B+(i.clientY-R)/d,{animate:!1},r)}}function J(r){C.length===1&&b("panzoomend",{x:v,y:g,scale:f,isSVG:n,originalEvent:r},t),$e(C,r),A&&(A=!1,L=B=D=R=void 0)}var K=!1;function pe(){K||(K=!0,se("down",t.canvas?o:e,U),se("move",document,$,{passive:!0}),se("up",document,J,{passive:!0}))}function ke(){K=!1,ce("down",t.canvas?o:e,U),ce("move",document,$),ce("up",document,J)}return t.noBind||pe(),{bind:pe,destroy:ke,eventNames:k,getPan:function(){return{x:v,y:g}},getScale:function(){return f},getOptions:function(){return it(t)},handleDown:U,handleMove:$,handleUp:J,pan:_,reset:Ne,resetStyle:u,setOptions:h,setStyle:function(r,i){return V(e,r,i)},zoom:I,zoomIn:_e,zoomOut:Xe,zoomToPoint:W,zoomWithWheel:Ye}}Ve.defaultOptions=Te;const lt={key:0,class:"d-flex flex-wrap justify-space-between"},st={id:"scene",style:{height:"calc(100vh - 80px)"}},ct={class:"d-flex"},ft={__name:"news_detail",props:{currentnews:Object,currentnewsdate:String,latest:Object,trending:Object,related:Object,advertisements:Object},setup(e){const t=ge(()=>ye(()=>import("./tabnews-c4dd841d.js"),["assets/tabnews-c4dd841d.js","assets/app-51bffb8a.js","assets/app-cea5618b.css"])),n=ge(()=>ye(()=>import("./relatednews-4bef7e3a.js"),["assets/relatednews-4bef7e3a.js","assets/app-51bffb8a.js","assets/app-cea5618b.css"])),o=ne(null);let u=ne(null),h=we([]),v=ne(!1),g=we([]);Ie(()=>{f()});const f=()=>{xe(()=>{const A=o.value.$el,b=A.getElementsByTagName("img");b.length>0&&Array.from(b).forEach((E,w)=>{console.log(E),g.push(A.getElementsByTagName("img")[w].alt),h.push(E.src),E.addEventListener("click",function(){u.value=w,v.value=!0,xe(()=>{const M=document.getElementById("scene"),_=Ve(M,{maxScale:5});M.parentElement.addEventListener("wheel",_.zoomWithWheel),console.log(v.value)})})})})};return(A,b)=>(T(),j(Ae,null,[m(Re,null,{default:x(()=>[m(Le,null,{default:x(()=>[m(re,{cols:"12",md:"9"},{default:x(()=>[ae("article",null,[m(Be,{class:"text-h3 font-weight-black text-wrap px-0",style:{"line-height":"4rem"},textContent:be(e.currentnews.title)},null,8,["textContent"]),m(Ee,{class:"px-0"},{default:x(()=>[m(Ce,{icon:P(We)},null,8,["icon"]),De(" "+be(e.currentnewsdate),1)]),_:1}),m(N,{eager:"",class:"rounded-lg align-start",src:e.currentnews.image},null,8,["src"]),m(Ee,{ref_key:"dynamicContent",ref:o,class:"px-0 dynamic-content",innerHTML:e.currentnews.description},null,8,["innerHTML"])])]),_:1}),m(re,{cols:"12",md:"3"},{default:x(()=>[e.advertisements.sm_ad?(T(),j("div",lt,[m(oe,{class:"mb-3 w-100 h-100",href:e.advertisements.sm_ad[0].advertisement.url,target:"_blank","max-height":"290","max-width":"290"},{default:x(()=>[m(N,{src:e.advertisements.sm_ad[0].advertisement.image,alt:e.advertisements.sm_ad[0].advertisement.title},null,8,["src","alt"])]),_:1},8,["href"]),e.advertisements.sm_ad[1]?(T(),Oe(oe,{key:0,class:"mb-3 w-100 h-100",href:e.advertisements.sm_ad[1].advertisement.url,target:"_blank","max-height":"290","max-width":"290"},{default:x(()=>[m(N,{src:e.advertisements.sm_ad[1].advertisement.image,alt:e.advertisements.sm_ad[1].advertisement.title},null,8,["src","alt"])]),_:1},8,["href"])):ie("",!0)])):ie("",!0),m(P(t),{latest:e.latest,trending:e.trending},null,8,["latest","trending"])]),_:1}),e.related.length>0?(T(),Oe(re,{key:0,cols:"12"},{default:x(()=>[m(P(n),{related:e.related},null,8,["related"])]),_:1})):ie("",!0)]),_:1})]),_:1}),m(qe,{eager:"",persistent:"","no-click-animation":"",theme:"dark","model-value":P(v),"content-class":"w-100 gallery-content"},{default:x(()=>[m(Ge,{icon:"",theme:"dark",color:"white",variant:"tonal",onClick:b[0]||(b[0]=E=>Pe(v)?v.value=!1:v=!1),style:{position:"absolute",top:"10px",right:"10px","z-index":"9999999999"}},{default:x(()=>[m(Ce,{icon:P(Ue)},null,8,["icon"])]),_:1}),ae("div",st,[m(N,{src:P(h)[P(u)]},null,8,["src"])]),m(oe,{class:"w-100 d-flex align-center justify-center pa-4",height:"80",style:{position:"relative"}},{default:x(()=>[ae("ul",ct,[(T(!0),j(Ae,null,je(P(h),(E,w)=>(T(),j("li",{class:Fe(["list-style-none",w+1>=P(h).length?"":"mr-3"]),style:Ze(P(u)==w?"border: 2px solid red":"border: 2px solid transparent")},[m(N,{height:"50",width:"100",src:E,class:"pa-1",onClick:M=>Pe(u)?u.value=w:u=w,style:{cursor:"pointer"}},null,8,["src","onClick"])],6))),256))])]),_:1})]),_:1},8,["model-value"])],64))}};export{ft as default};
