import{q as s,s as o,v as e,i as t,z as i,x as d,y as m,A as u,N as f,O as w,C as _,Z as y,B as x}from"./app-17995410.js";import{a as b,V as p}from"./VRow-f8d93c11.js";import{V as r}from"./VCol-21b798df.js";import{V as v}from"./VCard-af644e95.js";import{V as C}from"./VHover-6436225d.js";import{V as k,a as L,b as B}from"./VListItem-f6a990c8.js";import{V as N}from"./VAvatar-528f0d1c.js";import{V as z}from"./VImg-1fce8bcf.js";import{V as I}from"./VPagination-fb06c7f8.js";import"./createSimpleFunctional-e59e8288.js";import"./VBtn-189e1ec6.js";import"./color-5d3c7b23.js";import"./delay-34c5ac39.js";const T={class:"font-rajdhani text-h1 font-weight-bold"},j={class:"text-primary"},H={class:"font-rajdhani font-weight-bold text-h3"},K={__name:"category_news",props:{news:Object,title:String},setup(a){const h=n=>{window.location.href="?page="+n};return(n,c)=>(s(),o(b,null,{default:e(()=>[t(p,null,{default:e(()=>[a.news.data.length==0?(s(),o(r,{key:0,cols:"12"},{default:e(()=>[t(v,{flat:"",color:"transparent",class:"py-16"},{default:e(()=>[i("div",T,[d(" माफ गर्नुहोस्! "),i("span",j,'" '+m(a.title||n.tag)+' "',1),d(" नामको कुनै पोस्ट फेला परेन ")])]),_:1})]),_:1})):(s(),u(f,{key:1},[t(r,{cols:"12"},{default:e(()=>[i("div",H,m(a.title),1)]),_:1}),t(r,{cols:"12"},{default:e(()=>[t(p,null,{default:e(()=>[(s(!0),u(f,null,w(a.news.data,(l,S)=>(s(),o(r,{cols:"12",md:"6"},{default:e(()=>[t(C,null,{default:e(({isHovering:V,props:g})=>[t(k,_({href:"/news/"+l.id},g,{class:"py-0 pl-0 mb-3"}),{prepend:e(()=>[t(N,{rounded:"lg",size:"auto"},{default:e(()=>[t(z,{cover:"",width:"200",height:"150",class:y(V?"zoom":""),src:l.image,alt:l.media[0].file_name},null,8,["class","src","alt"])]),_:2},1024)]),default:e(()=>[t(L,{class:"text-h5 text-wrap line-clamp-3 font-weight-bold mb-3",style:{"line-height":"2rem","white-space":"wrap"}},{default:e(()=>[d(m(l.title),1)]),_:2},1024),t(B,{class:"line-clamp-3",innerHTML:l.description,style:{"line-height":"1.2rem"}},null,8,["innerHTML"])]),_:2},1040,["href"])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})],64)),a.news.data.length!==0?(s(),o(r,{key:2,cols:"12"},{default:e(()=>[t(I,{rounded:"circle",variant:"flat","active-color":"primary",modelValue:a.news.current_page,"onUpdate:modelValue":[c[0]||(c[0]=l=>a.news.current_page=l),h],length:a.news.last_page,"total-visible":7},null,8,["modelValue","length"])]),_:1})):x("",!0)]),_:1})]),_:1}))}};export{K as default};
