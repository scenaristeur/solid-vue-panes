(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45132d3c"],{4380:function(e,t,n){"use strict";n("4160"),n("b0c0"),n("159b"),n("96cf");var r=n("1da1"),s=n("4d8d"),a=n("6dc1"),i=window.solid;t["a"]={methods:{getProfile:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r,c,u,o,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={friends:[]},n.webId=t,e.prev=2,e.next=5,Object(s["b"])(t);case 5:return r=e.sent,c=r.getSubject(t),e.next=9,c.getString(a["i"].fn);case 9:return n.name=e.sent,e.next=12,c.getString("http://www.w3.org/2006/vcard/ns#organization-name");case 12:return n.organization=e.sent,e.next=15,c.getString(a["i"].role);case 15:return n.role=e.sent,e.next=18,c.getRef(a["i"].hasAddress);case 18:if(u=e.sent,null==u){e.next=24;break}return o=r.getSubject(u),e.next=23,o.getString(a["i"].locality);case 23:n.locality=e.sent;case 24:return e.next=26,i.data[t].vcard$hasPhoto;case 26:l=e.sent,n.photo="".concat(l),e.next=33;break;case 30:e.prev=30,e.t0=e["catch"](2),this.makeToast(e.t0.message,t,"warning");case 33:return e.abrupt("return",n);case 34:case"end":return e.stop()}}),e,this,[[2,30]])})));function t(t){return e.apply(this,arguments)}return t}(),getInboxUrls:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=[],e.prev=1,e.next=4,Object(s["b"])(t);case 4:return r=e.sent,i=r.getSubject(t),e.next=8,i.getAllRefs(a["c"].inbox);case 8:n=e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),this.makeToast(e.t0.message,t,"warning");case 14:return e.abrupt("return",n);case 15:case"end":return e.stop()}}),e,this,[[1,11]])})));function t(t){return e.apply(this,arguments)}return t}(),getFriends:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=[],e.prev=1,e.next=4,Object(s["b"])(t);case 4:return r=e.sent,i=r.getSubject(t),e.next=8,i.getAllRefs(a["b"].knows);case 8:n=e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),this.makeToast(e.t0.message,t,"warning");case 14:return e.abrupt("return",n);case 15:case"end":return e.stop()}}),e,this,[[1,11]])})));function t(t){return e.apply(this,arguments)}return t}(),addIndex:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,r){var i,c,u,o,l,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t+"/index.ttl#this",c=new Date,u=c.toISOString(),o=this.$store.state.solid.indexes.puti,e.next=6,Object(s["b"])(o.url);case 6:return l=e.sent,e.next=9,l.addSubject();case 9:return d=e.sent,d.addLiteral(a["e"].label,r),d.addNodeRef("http://www.w3.org/ns/solid/terms#forClass",n),d.addNodeRef("http://www.w3.org/ns/solid/terms#instance",i),d.addLiteral(a["a"].created,u),e.next=16,l.save();case 16:case"end":return e.stop()}}),e,this)})));function t(t,n,r){return e.apply(this,arguments)}return t}(),getIndexes:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,i,c,u,o,l,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={puti:{instances:[],classes:[]},prti:{instances:[],classes:[]}},e.prev=1,e.next=4,Object(s["b"])(t);case 4:return i=e.sent,c=i.getSubject(t),e.next=8,c.getNodeRef("http://www.w3.org/ns/solid/terms#publicTypeIndex");case 8:return u=e.sent,e.next=11,c.getNodeRef("http://www.w3.org/ns/solid/terms#privateTypeIndex");case 11:return o=e.sent,n.puti.url=u,n.prti.url=o,e.next=16,Object(s["b"])(u);case 16:return l=e.sent,e.next=19,l.findSubjects("http://www.w3.org/ns/solid/terms#forClass");case 19:d=e.sent,d.forEach(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var r,s,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getRef("http://www.w3.org/ns/solid/terms#forClass");case 2:return r=e.sent,e.next=5,t.getRef("http://www.w3.org/ns/solid/terms#instance");case 5:return s=e.sent,e.next=8,t.getString(a["a"].created);case 8:return i=e.sent,e.next=11,t.getString(a["e"].label);case 11:c=e.sent,n.puti.instances.push({instance:s,classe:r,label:c,created:i}),void 0==n.puti.classes[r]&&(n.puti.classes[r]=[]),n.puti.classes[r].push(s);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=25;break;case 23:e.prev=23,e.t0=e["catch"](1);case 25:return console.log(t,n),e.abrupt("return",n);case 27:case"end":return e.stop()}}),e,null,[[1,23]])})));function t(t){return e.apply(this,arguments)}return t}(),makeToast:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(t,{title:e,variant:n,solid:!0})}}}},c1a7:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return null!=e.user?n("div",{staticClass:"solid-track-session"},[n("i",[n("small",[e._v("Logged as : "),n("a",{attrs:{href:e.webId,target:"_blank"}},[e._v(e._s(e.user))])])])]):e._e()},s=[],a=(n("fb6a"),n("ac1f"),n("1276"),n("96cf"),n("1da1")),i=n("00e8"),c=n.n(i),u=n("4380"),o={name:"SolidTrackSession",mixins:[u["a"]],data:function(){return{user:null,webId:null}},created:function(){var e=this;c.a.trackSession(function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(n){var r,s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n){t.next=9;break}e.user=null,console.log("The user is not logged in"),e.$store.dispatch("solid/setWebId",null),e.$store.commit("solid/setFriends",[]),e.$store.commit("solid/setProfile",{}),e.$store.commit("solid/setIndexes",{}),t.next=25;break;case 9:return e.webId=n.webId,e.user=n.webId.split("/").slice(2,3)[0],console.log("The user is ".concat(n.webId)),e.$store.dispatch("solid/setWebId",e.webId),t.next=15,e.getFriends(e.webId);case 15:return r=t.sent,e.$store.commit("solid/setFriends",r),t.next=19,e.getProfile(e.webId);case 19:return s=t.sent,e.$store.commit("solid/setProfile",s),t.next=23,e.getIndexes(e.webId);case 23:a=t.sent,e.$store.commit("solid/setIndexes",a);case 25:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},l=o,d=n("2877"),p=Object(d["a"])(l,r,s,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-45132d3c.009b5da7.js.map