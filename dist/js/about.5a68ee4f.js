(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0871":function(t,e,n){"use strict";var r=n("79b6"),o=n.n(r);o.a},1038:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"storage"},[null!=t.webId?n("div",{staticClass:"row"},[n("Browser",{staticClass:"col-md-6"}),n("Editor",{staticClass:"col-md-6"})],1):n("div",[n("SolidLogin")],1)])},o=[],a=(n("d3b7"),n("96cf"),n("1da1")),s={name:"Storage",components:{Browser:function(){return Promise.resolve().then(n.bind(null,"a36b"))},Editor:function(){return Promise.resolve().then(n.bind(null,"527c"))},SolidLogin:function(){return Promise.resolve().then(n.bind(null,"6bae"))}},data:function(){return{}},created:function(){return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{},computed:{webId:function(){return this.$store.state.solid.webId},storage:function(){return this.$store.state.solid.storage},folder:function(){return this.$store.state.solid.folder}},watch:{}},i=s,l=n("2877"),c=Object(l["a"])(i,r,o,!1,null,null,null);e["default"]=c.exports},1276:function(t,e,n){"use strict";var r=n("d784"),o=n("44e7"),a=n("825a"),s=n("1d80"),i=n("4840"),l=n("8aa5"),c=n("50c4"),u=n("14c3"),d=n("9263"),f=n("d039"),h=[].push,p=Math.min,b=4294967295,m=!f((function(){return!RegExp(b,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(s(this)),a=void 0===n?b:n>>>0;if(0===a)return[];if(void 0===t)return[r];if(!o(t))return e.call(r,t,a);var i,l,c,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,m=new RegExp(t.source,f+"g");while(i=d.call(m,r)){if(l=m.lastIndex,l>p&&(u.push(r.slice(p,i.index)),i.length>1&&i.index<r.length&&h.apply(u,i.slice(1)),c=i[0].length,p=l,u.length>=a))break;m.lastIndex===i.index&&m.lastIndex++}return p===r.length?!c&&m.test("")||u.push(""):u.push(r.slice(p)),u.length>a?u.slice(0,a):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var o=s(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,o,n):r.call(String(o),e,n)},function(t,o){var s=n(r,t,this,o,r!==e);if(s.done)return s.value;var d=a(t),f=String(this),h=i(d,RegExp),g=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(m?"y":"g"),x=new h(m?d:"^(?:"+d.source+")",v),w=void 0===o?b:o>>>0;if(0===w)return[];if(0===f.length)return null===u(x,f)?[f]:[];var k=0,_=0,y=[];while(_<f.length){x.lastIndex=m?_:0;var S,$=u(x,m?f:f.slice(_));if(null===$||(S=p(c(x.lastIndex+(m?0:_)),f.length))===k)_=l(f,_,g);else{if(y.push(f.slice(k,_)),y.length===w)return y;for(var C=1;C<=$.length-1;C++)if(y.push($[C]),y.length===w)return y;_=k=S}}return y.push(f.slice(k)),y}]}),!m)},"14c3":function(t,e,n){var r=n("c6b6"),o=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},"159b":function(t,e,n){var r=n("da84"),o=n("fdbc"),a=n("17c2"),s=n("9112");for(var i in o){var l=r[i],c=l&&l.prototype;if(c&&c.forEach!==a)try{s(c,"forEach",a)}catch(u){c.forEach=a}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,o=n("a640"),a=n("ae40"),s=o("forEach"),i=a("forEach");t.exports=s&&i?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1a22":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"parle"},[t._v(" PARLE "),n("BreadCrumb"),n("SolidChatList"),n("SolidChatSend")],1)},o=[],a=(n("8a79"),n("96cf"),n("1da1")),s=n("4360"),i={created:function(){console.log("hello from chatmixin")},methods:{fixRoot:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("root",t),!t.endsWith("/")&&(t+="/"),!t.endsWith("/parle/")&&(t+="parle/"),console.log("Root root",t),e.$store.commit("chat/setRoot",t);case 5:case"end":return n.stop()}}),n)})))()}}},l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"breadcrumb"},[n("b-breadcrumb",{attrs:{items:t.items}})],1)},c=[],u=(n("4160"),n("ac1f"),n("1276"),n("159b"),{name:"BreadCrumb",data:function(){return{}},computed:{root:function(){return this.$store.state.chat.root},path:function(){return this.$store.state.chat.path},fileUrl:function(){return this.$store.state.chat.fileUrl},items:function(){var t=[],e="";t.push({text:"root",href:"/"});var n=this.$store.state.chat.fileUrl.split(this.root)[1];if(void 0!=n&&n.length>1){var r=n.split("/");console.log(r),r.forEach((function(n){e+=n+"/",t.push({text:n,href:"?channel="+e,active:!1})}))}return t}}}),d=u,f=(n("636f"),n("2877")),h=Object(f["a"])(d,l,c,!1,null,"3fd38394",null),p=h.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"solid-chat-send"},[null!=t.webId?n("b-input-group",{staticClass:"mt-3 input"},[n("b-form-input",{on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.send(e)}},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),n("b-input-group-append",[n("b-button",{attrs:{variant:"warning"},on:{click:t.send}},[t._v("Send")])],1)],1):n("SolidLogin",{staticClass:"mt-3 input"})],1)},m=[],g=n("4d8d"),v=n("6dc1"),x=n("6bae"),w={store:s["a"],name:"SolidChatSend",components:{SolidLogin:x["default"]},data:function(){return{message:""}},methods:{send:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,r,o,a,s,i,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.$store.state.solid.webId,r=t.$store.state.chat.fileUrl,console.log(r),!(t.message.length>0&&null!=n)){e.next=22;break}return console.log(t.message),o=new Date,a="Msg"+o.getTime(),s=o.toISOString(),console.log("WEBID",t.$store.state.solid.webId,t.$store.state.count),e.next=11,Object(g["a"])(r);case 11:return i=e.sent,console.log(i),l=i.addSubject({identifier:a}),l.addLiteral(v["d"].content,t.message),l.addLiteral(v["a"].created,s),l.addNodeRef(v["b"].maker,n),e.next=19,i.save();case 19:t.message="",e.next=23;break;case 22:alert("You must login before posting ;-)");case 23:case"end":return e.stop()}}),e)})))()}},computed:{webId:function(){return this.$store.state.solid.webId}}},k=w,_=(n("3afc"),Object(f["a"])(k,b,m,!1,null,"a3eddc7a",null)),y=_.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"solid-chat-list"},[n("b-input-group",{staticClass:"mb-2"},[n("b-form-datepicker",{attrs:{id:"example-datepicker",min:"2020-08-01",max:t.max},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),n("b-input-group-append",[n("b-button",{on:{click:t.sort}},[t._v("Sort")])],1)],1),n("b-list-group",t._l(t.messages,(function(e){return n("b-list-group-item",{key:e.id,staticClass:"flex-column align-items-start"},[n("div",{staticClass:"d-flex w-100 justify-content-between"},[n("div",{staticClass:"mb-1"},[null!=e.maker?n("a",{attrs:{href:e.maker,target:"_blank"}},[n("b-icon",{attrs:{icon:"person-fill"}}),t._v(t._s(e.maker.split("/").slice(2,3)[0])+" ")],1):n("b-icon",{attrs:{icon:"person-fill"}})],1),n("small",{staticClass:"text-muted"},[t._v(" "+t._s(e.created)+" ")])]),n("p",{staticClass:"mb-1"},[t._v(" "+t._s(e.content)+" ")]),n("div",{staticClass:"text-muted"},[e.parent?n("div",[t._v(" This "),n("a",{attrs:{href:e.id.split("#")[0],target:"_blank"}},[t._v(t._s(e.id.split("/").slice(-2,-1)[0]))]),t._v(" channel as been created from "),n("b-button",{staticClass:"m-1 btn-sm",attrs:{pill:!0,variant:"outline-info"},on:{click:function(n){return t.bascule(e.parent)}}},[t._v(" "+t._s(e.parent.split("/").slice(-2,-1)[0])+" ")])],1):t._e(),null!=t.webId?n("b-button",{staticClass:"btn-sm",attrs:{pill:!0,variant:"outline-info"},on:{click:function(n){return t.new_sub(e.id)}}},[t._v("Reply")]):n("span",[t._v("Login to reply")]),t._l(e.parts,(function(e){return n("b-button",{key:e,staticClass:"m-1 btn-sm",attrs:{pill:!0,variant:"info"},on:{click:function(n){return t.bascule(e)}}},[t._v(" "+t._s(e.split("/").slice(-2,-1)[0])+" ")])}))],2)])})),1),n("div",[t.messages.length>5?n("b-input-group",{staticClass:"mb-2"},[n("b-form-datepicker",{attrs:{id:"example-datepicker2",min:"2020-08-01",max:t.max},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),n("b-input-group-append",[n("b-button",{on:{click:t.sort}},[t._v("Sort")])],1)],1):t._e()],1),n("br"),n("br"),n("div",{staticClass:"m-3"},[n("a",{attrs:{href:"https://scenaristeur.github.io/spoggy-simple/?source="+t.file,target:"_blank"}},[t._v("Visualization")])]),n("br"),n("br"),n("br")],1)},$=[],C=(n("a15b"),n("baa5"),n("fb6a"),{created:function(){},methods:{createWebSocket:function(){var t=this.$store.state.chat.root,e=t.split("//")[1],n=e.split("/")[0]+"/",r=new WebSocket("wss://"+n,["solid.0.1.0"]);this.$store.commit("websocket/setSocket",r)},addSubscription:function(t){this.$store.state.websocket.socket.send("sub "+t)}}}),E=(n("4de4"),n("c975"),n("00e8")),R=n.n(E),O={created:function(){this.fc=new SolidFileClient(R.a)},methods:{prepareToday:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new Date,t.$store.commit("chat/setDataDate",n),r=[n.getFullYear(),("0"+(n.getMonth()+1)).slice(-2),("0"+n.getDate()).slice(-2)].join("-")+".ttl",o=t.$store.state.chat.root+r,console.log(o),e.next=7,t.create(o);case 7:t.$store.commit("chat/setFileUrl",o);case 8:case"end":return e.stop()}}),e)})))()},create:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.fc.itemExists(t);case 2:if(n.sent){n.next=7;break}return n.next=5,e.fc.postFile(t,"","text/turtle").then((function(t){console.log("File Created",t)})).catch((function(t){return console.error("Error: ".concat(t))}));case 5:n.next=8;break;case 7:console.log("File exist",t);case 8:case"end":return n.stop()}}),n)})))()},getMessages:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var r,o,a,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=[],n.next=3,e.fc.itemExists(t);case 3:if(n.sent){n.next=8;break}return n.next=6,e.fc.postFile(t,"","text/turtle").then((function(t){console.log("File Created",t)})).catch((function(t){return console.error("Error: ".concat(t))}));case 6:n.next=9;break;case 8:console.log("File exist",t);case 9:return void 0!=e.$store.state.websocket.socket&&e.$store.state.websocket.socket.send("sub "+t),n.next=12,Object(g["a"])(t);case 12:o=n.sent,a=o.findSubjects(),a=a.filter(e.onlyUnique),s=[],a.forEach((function(t){var e=t.getString(v["a"].created),n=t.getLiteral(v["d"].content),r=t.getNodeRef(v["b"].maker),o=t.getAllNodeRefs(v["c"].hasPart),a=t.getNodeRef(v["c"].isPartOf),i={id:t.asRef(),created:new Date(e).toLocaleTimeString(),content:n,maker:r,parts:o,parent:a};s.push(i)})),r=s.reverse(),console.log("Messages",r),e.$store.commit("chat/setMessages",r);case 20:case"end":return n.stop()}}),n)})))()},onlyUnique:function(t,e,n){return n.indexOf(t)===e}}},I={store:s["a"],name:"SolidChatList",props:{msg:String},mixins:[O,i,C],data:function(){return{date:"",part:""}},created:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new Date,t.date=t.formatDate(n),t.max=t.date,t.path=t.$store.state.chat.root,console.log("ROOT FROM STORE",t.$store.state.chat.root),e.next=7,t.createWebSocket();case 7:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.$store.state.websocket.socket,console.log("SOCKET FROM STORE",n),n.onmessage=function(t){t.data&&"pub"===t.data.slice(0,3)&&(console.log("updated",t.data),this.getMessages(t.data.substring(4)))}.bind(t);case 3:case"end":return e.stop()}}),e)})))()},methods:{bascule:function(t){console.log("Part",t),this.$store.commit("chat/setFileUrl",t),this.path=t.substr(0,t.lastIndexOf("/")+1),console.log(this.path),void 0!=this.$store.state.websocket.socket&&this.$store.state.websocket.socket.send("sub "+t),this.makeToast("We have switched to",t,"info"),this.getMessages(t)},sort:function(){this.messages.reverse()},formatDate:function(t){return[t.getFullYear(),("0"+(t.getMonth()+1)).slice(-2),("0"+t.getDate()).slice(-2)].join("-")},new_sub:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var r,o,a,s,i,l,c,u,d,f;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(console.log(t),r=prompt("Create a sub-channel from "+t),!(null!=r&&r.length>0)){n.next=42;break}return console.log(r),r=r.split(" ").join("_"),o=t.substr(0,t.lastIndexOf("/")+1),a=t.split("#").pop(),console.log("Parent",o,a),s=o+r+"/",i=e.date+".ttl",l=s+i,console.log("Child",s,i),e.$store.commit("chat/setFileUrl",l),void 0!=e.$store.state.websocket.socket&&e.$store.state.websocket.socket.send("sub "+l),n.next=16,e.fc.itemExists(l);case 16:if(n.sent){n.next=21;break}return n.next=19,e.fc.postFile(l,"","text/turtle").then((function(t){console.log("File Created",t)})).catch((function(t){return console.error("Error: ".concat(t))}));case 19:n.next=22;break;case 21:console.log("File exist",l);case 22:return n.next=24,Object(g["a"])(l);case 24:return c=n.sent,c.addSubject,u=c.addSubject({identifier:"this"}),u.addLiteral(v["a"].created,e.date),u.addNodeRef(v["c"].isPartOf,t),u.addNodeRef(v["b"].maker,e.$store.state.solid.webId),n.next=32,c.save();case 32:return n.next=34,Object(g["a"])(t);case 34:return d=n.sent,f=d.getSubject(t),f.addRef(v["c"].hasPart,l),n.next=39,d.save();case 39:e.bascule(l),n.next=43;break;case 42:alert("You must provide a name to create a sub Channel");case 43:case"end":return n.stop()}}),n)})))()},makeToast:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(e,{title:t,variant:n,solid:!0})}},computed:{file:function(){var t=this.path+this.date+".ttl";return this.$store.commit("chat/setFileUrl",t),void 0!=this.$store.state.websocket.socket&&1==this.$store.state.websocket.socket.readyState&&this.$store.state.websocket.socket.send("sub "+t),this.getMessages(t),t},webId:function(){return this.$store.state.solid.webId},messages:function(){return this.$store.state.chat.messages}}},L=I,j=Object(f["a"])(L,S,$,!1,null,null,null),T=j.exports,A={store:s["a"],name:"Parle",mixins:[i],components:{SolidChatSend:y,SolidChatList:T,BreadCrumb:p},created:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:void 0==t.root&&(t.root="https://parle.solid.community/public/"),console.log("root",t.root),!t.root.endsWith("/")&&(t.root=t.root+"/"),!t.root.endsWith("/parle/")&&(t.root=t.root+"parle/"),console.log("Root root",t.root),t.$store.commit("chat/setRoot",t.root),console.log("ROOT FROM STORE",t.$store.state.chat.root);case 7:case"end":return e.stop()}}),e)})))()}},P=A,F=Object(f["a"])(P,r,o,!1,null,null,null);e["default"]=F.exports},"1dde":function(t,e,n){var r=n("d039"),o=n("b622"),a=n("2d00"),s=o("species");t.exports=function(t){return a>=51||!r((function(){var e=[],n=e.constructor={};return n[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"20fd":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"communication"},[n("Parle",{attrs:{root:"https://parle.solid.community/public/"}}),n("Inbox"),n("Chat")],1)},o=[],a=n("e529"),s=n("293a"),i=n("1a22"),l={name:"Communication",components:{Inbox:a["default"],Chat:s["default"],Parle:i["default"]}},c=l,u=n("2877"),d=Object(u["a"])(c,r,o,!1,null,null,null);e["default"]=d.exports},2202:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"general"},[null!=t.webId?n("div",{staticClass:"container"},[n("h4",[t._v(t._s(t.webId))]),n("img",{staticClass:"m-3",attrs:{width:"80",height:"80",src:t.photo,rounded:"circle",alt:" "}}),n("br"),n("div",[n("b-form-group",{attrs:{"label-cols-sm":"3",label:"Name:","label-align-sm":"right","label-for":"name"}},[n("b-form-input",{attrs:{id:"name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("b-form-group",{attrs:{"label-cols-sm":"3",label:"Organization:","label-align-sm":"right","label-for":"organization"}},[n("b-form-input",{attrs:{id:"organization"},model:{value:t.organization,callback:function(e){t.organization=e},expression:"organization"}})],1),n("b-form-group",{attrs:{"label-cols-sm":"3",label:"Role:","label-align-sm":"right","label-for":"role"}},[n("b-form-input",{attrs:{id:"role"},model:{value:t.role,callback:function(e){t.role=e},expression:"role"}})],1),n("b-form-group",{attrs:{"label-cols-sm":"3",label:"Birthday:","label-align-sm":"right","label-for":"bday"}},[n("b-form-input",{attrs:{id:"bday",type:"date"},model:{value:t.bday,callback:function(e){t.bday=e},expression:"bday"}})],1),n("b-form-group",{attrs:{"label-cols-sm":"3",label:"Gender:","label-align-sm":"right","label-for":"gender"}},[n("b-form-input",{attrs:{id:"gender"},model:{value:t.gender,callback:function(e){t.gender=e},expression:"gender"}})],1),n("b-form-group",{attrs:{"label-cols-sm":"3",label:"Address Locality:","label-align-sm":"right","label-for":"address"}},[n("b-form-input",{attrs:{id:"address"},model:{value:t.address.locality,callback:function(e){t.$set(t.address,"locality",e)},expression:"address.locality"}})],1),n("b-form-group",{attrs:{"label-cols-sm":"3",label:"Note:","label-align-sm":"right","label-for":"note"}},[n("b-form-input",{attrs:{id:"note"},model:{value:t.note,callback:function(e){t.note=e},expression:"note"}})],1)],1)]):n("div",[n("SolidLogin")],1)])},o=[],a=(n("b0c0"),n("d3b7"),{name:"General",components:{SolidLogin:function(){return Promise.resolve().then(n.bind(null,"6bae"))}},data:function(){return{}},computed:{webId:function(){return this.$store.state.solid.webId},profileDoc:function(){return this.$store.state.solid.profileDoc},name:function(){return this.$store.state.solid.name},organization:function(){return this.$store.state.solid.organization},role:function(){return this.$store.state.solid.role},bday:function(){return this.$store.state.solid.bday},gender:function(){return this.$store.state.solid.gender},photo:function(){return this.$store.state.solid.photo},address:function(){return this.$store.state.solid.address},note:function(){return this.$store.state.solid.note}}}),s=a,i=n("2877"),l=Object(i["a"])(s,r,o,!1,null,null,null);e["default"]=l.exports},"293a":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat"},[n("h1",[t._v("This is an chat page")])])}],a={name:"Chat",components:{}},s=a,i=n("2877"),l=Object(i["a"])(s,r,o,!1,null,null,null);e["default"]=l.exports},"3afc":function(t,e,n){"use strict";var r=n("d4c6"),o=n.n(r);o.a},4160:function(t,e,n){"use strict";var r=n("23e7"),o=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},4402:function(t,e,n){},"44e7":function(t,e,n){var r=n("861d"),o=n("c6b6"),a=n("b622"),s=a("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==o(t))}},"4da1":function(t,e,n){"use strict";var r=n("ec87"),o=n.n(r);o.a},"4de4":function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").filter,a=n("1dde"),s=n("ae40"),i=a("filter"),l=s("filter");r({target:"Array",proto:!0,forced:!i||!l},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"527c":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor"},[null!=t.webId?n("div",[n("div",[n("b-button-toolbar",{attrs:{"aria-label":"Toolbar with button groups and dropdown menu"}},[n("b-button-group",{staticClass:"mr-1",attrs:{size:"sm"}},[n("b-button",{attrs:{size:"sm"},on:{click:t.clean}},[t._v("New")]),n("b-button",{attrs:{size:"sm",disabled:""}},[t._v("Edit")]),n("b-button",{attrs:{size:"sm",disabled:""}},[t._v("Undo")])],1),n("b-dropdown",{staticClass:"mr-1",attrs:{size:"sm",right:"",text:"menu"}},[n("b-dropdown-item",{attrs:{size:"sm"}},[t._v("Item 1")]),n("b-dropdown-item",{attrs:{size:"sm"}},[t._v("Item 2")]),n("b-dropdown-item",{attrs:{size:"sm"}},[t._v("Item 3")])],1),n("b-button-group",{staticClass:"mr-1",attrs:{size:"sm"}},[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],attrs:{size:"sm",variant:"warning"}},[t._v("Save")]),n("b-modal",{attrs:{id:"modal-1",title:"Save"},on:{show:t.fill,ok:t.save}},[n("b-form-group",{attrs:{"label-cols-sm":"3",label:"Path:","label-align-sm":"right","label-for":"path"}},[n("b-form-input",{attrs:{id:"path"},model:{value:t.path,callback:function(e){t.path=e},expression:"path"}})],1),n("b-form-group",{attrs:{"label-cols-sm":"3",label:"Filename:","label-align-sm":"right","label-for":"name"}},[n("b-form-input",{attrs:{id:"name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("b-form-group",{attrs:{"label-cols-sm":"3",label:"Mimetype:","label-align-sm":"right",placeholder:"text/plain ? text/turtle ? application/json ?","label-for":"type"}},[n("b-form-input",{attrs:{id:"type"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1)],1)],1)],1)],1),n("div",[n("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter something...",rows:"3","max-rows":"15"},on:{change:t.change,input:t.input},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)]):n("div",[n("SolidLogin")],1)])},o=[],a=(n("b0c0"),n("d3b7"),n("8a79"),n("96cf"),n("1da1")),s={name:"Browser",components:{SolidLogin:function(){return Promise.resolve().then(n.bind(null,"6bae"))}},data:function(){return{name:"",type:"",path:""}},created:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.name="new_file.txt",t.type="text/plain",t.path=t.storage;case 3:case"end":return e.stop()}}),e)})))()},methods:{clean:function(){this.text="";var t={name:"new_file.txt",type:"text/plain",parent:this.folder.url||this.storage};this.$store.commit("solid/setFile",t),this.$store.commit("solid/setContent","")},change:function(t){console.log("change",t)},input:function(t){console.log("input",t)},fill:function(){this.name=this.file.name,this.type=this.file.type,this.path=this.file.parent},save:function(){console.log("text",this.text),this.path=this.path.endsWith("/")?this.path:this.path+"/",console.log("File",this.type,this.path,this.name);var t={path:this.path,name:this.name,content:this.text,contentType:this.type};this.$store.dispatch("solid/writeFile",t)}},computed:{webId:function(){return this.$store.state.solid.webId},storage:function(){return this.$store.state.solid.storage},folder:function(){return this.$store.state.solid.folder},file:function(){return this.$store.state.solid.file},text:{get:function(){return this.$store.state.solid.content},set:function(t){return this.$store.commit("solid/setContent",t)}}},watch:{}},i=s,l=(n("0871"),n("2877")),c=Object(l["a"])(i,r,o,!1,null,null,null);e["default"]=c.exports},"5a34":function(t,e,n){var r=n("44e7");t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},"636f":function(t,e,n){"use strict";var r=n("4402"),o=n.n(r);o.a},6547:function(t,e,n){var r=n("a691"),o=n("1d80"),a=function(t){return function(e,n){var a,s,i=String(o(e)),l=r(n),c=i.length;return l<0||l>=c?t?"":void 0:(a=i.charCodeAt(l),a<55296||a>56319||l+1===c||(s=i.charCodeAt(l+1))<56320||s>57343?t?i.charAt(l):a:t?i.slice(l,l+2):s-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},"65f0":function(t,e,n){var r=n("861d"),o=n("e8b5"),a=n("b622"),s=a("species");t.exports=function(t,e){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[s],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"6c40":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"friends"},[n("h3",[t._v("Friends")]),t._v(" "+t._s(t.webId)+" "),null!=t.webId?n("div",{staticClass:"container"},[n("b-card-group",{attrs:{columns:""}},t._l(t.friends,(function(t){return n("Person",{key:t,staticClass:"m-3",attrs:{webId:t}})})),1)],1):n("div",[n("SolidLogin")],1)])},o=[],a=(n("d3b7"),n("a18c")),s={router:a["a"],name:"Friends",components:{SolidLogin:function(){return Promise.resolve().then(n.bind(null,"6bae"))},Person:function(){return n.e("chunk-60e3c512").then(n.bind(null,"4e86"))}},computed:{webId:function(){return this.$store.state.solid.webId},friends:function(){return this.$store.state.solid.friends}},watch:{$route:function(t,e){console.log(t,e,this.$route)}}},i=s,l=(n("4da1"),n("2877")),c=Object(l["a"])(i,r,o,!1,null,"99f0cab2",null);e["default"]=c.exports},"6d6f":function(t,e,n){},"79b6":function(t,e,n){},8418:function(t,e,n){"use strict";var r=n("c04e"),o=n("9bf2"),a=n("5c6c");t.exports=function(t,e,n){var s=r(e);s in t?o.f(t,s,a(0,n)):t[s]=n}},"8a79":function(t,e,n){"use strict";var r=n("23e7"),o=n("06cf").f,a=n("50c4"),s=n("5a34"),i=n("1d80"),l=n("ab13"),c=n("c430"),u="".endsWith,d=Math.min,f=l("endsWith"),h=!c&&!f&&!!function(){var t=o(String.prototype,"endsWith");return t&&!t.writable}();r({target:"String",proto:!0,forced:!h&&!f},{endsWith:function(t){var e=String(i(this));s(t);var n=arguments.length>1?arguments[1]:void 0,r=a(e.length),o=void 0===n?r:d(a(n),r),l=String(t);return u?u.call(e,l,o):e.slice(o-l.length,o)===l}})},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),o=n("9f7f"),a=RegExp.prototype.exec,s=String.prototype.replace,i=a,l=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),c=o.UNSUPPORTED_Y||o.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=l||u||c;d&&(i=function(t){var e,n,o,i,d=this,f=c&&d.sticky,h=r.call(d),p=d.source,b=0,m=t;return f&&(h=h.replace("y",""),-1===h.indexOf("g")&&(h+="g"),m=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(p="(?: "+p+")",m=" "+m,b++),n=new RegExp("^(?:"+p+")",h)),u&&(n=new RegExp("^"+p+"$(?!\\s)",h)),l&&(e=d.lastIndex),o=a.call(f?n:d,m),f?o?(o.input=o.input.slice(b),o[0]=o[0].slice(b),o.index=d.lastIndex,d.lastIndex+=o[0].length):d.lastIndex=0:l&&o&&(d.lastIndex=d.global?o.index+o[0].length:e),u&&o&&o.length>1&&s.call(o[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o}),t.exports=i},"9f7f":function(t,e,n){"use strict";var r=n("d039");function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a15b:function(t,e,n){"use strict";var r=n("23e7"),o=n("44ad"),a=n("fc6a"),s=n("a640"),i=[].join,l=o!=Object,c=s("join",",");r({target:"Array",proto:!0,forced:l||!c},{join:function(t){return i.call(a(this),void 0===t?",":t)}})},a36b:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"browser"},[null!=t.webId?n("div",[n("b-list-group",["https://"!=t.folder.parent?n("b-list-group-item",{staticClass:"item",on:{click:function(e){return t.goUp()}}},[n("b-icon-arrow-up"),t._v(" "+t._s(t.folder.url)+" "),n("b-icon-upload")],1):n("b-list-group-item",{staticClass:"item"},[t._v(" "+t._s(t.storage)+" "),n("b-icon-upload")],1),t._l(t.folder.folders,(function(e){return n("b-list-group-item",{key:e.name,staticClass:"item",on:{click:function(n){return t.selected(e)}}},[n("b-icon-folder"),t._v(" "+t._s(e.name)+" ")],1)}))],2),n("b-list-group",t._l(t.folder.files,(function(e){return n("b-list-group-item",{key:e.name,staticClass:"item",on:{click:function(n){return t.selected(e)}}},[n("b-icon-file"),t._v(" "+t._s(e.name)+" ")],1)})),1)],1):n("div",[n("SolidLogin")],1)])},o=[],a=(n("d3b7"),{name:"Browser",components:{SolidLogin:function(){return Promise.resolve().then(n.bind(null,"6bae"))}},methods:{selected:function(t){"folder"==t.type?this.$store.dispatch("solid/updateFolder",t.url):this.$store.dispatch("solid/updateFile",t)},goUp:function(){this.$store.dispatch("solid/updateFolder",this.folder.parent)}},computed:{webId:function(){return this.$store.state.solid.webId},storage:function(){return this.$store.state.solid.storage},folder:function(){return this.$store.state.solid.folder}}}),s=a,i=(n("f112"),n("2877")),l=Object(i["a"])(s,r,o,!1,null,null,null);e["default"]=l.exports},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},ab13:function(t,e,n){var r=n("b622"),o=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[o]=!1,"/./"[t](e)}catch(r){}}return!1}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),o=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae40:function(t,e,n){var r=n("83ab"),o=n("d039"),a=n("5135"),s=Object.defineProperty,i={},l=function(t){throw t};t.exports=function(t,e){if(a(i,t))return i[t];e||(e={});var n=[][t],c=!!a(e,"ACCESSORS")&&e.ACCESSORS,u=a(e,0)?e[0]:l,d=a(e,1)?e[1]:void 0;return i[t]=!!n&&!o((function(){if(c&&!r)return!0;var t={length:-1};c?s(t,1,{enumerable:!0,get:l}):t[1]=1,n.call(t,u,d)}))}},b727:function(t,e,n){var r=n("0366"),o=n("44ad"),a=n("7b0b"),s=n("50c4"),i=n("65f0"),l=[].push,c=function(t){var e=1==t,n=2==t,c=3==t,u=4==t,d=6==t,f=5==t||d;return function(h,p,b,m){for(var g,v,x=a(h),w=o(x),k=r(p,b,3),_=s(w.length),y=0,S=m||i,$=e?S(h,_):n?S(h,0):void 0;_>y;y++)if((f||y in w)&&(g=w[y],v=k(g,y,x),t))if(e)$[y]=v;else if(v)switch(t){case 3:return!0;case 5:return g;case 6:return y;case 2:l.call($,g)}else if(u)return!1;return d?-1:c||u?u:$}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},baa5:function(t,e,n){var r=n("23e7"),o=n("e58c");r({target:"Array",proto:!0,forced:o!==[].lastIndexOf},{lastIndexOf:o})},c66d:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile"},[n("General"),n("Friends")],1)},o=[],a=n("2202"),s=n("6c40"),i={name:"Profile",components:{General:a["default"],Friends:s["default"]}},l=i,c=n("2877"),u=Object(c["a"])(l,r,o,!1,null,null,null);e["default"]=u.exports},c975:function(t,e,n){"use strict";var r=n("23e7"),o=n("4d64").indexOf,a=n("a640"),s=n("ae40"),i=[].indexOf,l=!!i&&1/[1].indexOf(1,-0)<0,c=a("indexOf"),u=s("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:l||!c||!u},{indexOf:function(t){return l?i.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},d4c6:function(t,e,n){},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),o=n("d039"),a=n("b622"),s=n("9263"),i=n("9112"),l=a("species"),c=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=a("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),h=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var p=a(t),b=!o((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),m=b&&!o((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return e=!0,null},n[p](""),!e}));if(!b||!m||"replace"===t&&(!c||!u||f)||"split"===t&&!h){var g=/./[p],v=n(p,""[t],(function(t,e,n,r,o){return e.exec===s?b&&!o?{done:!0,value:g.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),x=v[0],w=v[1];r(String.prototype,t,x),r(RegExp.prototype,p,2==e?function(t,e){return w.call(t,this,e)}:function(t){return w.call(t,this)})}d&&i(RegExp.prototype[p],"sham",!0)}},e529:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inbox"},[n("h1",[t._v("This is an inbox page")])])}],a={name:"Inbox",components:{}},s=a,i=n("2877"),l=Object(i["a"])(s,r,o,!1,null,null,null);e["default"]=l.exports},e58c:function(t,e,n){"use strict";var r=n("fc6a"),o=n("a691"),a=n("50c4"),s=n("a640"),i=n("ae40"),l=Math.min,c=[].lastIndexOf,u=!!c&&1/[1].lastIndexOf(1,-0)<0,d=s("lastIndexOf"),f=i("indexOf",{ACCESSORS:!0,1:0}),h=u||!d||!f;t.exports=h?function(t){if(u)return c.apply(this,arguments)||0;var e=r(this),n=a(e.length),s=n-1;for(arguments.length>1&&(s=l(s,o(arguments[1]))),s<0&&(s=n+s);s>=0;s--)if(s in e&&e[s]===t)return s||0;return-1}:c},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},ec87:function(t,e,n){},f112:function(t,e,n){"use strict";var r=n("6d6f"),o=n.n(r);o.a},f820:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],a=n("2877"),s={},i=Object(a["a"])(s,r,o,!1,null,null,null);e["default"]=i.exports},fb6a:function(t,e,n){"use strict";var r=n("23e7"),o=n("861d"),a=n("e8b5"),s=n("23cb"),i=n("50c4"),l=n("fc6a"),c=n("8418"),u=n("b622"),d=n("1dde"),f=n("ae40"),h=d("slice"),p=f("slice",{ACCESSORS:!0,0:0,1:2}),b=u("species"),m=[].slice,g=Math.max;r({target:"Array",proto:!0,forced:!h||!p},{slice:function(t,e){var n,r,u,d=l(this),f=i(d.length),h=s(t,f),p=s(void 0===e?f:e,f);if(a(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?o(n)&&(n=n[b],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return m.call(d,h,p);for(r=new(void 0===n?Array:n)(g(p-h,0)),u=0;h<p;h++,u++)h in d&&c(r,u,d[h]);return r.length=u,r}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=about.5a68ee4f.js.map