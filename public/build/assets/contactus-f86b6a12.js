import{g as ne,D as oe,d as I,r as x,L as ie,w as g,W as ue,f as re,aa as se,h as t,B as P,N as _,Y as E,a9 as ce,ab as de,H as S,ac as fe,S as me,U as ve,n as he,z as xe,y as ge,s as l,v as c,x as k}from"./app-eda02d94.js";import{a as Ve,V as ye}from"./VRow-1e83c7b8.js";import{V as G}from"./VCol-4b5c2cca.js";import{V as we}from"./VList-264e81f0.js";import{V as R,a as B,b as N}from"./VListItem-b9217c18.js";import{m as _e,b as Ce,u as Fe,c as L,d as be,e as pe,g as Ie,f as Pe,V as Se,a as z}from"./VForm-6e5f59a3.js";import{I as ke}from"./VImg-b08ed088.js";import{V as Re}from"./VBtn-62460dc0.js";import"./index-9d2650d4.js";import"./color-ed9d44a0.js";import"./router-08441ad9.js";import"./createSimpleFunctional-33ff3a1a.js";import"./VAvatar-75256411.js";import"./easing-9f15041e.js";const Be=ne()({name:"VTextarea",directives:{Intersect:ke},inheritAttrs:!1,props:{autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,..._e(),...Ce()},emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,M){let{attrs:V,emit:T,slots:r}=M;const i=oe(e,"modelValue"),{isFocused:m,focus:U,blur:O}=Fe(e),$=I(()=>typeof e.counterValue=="function"?e.counterValue(i.value):(i.value||"").toString().length),W=I(()=>{if(V.maxlength)return V.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function Y(a,o){var n,u;!e.autofocus||!a||(u=(n=o[0].target)==null?void 0:n.focus)==null||u.call(n)}const H=x(),y=x(),D=x(""),w=x(),q=I(()=>e.persistentPlaceholder||m.value||e.active);function C(){var a;w.value!==document.activeElement&&((a=w.value)==null||a.focus()),m.value||U()}function J(a){C(),T("click:control",a)}function K(a){T("mousedown:control",a)}function Q(a){a.stopPropagation(),C(),S(()=>{i.value="",fe(e["onClick:clear"],a)})}function X(a){var n;const o=a.target;if(i.value=o.value,(n=e.modelModifiers)!=null&&n.trim){const u=[o.selectionStart,o.selectionEnd];S(()=>{o.selectionStart=u[0],o.selectionEnd=u[1]})}}const d=x();function f(){e.autoGrow&&S(()=>{if(!d.value||!y.value)return;const a=getComputedStyle(d.value),o=getComputedStyle(y.value.$el),n=parseFloat(a.getPropertyValue("--v-field-padding-top"))+parseFloat(a.getPropertyValue("--v-input-padding-top"))+parseFloat(a.getPropertyValue("--v-field-padding-bottom")),u=d.value.scrollHeight,F=parseFloat(a.lineHeight),b=Math.max(parseFloat(e.rows)*F+n,parseFloat(o.getPropertyValue("--v-input-control-height"))),p=parseFloat(e.maxRows)*F+n||1/0;D.value=me(ve(u??0,b,p))})}ie(f),g(i,f),g(()=>e.rows,f),g(()=>e.maxRows,f),g(()=>e.density,f);let s;return g(d,a=>{a?(s=new ResizeObserver(f),s.observe(d.value)):s==null||s.disconnect()}),ue(()=>{s==null||s.disconnect()}),re(()=>{const a=!!(r.counter||e.counter||e.counterValue),o=!!(a||r.details),[n,u]=se(V),[{modelValue:F,...b}]=L.filterProps(e),[p]=be(e);return t(L,P({ref:H,modelValue:i.value,"onUpdate:modelValue":v=>i.value=v,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)},e.class],style:e.style},n,b,{focused:m.value}),{...r,default:v=>{let{isDisabled:h,isDirty:j,isReadonly:Z,isValid:ee}=v;return t(pe,P({ref:y,style:{"--v-textarea-control-height":D.value},onClick:J,onMousedown:K,"onClick:clear":Q,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},p,{active:q.value||j.value,dirty:j.value||e.dirty,disabled:h.value,focused:m.value,error:ee.value===!1}),{...r,default:te=>{let{props:{class:A,...ae}}=te;return t(_,null,[e.prefix&&t("span",{class:"v-text-field__prefix"},[e.prefix]),E(t("textarea",P({ref:w,class:A,value:i.value,onInput:X,autofocus:e.autofocus,readonly:Z.value,disabled:h.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:C,onBlur:O},ae,u),null),[[ce("intersect"),{handler:Y},null,{once:!0}]]),e.autoGrow&&E(t("textarea",{class:[A,"v-textarea__sizer"],"onUpdate:modelValue":le=>i.value=le,ref:d,readonly:!0,"aria-hidden":"true"},null),[[de,i.value]]),e.suffix&&t("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:o?v=>{var h;return t(_,null,[(h=r.details)==null?void 0:h.call(r,v),a&&t(_,null,[t("span",null,null),t(Ie,{active:e.persistentCounter||m.value,value:$.value,max:W.value},r.counter)])])}:void 0})}),Pe({},H,y,w)}}),Ne=["src"],Ye={__name:"contactus",props:{info:Object},setup(e){return(M,V)=>(he(),xe(_,null,[ge("iframe",{src:e.info.map_iframe,width:"100%",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy"},null,8,Ne),t(Ve,null,{default:l(()=>[t(ye,null,{default:l(()=>[t(G,{cols:"12",md:"6"},{default:l(()=>[t(we,null,{default:l(()=>[t(R,null,{default:l(()=>[t(B,{class:"font-rajdhani text-h3",style:{"line-height":"3.5rem"}},{default:l(()=>[c("ठेगाना")]),_:1}),t(N,{class:"text-h6",style:{"line-height":"2rem"}},{default:l(()=>[c(k(e.info.address),1)]),_:1})]),_:1}),t(R,null,{default:l(()=>[t(B,{class:"font-rajdhani text-h3",style:{"line-height":"3.5rem"}},{default:l(()=>[c("सम्पर्क")]),_:1}),t(N,{class:"text-h6",style:{"line-height":"2rem"}},{default:l(()=>[c(k(e.info.phone1+","+e.info.phone2),1)]),_:1})]),_:1}),t(R,null,{default:l(()=>[t(B,{class:"font-rajdhani text-h3",style:{"line-height":"3.5rem"}},{default:l(()=>[c("इमेल")]),_:1}),t(N,{class:"text-h6",style:{"line-height":"2rem"}},{default:l(()=>[c(k(e.info.email),1)]),_:1})]),_:1})]),_:1})]),_:1}),t(G,{cols:"12",md:"6"},{default:l(()=>[t(Se,null,{default:l(()=>[t(z,{placeholder:"Full Name"}),t(z,{placeholder:"Email Address"}),t(z,{placeholder:"Subject"}),t(Be,{placeholder:"Message"}),t(Re,{flat:"",block:"",type:"submit",height:"50",color:"primary",class:"text-capitalize"},{default:l(()=>[c("Submit")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64))}};export{Ye as default};
