(function(e){function t(t){for(var a,r,i=t[0],o=t[1],u=t[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);b&&b(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==s[i]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},s={app:0},c=[];function i(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-2d0a4401":"b10d1581","chunk-2d0c5529":"97b542fb","chunk-2d0d7286":"f4574bf8","chunk-2d2086b7":"eab7823f","chunk-2d210c47":"96032998","chunk-2d2259e5":"f0b4519e","chunk-2d22d746":"15d5a36e","chunk-772c1010":"ba49aa45","chunk-7ce9a2b1":"49c8626a"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"chunk-772c1010":1,"chunk-7ce9a2b1":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d0a4401":"31d6cfe0","chunk-2d0c5529":"31d6cfe0","chunk-2d0d7286":"31d6cfe0","chunk-2d2086b7":"31d6cfe0","chunk-2d210c47":"31d6cfe0","chunk-2d2259e5":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-772c1010":"35718fc5","chunk-7ce9a2b1":"3167b2ba"}[e]+".css",s=o.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===s))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===a||l===s)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var a=t&&t.target&&t.target.src||s,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],b.parentNode.removeChild(b),n(c)},b.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(b)})).then((function(){r[e]=0})));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(b);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}s[e]=void 0}};var b=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var b=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3b42":function(e,t,n){"use strict";var a=n("a18c"),r=n("5b34"),s={user:null,messages:[],toRoute:"/feed",Login:function(e,t){var n=Object(r["b"])(e,t);this.user=n.user,a["a"].push(this.toRoute)}};t["a"]=s},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r=(n("15f5"),n("6597"),n("8918")),s=n("c43d"),c=(n("4624"),{class:"container"}),i={class:"columns"},o={class:"column"};function u(e,t,n,r,s,u){var l=Object(a["C"])("Nav"),d=Object(a["C"])("router-view");return Object(a["v"])(),Object(a["g"])("div",c,[Object(a["h"])("div",i,[Object(a["h"])("div",o,[Object(a["k"])(l),Object(a["k"])(d)])])])}var l={class:"navbar",role:"navigation","aria-label":"main navigation"},d={class:"navbar-brand"},b=Object(a["h"])("a",{class:"navbar-item",href:"https://bulma.io"},[Object(a["h"])("img",{src:"https://bulma.io/images/bulma-logo.png",width:"112",height:"28"})],-1),h=Object(a["h"])("span",{"aria-hidden":"true"},null,-1),f=Object(a["h"])("span",{"aria-hidden":"true"},null,-1),p=Object(a["h"])("span",{"aria-hidden":"true"},null,-1),v=[h,f,p],m={class:"navbar-start"},g=Object(a["j"])(" Home "),j=Object(a["j"])(" History "),O=Object(a["j"])(" New Exercise "),k=Object(a["j"])(" Report "),y=Object(a["j"])(" Activity "),w=Object(a["j"])(" Find Friends "),x={class:"navbar-item has-dropdown is-hoverable"},L=Object(a["h"])("a",{class:"navbar-link"}," More ",-1),_={class:"navbar-dropdown"},A=Object(a["j"])(" About "),C=Object(a["j"])(" Contact "),P={class:"navbar-end"},S={class:"navbar-item"};function E(e,t,n,r,s,c){var i=Object(a["C"])("router-link"),o=Object(a["C"])("login-badge");return Object(a["v"])(),Object(a["g"])("nav",l,[Object(a["h"])("div",d,[b,Object(a["h"])("a",{role:"button",class:Object(a["r"])(["navbar-burger",{"is-active":e.navBarIsActive}]),"aria-label":"menu","aria-expanded":"false",onClick:t[0]||(t[0]=function(t){return e.navBarIsActive=!e.navBarIsActive})},v,2)]),Object(a["h"])("div",{class:Object(a["r"])(["navbar-menu",{"is-active":s.isActive}])},[Object(a["h"])("div",m,[Object(a["k"])(i,{class:"navbar-item",to:"/","active-class":"is-active",exact:""},{default:Object(a["L"])((function(){return[g]})),_:1}),Object(a["k"])(i,{class:"navbar-item",to:"/history","active-class":"is-active",exact:""},{default:Object(a["L"])((function(){return[j]})),_:1}),Object(a["k"])(i,{class:"navbar-item",to:"/exercise","active-class":"is-active",exact:""},{default:Object(a["L"])((function(){return[O]})),_:1}),Object(a["k"])(i,{class:"navbar-item",to:"/report","active-class":"is-active",exact:""},{default:Object(a["L"])((function(){return[k]})),_:1}),Object(a["k"])(i,{class:"navbar-item",to:"/Feed","active-class":"is-active",exact:""},{default:Object(a["L"])((function(){return[y]})),_:1}),Object(a["k"])(i,{class:"navbar-item",to:"/findfriends","active-class":"is-active",exact:""},{default:Object(a["L"])((function(){return[w]})),_:1}),Object(a["h"])("div",x,[L,Object(a["h"])("div",_,[Object(a["k"])(i,{class:"navbar-item",to:"/about","active-class":"is-active"},{default:Object(a["L"])((function(){return[A]})),_:1}),Object(a["k"])(i,{class:"navbar-item",to:"/contact","active-class":"is-active"},{default:Object(a["L"])((function(){return[C]})),_:1})])])]),Object(a["h"])("div",P,[Object(a["h"])("div",S,[Object(a["k"])(o)])])],2)])}n("b0c0");var N={key:0,class:"buttons"},T=Object(a["h"])("a",{class:"button is-primary"},[Object(a["h"])("strong",null,"Sign up")],-1),q={key:1};function F(e,t,n,r,s,c){return s.Session.user?(Object(a["v"])(),Object(a["g"])("div",q," Hello "+Object(a["F"])(c.name),1)):(Object(a["v"])(),Object(a["g"])("div",N,[T,Object(a["h"])("a",{class:"button is-light",onClick:t[0]||(t[0]=function(){return c.login&&c.login.apply(c,arguments)})}," Log in ")]))}var M=n("3b42"),B={data:function(){return{Session:M["a"]}},methods:{login:function(){this.$router.push("/login")}},computed:{name:function(){return this.Session.user.firstName+" "+this.Session.user.lastName}}},H=n("6b0d"),R=n.n(H);const W=R()(B,[["render",F]]);var I=W,z={data:function(){return{isActive:!1}},components:{LoginBadge:I}};const J=R()(z,[["render",E]]);var D=J,K={components:{Nav:D}};const U=R()(K,[["render",u]]);var Y=U,$=n("a18c");Object(a["d"])(Y).use($["a"]).use(r["a"]).use(s["a"],{iconPack:"fas"}).mount("#app")},"5b34":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i}));var a=n("5530"),r=(n("7db0"),n("a434"),n("e62d")),s=[{firstName:"Cass",lastName:"Kubisa",handle:"@casskubisa",pic:"https://pbs.twimg.com/profile_images/1435642082123730957/wEMcELkz_400x400.jpg",password:"newpaltz",isAdmin:!0,emails:["kubisac1@newpaltz.edu"],following:[{handle:"@cat",isApproved:!0}]},{firstName:"A",lastName:"Cat",handle:"@cat",pic:"https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d",password:"meow",isAdmin:!0,emails:["cat@meow.com"],following:[{handle:"@casskubisa",isApproved:!0}]}];function c(){return Object(r["a"])("users")}function i(e,t){console.log({handle:e,password:t});var n=s.find((function(t){return t.handle==e}));if(!n)throw{code:401,msg:"Sorry there is no user with that handle"};if(t!=n.password)throw{code:401,msg:"Wrong Password"};var r=Object(a["a"])(Object(a["a"])({},n),{},{password:void 0});return{user:r}}},a18c:function(e,t,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0");var a=n("6c02"),r=n("3b42"),s=n("7a23"),c={class:"container"},i=Object(s["i"])('<h1 class="title"> Excerise App </h1><p class="subtitle"> Your Progress This Week </p><article class="message is-primary"><div class="message-header"><p><i class="fas fa-running"></i> Endurance </p></div><div class="message-body"> Progress This Week <br><progress class="progress is-primary" value="30" max="100">15%</progress><button class="button is-light">More</button></div></article><article class="message is-danger"><div class="message-header"><p><i class="fas fa-dumbbell"></i> Strength </p></div><div class="message-body"> Progress This Week <br><progress class="progress is-danger" value="25" max="100">15%</progress><button class="button is-light">More</button></div></article><article class="message is-warning"><div class="message-header"><p><i class="fas fa-balance-scale"></i> Balance </p></div><div class="message-body"> Progress This Week <br><progress class="progress is-warning" value="20" max="100">15%</progress><button class="button is-light">More</button></div></article><article class="message is-info"><div class="message-header"><p><i class="fas fa-cat"></i> Flexablity </p></div><div class="message-body"> Progress This Week <br><progress class="progress is-info" value="50" max="100">15%</progress><button class="button is-light">More</button></div></article>',6),o=[i];function u(e,t,n,a,r,i){return Object(s["v"])(),Object(s["g"])("div",c,o)}var l={name:"Home",components:{}},d=n("6b0d"),b=n.n(d);const h=b()(l,[["render",u]]);var f=h,p=[{path:"/",name:"Home",component:f,meta:{requiresLogin:!0}},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))}},{path:"/contact",name:"Contact",component:function(){return n.e("chunk-2d210c47").then(n.bind(null,"b8fa"))}},{path:"/history",name:"History",component:function(){return n.e("chunk-2d2259e5").then(n.bind(null,"e4bb"))},meta:{requiresLogin:!0}},{path:"/exercise",name:"Exercise",component:function(){return n.e("chunk-7ce9a2b1").then(n.bind(null,"652e"))},meta:{requiresLogin:!0}},{path:"/report",name:"Report",component:function(){return n.e("chunk-2d0d7286").then(n.bind(null,"762c"))},meta:{requiresLogin:!0}},{path:"/myfriends",name:"MyFriends",component:function(){return n.e("chunk-2d0a4401").then(n.bind(null,"0649"))},meta:{requiresLogin:!0}},{path:"/findfriends",name:"FindFriendss",component:function(){return n.e("chunk-2d0c5529").then(n.bind(null,"3f33"))},meta:{requiresLogin:!0}},{path:"/Feed",name:"Feed",component:function(){return n.e("chunk-772c1010").then(n.bind(null,"4787"))},meta:{requiresLogin:!0}}],v=Object(a["a"])({history:Object(a["b"])(""),routes:p});v.beforeEach((function(e,t,n){e.meta.requiresLogin&&!r["a"].user?n("/login"):n()}));t["a"]=v},e62d:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a,r=n("1da1"),s=(n("96cf"),n("d3b7"),n("3b42")),c=null!==(a="/")&&void 0!==a?a:"http://localhost:3100/";function i(e){return o.apply(this,arguments)}function o(){return o=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,a,r,i=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=i.length>1&&void 0!==i[1]?i[1]:null,a=i.length>2&&void 0!==i[2]?i[2]:null,e.prev=2,!n){e.next=9;break}return e.next=6,fetch(c+t,{method:null!==a&&void 0!==a?a:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 6:r=e.sent,e.next=12;break;case 9:return e.next=11,fetch(c+t);case 11:r=e.sent;case 12:if(r.ok){e.next=16;break}return e.next=15,r.json();case 15:throw e.sent;case 16:return e.next=18,r.json();case 18:return e.abrupt("return",e.sent);case 21:e.prev=21,e.t0=e["catch"](2),s["a"].Error(e.t0);case 24:case"end":return e.stop()}}),e,null,[[2,21]])}))),o.apply(this,arguments)}}});
//# sourceMappingURL=app.299057df.js.map