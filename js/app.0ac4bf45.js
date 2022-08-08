(function(){"use strict";var e={8543:function(e,n,t){var r=t(9242),o=t(3396);const i=(0,o.Uk)("Home"),a=(0,o.Uk)(" | "),u=(0,o.Uk)("Ceremony"),c=(0,o.Uk)(" | "),l=(0,o.Uk)("Menu"),s=(0,o.Uk)(" | "),f=(0,o.Uk)("Contact"),d=(0,o.Uk)(" | "),p=(0,o.Uk)("Map");function m(e,n){const t=(0,o.up)("router-link"),r=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("nav",null,[(0,o.Wm)(t,{to:"/"},{default:(0,o.w5)((()=>[i])),_:1}),a,(0,o.Wm)(t,{to:"/ceremony"},{default:(0,o.w5)((()=>[u])),_:1}),c,(0,o.Wm)(t,{to:"/menu"},{default:(0,o.w5)((()=>[l])),_:1}),s,(0,o.Wm)(t,{to:"/contact"},{default:(0,o.w5)((()=>[f])),_:1}),d,(0,o.Wm)(t,{to:"/map"},{default:(0,o.w5)((()=>[p])),_:1})]),(0,o.Wm)(r)],64)}var g=t(89);const h={},v=(0,g.Z)(h,[["render",m]]);var b=v,w=t(5431);(0,w.z)("/wedding-plan/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var y=t(2483),k=t.p+"img/couple.ba68a8cd.jpg";const _=e=>((0,o.dD)("data-v-37cde2fa"),e=e(),(0,o.Cn)(),e),C={class:"home"},O=_((()=>(0,o._)("img",{alt:"Couple Photo",src:k},null,-1))),j=_((()=>(0,o._)("h2",null,[(0,o.Uk)("13"),(0,o._)("sup",null,"th"),(0,o.Uk)(" August 2022")],-1))),A=_((()=>(0,o._)("p",null,"14:00, Kirche Hilterfingen / Church Hilterfingen",-1))),E=_((()=>(0,o._)("p",null,"16:00, Schloss Hünegg / Castle Hünegg",-1))),U=_((()=>(0,o._)("p",null,"17:00, Apero",-1))),S=_((()=>(0,o._)("p",null,"19:30, Dinner",-1))),N=[O,j,A,E,U,S];function T(e,n,t,r,i,a){return(0,o.wg)(),(0,o.iD)("div",C,N)}var P={name:"HomeView"};const H=(0,g.Z)(P,[["render",T],["__scopeId","data-v-37cde2fa"]]);var D=H;const F=[{path:"/",name:"home",component:D},{path:"/ceremony",name:"about",component:()=>t.e(443).then(t.bind(t,6769))},{path:"/menu",name:"menu",component:()=>t.e(241).then(t.bind(t,7241))},{path:"/contact",name:"contact",component:()=>t.e(483).then(t.bind(t,8483))},{path:"/map",name:"map",component:()=>t.e(245).then(t.bind(t,7245))}],M=(0,y.p7)({history:(0,y.PO)("/wedding-plan/"),routes:F});var W=M,x=t(65),L=(0,x.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,r.ri)(b).use(L).use(W).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var a=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],i=e[s][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(s--,1);var l=o();void 0!==l&&(n=l)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+(443===e?"about":e)+"."+{241:"e7a53b0e",245:"33b41ac8",443:"0ca76652",483:"41db6a1f"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+(443===e?"about":e)+"."+{241:"de864794",443:"923583b1",483:"3a991e3c"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="wedding-plan:";t.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==n+i){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+i),u.src=r),e[r]=[o];var d=function(n,t){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/wedding-plan/"}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)t();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var a=t.miniCssF(r),u=t.p+a;if(n(a,u))return o();e(r,u,o,i)}))},o={143:0};t.f.miniCss=function(e,n){var t={241:1,443:1,483:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var a=t.p+t.u(n),u=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,a=r[0],u=r[1],c=r[2],l=0;if(a.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(c)var s=c(t)}for(n&&n(r);l<a.length;l++)i=a[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(s)},r=self["webpackChunkwedding_plan"]=self["webpackChunkwedding_plan"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(8543)}));r=t.O(r)})();
//# sourceMappingURL=app.0ac4bf45.js.map