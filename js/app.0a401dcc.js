(function(e){function t(t){for(var r,o,i=t[0],c=t[1],u=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},s=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e28d9653","chunk-60e3c512":"5de85c81"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1,"chunk-60e3c512":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"8d57624f","chunk-60e3c512":"321e56f5"}[e]+".css",a=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[e],p.parentNode.removeChild(p),n(s)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/solid-vue-panes/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},1:function(e,t){},2:function(e,t){},"2d85":function(e,t,n){},4360:function(e,t,n){"use strict";var r=n("2b0e"),o=n("2f62"),a=(n("b0c0"),n("96cf"),n("1da1")),s=n("00e8"),i=n.n(s),c=n("4d8d"),u=n("6dc1"),l=window.solid,d=window.SolidFileClient;console.log("SFC",d);var p=new d(i.a),f=function(){return{webId:null,storage:"",folder:{},file:{},content:"",profileDoc:{},name:"",organization:"",role:"",bday:"",gender:"",photo:"",address:{},note:"",friends:[],progressMax:14,progressValue:0}},m={},g={setWebId:function(e,t){return Object(a["a"])(regeneratorRuntime.mark((function n(){var r,o,a,s,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(null==t){n.next=84;break}return console.log("TODO : use profileMixin"),e.commit("setWebId",t),e.commit("setProgress",1),n.next=6,l.data[t].storage;case 6:return r=n.sent,e.commit("setStorage","".concat(r)),e.commit("setProgress",2),n.t0=e,n.next=12,p.readFolder("".concat(r));case 12:return n.t1=n.sent,n.t0.commit.call(n.t0,"setFolder",n.t1),e.commit("setProgress",3),n.next=17,Object(c["a"])(t);case 17:return o=n.sent,e.commit("setProfileDoc",o),e.commit("setProgress",4),a=o.getSubject(t),e.commit("setProgress",5),n.t2=e,n.next=25,a.getString(u["b"].fn);case 25:return n.t3=n.sent,n.t2.commit.call(n.t2,"setName",n.t3),e.commit("setProgress",6),n.t4=e,n.next=31,a.getString("http://www.w3.org/2006/vcard/ns#organization-name");case 31:return n.t5=n.sent,n.t4.commit.call(n.t4,"setOrganization",n.t5),e.commit("setProgress",7),n.t6=e,n.next=37,a.getString(u["b"].role);case 37:return n.t7=n.sent,n.t6.commit.call(n.t6,"setRole",n.t7),e.commit("setProgress",8),n.t8=e,n.next=43,a.getString(u["b"].bday);case 43:return n.t9=n.sent,n.t8.commit.call(n.t8,"setBday",n.t9),e.commit("setProgress",9),n.t10=e,n.next=49,a.getString(u["b"].hasGender);case 49:return n.t11=n.sent,n.t10.commit.call(n.t10,"setGender",n.t11),e.commit("setProgress",10),n.t12=e,n.next=55,a.getString(u["b"].hasPhoto);case 55:return n.t13=n.sent,n.t12.commit.call(n.t12,"setPhoto",n.t13),e.commit("setProgress",11),n.t14=e,n.next=61,a.getString(u["b"].note);case 61:return n.t15=n.sent,n.t14.commit.call(n.t14,"setNote",n.t15),e.commit("setProgress",12),n.next=66,a.getRef(u["b"].hasAddress);case 66:return s=n.sent,console.log("Address Node ",s),i=o.getSubject(s),n.t16=e,n.next=72,i.getString(u["b"].locality);case 72:return n.t17=n.sent,n.t18={locality:n.t17},n.t16.commit.call(n.t16,"setAddress",n.t18),e.commit("setProgress",13),n.t19=e,n.next=79,a.getAllRefs(u["a"].knows);case 79:n.t20=n.sent,n.t19.commit.call(n.t19,"setFriends",n.t20),e.commit("setProgress",14),n.next=87;break;case 84:e.commit("setWebId",null),e.commit("setStorage",null),e.commit("setFolder",null);case 87:case"end":return n.stop()}}),n)})))()},updateFolder:function(e,t){return Object(a["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,p.readFolder(t);case 2:r=n.sent,e.commit("setFolder",r);case 4:case"end":return n.stop()}}),n)})))()},updateFile:function(e,t){return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit("setFile",t),n.t0=e,n.next=4,p.readFile(t.url);case 4:n.t1=n.sent,n.t0.commit.call(n.t0,"setContent",n.t1);case 6:case"end":return n.stop()}}),n)})))()},writeFile:function(e,t){var n=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,p.createFile(t.path+t.name,t.content,t.contentType).then((function(e){console.log(e.status)})).catch((function(e){return console.error("Error: ".concat(e))}));case 2:e.commit("setStorage",n.path);case 3:case"end":return r.stop()}}),r)})))()}},b={setWebId:function(e,t){e.webId=t},setStorage:function(e,t){e.storage=t},setFolder:function(e,t){e.folder=t},setFile:function(e,t){e.file=t},setContent:function(e,t){e.content=t},setProfileDoc:function(e,t){e.profileDoc=t},setName:function(e,t){e.name=t},setOrganization:function(e,t){e.organization=t},setRole:function(e,t){e.role=t},setBday:function(e,t){e.bday=t},setGender:function(e,t){e.gender=t},setPhoto:function(e,t){e.photo=t},setAddress:function(e,t){e.address=t},setNote:function(e,t){e.note=t},setProgress:function(e,t){e.progressValue=t},setFriends:function(e,t){console.log("Friends",t),e.friends=t}},v={namespaced:!0,state:f,getters:m,actions:g,mutations:b},h=function(){return{users:{"https://spoggy-test3.solid.community/profile/card#me":{pic:"boo"}},root:"",fileUrl:""}},_={},w={},k={setUser:function(e,t){console.log("User",t);var n=t.webId,r=t.pic;e.users[n]=r},setFileUrl:function(e,t){e.fileUrl=t},setRoot:function(e,t){e.root=t}},x={namespaced:!0,state:h,getters:_,actions:w,mutations:k},y=function(){return{socket:null,subscriptions:[]}},S={},j={},P={setSocket:function(e,t){e.socket=t}},O={namespaced:!0,state:y,getters:S,actions:j,mutations:P};r["default"].use(o["a"]);t["a"]=new o["a"].Store({state:{},mutations:{},actions:{},modules:{solid:v,chat:x,websocket:O}})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("NavBar"),e.progressValue<e.progressMax?n("b-progress",{attrs:{value:e.progressValue,max:e.progressMax,"show-progress":"",animated:""}}):e._e(),n("router-view")],1)},a=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[n("b-navbar-brand",{attrs:{to:"/"}},[e._v("Solid")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[n("b-nav-item",{attrs:{to:"/storage"}},[e._v("Storage")])]},proxy:!0}])},[n("b-dropdown-item",{attrs:{to:"/storage"}},[e._v("Browser + Editor")]),n("b-dropdown-item",{attrs:{to:"/browser"}},[e._v("Browser")]),n("b-dropdown-item",{attrs:{to:"/editor"}},[e._v("Editor")])],1),n("b-nav-item",{attrs:{to:"/profile"}},[e._v("Profile")]),n("b-nav-item",{attrs:{to:"/friends"}},[e._v("Friends")])],1),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[n("em",[e._v("Communication")])]},proxy:!0}])},[n("b-dropdown-item",{attrs:{to:"/inbox"}},[e._v("Inbox")]),n("b-dropdown-item",{attrs:{to:"/chat"}},[e._v("Chat")])],1),n("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[n("em",[e._v("User")])]},proxy:!0}])},[n("b-dropdown-item",{attrs:{to:"/profile"}},[e._v("Profile")]),n("b-dropdown-item",{attrs:{href:"#"}},[e._v("Sign Out")])],1),n("b-nav-item",[n("SolidLogin")],1),n("b-nav-item",{attrs:{href:"https://github.com/scenaristeur/solid-vue-panes/projects/1?add_cards_query=is%3Aopen",target:"_blank"}},[e._v("Contribute")]),n("b-nav-item-dropdown",{attrs:{text:"Lang",right:""}},[n("b-dropdown-item",{attrs:{href:"#"}},[e._v("EN")]),n("b-dropdown-item",{attrs:{href:"#"}},[e._v("ES")]),n("b-dropdown-item",{attrs:{href:"#"}},[e._v("RU")]),n("b-dropdown-item",{attrs:{href:"#"}},[e._v("FA")])],1),n("b-nav-item",{attrs:{to:"/about"}},[e._v("About")])],1)],1)],1)],1)},i=[],c=n("6bae"),u={name:"NavBar",props:{msg:String},components:{SolidLogin:c["default"]}},l=u,d=(n("dc85"),n("2877")),p=Object(d["a"])(l,s,i,!1,null,"4a7bf89a",null),f=p.exports,m={name:"App",components:{NavBar:f},computed:{progressValue:function(){return this.$store.state.solid.progressValue},progressMax:function(){return this.$store.state.solid.progressMax}}},g=m,b=(n("034f"),Object(d["a"])(g,o,a,!1,null,null,null)),v=b.exports,h=n("9483");Object(h["a"])("".concat("/solid-vue-panes/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var _=n("a18c"),w=n("4360"),k=n("5f5b"),x=n("b1e0");n("f9e3"),n("2dd8");r["default"].config.productionTip=!1,r["default"].use(k["a"]),r["default"].use(x["a"]);var y=window.solid;console.log("SOLID",y),new r["default"]({router:_["a"],store:w["a"],solid:y,render:function(e){return e(v)}}).$mount("#app")},"6bae":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"solid-login"},[null==e.webId?n("b-button",{attrs:{variant:"success"},on:{click:e.login}},[e._v("Login")]):n("b-button",{attrs:{variant:"danger"},on:{click:e.logout}},[e._v("Logout")])],1)},o=[],a=(n("96cf"),n("1da1")),s=n("4360"),i=n("1947"),c=(n("f9e3"),n("2dd8"),n("00e8")),u=n.n(c),l={store:s["a"],name:"SolidLogin",props:{doc:[Boolean,String]},components:{BButton:i["a"]},data:function(){return{webId:null,storage:""}},created:function(){var e=this;u.a.trackSession(function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n?(e.webId=n.webId,console.log("The user is ".concat(n.webId)),e.$store.dispatch("solid/setWebId",e.webId)):(e.webId=null,console.log("The user is not logged in",e.webId),e.$store.dispatch("solid/setWebId",e.webId),localStorage.removeItem("solid-auth-client"));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},methods:{login:function(){console.log("login"),this.popupLogin()},logout:function(){u.a.logout()},popupLogin:function(){return Object(a["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.a.currentSession();case 2:if(t=e.sent,n="./dist-popup/popup.html",t){e.next=10;break}return e.next=7,u.a.popupLogin({popupUri:n});case 7:t=e.sent,e.next=11;break;case 10:console.log(t);case 11:case"end":return e.stop()}}),e)})))()}}},d=l,p=n("2877"),f=Object(p["a"])(d,r,o,!1,null,null,null);t["default"]=f.exports},"6dac":function(e,t,n){"use strict";var r=n("2d85"),o=n.n(r);o.a},"78c6":function(e,t,n){},"85ec":function(e,t,n){},a18c:function(e,t,n){"use strict";n("d3b7");var r=n("2b0e"),o=n("8c4f"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Solid Pod on VueJs"}})],1)},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),n("p",[e._v(" All you need to manage your Solid Pod in the pocket,"),n("br"),null==e.webId?n("SolidLogin",{staticClass:"m-3"}):e._e()],1),n("h3",[e._v("Working Panes")]),n("ul",[n("li",[e._v("Login")]),n("li",[n("router-link",{attrs:{to:"/storage"}},[e._v("Storage (Browser + Editor)")])],1),n("li",[n("router-link",{attrs:{to:"/browser"}},[e._v("Browser")])],1),n("li",[n("router-link",{attrs:{to:"/editor"}},[e._v("Editor")])],1),n("li",[n("router-link",{attrs:{to:"/profile"}},[e._v("in progress : Profile")])],1),n("li",[n("router-link",{attrs:{to:"/communication"}},[e._v("todo : Communication (Chat + inbox)")])],1),n("li",[n("router-link",{attrs:{to:"/projets"}},[e._v("todo : Projets ( tensions, organizations)")])],1)]),n("h3",[e._v("Solid Libraries Used")]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"#",target:"_blank",rel:"noopener"}},[e._v("solid-auth-client")])]),n("li",[n("a",{attrs:{href:"#",target:"_blank",rel:"noopener"}},[e._v("solid-file-client")])]),n("li",[n("a",{attrs:{href:"#",target:"_blank",rel:"noopener"}},[e._v("ldflex-query")])]),n("li",[n("a",{attrs:{href:"#",target:"_blank",rel:"noopener"}},[e._v("tripledoc")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[e._v("pwa")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha",target:"_blank",rel:"noopener"}},[e._v("unit-mocha")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],u={name:"HelloWorld",props:{msg:String},components:{SolidLogin:function(){return Promise.resolve().then(n.bind(null,"6bae"))}},computed:{webId:function(){return this.$store.state.solid.webId}}},l=u,d=(n("6dac"),n("2877")),p=Object(d["a"])(l,i,c,!1,null,"35a95222",null),f=p.exports,m={name:"Home",components:{HelloWorld:f}},g=m,b=Object(d["a"])(g,a,s,!1,null,null,null),v=b.exports;r["default"].use(o["a"]);var h=[{path:"/",name:"Home",component:v},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/profile",name:"Profile",component:function(){return n.e("about").then(n.bind(null,"c66d"))}},{path:"/general",name:"General",component:function(){return n.e("about").then(n.bind(null,"2202"))}},{path:"/friends",name:"Friends",component:function(){return n.e("about").then(n.bind(null,"6c40"))}},{path:"/friends/:webId",name:"FriendsW",component:function(){return n.e("about").then(n.bind(null,"6c40"))}},{path:"/storage",name:"Storage",component:function(){return n.e("about").then(n.bind(null,"1038"))}},{path:"/communication",name:"Communication",component:function(){return n.e("about").then(n.bind(null,"20fd"))}},{path:"/chat",name:"Chat",component:function(){return n.e("about").then(n.bind(null,"293a"))}},{path:"/inbox",name:"Inbox",component:function(){return n.e("about").then(n.bind(null,"e529"))}},{path:"/editor",name:"Editor",component:function(){return n.e("about").then(n.bind(null,"527c"))}},{path:"/browser",name:"Browser",component:function(){return n.e("about").then(n.bind(null,"a36b"))}}],_=new o["a"]({routes:h});t["a"]=_},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},dc85:function(e,t,n){"use strict";var r=n("78c6"),o=n.n(r);o.a}});
//# sourceMappingURL=app.0a401dcc.js.map