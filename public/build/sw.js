if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,n)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let a={};const u=s=>l(s,i),t={module:{uri:i},exports:a,require:u};e[i]=Promise.all(r.map((s=>t[s]||u(s)))).then((s=>(n(...s),a)))}}define(["./workbox-7369c0e1"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/_plugin-vue_export-helper-c27b6911.js",revision:null},{url:"assets/app-095aae9f.js",revision:null},{url:"assets/app-93128a73.css",revision:null},{url:"assets/bottombar-168e02ed.js",revision:null},{url:"assets/bottombar-65559449.css",revision:null},{url:"assets/category_news-c913d8b0.js",revision:null},{url:"assets/color-d9858412.js",revision:null},{url:"assets/contactus-08ea79c4.js",revision:null},{url:"assets/contactus-13bfb6d6.css",revision:null},{url:"assets/createSimpleFunctional-973a8547.js",revision:null},{url:"assets/easing-9f15041e.js",revision:null},{url:"assets/frontend-36e47209.css",revision:null},{url:"assets/gotop-77e60f43.js",revision:null},{url:"assets/index-7a82d950.js",revision:null},{url:"assets/index-b9b38956.js",revision:null},{url:"assets/latestNews-88caad5e.js",revision:null},{url:"assets/lazy-aea992e5.js",revision:null},{url:"assets/mainnews-18e1e0ec.js",revision:null},{url:"assets/mdi-c22018c1.js",revision:null},{url:"assets/midbar-09ca21c6.js",revision:null},{url:"assets/moment-fbc5633a.js",revision:null},{url:"assets/navbar-5dffeba4.css",revision:null},{url:"assets/navbar-6bccb863.js",revision:null},{url:"assets/news_detail-2bac3753.css",revision:null},{url:"assets/news_detail-da27b1af.js",revision:null},{url:"assets/OverlayFullWidth-063a69e4.js",revision:null},{url:"assets/photofeature-77618f7a.js",revision:null},{url:"assets/provincenews-2a3d0ca9.css",revision:null},{url:"assets/provincenews-f22e0de2.js",revision:null},{url:"assets/relatednews-cdb6f23a.js",revision:null},{url:"assets/search-29a8d18f.js",revision:null},{url:"assets/tabnews-edf5c75f.js",revision:null},{url:"assets/ThreeCol-70d81c91.js",revision:null},{url:"assets/topbar-1f1968f9.js",revision:null},{url:"assets/topbar-71d41e37.css",revision:null},{url:"assets/TwoFive-df942fa3.js",revision:null},{url:"assets/TwoFour-60aed22b.js",revision:null},{url:"assets/VAppBar-05efd720.css",revision:null},{url:"assets/VAppBar-429cce8d.js",revision:null},{url:"assets/VAvatar-aa1c92c4.js",revision:null},{url:"assets/VAvatar-ab88a885.css",revision:null},{url:"assets/VBtn-747fb7db.css",revision:null},{url:"assets/VBtn-7dfeaa25.js",revision:null},{url:"assets/VCard-6faabb7a.js",revision:null},{url:"assets/VCard-f7bfd9e0.css",revision:null},{url:"assets/VCol-6ed4b073.js",revision:null},{url:"assets/VForm-5bdec157.js",revision:null},{url:"assets/VForm-fa883102.css",revision:null},{url:"assets/VHover-a96dae7c.js",revision:null},{url:"assets/videofeature-bbcd3bf7.css",revision:null},{url:"assets/videofeature-ed955fe9.js",revision:null},{url:"assets/VImg-3a095760.css",revision:null},{url:"assets/VImg-c236d6a8.js",revision:null},{url:"assets/VList-1736c72f.js",revision:null},{url:"assets/VList-5ec505d6.css",revision:null},{url:"assets/VListItem-94dffec4.js",revision:null},{url:"assets/VListItem-ffbe5b16.css",revision:null},{url:"assets/VOverlay-2c01b8e6.css",revision:null},{url:"assets/VOverlay-8ff930ef.js",revision:null},{url:"assets/VPagination-c479f780.js",revision:null},{url:"assets/VPagination-c6d9cd9e.css",revision:null},{url:"assets/VRow-37f80755.css",revision:null},{url:"assets/VRow-ed33b221.js",revision:null},{url:"assets/VSpacer-acf8da13.js",revision:null},{url:"assets/VTabs-303294de.css",revision:null},{url:"assets/VTabs-643a7098.js",revision:null},{url:"assets/webfontloader-523643f5.js",revision:null},{url:"registerSW.js",revision:"2d094791c49e920331981a2d203b8cdb"},{url:"manifest.webmanifest",revision:"9b616e3651df927f45ba9a26b0f1ace5"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
