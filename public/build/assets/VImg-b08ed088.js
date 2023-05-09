import{g as B,m as O,f as P,h as a,d as b,aq as C,Q as H,ao as M,B as x,T as A,r as S,w as z,aj as L,H as U,Y as $,a9 as Q,N as Y,S as G,af as J}from"./app-eda02d94.js";import{f as K,g as X}from"./color-ed9d44a0.js";function Z(e){return{aspectStyles:b(()=>{const l=Number(e.aspectRatio);return l?{paddingBottom:String(1/l*100)+"%"}:void 0})}}const p=B()({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...O(),...K()},setup(e,l){let{slots:s}=l;const{aspectStyles:n}=Z(e),{dimensionStyles:c}=X(e);return P(()=>{var r;return a("div",{class:["v-responsive",e.class],style:[c.value,e.style]},[a("div",{class:"v-responsive__sizer",style:n.value},null),(r=s.additional)==null?void 0:r.call(s),s.default&&a("div",{class:["v-responsive__content",e.contentClass]},[s.default()])])}),{}}});function ee(e,l){if(!C)return;const s=l.modifiers||{},n=l.value,{handler:c,options:r}=typeof n=="object"?n:{handler:n,options:{}},i=new IntersectionObserver(function(){var f;let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],g=arguments.length>1?arguments[1]:void 0;const o=(f=e._observe)==null?void 0:f[l.instance.$.uid];if(!o)return;const v=d.some(_=>_.isIntersecting);c&&(!s.quiet||o.init)&&(!s.once||v||o.init)&&c(v,d,g),v&&s.once?W(e,l):o.init=!0},r);e._observe=Object(e._observe),e._observe[l.instance.$.uid]={init:!1,observer:i},i.observe(e)}function W(e,l){var n;const s=(n=e._observe)==null?void 0:n[l.instance.$.uid];s&&(s.observer.unobserve(e),delete e._observe[l.instance.$.uid])}const te={mounted:ee,unmounted:W},ne=te,ae=H({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),y=(e,l)=>{let{slots:s}=l;const{transition:n,...c}=e,{component:r=A,...i}=typeof n=="object"?n:{};return M(r,x(typeof n=="string"?{name:n}:i,c),s)},ie=B()({name:"VImg",directives:{intersect:ne},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...O(),...ae()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,l){let{emit:s,slots:n}=l;const c=S(""),r=S(),i=S(e.eager?"loading":"idle"),d=S(),g=S(),o=b(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),v=b(()=>o.value.aspect||d.value/g.value||0);z(()=>e.src,()=>{f(i.value!=="idle")}),z(v,(t,u)=>{!t&&u&&r.value&&h(r.value)}),L(()=>f());function f(t){if(!(e.eager&&t)&&!(C&&!t&&!e.eager)){if(i.value="loading",o.value.lazySrc){const u=new Image;u.src=o.value.lazySrc,h(u,null)}o.value.src&&U(()=>{var u,m;if(s("loadstart",((u=r.value)==null?void 0:u.currentSrc)||o.value.src),(m=r.value)!=null&&m.complete){if(r.value.naturalWidth||I(),i.value==="error")return;v.value||h(r.value,null),_()}else v.value||h(r.value),R()})}}function _(){var t;R(),i.value="loaded",s("load",((t=r.value)==null?void 0:t.currentSrc)||o.value.src)}function I(){var t;i.value="error",s("error",((t=r.value)==null?void 0:t.currentSrc)||o.value.src)}function R(){const t=r.value;t&&(c.value=t.currentSrc||t.src)}let w=-1;function h(t){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const m=()=>{clearTimeout(w);const{naturalHeight:j,naturalWidth:V}=t;j||V?(d.value=V,g.value=j):!t.complete&&i.value==="loading"&&u!=null?w=window.setTimeout(m,u):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(d.value=1,g.value=1)};m()}const T=b(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),k=()=>{var m;if(!o.value.src||i.value==="idle")return null;const t=a("img",{class:["v-img__img",T.value],src:o.value.src,srcset:o.value.srcset,alt:e.alt,sizes:e.sizes,ref:r,onLoad:_,onError:I},null),u=(m=n.sources)==null?void 0:m.call(n);return a(y,{transition:e.transition,appear:!0},{default:()=>[$(u?a("picture",{class:"v-img__picture"},[u,t]):t,[[J,i.value==="loaded"]])]})},F=()=>a(y,{transition:e.transition},{default:()=>[o.value.lazySrc&&i.value!=="loaded"&&a("img",{class:["v-img__img","v-img__img--preload",T.value],src:o.value.lazySrc,alt:e.alt},null)]}),q=()=>n.placeholder?a(y,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!n.error)&&a("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,D=()=>n.error?a(y,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&a("div",{class:"v-img__error"},[n.error()])]}):null,E=()=>e.gradient?a("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,N=S(!1);{const t=z(v,u=>{u&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{N.value=!0})}),t())})}return P(()=>$(a(p,{class:["v-img",{"v-img--booting":!N.value},e.class],style:[{width:G(e.width==="auto"?d.value:e.width)},e.style],aspectRatio:v.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>a(Y,null,[a(k,null,null),a(F,null,null),a(E,null,null),a(q,null,null),a(D,null,null)]),default:n.default}),[[Q("intersect"),{handler:f,options:e.options},null,{once:!0}]])),{currentSrc:c,image:r,state:i,naturalWidth:d,naturalHeight:g}}});export{ne as I,y as M,ie as V,ae as m};
