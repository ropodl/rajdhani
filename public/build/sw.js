if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),t={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>t[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-7369c0e1"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/_plugin-vue_export-helper-c27b6911.js",revision:null},{url:"assets/app-35ae6769.js",revision:null},{url:"assets/app-b52301dc.css",revision:null},{url:"assets/bottombar-f3e1bc31.js",revision:null},{url:"assets/category_news-387e0407.js",revision:null},{url:"assets/contactus-13bfb6d6.css",revision:null},{url:"assets/contactus-dd7aa735.js",revision:null},{url:"assets/delay-4c1da604.js",revision:null},{url:"assets/easing-9f15041e.js",revision:null},{url:"assets/facebook-b24e850b.js",revision:null},{url:"assets/frontend-36e47209.css",revision:null},{url:"assets/gotop-4f69b234.js",revision:null},{url:"assets/group-5663156b.js",revision:null},{url:"assets/ImageWithCard-e9c6f06d.js",revision:null},{url:"assets/index-7a008771.js",revision:null},{url:"assets/index-ed979640.js",revision:null},{url:"assets/index-ffb955cf.js",revision:null},{url:"assets/instagram-55796002.js",revision:null},{url:"assets/latestNews-c3ce6199.js",revision:null},{url:"assets/lazy-32bf228f.js",revision:null},{url:"assets/linkedin-27c86d28.js",revision:null},{url:"assets/mainnews-f6d09c71.js",revision:null},{url:"assets/mdi-74b5fd1c.js",revision:null},{url:"assets/midbar-c4d2b224.js",revision:null},{url:"assets/navbar-1ea395e4.css",revision:null},{url:"assets/navbar-42ada50b.js",revision:null},{url:"assets/news_detail-2bac3753.css",revision:null},{url:"assets/news_detail-ea09a3a8.js",revision:null},{url:"assets/OverlayFullWidth-adad9868.js",revision:null},{url:"assets/photofeature-10bccf64.js",revision:null},{url:"assets/provincenews-3c45888c.js",revision:null},{url:"assets/provincenews-78595136.css",revision:null},{url:"assets/relatednews-33703858.js",revision:null},{url:"assets/router-a0b0101b.js",revision:null},{url:"assets/router-b2aaa870.css",revision:null},{url:"assets/search-500ebef6.js",revision:null},{url:"assets/sectionTitle-645883f8.css",revision:null},{url:"assets/sectionTitle-b5445583.js",revision:null},{url:"assets/tabnews-4e04fb27.js",revision:null},{url:"assets/ThreeCol-4397225e.js",revision:null},{url:"assets/twitter-0c339bb5.js",revision:null},{url:"assets/TwoFive-29e90e9c.js",revision:null},{url:"assets/TwoFour-e9072363.js",revision:null},{url:"assets/VAppBar-05efd720.css",revision:null},{url:"assets/VAppBar-c616e20b.js",revision:null},{url:"assets/VAvatar-466c8a17.js",revision:null},{url:"assets/VAvatar-ab88a885.css",revision:null},{url:"assets/VBtn-000031ed.js",revision:null},{url:"assets/VBtn-6e2dfe86.css",revision:null},{url:"assets/VCard-93e28825.js",revision:null},{url:"assets/VCard-f7bfd9e0.css",revision:null},{url:"assets/VCol-dc1c1d67.js",revision:null},{url:"assets/VHover-71a532bf.js",revision:null},{url:"assets/videofeature-5a49ca41.js",revision:null},{url:"assets/VList-1ed81160.js",revision:null},{url:"assets/VList-5ec505d6.css",revision:null},{url:"assets/VListItem-9cf1e2ed.js",revision:null},{url:"assets/VListItem-ffbe5b16.css",revision:null},{url:"assets/VOverlay-2c01b8e6.css",revision:null},{url:"assets/VOverlay-6a68c333.js",revision:null},{url:"assets/VPagination-7a85ea5e.js",revision:null},{url:"assets/VPagination-c6d9cd9e.css",revision:null},{url:"assets/VRow-19c5f496.js",revision:null},{url:"assets/VRow-84e8b235.css",revision:null},{url:"assets/VSpacer-11ac72da.js",revision:null},{url:"assets/VTextField-9fb966fb.js",revision:null},{url:"assets/VTextField-fa883102.css",revision:null},{url:"assets/VWindowItem-115d4786.js",revision:null},{url:"assets/VWindowItem-833b2766.css",revision:null},{url:"assets/youtube-a6dd4f6d.js",revision:null},{url:"registerSW.js",revision:"2d094791c49e920331981a2d203b8cdb"},{url:"manifest.webmanifest",revision:"9b616e3651df927f45ba9a26b0f1ace5"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
