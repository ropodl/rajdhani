import{p as d,m as f,b as g,g as y,Q as w,h as b,i as N,e as P,an as L,ao as h,al as A}from"./app-84660fc4.js";const E=d({fluid:{type:Boolean,default:!1},...f(),...g()},"v-container"),_=y()({name:"VContainer",props:E(),setup(t,s){let{slots:n}=s;const{rtlClasses:a}=w();return b(()=>N(t.tag,{class:["v-container",{"v-container--fluid":t.fluid},a.value,t.class],style:t.style},n)),{}}}),o=["start","end","center"],C=["space-between","space-around","space-evenly"];function i(t,s){return h.reduce((n,a)=>{const e=t+A(a);return n[e]=s(),n},{})}const G=[...o,"baseline","stretch"],v=t=>G.includes(t),m=i("align",()=>({type:String,default:null,validator:v})),R=[...o,...C],V=t=>R.includes(t),j=i("justify",()=>({type:String,default:null,validator:V})),T=[...o,...C,"stretch"],k=t=>T.includes(t),S=i("alignContent",()=>({type:String,default:null,validator:k})),u={align:Object.keys(m),justify:Object.keys(j),alignContent:Object.keys(S)},$={align:"align",justify:"justify",alignContent:"align-content"};function I(t,s,n){let a=$[t];if(n!=null){if(s){const e=s.replace(t,"");a+=`-${e}`}return a+=`-${n}`,a.toLowerCase()}}const O=d({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:v},...m,justify:{type:String,default:null,validator:V},...j,alignContent:{type:String,default:null,validator:k},...S,...f(),...g()},"v-row"),B=y()({name:"VRow",props:O(),setup(t,s){let{slots:n}=s;const a=P(()=>{const e=[];let l;for(l in u)u[l].forEach(c=>{const p=t[c],r=I(l,c,p);r&&e.push(r)});return e.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),e});return()=>{var e;return L(t.tag,{class:["v-row",a.value,t.class],style:t.style},(e=n.default)==null?void 0:e.call(n))}}});export{B as V,_ as a};
