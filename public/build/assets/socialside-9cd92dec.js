import{C as o,_ as r,o as n,j as a,h as c,F as k,D as u,c as f}from"./app-b262b2dd.js";import{a as g}from"./VBtn-a84251f2.js";import"./router-4f5d0021.js";import"./tag-d9a73c48.js";import"./group-90e9eb5f.js";import"./resizeObserver-9b8ad9c8.js";const T={class:"position-sticky",style:{top:"80px"}},E={class:"list-style-none d-flex d-md-block"},v={class:"mb-4"},P={__name:"socialside",props:{pageTitle:String},setup(p){const t=p,l=o(()=>r(()=>import("./facebook-2a6b0f5a.js"),["assets/facebook-2a6b0f5a.js","assets/app-b262b2dd.js","assets/app-934bc65f.css","assets/_plugin-vue_export-helper-c27b6911.js"])),_=o(()=>r(()=>import("./twitter-5ccd0a92.js"),["assets/twitter-5ccd0a92.js","assets/app-b262b2dd.js","assets/app-934bc65f.css","assets/_plugin-vue_export-helper-c27b6911.js"])),d=o(()=>r(()=>import("./linkedin-b9adb525.js"),["assets/linkedin-b9adb525.js","assets/app-b262b2dd.js","assets/app-934bc65f.css","assets/_plugin-vue_export-helper-c27b6911.js"])),h=o(()=>r(()=>import("./whatsapp-09b68472.js"),["assets/whatsapp-09b68472.js","assets/app-b262b2dd.js","assets/app-934bc65f.css","assets/_plugin-vue_export-helper-c27b6911.js"]));let e=window.location.href;const m=[{icon:l,network:"facebook",color:"#3B5998",sharer:"https://www.facebook.com/sharer/sharer.php?display=popup&u="+e+"&title="+t.pageTitle+"&description="+t.pageTitle},{icon:_,network:"twitter",color:"#00acee",sharer:"https://twitter.com/intent/tweet?url="+e+"&text="+t.pageTitle+"&via=rajdhanipress"},{icon:d,network:"linkedin",color:"#0077B5",sharer:"https://www.linkedin.com/sharing/share-offsite/?url="+e+"&title="+t.pageTitle},{icon:h,network:"whatsapp",color:"#25d366",sharer:"https://api.whatsapp.com/send?text="+t.pageTitle+" "+e}],w=s=>{window.open(s)};return(s,V)=>(n(),a("div",T,[c("ul",E,[(n(),a(k,null,u(m,i=>c("li",v,[f(g,{target:"_blank",icon:i.icon,color:i.color,onClick:b=>w(i.sharer)},null,8,["icon","color","onClick"])])),64))])]))}};export{P as default};
