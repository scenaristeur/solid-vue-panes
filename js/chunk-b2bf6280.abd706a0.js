(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b2bf6280"],{"159b":function(e,t,r){var n=r("da84"),a=r("fdbc"),s=r("17c2"),i=r("9112");for(var c in a){var o=n[c],u=o&&o.prototype;if(u&&u.forEach!==s)try{i(u,"forEach",s)}catch(l){u.forEach=s}}},"17c2":function(e,t,r){"use strict";var n=r("b727").forEach,a=r("a640"),s=r("ae40"),i=a("forEach"),c=s("forEach");e.exports=i&&c?[].forEach:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}},4160:function(e,t,r){"use strict";var n=r("23e7"),a=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},4380:function(e,t,r){"use strict";r("4160"),r("b0c0"),r("159b"),r("96cf");var n=r("1da1"),a=r("4d8d"),s=r("6dc1"),i=window.solid;t["a"]={methods:{getProfile:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n,c,o,u,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={friends:[]},r.webId=t,e.prev=2,e.next=5,Object(a["b"])(t);case 5:return n=e.sent,c=n.getSubject(t),e.next=9,c.getString(s["h"].fn);case 9:return r.name=e.sent,e.next=12,c.getString("http://www.w3.org/2006/vcard/ns#organization-name");case 12:return r.organization=e.sent,e.next=15,c.getString(s["h"].role);case 15:return r.role=e.sent,e.next=18,c.getRef(s["h"].hasAddress);case 18:if(o=e.sent,null==o){e.next=24;break}return u=n.getSubject(o),e.next=23,u.getString(s["h"].locality);case 23:r.locality=e.sent;case 24:return e.next=26,i.data[t].vcard$hasPhoto;case 26:l=e.sent,r.photo="".concat(l),e.next=33;break;case 30:e.prev=30,e.t0=e["catch"](2),this.makeToast(e.t0.message,t,"warning");case 33:return e.abrupt("return",r);case 34:case"end":return e.stop()}}),e,this,[[2,30]])})));function t(t){return e.apply(this,arguments)}return t}(),getInbox:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=[],e.prev=1,e.next=4,Object(a["b"])(t);case 4:return n=e.sent,i=n.getSubject(t),e.next=8,i.getAllRefs(s["c"].inbox);case 8:r=e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),this.makeToast(e.t0.message,t,"warning");case 14:return e.abrupt("return",r);case 15:case"end":return e.stop()}}),e,this,[[1,11]])})));function t(t){return e.apply(this,arguments)}return t}(),getFriends:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=[],e.prev=1,e.next=4,Object(a["b"])(t);case 4:return n=e.sent,i=n.getSubject(t),e.next=8,i.getAllRefs(s["b"].knows);case 8:r=e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),this.makeToast(e.t0.message,t,"warning");case 14:return e.abrupt("return",r);case 15:case"end":return e.stop()}}),e,this,[[1,11]])})));function t(t){return e.apply(this,arguments)}return t}(),addIndex:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r,n){var i,c,o,u,l,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t+"/index.ttl#this",c=new Date,o=c.toISOString(),u=this.$store.state.solid.indexes.puti,e.next=6,Object(a["b"])(u.url);case 6:return l=e.sent,e.next=9,l.addSubject();case 9:return f=e.sent,f.addLiteral(s["e"].label,n),f.addNodeRef("http://www.w3.org/ns/solid/terms#forClass",r),f.addNodeRef("http://www.w3.org/ns/solid/terms#instance",i),f.addLiteral(s["a"].created,o),e.next=16,l.save();case 16:case"end":return e.stop()}}),e,this)})));function t(t,r,n){return e.apply(this,arguments)}return t}(),getIndexes:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,i,c,o,u,l,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={puti:{instances:[],classes:[]},prti:{instances:[],classes:[]}},e.prev=1,e.next=4,Object(a["b"])(t);case 4:return i=e.sent,c=i.getSubject(t),e.next=8,c.getNodeRef("http://www.w3.org/ns/solid/terms#publicTypeIndex");case 8:return o=e.sent,e.next=11,c.getNodeRef("http://www.w3.org/ns/solid/terms#privateTypeIndex");case 11:return u=e.sent,r.puti.url=o,r.prti.url=u,e.next=16,Object(a["b"])(o);case 16:return l=e.sent,e.next=19,l.findSubjects("http://www.w3.org/ns/solid/terms#forClass");case 19:f=e.sent,f.forEach(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var n,a,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getRef("http://www.w3.org/ns/solid/terms#forClass");case 2:return n=e.sent,e.next=5,t.getRef("http://www.w3.org/ns/solid/terms#instance");case 5:return a=e.sent,e.next=8,t.getString(s["a"].created);case 8:return i=e.sent,e.next=11,t.getString(s["e"].label);case 11:c=e.sent,r.puti.instances.push({instance:a,classe:n,label:c,created:i}),void 0==r.puti.classes[n]&&(r.puti.classes[n]=[]),r.puti.classes[n].push(a);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=25;break;case 23:e.prev=23,e.t0=e["catch"](1);case 25:return console.log(t,r),e.abrupt("return",r);case 27:case"end":return e.stop()}}),e,null,[[1,23]])})));function t(t){return e.apply(this,arguments)}return t}(),makeToast:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(t,{title:e,variant:r,solid:!0})}}}},"4e86":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:e.profile.name,"img-src":e.profile.photo,"img-alt":"Image","img-top":"",tag:"article"}},[r("b-card-text",[r("a",{attrs:{href:e.webId,target:"_blank"}},[e._v(e._s(e.webId))])]),e.profile.organization?r("p",[e._v("Organization: "+e._s(e.profile.organization))]):e._e(),e.profile.role?r("p",[e._v("Role: "+e._s(e.profile.role))]):e._e(),e.profile.gender?r("p",[e._v("Gender: "+e._s(e.profile.gender))]):e._e(),e.profile.bday?r("p",[e._v("Birthday: "+e._s(e.profile.bday))]):e._e(),e.profile.note?r("p",[e._v("Note: "+e._s(e.profile.note))]):e._e(),e.profile.locality?r("p",[e._v("Locality: "+e._s(e.profile.locality))]):e._e(),r("div",[e.friends.length>0?r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-1",modifiers:{"collapse-1":!0}}],attrs:{variant:"primary"}},[e._v(e._s(e.friends.length)+" friends")]):e._e(),r("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-1"}},[r("b-card",e._l(e.friends,(function(t){return r("p",{key:t,staticClass:"card-text",attrs:{webId:t}},[r("router-link",{attrs:{to:{name:"ProfileW",params:{webId:t}}}},[e._v(e._s(t))])],1)})),0)],1)],1)],1)],1)},a=[],s=(r("96cf"),r("1da1")),i=r("4380"),c={name:"Person",props:{webId:String},mixins:[i["a"]],data:function(){return{profile:{},friends:[]}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getProfile(e.webId);case 2:return e.profile=t.sent,t.next=5,e.getFriends(e.webId);case 5:e.friends=t.sent;case 6:case"end":return t.stop()}}),t)})))()}},o=c,u=r("2877"),l=Object(u["a"])(o,n,a,!1,null,null,null);t["default"]=l.exports},"65f0":function(e,t,r){var n=r("861d"),a=r("e8b5"),s=r("b622"),i=s("species");e.exports=function(e,t){var r;return a(e)&&(r=e.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?n(r)&&(r=r[i],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},a640:function(e,t,r){"use strict";var n=r("d039");e.exports=function(e,t){var r=[][e];return!!r&&n((function(){r.call(null,t||function(){throw 1},1)}))}},ae40:function(e,t,r){var n=r("83ab"),a=r("d039"),s=r("5135"),i=Object.defineProperty,c={},o=function(e){throw e};e.exports=function(e,t){if(s(c,e))return c[e];t||(t={});var r=[][e],u=!!s(t,"ACCESSORS")&&t.ACCESSORS,l=s(t,0)?t[0]:o,f=s(t,1)?t[1]:void 0;return c[e]=!!r&&!a((function(){if(u&&!n)return!0;var e={length:-1};u?i(e,1,{enumerable:!0,get:o}):e[1]=1,r.call(e,l,f)}))}},b727:function(e,t,r){var n=r("0366"),a=r("44ad"),s=r("7b0b"),i=r("50c4"),c=r("65f0"),o=[].push,u=function(e){var t=1==e,r=2==e,u=3==e,l=4==e,f=6==e,p=5==e||f;return function(d,g,h,b){for(var w,v,m=s(d),x=a(m),S=n(g,h,3),y=i(x.length),L=0,R=b||c,_=t?R(d,y):r?R(d,0):void 0;y>L;L++)if((p||L in x)&&(w=x[L],v=S(w,L,m),e))if(t)_[L]=v;else if(v)switch(e){case 3:return!0;case 5:return w;case 6:return L;case 2:o.call(_,w)}else if(l)return!1;return f?-1:u||l?l:_}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},e8b5:function(e,t,r){var n=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-b2bf6280.abd706a0.js.map