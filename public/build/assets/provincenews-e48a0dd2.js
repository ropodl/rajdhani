import{g as W,au as be,m as Z,b as ee,c as ae,p as le,R as ke,t as V,f as ge,h as a,a3 as A,af as Y,a4 as ye,D as Ve,d as B,Y as z,aa as J,ag as Ce,N as x,B as I,n as m,q as C,s as l,y as te,z as Q,M as U,v as o,x as d,k as h,_ as we,A as _e}from"./app-c4c6d26d.js";import{h as L}from"./mdi-8c63b7e9.js";import{h as D}from"./moment-fbc5633a.js";import{b as Ie,a as r,V as R}from"./VRow-9725f82a.js";import{p as xe,c as ne,q as Pe,R as Se,m as Ae,r as Be,g as ze,b as Le,u as De,h as Re,o as Ne,s as Oe,l as Ee,n as Ge,a as u}from"./VBtn-060a901c.js";import{a as Te}from"./index-b00e6e0c.js";import{d as je,m as Me,a as $e,e as qe,b as Fe,c as Ke,V as w}from"./color-d559a2fd.js";import{V as M}from"./VAvatar-5696ca45.js";import{V as N}from"./VHover-b733abeb.js";import{V as _}from"./VCard-449f740f.js";import{V as O}from"./VImg-7421936e.js";import{V as E}from"./VList-6159e447.js";import{V as G,a as T,b as j}from"./VListItem-20742055.js";import"./createSimpleFunctional-a62c0568.js";const se=Symbol.for("vuetify:v-chip-group");W()({name:"VChipGroup",props:{column:Boolean,filter:Boolean,valueComparator:{type:Function,default:be},...Z(),...xe({selectedClass:"v-chip--selected"}),...ee(),...ae(),...ne({variant:"tonal"})},emits:{"update:modelValue":e=>!0},setup(e,g){let{slots:f}=g;const{themeClasses:s}=le(e),{isSelected:n,select:p,next:b,prev:P,selected:S}=Pe(e,se);return ke({VChip:{color:V(e,"color"),disabled:V(e,"disabled"),filter:V(e,"filter"),variant:V(e,"variant")}}),ge(()=>a(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},s.value,e.class],style:e.style},{default:()=>{var y;return[(y=f.default)==null?void 0:y.call(f,{isSelected:n,select:p,next:b,prev:P,selected:S.value})]}})),{}}});const He=W()({name:"VChip",directives:{Ripple:Se},props:{activeClass:String,appendAvatar:String,appendIcon:A,closable:Boolean,closeIcon:{type:A,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:A,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:Y(),onClickOnce:Y(),...je(),...Z(),...Ae(),...Me(),...Be(),...$e(),...ze(),...Le(),...ee({tag:"span"}),...ae(),...ne({variant:"tonal"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,g){let{attrs:f,emit:s,slots:n}=g;const{t:p}=ye(),{borderClasses:b}=qe(e),{colorClasses:P,colorStyles:S,variantClasses:y}=De(e),{densityClasses:ie}=Re(e),{elevationClasses:ce}=Fe(e),{roundedClasses:oe}=Ke(e),{sizeClasses:de}=Ne(e),{themeClasses:re}=le(e),$=Ve(e,"modelValue"),t=Oe(e,se,!1),c=Ee(e,f),ue=B(()=>e.link!==!1&&c.isLink.value),v=B(()=>!e.disabled&&e.link!==!1&&(!!t||e.link||c.isClickable.value)),fe=B(()=>({"aria-label":p(e.closeLabel),onClick(i){$.value=!1,s("click:close",i)}}));function q(i){var k;s("click",i),v.value&&((k=c.navigate)==null||k.call(c,i),t==null||t.toggle())}function ve(i){(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),q(i))}return()=>{const i=c.isLink.value?"a":e.tag,k=!!(e.appendIcon||e.appendAvatar),me=!!(k||n.append),he=!!(n.close||e.closable),F=!!(n.filter||e.filter)&&t,K=!!(e.prependIcon||e.prependAvatar),pe=!!(K||n.prepend),H=!t||t.isSelected.value;return $.value&&z(a(i,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":v.value,"v-chip--filter":F,"v-chip--pill":e.pill},re.value,b.value,H?P.value:void 0,ie.value,ce.value,oe.value,de.value,y.value,t==null?void 0:t.selectedClass.value,e.class],style:[H?S.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:c.href.value,tabindex:v.value?0:void 0,onClick:q,onKeydown:v.value&&!ue.value&&ve},{default:()=>{var X;return[Ge(v.value,"v-chip"),F&&a(Te,{key:"filter"},{default:()=>[z(a("div",{class:"v-chip__filter"},[n.filter?z(a(w,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},null),[[J("slot"),n.filter,"default"]]):a(u,{key:"filter-icon",icon:e.filterIcon},null)]),[[Ce,t.isSelected.value]])]}),pe&&a("div",{key:"prepend",class:"v-chip__prepend"},[n.prepend?a(w,{key:"prepend-defaults",disabled:!K,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},n.prepend):a(x,null,[e.prependIcon&&a(u,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&a(M,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),((X=n.default)==null?void 0:X.call(n,{isSelected:t==null?void 0:t.isSelected.value,selectedClass:t==null?void 0:t.selectedClass.value,select:t==null?void 0:t.select,toggle:t==null?void 0:t.toggle,value:t==null?void 0:t.value.value,disabled:e.disabled}))??e.text,me&&a("div",{key:"append",class:"v-chip__append"},[n.append?a(w,{key:"append-defaults",disabled:!k,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},n.append):a(x,null,[e.appendIcon&&a(u,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&a(M,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),he&&a("div",I({key:"close",class:"v-chip__close"},fe.value),[n.close?a(w,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},n.close):a(u,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[J("ripple"),v.value&&e.ripple,null]])}}}),Xe=te("div",{class:"font-rajdhani text-h3 font-weight-bold"}," प्रदेश समाचार ",-1),Ye={class:"d-flex justify-space-between flex-wrap"},da={__name:"provincenews",props:{provincenews:Object,provinces:Object},setup(e){return(g,f)=>(m(),C(Ie,null,{default:l(()=>[a(R,null,{default:l(()=>[a(r,{cols:"12"},{default:l(()=>[a(R,{align:"center"},{default:l(()=>[a(r,{cols:"12",md:"4"},{default:l(()=>[Xe]),_:1}),a(r,{cols:"12",md:"8"},{default:l(()=>[te("div",Ye,[(m(!0),Q(x,null,U(e.provinces,s=>(m(),C(He,{variant:"tonal",color:"primary",class:"font-rajdhani font-weight-bold text-subtitle-1 mb-2",href:"/province/"+s.name},{default:l(()=>[o(d(s.name),1)]),_:2},1032,["href"]))),256))])]),_:1})]),_:1})]),_:1}),a(r,{cols:"12",md:"7"},{default:l(()=>[a(R,null,{default:l(()=>[a(r,{cols:"12",md:"6"},{default:l(()=>[a(N,null,{default:l(({isHovering:s,props:n})=>[a(_,{variant:"text",class:"mb-3",href:"/news/"+e.provincenews[0].id},{default:l(()=>[a(O,I({cover:"",height:"516"},n,{class:["pa-4 align-end",s?"zoom":""],src:e.provincenews[0].image,alt:e.provincenews[0].media[0].file_name}),{default:l(()=>[a(_,{style:{"background-color":`rgba(
                                                var(--v-theme-background),
                                                0.8
                                            )`,"backdrop-filter":"blur(10px)"}},{default:l(()=>[a(E,{class:"bg-transparent"},{default:l(()=>[a(G,null,{default:l(()=>[a(T,{class:"text-h5 text-wrap font-weight-bold mb-2",style:{"line-height":"2rem"}},{default:l(()=>[o(d(e.provincenews[0].title),1)]),_:1}),a(j,null,{default:l(()=>[a(u,{start:"",size:"small",icon:h(L)},null,8,["icon"]),o(" "+d(h(D)(e.provincenews[0].created_at).startOf("day").fromNow()),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:2},1040,["class","src","alt"])]),_:2},1032,["href"])]),_:1})]),_:1}),a(r,{cols:"12",md:"6"},{default:l(()=>[a(N,null,{default:l(({isHovering:s,props:n})=>[a(_,{variant:"text",href:"/news/"+e.provincenews[1].id},{default:l(()=>[a(O,I({cover:"",height:"516"},n,{class:["pa-4 align-end",s?"zoom":""],src:e.provincenews[1].image,alt:e.provincenews[1].media[0].file_name}),{default:l(()=>[a(_,{style:{"background-color":`rgba(
                                                var(--v-theme-background),
                                                0.8
                                            )`,"backdrop-filter":"blur(10px)"}},{default:l(()=>[a(E,{class:"bg-transparent"},{default:l(()=>[a(G,null,{default:l(()=>[a(T,{class:"text-h5 text-wrap font-weight-bold mb-2",style:{"line-height":"2rem"}},{default:l(()=>[o(d(e.provincenews[1].title),1)]),_:1}),a(j,null,{default:l(()=>[a(u,{start:"",size:"small",icon:h(L)},null,8,["icon"]),o(" "+d(h(D)(e.provincenews[1].created_at).startOf("day").fromNow()),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:2},1040,["class","src","alt"])]),_:2},1032,["href"])]),_:1})]),_:1})]),_:1})]),_:1}),a(r,{cols:"12",md:"5"},{default:l(()=>[a(E,{color:"primary",class:"py-0 pl-0 bg-transparent"},{default:l(()=>[(m(!0),Q(x,null,U(e.provincenews,(s,n)=>(m(),C(N,null,{default:l(({isHovering:p,props:b})=>[n>1?(m(),C(G,I({key:0,href:"/news/"+s.id},b,{class:"py-0 pl-0 mb-3"}),{prepend:l(()=>[a(M,{rounded:"lg",size:"auto"},{default:l(()=>[a(O,{cover:"",width:"150",height:"120",class:we(p?"zoom":""),src:s.image},null,8,["class","src"])]),_:2},1024)]),default:l(()=>[a(T,{class:"text-h5 text-wrap line-clamp-3 font-weight-bold",style:{"line-height":"2rem","white-space":"wrap"}},{default:l(()=>[o(d(s.title),1)]),_:2},1024),a(j,null,{default:l(()=>[a(u,{start:"",size:"small",icon:h(L)},null,8,["icon"]),o(" "+d(h(D)(s.created_at).startOf("day").fromNow()),1)]),_:2},1024)]),_:2},1040,["href"])):_e("",!0)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1})]),_:1}))}};export{da as default};