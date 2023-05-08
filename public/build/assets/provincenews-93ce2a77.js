import{g as Y,az as be,m as Z,b as ee,c as ae,p as le,a5 as ke,t as V,f as ge,h as a,I as A,E as J,x as ye,z as Ve,d as B,F as z,V as Q,G as Ce,H as x,v as I,o as m,i as C,w as l,n as te,q as U,a1 as W,j as o,k as d,l as h,a9 as we,s as _e}from"./app-e4dd0431.js";import{f as L}from"./mdi-c0b373fd.js";import{h as D}from"./moment-fbc5633a.js";import{a as Ie,V as E}from"./VRow-488bf94e.js";import{V as r}from"./VCol-a05513b1.js";import{m as xe,u as Pe,a as Se,b as Ae}from"./group-8b0b9ef3.js";import{d as ne,R as Be,a as ze,j as Le,c as De,e as Ee,b as Ge,f as Oe,n as Re,g as je,V as u}from"./router-cbca83b5.js";import{V as Ne}from"./index-ca596830.js";import{e as Te,m as Fe,a as $e,f as Me,b as qe,c as He,V as w}from"./color-5f0020da.js";import{c as F,V as _}from"./VCard-659a1b9b.js";import{V as G}from"./VHover-53460dd0.js";import{V as O}from"./VImg-f5e77ab7.js";import{V as R}from"./VList-48514ba6.js";import{V as j,a as N,b as T}from"./VListItem-b9d23e01.js";import"./createSimpleFunctional-0ce1e943.js";import"./delay-bffcfac3.js";const se=Symbol.for("vuetify:v-chip-group");Y()({name:"VChipGroup",props:{column:Boolean,filter:Boolean,valueComparator:{type:Function,default:be},...Z(),...xe({selectedClass:"v-chip--selected"}),...ee(),...ae(),...ne({variant:"tonal"})},emits:{"update:modelValue":e=>!0},setup(e,g){let{slots:f}=g;const{themeClasses:s}=le(e),{isSelected:n,select:p,next:b,prev:P,selected:S}=Pe(e,se);return ke({VChip:{color:V(e,"color"),disabled:V(e,"disabled"),filter:V(e,"filter"),variant:V(e,"variant")}}),ge(()=>a(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},s.value,e.class],style:e.style},{default:()=>{var y;return[(y=f.default)==null?void 0:y.call(f,{isSelected:n,select:p,next:b,prev:P,selected:S.value})]}})),{}}});const Ke=Y()({name:"VChip",directives:{Ripple:Be},props:{activeClass:String,appendAvatar:String,appendIcon:A,closable:Boolean,closeIcon:{type:A,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:A,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:J(),onClickOnce:J(),...Te(),...Z(),...ze(),...Fe(),...Se(),...$e(),...Le(),...De(),...ee({tag:"span"}),...ae(),...ne({variant:"tonal"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,g){let{attrs:f,emit:s,slots:n}=g;const{t:p}=ye(),{borderClasses:b}=Me(e),{colorClasses:P,colorStyles:S,variantClasses:y}=Ee(e),{densityClasses:ie}=Ge(e),{elevationClasses:ce}=qe(e),{roundedClasses:oe}=He(e),{sizeClasses:de}=Oe(e),{themeClasses:re}=le(e),$=Ve(e,"modelValue"),t=Ae(e,se,!1),c=Re(e,f),ue=B(()=>e.link!==!1&&c.isLink.value),v=B(()=>!e.disabled&&e.link!==!1&&(!!t||e.link||c.isClickable.value)),fe=B(()=>({"aria-label":p(e.closeLabel),onClick(i){$.value=!1,s("click:close",i)}}));function M(i){var k;s("click",i),v.value&&((k=c.navigate)==null||k.call(c,i),t==null||t.toggle())}function ve(i){(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),M(i))}return()=>{const i=c.isLink.value?"a":e.tag,k=!!(e.appendIcon||e.appendAvatar),me=!!(k||n.append),he=!!(n.close||e.closable),q=!!(n.filter||e.filter)&&t,H=!!(e.prependIcon||e.prependAvatar),pe=!!(H||n.prepend),K=!t||t.isSelected.value;return $.value&&z(a(i,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":v.value,"v-chip--filter":q,"v-chip--pill":e.pill},re.value,b.value,K?P.value:void 0,ie.value,ce.value,oe.value,de.value,y.value,t==null?void 0:t.selectedClass.value,e.class],style:[K?S.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:c.href.value,tabindex:v.value?0:void 0,onClick:M,onKeydown:v.value&&!ue.value&&ve},{default:()=>{var X;return[je(v.value,"v-chip"),q&&a(Ne,{key:"filter"},{default:()=>[z(a("div",{class:"v-chip__filter"},[n.filter?z(a(w,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},null),[[Q("slot"),n.filter,"default"]]):a(u,{key:"filter-icon",icon:e.filterIcon},null)]),[[Ce,t.isSelected.value]])]}),pe&&a("div",{key:"prepend",class:"v-chip__prepend"},[n.prepend?a(w,{key:"prepend-defaults",disabled:!H,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},n.prepend):a(x,null,[e.prependIcon&&a(u,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&a(F,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),((X=n.default)==null?void 0:X.call(n,{isSelected:t==null?void 0:t.isSelected.value,selectedClass:t==null?void 0:t.selectedClass.value,select:t==null?void 0:t.select,toggle:t==null?void 0:t.toggle,value:t==null?void 0:t.value.value,disabled:e.disabled}))??e.text,me&&a("div",{key:"append",class:"v-chip__append"},[n.append?a(w,{key:"append-defaults",disabled:!k,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},n.append):a(x,null,[e.appendIcon&&a(u,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&a(F,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),he&&a("div",I({key:"close",class:"v-chip__close"},fe.value),[n.close?a(w,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},n.close):a(u,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Q("ripple"),v.value&&e.ripple,null]])}}}),Xe=te("div",{class:"font-rajdhani text-h3 font-weight-bold"}," प्रदेश समाचार ",-1),Je={class:"d-flex justify-space-between"},ua={__name:"provincenews",props:{provincenews:Object,provinces:Object},setup(e){return(g,f)=>(m(),C(Ie,null,{default:l(()=>[a(E,null,{default:l(()=>[a(r,{cols:"12"},{default:l(()=>[a(E,{align:"center"},{default:l(()=>[a(r,{cols:"12",md:"4"},{default:l(()=>[Xe]),_:1}),a(r,{cols:"12",md:"8"},{default:l(()=>[te("div",Je,[(m(!0),U(x,null,W(e.provinces,s=>(m(),C(Ke,{variant:"tonal",color:"primary",class:"font-rajdhani font-weight-bold text-subtitle-1",href:"/province/"+s.name},{default:l(()=>[o(d(s.name),1)]),_:2},1032,["href"]))),256))])]),_:1})]),_:1})]),_:1}),a(r,{cols:"12",md:"7"},{default:l(()=>[a(E,null,{default:l(()=>[a(r,{cols:"6"},{default:l(()=>[a(G,null,{default:l(({isHovering:s,props:n})=>[a(_,{class:"mb-3",href:"/news/"+e.provincenews[0].id},{default:l(()=>[a(O,I({cover:"",height:"516"},n,{class:["pa-4 align-end",s?"zoom":""],src:e.provincenews[0].image,alt:e.provincenews[0].media[0].file_name}),{default:l(()=>[a(_,{style:{"background-color":`rgba(
                                                var(--v-theme-background),
                                                0.8
                                            )`,"backdrop-filter":"blur(10px)"}},{default:l(()=>[a(R,{class:"bg-transparent"},{default:l(()=>[a(j,null,{default:l(()=>[a(N,{class:"text-h5 text-wrap font-weight-bold mb-2",style:{"line-height":"2rem"}},{default:l(()=>[o(d(e.provincenews[0].title),1)]),_:1}),a(T,null,{default:l(()=>[a(u,{start:"",size:"small",icon:h(L)},null,8,["icon"]),o(" "+d(h(D)(e.provincenews[0].created_at).startOf("day").fromNow()),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:2},1040,["class","src","alt"])]),_:2},1032,["href"])]),_:1})]),_:1}),a(r,{cols:"6"},{default:l(()=>[a(G,null,{default:l(({isHovering:s,props:n})=>[a(_,{href:"/news/"+e.provincenews[1].id},{default:l(()=>[a(O,I({cover:"",height:"516"},n,{class:["pa-4 align-end",s?"zoom":""],src:e.provincenews[1].image,alt:e.provincenews[1].media[0].file_name}),{default:l(()=>[a(_,{style:{"background-color":`rgba(
                                                var(--v-theme-background),
                                                0.8
                                            )`,"backdrop-filter":"blur(10px)"}},{default:l(()=>[a(R,{class:"bg-transparent"},{default:l(()=>[a(j,null,{default:l(()=>[a(N,{class:"text-h5 text-wrap font-weight-bold mb-2",style:{"line-height":"2rem"}},{default:l(()=>[o(d(e.provincenews[1].title),1)]),_:1}),a(T,null,{default:l(()=>[a(u,{start:"",size:"small",icon:h(L)},null,8,["icon"]),o(" "+d(h(D)(e.provincenews[1].created_at).startOf("day").fromNow()),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:2},1040,["class","src","alt"])]),_:2},1032,["href"])]),_:1})]),_:1})]),_:1})]),_:1}),a(r,{cols:"12",md:"5"},{default:l(()=>[a(R,{color:"primary",class:"py-0 pl-0 bg-transparent"},{default:l(()=>[(m(!0),U(x,null,W(e.provincenews,(s,n)=>(m(),C(G,null,{default:l(({isHovering:p,props:b})=>[n>1?(m(),C(j,I({key:0,href:"/news/"+s.id},b,{class:"py-0 pl-0 mb-3"}),{prepend:l(()=>[a(F,{rounded:"lg",size:"auto"},{default:l(()=>[a(O,{cover:"",width:"150",height:"120",class:we(p?"zoom":""),src:s.image},null,8,["class","src"])]),_:2},1024)]),default:l(()=>[a(N,{class:"text-h5 text-wrap line-clamp-3 font-weight-bold",style:{"line-height":"2rem","white-space":"wrap"}},{default:l(()=>[o(d(s.title),1)]),_:2},1024),a(T,null,{default:l(()=>[a(u,{start:"",size:"small",icon:h(L)},null,8,["icon"]),o(" "+d(h(D)(s.created_at).startOf("day").fromNow()),1)]),_:2},1024)]),_:2},1040,["href"])):_e("",!0)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1})]),_:1}))}};export{ua as default};
