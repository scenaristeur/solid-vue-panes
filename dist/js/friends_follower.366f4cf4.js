(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["friends_follower"],{4380:function(e,t,n){"use strict";var r=n("b85c"),s=n("1da1"),a=(n("96cf"),n("b0c0"),n("d3b7"),n("ddb0"),n("ac1f"),n("1276"),n("159b"),n("4d8d")),o=n("6dc1"),i=n("00e8"),c=n.n(i),u=n("7fed"),l=n.n(u),p=new l.a(c.a);t["a"]={methods:{getProfile:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,r,s,i,c,u,l,d,g,w,f,b,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={friends:[]},n.webId=t,e.prev=2,e.next=5,Object(a["b"])(t);case 5:return r=e.sent,s=r.getSubject(t),n.name=s.getString(o["i"].fn),n.organization=s.getString("http://www.w3.org/2006/vcard/ns#organization-name"),n.role=s.getString(o["i"].role),n.photo=s.getRef(o["i"].hasPhoto),n.bday=s.getString(o["i"].bday),n.gender=s.getString(o["i"].hasGender),n.note=s.getString(o["i"].note),n.friends=s.getAllRefs(o["b"].knows),i=s.getRef(o["i"].hasAddress),null!=i&&(c=r.getSubject(i),n.locality=c.getString(o["i"].locality),n.country=c.getString("http://www.w3.org/2006/vcard/ns#country-name"),n.postal=c.getString("http://www.w3.org/2006/vcard/ns#postal-code"),n.region=c.getString(o["i"].region),n.address=c.getString("http://www.w3.org/2006/vcard/ns#street-address")),e.next=19,this.getWorkspaces(t);case 19:if(n.workspaces=e.sent,!(n.workspaces.length>0)){e.next=44;break}console.log("PF",n.workspaces),e.t0=regeneratorRuntime.keys(n.workspaces);case 23:if((e.t1=e.t0()).done){e.next=43;break}if(u=e.t1.value,l=n.workspaces[u],"gouvernance"!=l.name){e.next=41;break}return d=l.path+"groups",g=l.path+"tensions",console.log("ww",l,d,g),e.next=32,p.readFolder(d);case 32:return w=e.sent,e.next=35,p.readFolder(d);case 35:f=e.sent,b=w.files,h=f.files,console.log(b,h),n.groups=b,n.tensions=h;case 41:e.next=23;break;case 43:console.log("PROFILE",t,n);case 44:e.next=49;break;case 46:e.prev=46,e.t2=e["catch"](2),this.makeToast(e.t2.message,t,"warning");case 49:return e.abrupt("return",n);case 50:case"end":return e.stop()}}),e,this,[[2,46]])})));function t(t){return e.apply(this,arguments)}return t}(),getInboxUrls:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=[],e.prev=1,e.next=4,Object(a["b"])(t);case 4:return r=e.sent,s=r.getSubject(t),e.next=8,s.getAllRefs(o["c"].inbox);case 8:n=e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),this.makeToast(e.t0.message,t,"warning");case 14:return e.abrupt("return",n);case 15:case"end":return e.stop()}}),e,this,[[1,11]])})));function t(t){return e.apply(this,arguments)}return t}(),getFriends:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=[],e.prev=1,e.next=4,Object(a["b"])(t);case 4:return r=e.sent,s=r.getSubject(t),e.next=8,s.getAllRefs(o["b"].knows);case 8:n=e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),this.makeToast(e.t0.message,t,"warning");case 14:return e.abrupt("return",n);case 15:case"end":return e.stop()}}),e,this,[[1,11]])})));function t(t){return e.apply(this,arguments)}return t}(),getWorkspaces:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,s,i,c,u,l,d,g,w,f,b;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=[],e.next=3,solid.data[t].storage;case 3:if(s=e.sent,i=s+"public/popock/workspaces.ttl",!p.itemExists(i)){e.next=18;break}return c={},e.prev=7,e.next=10,Object(a["b"])(i);case 10:c=e.sent,u=c.getAllSubjectsOfType("http://www.w3.org/ns/pim/space#Workspace"),l=Object(r["a"])(u);try{for(l.s();!(d=l.n()).done;)g=d.value,w=g.getLiteral(o["d"].label),f=g.getRef("http://www.w3.org/ns/pim/space#storage"),b=g.getRef("http://www.w3.org/ns/solid/terms#webId"),n.push({name:w,path:f,pod:b,subject:g.asRef().split("#")[1]})}catch(h){l.e(h)}finally{l.f()}e.next=18;break;case 16:e.prev=16,e.t0=e["catch"](7);case 18:return e.abrupt("return",n);case 19:case"end":return e.stop()}}),e,null,[[7,16]])})));function t(t){return e.apply(this,arguments)}return t}(),getGroups:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=[],e.next=3,this.getWorkspaces(t);case 3:r=e.sent,r.length>0&&(console.log(t,r),r.forEach(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("gouvernance"!=t.name){e.next=10;break}return console.log(t.name,t.path,t.subject),r=t.path+"groups",console.log("groups_folder",r),e.next=6,p.readFolder(r);case 6:return s=e.sent,n=s.files,console.log("GGGGGGGRRRRoups 2",n),e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getTensions:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=[],e.next=3,this.getWorkspaces(t);case 3:return r=e.sent,r.length>0&&(console.log(t,r),r.forEach(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log(t.name,t.path,t.subject),"gouvernance"!=t.name){e.next=9;break}return r=t.path+"tensions",console.log("TTTTTTTTTension folder",r),e.next=6,p.readFolder(r);case 6:s=e.sent,n=s.files,console.log("TTTTTENSIONS",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),addIndex:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n,r){var s,i,c,u,l,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t+"/index.ttl#this",i=new Date,c=i.toISOString(),u=this.$store.state.solid.indexes.puti,e.next=6,Object(a["b"])(u.url);case 6:return l=e.sent,e.next=9,l.addSubject();case 9:return p=e.sent,p.addLiteral(o["e"].label,r),p.addNodeRef("http://www.w3.org/ns/solid/terms#forClass",n),p.addNodeRef("http://www.w3.org/ns/solid/terms#instance",s),p.addLiteral(o["a"].created,c),e.next=16,l.save();case 16:case"end":return e.stop()}}),e,this)})));function t(t,n,r){return e.apply(this,arguments)}return t}(),getIndexes:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,r,i,c,u,l,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={puti:{instances:[],classes:[]},prti:{instances:[],classes:[]}},e.prev=1,e.next=4,Object(a["b"])(t);case 4:return r=e.sent,i=r.getSubject(t),e.next=8,i.getNodeRef("http://www.w3.org/ns/solid/terms#publicTypeIndex");case 8:return c=e.sent,e.next=11,i.getNodeRef("http://www.w3.org/ns/solid/terms#privateTypeIndex");case 11:return u=e.sent,n.puti.url=c,n.prti.url=u,e.next=16,Object(a["b"])(c);case 16:return l=e.sent,e.next=19,l.findSubjects("http://www.w3.org/ns/solid/terms#forClass");case 19:p=e.sent,p.forEach(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r,s,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getRef("http://www.w3.org/ns/solid/terms#forClass");case 2:return r=e.sent,e.next=5,t.getRef("http://www.w3.org/ns/solid/terms#instance");case 5:return s=e.sent,e.next=8,t.getString(o["a"].created);case 8:return a=e.sent,e.next=11,t.getString(o["e"].label);case 11:i=e.sent,n.puti.instances.push({instance:s,classe:r,label:i,created:a}),void 0==n.puti.classes[r]&&(n.puti.classes[r]=[]),n.puti.classes[r].push(s);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=25;break;case 23:e.prev=23,e.t0=e["catch"](1);case 25:return console.log(t,n),e.abrupt("return",n);case 27:case"end":return e.stop()}}),e,null,[[1,23]])})));function t(t){return e.apply(this,arguments)}return t}(),makeToast:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(t,{title:e,variant:n,solid:!0})}}}},"6bbb":function(e,t,n){"use strict";n("c7e6")},b3b2:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fofri container"},[null!=e.webId?n("div",[n("h5",[e._v("FoFri ! The following friends tool...")]),e._v(" Current : "),n("small",[e._v(e._s(e.webId))]),n("br"),e._v(" "+e._s(e.friends.length)+" friends"),n("br"),n("div",{staticClass:"row"},[e._v(" Public Instances "),n("b-list-group",e._l(e.indexes.puti.instances,(function(t){return n("div",{key:t.instance,staticClass:"container fluid mb-3"},[n("b-list-group-item",{attrs:{to:{name:"FoFri",params:{instance:t}}}},[e._v(" label : "+e._s(t.label)),n("br"),e._v(" instance : "+e._s(t.instance)),n("br"),e._v(" classe : "+e._s(t.classe)),n("br"),e._v(" created : "+e._s(t.created)),n("br")]),n("small",{staticClass:"row"},[n("a",{attrs:{href:t.instance,target:"_blank"}},[e._v(e._s(t.instance))])])],1)})),0)],1),n("b-button",{attrs:{to:e.link,variant:"outline-info"}},[e._v("add Spoggy to your friends")]),n("br"),n("router-link",{attrs:{to:{name:"FoFri"}}},[e._v("Me")]),n("br"),n("router-link",{attrs:{to:{name:"FoFri",params:{webId:"https://spoggy.solidcommunity.net/profile/card#me"}}}},[e._v("spoggy")]),n("br"),n("router-link",{attrs:{to:{name:"FoFri",params:{webId:"https://spoggy-test.solidcommunity.net/profile/card#me"}}}},[e._v("spoggy-test6")]),n("br"),n("hr"),n("b-list-group",e._l(e.friends,(function(t){return n("div",{key:t,staticClass:"container fluid mb-3"},[n("b-list-group-item",{attrs:{to:{name:"FoFri",params:{webId:t}}}},[n("div",[n("PeopleItem",{attrs:{webId:t}})],1)]),n("small",{staticClass:"row"},[n("a",{attrs:{href:t,target:"_blank"}},[e._v(e._s(t))])])],1)})),0)],1):n("div",[n("SolidLoginButton")],1)])},s=[],a=n("1da1"),o=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("4380")),i={name:"FoFri",mixins:[o["a"]],components:{PeopleItem:function(){return n.e("chunk-2d0c9199").then(n.bind(null,"5866"))},SolidLoginButton:function(){return n.e("chunk-03f7630c").then(n.bind(null,"e9a1"))}},data:function(){return{webId:{},friends:[],indexes:{puti:{instances:[]}}}},created:function(){this.webId=this.$route.params.webId||this.$store.state.solid.webId,this.updateFriends(),this.updateIndexes()},watch:{$route:function(e){this.webId=e.params.webId||this.$store.state.solid.webId,this.updateFriends(),this.updateIndexes()}},methods:{updateFriends:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getFriends(e.webId);case 2:e.friends=t.sent;case 3:case"end":return t.stop()}}),t)})))()},updateIndexes:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("TODO : temporary commented to see where to put it",e.indexes);case 1:case"end":return t.stop()}}),t)})))()}},computed:{link:function(){console.log("route",this.$route,location.href);var e=location.protocol+location.host+location.pathname+"?add=https://spoggy.solidcommunity.net/profile/card#me";return e}}},c=i,u=(n("6bbb"),n("2877")),l=Object(u["a"])(c,r,s,!1,null,null,null);t["default"]=l.exports},c7e6:function(e,t,n){}}]);
//# sourceMappingURL=friends_follower.366f4cf4.js.map