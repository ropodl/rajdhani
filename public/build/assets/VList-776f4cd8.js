import{p as C,H as x,K as $,k as S,M as R,L as v,q as g,P as A,s as B,e as l,aL as q,a3 as I,J as D,W as z,Y as J,ae as Y,m as _,O as Q,r as w,aM as X,aN as V,ag as Z}from"./app-83f0850e.js";import{V as ee}from"./index-23abd205.js";import{M as te}from"./VRow-62b46d46.js";import{u as ae,c as ne,d as ie,e as W,V as G,m as se,f as le}from"./VListItem-59d59dfd.js";import{y as E,V as oe,m as re,i as ue,g as de,b as ce,c as ve,k as fe,u as me,d as ge,r as ye,h as he,e as be,f as pe}from"./router-d8850963.js";const Ce=C({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...x(),...$()},"v-divider"),ke=S()({name:"VDivider",props:Ce(),setup(e,n){let{attrs:t}=n;const{themeClasses:i}=R(e),{textColorClasses:u,textColorStyles:d}=E(v(e,"color")),o=g(()=>{const a={};return e.length&&(a[e.vertical?"maxHeight":"maxWidth"]=A(e.length)),e.thickness&&(a[e.vertical?"borderRightWidth":"borderTopWidth"]=A(e.thickness)),a});return B(()=>l("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},i.value,u.value,e.class],style:[o.value,d.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}}),Ve=q({name:"VListGroupActivator",setup(e,n){let{slots:t}=n;return ae(),()=>{var i;return(i=t.default)==null?void 0:i.call(t)}}}),Se=C({activeColor:String,color:String,collapseIcon:{type:I,default:"$collapse"},expandIcon:{type:I,default:"$expand"},prependIcon:I,appendIcon:I,fluid:Boolean,subgroup:Boolean,title:String,value:null,...x(),...D()},"v-list-group"),N=S()({name:"VListGroup",props:Se(),setup(e,n){let{slots:t}=n;const{isOpen:i,open:u,id:d}=ne(v(e,"value"),!0),o=g(()=>`v-list-group--id-${String(d.value)}`),a=ie(),{isBooted:y}=z();function f(m){u(!i.value,m)}const h=g(()=>({onClick:f,class:"v-list-group__header",id:o.value})),b=g(()=>i.value?e.collapseIcon:e.expandIcon),P=g(()=>({VListItem:{active:i.value,activeColor:e.activeColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&b.value,appendIcon:e.appendIcon||!e.subgroup&&b.value,title:e.title,value:e.value}}));return B(()=>l(e.tag,{class:["v-list-group",{"v-list-group--prepend":a==null?void 0:a.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":i.value},e.class],style:e.style},{default:()=>[t.activator&&l(oe,{defaults:P.value},{default:()=>[l(Ve,null,{default:()=>[t.activator({props:h.value,isOpen:i.value})]})]}),l(te,{transition:{component:ee},disabled:!y.value},{default:()=>{var m;return[J(l("div",{class:"v-list-group__items",role:"group","aria-labelledby":o.value},[(m=t.default)==null?void 0:m.call(t)]),[[Y,i.value]])]}})]})),{}}}),Pe=C({color:String,inset:Boolean,sticky:Boolean,title:String,...x(),...D()},"v-list-subheader"),Le=S()({name:"VListSubheader",props:Pe(),setup(e,n){let{slots:t}=n;const{textColorClasses:i,textColorStyles:u}=E(v(e,"color"));return B(()=>{const d=!!(t.default||e.title);return l(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},i.value,e.class],style:[{textColorStyles:u},e.style]},{default:()=>{var o;return[d&&l("div",{class:"v-list-subheader__text"},[((o=t.default)==null?void 0:o.call(t))??e.title])]}})}),{}}}),Ie=C({items:Array},"v-list-children"),M=S()({name:"VListChildren",props:Ie(),setup(e,n){let{slots:t}=n;return W(),()=>{var i,u;return((i=t.default)==null?void 0:i.call(t))??((u=e.items)==null?void 0:u.map(d=>{var m,L;let{children:o,props:a,type:y,raw:f}=d;if(y==="divider")return((m=t.divider)==null?void 0:m.call(t,{props:a}))??l(ke,a,null);if(y==="subheader")return((L=t.subheader)==null?void 0:L.call(t,{props:a}))??l(Le,a,{default:t.subheader});const h={subtitle:t.subtitle?r=>{var s;return(s=t.subtitle)==null?void 0:s.call(t,{...r,item:f})}:void 0,prepend:t.prepend?r=>{var s;return(s=t.prepend)==null?void 0:s.call(t,{...r,item:f})}:void 0,append:t.append?r=>{var s;return(s=t.append)==null?void 0:s.call(t,{...r,item:f})}:void 0,default:t.default?r=>{var s;return(s=t.default)==null?void 0:s.call(t,{...r,item:f})}:void 0,title:t.title?r=>{var s;return(s=t.title)==null?void 0:s.call(t,{...r,item:f})}:void 0},[b,P]=N.filterProps(a);return o?l(N,_({value:a==null?void 0:a.value},b),{activator:r=>{let{props:s}=r;return t.header?t.header({props:{...a,...s}}):l(G,_(a,s),h)},default:()=>l(M,{items:o},t)}):t.item?t.item(a):l(G,a,h)}))}}}),xe=C({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"item");function Be(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Te(e,n){const t=V(n,e.itemType,"item"),i=Be(n)?n:V(n,e.itemTitle),u=V(n,e.itemValue,void 0),d=V(n,e.itemChildren),o=e.itemProps===!0?Z(n,["children"])[1]:V(n,e.itemProps),a={title:i,value:u,...o};return{type:t,title:a.title,value:a.value,props:a,children:t==="item"&&d?O(e,d):void 0,raw:n}}function O(e,n){const t=[];for(const i of n)t.push(Te(e,i));return t}function De(e){return{items:g(()=>O(e,e.items))}}const Fe=C({activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...se({selectStrategy:"single-leaf",openStrategy:"list"}),...re(),...x(),...ue(),...de(),...ce(),itemType:{type:String,default:"type"},...xe(),...ve(),...D(),...$(),...fe({variant:"text"})},"v-list"),$e=S()({name:"VList",props:Fe(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,n){let{slots:t}=n;const{items:i}=De(e),{themeClasses:u}=R(e),{backgroundColorClasses:d,backgroundColorStyles:o}=me(v(e,"bgColor")),{borderClasses:a}=ge(e),{densityClasses:y}=ye(e),{dimensionStyles:f}=he(e),{elevationClasses:h}=be(e),{roundedClasses:b}=pe(e),{open:P,select:m}=le(e),L=g(()=>e.lines?`v-list--${e.lines}-line`:void 0),r=v(e,"activeColor"),s=v(e,"color");W(),Q({VListGroup:{activeColor:r,color:s},VListItem:{activeClass:v(e,"activeClass"),activeColor:r,color:s,density:v(e,"density"),disabled:v(e,"disabled"),lines:v(e,"lines"),nav:v(e,"nav"),variant:v(e,"variant")}});const T=w(!1),k=w();function H(c){T.value=!0}function K(c){T.value=!1}function U(c){var F;!T.value&&!(c.relatedTarget&&((F=k.value)!=null&&F.contains(c.relatedTarget)))&&p()}function j(c){if(k.value){if(c.key==="ArrowDown")p("next");else if(c.key==="ArrowUp")p("prev");else if(c.key==="Home")p("first");else if(c.key==="End")p("last");else return;c.preventDefault()}}function p(c){if(k.value)return X(k.value,c)}return B(()=>l(e.tag,{ref:k,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},u.value,d.value,a.value,y.value,h.value,L.value,b.value,e.class],style:[o.value,f.value,e.style],role:"listbox","aria-activedescendant":void 0,onFocusin:H,onFocusout:K,onFocus:U,onKeydown:j},{default:()=>[l(M,{items:i.value},t)]})),{open:P,select:m,focus:p}}});export{$e as V,ke as a};
