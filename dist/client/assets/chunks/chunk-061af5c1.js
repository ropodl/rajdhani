import{f as u}from"./chunk-74b5fd1c.js";import{r as f,Y as p,b as d,c as m,u as a,Z as v}from"../resources_js_app.js.255d37b6.js";import{V as w}from"./chunk-429a8aa6.js";function _(t,o){var r=document.getElementById(t),e=o,n=r.getBoundingClientRect().top,s=n+window.pageYOffset-e;window.scrollTo({top:s,behavior:"smooth"})}function c(t,o){const{self:r=!1}=o.modifiers??{},e=o.value,n=typeof e=="object"&&e.options||{passive:!0},s=typeof e=="function"||"handleEvent"in e?e:e.handler,l=r?t:o.arg?document.querySelector(o.arg):window;l&&(l.addEventListener("scroll",s,n),t._onScroll=Object(t._onScroll),t._onScroll[o.instance.$.uid]={handler:s,options:n,target:r?void 0:l})}function i(t,o){var s;if(!((s=t._onScroll)!=null&&s[o.instance.$.uid]))return;const{handler:r,options:e,target:n=t}=t._onScroll[o.instance.$.uid];n.removeEventListener("scroll",r,e),delete t._onScroll[o.instance.$.uid]}function S(t,o){o.value!==o.oldValue&&(i(t,o),c(t,o))}const h={mounted:c,unmounted:i,updated:S},$={__name:"gotop",setup(t){let o=f(!1);const r=e=>{if(typeof window>"u")return;const n=window.scrollY||0;o.value=n>500};return(e,n)=>p((d(),m(w,{class:"position-fixed","aria-label":"Go to top button",icon:a(u),style:v({bottom:a(o)?"40px":"-70px",right:"40px",zIndex:"999",transition:"all 250ms cubic-bezier(.17,.26,1,.32) 0s"}),onClick:n[0]||(n[0]=s=>a(_)("app",10))},null,8,["icon","style"])),[[h,r]])}};export{$ as default};
