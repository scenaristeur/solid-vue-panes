(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f30559a2"],{"44ae":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"groups-view"},[e._v(" workspace : "+e._s(e.workspace)+" "),r("br"),e._v(" folder_path : "+e._s(e.folder_path)),r("br"),e._v(" folder : "+e._s(e.folder)),r("br"),r("b-card-group",{attrs:{deck:""}},e._l(e.folder.folders,(function(e){return r("GroupCard",{key:e.url,attrs:{item:e}})})),1)],1)},n=[],s=(r("d3b7"),r("96cf"),r("1da1")),c=r("00e8"),a=r.n(c),i=window.SolidFileClient,u=new i(a.a),l={name:"GroupsList",components:{GroupCard:function(){return r.e("chunk-2d21789e").then(r.bind(null,"c6c8"))}},data:function(){return{folder_path:"",folder:{},config:{classe:"Group"}}},created:function(){this.workspace=this.$store.state.crud.workspace,this.setFolderPath()},watch:{workspace:function(e){console.log(e),this.setFolderPath()},folder_path:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,u.readFolder(e);case 2:t.folder=r.sent,console.log("FOLDER",t.folder),t.$store.commit("gouvernance/setGroups",t.folder);case 5:case"end":return r.stop()}}),r)})))()}},computed:{webId:{get:function(){return this.$store.state.solid.webId},set:function(){}},workspace:{get:function(){return this.$store.state.crud.workspace},set:function(){}}},methods:{setFolderPath:function(){this.folder_path=this.workspace+this.config.classe+"/",console.log("FP",this.folder_path)}}},d=l,f=(r("8c3e"),r("2877")),p=Object(f["a"])(d,o,n,!1,null,null,null);t["default"]=p.exports},"8c3e":function(e,t,r){"use strict";var o=r("8f81"),n=r.n(o);n.a},"8f81":function(e,t,r){}}]);
//# sourceMappingURL=chunk-f30559a2.31541860.js.map