import{F as V,r as S,G as C,aL as b,Q as oe,D as T,d as f,W as K,at as de,E as ve,g as fe,a3 as _,af as E,m as me,b as ye,c as ge,w as pe,p as Se,f as he,Y as ke,aa as we,h as m,N as F}from"./app-5d3efda9.js";import{c as U}from"./createSimpleFunctional-632bc2f8.js";import{R as be,m as Ae,g as Pe,c as Ve,l as Ce,u as Ie,h as Me,n as Oe,a as j}from"./VBtn-021268ed.js";import{d as Le,f as Be,m as De,a as Ne,e as Ge,g as Re,b as Te,c as _e,V as x}from"./color-46eb3fea.js";import{V as H}from"./VAvatar-500c573f.js";const O=Symbol.for("vuetify:list");function Xe(){const e=V(O,{hasPrepend:S(!1),updateHasPrepend:()=>null}),r={hasPrepend:S(!1),updateHasPrepend:l=>{l&&(r.hasPrepend.value=l)}};return C(O,r),e}function Ee(){return V(O,null)}const Fe={open:e=>{let{id:r,value:l,opened:t,parents:a}=e;if(l){const n=new Set;n.add(r);let s=a.get(r);for(;s!=null;)n.add(s),s=a.get(s);return n}else return t.delete(r),t},select:()=>null},$={open:e=>{let{id:r,value:l,opened:t,parents:a}=e;if(l){let n=a.get(r);for(t.add(r);n!=null&&n!==r;)t.add(n),n=a.get(n);return t}else t.delete(r);return t},select:()=>null},je={open:$.open,select:e=>{let{id:r,value:l,opened:t,parents:a}=e;if(!l)return t;const n=[];let s=a.get(r);for(;s!=null;)n.push(s),s=a.get(s);return new Set(n)}},L=e=>{const r={select:l=>{let{id:t,value:a,selected:n}=l;if(t=b(t),e&&!a){const s=Array.from(n.entries()).reduce((c,g)=>{let[h,y]=g;return y==="on"?[...c,h]:c},[]);if(s.length===1&&s[0]===t)return n}return n.set(t,a?"on":"off"),n},in:(l,t,a)=>{let n=new Map;for(const s of l||[])n=r.select({id:s,value:!0,selected:new Map(n),children:t,parents:a});return n},out:l=>{const t=[];for(const[a,n]of l.entries())n==="on"&&t.push(a);return t}};return r},Q=e=>{const r=L(e);return{select:t=>{let{selected:a,id:n,...s}=t;n=b(n);const c=a.has(n)?new Map([[n,a.get(n)]]):new Map;return r.select({...s,id:n,selected:c})},in:(t,a,n)=>{let s=new Map;return t!=null&&t.length&&(s=r.in(t.slice(0,1),a,n)),s},out:(t,a,n)=>r.out(t,a,n)}},xe=e=>{const r=L(e);return{select:t=>{let{id:a,selected:n,children:s,...c}=t;return a=b(a),s.has(a)?n:r.select({id:a,selected:n,children:s,...c})},in:r.in,out:r.out}},He=e=>{const r=Q(e);return{select:t=>{let{id:a,selected:n,children:s,...c}=t;return a=b(a),s.has(a)?n:r.select({id:a,selected:n,children:s,...c})},in:r.in,out:r.out}},Ke=e=>{const r={select:l=>{let{id:t,value:a,selected:n,children:s,parents:c}=l;t=b(t);const g=new Map(n),h=[t];for(;h.length;){const i=h.shift();n.set(i,a?"on":"off"),s.has(i)&&h.push(...s.get(i))}let y=c.get(t);for(;y;){const i=s.get(y),u=i.every(o=>n.get(o)==="on"),d=i.every(o=>!n.has(o)||n.get(o)==="off");n.set(y,u?"on":d?"off":"indeterminate"),y=c.get(y)}return e&&!a&&Array.from(n.entries()).reduce((u,d)=>{let[o,k]=d;return k==="on"?[...u,o]:u},[]).length===0?g:n},in:(l,t,a)=>{let n=new Map;for(const s of l||[])n=r.select({id:s,value:!0,selected:new Map(n),children:t,parents:a});return n},out:(l,t)=>{const a=[];for(const[n,s]of l.entries())s==="on"&&!t.has(n)&&a.push(n);return a}};return r},P=Symbol.for("vuetify:nested"),W={id:S(),root:{register:()=>null,unregister:()=>null,parents:S(new Map),children:S(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:S(new Set),selected:S(new Map),selectedValues:S([])}},Ze=oe({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),et=e=>{let r=!1;const l=S(new Map),t=S(new Map),a=T(e,"opened",e.opened,i=>new Set(i),i=>[...i.values()]),n=f(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return He(e.mandatory);case"leaf":return xe(e.mandatory);case"independent":return L(e.mandatory);case"single-independent":return Q(e.mandatory);case"classic":default:return Ke(e.mandatory)}}),s=f(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return je;case"single":return Fe;case"multiple":default:return $}}),c=T(e,"selected",e.selected,i=>n.value.in(i,l.value,t.value),i=>n.value.out(i,l.value,t.value));K(()=>{r=!0});function g(i){const u=[];let d=i;for(;d!=null;)u.unshift(d),d=t.value.get(d);return u}const h=de("nested"),y={id:S(),root:{opened:a,selected:c,selectedValues:f(()=>{const i=[];for(const[u,d]of c.value.entries())d==="on"&&i.push(u);return i}),register:(i,u,d)=>{u&&i!==u&&t.value.set(i,u),d&&l.value.set(i,[]),u!=null&&l.value.set(u,[...l.value.get(u)||[],i])},unregister:i=>{if(r)return;l.value.delete(i);const u=t.value.get(i);if(u){const d=l.value.get(u)??[];l.value.set(u,d.filter(o=>o!==i))}t.value.delete(i),a.value.delete(i)},open:(i,u,d)=>{h.emit("click:open",{id:i,value:u,path:g(i),event:d});const o=s.value.open({id:i,value:u,opened:new Set(a.value),children:l.value,parents:t.value,event:d});o&&(a.value=o)},openOnSelect:(i,u,d)=>{const o=s.value.select({id:i,value:u,selected:new Map(c.value),opened:new Set(a.value),children:l.value,parents:t.value,event:d});o&&(a.value=o)},select:(i,u,d)=>{h.emit("click:select",{id:i,value:u,path:g(i),event:d});const o=n.value.select({id:i,value:u,selected:new Map(c.value),children:l.value,parents:t.value,event:d});o&&(c.value=o),y.root.openOnSelect(i,u,d)},children:l,parents:t}};return C(P,y),y.root},Ue=(e,r)=>{const l=V(P,W),t=Symbol(ve()),a=f(()=>e.value??t),n={...l,id:a,open:(s,c)=>l.root.open(a.value,s,c),openOnSelect:(s,c)=>l.root.openOnSelect(a.value,s,c),isOpen:f(()=>l.root.opened.value.has(a.value)),parent:f(()=>l.root.parents.value.get(a.value)),select:(s,c)=>l.root.select(a.value,s,c),isSelected:f(()=>l.root.selected.value.get(b(a.value))==="on"),isIndeterminate:f(()=>l.root.selected.value.get(a.value)==="indeterminate"),isLeaf:f(()=>!l.root.children.value.get(a.value)),isGroupActivator:l.isGroupActivator};return!l.isGroupActivator&&l.root.register(a.value,l.id.value,r),K(()=>{!l.isGroupActivator&&l.root.unregister(a.value)}),r&&C(P,n),n},tt=()=>{const e=V(P,W);C(P,{...e,isGroupActivator:!0})};const $e=U("v-list-item-subtitle"),Qe=U("v-list-item-title"),nt=fe()({name:"VListItem",directives:{Ripple:be},props:{active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:_,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:_,ripple:{type:Boolean,default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:E(),onClickOnce:E(),...Le(),...me(),...Ae(),...Be(),...De(),...Ne(),...Pe(),...ye(),...ge(),...Ve({variant:"text"})},emits:{click:e=>!0},setup(e,r){let{attrs:l,slots:t,emit:a}=r;const n=Ce(e,l),s=f(()=>e.value??n.href.value),{select:c,isSelected:g,isIndeterminate:h,isGroupActivator:y,root:i,parent:u,openOnSelect:d}=Ue(s,!1),o=Ee(),k=f(()=>{var v;return e.active!==!1&&(e.active||((v=n.isActive)==null?void 0:v.value)||g.value)}),B=f(()=>e.link!==!1&&n.isLink.value),w=f(()=>!e.disabled&&e.link!==!1&&(e.link||n.isClickable.value||e.value!=null&&!!o)),Y=f(()=>e.rounded||e.nav),q=f(()=>({color:k.value?e.activeColor??e.color:e.color,variant:e.variant}));pe(()=>{var v;return(v=n.isActive)==null?void 0:v.value},v=>{v&&u.value!=null&&i.open(u.value,!0),v&&d(v)},{immediate:!0});const{themeClasses:z}=Se(e),{borderClasses:J}=Ge(e),{colorClasses:X,colorStyles:Z,variantClasses:ee}=Ie(q),{densityClasses:te}=Me(e),{dimensionStyles:ne}=Re(e),{elevationClasses:ae}=Te(e),{roundedClasses:le}=_e(Y),se=f(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),I=f(()=>({isActive:k.value,select:c,isSelected:g.value,isIndeterminate:h.value}));function D(v){var A;a("click",v),!(y||!w.value)&&((A=n.navigate)==null||A.call(n,v),e.value!=null&&c(!g.value,v))}function ie(v){(v.key==="Enter"||v.key===" ")&&(v.preventDefault(),D(v))}return he(()=>{const v=B.value?"a":e.tag,A=!o||g.value||k.value,re=t.title||e.title,ue=t.subtitle||e.subtitle,N=!!(e.appendAvatar||e.appendIcon),ce=!!(N||t.append),G=!!(e.prependAvatar||e.prependIcon),M=!!(G||t.prepend);return o==null||o.updateHasPrepend(M),ke(m(v,{class:["v-list-item",{"v-list-item--active":k.value,"v-list-item--disabled":e.disabled,"v-list-item--link":w.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!M&&(o==null?void 0:o.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&k.value},z.value,J.value,A?X.value:void 0,te.value,ae.value,se.value,le.value,ee.value,e.class],style:[A?Z.value:void 0,ne.value,e.style],href:n.href.value,tabindex:w.value?0:void 0,onClick:D,onKeydown:w.value&&!B.value&&ie},{default:()=>{var R;return[Oe(w.value||k.value,"v-list-item"),M&&m("div",{key:"prepend",class:"v-list-item__prepend"},[t.prepend?m(x,{key:"prepend-defaults",disabled:!G,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var p;return[(p=t.prepend)==null?void 0:p.call(t,I.value)]}}):m(F,null,[e.prependAvatar&&m(H,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&m(j,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),m("div",{class:"v-list-item__content","data-no-activator":""},[re&&m(Qe,{key:"title"},{default:()=>{var p;return[((p=t.title)==null?void 0:p.call(t,{title:e.title}))??e.title]}}),ue&&m($e,{key:"subtitle"},{default:()=>{var p;return[((p=t.subtitle)==null?void 0:p.call(t,{subtitle:e.subtitle}))??e.subtitle]}}),(R=t.default)==null?void 0:R.call(t,I.value)]),ce&&m("div",{key:"append",class:"v-list-item__append"},[t.append?m(x,{key:"append-defaults",disabled:!N,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var p;return[(p=t.append)==null?void 0:p.call(t,I.value)]}}):m(F,null,[e.appendIcon&&m(j,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&m(H,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])]}}),[[we("ripple"),w.value&&e.ripple]])}),{}}});export{nt as V,Qe as a,$e as b,Ue as c,Ee as d,Xe as e,et as f,Ze as m,tt as u};
