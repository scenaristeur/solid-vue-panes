(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20fb4a"],{b589:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-list container"},[n("b-button",{staticClass:"update-button",attrs:{size:"sm",variant:"info"},on:{click:t.updatePosts}},[n("b-icon-arrow-repeat")],1),n("b-list-group",t._l(t.folder.files,(function(e){return n("b-list-group-item",{key:e.url},[n("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.name))]),n("PostFile",{attrs:{file:e}})],1)})),1)],1)},r=[],o=(n("d3b7"),n("96cf"),n("1da1")),a=n("00e8"),i=n.n(a),u=window.SolidFileClient,l=new u(i.a),c={name:"PostList",components:{PostFile:function(){return n.e("chunk-2d0c8847").then(n.bind(null,"54e7"))}},props:["value"],data:function(){return{folder:{files:[]}}},created:function(){this.storage=this.$store.state.solid.storage,this.updatePosts()},watch:{storage:function(t){console.log(t),this.updatePosts()}},methods:{updatePosts:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.storage.length>0)){e.next=5;break}return n=t.storage+"public/blog/",e.next=4,l.readFolder(n);case 4:t.folder=e.sent;case 5:case"end":return e.stop()}}),e)})))()}},computed:{storage:{get:function(){return this.$store.state.solid.storage},set:function(){}}}},d=c,f=n("2877"),p=Object(f["a"])(d,s,r,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d20fb4a.fdda2d9a.js.map