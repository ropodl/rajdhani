import{g as k,m as L,c as N,p as $,t as v,d as g,P as F,f as B,h as l,aO as z,N as R,a1 as I,b as T,u as Q,V as q,ac as J,B as A,O as X,r as _,aP as Y,aQ as V,ae as Z}from"./app-5e3a03c8.js";import{V as ee}from"./index-bd2adcae.js";import{M as te}from"./VImg-edc77ac6.js";import{u as ae,c as ne,d as ie,e as O,V as w,m as se,f as le}from"./VListItem-a84b8779.js";import{h as E,V as oe,d as re,f as ue,m as ce,a as de,u as ve,e as fe,g as me,b as ge,c as ye}from"./color-a0784074.js";import{m as he,c as be,h as Ce}from"./VBtn-1bf73e46.js";const pe=k()({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...L(),...N()},setup(e,n){let{attrs:t}=n;const{themeClasses:i}=$(e),{textColorClasses:u,textColorStyles:c}=E(v(e,"color")),o=g(()=>{const a={};return e.length&&(a[e.vertical?"maxHeight":"maxWidth"]=F(e.length)),e.thickness&&(a[e.vertical?"borderRightWidth":"borderTopWidth"]=F(e.thickness)),a});return B(()=>l("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},i.value,u.value,e.class],style:[o.value,c.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}}),Ve=z({name:"VListGroupActivator",setup(e,n){let{slots:t}=n;return ae(),()=>{var i;return(i=t.default)==null?void 0:i.call(t)}}}),ke=R({activeColor:String,color:String,collapseIcon:{type:I,default:"$collapse"},expandIcon:{type:I,default:"$expand"},prependIcon:I,appendIcon:I,fluid:Boolean,subgroup:Boolean,value:null,...L(),...T()},"v-list-group"),G=k()({name:"VListGroup",props:{title:String,...ke()},setup(e,n){let{slots:t}=n;const{isOpen:i,open:u,id:c}=ne(v(e,"value"),!0),o=g(()=>`v-list-group--id-${String(c.value)}`),a=ie(),{isBooted:y}=Q();function f(m){u(!i.value,m)}const h=g(()=>({onClick:f,class:"v-list-group__header",id:o.value})),b=g(()=>i.value?e.collapseIcon:e.expandIcon),S=g(()=>({VListItem:{active:i.value,activeColor:e.activeColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&b.value,appendIcon:e.appendIcon||!e.subgroup&&b.value,title:e.title,value:e.value}}));return B(()=>l(e.tag,{class:["v-list-group",{"v-list-group--prepend":a==null?void 0:a.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":i.value},e.class],style:e.style},{default:()=>[t.activator&&l(oe,{defaults:S.value},{default:()=>[l(Ve,null,{default:()=>[t.activator({props:h.value,isOpen:i.value})]})]}),l(te,{transition:{component:ee},disabled:!y.value},{default:()=>{var m;return[q(l("div",{class:"v-list-group__items",role:"group","aria-labelledby":o.value},[(m=t.default)==null?void 0:m.call(t)]),[[J,i.value]])]}})]})),{}}}),Se=k()({name:"VListSubheader",props:{color:String,inset:Boolean,sticky:Boolean,title:String,...L(),...T()},setup(e,n){let{slots:t}=n;const{textColorClasses:i,textColorStyles:u}=E(v(e,"color"));return B(()=>{const c=!!(t.default||e.title);return l(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},i.value,e.class],style:[{textColorStyles:u},e.style]},{default:()=>{var o;return[c&&l("div",{class:"v-list-subheader__text"},[((o=t.default)==null?void 0:o.call(t))??e.title])]}})}),{}}}),W=k()({name:"VListChildren",props:{items:Array},setup(e,n){let{slots:t}=n;return O(),()=>{var i,u;return((i=t.default)==null?void 0:i.call(t))??((u=e.items)==null?void 0:u.map(c=>{var m,P;let{children:o,props:a,type:y,raw:f}=c;if(y==="divider")return((m=t.divider)==null?void 0:m.call(t,{props:a}))??l(pe,a,null);if(y==="subheader")return((P=t.subheader)==null?void 0:P.call(t,{props:a}))??l(Se,a,{default:t.subheader});const h={subtitle:t.subtitle?r=>{var s;return(s=t.subtitle)==null?void 0:s.call(t,{...r,item:f})}:void 0,prepend:t.prepend?r=>{var s;return(s=t.prepend)==null?void 0:s.call(t,{...r,item:f})}:void 0,append:t.append?r=>{var s;return(s=t.append)==null?void 0:s.call(t,{...r,item:f})}:void 0,default:t.default?r=>{var s;return(s=t.default)==null?void 0:s.call(t,{...r,item:f})}:void 0,title:t.title?r=>{var s;return(s=t.title)==null?void 0:s.call(t,{...r,item:f})}:void 0},[b,S]=G.filterProps(a);return o?l(G,A({value:a==null?void 0:a.value},b),{activator:r=>{let{props:s}=r;return t.header?t.header({props:{...a,...s}}):l(w,A(a,s),h)},default:()=>l(W,{items:o},t)}):t.item?t.item(a):l(w,a,h)}))}}}),Pe=R({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"item");function Ie(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Le(e,n){const t=V(n,e.itemType,"item"),i=Ie(n)?n:V(n,e.itemTitle),u=V(n,e.itemValue,void 0),c=V(n,e.itemChildren),o=e.itemProps===!0?Z(n,["children"])[1]:V(n,e.itemProps),a={title:i,value:u,...o};return{type:t,title:a.title,value:a.value,props:a,children:t==="item"&&c?H(e,c):void 0,raw:n}}function H(e,n){const t=[];for(const i of n)t.push(Le(e,i));return t}function Be(e){return{items:g(()=>H(e,e.items))}}const we=k()({name:"VList",props:{activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...se({selectStrategy:"single-leaf",openStrategy:"list"}),...re(),...L(),...he(),...ue(),...ce(),itemType:{type:String,default:"type"},...Pe(),...de(),...T(),...N(),...be({variant:"text"})},emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,n){let{slots:t}=n;const{items:i}=Be(e),{themeClasses:u}=$(e),{backgroundColorClasses:c,backgroundColorStyles:o}=ve(v(e,"bgColor")),{borderClasses:a}=fe(e),{densityClasses:y}=Ce(e),{dimensionStyles:f}=me(e),{elevationClasses:h}=ge(e),{roundedClasses:b}=ye(e),{open:S,select:m}=le(e),P=g(()=>e.lines?`v-list--${e.lines}-line`:void 0),r=v(e,"activeColor"),s=v(e,"color");O(),X({VListGroup:{activeColor:r,color:s},VListItem:{activeClass:v(e,"activeClass"),activeColor:r,color:s,density:v(e,"density"),disabled:v(e,"disabled"),lines:v(e,"lines"),nav:v(e,"nav"),variant:v(e,"variant")}});const x=_(!1),p=_();function K(d){x.value=!0}function M(d){x.value=!1}function U(d){var D;!x.value&&!(d.relatedTarget&&((D=p.value)!=null&&D.contains(d.relatedTarget)))&&C()}function j(d){if(p.value){if(d.key==="ArrowDown")C("next");else if(d.key==="ArrowUp")C("prev");else if(d.key==="Home")C("first");else if(d.key==="End")C("last");else return;d.preventDefault()}}function C(d){if(p.value)return Y(p.value,d)}return B(()=>l(e.tag,{ref:p,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},u.value,c.value,a.value,y.value,h.value,P.value,b.value,e.class],style:[o.value,f.value,e.style],role:"listbox","aria-activedescendant":void 0,onFocusin:K,onFocusout:M,onFocus:U,onKeydown:j},{default:()=>[l(W,{items:i.value},t)]})),{open:S,select:m,focus:C}}});export{we as V,pe as a};
