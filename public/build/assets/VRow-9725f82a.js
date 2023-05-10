import{g as u,m as f,b as d,f as G,h as O,ar as c,an as g,d as N,ap as j}from"./app-c4c6d26d.js";const x=u()({name:"VContainer",props:{fluid:{type:Boolean,default:!1},...f(),...d()},setup(e,a){let{slots:t}=a;return G(()=>O(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},e.class],style:e.style},t)),{}}}),v=(()=>c.reduce((e,a)=>(e[a]={type:[Boolean,String,Number],default:!1},e),{}))(),V=(()=>c.reduce((e,a)=>{const t="offset"+g(a);return e[t]={type:[String,Number],default:null},e},{}))(),k=(()=>c.reduce((e,a)=>{const t="order"+g(a);return e[t]={type:[String,Number],default:null},e},{}))(),C={col:Object.keys(v),offset:Object.keys(V),order:Object.keys(k)};function _(e,a,t){let l=e;if(!(t==null||t===!1)){if(a){const n=a.replace(e,"");l+=`-${n}`}return e==="col"&&(l="v-"+l),e==="col"&&(t===""||t===!0)||(l+=`-${t}`),l.toLowerCase()}}const B=["auto","start","end","center","baseline","stretch"],F=u()({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...v,offset:{type:[String,Number],default:null},...V,order:{type:[String,Number],default:null},...k,alignSelf:{type:String,default:null,validator:e=>B.includes(e)},...f(),...d()},setup(e,a){let{slots:t}=a;const l=N(()=>{const n=[];let s;for(s in C)C[s].forEach(o=>{const i=e[o],m=_(s,o,i);m&&n.push(m)});const r=n.some(o=>o.startsWith("v-col-"));return n.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),n});return()=>{var n;return j(e.tag,{class:[l.value,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}}),y=["start","end","center"],L=["space-between","space-around","space-evenly"];function b(e,a){return c.reduce((t,l)=>{const n=e+g(l);return t[n]=a(),t},{})}const I=[...y,"baseline","stretch"],h=e=>I.includes(e),$=b("align",()=>({type:String,default:null,validator:h})),T=[...y,...L],w=e=>T.includes(e),E=b("justify",()=>({type:String,default:null,validator:w})),U=[...y,...L,"stretch"],P=e=>U.includes(e),A=b("alignContent",()=>({type:String,default:null,validator:P})),S={align:Object.keys($),justify:Object.keys(E),alignContent:Object.keys(A)},M={align:"align",justify:"justify",alignContent:"align-content"};function R(e,a,t){let l=M[e];if(t!=null){if(a){const n=a.replace(e,"");l+=`-${n}`}return l+=`-${t}`,l.toLowerCase()}}const z=u()({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h},...$,justify:{type:String,default:null,validator:w},...E,alignContent:{type:String,default:null,validator:P},...A,...f(),...d()},setup(e,a){let{slots:t}=a;const l=N(()=>{const n=[];let s;for(s in S)S[s].forEach(r=>{const o=e[r],i=R(s,r,o);i&&n.push(i)});return n.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),n});return()=>{var n;return j(e.tag,{class:["v-row",l.value,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}});export{z as V,F as a,x as b};