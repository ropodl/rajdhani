import{m as u,u as t}from"./delay-55e6b260.js";import{p as d,k as m,n as p}from"./app-89bb6b65.js";const i=d({disabled:Boolean,modelValue:{type:Boolean,default:void 0},...u()},"v-hover"),c=m()({name:"VHover",props:i(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:a}=l;const r=p(e,"modelValue"),{runOpenDelay:n,runCloseDelay:s}=t(e,o=>!e.disabled&&(r.value=o));return()=>{var o;return(o=a.default)==null?void 0:o.call(a,{isHovering:r.value,props:{onMouseenter:n,onMouseleave:s}})}}});export{c as V};