(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b046303e"],{"4e86":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:e.profile.name,"img-src":e.profile.photo,"img-alt":"Image","img-top":"",tag:"article"}},[r("b-card-text",[r("a",{attrs:{href:e.webId,target:"_blank"}},[e._v(e._s(e.webId))])]),e.profile.organization?r("p",[e._v("Organization: "+e._s(e.profile.organization))]):e._e(),e.profile.role?r("p",[e._v("Role: "+e._s(e.profile.role))]):e._e(),e.profile.gender?r("p",[e._v("Gender: "+e._s(e.profile.gender))]):e._e(),e.profile.bday?r("p",[e._v("Birthday: "+e._s(e.profile.bday))]):e._e(),e.profile.note?r("p",[e._v("Note: "+e._s(e.profile.note))]):e._e(),e.profile.locality?r("p",[e._v("Locality: "+e._s(e.profile.locality))]):e._e(),r("div",[e.profile.friends.length>0?r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-1",modifiers:{"collapse-1":!0}}],attrs:{variant:"primary"}},[e._v(e._s(e.profile.friends.length)+" friends")]):e._e(),r("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-1"}},[r("b-card",e._l(e.profile.friends,(function(t){return r("p",{key:t,staticClass:"card-text",attrs:{webId:t}},[e._v(e._s(t))])})),0)],1)],1)],1)],1)},a=[],i=(r("96cf"),r("1da1")),o=(r("b0c0"),r("4d8d")),s=r("6dc1"),c=window.solid,l={created:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),methods:{hello:function(){},getProfile:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={},r.webId=t,e.prev=2,e.next=5,Object(o["a"])(t);case 5:return n=e.sent,a=n.getSubject(t),e.next=9,a.getString(s["b"].fn);case 9:return r.name=e.sent,e.next=12,a.getString("http://www.w3.org/2006/vcard/ns#organization-name");case 12:return r.organization=e.sent,e.next=15,a.getString(s["b"].role);case 15:return r.role=e.sent,e.next=18,a.getAllRefs(s["a"].knows);case 18:return r.friends=e.sent,e.next=21,c.data[t].vcard$hasPhoto;case 21:i=e.sent,r.photo="".concat(i),console.log(r),e.next=28;break;case 26:e.prev=26,e.t0=e["catch"](2);case 28:return e.abrupt("return",r);case 29:case"end":return e.stop()}}),e,null,[[2,26]])})));function t(t){return e.apply(this,arguments)}return t}()}},p={name:"NavBar",props:{webId:String},mixins:[l],components:{},data:function(){return{profile:{}}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.hello(),t.next=3,e.getProfile(e.webId);case 3:e.profile=t.sent;case 4:case"end":return t.stop()}}),t)})))()}},u=p,f=(r("eda8"),r("2877")),d=Object(f["a"])(u,n,a,!1,null,"b18f3d54",null);t["default"]=d.exports},"9d02":function(e,t,r){},eda8:function(e,t,r){"use strict";var n=r("9d02"),a=r.n(n);a.a}}]);
//# sourceMappingURL=chunk-b046303e.0cb59193.js.map