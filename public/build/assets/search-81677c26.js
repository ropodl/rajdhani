import{q as r,s,v as e,i as t,z as c,x as i,y as d,A as V,O as g,C as w,$ as y,N as _,B as x}from"./app-b61f663e.js";import{a as v,V as u}from"./VRow-0443cfe6.js";import{V as o}from"./VCol-d47e33a9.js";import{V as b}from"./VCard-b9644cb9.js";import{V as C}from"./VHover-ac5dc9f2.js";import{V as k,a as L,b as B}from"./VListItem-a4a970ba.js";import{V as N}from"./VAvatar-25012e2f.js";import{V as z}from"./VImg-11a1e43d.js";import{V as I}from"./VPagination-fcc3d6a3.js";import"./createSimpleFunctional-b0ba47c4.js";import"./router-d0ea8f3d.js";import"./color-27df021c.js";import"./delay-5cc8ff30.js";import"./VBtn-35132ec5.js";import"./group-94844b93.js";const T={class:"font-rajdhani text-h1 font-weight-bold"},H={class:"text-primary"},Q={__name:"search",props:{result:Object,search:String},setup(a){const f=n=>{window.location.href="/search?page="+n};return(n,m)=>(r(),s(v,null,{default:e(()=>[t(u,null,{default:e(()=>[a.result.data.length==0?(r(),s(o,{key:0,cols:"12"},{default:e(()=>[t(b,{flat:"",color:"transparent",class:"py-16"},{default:e(()=>[c("div",T,[i(" माफ गर्नुहोस्! "),c("span",H,'" '+d(a.search)+' "',1),i(" नामको कुनै पोस्ट फेला परेन ")])]),_:1})]),_:1})):(r(),s(o,{key:1,cols:"12"},{default:e(()=>[t(u,null,{default:e(()=>[(r(!0),V(_,null,g(a.result.data,(l,S)=>(r(),s(o,{cols:"12",md:"6"},{default:e(()=>[t(C,null,{default:e(({isHovering:p,props:h})=>[t(k,w({href:"/news/"+l.id},h,{class:"py-0 pl-0 mb-3"}),{prepend:e(()=>[t(N,{rounded:"lg",size:"auto"},{default:e(()=>[t(z,{cover:"",width:"150",height:"120",class:y(p?"zoom":""),src:l.image},null,8,["class","src"])]),_:2},1024)]),default:e(()=>[t(L,{class:"text-h5 text-wrap line-clamp-2 font-weight-bold",style:{"line-height":"2rem","white-space":"wrap"}},{default:e(()=>[i(d(l.title),1)]),_:2},1024),t(B,{class:"line-clamp-3",innerHTML:l.description,style:{"line-height":"1.2rem"}},null,8,["innerHTML"])]),_:2},1040,["href"])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})),a.result.data.length!==0?(r(),s(o,{key:2,cols:"12"},{default:e(()=>[t(I,{rounded:"circle",variant:"flat","active-color":"primary",modelValue:a.result.current_page,"onUpdate:modelValue":[m[0]||(m[0]=l=>a.result.current_page=l),f],length:a.result.last_page,"total-visible":7},null,8,["modelValue","length"])]),_:1})):x("",!0)]),_:1})]),_:1}))}};export{Q as default};