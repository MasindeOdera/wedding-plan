if(!self.define){let e,n={};const s=(s,i)=>(s=new URL(s+".js",i).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,l)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(n[d])return;let r={};const o=e=>s(e,d),u={module:{uri:d},exports:r,require:o};n[d]=Promise.all(i.map((e=>u[e]||o(e)))).then((e=>(l(...e),r)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"wedding-plan"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/wedding-plan/css/241.de864794.css",revision:null},{url:"/wedding-plan/css/483.3a991e3c.css",revision:null},{url:"/wedding-plan/css/about.923583b1.css",revision:null},{url:"/wedding-plan/css/app.0d91e1f1.css",revision:null},{url:"/wedding-plan/img/couple.ba68a8cd.jpg",revision:null},{url:"/wedding-plan/index.html",revision:"6dca8eeb9f0f47d7e2153e2ed1ac0e53"},{url:"/wedding-plan/js/241.e7a53b0e.js",revision:null},{url:"/wedding-plan/js/245.33b41ac8.js",revision:null},{url:"/wedding-plan/js/483.41db6a1f.js",revision:null},{url:"/wedding-plan/js/about.0ca76652.js",revision:null},{url:"/wedding-plan/js/app.0ac4bf45.js",revision:null},{url:"/wedding-plan/js/chunk-vendors.1695c16d.js",revision:null},{url:"/wedding-plan/manifest.json",revision:"da011d9a49e66ef10fbb5178985e2971"},{url:"/wedding-plan/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map