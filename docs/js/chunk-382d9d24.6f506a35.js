(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-382d9d24"],{"11ac":function(t,e,n){},"3a5a":function(t,e,n){},"58d4":function(t,e,n){"use strict";n("11ac")},"652e":function(t,e,n){"use strict";n.r(e);var c=n("7a23"),s={class:"section"},r=Object(c["h"])("h1",{class:"title"}," Feed Page ",-1),a={class:"columns"},o={class:"column is-half"},i={class:"column"};function u(t,e,n,u,l,d){var b=Object(c["C"])("post-edit"),p=Object(c["C"])("post");return Object(c["v"])(),Object(c["g"])("div",s,[r,Object(c["h"])("div",a,[Object(c["h"])("div",o,[Object(c["k"])(b,{"new-post":t.newPost,onAdd:e[0]||(e[0]=function(t){return d.add()})},null,8,["new-post"])]),Object(c["h"])("div",i,[Object(c["k"])(p,{post:t.newPost},null,8,["post"])])])])}var l=n("1da1"),d=(n("a434"),n("96cf"),n("9c93")),b=n("3b42"),p=n("ae2c"),j={class:"card-content"},O={class:"content"},h={class:"field"},f=Object(c["h"])("label",{class:"label"},"Picture",-1),m={class:"control"},v={class:"field"},w=Object(c["h"])("label",{class:"label"},"Caption",-1),g={class:"control"},P=Object(c["h"])("footer",{class:"card-footer"},[Object(c["h"])("button",{class:"button is-link card-footer-item",type:"submit"},"Submit"),Object(c["h"])("button",{class:"button is-link is-light card-footer-item",type:"reset"},"Cancel")],-1);function k(t,e,n,s,r,a){return Object(c["v"])(),Object(c["g"])("form",{class:"card",onSubmit:e[2]||(e[2]=Object(c["N"])((function(e){return t.$emit("add")}),["prevent"]))},[Object(c["h"])("div",j,[Object(c["h"])("div",O,[Object(c["h"])("div",h,[f,Object(c["h"])("div",m,[Object(c["M"])(Object(c["h"])("input",{class:"input",type:"url",placeholder:"Input a URL to a picture","onUpdate:modelValue":e[0]||(e[0]=function(t){return r.post.src=t})},null,512),[[c["I"],r.post.src]])])]),Object(c["h"])("div",v,[w,Object(c["h"])("div",g,[Object(c["M"])(Object(c["h"])("textarea",{class:"textarea",placeholder:"Some text to explain this picture","onUpdate:modelValue":e[1]||(e[1]=function(t){return r.post.caption=t})},null,512),[[c["I"],r.post.caption]])])])])]),P],32)}var x={props:{newPost:Object},data:function(){return{post:this.newPost}},watch:{newPost:function(){this.post=this.newPost}}},R=n("6b0d"),F=n.n(R);const y=F()(x,[["render",k]]);var C=y,E=function(){return{user:b["a"].user,user_handle:b["a"].user.handle}},D={components:{Post:d["a"],PostEdit:C},data:function(){return{posts:[],newPost:E()}},mounted:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(p["c"])(b["a"].user.handle);case 2:t.posts=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{remove:function(t,e){var n=this;return Object(l["a"])(regeneratorRuntime.mark((function c(){var s;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return console.log({post:t}),c.next=3,Object(p["b"])(t._id);case 3:s=c.sent,s.deleted&&n.posts.splice(e,1);case 5:case"end":return c.stop()}}),c)})))()},add:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Adding new post at "+new Date),e.next=3,Object(p["a"])(t.newPost);case 3:n=e.sent,console.log({response:n}),n&&(t.posts.unshift(n),t.newPost=E());case 6:case"end":return e.stop()}}),e)})))()}}};n("58d4");const I=F()(D,[["render",u]]);e["default"]=I},"9c93":function(t,e,n){"use strict";var c=n("7a23"),s={class:"card"},r={class:"card-image"},a={class:"image is-4by3"},o=["src","alt"],i={class:"card-content"},u={class:"media"},l={class:"media-left"},d={class:"image is-48x48"},b=["src"],p={class:"media-content"},j={class:"title is-4"},O={class:"subtitle is-6"},h=["datetime"],f={class:"content"};function m(t,e,n,m,v,w){return Object(c["v"])(),Object(c["g"])("div",s,[Object(c["h"])("div",r,[Object(c["h"])("figure",a,[Object(c["h"])("img",{src:n.post.src,alt:n.post.alt},null,8,o),Object(c["h"])("button",{class:"delete",onClick:e[0]||(e[0]=function(e){return t.$emit("remove")})})])]),Object(c["h"])("div",i,[Object(c["h"])("div",u,[Object(c["h"])("div",l,[Object(c["h"])("figure",d,[Object(c["h"])("img",{src:n.post.user.pic,alt:"Placeholder image"},null,8,b)])]),Object(c["h"])("div",p,[Object(c["h"])("p",j,Object(c["F"])(n.post.user.firstName)+" "+Object(c["F"])(n.post.user.lastName),1),Object(c["h"])("p",O,[Object(c["j"])(Object(c["F"])(n.post.user.handle)+" ",1),Object(c["h"])("time",{datetime:n.post.time},Object(c["F"])(t.prettyDate),9,h)])])]),Object(c["h"])("div",f,Object(c["F"])(n.post.caption),1)])])}var v={props:{post:Object}},w=(n("d79f"),n("6b0d")),g=n.n(w);const P=g()(v,[["render",m]]);e["a"]=P},ae2c:function(t,e,n){"use strict";n.d(e,"d",(function(){return s})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o}));var c=n("e62d");function s(t){return Object(c["a"])("posts/wall/"+t)}function r(t){return Object(c["a"])("posts/feed/"+t)}function a(t){return Object(c["a"])("posts",t)}function o(t){return Object(c["a"])("posts/"+t,{},"DELETE")}},d79f:function(t,e,n){"use strict";n("3a5a")}}]);
//# sourceMappingURL=chunk-382d9d24.6f506a35.js.map