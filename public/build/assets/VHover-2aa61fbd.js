import{m as s,u as t}from"./delay-c864871e.js";import{g as d,D as i}from"./app-edb8a4a4.js";const v=d()({name:"VHover",props:{disabled:Boolean,modelValue:{type:Boolean,default:void 0},...s()},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const l=i(e,"modelValue"),{runOpenDelay:u,runCloseDelay:r}=t(e,o=>!e.disabled&&(l.value=o));return()=>{var o;return(o=a.default)==null?void 0:o.call(a,{isHovering:l.value,props:{onMouseenter:u,onMouseleave:r}})}}});export{v as V};