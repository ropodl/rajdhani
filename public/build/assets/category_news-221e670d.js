import{o as n,b as i,w as e,c as t,h as r,E as m,t as o,j as u,F as h,D as V,A as y,S as _,k as x}from"./app-1f6a3bb7.js";import{V as c,a as b}from"./VRow-ecc6a7f1.js";import{V as s}from"./VCol-69c1f845.js";import{a as v}from"./VCard-8475c0b1.js";import{V as k}from"./VHover-f538f6cb.js";import{V as C,a as L,b as j}from"./VListItem-737bf473.js";import{V as S}from"./VAvatar-18e78d52.js";import{V as B}from"./VImg-8da7f3b7.js";import{V as I}from"./VPagination-1c56aa7b.js";import"./tag-84200d7a.js";import"./router-3893207c.js";import"./delay-e186ad6a.js";import"./resizeObserver-5db709b4.js";import"./VBtn-ce529f14.js";import"./group-e77c4e6f.js";const N={class:"font-rajdhani text-h1 font-weight-bold",style:{"line-height":"7.4rem"}},T={class:"text-primary"},z={class:"font-weight-bold text-h3",style:{"font-family":"'Rajdhani' !important"}},H={class:"d-md-flex align-md-end justify-md-end"},Y={__name:"category_news",props:{news:Object,title:String},setup(a){const g=d=>{window.location.href="?page="+d};return(d,f)=>(n(),i(b,null,{default:e(()=>[t(c,null,{default:e(()=>[a.news.data.length==0?(n(),i(s,{key:0,cols:"12"},{default:e(()=>[t(v,{flat:"",color:"transparent",class:"py-16"},{default:e(()=>[r("div",N,[m(" माफ गर्नुहोस्! "),r("span",T,'" '+o(a.title||d.tag)+' "',1),m(" नामको कुनै पोस्ट फेला परेन ")])]),_:1})]),_:1})):(n(),u(h,{key:1},[t(s,{cols:"12"},{default:e(()=>[t(c,{align:"center"},{default:e(()=>[t(s,{cols:"12",md:"8"},{default:e(()=>[r("span",z,o(a.title),1)]),_:1}),t(s,{cols:"12",md:"4"},{default:e(()=>[r("div",H," Showing "+o(a.news.from)+" - "+o(a.news.to)+" out of "+o(a.news.total),1)]),_:1})]),_:1})]),_:1}),t(s,{cols:"12"},{default:e(()=>[t(c,null,{default:e(()=>[(n(!0),u(h,null,V(a.news.data,(l,A)=>(n(),i(s,{cols:"12",md:"6"},{default:e(()=>[t(k,null,{default:e(({isHovering:p,props:w})=>[t(C,y({href:"/news/"+l.id},w,{class:"py-0 pl-0 mb-3"}),{prepend:e(()=>[t(S,{rounded:"lg",size:"auto"},{default:e(()=>[t(B,{cover:"",width:"200",height:"150",class:_(p?"zoom":""),src:l.image,alt:l.media[0].file_name},null,8,["class","src","alt"])]),_:2},1024)]),default:e(()=>[t(L,{class:"text-h5 text-wrap line-clamp-3 font-weight-medium mb-3",style:{"line-height":"2rem","white-space":"wrap"}},{default:e(()=>[m(o(l.title),1)]),_:2},1024),t(j,{class:"line-clamp-3",innerHTML:l.description,style:{"line-height":"1.2rem"}},null,8,["innerHTML"])]),_:2},1040,["href"])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})],64)),a.news.data.length!==0?(n(),i(s,{key:2,cols:"12"},{default:e(()=>[t(I,{rounded:"circle",variant:"flat","active-color":"primary",modelValue:a.news.current_page,"onUpdate:modelValue":[f[0]||(f[0]=l=>a.news.current_page=l),g],length:a.news.last_page,"total-visible":7},null,8,["modelValue","length"])]),_:1})):x("",!0)]),_:1})]),_:1}))}};export{Y as default};
