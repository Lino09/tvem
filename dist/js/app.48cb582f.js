(function(e){function t(t){for(var a,l,i=t[0],c=t[1],s=t[2],d=0,p=[];d<i.length;d++)l=i[d],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&p.push(n[l][0]),n[l]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,l=1;l<r.length;l++){var c=r[l];0!==n[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={app:0},o=[];function l(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9b9bc261"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,a){r=n[e]=[t,a]}));t.push(r[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=l(e);var s=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(d);var r=n[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,r[1](s)}n[e]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var u=s;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("7a23"),n={class:"app-container text-white"},o={id:"nav"},l=Object(a["f"])("Home"),i=Object(a["f"])(" | "),c=Object(a["f"])("About"),s=Object(a["e"])('<div class="h-40 w-40 bg-red-500 backball top-2/3 left-1/2"></div><div class="h-40 w-40 bg-pink-500 backball bottom-1/3 right-1/2"></div><div class="h-40 w-40 bg-purple-500 backball top-28"></div><div class="h-40 w-40 bg-indigo-500 backball top-1/3 left-3/4"></div><div class="h-40 w-40 bg-yellow-500 backball top-1/4 left-24"></div><div class="h-40 w-40 bg-green-500 backball top-2/3 left-16"></div>',6);function d(e,t){var r=Object(a["t"])("router-link"),d=Object(a["t"])("router-view");return Object(a["p"])(),Object(a["c"])("div",n,[Object(a["d"])("header",o,[Object(a["g"])(r,{to:"/"},{default:Object(a["x"])((function(){return[l]})),_:1}),i,Object(a["g"])(r,{to:"/about"},{default:Object(a["x"])((function(){return[c]})),_:1})]),Object(a["g"])(d,{class:"z-10 p-8 lg:p-0"}),s])}var u=r("6b0d"),p=r.n(u);const f={},b=p()(f,[["render",d]]);var v=b,h=(r("d3b7"),r("3ca3"),r("ddb0"),r("6c02")),m={class:"container grid grid-cols-3 gap-2 lg:gap-8 min-h-screen"},g={class:"col-span-3 md:col-span-1 border border-gray-300 filtered self-start sticky top-4"},x=Object(a["e"])('<div id="main-container" class="col-span-3 md:col-span-2 border border-gray-300 filtered"><div class="h-96"></div><div class="h-96"></div><div class="h-96"></div><div class="h-96"></div><div class="h-96"></div></div>',1);function w(e,t,r,n,o,l){var i=Object(a["t"])("left-main");return Object(a["p"])(),Object(a["c"])("div",m,[Object(a["d"])("div",g,[Object(a["g"])(i)]),x])}var j={class:"col-span-1 flex flex-col text-center bg-transparent"},y=Object(a["e"])('<div class="flex-1 flex flex-col"><img class="w-32 h-32 flex-shrink-0 mx-auto rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt=""><h3 class="mt-6 white font-medium">Aurora Guadalupe Rebollar Sanchez</h3><dl class="mt-1 flex-grow flex flex-col justify-between"><dt class="sr-only">Title</dt><dd class="text-gray-200 text-sm">Lic. en Terapia Física y Rehabilitación</dd></dl></div><div class="mt-8"><div class="-mt-px flex divide-x divide-gray-200"><div class="w-0 flex-1 flex"><a href="mailto:lupita@example.com" class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-300 font-medium border border-transparent rounded-bl-lg hover:text-white group"><svg class="w-5 h-5 text-white group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg><span class="ml-3">Email</span></a></div><div class="-ml-px w-0 flex-1 flex"><a href="tel:+52222432222" class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-300 font-medium border border-transparent rounded-br-lg hover:text-whit group"><svg class="w-5 h-5 text-white group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1\n              1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1\n              1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82\n              18 2 12.18 2 5V3z"></path></svg><span class="ml-3">Llamar</span></a></div></div></div>',2),O=[y];function k(e,t,r,n,o,l){return Object(a["p"])(),Object(a["c"])("div",j,O)}var M={};const P=p()(M,[["render",k]]);var _=P,L={name:"Home",components:{LeftMain:_}};const S=p()(L,[["render",w]]);var T=S,z=[{path:"/",name:"Home",component:T},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],A=Object(h["a"])({history:Object(h["b"])(),routes:z}),C=A;r("a766");Object(a["b"])(v).use(C).mount("#app")},a766:function(e,t,r){}});
//# sourceMappingURL=app.48cb582f.js.map