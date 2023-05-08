import{A as I,m as R,b as A,g as _,f as N,h as s,c as L,t as C,p as U,r as m,d as i,a5 as D,D as k,a6 as $,C as T,R as z,N as M,Q as F,a7 as q,a as O,z as Q,u as W,e as Y,v as j}from"./app-e4dd0431.js";import{b as G}from"./index-ca596830.js";import{e as J,m as K,a as X,u as Z,f as ee,b as te,c as ae,V as P}from"./color-5f0020da.js";import{V as le}from"./VImg-f5e77ab7.js";const oe=I({text:String,...R(),...A()},"v-toolbar-title"),ne=_()({name:"VToolbarTitle",props:oe(),setup(e,f){let{slots:t}=f;return N(()=>{const u=!!(t.default||t.text||e.text);return s(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var o;return[u&&s("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(o=t.default)==null?void 0:o.call(t)])]}})}),{}}}),se=[null,"prominent","default","comfortable","compact"],p=I({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>se.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...J(),...R(),...K(),...X(),...A({tag:"header"}),...L()},"v-toolbar"),H=_()({name:"VToolbar",props:p(),setup(e,f){var d;let{slots:t}=f;const{backgroundColorClasses:u,backgroundColorStyles:o}=Z(C(e,"color")),{borderClasses:a}=ee(e),{elevationClasses:g}=te(e),{roundedClasses:c}=ae(e),{themeClasses:b}=U(e),v=m(!!(e.extended||(d=t.extension)!=null&&d.call(t))),r=i(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),y=i(()=>v.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return D({VBtn:{variant:"text"}}),N(()=>{var V;const n=!!(e.title||t.title),S=!!(t.image||e.image),h=(V=t.extension)==null?void 0:V.call(t);return v.value=!!(e.extended||h),s(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},u.value,a.value,g.value,c.value,b.value,e.class],style:[o.value,e.style]},{default:()=>[S&&s("div",{key:"image",class:"v-toolbar__image"},[t.image?s(P,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):s(le,{key:"image-img",cover:!0,src:e.image},null)]),s(P,{defaults:{VTabs:{height:k(r.value)}}},{default:()=>{var B,l,x;return[s("div",{class:"v-toolbar__content",style:{height:k(r.value)}},[t.prepend&&s("div",{class:"v-toolbar__prepend"},[(B=t.prepend)==null?void 0:B.call(t)]),n&&s(ne,{key:"title",text:e.title},{text:t.title}),(l=t.default)==null?void 0:l.call(t),t.append&&s("div",{class:"v-toolbar__append"},[(x=t.append)==null?void 0:x.call(t)])])]}}),s(P,{defaults:{VTabs:{height:k(y.value)}}},{default:()=>[s(G,null,{default:()=>[v.value&&s("div",{class:"v-toolbar__extension",style:{height:k(y.value)}},[h])]})]})]})}),{contentHeight:r,extensionHeight:y}}}),re=I({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function ie(e){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=f;let u=0;const o=m(null),a=m(0),g=m(0),c=m(0),b=m(!1),v=m(!1),r=i(()=>Number(e.scrollThreshold)),y=i(()=>$((r.value-a.value)/r.value||0)),d=()=>{const n=o.value;!n||t&&!t.value||(u=a.value,a.value="window"in n?n.pageYOffset:n.scrollTop,v.value=a.value<u,c.value=Math.abs(a.value-r.value))};return T(v,()=>{g.value=g.value||a.value}),T(b,()=>{g.value=0}),z(()=>{T(()=>e.scrollTarget,n=>{var h;const S=n?document.querySelector(n):window;if(!S){M(`Unable to locate element with identifier ${n}`,q());return}S!==o.value&&((h=o.value)==null||h.removeEventListener("scroll",d),o.value=S,o.value.addEventListener("scroll",d,{passive:!0}))},{immediate:!0})}),F(()=>{var n;(n=o.value)==null||n.removeEventListener("scroll",d)}),t&&T(t,d,{immediate:!0}),{scrollThreshold:r,currentScroll:a,currentThreshold:c,isScrollActive:b,scrollRatio:y,isScrollingUp:v,savedScroll:g}}const me=_()({name:"VAppBar",props:{scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...p(),...O(),...re(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,f){let{slots:t}=f;const u=m(),o=Q(e,"modelValue"),a=i(()=>{var x;const l=new Set(((x=e.scrollBehavior)==null?void 0:x.split(" "))??[]);return{hide:l.has("hide"),inverted:l.has("inverted"),collapse:l.has("collapse"),elevate:l.has("elevate"),fadeImage:l.has("fade-image")}}),g=i(()=>{const l=a.value;return l.hide||l.inverted||l.collapse||l.elevate||l.fadeImage||!o.value}),{currentScroll:c,scrollThreshold:b,isScrollingUp:v,scrollRatio:r}=ie(e,{canScroll:g}),y=i(()=>e.collapse||a.value.collapse&&(a.value.inverted?r.value>0:r.value===0)),d=i(()=>e.flat||a.value.elevate&&(a.value.inverted?c.value>0:c.value===0)),n=i(()=>a.value.fadeImage?a.value.inverted?1-r.value:r.value:void 0),S=i(()=>{var w,E;if(a.value.hide&&a.value.inverted)return 0;const l=((w=u.value)==null?void 0:w.contentHeight)??0,x=((E=u.value)==null?void 0:E.extensionHeight)??0;return l+x});function h(){a.value.hide?a.value.inverted?o.value=c.value>b.value:o.value=v.value||c.value<b.value:o.value=!0}T(c,h,{immediate:!0}),T(a,h);const{ssrBootStyles:V}=W(),{layoutItemStyles:B}=Y({id:e.name,order:i(()=>parseInt(e.order,10)),position:C(e,"location"),layoutSize:S,elementSize:m(void 0),active:o,absolute:C(e,"absolute")});return N(()=>{const[l]=H.filterProps(e);return s(H,j({ref:u,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...B.value,"--v-toolbar-image-opacity":n.value,height:void 0,...V.value},e.style]},l,{collapse:y.value,flat:d.value}),t)}),{}}});export{me as V};
