import{aq as X,p as w,ac as N,e as d,i as v,N as Ye,l as ve,m as A,b as O,c as D,g as L,d as G,Q as qe,t as V,h as P,ar as te,F as je,H as _e,G as Je,V as ne,w as ae,a0 as Qe,E as ke,M as Ze,as as Ke,ah as et,at as tt,U as nt,C as at,au as st,R as k,a2 as Z,r as H,av as it,aw as lt,ap as ot,a5 as rt,ax as ut,ay as ct,az as fe,P as we,T as dt,aA as vt,aB as me,I as ft,J as Se,o as mt,X as gt,a8 as ht}from"./app-3ee45490.js";import{i as yt,d as xe,m as Ie,a as se,e as Ee,b as Ve,c as ie,h as U,u as ge,f as pt,g as bt,V as j}from"./color-9d268996.js";const Be=["top","bottom"],Ct=["start","end","left","right"];function _t(e,t){let[a,n]=e.split(" ");return n||(n=X(Be,a)?"start":X(Ct,a)?"top":"center"),{side:he(a,t),align:he(n,t)}}function he(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function nn(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function an(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function sn(e){return{side:e.align,align:e.side}}function ln(e){return X(Be,e.side)?"y":"x"}const kt=[null,"default","comfortable","compact"],Te=w({density:{type:String,default:"default",validator:e=>kt.includes(e)}},"density");function Le(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:N();return{densityClasses:d(()=>`${t}--density-${e.density}`)}}const wt=["elevated","flat","tonal","outlined","text","plain"];function St(e,t){return v(Ye,null,[e&&v("span",{key:"overlay",class:`${t}__overlay`},null),v("span",{key:"underlay",class:`${t}__underlay`},null)])}const Pe=w({color:String,variant:{type:String,default:"elevated",validator:e=>wt.includes(e)}},"variant");function xt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:N();const a=d(()=>{const{variant:s}=ve(e);return`${t}--variant-${s}`}),{colorClasses:n,colorStyles:i}=yt(d(()=>{const{variant:s,color:l}=ve(e);return{[["elevated","flat"].includes(s)?"background":"text"]:l}}));return{colorClasses:n,colorStyles:i,variantClasses:a}}const $e=w({divided:Boolean,...xe(),...A(),...Te(),...Ie(),...se(),...O(),...D(),...Pe()},"v-btn-group"),ye=L()({name:"VBtnGroup",props:$e(),setup(e,t){let{slots:a}=t;const{themeClasses:n}=G(e),{densityClasses:i}=Le(e),{borderClasses:s}=Ee(e),{elevationClasses:l}=Ve(e),{roundedClasses:c}=ie(e);qe({VBtn:{height:"auto",color:V(e,"color"),density:V(e,"density"),flat:!0,variant:V(e,"variant")}}),P(()=>v(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,s.value,i.value,l.value,c.value,e.class],style:e.style},a))}}),It=w({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Et=w({value:null,disabled:Boolean,selectedClass:String},"group-item");function Vt(e,t){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=te("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=je();_e(Symbol.for(`${t.description}:id`),i);const s=Je(t,null);if(!s){if(!a)return s;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const l=V(e,"value"),c=d(()=>s.disabled.value||e.disabled);s.register({id:i,value:l,disabled:c},n),ne(()=>{s.unregister(i)});const r=d(()=>s.isSelected(i)),g=d(()=>r.value&&[s.selectedClass.value,e.selectedClass]);return ae(r,h=>{n.emit("group:selected",{value:h})}),{id:i,isSelected:r,toggle:()=>s.select(i,!r.value),select:h=>s.select(i,h),selectedClass:g,value:l,disabled:c,group:s}}function Bt(e,t){let a=!1;const n=Qe([]),i=ke(e,"modelValue",[],o=>o==null?[]:Re(n,et(o)),o=>{const u=Lt(n,o);return e.multiple?u:u[0]}),s=te("useGroup");function l(o,u){const y=o,m=Symbol.for(`${t.description}:id`),p=tt(m,s==null?void 0:s.vnode).indexOf(u);p>-1?n.splice(p,0,y):n.push(y)}function c(o){if(a)return;r();const u=n.findIndex(y=>y.id===o);n.splice(u,1)}function r(){const o=n.find(u=>!u.disabled);o&&e.mandatory==="force"&&!i.value.length&&(i.value=[o.id])}Ze(()=>{r()}),ne(()=>{a=!0});function g(o,u){const y=n.find(m=>m.id===o);if(!(u&&(y!=null&&y.disabled)))if(e.multiple){const m=i.value.slice(),_=m.findIndex(f=>f===o),p=~_;if(u=u??!p,p&&e.mandatory&&m.length<=1||!p&&e.max!=null&&m.length+1>e.max)return;_<0&&u?m.push(o):_>=0&&!u&&m.splice(_,1),i.value=m}else{const m=i.value.includes(o);if(e.mandatory&&m)return;i.value=u??!m?[o]:[]}}function h(o){if(e.multiple&&nt('This method is not supported when using "multiple" prop'),i.value.length){const u=i.value[0],y=n.findIndex(p=>p.id===u);let m=(y+o)%n.length,_=n[m];for(;_.disabled&&m!==y;)m=(m+o)%n.length,_=n[m];if(_.disabled)return;i.value=[n[m].id]}else{const u=n.find(y=>!y.disabled);u&&(i.value=[u.id])}}const C={register:l,unregister:c,selected:i,select:g,disabled:V(e,"disabled"),prev:()=>h(n.length-1),next:()=>h(1),isSelected:o=>i.value.includes(o),selectedClass:d(()=>e.selectedClass),items:d(()=>n),getItemIndex:o=>Tt(n,o)};return _e(t,C),C}function Tt(e,t){const a=Re(e,[t]);return a.length?e.findIndex(n=>n.id===a[0]):-1}function Re(e,t){const a=[];for(let n=0;n<e.length;n++){const i=e[n];i.value!=null?t.find(s=>Ke(s,i.value))!=null&&a.push(i.id):t.includes(n)&&a.push(i.id)}return a}function Lt(e,t){const a=[];for(let n=0;n<e.length;n++){const i=e[n];t.includes(i.id)&&a.push(i.value!=null?i.value:n)}return a}const ze=Symbol.for("vuetify:v-btn-toggle"),Pt=w({...$e(),...It()},"v-btn-toggle");L()({name:"VBtnToggle",props:Pt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const{isSelected:n,next:i,prev:s,select:l,selected:c}=Bt(e,ze);return P(()=>{const[r]=ye.filterProps(e);return v(ye,at({class:["v-btn-toggle",e.class]},r,{style:e.style}),{default:()=>{var g;return[(g=a.default)==null?void 0:g.call(a,{isSelected:n,next:i,prev:s,select:l,selected:c})]}})}),{next:i,prev:s,select:l}}});const $t=["x-small","small","default","large","x-large"],le=w({size:{type:[String,Number],default:"default"}},"size");function oe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:N();return st(()=>{let a,n;return X($t,e.size)?a=`${t}--size-${e.size}`:e.size&&(n={width:k(e.size),height:k(e.size)}),{sizeClasses:a,sizeStyles:n}})}const Rt=w({color:String,start:Boolean,end:Boolean,icon:Z,...A(),...le(),...O({tag:"i"}),...D()},"v-icon"),J=L()({name:"VIcon",props:Rt(),setup(e,t){let{attrs:a,slots:n}=t;const i=H(),{themeClasses:s}=G(e),{iconData:l}=it(d(()=>i.value||e.icon)),{sizeClasses:c}=oe(e),{textColorClasses:r,textColorStyles:g}=U(V(e,"color"));return P(()=>{var C,o;const h=(C=n.default)==null?void 0:C.call(n);return h&&(i.value=(o=h.filter(u=>u.type===lt&&u.children&&typeof u.children=="string")[0])==null?void 0:o.children),v(l.value.component,{tag:e.tag,icon:l.value.icon,class:["v-icon","notranslate",s.value,c.value,r.value,{"v-icon--clickable":!!a.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[c.value?void 0:{fontSize:k(e.size),height:k(e.size),width:k(e.size)},g.value,e.style],role:a.onClick?"button":void 0,"aria-hidden":!a.onClick},{default:()=>[h]})}),{}}});function Ne(e,t){const a=H(),n=H(!1);if(ot){const i=new IntersectionObserver(s=>{e==null||e(s,i),n.value=!!s.find(l=>l.isIntersecting)},t);ne(()=>{i.disconnect()}),ae(a,(s,l)=>{l&&(i.unobserve(l),n.value=!1),s&&i.observe(s)},{flush:"post"})}return{intersectionRef:a,isIntersecting:n}}const zt=w({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...A(),...le(),...O({tag:"div"}),...D()},"v-progress-circular"),Nt=L()({name:"VProgressCircular",props:zt(),setup(e,t){let{slots:a}=t;const n=20,i=2*Math.PI*n,s=H(),{themeClasses:l}=G(e),{sizeClasses:c,sizeStyles:r}=oe(e),{textColorClasses:g,textColorStyles:h}=U(V(e,"color")),{textColorClasses:C,textColorStyles:o}=U(V(e,"bgColor")),{intersectionRef:u,isIntersecting:y}=Ne(),{resizeRef:m,contentRect:_}=rt(),p=d(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),f=d(()=>Number(e.width)),b=d(()=>r.value?Number(e.size):_.value?_.value.width:Math.max(f.value,32)),E=d(()=>n/(1-f.value/b.value)*2),I=d(()=>f.value/b.value*E.value),$=d(()=>k((100-p.value)/100*i));return ut(()=>{u.value=s.value,m.value=s.value}),P(()=>v(e.tag,{ref:s,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":y.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},l.value,c.value,g.value,e.class],style:[r.value,h.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:p.value},{default:()=>[v("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${E.value} ${E.value}`},[v("circle",{class:["v-progress-circular__underlay",C.value],style:o.value,fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":I.value,"stroke-dasharray":i,"stroke-dashoffset":0},null),v("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":I.value,"stroke-dasharray":i,"stroke-dashoffset":$.value},null)]),a.default&&v("div",{class:"v-progress-circular__content"},[a.default({value:p.value})])]})),{}}});const K=Symbol("rippleStop"),At=80;function pe(e,t){e.style.transform=t,e.style.webkitTransform=t}function ee(e){return e.constructor.name==="TouchEvent"}function Ae(e){return e.constructor.name==="KeyboardEvent"}const Ot=function(e,t){var C;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=0,i=0;if(!Ae(e)){const o=t.getBoundingClientRect(),u=ee(e)?e.touches[e.touches.length-1]:e;n=u.clientX-o.left,i=u.clientY-o.top}let s=0,l=.3;(C=t._ripple)!=null&&C.circle?(l=.15,s=t.clientWidth/2,s=a.center?s:s+Math.sqrt((n-s)**2+(i-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const c=`${(t.clientWidth-s*2)/2}px`,r=`${(t.clientHeight-s*2)/2}px`,g=a.center?c:`${n-s}px`,h=a.center?r:`${i-s}px`;return{radius:s,scale:l,x:g,y:h,centerX:c,centerY:r}},W={show(e,t){var u;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((u=t==null?void 0:t._ripple)!=null&&u.enabled))return;const n=document.createElement("span"),i=document.createElement("span");n.appendChild(i),n.className="v-ripple__container",a.class&&(n.className+=` ${a.class}`);const{radius:s,scale:l,x:c,y:r,centerX:g,centerY:h}=Ot(e,t,a),C=`${s*2}px`;i.className="v-ripple__animation",i.style.width=C,i.style.height=C,t.appendChild(n);const o=window.getComputedStyle(t);o&&o.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),pe(i,`translate(${c}, ${r}) scale3d(${l},${l},${l})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),pe(i,`translate(${g}, ${h}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const a=t[t.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const n=performance.now()-Number(a.dataset.activated),i=Math.max(250-n,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout(()=>{var c;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((c=a.parentNode)==null?void 0:c.parentNode)===e&&e.removeChild(a.parentNode)},300)},i)}};function Oe(e){return typeof e>"u"||!!e}function R(e){const t={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[K])){if(e[K]=!0,ee(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(t.center=a._ripple.centered||Ae(e),a._ripple.class&&(t.class=a._ripple.class),ee(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{W.show(e,a,t)},a._ripple.showTimer=window.setTimeout(()=>{var n;(n=a==null?void 0:a._ripple)!=null&&n.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},At)}else W.show(e,a,t)}}function be(e){e[K]=!0}function x(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{x(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),W.hide(t)}}function De(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let z=!1;function Ge(e){!z&&(e.keyCode===fe.enter||e.keyCode===fe.space)&&(z=!0,R(e))}function Me(e){z=!1,x(e)}function Fe(e){z&&(z=!1,x(e))}function Xe(e,t,a){const{value:n,modifiers:i}=t,s=Oe(n);if(s||W.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=i.center,e._ripple.circle=i.circle,ct(n)&&n.class&&(e._ripple.class=n.class),s&&!a){if(i.stop){e.addEventListener("touchstart",be,{passive:!0}),e.addEventListener("mousedown",be);return}e.addEventListener("touchstart",R,{passive:!0}),e.addEventListener("touchend",x,{passive:!0}),e.addEventListener("touchmove",De,{passive:!0}),e.addEventListener("touchcancel",x),e.addEventListener("mousedown",R),e.addEventListener("mouseup",x),e.addEventListener("mouseleave",x),e.addEventListener("keydown",Ge),e.addEventListener("keyup",Me),e.addEventListener("blur",Fe),e.addEventListener("dragstart",x,{passive:!0})}else!s&&a&&He(e)}function He(e){e.removeEventListener("mousedown",R),e.removeEventListener("touchstart",R),e.removeEventListener("touchend",x),e.removeEventListener("touchmove",De),e.removeEventListener("touchcancel",x),e.removeEventListener("mouseup",x),e.removeEventListener("mouseleave",x),e.removeEventListener("keydown",Ge),e.removeEventListener("keyup",Me),e.removeEventListener("dragstart",x),e.removeEventListener("blur",Fe)}function Dt(e,t){Xe(e,t,!1)}function Gt(e){delete e._ripple,He(e)}function Mt(e,t){if(t.value===t.oldValue)return;const a=Oe(t.oldValue);Xe(e,t,a)}const Ft={mounted:Dt,unmounted:Gt,updated:Mt};const Ce={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Ue=w({location:String},"location");function We(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=we();return{locationStyles:d(()=>{if(!e.location)return{};const{side:s,align:l}=_t(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function c(g){return a?a(g):0}const r={};return s!=="center"&&(t?r[Ce[s]]=`calc(100% - ${c(s)}px)`:r[s]=0),l!=="center"?t?r[Ce[l]]=`calc(100% - ${c(l)}px)`:r[l]=0:(s==="center"?r.top=r.left="50%":r[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",r.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),r})}}const Xt=w({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...A(),...Ue({location:"top"}),...se(),...O(),...D()},"v-progress-linear"),Ht=L()({name:"VProgressLinear",props:Xt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const n=ke(e,"modelValue"),{isRtl:i,rtlClasses:s}=we(),{themeClasses:l}=G(e),{locationStyles:c}=We(e),{textColorClasses:r,textColorStyles:g}=U(e,"color"),{backgroundColorClasses:h,backgroundColorStyles:C}=ge(d(()=>e.bgColor||e.color)),{backgroundColorClasses:o,backgroundColorStyles:u}=ge(e,"color"),{roundedClasses:y}=ie(e),{intersectionRef:m,isIntersecting:_}=Ne(),p=d(()=>parseInt(e.max,10)),f=d(()=>parseInt(e.height,10)),b=d(()=>parseFloat(e.bufferValue)/p.value*100),E=d(()=>parseFloat(n.value)/p.value*100),I=d(()=>i.value!==e.reverse),$=d(()=>e.indeterminate?"fade-transition":"slide-x-transition"),M=d(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function Y(S){if(!m.value)return;const{left:B,right:q,width:T}=m.value.getBoundingClientRect(),F=I.value?T-S.clientX+(q-T):S.clientX-B;n.value=Math.round(F/T*p.value)}return P(()=>v(e.tag,{ref:m,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&_.value,"v-progress-linear--reverse":I.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},y.value,l.value,s.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?k(f.value):0,"--v-progress-linear-height":k(f.value),...c.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:E.value,onClick:e.clickable&&Y},{default:()=>[e.stream&&v("div",{key:"stream",class:["v-progress-linear__stream",r.value],style:{...g.value,[I.value?"left":"right"]:k(-f.value),borderTop:`${k(f.value/2)} dotted`,opacity:M.value,top:`calc(50% - ${k(f.value/4)})`,width:k(100-b.value,"%"),"--v-progress-linear-stream-to":k(f.value*(I.value?1:-1))}},null),v("div",{class:["v-progress-linear__background",h.value],style:[C.value,{opacity:M.value,width:k(e.stream?b.value:100,"%")}]},null),v(dt,{name:$.value},{default:()=>[e.indeterminate?v("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(S=>v("div",{key:S,class:["v-progress-linear__indeterminate",S,o.value],style:u.value},null))]):v("div",{class:["v-progress-linear__determinate",o.value],style:[u.value,{width:k(E.value,"%")}]},null)]}),a.default&&v("div",{class:"v-progress-linear__content"},[a.default({value:E.value,buffer:b.value})])]})),{}}}),Ut=w({loading:[Boolean,String]},"loader");function Wt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:N();return{loaderClasses:d(()=>({[`${t}--loading`]:e.loading}))}}function on(e,t){var n;let{slots:a}=t;return v("div",{class:`${e.name}__loader`},[((n=a.default)==null?void 0:n.call(a,{color:e.color,isActive:e.active}))||v(Ht,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Yt=["static","relative","fixed","absolute","sticky"],qt=w({position:{type:String,validator:e=>Yt.includes(e)}},"position");function jt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:N();return{positionClasses:d(()=>e.position?`${t}--${e.position}`:void 0)}}function rn(){var e,t;return(t=(e=te("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function Jt(e,t){const a=vt("RouterLink"),n=d(()=>!!(e.href||e.to)),i=d(()=>(n==null?void 0:n.value)||me(t,"click")||me(e,"click"));if(typeof a=="string")return{isLink:n,isClickable:i,href:V(e,"href")};const s=e.to?a.useLink(e):void 0;return{isLink:n,isClickable:i,route:s==null?void 0:s.route,navigate:s==null?void 0:s.navigate,isActive:s&&d(()=>{var l,c;return e.exact?(l=s.isExactActive)==null?void 0:l.value:(c=s.isActive)==null?void 0:c.value}),href:d(()=>e.to?s==null?void 0:s.route.value.href:e.href)}}const Qt=w({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let Q=!1;function un(e,t){let a=!1,n,i;ft&&(Se(()=>{window.addEventListener("popstate",s),n=e==null?void 0:e.beforeEach((l,c,r)=>{Q?a?t(r):r():setTimeout(()=>a?t(r):r()),Q=!0}),i=e==null?void 0:e.afterEach(()=>{Q=!1})}),mt(()=>{window.removeEventListener("popstate",s),n==null||n(),i==null||i()}));function s(l){var c;(c=l.state)!=null&&c.replaced||(a=!0,setTimeout(()=>a=!1))}}function Zt(e,t){ae(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&t&&Se(()=>{t(!0)})},{immediate:!0})}const Kt=w({active:{type:Boolean,default:void 0},symbol:{type:null,default:ze},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:Z,appendIcon:Z,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},text:String,...xe(),...A(),...Te(),...pt(),...Ie(),...Et(),...Ut(),...Ue(),...qt(),...se(),...Qt(),...le(),...O({tag:"button"}),...D(),...Pe({variant:"elevated"})},"v-btn"),cn=L()({name:"VBtn",directives:{Ripple:Ft},props:Kt(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:a,slots:n}=t;const{themeClasses:i}=G(e),{borderClasses:s}=Ee(e),{colorClasses:l,colorStyles:c,variantClasses:r}=xt(e),{densityClasses:g}=Le(e),{dimensionStyles:h}=bt(e),{elevationClasses:C}=Ve(e),{loaderClasses:o}=Wt(e),{locationStyles:u}=We(e),{positionClasses:y}=jt(e),{roundedClasses:m}=ie(e),{sizeClasses:_,sizeStyles:p}=oe(e),f=Vt(e,e.symbol,!1),b=Jt(e,a),E=d(()=>{var S;return e.active!==void 0?e.active:b.isLink.value?(S=b.isActive)==null?void 0:S.value:f==null?void 0:f.isSelected.value}),I=d(()=>(f==null?void 0:f.disabled.value)||e.disabled),$=d(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),M=d(()=>{if(e.value!==void 0)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function Y(S){var B;I.value||((B=b.navigate)==null||B.call(b,S),f==null||f.toggle())}return Zt(b,f==null?void 0:f.select),P(()=>{var re,ue;const S=b.isLink.value?"a":e.tag,B=!!(e.prependIcon||n.prepend),q=!!(e.appendIcon||n.append),T=!!(e.icon&&e.icon!==!0),F=(f==null?void 0:f.isSelected.value)&&(!b.isLink.value||((re=b.isActive)==null?void 0:re.value))||!f||((ue=b.isActive)==null?void 0:ue.value);return gt(v(S,{type:S==="a"?void 0:"button",class:["v-btn",f==null?void 0:f.selectedClass.value,{"v-btn--active":E.value,"v-btn--block":e.block,"v-btn--disabled":I.value,"v-btn--elevated":$.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},i.value,s.value,F?l.value:void 0,g.value,C.value,o.value,y.value,m.value,_.value,r.value,e.class],style:[F?c.value:void 0,h.value,u.value,p.value,e.style],disabled:I.value||void 0,href:b.href.value,onClick:Y,value:M.value},{default:()=>{var ce;return[St(!0,"v-btn"),!e.icon&&B&&v("span",{key:"prepend",class:"v-btn__prepend"},[n.prepend?v(j,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},n.prepend):v(J,{key:"prepend-icon",icon:e.prependIcon},null)]),v("span",{class:"v-btn__content","data-no-activator":""},[!n.default&&T?v(J,{key:"content-icon",icon:e.icon},null):v(j,{key:"content-defaults",disabled:!T,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var de;return[((de=n.default)==null?void 0:de.call(n))??e.text]}})]),!e.icon&&q&&v("span",{key:"append",class:"v-btn__append"},[n.append?v(j,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},n.append):v(J,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&v("span",{key:"loader",class:"v-btn__loader"},[((ce=n.loader)==null?void 0:ce.call(n))??v(Nt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[ht("ripple"),!I.value&&e.ripple,null]])}),{}}});export{rn as A,un as B,on as L,Ft as R,cn as V,J as a,le as b,Pe as c,Ut as d,Ue as e,qt as f,Qt as g,Le as h,Wt as i,We as j,jt as k,Jt as l,Te as m,St as n,oe as o,It as p,Bt as q,Et as r,Vt as s,Kt as t,xt as u,_t as v,nn as w,an as x,sn as y,ln as z};