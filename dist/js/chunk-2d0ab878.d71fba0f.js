(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab878"],{1652:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modele-view container"},[n("h3",[e._v(e._s(e.details.label))]),n("b",[e._v("What Is :")]),e._v(" "+e._s(e.details.wi)),n("br"),n("b",[e._v("What should be :")]),e._v(" "+e._s(e.details.wsb)),n("br"),n("Domains",{attrs:{domains:e.details.domains}}),n("Toolbar",{attrs:{item:e.details}}),e._v(" created "+e._s(e.details.created)),n("br")],1)},a=[],s=(n("d3b7"),n("96cf"),n("1da1")),i=n("18cc"),o={name:"TensionItem",mixins:[i["a"]],components:{Toolbar:function(){return n.e("chunk-d6dff6ee").then(n.bind(null,"02ea"))},Domains:function(){return n.e("chunk-2d0b37d0").then(n.bind(null,"291d"))}},props:["tension"],data:function(){return{details:{}}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.currentWorkspace=e.$store.state.workspaces.currentWorkspace,void 0==e.currentWorkspace.path){t.next=4;break}return t.next=4,e.updateTension(e.tension);case 4:case"end":return t.stop()}}),t)})))()},watch:{},methods:{updateTension:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(console.log("updateTension"),void 0==e){n.next=5;break}return n.next=4,t.getTensionDetail(e);case 4:t.details=n.sent;case 5:case"end":return n.stop()}}),n)})))()}},computed:{currentWorkspace:{get:function(){return this.$store.state.workspaces.currentWorkspace},set:function(){}}}},c=o,u=n("2877"),d=Object(u["a"])(c,r,a,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0ab878.d71fba0f.js.map