import{g as O,i as o,C as b,T as A,p as $,D as te,E as X,F as ae,e as I,r as P,G as oe,H as ne,w as F,h as Y,I as se,J as re,K as ie,L as le,M as ce,q as p,s as E,v as u,l as y,A as _,N as S,O as D,x as w,y as M,B as L,j as B}from"./app-cc95f43e.js";import{m as ue,a as de,b as me,c as fe,d as ge,e as ve}from"./mdi-c22018c1.js";import{_ as he}from"./_plugin-vue_export-helper-c27b6911.js";import{V as pe}from"./VAppBar-b4d35dd9.js";import{V as ye,a as Ve}from"./VRow-802172f4.js";import{V}from"./VBtn-7bc3cb90.js";import{f as G,V as xe,a as we}from"./VForm-bb6bf416.js";import{m as J,u as K,V as j,a as T}from"./VOverlay-9bcb8184.js";import{a as k,d as be,s as R,b as _e,n as Pe}from"./easing-9f15041e.js";import{V as Q}from"./color-6c8c3f4b.js";import{V as z}from"./router-ae2dfb1c.js";import{V as Ce}from"./VList-14bc3bfb.js";import{V as Ee,a as Se}from"./VListItem-05c5c228.js";import{V as N}from"./VSpacer-c5b44884.js";import{V as ke,a as q,b as U}from"./VCard-38cf5dd7.js";import"./index-bd3a89e3.js";import"./VImg-fa0cf331.js";import"./group-379dbafc.js";import"./delay-48ab6265.js";import"./lazy-cf1081ff.js";import"./createSimpleFunctional-ba3fc838.js";import"./VAvatar-12a6ce91.js";const Te=$({target:Object},"v-dialog-transition"),Z=O()({name:"VDialogTransition",props:Te(),setup(a,g){let{slots:e}=g;const r={onBeforeEnter(i){i.style.pointerEvents="none",i.style.visibility="hidden"},async onEnter(i,m){var f;await new Promise(c=>requestAnimationFrame(c)),await new Promise(c=>requestAnimationFrame(c)),i.style.visibility="";const{x:l,y:n,sx:t,sy:s,speed:d}=H(a.target,i),v=k(i,[{transform:`translate(${l}px, ${n}px) scale(${t}, ${s})`,opacity:0},{}],{duration:225*d,easing:be});(f=W(i))==null||f.forEach(c=>{k(c,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*d,easing:R})}),v.finished.then(()=>m())},onAfterEnter(i){i.style.removeProperty("pointer-events")},onBeforeLeave(i){i.style.pointerEvents="none"},async onLeave(i,m){var f;await new Promise(c=>requestAnimationFrame(c));const{x:l,y:n,sx:t,sy:s,speed:d}=H(a.target,i);k(i,[{},{transform:`translate(${l}px, ${n}px) scale(${t}, ${s})`,opacity:0}],{duration:125*d,easing:_e}).finished.then(()=>m()),(f=W(i))==null||f.forEach(c=>{k(c,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*d,easing:R})})},onAfterLeave(i){i.style.removeProperty("pointer-events")}};return()=>a.target?o(A,b({name:"dialog-transition"},r,{css:!1}),e):o(A,{name:"dialog-transition"},e)}});function W(a){var e;const g=(e=a.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:e.children;return g&&[...g]}function H(a,g){const e=a.getBoundingClientRect(),r=Pe(g),[i,m]=getComputedStyle(g).transformOrigin.split(" ").map(ee=>parseFloat(ee)),[l,n]=getComputedStyle(g).getPropertyValue("--v-overlay-anchor-origin").split(" ");let t=e.left+e.width/2;l==="left"||n==="left"?t-=e.width/2:(l==="right"||n==="right")&&(t+=e.width/2);let s=e.top+e.height/2;l==="top"||n==="top"?s-=e.height/2:(l==="bottom"||n==="bottom")&&(s+=e.height/2);const d=e.width/r.width,v=e.height/r.height,f=Math.max(1,d,v),c=d/f||0,x=v/f||0,h=r.width*r.height/(window.innerWidth*window.innerHeight),C=h>.12?Math.min(1.5,(h-.12)*10+1):1;return{x:t-(i+r.left),y:s-(m+r.top),sx:c,sy:x,speed:C}}const De=$({id:String,...te(J({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:Z}}),["absolute"])},"v-menu"),Me=O()({name:"VMenu",props:De(),emits:{"update:modelValue":a=>!0},setup(a,g){let{slots:e}=g;const r=X(a,"modelValue"),{scopeId:i}=K(),m=ae(),l=I(()=>a.id||`v-menu-${m}`),n=P(),t=oe(j,null),s=P(0);ne(j,{register(){++s.value},unregister(){--s.value},closeParents(){setTimeout(()=>{s.value||(r.value=!1,t==null||t.closeParents())},40)}}),F(r,f=>{f?t==null||t.register():t==null||t.unregister()});function d(){t==null||t.closeParents()}const v=I(()=>b({"aria-haspopup":"menu","aria-expanded":String(r.value),"aria-owns":l.value},a.activatorProps));return Y(()=>{const[f]=T.filterProps(a);return o(T,b({ref:n,class:["v-menu",a.class],style:a.style},f,{modelValue:r.value,"onUpdate:modelValue":c=>r.value=c,absolute:!0,activatorProps:v.value,"onClick:outside":d},i),{activator:e.activator,default:function(){for(var c=arguments.length,x=new Array(c),h=0;h<c;h++)x[h]=arguments[h];return o(Q,{root:!0},{default:()=>{var C;return[(C=e.default)==null?void 0:C.call(e,...x)]}})}})}),G({id:l,ΨopenChildren:s},n)}});const Be=$({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...J({origin:"center center",scrollStrategy:"block",transition:{component:Z},zIndex:2400})},"v-dialog"),Ie=O()({name:"VDialog",props:Be(),emits:{"update:modelValue":a=>!0},setup(a,g){let{slots:e}=g;const r=X(a,"modelValue"),{scopeId:i}=K(),m=P();function l(t){var v,f;const s=t.relatedTarget,d=t.target;if(s!==d&&((v=m.value)!=null&&v.contentEl)&&((f=m.value)!=null&&f.globalTop)&&![document,m.value.contentEl].includes(d)&&!m.value.contentEl.contains(d)){const c=ie(m.value.contentEl);if(!c.length)return;const x=c[0],h=c[c.length-1];s===x?h.focus():x.focus()}}se&&F(()=>r.value&&a.retainFocus,t=>{t?document.addEventListener("focusin",l):document.removeEventListener("focusin",l)},{immediate:!0}),F(r,async t=>{var s,d;await re(),t?(s=m.value.contentEl)==null||s.focus({preventScroll:!0}):(d=m.value.activatorEl)==null||d.focus({preventScroll:!0})});const n=I(()=>b({"aria-haspopup":"dialog","aria-expanded":String(r.value)},a.activatorProps));return Y(()=>{const[t]=T.filterProps(a);return o(T,b({ref:m,class:["v-dialog",{"v-dialog--fullscreen":a.fullscreen,"v-dialog--scrollable":a.scrollable},a.class],style:a.style},t,{modelValue:r.value,"onUpdate:modelValue":s=>r.value=s,"aria-modal":"true",activatorProps:n.value,role:"dialog"},i),{activator:e.activator,default:function(){for(var s=arguments.length,d=new Array(s),v=0;v<s;v++)d[v]=arguments[v];return o(Q,{root:!0},{default:()=>{var f;return[(f=e.default)==null?void 0:f.call(e,...d)]}})}})}),G({},m)}});const Fe={key:0,class:"hidden-sm-and-down"},Oe={__name:"navbar",props:{provinces:Object,categories:Object,tags:Object},setup(a){const g=le();let e=P(!1),r=P(!1);ce(()=>{r.value=localStorage.getItem("isDarkMode")==="true",g.global.name.value=r.value?"dark":"light"});const i=()=>{r.value=localStorage.getItem("isDarkMode")!=="true",localStorage.setItem("isDarkMode",r.value),g.global.name.value=r.value?"dark":"light"};return(m,l)=>(p(),E(pe,{color:"primary",height:"60",class:"overflow-visible position-relative"},{default:u(()=>[o(Ve,null,{default:u(()=>[o(ye,null,{default:u(()=>[o(V,{color:"white",rounded:"0",height:"60",href:"/",class:"hidden-md-only",icon:y(ue)},null,8,["icon"]),a.categories.length>0?(p(),_("div",Fe,[(p(!0),_(S,null,D(a.categories.sort((n,t)=>n.sort>t.sort?1:-1),(n,t)=>(p(),_(S,null,[o(V,{height:"60",size:"small",class:"font-rajdhani text-h6 font-weight-bold rounded-0",href:"/category/"+n.slug},{default:u(()=>[w(M(n.name),1)]),_:2},1032,["href"]),t==1?(p(),E(Me,{key:0,stacked:"",contained:"",width:"150",location:"top","location-strategy":"connected"},{activator:u(({props:s})=>[o(V,b({rounded:"0",color:"white",height:"60",size:"small"},s,{class:"font-rajdhani font-weight-bold text-h6"}),{default:u(()=>[w(" प्रदेश "),o(z,{end:"",size:"x-small",icon:y(de)},null,8,["icon"])]),_:2},1040)]),default:u(()=>[o(Ce,{class:"rounded-t-0"},{default:u(()=>[(p(!0),_(S,null,D(a.provinces,s=>(p(),E(Ee,{href:"/province/"+s.name},{default:u(()=>[o(Se,null,{default:u(()=>[w(M(s.name),1)]),_:2},1024)]),_:2},1032,["href"]))),256))]),_:2},1024)]),_:2},1024)):L("",!0)],64))),256))])):L("",!0),o(N),o(V,{rounded:"0",height:"60",class:"font-weight-bold text-subtitle-1",onClick:i,icon:y(r)?y(me):y(fe)},null,8,["icon"]),o(Ie,{modelValue:y(e),"onUpdate:modelValue":l[2]||(l[2]=n=>B(e)?e.value=n:e=n),scrim:"black","max-width":"650"},{activator:u(({props:n})=>[o(V,b({color:"white",rounded:"0",height:"60",class:"font-weight-bold text-h6"},n),{default:u(()=>[o(z,{icon:y(ge)},null,8,["icon"])]),_:2},1040)]),default:u(()=>[o(ke,null,{default:u(()=>[o(q,{class:"d-flex"},{default:u(()=>[w(" Search for news and articles "),o(N),o(V,{size:"x-small",color:"primary",variant:"tonal",icon:y(ve),onClick:l[0]||(l[0]=n=>B(e)?e.value=!1:e=!1),"location-strategy":"static"},null,8,["icon"])]),_:1}),o(xe,{action:"/search",method:"get"},{default:u(()=>[o(U,{class:"py-0"},{default:u(()=>[o(we,{variant:"outlined",name:"search",placeholder:"Type here to search"})]),_:1}),o(q,null,{default:u(()=>[w("Recommended Tags")]),_:1}),o(U,null,{default:u(()=>[(p(!0),_(S,null,D(a.tags,n=>(p(),E(V,{variant:"text",href:"/search?tag="+n.name},{default:u(()=>[w("#"+M(n.name),1)]),_:2},1032,["href"]))),256))]),_:1}),o(V,{block:"",type:"submit",height:"50",rounded:"0",color:"primary",class:"text-capitalize",onClick:l[1]||(l[1]=n=>B(e)?e.value=!1:e=!1)},{default:u(()=>[w(" Search ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}))}},nt=he(Oe,[["__scopeId","data-v-3d4c648e"]]);export{nt as default};
