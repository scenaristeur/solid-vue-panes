(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31d1ede0"],{"159b":function(e,t,r){var n=r("da84"),a=r("fdbc"),s=r("17c2"),i=r("9112");for(var c in a){var o=n[c],u=o&&o.prototype;if(u&&u.forEach!==s)try{i(u,"forEach",s)}catch(l){u.forEach=s}}},"17c2":function(e,t,r){"use strict";var n=r("b727").forEach,a=r("a640"),s=r("ae40"),i=a("forEach"),c=s("forEach");e.exports=i&&c?[].forEach:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}},3024:function(e,t,r){"use strict";var n=r("bd4a"),a=r.n(n);a.a},4160:function(e,t,r){"use strict";var n=r("23e7"),a=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},4380:function(e,t,r){"use strict";r("4160"),r("b0c0"),r("159b"),r("96cf");var n=r("1da1"),a=r("4d8d"),s=r("6dc1"),i=window.solid;t["a"]={methods:{getProfile:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n,c,o,u,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={friends:[]},r.webId=t,e.prev=2,e.next=5,Object(a["b"])(t);case 5:return n=e.sent,c=n.getSubject(t),e.next=9,c.getString(s["i"].fn);case 9:return r.name=e.sent,e.next=12,c.getString("http://www.w3.org/2006/vcard/ns#organization-name");case 12:return r.organization=e.sent,e.next=15,c.getString(s["i"].role);case 15:return r.role=e.sent,e.next=18,c.getRef(s["i"].hasAddress);case 18:if(o=e.sent,null==o){e.next=24;break}return u=n.getSubject(o),e.next=23,u.getString(s["i"].locality);case 23:r.locality=e.sent;case 24:return e.next=26,i.data[t].vcard$hasPhoto;case 26:l=e.sent,r.photo="".concat(l),e.next=33;break;case 30:e.prev=30,e.t0=e["catch"](2),this.makeToast(e.t0.message,t,"warning");case 33:return e.abrupt("return",r);case 34:case"end":return e.stop()}}),e,this,[[2,30]])})));function t(t){return e.apply(this,arguments)}return t}(),getInboxUrls:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=[],e.prev=1,e.next=4,Object(a["b"])(t);case 4:return n=e.sent,i=n.getSubject(t),e.next=8,i.getAllRefs(s["c"].inbox);case 8:r=e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),this.makeToast(e.t0.message,t,"warning");case 14:return e.abrupt("return",r);case 15:case"end":return e.stop()}}),e,this,[[1,11]])})));function t(t){return e.apply(this,arguments)}return t}(),getFriends:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=[],e.prev=1,e.next=4,Object(a["b"])(t);case 4:return n=e.sent,i=n.getSubject(t),e.next=8,i.getAllRefs(s["b"].knows);case 8:r=e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),this.makeToast(e.t0.message,t,"warning");case 14:return e.abrupt("return",r);case 15:case"end":return e.stop()}}),e,this,[[1,11]])})));function t(t){return e.apply(this,arguments)}return t}(),addIndex:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r,n){var i,c,o,u,l,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t+"/index.ttl#this",c=new Date,o=c.toISOString(),u=this.$store.state.solid.indexes.puti,e.next=6,Object(a["b"])(u.url);case 6:return l=e.sent,e.next=9,l.addSubject();case 9:return d=e.sent,d.addLiteral(s["e"].label,n),d.addNodeRef("http://www.w3.org/ns/solid/terms#forClass",r),d.addNodeRef("http://www.w3.org/ns/solid/terms#instance",i),d.addLiteral(s["a"].created,o),e.next=16,l.save();case 16:case"end":return e.stop()}}),e,this)})));function t(t,r,n){return e.apply(this,arguments)}return t}(),getIndexes:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,i,c,o,u,l,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={puti:{instances:[],classes:[]},prti:{instances:[],classes:[]}},e.prev=1,e.next=4,Object(a["b"])(t);case 4:return i=e.sent,c=i.getSubject(t),e.next=8,c.getNodeRef("http://www.w3.org/ns/solid/terms#publicTypeIndex");case 8:return o=e.sent,e.next=11,c.getNodeRef("http://www.w3.org/ns/solid/terms#privateTypeIndex");case 11:return u=e.sent,r.puti.url=o,r.prti.url=u,e.next=16,Object(a["b"])(o);case 16:return l=e.sent,e.next=19,l.findSubjects("http://www.w3.org/ns/solid/terms#forClass");case 19:d=e.sent,d.forEach(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var n,a,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getRef("http://www.w3.org/ns/solid/terms#forClass");case 2:return n=e.sent,e.next=5,t.getRef("http://www.w3.org/ns/solid/terms#instance");case 5:return a=e.sent,e.next=8,t.getString(s["a"].created);case 8:return i=e.sent,e.next=11,t.getString(s["e"].label);case 11:c=e.sent,r.puti.instances.push({instance:a,classe:n,label:c,created:i}),void 0==r.puti.classes[n]&&(r.puti.classes[n]=[]),r.puti.classes[n].push(a);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=25;break;case 23:e.prev=23,e.t0=e["catch"](1);case 25:return console.log(t,r),e.abrupt("return",r);case 27:case"end":return e.stop()}}),e,null,[[1,23]])})));function t(t){return e.apply(this,arguments)}return t}(),makeToast:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(t,{title:e,variant:r,solid:!0})}}}},"4e86":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container fluid"},[r("div",{staticClass:"image-flip",attrs:{ontouchstart:"this.classList.toggle('hover');"}},[r("div",{staticClass:"mainflip"},[r("div",{staticClass:"frontside"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body text-center"},[r("p",[r("img",{staticClass:" img-fluid",attrs:{src:e.profile.photo,alt:"card image"}})]),r("h4",{staticClass:"card-title"},[e._v(e._s(e.profile.name||this.webId))]),e.profile.organization?r("p",{staticClass:"card-text"},[e._v("Organization: "+e._s(e.profile.organization))]):e._e(),e.profile.role?r("p",{staticClass:"card-text"},[e._v("Role: "+e._s(e.profile.role))]):e._e()])])]),r("div",{staticClass:"backside container fluid"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body text-center mt-4"},[r("h4",{staticClass:"card-title"},[r("a",{attrs:{href:e.webId,target:"_blank"}},[e._v(e._s(e.profile.name||this.webId))])]),e.profile.locality?r("p",{staticClass:"card-text"},[e._v("Locality: "+e._s(e.profile.locality))]):e._e(),e.profile.gender?r("p",{staticClass:"card-text"},[e._v("Gender: "+e._s(e.profile.gender))]):e._e(),e.profile.bday?r("p",{staticClass:"card-text"},[e._v("Birthday: "+e._s(e.profile.bday))]):e._e(),e.profile.note?r("p",{staticClass:"card-text"},[e._v("Note: "+e._s(e.profile.note))]):e._e(),r("ul",{staticClass:"list-inline"},[r("li",{staticClass:"list-inline-item"},[e.friends.length>0?r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-1",modifiers:{"collapse-1":!0}}],attrs:{variant:"primary"}},[e._v(e._s(e.friends.length)+" friends")]):e._e()],1)])])])])])])])},a=[],s=(r("96cf"),r("1da1")),i=r("4380"),c={name:"Person",props:{webId:String},mixins:[i["a"]],data:function(){return{profile:{},friends:[]}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getProfile(e.webId);case 2:return e.profile=t.sent,t.next=5,e.getFriends(e.webId);case 5:e.friends=t.sent;case 6:case"end":return t.stop()}}),t)})))()}},o=c,u=(r("3024"),r("2877")),l=Object(u["a"])(o,n,a,!1,null,"7efd0d65",null);t["default"]=l.exports},"65f0":function(e,t,r){var n=r("861d"),a=r("e8b5"),s=r("b622"),i=s("species");e.exports=function(e,t){var r;return a(e)&&(r=e.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?n(r)&&(r=r[i],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},a640:function(e,t,r){"use strict";var n=r("d039");e.exports=function(e,t){var r=[][e];return!!r&&n((function(){r.call(null,t||function(){throw 1},1)}))}},b727:function(e,t,r){var n=r("0366"),a=r("44ad"),s=r("7b0b"),i=r("50c4"),c=r("65f0"),o=[].push,u=function(e){var t=1==e,r=2==e,u=3==e,l=4==e,d=6==e,f=5==e||d;return function(p,g,h,v){for(var b,w,m=s(p),x=a(m),S=n(g,h,3),y=i(x.length),L=0,C=v||c,R=t?C(p,y):r?C(p,0):void 0;y>L;L++)if((f||L in x)&&(b=x[L],w=S(b,L,m),e))if(t)R[L]=w;else if(w)switch(e){case 3:return!0;case 5:return b;case 6:return L;case 2:o.call(R,b)}else if(l)return!1;return d?-1:u||l?l:R}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},bd4a:function(e,t,r){},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-31d1ede0.31763bf3.js.map