import{v as V,x as C,y as I,aF as b,d as k,p as U,n as T,s as f,K as $,L as ve,q as fe,a0 as _,au as j,m as me,g as ye,z as ge,a as pe,aM as Se,Q as he,a7 as ke,c as m,F as x}from"./app-1f6a3bb7.js";import{c as q,V as E}from"./VAvatar-18e78d52.js";import{m as we,h as be,p as Ae,b as Pe,c as Ce,v as Ve,j as Ie,R as Me,z as Le,d as Oe,k as Be,l as De,q as Ne,e as Re,f as Fe,o as Ge,a as K,V as H}from"./router-3893207c.js";import{m as Te,a as _e,u as je}from"./tag-84200d7a.js";const O=Symbol.for("vuetify:list");function et(){const e=V(O,{hasPrepend:C(!1),updateHasPrepend:()=>null}),r={hasPrepend:C(!1),updateHasPrepend:l=>{l&&(r.hasPrepend.value=l)}};return I(O,r),e}function xe(){return V(O,null)}const Ee={open:e=>{let{id:r,value:l,opened:t,parents:a}=e;if(l){const n=new Set;n.add(r);let s=a.get(r);for(;s!=null;)n.add(s),s=a.get(s);return n}else return t.delete(r),t},select:()=>null},z={open:e=>{let{id:r,value:l,opened:t,parents:a}=e;if(l){let n=a.get(r);for(t.add(r);n!=null&&n!==r;)t.add(n),n=a.get(n);return t}else t.delete(r);return t},select:()=>null},Ke={open:z.open,select:e=>{let{id:r,value:l,opened:t,parents:a}=e;if(!l)return t;const n=[];let s=a.get(r);for(;s!=null;)n.push(s),s=a.get(s);return new Set(n)}},B=e=>{const r={select:l=>{let{id:t,value:a,selected:n}=l;if(t=b(t),e&&!a){const s=Array.from(n.entries()).reduce((o,p)=>{let[S,y]=p;return y==="on"?[...o,S]:o},[]);if(s.length===1&&s[0]===t)return n}return n.set(t,a?"on":"off"),n},in:(l,t,a)=>{let n=new Map;for(const s of l||[])n=r.select({id:s,value:!0,selected:new Map(n),children:t,parents:a});return n},out:l=>{const t=[];for(const[a,n]of l.entries())n==="on"&&t.push(a);return t}};return r},Q=e=>{const r=B(e);return{select:t=>{let{selected:a,id:n,...s}=t;n=b(n);const o=a.has(n)?new Map([[n,a.get(n)]]):new Map;return r.select({...s,id:n,selected:o})},in:(t,a,n)=>{let s=new Map;return t!=null&&t.length&&(s=r.in(t.slice(0,1),a,n)),s},out:(t,a,n)=>r.out(t,a,n)}},He=e=>{const r=B(e);return{select:t=>{let{id:a,selected:n,children:s,...o}=t;return a=b(a),s.has(a)?n:r.select({id:a,selected:n,children:s,...o})},in:r.in,out:r.out}},Ue=e=>{const r=Q(e);return{select:t=>{let{id:a,selected:n,children:s,...o}=t;return a=b(a),s.has(a)?n:r.select({id:a,selected:n,children:s,...o})},in:r.in,out:r.out}},$e=e=>{const r={select:l=>{let{id:t,value:a,selected:n,children:s,parents:o}=l;t=b(t);const p=new Map(n),S=[t];for(;S.length;){const i=S.shift();n.set(i,a?"on":"off"),s.has(i)&&S.push(...s.get(i))}let y=o.get(t);for(;y;){const i=s.get(y),u=i.every(c=>n.get(c)==="on"),d=i.every(c=>!n.has(c)||n.get(c)==="off");n.set(y,u?"on":d?"off":"indeterminate"),y=o.get(y)}return e&&!a&&Array.from(n.entries()).reduce((u,d)=>{let[c,h]=d;return h==="on"?[...u,c]:u},[]).length===0?p:n},in:(l,t,a)=>{let n=new Map;for(const s of l||[])n=r.select({id:s,value:!0,selected:new Map(n),children:t,parents:a});return n},out:(l,t)=>{const a=[];for(const[n,s]of l.entries())s==="on"&&!t.has(n)&&a.push(n);return a}};return r},A=Symbol.for("vuetify:nested"),J={id:C(),root:{register:()=>null,unregister:()=>null,parents:k(new Map),children:k(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:k(new Set),selected:k(new Map),selectedValues:k([])}},tt=U({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),nt=e=>{let r=!1;const l=k(new Map),t=k(new Map),a=T(e,"opened",e.opened,i=>new Set(i),i=>[...i.values()]),n=f(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return Ue(e.mandatory);case"leaf":return He(e.mandatory);case"independent":return B(e.mandatory);case"single-independent":return Q(e.mandatory);case"classic":default:return $e(e.mandatory)}}),s=f(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return Ke;case"single":return Ee;case"multiple":default:return z}}),o=T(e,"selected",e.selected,i=>n.value.in(i,l.value,t.value),i=>n.value.out(i,l.value,t.value));$(()=>{r=!0});function p(i){const u=[];let d=i;for(;d!=null;)u.unshift(d),d=t.value.get(d);return u}const S=ve("nested"),y={id:C(),root:{opened:a,selected:o,selectedValues:f(()=>{const i=[];for(const[u,d]of o.value.entries())d==="on"&&i.push(u);return i}),register:(i,u,d)=>{u&&i!==u&&t.value.set(i,u),d&&l.value.set(i,[]),u!=null&&l.value.set(u,[...l.value.get(u)||[],i])},unregister:i=>{if(r)return;l.value.delete(i);const u=t.value.get(i);if(u){const d=l.value.get(u)??[];l.value.set(u,d.filter(c=>c!==i))}t.value.delete(i),a.value.delete(i)},open:(i,u,d)=>{S.emit("click:open",{id:i,value:u,path:p(i),event:d});const c=s.value.open({id:i,value:u,opened:new Set(a.value),children:l.value,parents:t.value,event:d});c&&(a.value=c)},openOnSelect:(i,u,d)=>{const c=s.value.select({id:i,value:u,selected:new Map(o.value),opened:new Set(a.value),children:l.value,parents:t.value,event:d});c&&(a.value=c)},select:(i,u,d)=>{S.emit("click:select",{id:i,value:u,path:p(i),event:d});const c=n.value.select({id:i,value:u,selected:new Map(o.value),children:l.value,parents:t.value,event:d});c&&(o.value=c),y.root.openOnSelect(i,u,d)},children:l,parents:t}};return I(A,y),y.root},qe=(e,r)=>{const l=V(A,J),t=Symbol(fe()),a=f(()=>e.value??t),n={...l,id:a,open:(s,o)=>l.root.open(a.value,s,o),openOnSelect:(s,o)=>l.root.openOnSelect(a.value,s,o),isOpen:f(()=>l.root.opened.value.has(a.value)),parent:f(()=>l.root.parents.value.get(a.value)),select:(s,o)=>l.root.select(a.value,s,o),isSelected:f(()=>l.root.selected.value.get(b(a.value))==="on"),isIndeterminate:f(()=>l.root.selected.value.get(a.value)==="indeterminate"),isLeaf:f(()=>!l.root.children.value.get(a.value)),isGroupActivator:l.isGroupActivator};return!l.isGroupActivator&&l.root.register(a.value,l.id.value,r),$(()=>{!l.isGroupActivator&&l.root.unregister(a.value)}),r&&I(A,n),n},at=()=>{const e=V(A,J);I(A,{...e,isGroupActivator:!0})};const ze=q("v-list-item-subtitle"),Qe=q("v-list-item-title"),Je=U({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:_,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:_,ripple:{type:Boolean,default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:j(),onClickOnce:j(),...we(),...Te(),...be(),...Ae(),...Pe(),...Ce(),...Ve(),..._e(),...me(),...Ie({variant:"text"})},"v-list-item"),lt=ye()({name:"VListItem",directives:{Ripple:Me},props:Je(),emits:{click:e=>!0},setup(e,r){let{attrs:l,slots:t,emit:a}=r;const n=Le(e,l),s=f(()=>e.value??n.href.value),{select:o,isSelected:p,isIndeterminate:S,isGroupActivator:y,root:i,parent:u,openOnSelect:d}=qe(s,!1),c=xe(),h=f(()=>{var v;return e.active!==!1&&(e.active||((v=n.isActive)==null?void 0:v.value)||p.value)}),D=f(()=>e.link!==!1&&n.isLink.value),w=f(()=>!e.disabled&&e.link!==!1&&(e.link||n.isClickable.value||e.value!=null&&!!c)),W=f(()=>e.rounded||e.nav),X=f(()=>e.color??e.activeColor),Y=f(()=>({color:h.value?X.value??e.baseColor:e.baseColor,variant:e.variant}));ge(()=>{var v;return(v=n.isActive)==null?void 0:v.value},v=>{v&&u.value!=null&&i.open(u.value,!0),v&&d(v)},{immediate:!0});const{themeClasses:Z}=pe(e),{borderClasses:ee}=Oe(e),{colorClasses:te,colorStyles:ne,variantClasses:ae}=Be(Y),{densityClasses:le}=De(e),{dimensionStyles:se}=Ne(e),{elevationClasses:ie}=Re(e),{roundedClasses:re}=Fe(W),ue=f(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),M=f(()=>({isActive:h.value,select:o,isSelected:p.value,isIndeterminate:S.value}));function N(v){var P;a("click",v),!(y||!w.value)&&((P=n.navigate)==null||P.call(n,v),e.value!=null&&o(!p.value,v))}function oe(v){(v.key==="Enter"||v.key===" ")&&(v.preventDefault(),N(v))}return je(()=>{const v=D.value?"a":e.tag,P=t.title||e.title,ce=t.subtitle||e.subtitle,R=!!(e.appendAvatar||e.appendIcon),de=!!(R||t.append),F=!!(e.prependAvatar||e.prependIcon),L=!!(F||t.prepend);return c==null||c.updateHasPrepend(L),e.activeColor&&Se("active-color",["color","base-color"]),he(m(v,{class:["v-list-item",{"v-list-item--active":h.value,"v-list-item--disabled":e.disabled,"v-list-item--link":w.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!L&&(c==null?void 0:c.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&h.value},Z.value,ee.value,te.value,le.value,ie.value,ue.value,re.value,ae.value,e.class],style:[ne.value,se.value,e.style],href:n.href.value,tabindex:w.value?c?-2:0:void 0,onClick:N,onKeydown:w.value&&!D.value&&oe},{default:()=>{var G;return[Ge(w.value||h.value,"v-list-item"),L&&m("div",{key:"prepend",class:"v-list-item__prepend"},[t.prepend?m(H,{key:"prepend-defaults",disabled:!F,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var g;return[(g=t.prepend)==null?void 0:g.call(t,M.value)]}}):m(x,null,[e.prependAvatar&&m(E,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&m(K,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),m("div",{class:"v-list-item__content","data-no-activator":""},[P&&m(Qe,{key:"title"},{default:()=>{var g;return[((g=t.title)==null?void 0:g.call(t,{title:e.title}))??e.title]}}),ce&&m(ze,{key:"subtitle"},{default:()=>{var g;return[((g=t.subtitle)==null?void 0:g.call(t,{subtitle:e.subtitle}))??e.subtitle]}}),(G=t.default)==null?void 0:G.call(t,M.value)]),de&&m("div",{key:"append",class:"v-list-item__append"},[t.append?m(H,{key:"append-defaults",disabled:!R,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var g;return[(g=t.append)==null?void 0:g.call(t,M.value)]}}):m(x,null,[e.appendIcon&&m(K,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&m(E,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])]}}),[[ke("ripple"),w.value&&e.ripple]])}),{}}});export{lt as V,Qe as a,ze as b,qe as c,xe as d,et as e,nt as f,tt as m,at as u};
