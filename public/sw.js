if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>i(e,t),u={module:{uri:t},exports:c,require:r};s[t]=Promise.all(a.map((e=>u[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-80ca14c3"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"4f588c0aaf3379bbdd83646cd805ee76"},{url:"/_next/static/Na1NiJ2DInaP3QmJKi-I7/_buildManifest.js",revision:"5b7b237c4e5847757ac83cde0bc39fc7"},{url:"/_next/static/Na1NiJ2DInaP3QmJKi-I7/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/147-ee148045568bcfe6.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/151.12c734bdf20beff4.js",revision:"12c734bdf20beff4"},{url:"/_next/static/chunks/1514a51c-5d834dcb4458f541.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/154-b4d7e682358f1522.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/215.e9de90cbe4c17e0b.js",revision:"e9de90cbe4c17e0b"},{url:"/_next/static/chunks/230-900b5058fafd358a.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/23856e2e-6fd18af4d346430b.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/239-e5909a4781e6550e.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/241.562e156e05ea71f4.js",revision:"562e156e05ea71f4"},{url:"/_next/static/chunks/253-cf240e6896c9b8fb.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/278.7fcab9630f28aeb1.js",revision:"7fcab9630f28aeb1"},{url:"/_next/static/chunks/2c48bee6-569ffeee208de1b6.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/323-d686861ff589e16f.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/335-6bf34940550f8430.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/34-efd09c091c8280e2.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/357-bc52d99f9fa4c6b8.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/3612bfc5-54c90d3c3b9c16ba.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/365.e7c4b171ff799df3.js",revision:"e7c4b171ff799df3"},{url:"/_next/static/chunks/5150e096-5d90bd899d5a60cb.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/667.090f16bfb24feb83.js",revision:"090f16bfb24feb83"},{url:"/_next/static/chunks/695-6ad1ca914c1682f8.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/741-70470feff02294c3.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/782.40a62d31df0b2421.js",revision:"40a62d31df0b2421"},{url:"/_next/static/chunks/88d1c93c-233d21304522a84e.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/8e1e73a2-f33d0e88d2bbc55d.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/945-ce604bcce7d61eb0.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/957-60d53baa01949d2d.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/960-bd3af694f435c904.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/970.2d9f86086af6fe57.js",revision:"2d9f86086af6fe57"},{url:"/_next/static/chunks/app/(auth)/sign-in/%5B%5B...sign-in%5D%5D/page-198d81c0b21db785.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/app/(auth)/sign-up/%5B%5B...sign-up%5D%5D/page-c8b3b0fe23453e32.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/app/(main)/layout-33334814204cd09d.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/app/(main)/page-76d04fe3855f7594.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/app/(main)/upload/page-1326ba171b4d833a.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/app/(main)/video/%5Bid%5D/page-07562c90e83abe35.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/app/layout-1fda89c4cd165676.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/app/not-found-4a335f61193931ae.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/app/studio/%5B%5B...index%5D%5D/page-094e5d59feb35628.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/d4855712.3f02c2f12a8923cd.js",revision:"3f02c2f12a8923cd"},{url:"/_next/static/chunks/eb81c892-c893d72024900c75.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/framework-f780fd9bae3b8c58.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/main-app-e0e5a9bdb23cda4b.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/main-bfde9184114716ac.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/pages/_app-8516b6042847d7f2.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/pages/_error-b78018e6ce3c961b.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-ba1d6b00a098ae8c.js",revision:"Na1NiJ2DInaP3QmJKi-I7"},{url:"/_next/static/css/fa03ebdc2303eb68.css",revision:"fa03ebdc2303eb68"},{url:"/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/icon/icon.png",revision:"829b741bb748cb99d133b7419c59c7b0"},{url:"/manifest.json",revision:"4a2c65858fa0b5e44b56799afe962325"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
