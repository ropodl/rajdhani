import{b as r,c as s,d as e,e as t,f as d,E as n,t as m,h as V,D as g,m as w,$ as _,F as y,j as b}from"./app-d1fc3d40.js";import{V as o}from"./VCol-febdbea9.js";import{V as x}from"./VCard-bfd1edbe.js";import{a as u,V as v,b as k}from"./VRow-2c52a6e3.js";import{V as C}from"./VHover-0ea21e02.js";import{V as L,a as B,b as I}from"./VListItem-bab8130c.js";import{V as N}from"./VAvatar-0e867c84.js";import{V as T}from"./VPagination-4bab326f.js";import"./router-663ddb83.js";import"./delay-c3442493.js";import"./VBtn-0918f4ce.js";import"./group-ed82b15f.js";const j={class:"font-rajdhani text-h1 font-weight-bold"},z={class:"text-primary"},G={__name:"search",props:{result:Object,search:String},setup(a){const f=i=>{window.location.href="/search?page="+i};return(i,c)=>(r(),s(k,null,{default:e(()=>[t(u,null,{default:e(()=>[a.result.data.length==0?(r(),s(o,{key:0,cols:"12"},{default:e(()=>[t(x,{flat:"",color:"transparent",class:"py-16"},{default:e(()=>[d("div",j,[n(" माफ गर्नुहोस्! "),d("span",z,'" '+m(a.search)+' "',1),n(" नामको कुनै पोस्ट फेला परेन ")])]),_:1})]),_:1})):(r(),s(o,{key:1,cols:"12"},{default:e(()=>[t(u,null,{default:e(()=>[(r(!0),V(y,null,g(a.result.data,(l,H)=>(r(),s(o,{cols:"12",md:"6"},{default:e(()=>[t(C,null,{default:e(({isHovering:p,props:h})=>[t(L,w({href:"/news/"+l.id},h,{class:"py-0 pl-0 mb-3"}),{prepend:e(()=>[t(N,{rounded:"lg",size:"auto"},{default:e(()=>[t(v,{cover:"",width:"150",height:"120",class:_(p?"zoom":""),src:l.image},null,8,["class","src"])]),_:2},1024)]),default:e(()=>[t(B,{class:"text-h5 text-wrap line-clamp-2 font-weight-bold",style:{"line-height":"2rem","white-space":"wrap"}},{default:e(()=>[n(m(l.title),1)]),_:2},1024),t(I,{class:"line-clamp-3",innerHTML:l.description,style:{"line-height":"1.2rem"}},null,8,["innerHTML"])]),_:2},1040,["href"])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})),a.result.data.length!==0?(r(),s(o,{key:2,cols:"12"},{default:e(()=>[t(T,{rounded:"circle",variant:"flat","active-color":"primary",modelValue:a.result.current_page,"onUpdate:modelValue":[c[0]||(c[0]=l=>a.result.current_page=l),f],length:a.result.last_page,"total-visible":7},null,8,["modelValue","length"])]),_:1})):b("",!0)]),_:1})]),_:1}))}};export{G as default};
