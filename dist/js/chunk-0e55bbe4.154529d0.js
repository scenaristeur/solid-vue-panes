(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e55bbe4"],{"3d4f":function(t,e,s){"use strict";var a=s("b72d"),i=s.n(a);i.a},b72d:function(t,e,s){},bc19:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modele-view"},[s("a",{attrs:{href:t.object_url}},[t._v(" "+t._s(t.label)+" ")]),s("b-button",{attrs:{to:{name:"View",params:{url:t.object_url}},variant:"outline-info"}},[t._v(t._s(t.label)+" "),s("b-icon",{attrs:{icon:"eye","aria-hidden":"true",variant:"info"}})],1),s("p",[t._v(" "+t._s(t.summary)+" "),s("small",[t._v(" "+t._s(t.created)+" ")])])],1)},i=[],r=s("6dc1"),n={name:"SubjectToArticle",props:["subject"],data:function(){return{}},created:function(){this.label=this.subject.getString(r["e"].label),this.created=this.subject.getString(r["a"].created),this.type=this.subject.getNodeRef(r["d"].type),this.summary=this.subject.getLiteral("https://www.w3.org/ns/activitystreams#summary"),this.maker=this.subject.getNodeRef(r["b"].maker)||"anonymous",this.object_url=this.subject.getNodeRef("https://www.w3.org/ns/activitystreams#object")},methods:{},watch:{},computed:{}},c=n,u=(s("3d4f"),s("2877")),o=Object(u["a"])(c,a,i,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-0e55bbe4.154529d0.js.map