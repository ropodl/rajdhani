if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),t={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>t[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-7369c0e1"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/_plugin-vue_export-helper-c27b6911.js",revision:null},{url:"assets/app-4be4af65.js",revision:null},{url:"assets/app-b52301dc.css",revision:null},{url:"assets/bottombar-65698e9d.js",revision:null},{url:"assets/category_news-21dccfd0.js",revision:null},{url:"assets/contactus-13bfb6d6.css",revision:null},{url:"assets/contactus-737aca8b.js",revision:null},{url:"assets/delay-8dfe09b6.js",revision:null},{url:"assets/easing-9f15041e.js",revision:null},{url:"assets/facebook-1fcea9b4.js",revision:null},{url:"assets/frontend-36e47209.css",revision:null},{url:"assets/gotop-36896af0.js",revision:null},{url:"assets/group-39553a12.js",revision:null},{url:"assets/ImageWithCard-e52797d6.js",revision:null},{url:"assets/index-5da5a89b.js",revision:null},{url:"assets/index-eaaaf69c.js",revision:null},{url:"assets/index-fef12003.js",revision:null},{url:"assets/instagram-504341cd.js",revision:null},{url:"assets/latestNews-e6ce89e0.js",revision:null},{url:"assets/lazy-f29cee79.js",revision:null},{url:"assets/linkedin-8795d80c.js",revision:null},{url:"assets/mainnews-46a5b084.js",revision:null},{url:"assets/mdi-74b5fd1c.js",revision:null},{url:"assets/midbar-60607a4e.js",revision:null},{url:"assets/navbar-1ea395e4.css",revision:null},{url:"assets/navbar-e0774880.js",revision:null},{url:"assets/news_detail-2a6c96db.js",revision:null},{url:"assets/news_detail-2bac3753.css",revision:null},{url:"assets/OverlayFullWidth-f26daa33.js",revision:null},{url:"assets/photofeature-165be438.js",revision:null},{url:"assets/provincenews-441cda41.js",revision:null},{url:"assets/provincenews-78595136.css",revision:null},{url:"assets/relatednews-937e008d.js",revision:null},{url:"assets/router-2baa696e.js",revision:null},{url:"assets/router-b2aaa870.css",revision:null},{url:"assets/search-a3f591c2.js",revision:null},{url:"assets/sectionTitle-3dd18189.js",revision:null},{url:"assets/sectionTitle-645883f8.css",revision:null},{url:"assets/tabnews-d5bf6c7a.js",revision:null},{url:"assets/ThreeCol-6fd8864b.js",revision:null},{url:"assets/twitter-7c6426da.js",revision:null},{url:"assets/TwoFive-50157719.js",revision:null},{url:"assets/TwoFour-e6df5e9c.js",revision:null},{url:"assets/VAppBar-05efd720.css",revision:null},{url:"assets/VAppBar-898088dc.js",revision:null},{url:"assets/VAvatar-33cd5835.js",revision:null},{url:"assets/VAvatar-ab88a885.css",revision:null},{url:"assets/VBtn-6e2dfe86.css",revision:null},{url:"assets/VBtn-893fed5a.js",revision:null},{url:"assets/VCard-7de40b68.js",revision:null},{url:"assets/VCard-f7bfd9e0.css",revision:null},{url:"assets/VCol-3601ebb5.js",revision:null},{url:"assets/VHover-873750fa.js",revision:null},{url:"assets/videofeature-aa451f73.js",revision:null},{url:"assets/VList-5ec505d6.css",revision:null},{url:"assets/VList-bb9ff5a5.js",revision:null},{url:"assets/VListItem-73473fbd.js",revision:null},{url:"assets/VListItem-ffbe5b16.css",revision:null},{url:"assets/VOverlay-2a18cf8f.js",revision:null},{url:"assets/VOverlay-2c01b8e6.css",revision:null},{url:"assets/VPagination-171bba95.js",revision:null},{url:"assets/VPagination-c6d9cd9e.css",revision:null},{url:"assets/VRow-7ac2abe6.js",revision:null},{url:"assets/VRow-84e8b235.css",revision:null},{url:"assets/VSpacer-0d8d0ba2.js",revision:null},{url:"assets/VTextField-968518c4.js",revision:null},{url:"assets/VTextField-fa883102.css",revision:null},{url:"assets/VWindowItem-833b2766.css",revision:null},{url:"assets/VWindowItem-90464561.js",revision:null},{url:"assets/youtube-ecbdfd5f.js",revision:null},{url:"registerSW.js",revision:"2d094791c49e920331981a2d203b8cdb"},{url:"manifest.webmanifest",revision:"9b616e3651df927f45ba9a26b0f1ace5"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
