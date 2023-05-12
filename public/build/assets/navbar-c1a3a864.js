import{k as $,e as o,m as w,T as O,p as A,l as X,r as P,I as te,w as I,n as ae,q as F,s as Y,v as oe,x as ne,y as se,z as re,A as ie,B as le,C as ce,b as p,c as E,d as u,u as y,h as _,F as S,D,E as x,t as B,j as R,i as M}from"./app-3990ec44.js";import{m as ue,a as de,b as me,c as fe,d as ge,e as ve}from"./mdi-74b5fd1c.js";import{_ as he}from"./_plugin-vue_export-helper-c27b6911.js";import{a as pe,b as ye}from"./VRow-07fd8d49.js";import{V}from"./VBtn-37ddd80f.js";import{f as G,V as Ve,a as be}from"./VTextField-2090f722.js";import{m as J,u as K,V as T,a as L}from"./VOverlay-7e112af0.js";import{a as k,d as xe,s as j,b as we,n as _e}from"./easing-9f15041e.js";import{V as Q,a as z}from"./router-94feeead.js";import{V as Pe}from"./VList-0ab8866c.js";import{V as Ce,a as Ee}from"./VListItem-1259eb19.js";import{V as q}from"./VSpacer-5358606e.js";import{V as Se,a as N,b as U}from"./VCard-fa5a8070.js";import{V as ke}from"./VAppBar-f925278c.js";import"./group-c3b724cd.js";import"./index-83c59895.js";import"./delay-c85a4b00.js";import"./lazy-56f5e354.js";import"./VAvatar-d9d0f692.js";const Te=A({target:Object},"v-dialog-transition"),Z=$()({name:"VDialogTransition",props:Te(),setup(a,g){let{slots:e}=g;const r={onBeforeEnter(i){i.style.pointerEvents="none",i.style.visibility="hidden"},async onEnter(i,m){var f;await new Promise(c=>requestAnimationFrame(c)),await new Promise(c=>requestAnimationFrame(c)),i.style.visibility="";const{x:l,y:n,sx:t,sy:s,speed:d}=H(a.target,i),v=k(i,[{transform:`translate(${l}px, ${n}px) scale(${t}, ${s})`,opacity:0},{}],{duration:225*d,easing:xe});(f=W(i))==null||f.forEach(c=>{k(c,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*d,easing:j})}),v.finished.then(()=>m())},onAfterEnter(i){i.style.removeProperty("pointer-events")},onBeforeLeave(i){i.style.pointerEvents="none"},async onLeave(i,m){var f;await new Promise(c=>requestAnimationFrame(c));const{x:l,y:n,sx:t,sy:s,speed:d}=H(a.target,i);k(i,[{},{transform:`translate(${l}px, ${n}px) scale(${t}, ${s})`,opacity:0}],{duration:125*d,easing:we}).finished.then(()=>m()),(f=W(i))==null||f.forEach(c=>{k(c,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*d,easing:j})})},onAfterLeave(i){i.style.removeProperty("pointer-events")}};return()=>a.target?o(O,w({name:"dialog-transition"},r,{css:!1}),e):o(O,{name:"dialog-transition"},e)}});function W(a){var e;const g=(e=a.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:e.children;return g&&[...g]}function H(a,g){const e=a.getBoundingClientRect(),r=_e(g),[i,m]=getComputedStyle(g).transformOrigin.split(" ").map(ee=>parseFloat(ee)),[l,n]=getComputedStyle(g).getPropertyValue("--v-overlay-anchor-origin").split(" ");let t=e.left+e.width/2;l==="left"||n==="left"?t-=e.width/2:(l==="right"||n==="right")&&(t+=e.width/2);let s=e.top+e.height/2;l==="top"||n==="top"?s-=e.height/2:(l==="bottom"||n==="bottom")&&(s+=e.height/2);const d=e.width/r.width,v=e.height/r.height,f=Math.max(1,d,v),c=d/f||0,b=v/f||0,h=r.width*r.height/(window.innerWidth*window.innerHeight),C=h>.12?Math.min(1.5,(h-.12)*10+1):1;return{x:t-(i+r.left),y:s-(m+r.top),sx:c,sy:b,speed:C}}const De=A({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...J({origin:"center center",scrollStrategy:"block",transition:{component:Z},zIndex:2400})},"v-dialog"),Be=$()({name:"VDialog",props:De(),emits:{"update:modelValue":a=>!0},setup(a,g){let{slots:e}=g;const r=X(a,"modelValue"),{scopeId:i}=K(),m=P();function l(t){var v,f;const s=t.relatedTarget,d=t.target;if(s!==d&&((v=m.value)!=null&&v.contentEl)&&((f=m.value)!=null&&f.globalTop)&&![document,m.value.contentEl].includes(d)&&!m.value.contentEl.contains(d)){const c=oe(m.value.contentEl);if(!c.length)return;const b=c[0],h=c[c.length-1];s===b?h.focus():b.focus()}}te&&I(()=>r.value&&a.retainFocus,t=>{t?document.addEventListener("focusin",l):document.removeEventListener("focusin",l)},{immediate:!0}),I(r,async t=>{var s,d;await ae(),t?(s=m.value.contentEl)==null||s.focus({preventScroll:!0}):(d=m.value.activatorEl)==null||d.focus({preventScroll:!0})});const n=F(()=>w({"aria-haspopup":"dialog","aria-expanded":String(r.value)},a.activatorProps));return Y(()=>{const[t]=T.filterProps(a);return o(T,w({ref:m,class:["v-dialog",{"v-dialog--fullscreen":a.fullscreen,"v-dialog--scrollable":a.scrollable},a.class],style:a.style},t,{modelValue:r.value,"onUpdate:modelValue":s=>r.value=s,"aria-modal":"true",activatorProps:n.value,role:"dialog"},i),{activator:e.activator,default:function(){for(var s=arguments.length,d=new Array(s),v=0;v<s;v++)d[v]=arguments[v];return o(Q,{root:!0},{default:()=>{var f;return[(f=e.default)==null?void 0:f.call(e,...d)]}})}})}),G({},m)}});const Me=A({id:String,...ne(J({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:Z}}),["absolute"])},"v-menu"),Ie=$()({name:"VMenu",props:Me(),emits:{"update:modelValue":a=>!0},setup(a,g){let{slots:e}=g;const r=X(a,"modelValue"),{scopeId:i}=K(),m=se(),l=F(()=>a.id||`v-menu-${m}`),n=P(),t=re(L,null),s=P(0);ie(L,{register(){++s.value},unregister(){--s.value},closeParents(){setTimeout(()=>{s.value||(r.value=!1,t==null||t.closeParents())},40)}}),I(r,f=>{f?t==null||t.register():t==null||t.unregister()});function d(){t==null||t.closeParents()}const v=F(()=>w({"aria-haspopup":"menu","aria-expanded":String(r.value),"aria-owns":l.value},a.activatorProps));return Y(()=>{const[f]=T.filterProps(a);return o(T,w({ref:n,class:["v-menu",a.class],style:a.style},f,{modelValue:r.value,"onUpdate:modelValue":c=>r.value=c,absolute:!0,activatorProps:v.value,"onClick:outside":d},i),{activator:e.activator,default:function(){for(var c=arguments.length,b=new Array(c),h=0;h<c;h++)b[h]=arguments[h];return o(Q,{root:!0},{default:()=>{var C;return[(C=e.default)==null?void 0:C.call(e,...b)]}})}})}),G({id:l,ΨopenChildren:s},n)}}),Fe={key:0,class:"hidden-sm-and-down"},$e={__name:"navbar",props:{provinces:Object,categories:Object,tags:Object},setup(a){const g=le();let e=P(!1),r=P(!1);ce(()=>{r.value=localStorage.getItem("isDarkMode")==="true",g.global.name.value=r.value?"dark":"light"});const i=()=>{r.value=localStorage.getItem("isDarkMode")!=="true",localStorage.setItem("isDarkMode",r.value),g.global.name.value=r.value?"dark":"light"};return(m,l)=>(p(),E(ke,{color:"primary",height:"60",class:"overflow-visible position-relative"},{default:u(()=>[o(ye,null,{default:u(()=>[o(pe,null,{default:u(()=>[o(V,{color:"white",rounded:"0",height:"60",href:"/",class:"hidden-md-only",icon:y(ue)},null,8,["icon"]),a.categories.length>0?(p(),_("div",Fe,[(p(!0),_(S,null,D(a.categories.sort((n,t)=>n.sort>t.sort?1:-1),(n,t)=>(p(),_(S,null,[o(V,{height:"60",size:"small",class:"text-h6 font-weight-bold rounded-0",href:"/category/"+n.slug,style:{"font-family":"'Rajdhani' !important"}},{default:u(()=>[x(B(n.name),1)]),_:2},1032,["href"]),t==1?(p(),E(Ie,{key:0,stacked:"",contained:"",width:"150",location:"top","location-strategy":"connected"},{activator:u(({props:s})=>[o(V,w({rounded:"0",color:"white",height:"60",size:"small"},s,{class:"font-weight-bold text-h6",style:{"font-family":"'Rajdhani' !important"}}),{default:u(()=>[x(" प्रदेश "),o(z,{end:"",size:"x-small",icon:y(de)},null,8,["icon"])]),_:2},1040)]),default:u(()=>[o(Pe,{class:"rounded-t-0"},{default:u(()=>[(p(!0),_(S,null,D(a.provinces,s=>(p(),E(Ce,{href:"/province/"+s.name},{default:u(()=>[o(Ee,null,{default:u(()=>[x(B(s.name),1)]),_:2},1024)]),_:2},1032,["href"]))),256))]),_:2},1024)]),_:2},1024)):R("",!0)],64))),256))])):R("",!0),o(q),o(V,{rounded:"0",height:"60",class:"font-weight-bold text-subtitle-1",onClick:i,icon:y(r)?y(me):y(fe)},null,8,["icon"]),o(Be,{modelValue:y(e),"onUpdate:modelValue":l[2]||(l[2]=n=>M(e)?e.value=n:e=n),scrim:"black","max-width":"650"},{activator:u(({props:n})=>[o(V,w({color:"white",rounded:"0",height:"60",class:"font-weight-bold text-h6"},n),{default:u(()=>[o(z,{icon:y(ge)},null,8,["icon"])]),_:2},1040)]),default:u(()=>[o(Se,null,{default:u(()=>[o(N,{class:"d-flex"},{default:u(()=>[x(" Search for news and articles "),o(q),o(V,{size:"x-small",color:"primary",variant:"tonal",icon:y(ve),onClick:l[0]||(l[0]=n=>M(e)?e.value=!1:e=!1),"location-strategy":"static"},null,8,["icon"])]),_:1}),o(Ve,{action:"/search",method:"get"},{default:u(()=>[o(U,{class:"py-0"},{default:u(()=>[o(be,{variant:"outlined",name:"search",placeholder:"Type here to search"})]),_:1}),o(N,null,{default:u(()=>[x("Recommended Tags")]),_:1}),o(U,null,{default:u(()=>[(p(!0),_(S,null,D(a.tags,n=>(p(),E(V,{variant:"text",href:"/search?tag="+n.name},{default:u(()=>[x("#"+B(n.name),1)]),_:2},1032,["href"]))),256))]),_:1}),o(V,{block:"",type:"submit",height:"50",rounded:"0",color:"primary",class:"text-capitalize",onClick:l[1]||(l[1]=n=>M(e)?e.value=!1:e=!1)},{default:u(()=>[x(" Search ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}))}},tt=he($e,[["__scopeId","data-v-42ba7db6"]]);export{tt as default};