(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0871":function(t,e,n){"use strict";var r=n("79b6"),a=n.n(r);a.a},1038:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"storage"},[null!=t.webId?n("div",{staticClass:"row"},[n("Browser",{staticClass:"col-md-6"}),n("Editor",{staticClass:"col-md-6"})],1):n("div",[n("SolidLogin")],1)])},a=[],s=(n("d3b7"),n("96cf"),n("1da1")),o={name:"Storage",components:{Browser:function(){return Promise.resolve().then(n.bind(null,"a36b"))},Editor:function(){return Promise.resolve().then(n.bind(null,"527c"))},SolidLogin:function(){return Promise.resolve().then(n.bind(null,"6bae"))}},data:function(){return{}},created:function(){return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{},computed:{webId:function(){return this.$store.state.solid.webId},storage:function(){return this.$store.state.solid.storage},folder:function(){return this.$store.state.solid.folder}},watch:{}},i=o,l=n("2877"),c=Object(l["a"])(i,r,a,!1,null,null,null);e["default"]=c.exports},1063:function(t,e,n){},1276:function(t,e,n){"use strict";var r=n("d784"),a=n("44e7"),s=n("825a"),o=n("1d80"),i=n("4840"),l=n("8aa5"),c=n("50c4"),u=n("14c3"),d=n("9263"),f=n("d039"),p=[].push,h=Math.min,b=4294967295,m=!f((function(){return!RegExp(b,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(o(this)),s=void 0===n?b:n>>>0;if(0===s)return[];if(void 0===t)return[r];if(!a(t))return e.call(r,t,s);var i,l,c,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,m=new RegExp(t.source,f+"g");while(i=d.call(m,r)){if(l=m.lastIndex,l>h&&(u.push(r.slice(h,i.index)),i.length>1&&i.index<r.length&&p.apply(u,i.slice(1)),c=i[0].length,h=l,u.length>=s))break;m.lastIndex===i.index&&m.lastIndex++}return h===r.length?!c&&m.test("")||u.push(""):u.push(r.slice(h)),u.length>s?u.slice(0,s):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var a=o(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,a,n):r.call(String(a),e,n)},function(t,a){var o=n(r,t,this,a,r!==e);if(o.done)return o.value;var d=s(t),f=String(this),p=i(d,RegExp),g=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(m?"y":"g"),x=new p(m?d:"^(?:"+d.source+")",v),w=void 0===a?b:a>>>0;if(0===w)return[];if(0===f.length)return null===u(x,f)?[f]:[];var k=0,y=0,_=[];while(y<f.length){x.lastIndex=m?y:0;var S,C=u(x,m?f:f.slice(y));if(null===C||(S=h(c(x.lastIndex+(m?0:y)),f.length))===k)y=l(f,y,g);else{if(_.push(f.slice(k,y)),_.length===w)return _;for(var $=1;$<=C.length-1;$++)if(_.push(C[$]),_.length===w)return _;y=k=S}}return _.push(f.slice(k)),_}]}),!m)},"14c3":function(t,e,n){var r=n("c6b6"),a=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var s=n.call(t,e);if("object"!==typeof s)throw TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"159b":function(t,e,n){var r=n("da84"),a=n("fdbc"),s=n("17c2"),o=n("9112");for(var i in a){var l=r[i],c=l&&l.prototype;if(c&&c.forEach!==s)try{o(c,"forEach",s)}catch(u){c.forEach=s}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,a=n("a640"),s=n("ae40"),o=a("forEach"),i=s("forEach");t.exports=o&&i?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1a22":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"parle"},[t._v(" PARLE "),n("BreadCrumb"),n("SolidChatList"),n("SolidChatSend")],1)},a=[],s=(n("8a79"),n("96cf"),n("1da1")),o=n("4360"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"breadcrumb"},[n("b-breadcrumb",{attrs:{items:t.items}})],1)},l=[],c=(n("4160"),n("ac1f"),n("1276"),n("159b"),{name:"BreadCrumb",data:function(){return{}},computed:{root:function(){return this.$store.state.parle.root},path:function(){return this.$store.state.parle.path},fileUrl:function(){return this.$store.state.parle.fileUrl},items:function(){var t=[],e="";t.push({text:"root",href:"/"});var n=this.$store.state.parle.fileUrl.split(this.root)[1];if(void 0!=n&&n.length>1){var r=n.split("/");console.log(r),r.forEach((function(n){e+=n+"/",t.push({text:n,href:"?channel="+e,active:!1})}))}return t}}}),u=c,d=(n("e1e3"),n("2877")),f=Object(d["a"])(u,i,l,!1,null,"41c7c0b4",null),p=f.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"solid-chat-send"},[null!=t.webId?n("b-input-group",{staticClass:"mt-3 input"},[n("b-form-input",{on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.send(e)}},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),n("b-input-group-append",[n("b-button",{attrs:{variant:"warning"},on:{click:t.send}},[t._v("Send")])],1)],1):n("SolidLogin",{staticClass:"mt-3 input"})],1)},b=[],m=n("4d8d"),g=n("6dc1"),v=n("6bae"),x={store:o["a"],name:"SolidChatSend",components:{SolidLogin:v["default"]},data:function(){return{message:""}},methods:{send:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,r,a,s,o,i,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.$store.state.solid.webId,r=t.$store.state.parle.fileUrl,console.log(r),!(t.message.length>0&&null!=n)){e.next=22;break}return console.log(t.message),a=new Date,s="Msg"+a.getTime(),o=a.toISOString(),console.log("WEBID",t.$store.state.solid.webId,t.$store.state.count),e.next=11,Object(m["a"])(r);case 11:return i=e.sent,console.log(i),l=i.addSubject({identifier:s}),l.addLiteral(g["d"].content,t.message),l.addLiteral(g["a"].created,o),l.addNodeRef(g["b"].maker,n),e.next=19,i.save();case 19:t.message="",e.next=23;break;case 22:alert("You must login before posting ;-)");case 23:case"end":return e.stop()}}),e)})))()}},computed:{webId:function(){return this.$store.state.solid.webId}}},w=x,k=(n("e122"),Object(d["a"])(w,h,b,!1,null,"d6934d4e",null)),y=k.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"solid-chat-list"},[n("b-input-group",{staticClass:"mb-2"},[n("b-form-datepicker",{attrs:{id:"example-datepicker",min:"2020-08-01",max:t.max},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),n("b-input-group-append",[n("b-button",{on:{click:t.sort}},[t._v("Sort")])],1)],1),n("b-list-group",t._l(t.messages,(function(e){return n("b-list-group-item",{key:e.id,staticClass:"flex-column align-items-start"},[n("div",{staticClass:"d-flex w-100 justify-content-between"},[n("div",{staticClass:"mb-1"},[null!=e.maker?n("a",{attrs:{href:e.maker,target:"_blank"}},[n("b-icon",{attrs:{icon:"person-fill"}}),t._v(t._s(e.maker.split("/").slice(2,3)[0])+" ")],1):n("b-icon",{attrs:{icon:"person-fill"}})],1),n("small",{staticClass:"text-muted"},[t._v(" "+t._s(e.created)+" ")])]),n("p",{staticClass:"mb-1"},[t._v(" "+t._s(e.content)+" ")]),n("div",{staticClass:"text-muted"},[e.parent?n("div",[t._v(" This "),n("a",{attrs:{href:e.id.split("#")[0],target:"_blank"}},[t._v(t._s(e.id.split("/").slice(-2,-1)[0]))]),t._v(" channel as been created from "),n("b-button",{staticClass:"m-1 btn-sm",attrs:{pill:!0,variant:"outline-info"},on:{click:function(n){return t.bascule(e.parent)}}},[t._v(" "+t._s(e.parent.split("/").slice(-2,-1)[0])+" ")])],1):t._e(),null!=t.webId?n("b-button",{staticClass:"btn-sm",attrs:{pill:!0,variant:"outline-info"},on:{click:function(n){return t.new_sub(e.id)}}},[t._v("Reply")]):n("span",[t._v("Login to reply")]),t._l(e.parts,(function(e){return n("b-button",{key:e,staticClass:"m-1 btn-sm",attrs:{pill:!0,variant:"info"},on:{click:function(n){return t.bascule(e)}}},[t._v(" "+t._s(e.split("/").slice(-2,-1)[0])+" ")])}))],2)])})),1),n("div",[t.messages.length>5?n("b-input-group",{staticClass:"mb-2"},[n("b-form-datepicker",{attrs:{id:"example-datepicker2",min:"2020-08-01",max:t.max},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),n("b-input-group-append",[n("b-button",{on:{click:t.sort}},[t._v("Sort")])],1)],1):t._e()],1),n("br"),n("br"),n("div",{staticClass:"m-3"},[n("a",{attrs:{href:"https://scenaristeur.github.io/spoggy-simple/?source="+t.file,target:"_blank"}},[t._v("Visualization")])]),n("br"),n("br"),n("br")],1)},S=[],C=(n("a15b"),n("baa5"),n("fb6a"),{created:function(){},methods:{createWebSocket:function(){var t=this.$store.state.parle.root,e=t.split("//")[1],n=e.split("/")[0]+"/",r=new WebSocket("wss://"+n,["solid.0.1.0"]);this.$store.commit("websocket/setSocket",r)},addSubscription:function(t){this.$store.state.websocket.socket.send("sub "+t)}}}),$=(n("4de4"),n("c975"),n("00e8")),E=n.n($),O={created:function(){this.fc=new SolidFileClient(E.a)},methods:{prepareToday:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new Date,t.$store.commit("parle/setDataDate",n),r=[n.getFullYear(),("0"+(n.getMonth()+1)).slice(-2),("0"+n.getDate()).slice(-2)].join("-")+".ttl",a=t.$store.state.parle.root+r,console.log(a),e.next=7,t.create(a);case 7:t.$store.commit("parle/setFileUrl",a);case 8:case"end":return e.stop()}}),e)})))()},create:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.fc.itemExists(t);case 2:if(n.sent){n.next=7;break}return n.next=5,e.fc.postFile(t,"","text/turtle").then((function(t){console.log("File Created",t)})).catch((function(t){return console.error("Error: ".concat(t))}));case 5:n.next=8;break;case 7:console.log("File exist",t);case 8:case"end":return n.stop()}}),n)})))()},getMessages:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,a,s,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=[],n.next=3,e.fc.itemExists(t);case 3:if(n.sent){n.next=8;break}return n.next=6,e.fc.postFile(t,"","text/turtle").then((function(t){console.log("File Created",t)})).catch((function(t){return console.error("Error: ".concat(t))}));case 6:n.next=9;break;case 8:console.log("File exist",t);case 9:return void 0!=e.$store.state.websocket.socket&&e.$store.state.websocket.socket.send("sub "+t),n.next=12,Object(m["a"])(t);case 12:a=n.sent,s=a.findSubjects(),s=s.filter(e.onlyUnique),o=[],s.forEach((function(t){var e=t.getString(g["a"].created),n=t.getLiteral(g["d"].content),r=t.getNodeRef(g["b"].maker),a=t.getAllNodeRefs(g["c"].hasPart),s=t.getNodeRef(g["c"].isPartOf),i={id:t.asRef(),created:new Date(e).toLocaleTimeString(),content:n,maker:r,parts:a,parent:s};o.push(i)})),r=o.reverse(),console.log("Messages",r),e.$store.commit("parle/setMessages",r);case 20:case"end":return n.stop()}}),n)})))()},onlyUnique:function(t,e,n){return n.indexOf(t)===e}}},R={store:o["a"],name:"SolidChatList",props:{msg:String},mixins:[O,C],data:function(){return{date:"",part:""}},created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new Date,t.date=t.formatDate(n),t.max=t.date,t.path=t.$store.state.parle.root,console.log("ROOT FROM STORE",t.$store.state.parle.root),e.next=7,t.createWebSocket();case 7:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.$store.state.websocket.socket,console.log("SOCKET FROM STORE",n),n.onmessage=function(t){t.data&&"pub"===t.data.slice(0,3)&&(console.log("updated",t.data),this.getMessages(t.data.substring(4)))}.bind(t);case 3:case"end":return e.stop()}}),e)})))()},methods:{bascule:function(t){console.log("Part",t),this.$store.commit("parle/setFileUrl",t),this.path=t.substr(0,t.lastIndexOf("/")+1),console.log(this.path),void 0!=this.$store.state.websocket.socket&&this.$store.state.websocket.socket.send("sub "+t),this.makeToast("We have switched to",t,"info"),this.getMessages(t)},sort:function(){this.messages.reverse()},formatDate:function(t){return[t.getFullYear(),("0"+(t.getMonth()+1)).slice(-2),("0"+t.getDate()).slice(-2)].join("-")},new_sub:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,a,s,o,i,l,c,u,d,f;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(console.log(t),r=prompt("Create a sub-channel from "+t),!(null!=r&&r.length>0)){n.next=42;break}return console.log(r),r=r.split(" ").join("_"),a=t.substr(0,t.lastIndexOf("/")+1),s=t.split("#").pop(),console.log("Parent",a,s),o=a+r+"/",i=e.date+".ttl",l=o+i,console.log("Child",o,i),e.$store.commit("parle/setFileUrl",l),void 0!=e.$store.state.websocket.socket&&e.$store.state.websocket.socket.send("sub "+l),n.next=16,e.fc.itemExists(l);case 16:if(n.sent){n.next=21;break}return n.next=19,e.fc.postFile(l,"","text/turtle").then((function(t){console.log("File Created",t)})).catch((function(t){return console.error("Error: ".concat(t))}));case 19:n.next=22;break;case 21:console.log("File exist",l);case 22:return n.next=24,Object(m["a"])(l);case 24:return c=n.sent,c.addSubject,u=c.addSubject({identifier:"this"}),u.addLiteral(g["a"].created,e.date),u.addNodeRef(g["c"].isPartOf,t),u.addNodeRef(g["b"].maker,e.$store.state.solid.webId),n.next=32,c.save();case 32:return n.next=34,Object(m["a"])(t);case 34:return d=n.sent,f=d.getSubject(t),f.addRef(g["c"].hasPart,l),n.next=39,d.save();case 39:e.bascule(l),n.next=43;break;case 42:alert("You must provide a name to create a sub Channel");case 43:case"end":return n.stop()}}),n)})))()},makeToast:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(e,{title:t,variant:n,solid:!0})}},computed:{file:function(){var t=this.path+this.date+".ttl";return this.$store.commit("parle/setFileUrl",t),void 0!=this.$store.state.websocket.socket&&1==this.$store.state.websocket.socket.readyState&&this.$store.state.websocket.socket.send("sub "+t),this.getMessages(t),t},webId:function(){return this.$store.state.solid.webId},messages:function(){return this.$store.state.parle.messages}}},I=R,L=Object(d["a"])(I,_,S,!1,null,null,null),j=L.exports,T={store:o["a"],name:"Parle",components:{SolidChatSend:y,SolidChatList:j,BreadCrumb:p},created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:void 0==t.root&&(t.root="https://parle.solid.community/public/"),console.log("root",t.root),!t.root.endsWith("/")&&(t.root=t.root+"/"),!t.root.endsWith("/parle/")&&(t.root=t.root+"parle/"),console.log("Root root",t.root),t.$store.commit("parle/setRoot",t.root),console.log("ROOT FROM STORE",t.$store.state.parle.root);case 7:case"end":return e.stop()}}),e)})))()}},P=T,A=Object(d["a"])(P,r,a,!1,null,null,null);e["default"]=A.exports},"1dde":function(t,e,n){var r=n("d039"),a=n("b622"),s=n("2d00"),o=a("species");t.exports=function(t){return s>=51||!r((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"20fd":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"communication"},[n("Parle",{attrs:{root:"https://parle.solid.community/public/"}}),n("Inbox"),n("Chat")],1)},a=[],s=n("e529"),o=n("293a"),i=n("1a22"),l={name:"Communication",components:{Inbox:s["default"],Chat:o["default"],Parle:i["default"]}},c=l,u=n("2877"),d=Object(u["a"])(c,r,a,!1,null,null,null);e["default"]=d.exports},2202:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"general"},[null!=t.webId?n("div",{staticClass:"container"},[n("h4",[t._v(t._s(t.webId))]),n("img",{staticClass:"m-3",attrs:{width:"80",height:"80",src:t.photo,rounded:"circle",alt:" "}}),n("br"),n("div",[n("b-form-group",{attrs:{"label-cols-sm":"3",label:"Name:","label-align-sm":"right","label-for":"name"}},[n("b-form-input",{attrs:{id:"name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("b-form-group",{attrs:{"label-cols-sm":"3",label:"Organization:","label-align-sm":"right","label-for":"organization"}},[n("b-form-input",{attrs:{id:"organization"},model:{value:t.organization,callback:function(e){t.organization=e},expression:"organization"}})],1),n("b-form-group",{attrs:{"label-cols-sm":"3",label:"Role:","label-align-sm":"right","label-for":"role"}},[n("b-form-input",{attrs:{id:"role"},model:{value:t.role,callback:function(e){t.role=e},expression:"role"}})],1),n("b-form-group",{attrs:{"label-cols-sm":"3",label:"Birthday:","label-align-sm":"right","label-for":"bday"}},[n("b-form-input",{attrs:{id:"bday",type:"date"},model:{value:t.bday,callback:function(e){t.bday=e},expression:"bday"}})],1),n("b-form-group",{attrs:{"label-cols-sm":"3",label:"Gender:","label-align-sm":"right","label-for":"gender"}},[n("b-form-input",{attrs:{id:"gender"},model:{value:t.gender,callback:function(e){t.gender=e},expression:"gender"}})],1),n("b-form-group",{attrs:{"label-cols-sm":"3",label:"Address Locality:","label-align-sm":"right","label-for":"address"}},[n("b-form-input",{attrs:{id:"address"},model:{value:t.address.locality,callback:function(e){t.$set(t.address,"locality",e)},expression:"address.locality"}})],1),n("b-form-group",{attrs:{"label-cols-sm":"3",label:"Note:","label-align-sm":"right","label-for":"note"}},[n("b-form-input",{attrs:{id:"note"},model:{value:t.note,callback:function(e){t.note=e},expression:"note"}})],1)],1)]):n("div",[n("SolidLogin")],1)])},a=[],s=(n("b0c0"),n("d3b7"),{name:"General",components:{SolidLogin:function(){return Promise.resolve().then(n.bind(null,"6bae"))}},data:function(){return{}},computed:{webId:function(){return this.$store.state.solid.webId},profileDoc:function(){return this.$store.state.solid.profileDoc},name:function(){return this.$store.state.solid.name},organization:function(){return this.$store.state.solid.organization},role:function(){return this.$store.state.solid.role},bday:function(){return this.$store.state.solid.bday},gender:function(){return this.$store.state.solid.gender},photo:function(){return this.$store.state.solid.photo},address:function(){return this.$store.state.solid.address},note:function(){return this.$store.state.solid.note}}}),o=s,i=n("2877"),l=Object(i["a"])(o,r,a,!1,null,null,null);e["default"]=l.exports},"293a":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat"},[n("h1",[t._v("This is an chat page")]),n("b-form-select",{attrs:{options:t.options},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),n("PopChat",{attrs:{url:t.selected}})],1)},a=[],s=(n("d3b7"),{name:"Chat",components:{PopChat:function(){return n.e("chunk-4f3111d0").then(n.bind(null,"11c7"))}},data:function(){return{selected:"https://solidarity.inrupt.net/public/Solidarity/",options:[{value:null,text:"Please select an option"},{value:"https://solidarity.inrupt.net/public/ChatTest/",text:"ChatTest"},{value:"https://solidarity.inrupt.net/public/Solidarity/",text:"Solidarity"}]}},watch:{selected:function(t){console.log(t)}}}),o=s,i=n("2877"),l=Object(i["a"])(o,r,a,!1,null,null,null);e["default"]=l.exports},4160:function(t,e,n){"use strict";var r=n("23e7"),a=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"44e7":function(t,e,n){var r=n("861d"),a=n("c6b6"),s=n("b622"),o=s("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==a(t))}},"4da1":function(t,e,n){"use strict";var r=n("ec87"),a=n.n(r);a.a},"4de4":function(t,e,n){"use strict";var r=n("23e7"),a=n("b727").filter,s=n("1dde"),o=n("ae40"),i=s("filter"),l=o("filter");r({target:"Array",proto:!0,forced:!i||!l},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},"527c":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor"},[null!=t.webId?n("div",[n("div",[n("b-button-toolbar",{attrs:{"aria-label":"Toolbar with button groups and dropdown menu"}},[n("b-button-group",{staticClass:"mr-1",attrs:{size:"sm"}},[n("b-button",{attrs:{size:"sm"},on:{click:t.clean}},[t._v("New")]),n("b-button",{attrs:{size:"sm",disabled:""}},[t._v("Edit")]),n("b-button",{attrs:{size:"sm",disabled:""}},[t._v("Undo")])],1),n("b-dropdown",{staticClass:"mr-1",attrs:{size:"sm",right:"",text:"menu"}},[n("b-dropdown-item",{attrs:{size:"sm"}},[t._v("Item 1")]),n("b-dropdown-item",{attrs:{size:"sm"}},[t._v("Item 2")]),n("b-dropdown-item",{attrs:{size:"sm"}},[t._v("Item 3")])],1),n("b-button-group",{staticClass:"mr-1",attrs:{size:"sm"}},[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],attrs:{size:"sm",variant:"warning"}},[t._v("Save")]),n("b-modal",{attrs:{id:"modal-1",title:"Save"},on:{show:t.fill,ok:t.save}},[n("b-form-group",{attrs:{"label-cols-sm":"3",label:"Path:","label-align-sm":"right","label-for":"path"}},[n("b-form-input",{attrs:{id:"path"},model:{value:t.path,callback:function(e){t.path=e},expression:"path"}})],1),n("b-form-group",{attrs:{"label-cols-sm":"3",label:"Filename:","label-align-sm":"right","label-for":"name"}},[n("b-form-input",{attrs:{id:"name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("b-form-group",{attrs:{"label-cols-sm":"3",label:"Mimetype:","label-align-sm":"right",placeholder:"text/plain ? text/turtle ? application/json ?","label-for":"type"}},[n("b-form-input",{attrs:{id:"type"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1)],1)],1)],1)],1),n("div",[n("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter something...",rows:"3","max-rows":"15"},on:{change:t.change,input:t.input},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)]):n("div",[n("SolidLogin")],1)])},a=[],s=(n("b0c0"),n("d3b7"),n("8a79"),n("96cf"),n("1da1")),o={name:"Browser",components:{SolidLogin:function(){return Promise.resolve().then(n.bind(null,"6bae"))}},data:function(){return{name:"",type:"",path:""}},created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.name="new_file.txt",t.type="text/plain",t.path=t.storage;case 3:case"end":return e.stop()}}),e)})))()},methods:{clean:function(){this.text="";var t={name:"new_file.txt",type:"text/plain",parent:this.folder.url||this.storage};this.$store.commit("solid/setFile",t),this.$store.commit("solid/setContent","")},change:function(t){console.log("change",t)},input:function(t){console.log("input",t)},fill:function(){this.name=this.file.name,this.type=this.file.type,this.path=this.file.parent},save:function(){console.log("text",this.text),this.path=this.path.endsWith("/")?this.path:this.path+"/",console.log("File",this.type,this.path,this.name);var t={path:this.path,name:this.name,content:this.text,contentType:this.type};this.$store.dispatch("solid/writeFile",t)}},computed:{webId:function(){return this.$store.state.solid.webId},storage:function(){return this.$store.state.solid.storage},folder:function(){return this.$store.state.solid.folder},file:function(){return this.$store.state.solid.file},text:{get:function(){return this.$store.state.solid.content},set:function(t){return this.$store.commit("solid/setContent",t)}}},watch:{}},i=o,l=(n("0871"),n("2877")),c=Object(l["a"])(i,r,a,!1,null,null,null);e["default"]=c.exports},"5a34":function(t,e,n){var r=n("44e7");t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},6547:function(t,e,n){var r=n("a691"),a=n("1d80"),s=function(t){return function(e,n){var s,o,i=String(a(e)),l=r(n),c=i.length;return l<0||l>=c?t?"":void 0:(s=i.charCodeAt(l),s<55296||s>56319||l+1===c||(o=i.charCodeAt(l+1))<56320||o>57343?t?i.charAt(l):s:t?i.slice(l,l+2):o-56320+(s-55296<<10)+65536)}};t.exports={codeAt:s(!1),charAt:s(!0)}},"65f0":function(t,e,n){var r=n("861d"),a=n("e8b5"),s=n("b622"),o=s("species");t.exports=function(t,e){var n;return a(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?r(n)&&(n=n[o],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"6c40":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"friends"},[n("h3",[t._v("Friends")]),t._v(" "+t._s(t.webId)+" "),null!=t.webId?n("div",{staticClass:"container"},[n("b-card-group",{attrs:{columns:""}},t._l(t.friends,(function(t){return n("Person",{key:t,staticClass:"m-3",attrs:{webId:t}})})),1)],1):n("div",[n("SolidLogin")],1)])},a=[],s=(n("d3b7"),n("a18c")),o={router:s["a"],name:"Friends",components:{SolidLogin:function(){return Promise.resolve().then(n.bind(null,"6bae"))},Person:function(){return n.e("chunk-60e3c512").then(n.bind(null,"4e86"))}},computed:{webId:function(){return this.$store.state.solid.webId},friends:function(){return this.$store.state.solid.friends}},watch:{$route:function(t,e){console.log(t,e,this.$route)}}},i=o,l=(n("4da1"),n("2877")),c=Object(l["a"])(i,r,a,!1,null,"99f0cab2",null);e["default"]=c.exports},"6d6f":function(t,e,n){},"79b6":function(t,e,n){},8418:function(t,e,n){"use strict";var r=n("c04e"),a=n("9bf2"),s=n("5c6c");t.exports=function(t,e,n){var o=r(e);o in t?a.f(t,o,s(0,n)):t[o]=n}},"8a79":function(t,e,n){"use strict";var r=n("23e7"),a=n("06cf").f,s=n("50c4"),o=n("5a34"),i=n("1d80"),l=n("ab13"),c=n("c430"),u="".endsWith,d=Math.min,f=l("endsWith"),p=!c&&!f&&!!function(){var t=a(String.prototype,"endsWith");return t&&!t.writable}();r({target:"String",proto:!0,forced:!p&&!f},{endsWith:function(t){var e=String(i(this));o(t);var n=arguments.length>1?arguments[1]:void 0,r=s(e.length),a=void 0===n?r:d(s(n),r),l=String(t);return u?u.call(e,l,a):e.slice(a-l.length,a)===l}})},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),a=n("9f7f"),s=RegExp.prototype.exec,o=String.prototype.replace,i=s,l=function(){var t=/a/,e=/b*/g;return s.call(t,"a"),s.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),c=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=l||u||c;d&&(i=function(t){var e,n,a,i,d=this,f=c&&d.sticky,p=r.call(d),h=d.source,b=0,m=t;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),m=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(h="(?: "+h+")",m=" "+m,b++),n=new RegExp("^(?:"+h+")",p)),u&&(n=new RegExp("^"+h+"$(?!\\s)",p)),l&&(e=d.lastIndex),a=s.call(f?n:d,m),f?a?(a.input=a.input.slice(b),a[0]=a[0].slice(b),a.index=d.lastIndex,d.lastIndex+=a[0].length):d.lastIndex=0:l&&a&&(d.lastIndex=d.global?a.index+a[0].length:e),u&&a&&a.length>1&&o.call(a[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(a[i]=void 0)})),a}),t.exports=i},"9f7f":function(t,e,n){"use strict";var r=n("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a15b:function(t,e,n){"use strict";var r=n("23e7"),a=n("44ad"),s=n("fc6a"),o=n("a640"),i=[].join,l=a!=Object,c=o("join",",");r({target:"Array",proto:!0,forced:l||!c},{join:function(t){return i.call(s(this),void 0===t?",":t)}})},a36b:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"browser"},[null!=t.webId?n("div",[n("b-list-group",["https://"!=t.folder.parent?n("b-list-group-item",{staticClass:"item",on:{click:function(e){return t.goUp()}}},[n("b-icon-arrow-up"),t._v(" "+t._s(t.folder.url)+" "),n("b-icon-upload")],1):n("b-list-group-item",{staticClass:"item"},[t._v(" "+t._s(t.storage)+" "),n("b-icon-upload")],1),t._l(t.folder.folders,(function(e){return n("b-list-group-item",{key:e.name,staticClass:"item",on:{click:function(n){return t.selected(e)}}},[n("b-icon-folder"),t._v(" "+t._s(e.name)+" ")],1)}))],2),n("b-list-group",t._l(t.folder.files,(function(e){return n("b-list-group-item",{key:e.name,staticClass:"item",on:{click:function(n){return t.selected(e)}}},[n("b-icon-file"),t._v(" "+t._s(e.name)+" ")],1)})),1)],1):n("div",[n("SolidLogin")],1)])},a=[],s=(n("d3b7"),{name:"Browser",components:{SolidLogin:function(){return Promise.resolve().then(n.bind(null,"6bae"))}},methods:{selected:function(t){"folder"==t.type?this.$store.dispatch("solid/updateFolder",t.url):this.$store.dispatch("solid/updateFile",t)},goUp:function(){this.$store.dispatch("solid/updateFolder",this.folder.parent)}},computed:{webId:function(){return this.$store.state.solid.webId},storage:function(){return this.$store.state.solid.storage},folder:function(){return this.$store.state.solid.folder}}}),o=s,i=(n("f112"),n("2877")),l=Object(i["a"])(o,r,a,!1,null,null,null);e["default"]=l.exports},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},ab13:function(t,e,n){var r=n("b622"),a=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[a]=!1,"/./"[t](e)}catch(r){}}return!1}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae40:function(t,e,n){var r=n("83ab"),a=n("d039"),s=n("5135"),o=Object.defineProperty,i={},l=function(t){throw t};t.exports=function(t,e){if(s(i,t))return i[t];e||(e={});var n=[][t],c=!!s(e,"ACCESSORS")&&e.ACCESSORS,u=s(e,0)?e[0]:l,d=s(e,1)?e[1]:void 0;return i[t]=!!n&&!a((function(){if(c&&!r)return!0;var t={length:-1};c?o(t,1,{enumerable:!0,get:l}):t[1]=1,n.call(t,u,d)}))}},b727:function(t,e,n){var r=n("0366"),a=n("44ad"),s=n("7b0b"),o=n("50c4"),i=n("65f0"),l=[].push,c=function(t){var e=1==t,n=2==t,c=3==t,u=4==t,d=6==t,f=5==t||d;return function(p,h,b,m){for(var g,v,x=s(p),w=a(x),k=r(h,b,3),y=o(w.length),_=0,S=m||i,C=e?S(p,y):n?S(p,0):void 0;y>_;_++)if((f||_ in w)&&(g=w[_],v=k(g,_,x),t))if(e)C[_]=v;else if(v)switch(t){case 3:return!0;case 5:return g;case 6:return _;case 2:l.call(C,g)}else if(u)return!1;return d?-1:c||u?u:C}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},baa5:function(t,e,n){var r=n("23e7"),a=n("e58c");r({target:"Array",proto:!0,forced:a!==[].lastIndexOf},{lastIndexOf:a})},c66d:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile"},[n("General"),n("Friends")],1)},a=[],s=n("2202"),o=n("6c40"),i={name:"Profile",components:{General:s["default"],Friends:o["default"]}},l=i,c=n("2877"),u=Object(c["a"])(l,r,a,!1,null,null,null);e["default"]=u.exports},c975:function(t,e,n){"use strict";var r=n("23e7"),a=n("4d64").indexOf,s=n("a640"),o=n("ae40"),i=[].indexOf,l=!!i&&1/[1].indexOf(1,-0)<0,c=s("indexOf"),u=o("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:l||!c||!u},{indexOf:function(t){return l?i.apply(this,arguments)||0:a(this,t,arguments.length>1?arguments[1]:void 0)}})},d5aa:function(t,e,n){},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("d039"),s=n("b622"),o=n("9263"),i=n("9112"),l=s("species"),c=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=s("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var h=s(t),b=!a((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),m=b&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!b||!m||"replace"===t&&(!c||!u||f)||"split"===t&&!p){var g=/./[h],v=n(h,""[t],(function(t,e,n,r,a){return e.exec===o?b&&!a?{done:!0,value:g.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),x=v[0],w=v[1];r(String.prototype,t,x),r(RegExp.prototype,h,2==e?function(t,e){return w.call(t,this,e)}:function(t){return w.call(t,this)})}d&&i(RegExp.prototype[h],"sham",!0)}},e122:function(t,e,n){"use strict";var r=n("1063"),a=n.n(r);a.a},e1e3:function(t,e,n){"use strict";var r=n("d5aa"),a=n.n(r);a.a},e529:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inbox"},[n("h1",[t._v("This is an inbox page")])])}],s={name:"Inbox",components:{}},o=s,i=n("2877"),l=Object(i["a"])(o,r,a,!1,null,null,null);e["default"]=l.exports},e58c:function(t,e,n){"use strict";var r=n("fc6a"),a=n("a691"),s=n("50c4"),o=n("a640"),i=n("ae40"),l=Math.min,c=[].lastIndexOf,u=!!c&&1/[1].lastIndexOf(1,-0)<0,d=o("lastIndexOf"),f=i("indexOf",{ACCESSORS:!0,1:0}),p=u||!d||!f;t.exports=p?function(t){if(u)return c.apply(this,arguments)||0;var e=r(this),n=s(e.length),o=n-1;for(arguments.length>1&&(o=l(o,a(arguments[1]))),o<0&&(o=n+o);o>=0;o--)if(o in e&&e[o]===t)return o||0;return-1}:c},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},ec87:function(t,e,n){},f112:function(t,e,n){"use strict";var r=n("6d6f"),a=n.n(r);a.a},f820:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],s=n("2877"),o={},i=Object(s["a"])(o,r,a,!1,null,null,null);e["default"]=i.exports},fb6a:function(t,e,n){"use strict";var r=n("23e7"),a=n("861d"),s=n("e8b5"),o=n("23cb"),i=n("50c4"),l=n("fc6a"),c=n("8418"),u=n("b622"),d=n("1dde"),f=n("ae40"),p=d("slice"),h=f("slice",{ACCESSORS:!0,0:0,1:2}),b=u("species"),m=[].slice,g=Math.max;r({target:"Array",proto:!0,forced:!p||!h},{slice:function(t,e){var n,r,u,d=l(this),f=i(d.length),p=o(t,f),h=o(void 0===e?f:e,f);if(s(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!s(n.prototype)?a(n)&&(n=n[b],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return m.call(d,p,h);for(r=new(void 0===n?Array:n)(g(h-p,0)),u=0;p<h;p++,u++)p in d&&c(r,u,d[p]);return r.length=u,r}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=about.f5c9c084.js.map