(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["testrouter"],{"6bbb":function(e,t,s){"use strict";var r=s("c7e6"),n=s.n(r);n.a},b3b2:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"fofri container"},[s("h5",[e._v("FoFri ! The following friends tool...")]),e._v(" Current : "),s("small",[e._v(e._s(e.webId))]),s("br"),e._v(" "+e._s(e.friends.length)+" friends"),s("br"),s("div",{staticClass:"row"},[e._v(" Public Instances "),s("b-list-group",e._l(e.indexes.puti.instances,(function(t){return s("div",{key:t.instance,staticClass:"container fluid mb-3"},[s("b-list-group-item",{attrs:{to:{name:"FoFri",params:{instance:t}}}},[e._v(" label : "+e._s(t.label)),s("br"),e._v(" instance : "+e._s(t.instance)),s("br"),e._v(" classe : "+e._s(t.classe)),s("br"),e._v(" created : "+e._s(t.created)),s("br")]),s("small",{staticClass:"row"},[s("a",{attrs:{href:t.instance,target:"_blank"}},[e._v(e._s(t.instance))])])],1)})),0)],1),s("router-link",{attrs:{to:{name:"FoFri"}}},[e._v("Me")]),s("br"),s("router-link",{attrs:{to:{name:"FoFri",params:{webId:"https://spoggy.solid.community/profile/card#me"}}}},[e._v("spoggy")]),e._v(" --\x3e "),s("b-button",{attrs:{disabled:""}},[e._v("add Spoggy to your friends")]),s("br"),s("router-link",{attrs:{to:{name:"FoFri",params:{webId:"https://spoggy-test.solid.community/profile/card#me"}}}},[e._v("spoggy-test6")]),s("br"),s("hr"),s("b-list-group",e._l(e.friends,(function(t){return s("div",{key:t,staticClass:"container fluid mb-3"},[s("b-list-group-item",{attrs:{to:{name:"FoFri",params:{webId:t}}}},[s("div",[s("PeopleItem",{attrs:{webId:t}})],1)]),s("small",{staticClass:"row"},[s("a",{attrs:{href:t,target:"_blank"}},[e._v(e._s(t))])])],1)})),0)],1)},n=[],a=(s("d3b7"),s("96cf"),s("1da1")),i=s("4380"),o={name:"FoFri",mixins:[i["a"]],components:{PeopleItem:function(){return s.e("chunk-2d0c9199").then(s.bind(null,"5866"))}},data:function(){return{webId:{},friends:[],indexes:{puti:{instances:[]}}}},created:function(){this.webId=this.$route.params.webId||this.$store.state.solid.webId,this.updateFriends(),this.updateIndexes()},watch:{$route:function(e){this.webId=e.params.webId||this.$store.state.solid.webId,this.updateFriends(),this.updateIndexes()}},methods:{updateFriends:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getFriends(e.webId);case 2:e.friends=t.sent;case 3:case"end":return t.stop()}}),t)})))()},updateIndexes:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("TODO : temporary commented to see where to put it",e.indexes);case 1:case"end":return t.stop()}}),t)})))()}}},c=o,d=(s("6bbb"),s("2877")),u=Object(d["a"])(c,r,n,!1,null,null,null);t["default"]=u.exports},c7e6:function(e,t,s){}}]);
//# sourceMappingURL=testrouter.ea78f018.js.map