import{p as I,m as $,g as j,h as C,i as a,e as b,ar as B,ap as x,C as A,T as H,r as S,w as z,ak as U,J as p,Z as O,aa as L,O as J,U as Z,ag as G}from"./app-3959e0c2.js";import{f as K,g as Q}from"./color-1f13a3f5.js";function X(e){return{aspectStyles:b(()=>{const l=Number(e.aspectRatio);return l?{paddingBottom:String(1/l*100)+"%"}:void 0})}}const Y=I({aspectRatio:[String,Number],contentClass:String,...$(),...K()},"v-responsive"),ee=j()({name:"VResponsive",props:Y(),setup(e,l){let{slots:s}=l;const{aspectStyles:n}=X(e),{dimensionStyles:c}=Q(e);return C(()=>{var r;return a("div",{class:["v-responsive",e.class],style:[c.value,e.style]},[a("div",{class:"v-responsive__sizer",style:n.value},null),(r=s.additional)==null?void 0:r.call(s),s.default&&a("div",{class:["v-responsive__content",e.contentClass]},[s.default()])])}),{}}});function te(e,l){if(!B)return;const s=l.modifiers||{},n=l.value,{handler:c,options:r}=typeof n=="object"?n:{handler:n,options:{}},i=new IntersectionObserver(function(){var f;let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],g=arguments.length>1?arguments[1]:void 0;const o=(f=e._observe)==null?void 0:f[l.instance.$.uid];if(!o)return;const v=d.some(_=>_.isIntersecting);c&&(!s.quiet||o.init)&&(!s.once||v||o.init)&&c(v,d,g),v&&s.once?W(e,l):o.init=!0},r);e._observe=Object(e._observe),e._observe[l.instance.$.uid]={init:!1,observer:i},i.observe(e)}function W(e,l){var n;const s=(n=e._observe)==null?void 0:n[l.instance.$.uid];s&&(s.observer.unobserve(e),delete e._observe[l.instance.$.uid])}const ne={mounted:te,unmounted:W},ae=ne,re=I({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),y=(e,l)=>{let{slots:s}=l;const{transition:n,...c}=e,{component:r=H,...i}=typeof n=="object"?n:{};return x(r,A(typeof n=="string"?{name:n}:i,c),s)},se=I({aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...$(),...re()},"v-img"),oe=j()({name:"VImg",directives:{intersect:ae},props:se(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,l){let{emit:s,slots:n}=l;const c=S(""),r=S(),i=S(e.eager?"loading":"idle"),d=S(),g=S(),o=b(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),v=b(()=>o.value.aspect||d.value/g.value||0);z(()=>e.src,()=>{f(i.value!=="idle")}),z(v,(t,u)=>{!t&&u&&r.value&&h(r.value)}),U(()=>f());function f(t){if(!(e.eager&&t)&&!(B&&!t&&!e.eager)){if(i.value="loading",o.value.lazySrc){const u=new Image;u.src=o.value.lazySrc,h(u,null)}o.value.src&&p(()=>{var u,m;if(s("loadstart",((u=r.value)==null?void 0:u.currentSrc)||o.value.src),(m=r.value)!=null&&m.complete){if(r.value.naturalWidth||R(),i.value==="error")return;v.value||h(r.value,null),_()}else v.value||h(r.value),w()})}}function _(){var t;w(),i.value="loaded",s("load",((t=r.value)==null?void 0:t.currentSrc)||o.value.src)}function R(){var t;i.value="error",s("error",((t=r.value)==null?void 0:t.currentSrc)||o.value.src)}function w(){const t=r.value;t&&(c.value=t.currentSrc||t.src)}let T=-1;function h(t){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const m=()=>{clearTimeout(T);const{naturalHeight:P,naturalWidth:k}=t;P||k?(d.value=k,g.value=P):!t.complete&&i.value==="loading"&&u!=null?T=window.setTimeout(m,u):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(d.value=1,g.value=1)};m()}const V=b(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),F=()=>{var m;if(!o.value.src||i.value==="idle")return null;const t=a("img",{class:["v-img__img",V.value],src:o.value.src,srcset:o.value.srcset,alt:e.alt,sizes:e.sizes,ref:r,onLoad:_,onError:R},null),u=(m=n.sources)==null?void 0:m.call(n);return a(y,{transition:e.transition,appear:!0},{default:()=>[O(u?a("picture",{class:"v-img__picture"},[u,t]):t,[[G,i.value==="loaded"]])]})},D=()=>a(y,{transition:e.transition},{default:()=>[o.value.lazySrc&&i.value!=="loaded"&&a("img",{class:["v-img__img","v-img__img--preload",V.value],src:o.value.lazySrc,alt:e.alt},null)]}),E=()=>n.placeholder?a(y,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!n.error)&&a("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,M=()=>n.error?a(y,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&a("div",{class:"v-img__error"},[n.error()])]}):null,q=()=>e.gradient?a("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,N=S(!1);{const t=z(v,u=>{u&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{N.value=!0})}),t())})}return C(()=>O(a(ee,{class:["v-img",{"v-img--booting":!N.value},e.class],style:[{width:Z(e.width==="auto"?d.value:e.width)},e.style],aspectRatio:v.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>a(J,null,[a(F,null,null),a(D,null,null),a(q,null,null),a(E,null,null),a(M,null,null)]),default:n.default}),[[L("intersect"),{handler:f,options:e.options},null,{once:!0}]])),{currentSrc:c,image:r,state:i,naturalWidth:d,naturalHeight:g}}});export{ae as I,y as M,oe as V,re as m};