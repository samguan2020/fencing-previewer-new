if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let a={};const r=e=>i(e,t),u={module:{uri:t},exports:a,require:r};s[t]=Promise.all(n.map((e=>u[e]||r(e)))).then((e=>(c(...e),a)))}}define(["./workbox-80ca14c3"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/TCVACSiXBbmRPO0z7NK1P/_buildManifest.js",revision:"5b7b237c4e5847757ac83cde0bc39fc7"},{url:"/_next/static/TCVACSiXBbmRPO0z7NK1P/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/147-a4ba8133b812fb76.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/151.12c734bdf20beff4.js",revision:"12c734bdf20beff4"},{url:"/_next/static/chunks/1514a51c-1697fc8a05451f3f.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/215.80a700be84b9826f.js",revision:"80a700be84b9826f"},{url:"/_next/static/chunks/230-38d36d327c48c355.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/23856e2e-0e5ebcafdc48f0dd.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/239-bc6a0fb4b5d40525.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/241.9ce0fc5813bda3c9.js",revision:"9ce0fc5813bda3c9"},{url:"/_next/static/chunks/253-cf240e6896c9b8fb.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/278.bdb57779f755a2b4.js",revision:"bdb57779f755a2b4"},{url:"/_next/static/chunks/318-22dc1e132e0a7e28.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/323-5d675f181b276e8b.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/335-832d551f75f02866.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/3612bfc5-51e10368849207ff.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/364-c34ccca40274c3c6.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/365.2b2cbc5ebf413b32.js",revision:"2b2cbc5ebf413b32"},{url:"/_next/static/chunks/406-23494cac4a90be42.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/461-70dd6bbc69eedbce.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/5150e096-5d90bd899d5a60cb.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/667.090f16bfb24feb83.js",revision:"090f16bfb24feb83"},{url:"/_next/static/chunks/741-deabb0753c360a9c.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/782.4fb7a164a135788f.js",revision:"4fb7a164a135788f"},{url:"/_next/static/chunks/88d1c93c-233d21304522a84e.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/8e1e73a2-e5c3a38c9fd529e7.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/945-52a2b85aee29ce77.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/957-6007ace99eed518e.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/960-85de5dbb01fca13b.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/970.121fd51ea004bc45.js",revision:"121fd51ea004bc45"},{url:"/_next/static/chunks/app/(auth)/sign-in/%5B%5B...sign-in%5D%5D/page-a76de18d9f2da31e.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/app/(auth)/sign-up/%5B%5B...sign-up%5D%5D/page-02134af3553ba5a0.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/app/(main)/layout-68d042e75b9ba246.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/app/(main)/page-a77ef82537888315.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/app/(main)/upload/page-dbe0e653743a3d0a.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/app/(main)/video/%5Bid%5D/page-8492481ee878a199.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/app/layout-eb3c48f02ccc7766.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/app/not-found-c609661e336c63df.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/app/studio/%5B%5B...index%5D%5D/page-93f7b47a974f719a.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/d4855712.3f02c2f12a8923cd.js",revision:"3f02c2f12a8923cd"},{url:"/_next/static/chunks/eb81c892-eb7c95955554fad0.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/fed2d5a2-833ca72879afe268.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/framework-f780fd9bae3b8c58.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/main-7570dfba236cd880.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/main-app-caa71567beda2904.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/pages/_app-8516b6042847d7f2.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/pages/_error-b78018e6ce3c961b.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-4b743d7283b3194d.js",revision:"TCVACSiXBbmRPO0z7NK1P"},{url:"/_next/static/css/fa03ebdc2303eb68.css",revision:"fa03ebdc2303eb68"},{url:"/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/icon/icon.png",revision:"60e500731a672243713d688ec3b94642"},{url:"/manifest.json",revision:"49945735e3f321442a07377f92618441"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
