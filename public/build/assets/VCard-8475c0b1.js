import{g as y,H as z,c as n,p as I,a0 as u,m as N,a as O,s as h,Q,a7 as $}from"./app-1f6a3bb7.js";import{m as f,u as b,a as G}from"./tag-84200d7a.js";import{c as p,V as A}from"./VAvatar-18e78d52.js";import{h as P,V as g,m as J,p as K,b as U,r as W,s as X,t as Y,c as Z,v as ee,j as ae,R as te,d as ne,k as de,l as ie,q as se,e as le,w as ce,x as re,y as ue,f as oe,z as ve,L as me,o as ke}from"./router-3893207c.js";import{V as ge}from"./VImg-8da7f3b7.js";const ye=y()({name:"VCardActions",props:f(),setup(e,i){let{slots:t}=i;return z({VBtn:{variant:"text"}}),b(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),fe=p("v-card-subtitle"),be=p("v-card-title"),pe=I({appendAvatar:String,appendIcon:u,prependAvatar:String,prependIcon:u,subtitle:String,title:String,...f(),...P()},"v-card-item"),Ce=y()({name:"VCardItem",props:pe(),setup(e,i){let{slots:t}=i;return b(()=>{var l;const a=!!(e.prependAvatar||e.prependIcon),o=!!(a||t.prepend),s=!!(e.appendAvatar||e.appendIcon),v=!!(s||t.append),m=!!(e.title||t.title),k=!!(e.subtitle||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[o&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(g,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&n(A,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[m&&n(be,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),k&&n(fe,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(l=t.default)==null?void 0:l.call(t)]),v&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(g,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):s&&n(A,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Ve=p("v-card-text"),he=I({appendAvatar:String,appendIcon:u,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:u,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...J(),...f(),...P(),...K(),...U(),...W(),...X(),...Y(),...Z(),...ee(),...G(),...N(),...ae({variant:"elevated"})},"v-card"),Le=y()({name:"VCard",directives:{Ripple:te},props:he(),setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:o}=O(e),{borderClasses:s}=ne(e),{colorClasses:v,colorStyles:m,variantClasses:k}=de(e),{densityClasses:l}=ie(e),{dimensionStyles:d}=se(e),{elevationClasses:S}=le(e),{loaderClasses:x}=ce(e),{locationStyles:L}=re(e),{positionClasses:T}=ue(e),{roundedClasses:B}=oe(e),c=ve(e,t),D=h(()=>e.link!==!1&&c.isLink.value),r=h(()=>!e.disabled&&e.link!==!1&&(e.link||c.isClickable.value));return b(()=>{const _=D.value?"a":e.tag,R=!!(a.title||e.title),w=!!(a.subtitle||e.subtitle),E=R||w,F=!!(a.append||e.appendAvatar||e.appendIcon),H=!!(a.prepend||e.prependAvatar||e.prependIcon),M=!!(a.image||e.image),j=E||H||F,q=!!(a.text||e.text);return Q(n(_,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":r.value},o.value,s.value,v.value,l.value,S.value,x.value,T.value,B.value,k.value,e.class],style:[m.value,d.value,L.value,e.style],href:c.href.value,onClick:r.value&&c.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var C;return[M&&n("div",{key:"image",class:"v-card__image"},[a.image?n(g,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(ge,{key:"image-img",cover:!0,src:e.image},null)]),n(me,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),j&&n(Ce,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),q&&n(Ve,{key:"text"},{default:()=>{var V;return[((V=a.text)==null?void 0:V.call(a))??e.text]}}),(C=a.default)==null?void 0:C.call(a),a.actions&&n(ye,null,{default:a.actions}),ke(r.value,"v-card")]}}),[[$("ripple"),r.value&&e.ripple]])}),{}}});export{be as V,Le as a,Ve as b};
