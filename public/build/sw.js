if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>l(s,n),t={module:{uri:n},exports:u,require:a};e[n]=Promise.all(i.map((s=>t[s]||a(s)))).then((s=>(r(...s),u)))}}define(["./workbox-7369c0e1"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/_plugin-vue_export-helper-c27b6911.js",revision:null},{url:"assets/app-b3b20747.js",revision:null},{url:"assets/app-b52301dc.css",revision:null},{url:"assets/bottombar-517c6bad.js",revision:null},{url:"assets/category_news-d91e0afb.js",revision:null},{url:"assets/contactus-13bfb6d6.css",revision:null},{url:"assets/contactus-20a7d098.js",revision:null},{url:"assets/delay-3a82e09c.js",revision:null},{url:"assets/easing-9f15041e.js",revision:null},{url:"assets/facebook-6269c3c0.js",revision:null},{url:"assets/frontend-36e47209.css",revision:null},{url:"assets/gotop-566f236d.js",revision:null},{url:"assets/group-697f3b2e.js",revision:null},{url:"assets/ImageWithCard-6699d8c2.js",revision:null},{url:"assets/index-1e1d6adf.js",revision:null},{url:"assets/index-3bd5f2c5.js",revision:null},{url:"assets/instagram-ecc19cbf.js",revision:null},{url:"assets/latestNews-58f2b2e1.js",revision:null},{url:"assets/lazy-d848605a.js",revision:null},{url:"assets/linkedin-2a0218fc.js",revision:null},{url:"assets/mainnews-009907e2.js",revision:null},{url:"assets/mdi-74b5fd1c.js",revision:null},{url:"assets/midbar-079194e6.js",revision:null},{url:"assets/navbar-22f5a0f0.css",revision:null},{url:"assets/navbar-3bc7169d.js",revision:null},{url:"assets/news_detail-2bac3753.css",revision:null},{url:"assets/news_detail-a55fd16a.js",revision:null},{url:"assets/OverlayFullWidth-ebf5ac68.js",revision:null},{url:"assets/photofeature-f34a05da.js",revision:null},{url:"assets/provincenews-04ac4b7b.js",revision:null},{url:"assets/provincenews-78595136.css",revision:null},{url:"assets/relatednews-b4d18781.js",revision:null},{url:"assets/router-b2aaa870.css",revision:null},{url:"assets/router-de9ccd6a.js",revision:null},{url:"assets/search-c3e7b5eb.js",revision:null},{url:"assets/sectionTitle-2790a3bc.js",revision:null},{url:"assets/sectionTitle-645883f8.css",revision:null},{url:"assets/tabnews-042b7a59.js",revision:null},{url:"assets/ThreeCol-dc988ef9.js",revision:null},{url:"assets/twitter-2e816fda.js",revision:null},{url:"assets/TwoFive-76506f11.js",revision:null},{url:"assets/TwoFour-fe509f78.js",revision:null},{url:"assets/VAppBar-05efd720.css",revision:null},{url:"assets/VAppBar-de8872e6.js",revision:null},{url:"assets/VAvatar-ab88a885.css",revision:null},{url:"assets/VAvatar-e1819bba.js",revision:null},{url:"assets/VBtn-5e792cc5.js",revision:null},{url:"assets/VBtn-6e2dfe86.css",revision:null},{url:"assets/VCard-d7a5a8ec.js",revision:null},{url:"assets/VCard-f7bfd9e0.css",revision:null},{url:"assets/VCol-e12ade60.js",revision:null},{url:"assets/VHover-09c12a5b.js",revision:null},{url:"assets/videofeature-5a8d84a9.js",revision:null},{url:"assets/VList-5ec505d6.css",revision:null},{url:"assets/VList-6f541f07.js",revision:null},{url:"assets/VListItem-962ef55b.js",revision:null},{url:"assets/VListItem-ffbe5b16.css",revision:null},{url:"assets/VOverlay-2c01b8e6.css",revision:null},{url:"assets/VOverlay-f41890a9.js",revision:null},{url:"assets/VPagination-c6d9cd9e.css",revision:null},{url:"assets/VPagination-e9bda2dd.js",revision:null},{url:"assets/VRow-2d7f86cc.js",revision:null},{url:"assets/VRow-84e8b235.css",revision:null},{url:"assets/VSpacer-dd7a9779.js",revision:null},{url:"assets/VTextField-b1d99470.js",revision:null},{url:"assets/VTextField-fa883102.css",revision:null},{url:"assets/VWindowItem-833b2766.css",revision:null},{url:"assets/VWindowItem-d99d35f6.js",revision:null},{url:"assets/youtube-17e3aa0f.js",revision:null},{url:"registerSW.js",revision:"2d094791c49e920331981a2d203b8cdb"},{url:"manifest.webmanifest",revision:"9b616e3651df927f45ba9a26b0f1ace5"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
