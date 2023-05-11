import{p as _,H as w,k as C,y as I,e as i,s as S,ap as B,an as F,m as Z,T as ee,r as y,w as j,ai as te,z as ne,Y as A,a0 as ae,F as se,P as re,ae as le,J as M,N as ie,ao as oe,al as ue}from"./app-313e5e90.js";import{h as ce,i as de}from"./VBtn-fb2ce8df.js";function ve(e){return{aspectStyles:S(()=>{const a=Number(e.aspectRatio);return a?{paddingBottom:String(1/a*100)+"%"}:void 0})}}const ge=_({aspectRatio:[String,Number],contentClass:String,...w(),...ce()},"v-responsive"),me=C()({name:"VResponsive",props:ge(),setup(e,a){let{slots:n}=a;const{aspectStyles:t}=ve(e),{dimensionStyles:o}=de(e);return I(()=>{var r;return i("div",{class:["v-responsive",e.class],style:[o.value,e.style]},[i("div",{class:"v-responsive__sizer",style:t.value},null),(r=n.additional)==null?void 0:r.call(n),n.default&&i("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}});function fe(e,a){if(!B)return;const n=a.modifiers||{},t=a.value,{handler:o,options:r}=typeof t=="object"?t:{handler:t,options:{}},l=new IntersectionObserver(function(){var f;let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],v=arguments.length>1?arguments[1]:void 0;const u=(f=e._observe)==null?void 0:f[a.instance.$.uid];if(!u)return;const g=d.some(b=>b.isIntersecting);o&&(!n.quiet||u.init)&&(!n.once||g||u.init)&&o(g,d,v),g&&n.once?G(e,a):u.init=!0},r);e._observe=Object(e._observe),e._observe[a.instance.$.uid]={init:!1,observer:l},l.observe(e)}function G(e,a){var t;const n=(t=e._observe)==null?void 0:t[a.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[a.instance.$.uid])}const ye={mounted:fe,unmounted:G},Se=ye,_e=_({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),V=(e,a)=>{let{slots:n}=a;const{transition:t,...o}=e,{component:r=ee,...l}=typeof t=="object"?t:{};return F(r,Z(typeof t=="string"?{name:t}:l,o),n)},be=_({aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...w(),..._e()},"v-img"),Ne=C()({name:"VImg",directives:{intersect:Se},props:be(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,a){let{emit:n,slots:t}=a;const o=y(""),r=y(),l=y(e.eager?"loading":"idle"),d=y(),v=y(),u=S(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),g=S(()=>u.value.aspect||d.value/v.value||0);j(()=>e.src,()=>{f(l.value!=="idle")}),j(g,(s,c)=>{!s&&c&&r.value&&h(r.value)}),te(()=>f());function f(s){if(!(e.eager&&s)&&!(B&&!s&&!e.eager)){if(l.value="loading",u.value.lazySrc){const c=new Image;c.src=u.value.lazySrc,h(c,null)}u.value.src&&ne(()=>{var c,m;if(n("loadstart",((c=r.value)==null?void 0:c.currentSrc)||u.value.src),(m=r.value)!=null&&m.complete){if(r.value.naturalWidth||z(),l.value==="error")return;g.value||h(r.value,null),b()}else g.value||h(r.value),N()})}}function b(){var s;N(),l.value="loaded",n("load",((s=r.value)==null?void 0:s.currentSrc)||u.value.src)}function z(){var s;l.value="error",n("error",((s=r.value)==null?void 0:s.currentSrc)||u.value.src)}function N(){const s=r.value;s&&(o.value=s.currentSrc||s.src)}let P=-1;function h(s){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const m=()=>{clearTimeout(P);const{naturalHeight:E,naturalWidth:O}=s;E||O?(d.value=O,v.value=E):!s.complete&&l.value==="loading"&&c!=null?P=window.setTimeout(m,c):(s.currentSrc.endsWith(".svg")||s.currentSrc.startsWith("data:image/svg+xml"))&&(d.value=1,v.value=1)};m()}const T=S(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),J=()=>{var m;if(!u.value.src||l.value==="idle")return null;const s=i("img",{class:["v-img__img",T.value],src:u.value.src,srcset:u.value.srcset,alt:e.alt,sizes:e.sizes,ref:r,onLoad:b,onError:z},null),c=(m=t.sources)==null?void 0:m.call(t);return i(V,{transition:e.transition,appear:!0},{default:()=>[A(c?i("picture",{class:"v-img__picture"},[c,s]):s,[[le,l.value==="loaded"]])]})},Y=()=>i(V,{transition:e.transition},{default:()=>[u.value.lazySrc&&l.value!=="loaded"&&i("img",{class:["v-img__img","v-img__img--preload",T.value],src:u.value.lazySrc,alt:e.alt},null)]}),K=()=>t.placeholder?i(V,{transition:e.transition,appear:!0},{default:()=>[(l.value==="loading"||l.value==="error"&&!t.error)&&i("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,Q=()=>t.error?i(V,{transition:e.transition,appear:!0},{default:()=>[l.value==="error"&&i("div",{class:"v-img__error"},[t.error()])]}):null,X=()=>e.gradient?i("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,$=y(!1);{const s=j(g,c=>{c&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{$.value=!0})}),s())})}return I(()=>A(i(me,{class:["v-img",{"v-img--booting":!$.value},e.class],style:[{width:re(e.width==="auto"?d.value:e.width)},e.style],aspectRatio:g.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>i(se,null,[i(J,null,null),i(Y,null,null),i(X,null,null),i(K,null,null),i(Q,null,null)]),default:t.default}),[[ae("intersect"),{handler:f,options:e.options},null,{once:!0}]])),{currentSrc:o,image:r,state:l,naturalWidth:d,naturalHeight:v}}});const he=_({fluid:{type:Boolean,default:!1},...w(),...M()},"v-container"),Pe=C()({name:"VContainer",props:he(),setup(e,a){let{slots:n}=a;const{rtlClasses:t}=ie();return I(()=>i(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},t.value,e.class],style:e.style},n)),{}}}),R=["start","end","center"],U=["space-between","space-around","space-evenly"];function k(e,a){return oe.reduce((n,t)=>{const o=e+ue(t);return n[o]=a(),n},{})}const Ve=[...R,"baseline","stretch"],W=e=>Ve.includes(e),x=k("align",()=>({type:String,default:null,validator:W})),we=[...R,...U],D=e=>we.includes(e),H=k("justify",()=>({type:String,default:null,validator:D})),Ce=[...R,...U,"stretch"],p=e=>Ce.includes(e),q=k("alignContent",()=>({type:String,default:null,validator:p})),L={align:Object.keys(x),justify:Object.keys(H),alignContent:Object.keys(q)},je={align:"align",justify:"justify",alignContent:"align-content"};function Ie(e,a,n){let t=je[e];if(n!=null){if(a){const o=a.replace(e,"");t+=`-${o}`}return t+=`-${n}`,t.toLowerCase()}}const Re=_({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:W},...x,justify:{type:String,default:null,validator:D},...H,alignContent:{type:String,default:null,validator:p},...q,...w(),...M()},"v-row"),Te=C()({name:"VRow",props:Re(),setup(e,a){let{slots:n}=a;const t=S(()=>{const o=[];let r;for(r in L)L[r].forEach(l=>{const d=e[l],v=Ie(r,l,d);v&&o.push(v)});return o.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),o});return()=>{var o;return F(e.tag,{class:["v-row",t.value,e.class],style:e.style},(o=n.default)==null?void 0:o.call(n))}}});export{Se as I,V as M,Ne as V,Te as a,Pe as b,_e as m};
