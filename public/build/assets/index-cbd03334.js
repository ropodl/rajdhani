import{C as o,_ as i,o as l,j as m,b as s,f as d,k as r,c as t,w as a,h as L,F as v,D as P}from"./app-f1f67aae.js";import{V as f,a as u}from"./VRow-7897a9dd.js";import{V as c}from"./VCol-0c621d72.js";import{a as V}from"./VCard-2115e696.js";import{V as h}from"./VImg-39c17b8a.js";import"./tag-3a2ec72b.js";import"./VAvatar-c73f6692.js";import"./router-b0eaa7f3.js";const R={class:"d-flex flex-wrap justify-space-between"},G={__name:"index",props:{mainnews:Object,latest:Object,provincenews:Object,provinces:Object,photos:Object,videos:Object,trending:Object,catnews:Object,advertisements:Object},setup(n){const O=o(()=>i(()=>import("./mainnews-3b41b9c5.js"),["assets/mainnews-3b41b9c5.js","assets/app-f1f67aae.js","assets/app-934bc65f.css","assets/VRow-7897a9dd.js","assets/tag-3a2ec72b.js","assets/VRow-37f80755.css","assets/VCol-0c621d72.js","assets/VHover-9cf9094d.js","assets/delay-16c8d67e.js","assets/VCard-2115e696.js","assets/VAvatar-c73f6692.js","assets/router-b0eaa7f3.js","assets/router-b2aaa870.css","assets/VImg-39c17b8a.js","assets/VImg-3a2497a7.css","assets/VAvatar-ab88a885.css","assets/VCard-f7bfd9e0.css"])),y=o(()=>i(()=>import("./latestNews-c7ea56d9.js"),["assets/latestNews-c7ea56d9.js","assets/app-f1f67aae.js","assets/app-934bc65f.css","assets/VCol-0c621d72.js","assets/VRow-7897a9dd.js","assets/tag-3a2ec72b.js","assets/VRow-37f80755.css","assets/VHover-9cf9094d.js","assets/delay-16c8d67e.js","assets/VCard-2115e696.js","assets/VAvatar-c73f6692.js","assets/router-b0eaa7f3.js","assets/router-b2aaa870.css","assets/VImg-39c17b8a.js","assets/VImg-3a2497a7.css","assets/VAvatar-ab88a885.css","assets/VCard-f7bfd9e0.css","assets/VListItem-9eba9134.js","assets/VListItem-ffbe5b16.css","assets/VList-45851222.js","assets/index-c97bf6c3.js","assets/ssrBoot-02eda8b4.js","assets/VList-5ec505d6.css"])),b=o(()=>i(()=>import("./provincenews-51d068d1.js"),["assets/provincenews-51d068d1.js","assets/app-f1f67aae.js","assets/app-934bc65f.css","assets/VRow-7897a9dd.js","assets/tag-3a2ec72b.js","assets/VRow-37f80755.css","assets/VCol-0c621d72.js","assets/VChip-65edc148.js","assets/group-4cff85d6.js","assets/router-b0eaa7f3.js","assets/router-b2aaa870.css","assets/index-c97bf6c3.js","assets/VAvatar-c73f6692.js","assets/VImg-39c17b8a.js","assets/VImg-3a2497a7.css","assets/VAvatar-ab88a885.css","assets/VChip-4fb3ed84.css","assets/VHover-9cf9094d.js","assets/delay-16c8d67e.js","assets/VCard-2115e696.js","assets/VCard-f7bfd9e0.css","assets/VList-45851222.js","assets/VListItem-9eba9134.js","assets/VListItem-ffbe5b16.css","assets/ssrBoot-02eda8b4.js","assets/VList-5ec505d6.css"])),x=o(()=>i(()=>import("./photofeature-45e48a71.js"),["assets/photofeature-45e48a71.js","assets/app-f1f67aae.js","assets/app-934bc65f.css","assets/VRow-7897a9dd.js","assets/tag-3a2ec72b.js","assets/VRow-37f80755.css","assets/VCol-0c621d72.js","assets/VHover-9cf9094d.js","assets/delay-16c8d67e.js","assets/VCard-2115e696.js","assets/VAvatar-c73f6692.js","assets/router-b0eaa7f3.js","assets/router-b2aaa870.css","assets/VImg-39c17b8a.js","assets/VImg-3a2497a7.css","assets/VAvatar-ab88a885.css","assets/VCard-f7bfd9e0.css","assets/VOverlay-0631be35.js","assets/lazy-da828d0f.js","assets/easing-9f15041e.js","assets/VOverlay-2c01b8e6.css"])),A=o(()=>i(()=>import("./videofeature-f043db71.js"),["assets/videofeature-f043db71.js","assets/app-f1f67aae.js","assets/app-934bc65f.css","assets/VRow-7897a9dd.js","assets/tag-3a2ec72b.js","assets/VRow-37f80755.css","assets/VCol-0c621d72.js","assets/index-c97bf6c3.js","assets/group-4cff85d6.js","assets/resizeObserver-933f6ba9.js","assets/router-b0eaa7f3.js","assets/router-b2aaa870.css","assets/VBtn-b9f6e9af.js","assets/VBtn-6e2dfe86.css","assets/easing-9f15041e.js","assets/lazy-da828d0f.js","assets/VImg-39c17b8a.js","assets/VImg-3a2497a7.css","assets/ssrBoot-02eda8b4.js","assets/videofeature-833b2766.css"])),D=o(()=>i(()=>import("./trending-3ee8d802.js"),["assets/trending-3ee8d802.js","assets/app-f1f67aae.js","assets/app-934bc65f.css","assets/mdi-82b6613c.js","assets/router-b0eaa7f3.js","assets/tag-3a2ec72b.js","assets/router-b2aaa870.css","assets/VListItem-9eba9134.js","assets/VAvatar-c73f6692.js","assets/VImg-39c17b8a.js","assets/VImg-3a2497a7.css","assets/VAvatar-ab88a885.css","assets/VListItem-ffbe5b16.css","assets/VList-45851222.js","assets/index-c97bf6c3.js","assets/ssrBoot-02eda8b4.js","assets/VList-5ec505d6.css"])),_=o(()=>i(()=>import("./OverlayFullWidth-26c90fa0.js"),["assets/OverlayFullWidth-26c90fa0.js","assets/app-f1f67aae.js","assets/app-934bc65f.css","assets/VCol-0c621d72.js","assets/VRow-7897a9dd.js","assets/tag-3a2ec72b.js","assets/VRow-37f80755.css","assets/VHover-9cf9094d.js","assets/delay-16c8d67e.js","assets/VCard-2115e696.js","assets/VAvatar-c73f6692.js","assets/router-b0eaa7f3.js","assets/router-b2aaa870.css","assets/VImg-39c17b8a.js","assets/VImg-3a2497a7.css","assets/VAvatar-ab88a885.css","assets/VCard-f7bfd9e0.css","assets/VOverlay-0631be35.js","assets/lazy-da828d0f.js","assets/easing-9f15041e.js","assets/VOverlay-2c01b8e6.css"])),I=o(()=>i(()=>import("./ImageWithCard-c377e16e.js"),["assets/ImageWithCard-c377e16e.js","assets/app-f1f67aae.js","assets/app-934bc65f.css","assets/VCol-0c621d72.js","assets/VRow-7897a9dd.js","assets/tag-3a2ec72b.js","assets/VRow-37f80755.css","assets/VHover-9cf9094d.js","assets/delay-16c8d67e.js","assets/VCard-2115e696.js","assets/VAvatar-c73f6692.js","assets/router-b0eaa7f3.js","assets/router-b2aaa870.css","assets/VImg-39c17b8a.js","assets/VImg-3a2497a7.css","assets/VAvatar-ab88a885.css","assets/VCard-f7bfd9e0.css"])),w=o(()=>i(()=>import("./TwoFive-b9518cab.js"),["assets/TwoFive-b9518cab.js","assets/app-f1f67aae.js","assets/app-934bc65f.css","assets/VCol-0c621d72.js","assets/VRow-7897a9dd.js","assets/tag-3a2ec72b.js","assets/VRow-37f80755.css","assets/VHover-9cf9094d.js","assets/delay-16c8d67e.js","assets/VCard-2115e696.js","assets/VAvatar-c73f6692.js","assets/router-b0eaa7f3.js","assets/router-b2aaa870.css","assets/VImg-39c17b8a.js","assets/VImg-3a2497a7.css","assets/VAvatar-ab88a885.css","assets/VCard-f7bfd9e0.css","assets/VList-45851222.js","assets/index-c97bf6c3.js","assets/VListItem-9eba9134.js","assets/VListItem-ffbe5b16.css","assets/ssrBoot-02eda8b4.js","assets/VList-5ec505d6.css"])),g=o(()=>i(()=>import("./ThreeCol-b06e7639.js"),["assets/ThreeCol-b06e7639.js","assets/app-f1f67aae.js","assets/app-934bc65f.css","assets/VCol-0c621d72.js","assets/VRow-7897a9dd.js","assets/tag-3a2ec72b.js","assets/VRow-37f80755.css","assets/VHover-9cf9094d.js","assets/delay-16c8d67e.js","assets/VListItem-9eba9134.js","assets/VAvatar-c73f6692.js","assets/router-b0eaa7f3.js","assets/router-b2aaa870.css","assets/VImg-39c17b8a.js","assets/VImg-3a2497a7.css","assets/VAvatar-ab88a885.css","assets/VListItem-ffbe5b16.css"])),E=o(()=>i(()=>import("./TwoFour-3871358c.js"),["assets/TwoFour-3871358c.js","assets/app-f1f67aae.js","assets/app-934bc65f.css","assets/VCol-0c621d72.js","assets/VRow-7897a9dd.js","assets/tag-3a2ec72b.js","assets/VRow-37f80755.css","assets/VHover-9cf9094d.js","assets/delay-16c8d67e.js","assets/VCard-2115e696.js","assets/VAvatar-c73f6692.js","assets/router-b0eaa7f3.js","assets/router-b2aaa870.css","assets/VImg-39c17b8a.js","assets/VImg-3a2497a7.css","assets/VAvatar-ab88a885.css","assets/VCard-f7bfd9e0.css","assets/VList-45851222.js","assets/index-c97bf6c3.js","assets/VListItem-9eba9134.js","assets/VListItem-ffbe5b16.css","assets/ssrBoot-02eda8b4.js","assets/VList-5ec505d6.css"]));return(j,T)=>(l(),m(v,null,[n.mainnews.length>0?(l(),s(d(O),{key:0,mainnews:n.mainnews},null,8,["mainnews"])):r("",!0),t(u,null,{default:a(()=>[t(f,null,{default:a(()=>[t(c,{cols:"12",md:n.advertisements.sm_ad?"9":"12"},{default:a(()=>[t(d(y),{latest:n.latest},null,8,["latest"])]),_:1},8,["md"]),n.advertisements.sm_ad?(l(),s(c,{key:0,cols:"12",md:"3"},{default:a(()=>[L("div",R,[t(V,{class:"mb-3 w-100 h-100",href:n.advertisements.sm_ad[0].advertisement.url,target:"_blank",height:"290","max-width":"290"},{default:a(()=>[t(h,{class:"w-100 h-100",src:n.advertisements.sm_ad[0].advertisement.image,alt:n.advertisements.sm_ad[0].advertisement.title},null,8,["src","alt"])]),_:1},8,["href"]),t(V,{class:"mb-3 w-100 h-100",href:n.advertisements.sm_ad[1].advertisement.url,target:"_blank","max-height":"290","max-width":"290"},{default:a(()=>[t(h,{src:n.advertisements.sm_ad[1].advertisement.image,alt:n.advertisements.sm_ad[1].advertisement.title},null,8,["src","alt"])]),_:1},8,["href"])])]),_:1})):r("",!0)]),_:1})]),_:1}),n.advertisements.xl_ad?(l(),s(u,{key:1},{default:a(()=>[t(f,null,{default:a(()=>[t(c,{cols:"12"},{default:a(()=>[t(h,{eager:"","max-height":"200","max-width":"1270",src:n.advertisements.xl_ad[0].advertisement.image},null,8,["src"])]),_:1})]),_:1})]),_:1})):r("",!0),(l(!0),m(v,null,P(n.catnews,(e,k)=>(l(),m(v,null,[e.name=="राजनीति"&&e.news.length>0?(l(),s(u,{key:0},{default:a(()=>[t(d(_),{data:e},null,8,["data"])]),_:2},1024)):r("",!0),e.name=="समाज"&&e.news.length>0?(l(),s(u,{key:1},{default:a(()=>[t(f,null,{default:a(()=>[t(c,{cols:"12",md:"9"},{default:a(()=>[t(d(w),{data:e},null,8,["data"])]),_:2},1024),t(c,{cols:"12",md:"3"},{default:a(()=>[t(d(D),{trending:n.trending},null,8,["trending"])]),_:1})]),_:2},1024)]),_:2},1024)):r("",!0),e.name=="खेलकुद़़"&&e.news.length>0?(l(),s(u,{key:2},{default:a(()=>[t(d(_),{data:e},null,8,["data"])]),_:2},1024)):r("",!0),e.name=="अर्थ"&&e.news.length>0?(l(),s(u,{key:3},{default:a(()=>[t(d(_),{data:e},null,8,["data"])]),_:2},1024)):r("",!0),e.name=="साहित्य"&&e.news.length>0?(l(),s(u,{key:4},{default:a(()=>[t(d(g),{data:e},null,8,["data"])]),_:2},1024)):r("",!0),e.name=="अन्तर्राष्ट्रिय"&&e.news.length>0?(l(),s(u,{key:5},{default:a(()=>[t(d(g),{data:e},null,8,["data"])]),_:2},1024)):r("",!0),e.name=="मनोरञ्जन"&&e.news.length>0?(l(),s(u,{key:6},{default:a(()=>[t(d(E),{data:e},null,8,["data"])]),_:2},1024)):r("",!0),e.name=="विचार"&&e.news.length>0?(l(),s(u,{key:7},{default:a(()=>[t(d(E),{data:e},null,8,["data"])]),_:2},1024)):r("",!0),e.name=="शिक्षा"&&e.news.length>0?(l(),s(u,{key:8},{default:a(()=>[t(d(I),{data:e},null,8,["data"])]),_:2},1024)):r("",!0),e.name=="स्वास्थ्य"&&e.news.length>0?(l(),s(u,{key:9},{default:a(()=>[t(d(w),{data:e},null,8,["data"])]),_:2},1024)):r("",!0),k==1?(l(),s(d(b),{key:10,provinces:n.provinces,provincenews:n.provincenews},null,8,["provinces","provincenews"])):r("",!0),k==6?(l(),s(d(x),{key:11,photos:n.photos},null,8,["photos"])):r("",!0)],64))),256)),n.videos.length>0?(l(),s(d(A),{key:2,videos:n.videos},null,8,["videos"])):r("",!0)],64))}};export{G as default};
