(function(t){function e(e){for(var n,i,l=e[0],s=e[1],c=e[2],u=0,f=[];u<l.length;u++)i=l[u],r[i]&&f.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,i=1;i<o.length;i++){var s=o[i];0!==r[s]&&(n=!1)}n&&(a.splice(e--,1),t=l(l.s=o[0]))}return t}var n={},r={app:0},a=[];function i(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"fd7ddc51"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.e=function(t){var e=[],o=r[t];if(0!==o)if(o)e.push(o[2]);else{var n=new Promise(function(e,n){o=r[t]=[e,n]});e.push(o[2]=n);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=i(t),a=function(e){s.onerror=s.onload=null,clearTimeout(c);var o=r[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+n+": "+a+")");i.type=n,i.request=a,o[1](i)}r[t]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,o){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(o,n,function(e){return t[e]}.bind(null,n));return o},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/goodlifeondemand/",l.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=c;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"21bb":function(t,e,o){"use strict";var n=o("bcc9"),r=o.n(n);r.a},4944:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Navigation"),o("router-view"),o("Footer")],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav",class:[this.$attrs.lightNav?"nav-light":""],attrs:{id:"nav"}},[n("div",{staticClass:"nav-wrapper"},[n("router-link",{staticClass:"logo",attrs:{to:"/"}},[n("img",{attrs:{src:o("df8b"),alt:"Good Life on Demand Logo"}})]),n("div",{staticClass:"links"},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),n("router-link",{attrs:{to:"/our-work"}},[t._v("Our Work")]),n("router-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)],1)])},l=[],s={props:{lightNav:Boolean}},c=s,u=(o("a4e1"),o("2877")),d=Object(u["a"])(c,i,l,!1,null,null,null),f=d.exports,p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"footer"},[o("ul",[o("li",[o("a",{staticClass:"email",attrs:{href:"mailto:GoodLifeOnDemandProductions@gmail.com"}},[t._v("GoodLifeOnDemandProductions@gmail.com")])]),o("li",[o("a",{attrs:{href:"tel:724-986-7862"}},[t._v("724-986-7862")])])])])}],h={name:"Footer",props:{msg:String}},v=h,b=(o("7897"),Object(u["a"])(v,p,m,!1,null,"d243c2ce",null)),g=b.exports,y={name:"app",components:{Navigation:f,Footer:g}},w=y,_=Object(u["a"])(w,r,a,!1,null,null,null),C=_.exports,O=o("8c4f"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-view"},[n("div",{staticClass:"home-hero"},[n("video",{staticClass:"home-bg-video",attrs:{autoplay:"",loop:"",muted:""},domProps:{muted:!0}},[n("source",{attrs:{src:o("8c23"),type:"video/mp4"}})]),n("div",{staticClass:"down-arrow"})]),n("div",{staticClass:"page-wrapper"},[t._m(0),n("div",{staticClass:"home-callout-work"},[n("h2",{staticClass:"callout-work-title"},[t._v("Our Work")]),n("div",{staticClass:"callout-work-items"},t._l(t.workItems,function(e){return n("div",{key:e.id,staticClass:"callout-work-item"},[n("div",{staticClass:"content"},["youtube"===e.type?[n("iframe",{attrs:{width:"100%",height:"100%",src:"https://www.youtube.com/embed/"+e.VIDEO_ID,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",controls:"0"}})]:t._e(),"vimeo"===e.type?[n("iframe",{attrs:{src:"https://player.vimeo.com/video/"+e.VIDEO_ID+"?title=0&byline=0&portrait=0",width:"100%",height:"100%",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:"",background:"1"}})]:t._e()],2)])}),0)]),t._m(1)])])},D=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home-headline"},[o("div",{staticClass:"home-headline-copy"},[o("h1",{staticClass:"title"},[t._v("Welcome to Good Life On Demand Productions")]),o("p",{staticClass:"subtitle"},[t._v("Good Life on Demand is here to provide a film truly personal and authentic for the most significant day in a couple’s existence. We are a Pittsburgh and Los Angeles based videographers who are contracted all across the continental US. If you are planning a wedding with a concrete layout to celebrate the love of two people and rejoice with your friends and family, Good Life on Demand may be the perfect fit for you!")])]),o("div",{staticClass:"home-headline-image"})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"callout-contact"},[o("h2",{staticClass:"callout-contact-title"})])}],I={name:"home",data:function(){return{workItems:[{id:1,title:"title",VIDEO_ID:"Vw-CnimqiKk",thumbnail:"",type:"youtube"},{id:2,title:"title2",VIDEO_ID:"KUaI6Cg62B8",thumbnail:"",type:"youtube"},{id:3,title:"title3",VIDEO_ID:"332339318",thumbnail:"",type:"vimeo"},{id:4,title:"title3",VIDEO_ID:"337074132",thumbnail:"",type:"vimeo"}]}},beforeCreate:function(){document.body.className="home"}},j=I,E=(o("21bb"),Object(u["a"])(j,k,D,!1,null,null,null)),x=E.exports;n["a"].use(O["a"]);var P=new O["a"]({mode:"history",base:"/goodlifeondemand/",routes:[{path:"/",name:"home",component:x,props:{lightNav:!0}},{path:"/our-work",name:"our work",component:function(){return o.e("about").then(o.bind(null,"64d3"))}},{path:"/contact",name:"contact",component:function(){return o.e("about").then(o.bind(null,"b8fa"))}}]});n["a"].config.productionTip=!1,new n["a"]({router:P,render:function(t){return t(C)}}).$mount("#app")},7897:function(t,e,o){"use strict";var n=o("4944"),r=o.n(n);r.a},"8c23":function(t,e,o){t.exports=o.p+"media/hall-wedding.1f159e81.mp4"},"8de3":function(t,e,o){},a4e1:function(t,e,o){"use strict";var n=o("8de3"),r=o.n(n);r.a},bcc9:function(t,e,o){},df8b:function(t,e,o){t.exports=o.p+"img/glod-logo-white.ba82e196.png"}});
//# sourceMappingURL=app.89bcb791.js.map