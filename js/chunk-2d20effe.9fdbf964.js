(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20effe"],{b280:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post-send container"},[s("h5",[t._v("PostSend")]),s("b-input-group",{staticClass:"mt-3",attrs:{prepend:"Title"}},[s("b-form-input",{model:{value:t.post.title,callback:function(e){t.$set(t.post,"title",e)},expression:"post.title"}})],1),s("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter something...",rows:"3","max-rows":"6"},model:{value:t.post.text,callback:function(e){t.$set(t.post,"text",e)},expression:"post.text"}}),s("b-button",{staticClass:"mt-3",attrs:{variant:"outline-info"},on:{click:t.send}},[t._v("Send")])],1)},a=[],o=(s("a15b"),s("fb6a"),s("96cf"),s("1da1")),r=s("4d8d"),i=s("6dc1"),c={name:"PostSend",components:{},props:["value"],data:function(){return{post:{}}},created:function(){this.storage=this.$store.state.solid.storage,this.webId=this.$store.state.solid.webId},watch:{storage:function(t){console.log(t),this.path=t+"public/blog/"}},methods:{send:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var s,n,a,o,c,l,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=new Date,n=s.toISOString(),a=[s.getFullYear(),("0"+(s.getMonth()+1)).slice(-2),("0"+s.getDate()).slice(-2)].join("-"),t.path=t.storage+"public/blog/",o=t.path+a+".ttl",console.log(t.post),console.log(t.path),console.log(t.fileUrl),c={},e.prev=9,e.next=12,Object(r["b"])(o);case 12:c=e.sent,e.next=20;break;case 15:return e.prev=15,e.t0=e["catch"](9),e.next=19,Object(r["a"])(o);case 19:c=e.sent;case 20:return console.log(c),l="Article_"+s.getTime(),d=c.addSubject({identifier:l}),d.addLiteral(i["e"].label,t.post.title),d.addLiteral(i["a"].created,n),d.addRef(i["b"].maker,t.webId),d.addRef(i["d"].type,"https://www.w3.org/ns/activitystreams#Article"),d.addLiteral(i["g"].content,t.post.text),e.prev=28,e.next=31,c.save();case 31:e.next=36;break;case 33:e.prev=33,e.t1=e["catch"](28),alert(e.t1);case 36:t.post={};case 37:case"end":return e.stop()}}),e,null,[[9,15],[28,33]])})))()}},computed:{storage:{get:function(){return this.$store.state.solid.storage},set:function(){}},webId:{get:function(){return this.$store.state.solid.webId},set:function(){}}}},l=c,d=s("2877"),u=Object(d["a"])(l,n,a,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d20effe.9fdbf964.js.map