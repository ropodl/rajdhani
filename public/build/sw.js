if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,r)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let u={};const t=s=>l(s,i),a={module:{uri:i},exports:u,require:t};e[i]=Promise.all(n.map((s=>a[s]||t(s)))).then((s=>(r(...s),u)))}}define(["./workbox-7369c0e1"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/_plugin-vue_export-helper-c27b6911.js",revision:null},{url:"assets/app-51bffb8a.js",revision:null},{url:"assets/app-cea5618b.css",revision:null},{url:"assets/bottombar-62a0ec6d.js",revision:null},{url:"assets/category_news-54f17cc3.js",revision:null},{url:"assets/contactus-5a4ce972.js",revision:null},{url:"assets/facebook-bc11b097.js",revision:null},{url:"assets/frontend-66fcaa7d.css",revision:null},{url:"assets/gotop-a60ba2c7.js",revision:null},{url:"assets/index-569a2e08.js",revision:null},{url:"assets/instagram-3b7d05d4.js",revision:null},{url:"assets/latestNews-34f3d052.js",revision:null},{url:"assets/linkedin-f95ec6c6.js",revision:null},{url:"assets/mainnews-20c69c9a.js",revision:null},{url:"assets/mdi-74b5fd1c.js",revision:null},{url:"assets/midbar-c6d0f78e.js",revision:null},{url:"assets/navbar-73cb5036.js",revision:null},{url:"assets/navbar-7aedcb38.css",revision:null},{url:"assets/news_detail-2bac3753.css",revision:null},{url:"assets/news_detail-5c5ce0f0.js",revision:null},{url:"assets/OverlayFullWidth-8d10ef0e.js",revision:null},{url:"assets/photofeature-e5859949.js",revision:null},{url:"assets/provincenews-8624fdd7.js",revision:null},{url:"assets/relatednews-4bef7e3a.js",revision:null},{url:"assets/search-9cdc6647.js",revision:null},{url:"assets/tabnews-c4dd841d.js",revision:null},{url:"assets/ThreeCol-715119b9.js",revision:null},{url:"assets/topbar-514f5dbe.js",revision:null},{url:"assets/twitter-653465ab.js",revision:null},{url:"assets/TwoFive-7773fdf0.js",revision:null},{url:"assets/TwoFour-90f1b73e.js",revision:null},{url:"assets/videofeature-19fa2b5c.js",revision:null},{url:"assets/webfontloader-523643f5.js",revision:null},{url:"assets/youtube-c7e2efb5.js",revision:null},{url:"registerSW.js",revision:"2d094791c49e920331981a2d203b8cdb"},{url:"manifest.webmanifest",revision:"9b616e3651df927f45ba9a26b0f1ace5"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
