(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b104131c"],{9764:function(e,t,n){"use strict";n("982f")},"982f":function(e,t,n){},f345:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"solid-chat-send"},[null!=e.webId?n("b-input-group",{staticClass:" input",attrs:{size:"lg"}},[n("b-form-input",{on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.send(t)}},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),n("b-input-group-append",[n("b-button",{attrs:{variant:"warning"},on:{click:e.send}},[e._v("Send")])],1)],1):n("SolidLoginButton",{staticClass:"mt-3 input"})],1)},o=[],s=(n("d3b7"),n("96cf"),n("1da1")),a=n("4d8d"),i=n("6dc1"),l=n("00e8"),c=n.n(l),u=n("7fed"),d=n.n(u),f=n("9b92"),g=f.namedNode,b=new d.a(c.a),w=window.solid;console.log("SOLID",w);var p={name:"SolidChatSend",components:{SolidLoginButton:function(){return n.e("chunk-034e0f2f").then(n.bind(null,"e9a1"))}},data:function(){return{message:""}},computed:{fileUrl:function(){return this.$store.state.chat.fileUrl},webId:function(){return this.$store.state.solid.webId}},watch:{webId:function(e){console.log("Webid",e)},fileUrl:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b.itemExists(e.fileUrl);case 2:if(t.sent){t.next=7;break}return t.next=5,b.postFile(e.fileUrl,"","text/turtle").then((function(e){console.log("File Created",e)})).catch((function(e){return console.error("Error: ".concat(e))}));case 5:t.next=8;break;case 7:console.log("File exist",e.fileUrl);case 8:case"end":return t.stop()}}),t)})))()}},methods:{send:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r,o,s,l,c,u,d,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.$store.state.solid.webId,r=e.$store.state.chat.root,console.log(e.fileUrl),!(e.message.length>0&&null!=n)){t.next=27;break}return console.log(e.message),o=new Date,s="Msg"+o.getTime(),l=o.toISOString(),console.log("WEBID",e.$store.state.solid.webId,e.fileUrl),c=r+"/index.ttl#this",console.log("TODO : must integrate "+c+" in tripledoc or batch ldflex"),u=e.fileUrl+"#"+s,console.log(u),t.next=15,w.data.from(e.fileUrl)[c]["http://www.w3.org/2005/01/wf/flow#message"].add(g(u));case 15:return t.next=17,Object(a["b"])(e.fileUrl);case 17:return d=t.sent,f=d.addSubject({identifier:s}),f.addLiteral(i["g"].content,e.message),f.addLiteral(i["a"].created,l),f.addNodeRef(i["b"].maker,n),t.next=24,d.save();case 24:e.message="",t.next=28;break;case 27:alert("Oh Oh, if yu wanna post yu gotta log in ;-)");case 28:case"end":return t.stop()}}),t)})))()}}},m=p,h=(n("9764"),n("2877")),x=Object(h["a"])(m,r,o,!1,null,"0533eae2",null);t["default"]=x.exports}}]);
//# sourceMappingURL=chunk-b104131c.9c8d07f2.js.map