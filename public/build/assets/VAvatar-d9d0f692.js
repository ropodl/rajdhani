import{k as o,al as y,am as f,H as m,an as V,p as k,a2 as C,J as P,K as h,M as z,s as S,e as u}from"./app-3990ec44.js";import{g as A,c as I,h as R,i as T,p as x,q as B,f as D,z as F,a as _,x as q}from"./router-94feeead.js";import{V as H}from"./VRow-07fd8d49.js";function O(a){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",e=arguments.length>2?arguments[2]:void 0;return o()({name:e??y(f(a.replace(/__/g,"-"))),props:{tag:{type:String,default:l},...m()},setup(s,r){let{slots:t}=r;return()=>{var n;return V(s.tag,{class:[a,s.class],style:s.style},(n=t.default)==null?void 0:n.call(t))}}})}const J=k({start:Boolean,end:Boolean,icon:C,image:String,...m(),...A(),...I(),...R(),...P(),...h(),...T({variant:"flat"})},"v-avatar"),$=o()({name:"VAvatar",props:J(),setup(a,l){let{slots:e}=l;const{themeClasses:s}=z(a),{colorClasses:r,colorStyles:t,variantClasses:n}=x(a),{densityClasses:c}=B(a),{roundedClasses:v}=D(a),{sizeClasses:g,sizeStyles:d}=F(a);return S(()=>u(a.tag,{class:["v-avatar",{"v-avatar--start":a.start,"v-avatar--end":a.end},s.value,r.value,c.value,v.value,g.value,n.value,a.class],style:[t.value,d.value,a.style]},{default:()=>{var i;return[a.image?u(H,{key:"image",src:a.image,alt:"",cover:!0},null):a.icon?u(_,{key:"icon",icon:a.icon},null):(i=e.default)==null?void 0:i.call(e),q(!1,"v-avatar")]}})),{}}});export{$ as V,O as c};
