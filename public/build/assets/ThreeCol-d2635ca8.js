import{q as s,s as l,v as e,i as a,z as m,y as o,x as i,A as n,O as V,N as c,C as h,Z as g,B as _}from"./app-3ee45490.js";import{V as w}from"./VRow-45a9a0c2.js";import{V as x}from"./VSpacer-9ddba318.js";import{V as y}from"./VBtn-2f3e2640.js";import{V as d}from"./VCol-f8f050f7.js";import{V as b,a as v}from"./VListItem-763743af.js";import{V as B}from"./VAvatar-5aff7230.js";import{V as C}from"./VImg-62a40964.js";import{V as N}from"./VHover-f3de8be1.js";import"./createSimpleFunctional-26c56e63.js";import"./color-9d268996.js";import"./delay-a1316c86.js";const k={class:"d-flex align-center"},z={class:"font-rajdhani text-h3 font-weight-bold"},Z={__name:"ThreeCol",props:{data:Object},setup(t){return(I,L)=>(s(),l(w,null,{default:e(()=>[a(d,{cols:"12"},{default:e(()=>[m("div",k,[m("span",z,o(t.data.name),1),a(x),a(y,{rounded:"",color:"primary",variant:"tonal",href:"/category/"+t.data.slug},{default:e(()=>[i(" थप "+o(t.data.name)+" समाचार ",1)]),_:1},8,["href"])])]),_:1}),(s(!0),n(c,null,V(t.data.news,(r,f)=>(s(),n(c,null,[f<9?(s(),l(d,{key:0,cols:"12",sm:"6",md:"6",lg:"4",class:"pb-0"},{default:e(()=>[a(N,null,{default:e(({isHovering:p,props:u})=>[a(b,h({href:"/news/"+r.id},u,{class:"py-0 pl-0 mb-3"}),{prepend:e(()=>[a(B,{rounded:"lg",size:"auto"},{default:e(()=>[a(C,{cover:"",width:"140",height:"133",class:g(p?"zoom":""),src:r.image,alt:r.media[0].file_name},null,8,["class","src","alt"])]),_:2},1024)]),default:e(()=>[a(v,{class:"text-h5 text-wrap line-clamp-3 font-weight-bold mb-3",style:{"line-height":"2rem","white-space":"wrap"}},{default:e(()=>[i(o(r.title),1)]),_:2},1024)]),_:2},1040,["href"])]),_:2},1024)]),_:2},1024)):_("",!0)],64))),256))]),_:1}))}};export{Z as default};