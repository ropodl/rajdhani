import{r as L,o as r,i as p,w as e,h as t,j as s,l as o,a2 as c,q as u,a1 as V,H as d,k as m,s as h}from"./app-e4dd0431.js";import{f as w}from"./mdi-c0b373fd.js";import{h as b}from"./moment-fbc5633a.js";import{V as N}from"./VCard-659a1b9b.js";import{a as g,V as O,c as _,b as C}from"./VTabs-6921d50e.js";import{V as x,a as k}from"./VList-48514ba6.js";import{V as y,a as j,b as v}from"./VListItem-b9d23e01.js";import{V as I}from"./router-cbca83b5.js";import"./createSimpleFunctional-0ce1e943.js";import"./color-5f0020da.js";import"./VImg-f5e77ab7.js";import"./group-8b0b9ef3.js";import"./lazy-c48475e8.js";import"./VBtn-ce5e77d1.js";import"./index-ca596830.js";const M={__name:"tabnews",props:{latest:Object,trending:Object},setup(i){let l=L("1");return(T,n)=>(r(),p(N,null,{default:e(()=>[t(O,{grow:"",modelValue:o(l),"onUpdate:modelValue":n[0]||(n[0]=a=>c(l)?l.value=a:l=a),"show-arrows":!1,"bg-color":"primary"},{default:e(()=>[t(g,{class:"font-rajdhani text-subtitle-1 font-weight-bold",value:"1"},{default:e(()=>[s("लोकप्रिय")]),_:1}),t(g,{class:"font-rajdhani text-subtitle-1 font-weight-bold",value:"2"},{default:e(()=>[s("ताजा")]),_:1})]),_:1},8,["modelValue"]),t(C,{modelValue:o(l),"onUpdate:modelValue":n[1]||(n[1]=a=>c(l)?l.value=a:l=a)},{default:e(()=>[t(_,{value:"1"},{default:e(()=>[t(x,{class:"pt-0"},{default:e(()=>[(r(!0),u(d,null,V(i.trending,(a,f)=>(r(),u(d,null,[t(y,{href:"/news/"+a.id},{default:e(()=>[t(j,{class:"text-h5 text-wrap line-clamp-3 font-weight-bold mb-2",style:{"line-height":"2rem","white-space":"wrap"}},{default:e(()=>[s(m(a.title),1)]),_:2},1024),t(v,null,{default:e(()=>[t(I,{start:"",size:"small",icon:o(w)},null,8,["icon"]),s(" "+m(o(b)(a.created_at).startOf("day").fromNow()),1)]),_:2},1024)]),_:2},1032,["href"]),f+1!=i.trending.length?(r(),p(k,{key:0})):h("",!0)],64))),256))]),_:1})]),_:1}),t(_,{value:"2"},{default:e(()=>[t(x,{class:"pt-0"},{default:e(()=>[(r(!0),u(d,null,V(i.latest,(a,f)=>(r(),u(d,null,[t(y,{href:"/news/"+a.id},{default:e(()=>[t(j,{class:"text-h5 text-wrap line-clamp-3 font-weight-bold mb-2",style:{"line-height":"2rem","white-space":"wrap"}},{default:e(()=>[s(m(a.title),1)]),_:2},1024),t(v,null,{default:e(()=>[t(I,{start:"",size:"small",icon:o(w)},null,8,["icon"]),s(" "+m(o(b)(a.created_at).startOf("day").fromNow()),1)]),_:2},1024)]),_:2},1032,["href"]),f+1!=i.latest.length?(r(),p(k,{key:0})):h("",!0)],64))),256))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}};export{M as default};
