if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,n)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let u={};const a=s=>l(s,i),t={module:{uri:i},exports:u,require:a};e[i]=Promise.all(r.map((s=>t[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-7369c0e1"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/_plugin-vue_export-helper-c27b6911.js",revision:null},{url:"assets/app-1266d197.js",revision:null},{url:"assets/app-93128a73.css",revision:null},{url:"assets/bottombar-e200178d.js",revision:null},{url:"assets/category_news-510e842d.js",revision:null},{url:"assets/contactus-05a94e51.js",revision:null},{url:"assets/contactus-13bfb6d6.css",revision:null},{url:"assets/delay-e3eeeba7.js",revision:null},{url:"assets/easing-9f15041e.js",revision:null},{url:"assets/facebook-60c94a4e.js",revision:null},{url:"assets/frontend-66fcaa7d.css",revision:null},{url:"assets/gotop-a33b1277.js",revision:null},{url:"assets/index-129d595d.js",revision:null},{url:"assets/index-78667fac.js",revision:null},{url:"assets/instagram-0b29e851.js",revision:null},{url:"assets/latestNews-1c80854d.js",revision:null},{url:"assets/lazy-3b008684.js",revision:null},{url:"assets/linkedin-8b480964.js",revision:null},{url:"assets/mainnews-f18f121e.js",revision:null},{url:"assets/mdi-74b5fd1c.js",revision:null},{url:"assets/midbar-e42f9e9e.js",revision:null},{url:"assets/navbar-58d13e93.css",revision:null},{url:"assets/navbar-e460844f.js",revision:null},{url:"assets/news_detail-2bac3753.css",revision:null},{url:"assets/news_detail-2c3e80af.js",revision:null},{url:"assets/OverlayFullWidth-50f3069c.js",revision:null},{url:"assets/photofeature-6e0f4aa9.js",revision:null},{url:"assets/provincenews-78595136.css",revision:null},{url:"assets/provincenews-81982313.js",revision:null},{url:"assets/relatednews-379c98a2.js",revision:null},{url:"assets/search-bcf28f35.js",revision:null},{url:"assets/tabnews-9816d2b3.js",revision:null},{url:"assets/ThreeCol-fbc0aa97.js",revision:null},{url:"assets/twitter-15d2f8df.js",revision:null},{url:"assets/TwoFive-470f3c0f.js",revision:null},{url:"assets/TwoFour-4ee5c6f0.js",revision:null},{url:"assets/VAppBar-05efd720.css",revision:null},{url:"assets/VAppBar-311eaad8.js",revision:null},{url:"assets/VAvatar-612e4021.js",revision:null},{url:"assets/VAvatar-ab88a885.css",revision:null},{url:"assets/VBtn-747fb7db.css",revision:null},{url:"assets/VBtn-b4303e9f.js",revision:null},{url:"assets/VCard-56d4ebb1.js",revision:null},{url:"assets/VCard-f7bfd9e0.css",revision:null},{url:"assets/VCol-da38d32b.js",revision:null},{url:"assets/VForm-05bca555.js",revision:null},{url:"assets/VForm-fa883102.css",revision:null},{url:"assets/VHover-9bebe182.js",revision:null},{url:"assets/videofeature-8e6990a9.js",revision:null},{url:"assets/VList-5ec505d6.css",revision:null},{url:"assets/VList-ba24c772.js",revision:null},{url:"assets/VListItem-9386f661.js",revision:null},{url:"assets/VListItem-ffbe5b16.css",revision:null},{url:"assets/VOverlay-2c01b8e6.css",revision:null},{url:"assets/VOverlay-a1496c9a.js",revision:null},{url:"assets/VPagination-bd85b451.js",revision:null},{url:"assets/VPagination-c6d9cd9e.css",revision:null},{url:"assets/VRow-84e8b235.css",revision:null},{url:"assets/VRow-a1b0eb90.js",revision:null},{url:"assets/VSpacer-32bd565e.js",revision:null},{url:"assets/VTabs-17dcc60a.js",revision:null},{url:"assets/VTabs-303294de.css",revision:null},{url:"assets/youtube-ca6a2438.js",revision:null},{url:"registerSW.js",revision:"2d094791c49e920331981a2d203b8cdb"},{url:"manifest.webmanifest",revision:"9b616e3651df927f45ba9a26b0f1ace5"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
