import{g as O,i as o,C as w,T as A,p as $,D as ee,E as H,F as te,e as I,r as _,G as ae,H as oe,w as F,h as X,I as ne,J as se,K as re,L as ie,M as le,q as p,s as C,v as u,l as y,z as ce,A as E,N as D,O as S,x as b,y as B,B as ue,j as M}from"./app-3959e0c2.js";import{m as de,a as me,b as fe,c as ge,d as ve,e as he}from"./mdi-c22018c1.js";import{_ as pe}from"./_plugin-vue_export-helper-c27b6911.js";import{V as ye}from"./VAppBar-7d68e211.js";import{V as Ve,a as xe}from"./VRow-e9544f43.js";import{V}from"./VBtn-15136d0b.js";import{f as Y,V as be,a as we}from"./VForm-16452d0f.js";import{m as G,u as J,V as L,a as T}from"./VOverlay-a804839a.js";import{a as k,d as _e,s as j,b as Pe,n as Ce}from"./easing-9f15041e.js";import{V as K}from"./color-1f13a3f5.js";import{V as R}from"./router-a2104928.js";import{V as Ee}from"./VList-33ed8804.js";import{V as Se,a as ke}from"./VListItem-0a7edca3.js";import{V as z}from"./VSpacer-aebb6b45.js";import{V as Te,a as N,b as q}from"./VCard-fff00e2b.js";import"./index-2b76ef4d.js";import"./VImg-2f19c20c.js";import"./group-c50c2f89.js";import"./delay-95e8a07a.js";import"./lazy-695ff568.js";import"./createSimpleFunctional-c62082e7.js";import"./VAvatar-e9c13d0c.js";const De=$({target:Object},"v-dialog-transition"),Q=O()({name:"VDialogTransition",props:De(),setup(a,g){let{slots:e}=g;const r={onBeforeEnter(i){i.style.pointerEvents="none",i.style.visibility="hidden"},async onEnter(i,m){var f;await new Promise(c=>requestAnimationFrame(c)),await new Promise(c=>requestAnimationFrame(c)),i.style.visibility="";const{x:l,y:n,sx:t,sy:s,speed:d}=W(a.target,i),v=k(i,[{transform:`translate(${l}px, ${n}px) scale(${t}, ${s})`,opacity:0},{}],{duration:225*d,easing:_e});(f=U(i))==null||f.forEach(c=>{k(c,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*d,easing:j})}),v.finished.then(()=>m())},onAfterEnter(i){i.style.removeProperty("pointer-events")},onBeforeLeave(i){i.style.pointerEvents="none"},async onLeave(i,m){var f;await new Promise(c=>requestAnimationFrame(c));const{x:l,y:n,sx:t,sy:s,speed:d}=W(a.target,i);k(i,[{},{transform:`translate(${l}px, ${n}px) scale(${t}, ${s})`,opacity:0}],{duration:125*d,easing:Pe}).finished.then(()=>m()),(f=U(i))==null||f.forEach(c=>{k(c,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*d,easing:j})})},onAfterLeave(i){i.style.removeProperty("pointer-events")}};return()=>a.target?o(A,w({name:"dialog-transition"},r,{css:!1}),e):o(A,{name:"dialog-transition"},e)}});function U(a){var e;const g=(e=a.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:e.children;return g&&[...g]}function W(a,g){const e=a.getBoundingClientRect(),r=Ce(g),[i,m]=getComputedStyle(g).transformOrigin.split(" ").map(Z=>parseFloat(Z)),[l,n]=getComputedStyle(g).getPropertyValue("--v-overlay-anchor-origin").split(" ");let t=e.left+e.width/2;l==="left"||n==="left"?t-=e.width/2:(l==="right"||n==="right")&&(t+=e.width/2);let s=e.top+e.height/2;l==="top"||n==="top"?s-=e.height/2:(l==="bottom"||n==="bottom")&&(s+=e.height/2);const d=e.width/r.width,v=e.height/r.height,f=Math.max(1,d,v),c=d/f||0,x=v/f||0,h=r.width*r.height/(window.innerWidth*window.innerHeight),P=h>.12?Math.min(1.5,(h-.12)*10+1):1;return{x:t-(i+r.left),y:s-(m+r.top),sx:c,sy:x,speed:P}}const Be=$({id:String,...ee(G({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:Q}}),["absolute"])},"v-menu"),Me=O()({name:"VMenu",props:Be(),emits:{"update:modelValue":a=>!0},setup(a,g){let{slots:e}=g;const r=H(a,"modelValue"),{scopeId:i}=J(),m=te(),l=I(()=>a.id||`v-menu-${m}`),n=_(),t=ae(L,null),s=_(0);oe(L,{register(){++s.value},unregister(){--s.value},closeParents(){setTimeout(()=>{s.value||(r.value=!1,t==null||t.closeParents())},40)}}),F(r,f=>{f?t==null||t.register():t==null||t.unregister()});function d(){t==null||t.closeParents()}const v=I(()=>w({"aria-haspopup":"menu","aria-expanded":String(r.value),"aria-owns":l.value},a.activatorProps));return X(()=>{const[f]=T.filterProps(a);return o(T,w({ref:n,class:["v-menu",a.class],style:a.style},f,{modelValue:r.value,"onUpdate:modelValue":c=>r.value=c,absolute:!0,activatorProps:v.value,"onClick:outside":d},i),{activator:e.activator,default:function(){for(var c=arguments.length,x=new Array(c),h=0;h<c;h++)x[h]=arguments[h];return o(K,{root:!0},{default:()=>{var P;return[(P=e.default)==null?void 0:P.call(e,...x)]}})}})}),Y({id:l,ΨopenChildren:s},n)}});const Ie=$({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...G({origin:"center center",scrollStrategy:"block",transition:{component:Q},zIndex:2400})},"v-dialog"),Fe=O()({name:"VDialog",props:Ie(),emits:{"update:modelValue":a=>!0},setup(a,g){let{slots:e}=g;const r=H(a,"modelValue"),{scopeId:i}=J(),m=_();function l(t){var v,f;const s=t.relatedTarget,d=t.target;if(s!==d&&((v=m.value)!=null&&v.contentEl)&&((f=m.value)!=null&&f.globalTop)&&![document,m.value.contentEl].includes(d)&&!m.value.contentEl.contains(d)){const c=re(m.value.contentEl);if(!c.length)return;const x=c[0],h=c[c.length-1];s===x?h.focus():x.focus()}}ne&&F(()=>r.value&&a.retainFocus,t=>{t?document.addEventListener("focusin",l):document.removeEventListener("focusin",l)},{immediate:!0}),F(r,async t=>{var s,d;await se(),t?(s=m.value.contentEl)==null||s.focus({preventScroll:!0}):(d=m.value.activatorEl)==null||d.focus({preventScroll:!0})});const n=I(()=>w({"aria-haspopup":"dialog","aria-expanded":String(r.value)},a.activatorProps));return X(()=>{const[t]=T.filterProps(a);return o(T,w({ref:m,class:["v-dialog",{"v-dialog--fullscreen":a.fullscreen,"v-dialog--scrollable":a.scrollable},a.class],style:a.style},t,{modelValue:r.value,"onUpdate:modelValue":s=>r.value=s,"aria-modal":"true",activatorProps:n.value,role:"dialog"},i),{activator:e.activator,default:function(){for(var s=arguments.length,d=new Array(s),v=0;v<s;v++)d[v]=arguments[v];return o(K,{root:!0},{default:()=>{var f;return[(f=e.default)==null?void 0:f.call(e,...d)]}})}})}),Y({},m)}});const Oe={class:"hidden-sm-and-down"},$e={__name:"navbar",props:{provinces:Object,categories:Object,tags:Object},setup(a){const g=ie();let e=_(!1),r=_(!1);le(()=>{r.value=localStorage.getItem("isDarkMode")==="true",g.global.name.value=r.value?"dark":"light"});const i=()=>{r.value=localStorage.getItem("isDarkMode")!=="true",localStorage.setItem("isDarkMode",r.value),g.global.name.value=r.value?"dark":"light"};return(m,l)=>(p(),C(ye,{color:"primary",height:"60",class:"overflow-visible position-relative"},{default:u(()=>[o(xe,null,{default:u(()=>[o(Ve,null,{default:u(()=>[o(V,{color:"white",rounded:"0",height:"60",href:"/",class:"hidden-md-only",icon:y(de)},null,8,["icon"]),ce("div",Oe,[(p(!0),E(S,null,D(a.categories.sort((n,t)=>n.sort>t.sort?1:-1),(n,t)=>(p(),E(S,null,[o(V,{height:"60",size:"small",class:"font-rajdhani text-h6 font-weight-bold rounded-0",href:"/category/"+n.slug},{default:u(()=>[b(B(n.name),1)]),_:2},1032,["href"]),t==1?(p(),C(Me,{key:0,stacked:"",contained:"",width:"150",location:"top","location-strategy":"connected"},{activator:u(({props:s})=>[o(V,w({rounded:"0",color:"white",height:"60",size:"small"},s,{class:"font-rajdhani font-weight-bold text-h6"}),{default:u(()=>[b(" प्रदेश "),o(R,{end:"",size:"x-small",icon:y(me)},null,8,["icon"])]),_:2},1040)]),default:u(()=>[o(Ee,{class:"rounded-t-0"},{default:u(()=>[(p(!0),E(S,null,D(a.provinces,s=>(p(),C(Se,{href:"/province/"+s.name},{default:u(()=>[o(ke,null,{default:u(()=>[b(B(s.name),1)]),_:2},1024)]),_:2},1032,["href"]))),256))]),_:2},1024)]),_:2},1024)):ue("",!0)],64))),256))]),o(z),o(V,{rounded:"0",height:"60",class:"font-weight-bold text-subtitle-1",onClick:i,icon:y(r)?y(fe):y(ge)},null,8,["icon"]),o(Fe,{modelValue:y(e),"onUpdate:modelValue":l[2]||(l[2]=n=>M(e)?e.value=n:e=n),scrim:"black","max-width":"650"},{activator:u(({props:n})=>[o(V,w({color:"white",rounded:"0",height:"60",class:"font-weight-bold text-h6"},n),{default:u(()=>[o(R,{icon:y(ve)},null,8,["icon"])]),_:2},1040)]),default:u(()=>[o(Te,null,{default:u(()=>[o(N,{class:"d-flex"},{default:u(()=>[b(" Search for news and articles "),o(z),o(V,{size:"x-small",color:"primary",variant:"tonal",icon:y(he),onClick:l[0]||(l[0]=n=>M(e)?e.value=!1:e=!1),"location-strategy":"static"},null,8,["icon"])]),_:1}),o(be,{action:"/search",method:"get"},{default:u(()=>[o(q,{class:"py-0"},{default:u(()=>[o(we,{variant:"outlined",name:"search",placeholder:"Type here to search"})]),_:1}),o(N,null,{default:u(()=>[b("Recommended Tags")]),_:1}),o(q,null,{default:u(()=>[(p(!0),E(S,null,D(a.tags,n=>(p(),C(V,{variant:"text",href:"/search?tag="+n.name},{default:u(()=>[b("#"+B(n.name),1)]),_:2},1032,["href"]))),256))]),_:1}),o(V,{block:"",type:"submit",height:"50",rounded:"0",color:"primary",class:"text-capitalize",onClick:l[1]||(l[1]=n=>M(e)?e.value=!1:e=!1)},{default:u(()=>[b(" Search ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}))}},st=pe($e,[["__scopeId","data-v-6dafc0cb"]]);export{st as default};
