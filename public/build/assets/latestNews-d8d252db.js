import{n as r,q as n,s as t,h as e,B as c,v as s,x as o,k as i,z as v,M as z,_ as N,A as C,N as I}from"./app-87d0ca14.js";import{g as f}from"./mdi-c22018c1.js";import{h as d}from"./moment-fbc5633a.js";import{V as L}from"./VRow-8578a567.js";import{V as u}from"./VHover-698eba7d.js";import{V as p}from"./VCard-5347bfc9.js";import{V as h}from"./VImg-7c2245f0.js";import{V}from"./VList-478f3654.js";import{V as g,a as _,b}from"./VListItem-bd07c360.js";import{V as w}from"./router-551ebe24.js";import{V as k}from"./VCol-8028dee2.js";import{V as B}from"./VAvatar-d14cad89.js";import"./delay-fbb76fe1.js";import"./createSimpleFunctional-17717203.js";import"./color-1462b755.js";import"./index-0bc25fa4.js";const W={__name:"latestNews",props:{latest:Object},setup(a){return(O,A)=>(r(),n(L,null,{default:t(()=>[e(k,{cols:"12",md:"6"},{default:t(()=>[e(u,null,{default:t(({isHovering:l,props:m})=>[e(p,{variant:"text",href:"/news/"+a.latest[0].id},{default:t(()=>[e(h,c({cover:""},m,{height:"570",class:["pa-4 align-end",l?"zoom":""],src:a.latest[0].image,alt:a.latest[0].media[0].file_name}),{default:t(()=>[e(p,{style:{"background-color":`rgba(
                                    var(--v-theme-background),
                                    0.8
                                )`,"backdrop-filter":"blur(10px)"}},{default:t(()=>[e(V,{class:"bg-transparent"},{default:t(()=>[e(g,null,{default:t(()=>[e(_,{class:"text-h5 font-weight-bold mb-2",style:{"line-height":"2rem"}},{default:t(()=>[s(o(a.latest[0].title),1)]),_:1}),e(b,null,{default:t(()=>[e(w,{start:"",size:"small",icon:i(f)},null,8,["icon"]),s(" "+o(i(d)(a.latest[0].created_at).startOf("day").fromNow()),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:2},1040,["class","src","alt"])]),_:2},1032,["href"])]),_:1})]),_:1}),e(k,{cols:"12",md:"6"},{default:t(()=>[e(V,{color:"primary",class:"py-0 pl-0 bg-transparent"},{default:t(()=>[(r(!0),v(I,null,z(a.latest,(l,m)=>(r(),n(u,null,{default:t(({isHovering:x,props:y})=>[m!=0?(r(),n(g,c({key:0,href:"/news/"+l.id},y,{class:"py-0 pl-0 mb-3"}),{prepend:t(()=>[e(B,{rounded:"lg",size:"auto"},{default:t(()=>[e(h,{cover:"",width:"140",height:"133",class:N(x?"zoom":""),src:l.image},null,8,["class","src"])]),_:2},1024)]),default:t(()=>[e(_,{class:"text-h5 text-wrap line-clamp-3 font-weight-bold",style:{"line-height":"2rem","white-space":"wrap"}},{default:t(()=>[s(o(l.title),1)]),_:2},1024),e(b,null,{default:t(()=>[e(w,{start:"",size:"small",icon:i(f)},null,8,["icon"]),s(" "+o(i(d)(l.created_at).startOf("day").fromNow()),1)]),_:2},1024)]),_:2},1040,["href"])):C("",!0)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}))}};export{W as default};