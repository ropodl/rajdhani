import{r as _,i as F,w as A,g as S,o as B,u as E,a as Q,b as v,c as T,d as c,e as i,f as j,t as w,h as k,j as $}from"./app-3c8de01b.js";import{V as O}from"./VCol-cf593126.js";import{V as q}from"./VBtn-a2fd2c51.js";import{V as g,a as D,b as R}from"./VRow-b9369d56.js";import{V as W}from"./VCard-7cae44d2.js";import"./VAvatar-339a6c0b.js";var h;const p=typeof window<"u",L=e=>typeof e=="function";p&&((h=window==null?void 0:window.navigator)!=null&&h.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function U(e){return typeof e=="function"?e():E(e)}function G(e){return e}function m(e){return S()?(B(e),!0):!1}function H(e,t=1e3,a={}){const{immediate:n=!0,immediateCallback:r=!1}=a;let s=null;const o=_(!1);function f(){s&&(clearInterval(s),s=null)}function d(){o.value=!1,f()}function l(){const u=U(t);u<=0||(o.value=!0,r&&e(),f(),s=setInterval(e,u))}if(n&&p&&l(),F(t)||L(t)){const u=A(t,()=>{o.value&&p&&l()});m(u)}return m(d),{isActive:o,pause:d,resume:l}}const K=p?window:void 0,I=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y="__vueuse_ssr_handlers__";I[y]=I[y]||{};function M(e,t={}){const{immediate:a=!0,window:n=K}=t,r=_(!1);let s=0,o=null;function f(u){if(!r.value||!n)return;const N=u-s;e({delta:N,timestamp:u}),s=u,o=n.requestAnimationFrame(f)}function d(){!r.value&&n&&(r.value=!0,o=n.requestAnimationFrame(f))}function l(){r.value=!1,o!=null&&n&&(n.cancelAnimationFrame(o),o=null)}return a&&d(),m(l),{isActive:Q(r),pause:l,resume:d}}var z=Object.defineProperty,b=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,P=(e,t,a)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Y=(e,t)=>{for(var a in t||(t={}))J.call(t,a)&&P(e,a,t[a]);if(b)for(var a of b(t))X.call(t,a)&&P(e,a,t[a]);return e};function Z(e={}){const{controls:t=!1,interval:a="requestAnimationFrame"}=e,n=_(new Date),r=()=>n.value=new Date,s=a==="requestAnimationFrame"?M(r,{immediate:!0}):H(r,a,{immediate:!0});return t?Y({now:n},s):n}var V;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(V||(V={}));var ee=Object.defineProperty,C=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,x=(e,t,a)=>t in e?ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,ne=(e,t)=>{for(var a in t||(t={}))te.call(t,a)&&x(e,a,t[a]);if(C)for(var a of C(t))ae.call(t,a)&&x(e,a,t[a]);return e};const re={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};ne({linear:G},re);const oe={class:"text-caption text-center"},se={key:0,class:"d-flex"},pe={__name:"midbar",props:{date:String,ads:{type:[Boolean,Object],required:!0}},setup(e){const t=Z();return(a,n)=>(v(),T(R,{class:"pa-0"},{default:c(()=>[i(D,{align:"center"},{default:c(()=>[i(O,{cols:"12",md:"4"},{default:c(()=>[i(q,{block:"",color:"transparent",variant:"text",rounded:"0",height:"100",href:"/"},{default:c(()=>[i(g,{width:"380",height:"60",src:"/frontend/img/logo.png"})]),_:1}),j("div",oe,w(e.date)+" | "+w(new Date(E(t)).toLocaleString([],{hour12:!0})),1)]),_:1}),i(O,{cols:"12",md:"8"},{default:c(()=>[e.ads?(v(),k("div",se,[i(W,{flat:"",class:"w-100 ml-auto rounded-0 bg-transparent","max-width":"728",href:e.ads.url,target:"_blank"},{default:c(()=>[i(g,{height:"90",class:"w-100 h-100",src:e.ads.image},null,8,["src"])]),_:1},8,["href"])])):$("",!0)]),_:1})]),_:1})]),_:1}))}};export{pe as default};