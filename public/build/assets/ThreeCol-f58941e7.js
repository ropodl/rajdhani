import{n as r,q as n,s as a,h as e,y as i,x as o,v as l,z as m,M as V,N as c,B as _,_ as g,k as d,A as w}from"./app-c4c6d26d.js";import{h as x}from"./mdi-8c63b7e9.js";import{h as y}from"./moment-fbc5633a.js";import{V as b,a as f}from"./VRow-9725f82a.js";import{V as k}from"./VSpacer-312442bd.js";import{V as v,a as B}from"./VBtn-060a901c.js";import{V as C,a as N,b as z}from"./VListItem-20742055.js";import{V as I}from"./VAvatar-5696ca45.js";import{V as L}from"./VImg-7421936e.js";import{V as O}from"./VHover-b733abeb.js";import"./createSimpleFunctional-a62c0568.js";import"./color-d559a2fd.js";import"./VCard-449f740f.js";const S={class:"d-flex align-center"},T={class:"font-rajdhani text-h3 font-weight-bold"},W={__name:"ThreeCol",props:{data:Object},setup(t){return(j,A)=>(r(),n(b,null,{default:a(()=>[e(f,{cols:"12"},{default:a(()=>[i("div",S,[i("span",T,o(t.data.name),1),e(k),e(v,{rounded:"",color:"primary",variant:"tonal",href:"/category/"+t.data.slug},{default:a(()=>[l(" थप "+o(t.data.name)+" समाचार ",1)]),_:1},8,["href"])])]),_:1}),(r(!0),m(c,null,V(t.data.news,(s,u)=>(r(),m(c,null,[u<9?(r(),n(f,{key:0,cols:"12",sm:"6",md:"6",lg:"4",class:"pb-0"},{default:a(()=>[e(O,null,{default:a(({isHovering:p,props:h})=>[e(C,_({href:"/news/"+s.id},h,{class:"py-0 pl-0 mb-3"}),{prepend:a(()=>[e(I,{rounded:"lg",size:"auto"},{default:a(()=>[e(L,{cover:"",width:"140",height:"133",class:g(p?"zoom":""),src:s.image},null,8,["class","src"])]),_:2},1024)]),default:a(()=>[e(N,{class:"text-h5 text-wrap line-clamp-3 font-weight-bold",style:{"line-height":"2rem","white-space":"wrap"}},{default:a(()=>[l(o(s.title),1)]),_:2},1024),e(z,null,{default:a(()=>[e(B,{start:"",size:"small",icon:d(x)},null,8,["icon"]),l(" "+o(d(y)(s.created_at).startOf("day").fromNow()),1)]),_:2},1024)]),_:2},1040,["href"])]),_:2},1024)]),_:2},1024)):w("",!0)],64))),256))]),_:1}))}};export{W as default};