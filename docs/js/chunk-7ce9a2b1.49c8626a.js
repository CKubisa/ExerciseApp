(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ce9a2b1"],{"002f":function(t,e,c){"use strict";c("12d3")},"12d3":function(t,e,c){},"3a5a":function(t,e,c){},"652e":function(t,e,c){"use strict";c.r(e);var n=c("7a23"),s={class:"section"},r=Object(n["h"])("h1",{class:"title"}," Make Post ",-1),a={class:"columns"},o={class:"column is-half"},i={class:"column"};function u(t,e,c,u,l,d){var b=Object(n["C"])("post-edit"),p=Object(n["C"])("post");return Object(n["v"])(),Object(n["g"])("div",s,[r,Object(n["h"])("div",a,[Object(n["h"])("div",o,[Object(n["k"])(b,{"new-post":t.newPost,onAdd:e[0]||(e[0]=function(t){return d.add()})},null,8,["new-post"])]),Object(n["h"])("div",i,[Object(n["k"])(p,{post:t.newPost},null,8,["post"])])])])}var l=c("1da1"),d=(c("a434"),c("96cf"),c("9c93")),b=c("3b42"),p=c("ae2c"),j={class:"card-content"},O={class:"content"},h={class:"field"},f=Object(n["h"])("label",{class:"label"},"Picture",-1),m={class:"control"},v={class:"field"},w=Object(n["h"])("label",{class:"label"},"Caption",-1),g={class:"control"},P=Object(n["h"])("footer",{class:"card-footer"},[Object(n["h"])("button",{class:"button is-link card-footer-item",type:"submit"},"Submit"),Object(n["h"])("button",{class:"button is-link is-light card-footer-item",type:"reset"},"Cancel")],-1);function k(t,e,c,s,r,a){return Object(n["v"])(),Object(n["g"])("form",{class:"card",onSubmit:e[2]||(e[2]=Object(n["N"])((function(e){return t.$emit("add")}),["prevent"]))},[Object(n["h"])("div",j,[Object(n["h"])("div",O,[Object(n["h"])("div",h,[f,Object(n["h"])("div",m,[Object(n["M"])(Object(n["h"])("input",{class:"input",type:"url",placeholder:"Input a URL to a picture","onUpdate:modelValue":e[0]||(e[0]=function(t){return r.post.src=t})},null,512),[[n["I"],r.post.src]])])]),Object(n["h"])("div",v,[w,Object(n["h"])("div",g,[Object(n["M"])(Object(n["h"])("textarea",{class:"textarea",placeholder:"Some text to explain this picture","onUpdate:modelValue":e[1]||(e[1]=function(t){return r.post.caption=t})},null,512),[[n["I"],r.post.caption]])])])])]),P],32)}var x={props:{newPost:Object},data:function(){return{post:this.newPost}},watch:{newPost:function(){this.post=this.newPost}}},R=c("6b0d"),y=c.n(R);const C=y()(x,[["render",k]]);var F=C,E=function(){return{user:b["a"].user,user_handle:b["a"].user.handle}},D={components:{Post:d["a"],PostEdit:F},data:function(){return{posts:[],newPost:E()}},mounted:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(p["c"])(b["a"].user.handle);case 2:t.posts=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{remove:function(t,e){var c=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){var s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log({post:t}),n.next=3,Object(p["b"])(t._id);case 3:s=n.sent,s.deleted&&c.posts.splice(e,1);case 5:case"end":return n.stop()}}),n)})))()},add:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Adding new post at "+new Date),e.next=3,Object(p["a"])(t.newPost);case 3:c=e.sent,console.log({response:c}),c&&(t.posts.unshift(c),t.newPost=E());case 6:case"end":return e.stop()}}),e)})))()}}};c("002f");const I=y()(D,[["render",u]]);e["default"]=I},"9c93":function(t,e,c){"use strict";var n=c("7a23"),s={class:"card"},r={class:"card-image"},a={class:"image is-4by3"},o=["src","alt"],i={class:"card-content"},u={class:"media"},l={class:"media-left"},d={class:"image is-48x48"},b=["src"],p={class:"media-content"},j={class:"title is-4"},O={class:"subtitle is-6"},h=["datetime"],f={class:"content"};function m(t,e,c,m,v,w){return Object(n["v"])(),Object(n["g"])("div",s,[Object(n["h"])("div",r,[Object(n["h"])("figure",a,[Object(n["h"])("img",{src:c.post.src,alt:c.post.alt},null,8,o),Object(n["h"])("button",{class:"delete",onClick:e[0]||(e[0]=function(e){return t.$emit("remove")})})])]),Object(n["h"])("div",i,[Object(n["h"])("div",u,[Object(n["h"])("div",l,[Object(n["h"])("figure",d,[Object(n["h"])("img",{src:c.post.user.pic,alt:"Placeholder image"},null,8,b)])]),Object(n["h"])("div",p,[Object(n["h"])("p",j,Object(n["F"])(c.post.user.firstName)+" "+Object(n["F"])(c.post.user.lastName),1),Object(n["h"])("p",O,[Object(n["j"])(Object(n["F"])(c.post.user.handle)+" ",1),Object(n["h"])("time",{datetime:c.post.time},Object(n["F"])(t.prettyDate),9,h)])])]),Object(n["h"])("div",f,Object(n["F"])(c.post.caption),1)])])}var v={props:{post:Object}},w=(c("d79f"),c("6b0d")),g=c.n(w);const P=g()(v,[["render",m]]);e["a"]=P},ae2c:function(t,e,c){"use strict";c.d(e,"c",(function(){return s})),c.d(e,"a",(function(){return r})),c.d(e,"b",(function(){return a}));var n=c("e62d");function s(t){return Object(n["a"])("posts/feed/"+t)}function r(t){return Object(n["a"])("posts",t)}function a(t){return Object(n["a"])("posts/"+t,{},"DELETE")}},d79f:function(t,e,c){"use strict";c("3a5a")}}]);
//# sourceMappingURL=chunk-7ce9a2b1.49c8626a.js.map