(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e60e6cd"],{"5d5a":function(t,e,s){"use strict";s.r(e);var u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modele-view"},[t._v(" subj : "+t._s(t.subject)),s("br"),t._v(" url : "+t._s(t.url)+" "),s("GroupDisplay",{attrs:{file:t.file}})],1)},n=[],i=(s("d3b7"),s("6dc1")),l={name:"GroupView",components:{GroupDisplay:function(){return s.e("chunk-acc8c602").then(s.bind(null,"0a49"))}},props:["subject","url"],data:function(){return{file:{}}},created:function(){this.file={url:this.url},console.log("Subject",this.subject),this.label=this.subject.getLiteral(i["i"].fn),this.types=this.subject.getAllRefs(i["d"].type),this.purpose=this.subject.getAllLiterals("http://www.w3.org/ns/org#purpose")}},c=l,r=(s("d81f"),s("2877")),o=Object(r["a"])(c,u,n,!1,null,null,null);e["default"]=o.exports},d81f:function(t,e,s){"use strict";var u=s("e371"),n=s.n(u);n.a},e371:function(t,e,s){}}]);
//# sourceMappingURL=chunk-1e60e6cd.d2be66b8.js.map