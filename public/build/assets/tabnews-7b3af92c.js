import{r as L,n as r,q as p,s as e,h as t,v as s,k as o,i as V,z as d,M as h,N as u,x as m,A as w}from"./app-eda02d94.js";import{g as b}from"./mdi-c22018c1.js";import{h as g}from"./moment-fbc5633a.js";import{V as O}from"./VCard-6d6e4c87.js";import{a as _,V as j,c as x,b as C}from"./VTabs-1214220e.js";import{a as c,V as k}from"./VList-264e81f0.js";import{V as y,a as v,b as N}from"./VListItem-b9217c18.js";import{V as I}from"./router-08441ad9.js";import"./createSimpleFunctional-33ff3a1a.js";import"./VAvatar-75256411.js";import"./color-ed9d44a0.js";import"./VImg-b08ed088.js";import"./VBtn-62460dc0.js";import"./lazy-51e3f45b.js";import"./index-9d2650d4.js";import"./easing-9f15041e.js";const P={__name:"tabnews",props:{latest:Object,trending:Object},setup(i){let l=L("1");return(T,n)=>(r(),p(O,{border:"",flat:"",class:"rounded-t-0"},{default:e(()=>[t(j,{grow:"",color:"primary",modelValue:o(l),"onUpdate:modelValue":n[0]||(n[0]=a=>V(l)?l.value=a:l=a),"show-arrows":!1},{default:e(()=>[t(_,{class:"font-rajdhani text-subtitle-1 font-weight-bold rounded-0",value:"1"},{default:e(()=>[s("लोकप्रिय")]),_:1}),t(_,{class:"font-rajdhani text-subtitle-1 font-weight-bold rounded-0",value:"2"},{default:e(()=>[s("ताजा")]),_:1})]),_:1},8,["modelValue"]),t(c),t(C,{modelValue:o(l),"onUpdate:modelValue":n[1]||(n[1]=a=>V(l)?l.value=a:l=a)},{default:e(()=>[t(x,{value:"1"},{default:e(()=>[t(k,{class:"pt-0"},{default:e(()=>[(r(!0),d(u,null,h(i.trending,(a,f)=>(r(),d(u,null,[t(y,{href:"/news/"+a.id},{default:e(()=>[t(v,{class:"text-h6 text-wrap line-clamp-3 font-weight-bold mb-2",style:{"line-height":"2rem","white-space":"wrap"}},{default:e(()=>[s(m(a.title),1)]),_:2},1024),t(N,null,{default:e(()=>[t(I,{start:"",size:"small",icon:o(b)},null,8,["icon"]),s(" "+m(o(g)(a.created_at).startOf("day").fromNow()),1)]),_:2},1024)]),_:2},1032,["href"]),f+1!=i.trending.length?(r(),p(c,{key:0})):w("",!0)],64))),256))]),_:1})]),_:1}),t(x,{value:"2"},{default:e(()=>[t(k,{class:"pt-0"},{default:e(()=>[(r(!0),d(u,null,h(i.latest,(a,f)=>(r(),d(u,null,[t(y,{href:"/news/"+a.id},{default:e(()=>[t(v,{class:"text-h6 text-wrap line-clamp-3 font-weight-bold mb-2",style:{"line-height":"2rem","white-space":"wrap"}},{default:e(()=>[s(m(a.title),1)]),_:2},1024),t(N,null,{default:e(()=>[t(I,{start:"",size:"small",icon:o(b)},null,8,["icon"]),s(" "+m(o(g)(a.created_at).startOf("day").fromNow()),1)]),_:2},1024)]),_:2},1032,["href"]),f+1!=i.latest.length?(r(),p(c,{key:0})):w("",!0)],64))),256))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}};export{P as default};
