(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-96cf5244"],{"4de4":function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").filter,o=r("1dde"),i=r("ae40"),s=o("filter"),c=i("filter");n({target:"Array",proto:!0,forced:!s||!c},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},c975:function(t,e,r){"use strict";var n=r("23e7"),a=r("4d64").indexOf,o=r("a640"),i=r("ae40"),s=[].indexOf,c=!!s&&1/[1].indexOf(1,-0)<0,l=o("indexOf"),u=i("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:c||!l||!u},{indexOf:function(t){return c?s.apply(this,arguments)||0:a(this,t,arguments.length>1?arguments[1]:void 0)}})},dfa2:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bookmarks-list container"},[r("b-button",{attrs:{variant:"outline-info"},on:{click:function(e){return t.updateBm()}}},[t._v("Back to "+t._s(t.mode)+"/bookmarks/")]),r("br"),r("h5",[t._v("Bookmarks :")]),r("div",[r("b-card-group",{attrs:{columns:""}},t._l(t.bookmarks,(function(e){return r("b-card",{key:e.id,attrs:{"img-src":e.img,"img-alt":"Image","img-top":""}},[r("b-card-title",[t._v(t._s(e.label))]),r("b-card-text",[t._v(" "+t._s(e.content)+" ")]),r("b-card-text",{staticClass:"small text-muted"},[r("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.url))])])],1)})),1)],1),r("h5",[t._v("Categories :")]),t._l(t.bm.folders,(function(e){return r("b-button",{key:e.url,staticClass:"m-1",attrs:{variant:"info"},on:{click:function(r){return t.updateBm(e.url)}}},[t._v(t._s(e.name))])}))],2)},a=[],o=(r("4de4"),r("c975"),r("b85c")),i=(r("96cf"),r("1da1")),s=r("00e8"),c=r.n(s),l=r("4d8d"),u=r("6dc1"),d=window.SolidFileClient,f=new d(c.a),m={name:"BookmarksList",components:{},props:["mode"],data:function(){return{bm:{files:[],folders:[]},bookmarks:[]}},mounted:function(){this.path=this.$store.state.solid.storage+this.mode+"/bookmarks/",this.updateBm()},watch:{path:function(){this.updateBm()},storage:function(t){this.path=t+this.mode+"/bookmarks/"}},methods:{updateBm:function(){var t=arguments,e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,a,i,s,c,d,m,b,h;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:e.path,a={files:[],folders:[]},i=[],r.prev=3,r.next=6,f.readFolder(n);case 6:if(a=r.sent,!(a.files.length>0)){r.next=15;break}return r.next=10,Object(l["b"])(a.files[0].url);case 10:s=r.sent,c=s.findSubjects(),c=c.filter(e.onlyUnique),d=Object(o["a"])(c);try{for(d.s();!(m=d.n()).done;)b=m.value,h={id:b.asRef(),content:b.getLiteral(u["g"].content),label:b.getLiteral(u["e"].label),url:b.getNodeRef("http://www.w3.org/2002/01/bookmark#recalls")},h.img="//image.thum.io/get/width/355/crop/600/"+h.url,i.unshift(h)}catch(k){d.e(k)}finally{d.f()}case 15:r.next=19;break;case 17:r.prev=17,r.t0=r["catch"](3);case 19:e.bm=a,e.bookmarks=i;case 21:case"end":return r.stop()}}),r,null,[[3,17]])})))()},onlyUnique:function(t,e,r){return r.indexOf(t)===e}},computed:{storage:function(){return this.$store.state.solid.storage}}},b=m,h=r("2877"),k=Object(h["a"])(b,n,a,!1,null,null,null);e["default"]=k.exports}}]);
//# sourceMappingURL=chunk-96cf5244.dfea15d8.js.map