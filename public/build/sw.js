if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>l(s,n),t={module:{uri:n},exports:u,require:a};e[n]=Promise.all(i.map((s=>t[s]||a(s)))).then((s=>(r(...s),u)))}}define(["./workbox-7369c0e1"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/_plugin-vue_export-helper-c27b6911.js",revision:null},{url:"assets/app-2e09cd31.js",revision:null},{url:"assets/app-7d36dfd4.css",revision:null},{url:"assets/app-934bc65f.css",revision:null},{url:"assets/app-f1f67aae.js",revision:null},{url:"assets/bottombar-5f524651.js",revision:null},{url:"assets/category_news-a7252561.js",revision:null},{url:"assets/contactus-13bfb6d6.css",revision:null},{url:"assets/contactus-9c5476f1.js",revision:null},{url:"assets/delay-16c8d67e.js",revision:null},{url:"assets/dialog-transition-88d38ee5.js",revision:null},{url:"assets/easing-9f15041e.js",revision:null},{url:"assets/facebook-505fa978.js",revision:null},{url:"assets/forwardRefs-a29b5f65.js",revision:null},{url:"assets/frontend-36e47209.css",revision:null},{url:"assets/gotop-8c4e9610.js",revision:null},{url:"assets/group-4cff85d6.js",revision:null},{url:"assets/ImageWithCard-c377e16e.js",revision:null},{url:"assets/index-69873ae0.js",revision:null},{url:"assets/index-c97bf6c3.js",revision:null},{url:"assets/index-cbd03334.js",revision:null},{url:"assets/instagram-6abf020b.js",revision:null},{url:"assets/latestNews-c7ea56d9.js",revision:null},{url:"assets/layout-06b7726c.js",revision:null},{url:"assets/lazy-da828d0f.js",revision:null},{url:"assets/linkedin-6ace12dd.js",revision:null},{url:"assets/mainnews-3b41b9c5.js",revision:null},{url:"assets/mdi-82b6613c.js",revision:null},{url:"assets/midbar-5f236d0c.js",revision:null},{url:"assets/navbar-23492b68.js",revision:null},{url:"assets/navbar-7e4bb46a.css",revision:null},{url:"assets/news_detail-2bac3753.css",revision:null},{url:"assets/news_detail-dd112b1c.js",revision:null},{url:"assets/OverlayFullWidth-26c90fa0.js",revision:null},{url:"assets/photofeature-45e48a71.js",revision:null},{url:"assets/popupad-e99fec0f.js",revision:null},{url:"assets/provincenews-51d068d1.js",revision:null},{url:"assets/relatednews-534d73f5.js",revision:null},{url:"assets/resizeObserver-933f6ba9.js",revision:null},{url:"assets/router-b0eaa7f3.js",revision:null},{url:"assets/router-b2aaa870.css",revision:null},{url:"assets/search-040ed391.js",revision:null},{url:"assets/searchdialog-9c7cb4d4.js",revision:null},{url:"assets/sectionTitle-007a371f.js",revision:null},{url:"assets/sectionTitle-645883f8.css",revision:null},{url:"assets/socialside-aabdf3d8.js",revision:null},{url:"assets/ssrBoot-02eda8b4.js",revision:null},{url:"assets/tag-3a2ec72b.js",revision:null},{url:"assets/ThreeCol-b06e7639.js",revision:null},{url:"assets/trending-3ee8d802.js",revision:null},{url:"assets/twitter-ae52862c.js",revision:null},{url:"assets/TwoFive-b9518cab.js",revision:null},{url:"assets/TwoFour-3871358c.js",revision:null},{url:"assets/VAppBar-05efd720.css",revision:null},{url:"assets/VAppBar-c9a3dbe7.js",revision:null},{url:"assets/VAvatar-ab88a885.css",revision:null},{url:"assets/VAvatar-c73f6692.js",revision:null},{url:"assets/VBtn-6e2dfe86.css",revision:null},{url:"assets/VBtn-b9f6e9af.js",revision:null},{url:"assets/VCard-2115e696.js",revision:null},{url:"assets/VCard-f7bfd9e0.css",revision:null},{url:"assets/VChip-4fb3ed84.css",revision:null},{url:"assets/VChip-65edc148.js",revision:null},{url:"assets/VCol-0c621d72.js",revision:null},{url:"assets/VDialog-2dcf3722.css",revision:null},{url:"assets/VDialog-5ecaefeb.js",revision:null},{url:"assets/VHover-9cf9094d.js",revision:null},{url:"assets/videofeature-833b2766.css",revision:null},{url:"assets/videofeature-f043db71.js",revision:null},{url:"assets/VImg-39c17b8a.js",revision:null},{url:"assets/VImg-3a2497a7.css",revision:null},{url:"assets/VList-45851222.js",revision:null},{url:"assets/VList-5ec505d6.css",revision:null},{url:"assets/VListItem-9eba9134.js",revision:null},{url:"assets/VListItem-ffbe5b16.css",revision:null},{url:"assets/VOverlay-0631be35.js",revision:null},{url:"assets/VOverlay-2c01b8e6.css",revision:null},{url:"assets/VPagination-5e68df6b.js",revision:null},{url:"assets/VPagination-c6d9cd9e.css",revision:null},{url:"assets/VRow-37f80755.css",revision:null},{url:"assets/VRow-7897a9dd.js",revision:null},{url:"assets/VSpacer-090ed7b4.js",revision:null},{url:"assets/VTextField-3e1246d4.js",revision:null},{url:"assets/VTextField-e8fb5dcd.css",revision:null},{url:"assets/youtube-bf0adeea.js",revision:null},{url:"registerSW.js",revision:"2d094791c49e920331981a2d203b8cdb"},{url:"manifest.webmanifest",revision:"9b616e3651df927f45ba9a26b0f1ace5"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
