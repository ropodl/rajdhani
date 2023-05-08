import{g as h,ax as v,a5 as C,A as i,d as a,D as r,y as g,a2 as l,ao as S,ay as c}from"./app-e4dd0431.js";const y=h(!1)({name:"VDefaultsProvider",props:{defaults:Object,disabled:Boolean,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,t){let{slots:s}=t;const{defaults:n,disabled:o,reset:u,root:f,scoped:b}=v(e);return C(n,{reset:u,root:f,scoped:b,disabled:o}),()=>{var d;return(d=s.default)==null?void 0:d.call(s)}}}),k=i({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function N(e){return{dimensionStyles:a(()=>({height:r(e.height),maxHeight:r(e.maxHeight),maxWidth:r(e.maxWidth),minHeight:r(e.minHeight),minWidth:r(e.minWidth),width:r(e.width)}))}}const B=i({border:[Boolean,Number,String]},"border");function $(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:g();return{borderClasses:a(()=>{const n=l(e)?e.value:e.border,o=[];if(n===!0||n==="")o.push(`${t}--border`);else if(typeof n=="string"||n===0)for(const u of String(n).split(" "))o.push(`border-${u}`);return o})}}const D=i({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function H(e){return{elevationClasses:a(()=>{const s=l(e)?e.value:e.elevation,n=[];return s==null||n.push(`elevation-${s}`),n})}}const P=i({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function W(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:g();return{roundedClasses:a(()=>{const n=l(e)?e.value:e.rounded,o=[];if(n===!0||n==="")o.push(`${t}--rounded`);else if(typeof n=="string"||n===0)for(const u of String(n).split(" "))o.push(`rounded-${u}`);return o})}}function m(e){return S(()=>{const t=[],s={};return e.value.background&&(c(e.value.background)?s.backgroundColor=e.value.background:t.push(`bg-${e.value.background}`)),e.value.text&&(c(e.value.text)?(s.color=e.value.text,s.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:s}})}function R(e,t){const s=a(()=>({text:l(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:o}=m(s);return{textColorClasses:n,textColorStyles:o}}function w(e,t){const s=a(()=>({background:l(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:o}=m(s);return{backgroundColorClasses:n,backgroundColorStyles:o}}export{y as V,P as a,H as b,W as c,R as d,B as e,$ as f,k as g,N as h,m as i,D as m,w as u};