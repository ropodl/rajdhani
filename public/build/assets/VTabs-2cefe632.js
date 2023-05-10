import{aF as le,N as se,m as q,b as U,c as be,g as O,p as Se,a3 as ie,a2 as xe,r as T,d as b,w as ue,G as Ce,h as m,f as A,V as ce,a8 as Te,F as ke,u as we,ac as ze,P as D,$ as Ve,a1 as Z,a4 as Be,a5 as p,a9 as Ee,aG as Pe,Q as Re,C as _e,B as j,D as $e,t as $,O as Ie}from"./app-5e3a03c8.js";import{q as re,V as Y,r as Me,s as He,p as Oe,a as ee,t as Ae,m as Xe,h as Ye}from"./VBtn-1bf73e46.js";import{m as Fe,u as Ge}from"./lazy-3c5d27b7.js";import{M as Le}from"./VImg-edc77ac6.js";import{c as te}from"./index-bd2adcae.js";import{h as We,u as De}from"./color-a0784074.js";import{a as je,s as qe}from"./easing-9f15041e.js";const Ue=e=>{const{touchstartX:o,touchendX:t,touchstartY:n,touchendY:r}=e,s=.5,a=16;e.offsetX=t-o,e.offsetY=r-n,Math.abs(e.offsetY)<s*Math.abs(e.offsetX)&&(e.left&&t<o-a&&e.left(e),e.right&&t>o+a&&e.right(e)),Math.abs(e.offsetX)<s*Math.abs(e.offsetY)&&(e.up&&r<n-a&&e.up(e),e.down&&r>n+a&&e.down(e))};function Ne(e,o){var n;const t=e.changedTouches[0];o.touchstartX=t.clientX,o.touchstartY=t.clientY,(n=o.start)==null||n.call(o,{originalEvent:e,...o})}function Ke(e,o){var n;const t=e.changedTouches[0];o.touchendX=t.clientX,o.touchendY=t.clientY,(n=o.end)==null||n.call(o,{originalEvent:e,...o}),Ue(o)}function Qe(e,o){var n;const t=e.changedTouches[0];o.touchmoveX=t.clientX,o.touchmoveY=t.clientY,(n=o.move)==null||n.call(o,{originalEvent:e,...o})}function Je(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>Ne(t,o),touchend:t=>Ke(t,o),touchmove:t=>Qe(t,o)}}function Ze(e,o){var l;const t=o.value,n=t!=null&&t.parent?e.parentElement:e,r=(t==null?void 0:t.options)??{passive:!0},s=(l=o.instance)==null?void 0:l.$.uid;if(!n||!s)return;const a=Je(o.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[s]=a,le(a).forEach(u=>{n.addEventListener(u,a[u],r)})}function pe(e,o){var s,a;const t=(s=o.value)!=null&&s.parent?e.parentElement:e,n=(a=o.instance)==null?void 0:a.$.uid;if(!(t!=null&&t._touchHandlers)||!n)return;const r=t._touchHandlers[n];le(r).forEach(l=>{t.removeEventListener(l,r[l])}),delete t._touchHandlers[n]}const ve={mounted:Ze,unmounted:pe},et=ve,de=Symbol.for("vuetify:v-window"),fe=Symbol.for("vuetify:v-window-group"),tt=se({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{default:"force"},...q(),...U(),...be()},"v-window"),ft=O()({name:"VWindow",directives:{Touch:ve},props:tt(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{themeClasses:n}=Se(e),{isRtl:r}=ie(),{t:s}=xe(),a=re(e,fe),l=T(),u=b(()=>r.value?!e.reverse:e.reverse),c=T(!1),d=b(()=>{const f=e.direction==="vertical"?"y":"x",C=(u.value?!c.value:c.value)?"-reverse":"";return`v-window-${f}${C}-transition`}),x=T(0),S=T(void 0),h=b(()=>a.items.value.findIndex(f=>a.selected.value.includes(f.id)));ue(h,(f,y)=>{const C=a.items.value.length,V=C-1;C<=2?c.value=f<y:f===V&&y===0?c.value=!0:f===0&&y===V?c.value=!1:c.value=f<y}),Ce(de,{transition:d,isReversed:c,transitionCount:x,transitionHeight:S,rootRef:l});const g=b(()=>e.continuous||h.value!==0),E=b(()=>e.continuous||h.value!==a.items.value.length-1);function R(){g.value&&a.prev()}function P(){E.value&&a.next()}const w=b(()=>{const f=[],y={icon:r.value?e.nextIcon:e.prevIcon,class:`v-window__${u.value?"right":"left"}`,onClick:a.prev,ariaLabel:s("$vuetify.carousel.prev")};f.push(g.value?t.prev?t.prev({props:y}):m(Y,y,null):m("div",null,null));const C={icon:r.value?e.prevIcon:e.nextIcon,class:`v-window__${u.value?"left":"right"}`,onClick:a.next,ariaLabel:s("$vuetify.carousel.next")};return f.push(E.value?t.next?t.next({props:C}):m(Y,C,null):m("div",null,null)),f}),z=b(()=>e.touch===!1?e.touch:{...{left:()=>{u.value?R():P()},right:()=>{u.value?P():R()},start:y=>{let{originalEvent:C}=y;C.stopPropagation()}},...e.touch===!0?{}:e.touch});return A(()=>ce(m(e.tag,{ref:l,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var f,y;return[m("div",{class:"v-window__container",style:{height:S.value}},[(f=t.default)==null?void 0:f.call(t,{group:a}),e.showArrows!==!1&&m("div",{class:"v-window__controls"},[w.value])]),(y=t.additional)==null?void 0:y.call(t,{group:a})]}}),[[Te("touch"),z.value]])),{group:a}}}),ht=O()({name:"VWindowItem",directives:{Touch:et},props:{reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...q(),...Me(),...Fe()},emits:{"group:selected":e=>!0},setup(e,o){let{slots:t}=o;const n=ke(de),r=He(e,fe),{isBooted:s}=we();if(!n||!r)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const a=T(!1),l=b(()=>n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1);function u(){!a.value||!n||(a.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function c(){var g;a.value||!n||(a.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=D((g=n.rootRef.value)==null?void 0:g.clientHeight)),n.transitionCount.value+=1)}function d(){u()}function x(g){a.value&&Ve(()=>{!l.value||!a.value||!n||(n.transitionHeight.value=D(g.clientHeight))})}const S=b(()=>{const g=n.isReversed.value?e.reverseTransition:e.transition;return l.value?{name:typeof g!="string"?n.transition.value:g,onBeforeEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:c,onAfterLeave:u,onLeaveCancelled:d,onEnter:x}:!1}),{hasContent:h}=Ge(e,r.isSelected);return A(()=>m(Le,{transition:S.value,disabled:!s.value},{default:()=>{var g;return[ce(m("div",{class:["v-window-item",r.selectedClass.value,e.class],style:e.style},[h.value&&((g=t.default)==null?void 0:g.call(t))]),[[ze,r.isSelected.value]])]}})),{}}});function ne(e){const t=Math.abs(e);return Math.sign(e)*(t/((1/.501-2)*(1-t)+1))}function oe(e){let{selectedElement:o,containerSize:t,contentSize:n,isRtl:r,currentScrollOffset:s,isHorizontal:a}=e;const l=a?o.clientWidth:o.clientHeight,u=a?o.offsetLeft:o.offsetTop,c=r&&a?n-u-l:u,d=t+s,x=l+c,S=l*.4;return c<=s?s=Math.max(c-S,0):d<=x&&(s=Math.min(s-(d-x-S),n-t)),s}function nt(e){let{selectedElement:o,containerSize:t,contentSize:n,isRtl:r,isHorizontal:s}=e;const a=s?o.clientWidth:o.clientHeight,l=s?o.offsetLeft:o.offsetTop,u=r&&s?n-l-a/2-t/2:l+a/2-t/2;return Math.min(n-t,Math.max(0,u))}const ot=Symbol.for("vuetify:v-slide-group"),he=se({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:ot},nextIcon:{type:Z,default:"$next"},prevIcon:{type:Z,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...q(),...U(),...Oe({selectedClass:"v-slide-group-item--active"})},"v-slide-group"),ae=O()({name:"VSlideGroup",props:he(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{isRtl:n}=ie(),{mobile:r}=Be(),s=re(e,e.symbol),a=T(!1),l=T(0),u=T(0),c=T(0),d=b(()=>e.direction==="horizontal"),{resizeRef:x,contentRect:S}=p(),{resizeRef:h,contentRect:g}=p(),E=b(()=>s.selected.value.length?s.items.value.findIndex(i=>i.id===s.selected.value[0]):-1),R=b(()=>s.selected.value.length?s.items.value.findIndex(i=>i.id===s.selected.value[s.selected.value.length-1]):-1);if(Ee){let i=-1;ue(()=>[s.selected.value,S.value,g.value,d.value],()=>{cancelAnimationFrame(i),i=requestAnimationFrame(()=>{if(S.value&&g.value){const v=d.value?"width":"height";u.value=S.value[v],c.value=g.value[v],a.value=u.value+1<c.value}if(E.value>=0&&h.value){const v=h.value.children[R.value];E.value===0||!a.value?l.value=0:e.centerActive?l.value=nt({selectedElement:v,containerSize:u.value,contentSize:c.value,isRtl:n.value,isHorizontal:d.value}):a.value&&(l.value=oe({selectedElement:v,containerSize:u.value,contentSize:c.value,isRtl:n.value,currentScrollOffset:l.value,isHorizontal:d.value}))}})})}const P=T(!1);let w=0,z=0;function f(i){const v=d.value?"clientX":"clientY";z=(n.value&&d.value?-1:1)*l.value,w=i.touches[0][v],P.value=!0}function y(i){if(!a.value)return;const v=d.value?"clientX":"clientY",B=n.value&&d.value?-1:1;l.value=B*(z+w-i.touches[0][v])}function C(i){const v=c.value-u.value;l.value<0||!a.value?l.value=0:l.value>=v&&(l.value=v),P.value=!1}function V(){x.value&&(x.value[d.value?"scrollLeft":"scrollTop"]=0)}const I=T(!1);function F(i){if(I.value=!0,!(!a.value||!h.value)){for(const v of i.composedPath())for(const B of h.value.children)if(B===v){l.value=oe({selectedElement:B,containerSize:u.value,contentSize:c.value,isRtl:n.value,currentScrollOffset:l.value,isHorizontal:d.value});return}}}function _(i){I.value=!1}function G(i){var v;!I.value&&!(i.relatedTarget&&((v=h.value)!=null&&v.contains(i.relatedTarget)))&&k()}function N(i){h.value&&(d.value?i.key==="ArrowRight"?k(n.value?"prev":"next"):i.key==="ArrowLeft"&&k(n.value?"next":"prev"):i.key==="ArrowDown"?k("next"):i.key==="ArrowUp"&&k("prev"),i.key==="Home"?k("first"):i.key==="End"&&k("last"))}function k(i){var v,B,K,Q,J;if(h.value)if(!i)(v=Pe(h.value)[0])==null||v.focus();else if(i==="next"){const M=(B=h.value.querySelector(":focus"))==null?void 0:B.nextElementSibling;M?M.focus():k("first")}else if(i==="prev"){const M=(K=h.value.querySelector(":focus"))==null?void 0:K.previousElementSibling;M?M.focus():k("last")}else i==="first"?(Q=h.value.firstElementChild)==null||Q.focus():i==="last"&&((J=h.value.lastElementChild)==null||J.focus())}function H(i){const v=l.value+(i==="prev"?-1:1)*u.value;l.value=Re(v,0,c.value-u.value)}const X=b(()=>{let i=l.value>c.value-u.value?-(c.value-u.value)+ne(c.value-u.value-l.value):-l.value;l.value<=0&&(i=ne(-l.value));const v=n.value&&d.value?-1:1;return{transform:`translate${d.value?"X":"Y"}(${v*i}px)`,transition:P.value?"none":"",willChange:P.value?"transform":""}}),L=b(()=>({next:s.next,prev:s.prev,select:s.select,isSelected:s.isSelected})),W=b(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!r.value;case!0:return a.value||Math.abs(l.value)>0;case"mobile":return r.value||a.value||Math.abs(l.value)>0;default:return!r.value&&(a.value||Math.abs(l.value)>0)}}),ge=b(()=>Math.abs(l.value)>0),ye=b(()=>c.value>Math.abs(l.value)+u.value);return A(()=>m(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!d.value,"v-slide-group--has-affixes":W.value,"v-slide-group--is-overflowing":a.value},e.class],style:e.style,tabindex:I.value||s.selected.value.length?-1:0,onFocus:G},{default:()=>{var i,v,B;return[W.value&&m("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!ge.value}],onClick:()=>H("prev")},[((i=t.prev)==null?void 0:i.call(t,L.value))??m(te,null,{default:()=>[m(ee,{icon:n.value?e.nextIcon:e.prevIcon},null)]})]),m("div",{key:"container",ref:x,class:"v-slide-group__container",onScroll:V},[m("div",{ref:h,class:"v-slide-group__content",style:X.value,onTouchstartPassive:f,onTouchmovePassive:y,onTouchendPassive:C,onFocusin:F,onFocusout:_,onKeydown:N},[(v=t.default)==null?void 0:v.call(t,L.value)])]),W.value&&m("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!ye.value}],onClick:()=>H("next")},[((B=t.next)==null?void 0:B.call(t,L.value))??m(te,null,{default:()=>[m(ee,{icon:n.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:s.selected,scrollTo:H,scrollOffset:l,focus:k}}});const me=Symbol.for("vuetify:v-tabs"),at=O()({name:"VTab",props:{fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},..._e(Ae({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},setup(e,o){let{slots:t,attrs:n}=o;const{textColorClasses:r,textColorStyles:s}=We(e,"sliderColor"),a=b(()=>e.direction==="horizontal"),l=T(!1),u=T(),c=T();function d(x){var h,g;let{value:S}=x;if(l.value=S,S){const E=(g=(h=u.value)==null?void 0:h.$el.parentElement)==null?void 0:g.querySelector(".v-tab--selected .v-tab__slider"),R=c.value;if(!E||!R)return;const P=getComputedStyle(E).color,w=E.getBoundingClientRect(),z=R.getBoundingClientRect(),f=a.value?"x":"y",y=a.value?"X":"Y",C=a.value?"right":"bottom",V=a.value?"width":"height",I=w[f],F=z[f],_=I>F?w[C]-z[C]:w[f]-z[f],G=Math.sign(_)>0?a.value?"right":"bottom":Math.sign(_)<0?a.value?"left":"top":"center",k=(Math.abs(_)+(Math.sign(_)<0?w[V]:z[V]))/Math.max(w[V],z[V]),H=w[V]/z[V],X=1.5;je(R,{backgroundColor:[P,""],transform:[`translate${y}(${_}px) scale${y}(${H})`,`translate${y}(${_/X}px) scale${y}(${(k-1)/X+1})`,""],transformOrigin:Array(3).fill(G)},{duration:225,easing:qe})}}return A(()=>{const[x]=Y.filterProps(e);return m(Y,j({symbol:me,ref:u,class:["v-tab",e.class],style:e.style,tabindex:l.value?0:-1,role:"tab","aria-selected":String(l.value),active:!1,block:e.fixed,maxWidth:e.fixed?300:void 0,rounded:0},x,n,{"onGroup:selected":d}),{default:()=>{var S;return[((S=t.default)==null?void 0:S.call(t))??e.text,!e.hideSlider&&m("div",{ref:c,class:["v-tab__slider",r.value],style:s.value},null)]}})}),{}}});function lt(e){return e?e.map(o=>typeof o=="string"?{title:o,value:o}:o):[]}const mt=O()({name:"VTabs",props:{alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...he({mandatory:"force"}),...Xe(),...U()},emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const n=$e(e,"modelValue"),r=b(()=>lt(e.items)),{densityClasses:s}=Ye(e),{backgroundColorClasses:a,backgroundColorStyles:l}=De($(e,"bgColor"));return Ie({VTab:{color:$(e,"color"),direction:$(e,"direction"),stacked:$(e,"stacked"),fixed:$(e,"fixedTabs"),sliderColor:$(e,"sliderColor"),hideSlider:$(e,"hideSlider")}}),A(()=>{const[u]=ae.filterProps(e);return m(ae,j(u,{modelValue:n.value,"onUpdate:modelValue":c=>n.value=c,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},s.value,a.value,e.class],style:[{"--v-tabs-height":D(e.height)},l.value,e.style],role:"tablist",symbol:me}),{default:()=>[t.default?t.default():r.value.map(c=>m(at,j(c,{key:c.title}),null))]})}),{}}});export{mt as V,at as a,ft as b,ht as c};
