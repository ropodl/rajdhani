if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>l(s,n),t={module:{uri:n},exports:u,require:a};e[n]=Promise.all(i.map((s=>t[s]||a(s)))).then((s=>(r(...s),u)))}}define(["./workbox-7369c0e1"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/_plugin-vue_export-helper-c27b6911.js",revision:null},{url:"assets/app-4c2369ed.js",revision:null},{url:"assets/app-b52301dc.css",revision:null},{url:"assets/bottombar-21f0fcda.js",revision:null},{url:"assets/category_news-9855041d.js",revision:null},{url:"assets/contactus-13bfb6d6.css",revision:null},{url:"assets/contactus-32aa8b7f.js",revision:null},{url:"assets/delay-e9da7e67.js",revision:null},{url:"assets/easing-9f15041e.js",revision:null},{url:"assets/facebook-5f07e856.js",revision:null},{url:"assets/frontend-36e47209.css",revision:null},{url:"assets/gotop-0caf837a.js",revision:null},{url:"assets/group-070fa313.js",revision:null},{url:"assets/ImageWithCard-dd92b9fd.js",revision:null},{url:"assets/index-2f18f040.js",revision:null},{url:"assets/index-6f693dbf.js",revision:null},{url:"assets/instagram-8f583eed.js",revision:null},{url:"assets/latestNews-d3ffbb4f.js",revision:null},{url:"assets/lazy-8174f625.js",revision:null},{url:"assets/linkedin-4da1e09c.js",revision:null},{url:"assets/mainnews-a53b6711.js",revision:null},{url:"assets/mdi-74b5fd1c.js",revision:null},{url:"assets/midbar-761b470b.js",revision:null},{url:"assets/navbar-22f5a0f0.css",revision:null},{url:"assets/navbar-bcc9c4b1.js",revision:null},{url:"assets/news_detail-16b2a822.js",revision:null},{url:"assets/news_detail-2bac3753.css",revision:null},{url:"assets/OverlayFullWidth-33ffc598.js",revision:null},{url:"assets/photofeature-4828e5fb.js",revision:null},{url:"assets/provincenews-3dcd3c51.js",revision:null},{url:"assets/provincenews-78595136.css",revision:null},{url:"assets/relatednews-dac85d75.js",revision:null},{url:"assets/router-54636916.js",revision:null},{url:"assets/router-b2aaa870.css",revision:null},{url:"assets/search-2ce5486f.js",revision:null},{url:"assets/sectionTitle-5ac71fe2.js",revision:null},{url:"assets/sectionTitle-645883f8.css",revision:null},{url:"assets/tabnews-d6026516.js",revision:null},{url:"assets/ThreeCol-1cbe6990.js",revision:null},{url:"assets/twitter-10e9df76.js",revision:null},{url:"assets/TwoFive-c8188acd.js",revision:null},{url:"assets/TwoFour-1a2633c5.js",revision:null},{url:"assets/VAppBar-05efd720.css",revision:null},{url:"assets/VAppBar-640e8a1a.js",revision:null},{url:"assets/VAvatar-ab88a885.css",revision:null},{url:"assets/VAvatar-b02efdd3.js",revision:null},{url:"assets/VBtn-13233bb1.js",revision:null},{url:"assets/VBtn-6e2dfe86.css",revision:null},{url:"assets/VCard-6badff50.js",revision:null},{url:"assets/VCard-f7bfd9e0.css",revision:null},{url:"assets/VCol-7d2e2169.js",revision:null},{url:"assets/VHover-d9090b92.js",revision:null},{url:"assets/videofeature-7c8c9cff.js",revision:null},{url:"assets/VList-526b0f8d.js",revision:null},{url:"assets/VList-5ec505d6.css",revision:null},{url:"assets/VListItem-e8d3cb07.js",revision:null},{url:"assets/VListItem-ffbe5b16.css",revision:null},{url:"assets/VOverlay-2c01b8e6.css",revision:null},{url:"assets/VOverlay-4106dd3b.js",revision:null},{url:"assets/VPagination-c6d9cd9e.css",revision:null},{url:"assets/VPagination-d171cc64.js",revision:null},{url:"assets/VRow-55076b1f.js",revision:null},{url:"assets/VRow-84e8b235.css",revision:null},{url:"assets/VSpacer-676e1b86.js",revision:null},{url:"assets/VTextField-bf0205d5.js",revision:null},{url:"assets/VTextField-fa883102.css",revision:null},{url:"assets/VWindowItem-833b2766.css",revision:null},{url:"assets/VWindowItem-e1183703.js",revision:null},{url:"assets/youtube-8d53aa18.js",revision:null},{url:"registerSW.js",revision:"2d094791c49e920331981a2d203b8cdb"},{url:"manifest.webmanifest",revision:"9b616e3651df927f45ba9a26b0f1ace5"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
